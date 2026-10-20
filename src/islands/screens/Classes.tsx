import { createMemo, createSignal, For, Index, onCleanup, onMount, Show } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { createToast, Icon } from './shared'
import './Classes.css'

// Day 0 is Sun 11 Oct 2026; "today" is Sat 17 Oct (day 6). Grid rows are half hours from 4:00 PM.
const BASE = Date.UTC(2026, 9, 11)
const TODAY = 6
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dw = (d: number) => ((d % 7) + 7) % 7
const dayDate = (d: number) => new Date(BASE + d * 864e5)
const md = (d: number) => `${MON[dayDate(d).getUTCMonth()]} ${dayDate(d).getUTCDate()}`
const at = (row: number, plus = 0) => {
  const m = 16 * 60 + (row - 1) * 30 + plus
  const h = Math.floor(m / 60)
  return `${h % 12 || 12}:${String(m % 60).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
}

type Tpl = { n: string; c: string; cap: number; coach: string; room: string }
const tpls: Tpl[] = [
  { n: 'Spin', c: 'cl-sky', cap: 20, coach: 'Sara Ahmed', room: 'Spin Studio' },
  { n: 'HIIT', c: 'cl-em', cap: 20, coach: 'Ali Hassan', room: 'Studio A' },
  { n: 'Yoga Flow', c: 'cl-vi', cap: 15, coach: 'Noor Khalil', room: 'Studio B' },
  { n: 'Boxing', c: 'cl-ro', cap: 16, coach: 'Yousif Nasser', room: 'Boxing Ring' },
  { n: 'Body Pump', c: 'cl-am', cap: 20, coach: 'Sara Ahmed', room: 'Studio A' },
  { n: 'Pilates', c: 'cl-cy', cap: 12, coach: 'Noor Khalil', room: 'Studio B' },
  { n: 'Ladies Zumba', c: 'cl-fu', cap: 25, coach: 'Noor Khalil', room: 'Ladies Studio' },
]
const WOMEN = [
  'Mariam Hasan',
  'Zainab Ebrahim',
  'Fatima Al-Mahmood',
  'Noor Al-Sayed',
  'Reem Abdulla',
  'Huda Mohammed',
  'Latifa Saleh',
  'Dana Yusuf',
  'Nada Faisal',
  'Fatema Jasim',
  'Amal Hasan',
  'Maryam Ali',
  'Sara Mahdi',
  'Layla Yousif',
  'Hawra Ali',
  'Zahra Jaffar',
  'Manar Isa',
  'Shaikha Saleh',
  'Ruqaya Hasan',
  'Eman Khalil',
]
const POOL = [
  ...WOMEN.slice(0, 12),
  'Hussain Jaffar',
  'Yousif Abdulla',
  'Omar Haddad',
  'Ali Mansoor',
  'Ahmed Isa',
  'Hamad Isa',
  'Jassim Ahmed',
  'Salman Ebrahim',
  'Abbas Mahdi',
  'Mohammed Saeed',
  'Khalid Bucheeri',
  'Sayed Hashim',
  'Hasan Radhi',
  'Ebrahim Ali',
]
// [day of week, start row, template, booked, waitlisted, done] for the sample week.
const pattern: [number, number, number, number, number, boolean][] = [
  [0, 3, 0, 18, 0, false],
  [0, 7, 3, 12, 0, false],
  [1, 5, 1, 20, 2, false],
  [1, 9, 2, 9, 0, false],
  [2, 3, 0, 15, 0, false],
  [2, 7, 5, 10, 0, false],
  [3, 5, 3, 14, 0, false],
  [3, 9, 6, 17, 0, false],
  [4, 3, 1, 19, 0, false],
  [4, 7, 2, 12, 0, false],
  [5, 2, 4, 11, 0, false],
  [5, 8, 3, 16, 3, false],
  [6, 3, 0, 20, 0, true],
  [6, 5, 1, 12, 0, false],
  [6, 9, 2, 8, 0, false],
]
type Sess = { id: number; dow: number; row: number; t: number; booked: string[]; wait: string[]; done: boolean }
let uid = 0
const mkWeek = (w: number): Sess[] =>
  pattern.map(([dow, row, t, n, wl, done]) => {
    const id = ++uid
    const pool = t === 6 ? WOMEN : POOL
    const k = w > 0 ? Math.max(2, n - 5 * w) : n
    const names = [...pool.slice((id * 3) % pool.length), ...pool.slice(0, (id * 3) % pool.length)]
    return {
      id,
      dow,
      row,
      t,
      booked: names.slice(0, k),
      wait: w > 0 ? [] : names.slice(k, k + wl),
      done: w < 0 || done,
    }
  })

export default function Classes() {
  const { say, Toast } = createToast()
  const [cursor, setCursor] = createSignal(TODAY)
  const [mode, setMode] = createSignal<'week' | 'day'>('week')
  const [weeks, setWeeks] = createStore<Record<number, Sess[]>>({ 0: mkWeek(0) })
  const [sel, setSel] = createSignal<number | null>(null)
  const [arm, setArm] = createSignal<number | null>(null)
  const [hint, setHint] = createSignal(true)
  let panel: HTMLElement | undefined
  let root!: HTMLElement

  onMount(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || !root.contains(e.target as Node)) return
      setArm(null)
      setSel(null)
    }
    document.addEventListener('keydown', esc)
    onCleanup(() => document.removeEventListener('keydown', esc))
  })

  const week = () => Math.floor(cursor() / 7)
  const days = createMemo(() => (mode() === 'week' ? [0, 1, 2, 3, 4, 5, 6].map((i) => week() * 7 + i) : [cursor()]))
  const list = () => weeks[week()] ?? []
  const current = () => list().find((s) => s.id === sel())
  const go = (to: number) => {
    const w = Math.floor(to / 7)
    if (!weeks[w]) setWeeks(w, mkWeek(w))
    setCursor(to)
    setSel(null)
  }
  const label = () => {
    if (mode() === 'day') return `${DOW[dw(cursor())]}, ${md(cursor())}, ${dayDate(cursor()).getUTCFullYear()}`
    const a = week() * 7
    return `${md(a)} – ${md(a + 6)}, ${dayDate(a + 6).getUTCFullYear()}`
  }
  const edit = (fn: (s: Sess) => void) =>
    setWeeks(
      week(),
      (s) => s.id === sel(),
      produce((s) => fn(s)),
    )
  const book = () => {
    edit((s) => (s.booked.length >= tpls[s.t].cap ? s.wait : s.booked).push('Aisha Kamal'))
    say('Customer booked')
  }
  const drop = (name: string) => {
    edit((s) => {
      if (s.wait.includes(name)) s.wait.splice(s.wait.indexOf(name), 1)
      else {
        s.booked.splice(s.booked.indexOf(name), 1)
        const next = s.wait.shift()
        if (next) s.booked.push(next)
      }
    })
    say('Booking cancelled')
  }
  const place = (day: number, row: number) => {
    const t = arm()
    if (t === null) return
    setWeeks(week(), (xs) => [...xs, { id: ++uid, dow: dw(day), row, t, booked: [], wait: [], done: false }])
    setArm(null)
    say('Class scheduled')
  }
  const free = (day: number) => {
    const taken = new Set(list().flatMap((s) => (s.dow === dw(day) ? [s.row, s.row + 1] : [])))
    return Array.from({ length: 11 }, (_, i) => i + 1).filter((r) => !taken.has(r) && !taken.has(r + 1))
  }
  const dayCls = (d: number) =>
    `${mode() === 'week' && dw(d) < 4 ? `d-${DOW[dw(d)].toLowerCase()} ` : ''}${d === TODAY ? 'cl-today' : ''}`

  return (
    <section
      class="mx mx-classes"
      data-ui
      aria-label="Classes and Schedule: weekly class calendar for 11 to 17 October 2026 with a Templates sidebar"
      ref={root}
    >
      <div class="cl-ph">
        <h3>Classes &amp; Schedule</h3>
        <p>Drag a template onto the calendar to schedule a session</p>
      </div>
      <div class="cl-tb">
        <div class="cl-nav">
          <button
            type="button"
            aria-label={mode() === 'week' ? 'Previous week' : 'Previous day'}
            onClick={() => go(cursor() - (mode() === 'week' ? 7 : 1))}
          >
            <Icon n="right" class="cl-flip" />
          </button>
          <button type="button" class="cl-today-b" onClick={() => go(TODAY)}>
            Today
          </button>
          <button
            type="button"
            aria-label={mode() === 'week' ? 'Next week' : 'Next day'}
            onClick={() => go(cursor() + (mode() === 'week' ? 7 : 1))}
          >
            <Icon n="right" />
          </button>
        </div>
        <div class="cl-wk" aria-live="polite">
          <Icon n="cal" />
          {label()}
        </div>
        <div class="cl-tr">
          <span class="cl-btn">All branches</span>
          <div class="cl-seg">
            <For each={['week', 'day'] as const}>
              {(k) => (
                <button
                  type="button"
                  classList={{ 'cl-on': mode() === k }}
                  aria-pressed={mode() === k}
                  onClick={() => setMode(k)}
                >
                  {k === 'week' ? 'Week' : 'Day'}
                </button>
              )}
            </For>
          </div>
          <div class="cl-24">
            <span class="cl-sw" />
            24h
          </div>
        </div>
      </div>
      <div class="cl-main">
        <div class="cl-cal" classList={{ 'cl-arm': arm() !== null }}>
          <div class="cl-row cl-hrow" style={mode() === 'day' ? { '--n': 1 } : undefined}>
            <div class="cl-g" />
            <For each={days()}>
              {(d) => (
                <div class={`cl-dh ${dayCls(d)}`}>
                  <span>{DOW[dw(d)]}</span>
                  <b>{dayDate(d).getUTCDate()}</b>
                </div>
              )}
            </For>
          </div>
          <div class="cl-row cl-body" style={mode() === 'day' ? { '--n': 1 } : undefined}>
            <div class="cl-g cl-hours">
              <For each={['5 PM', '6 PM', '7 PM', '8 PM', '9 PM']}>
                {(h, i) => <span style={{ top: `${(i() + 1) * 56}px` }}>{h}</span>}
              </For>
            </div>
            <For each={days()}>
              {(d) => (
                <div class={`cl-day ${dayCls(d)}`}>
                  <For each={list().filter((s) => s.dow === dw(d))}>
                    {(s) => {
                      const tp = tpls[s.t]
                      return (
                        <button
                          type="button"
                          class={`cl-s ${tp.c}`}
                          classList={{ 'cl-done': s.done, 'cl-sel': sel() === s.id }}
                          style={{ 'grid-row': `${s.row} / span 2` }}
                          aria-expanded={sel() === s.id}
                          aria-label={`${tp.n}, ${DOW[s.dow]} ${md(d)}, ${at(s.row)}, ${s.booked.length} of ${tp.cap} booked`}
                          onClick={() => {
                            setArm(null)
                            setSel(sel() === s.id ? null : s.id)
                            queueMicrotask(() => panel?.scrollIntoView({ block: 'nearest' }))
                          }}
                        >
                          <b>{tp.n}</b>
                          <span>
                            {at(s.row)} · {s.booked.length}/{tp.cap}
                          </span>
                        </button>
                      )
                    }}
                  </For>
                  <Show when={arm() !== null}>
                    <For each={free(d)}>
                      {(r) => (
                        <button
                          type="button"
                          class="cl-slot"
                          style={{ 'grid-row': `${r}` }}
                          aria-label={`Schedule ${tpls[arm() ?? 0].n} on ${DOW[dw(d)]} ${md(d)} at ${at(r)}`}
                          onClick={() => place(d, r)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault()
                            place(d, r)
                          }}
                        />
                      )}
                    </For>
                  </Show>
                  <Show when={d === TODAY}>
                    <div class="cl-now" role="img" aria-label="Current time" />
                  </Show>
                </div>
              )}
            </For>
            <div class="cl-lines" aria-hidden="true">
              <Index each={Array.from({ length: 12 })}>
                {(_, i) => <i classList={{ 'cl-half': i % 2 === 1 }} style={{ top: `${i * 28}px` }} />}
              </Index>
            </div>
          </div>
        </div>
        <aside class="cl-side" ref={panel}>
          <Show
            when={current()}
            fallback={
              <>
                <header>
                  <div>
                    <h4>Templates</h4>
                    <p>Drag onto a day to schedule</p>
                  </div>
                  <button type="button" class="cl-btn" onClick={() => say('New template opens the template form')}>
                    <Icon n="plus" />
                    New
                  </button>
                </header>
                <Show
                  when={arm() === null}
                  fallback={
                    <div class="cl-hint cl-hint-on" role="status">
                      <Icon n="zap" />
                      <div>
                        <p>Pick a free slot on the calendar for {tpls[arm() ?? 0].n}.</p>
                        <button type="button" onClick={() => setArm(null)}>
                          <b>Cancel</b>
                        </button>
                      </div>
                    </div>
                  }
                >
                  <Show when={hint()}>
                    <div class="cl-hint">
                      <Icon n="zap" />
                      <div>
                        <p>Drag a template onto any day of the calendar.</p>
                        <button type="button" onClick={() => setHint(false)}>
                          <b>Got it</b>
                        </button>
                      </div>
                    </div>
                  </Show>
                </Show>
                <div class="cl-tpls">
                  <For each={tpls}>
                    {(tp, i) => (
                      <button
                        type="button"
                        class="cl-tpl"
                        draggable="true"
                        aria-pressed={arm() === i()}
                        onClick={() => setArm(arm() === i() ? null : i())}
                        onDragStart={(e) => {
                          e.dataTransfer?.setData('text/plain', tp.n)
                          setArm(i())
                        }}
                      >
                        <span class={`cl-dot ${tp.c}`} />
                        <div>
                          <b>{tp.n}</b>
                          <small>60 min · Cap {tp.cap}</small>
                        </div>
                      </button>
                    )}
                  </For>
                </div>
              </>
            }
          >
            {(s) => {
              const tp = () => tpls[s().t]
              const full = () => s().booked.length >= tp().cap
              const mine = () => s().booked.includes('Aisha Kamal') || s().wait.includes('Aisha Kamal')
              return (
                <section class="cl-ros" aria-label={`${tp().n} roster`}>
                  <header>
                    <h4>
                      <span class={`cl-dot ${tp().c}`} />
                      {tp().n}
                    </h4>
                    <button type="button" class="cl-x" aria-label="Close roster" onClick={() => setSel(null)}>
                      <Icon n="x" />
                    </button>
                  </header>
                  <p class="cl-meta">
                    <span class="cl-tag">{s().done ? 'COMPLETED' : 'SCHEDULED'}</span>
                    {DOW[s().dow]} {md(week() * 7 + s().dow)} · {at(s().row)} – {at(s().row, 60)} · Seef
                  </p>
                  <div class="cl-box">
                    <p>
                      <b>Bookings</b>
                      <span>
                        {s().booked.length} / {tp().cap}
                      </span>
                    </p>
                    <div class="cl-prog">
                      <i style={{ width: `${Math.min(100, (s().booked.length / tp().cap) * 100)}%` }} />
                    </div>
                    <Show when={s().wait.length}>
                      <small>{s().wait.length} on waitlist</small>
                    </Show>
                  </div>
                  <dl class="cl-kv">
                    <div>
                      <dt>Instructor</dt>
                      <dd>{tp().coach}</dd>
                    </div>
                    <div>
                      <dt>Room</dt>
                      <dd>{tp().room}</dd>
                    </div>
                  </dl>
                  <p class="cl-lab">Roster</p>
                  <Show
                    when={s().booked.length + s().wait.length}
                    fallback={<small class="cl-none">No bookings yet.</small>}
                  >
                    <ul class="cl-list">
                      <For each={[...s().booked, ...s().wait]}>
                        {(n) => (
                          <li>
                            <span>{n}</span>
                            <Show when={s().wait.includes(n)}>
                              <em>waitlist</em>
                            </Show>
                            <Show when={!s().done}>
                              <button
                                type="button"
                                class="cl-x"
                                title="Cancel booking"
                                aria-label={`Cancel booking for ${n}`}
                                onClick={() => drop(n)}
                              >
                                <Icon n="x" />
                              </button>
                            </Show>
                          </li>
                        )}
                      </For>
                    </ul>
                  </Show>
                  <Show when={!s().done}>
                    <p class="cl-lab">Book a customer</p>
                    <div class="cl-book">
                      <span class="cl-pick" classList={{ 'cl-ph-t': mine() }}>
                        {mine() ? (full() ? 'Class full — adds to waitlist' : 'Select customer…') : 'Aisha Kamal'}
                      </span>
                      <button type="button" class="cl-btn cl-pri" disabled={mine()} onClick={book}>
                        <Icon n="uplus" />
                        Book
                      </button>
                    </div>
                    <Show when={full() && !mine()}>
                      <small class="cl-full">Class full — adds to waitlist</small>
                    </Show>
                  </Show>
                </section>
              )
            }}
          </Show>
        </aside>
      </div>
      <Toast />
    </section>
  )
}
