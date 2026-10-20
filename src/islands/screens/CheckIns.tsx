import { createMemo, createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import './CheckIns.css'
import { Icon } from './shared'

type Scan = { t: string; n: string; no: string; d: string; ok: boolean; r?: string; id: number }
type Period = 'today' | 'yesterday'
type Decision = 'ALL' | 'allow' | 'deny'

let ids = 0
const row = (t: string, n: string, no: string, d: string, r?: string): Scan => ({ t, n, no, d, ok: !r, r, id: ids++ })

const feeds: Record<Period, Scan[]> = {
  today: [
    row('07:58 am', 'Aisha Kamal', 'ABC-00412', 'Seef · Main turnstile'),
    row('07:55 am', 'Omar Haddad', 'ABC-00377', 'Seef · Main turnstile', 'Membership expired'),
    row('07:51 am', 'Fatima Al-Mahmood', 'ABC-00129', 'Muharraq · Main door'),
    row('07:47 am', 'Noor Al-Sayed', 'ABC-00508', 'Seef · Ladies door', 'Outside access hours'),
    row('07:40 am', 'Yousif Abdulla', 'ABC-00561', 'Seef · Reception iPad'),
    row('07:36 am', 'Hussain Jaffar', 'ABC-00233', 'Muharraq · Main door', 'Not allowed at this branch'),
    row('07:31 am', 'Mariam Hasan', 'ABC-00466', 'Seef · Main turnstile'),
  ],
  yesterday: [
    row('10:52 pm', 'Sara Ahmed', 'ABC-00145', 'Seef · Main turnstile'),
    row('10:47 pm', 'Khalid Mansoor', 'ABC-00702', 'Seef · Main turnstile', 'No visit days left'),
    row('10:31 pm', 'Ali Hassan', 'ABC-00298', 'Muharraq · Main door'),
    row('10:22 pm', 'Zainab Ali', 'ABC-00611', 'Seef · Ladies door'),
    row('10:15 pm', 'Reem Yusuf', 'ABC-00533', 'Muharraq · Main door', 'Membership frozen'),
    row('10:09 pm', 'Aisha Kamal', 'ABC-00412', 'Seef · Main turnstile'),
    row('09:58 pm', 'Omar Haddad', 'ABC-00377', 'Seef · Reception iPad', 'Membership expired'),
  ],
}
// Scans earlier in the day than the visible feed (the product pages them behind "Load more").
const earlier: Record<Period, { ok: number; den: number; uniq: number }> = {
  today: { ok: 138, den: 6, uniq: 121 },
  yesterday: { ok: 187, den: 9, uniq: 164 },
}
const arrivals: Omit<Scan, 't' | 'id'>[] = [
  { n: 'Sara Ahmed', no: 'ABC-00145', d: 'Seef · Main turnstile', ok: true },
  { n: 'Khalid Mansoor', no: 'ABC-00702', d: 'Seef · Main turnstile', ok: false, r: 'No visit days left' },
  { n: 'Ali Hassan', no: 'ABC-00298', d: 'Muharraq · Main door', ok: true },
  { n: 'Omar Haddad', no: 'ABC-00377', d: 'Seef · Reception iPad', ok: false, r: 'Membership expired' },
  { n: 'Zainab Ali', no: 'ABC-00611', d: 'Seef · Ladies door', ok: true },
  { n: 'Reem Yusuf', no: 'ABC-00533', d: 'Muharraq · Main door', ok: true },
]
const PRESETS: [Period, string][] = [
  ['today', 'Today'],
  ['yesterday', 'Yesterday'],
]
const DECISIONS: [Decision, string][] = [
  ['ALL', 'All scans'],
  ['allow', 'Allowed'],
  ['deny', 'Denied'],
]
const VISIBLE = 7

export default function CheckIns() {
  const [period, setPeriod] = createSignal<Period>('today')
  const [decision, setDecision] = createSignal<Decision>('ALL')
  const [q, setQ] = createSignal('')
  const [open, setOpen] = createSignal(false)
  const [today, setToday] = createSignal(feeds.today)
  const [fresh, setFresh] = createSignal(-1)
  let pop!: HTMLDivElement
  let trigger!: HTMLButtonElement
  let next = 0
  let minute = 7 * 60 + 58

  onMount(() => {
    const away = (e: PointerEvent) => {
      if (open() && !pop.contains(e.target as Node) && !trigger.contains(e.target as Node)) setOpen(false)
    }
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open()) {
        setOpen(false)
        trigger.focus()
      }
    }
    document.addEventListener('pointerdown', away)
    document.addEventListener('keydown', esc)
    onCleanup(() => {
      document.removeEventListener('pointerdown', away)
      document.removeEventListener('keydown', esc)
    })
  })

  const feed = () => (period() === 'today' ? today() : feeds.yesterday)
  const stats = createMemo(() => {
    const f = feed()
    const e = earlier[period()]
    const ok = e.ok + f.filter((x) => x.ok).length
    const den = e.den + f.filter((x) => !x.ok).length
    return { ok, den, uniq: e.uniq + new Set(f.map((x) => x.no)).size, total: ok + den }
  })
  const rows = createMemo(() => {
    const s = q().trim().toLowerCase()
    const d = decision()
    return feed()
      .filter((x) => d === 'ALL' || x.ok === (d === 'allow'))
      .filter((x) => !s || `${x.n} ${x.no}`.toLowerCase().includes(s))
      .slice(0, VISIBLE)
  })
  const summary = () => {
    const p = PRESETS.find((x) => x[0] === period())?.[1]
    return decision() === 'ALL' ? p : `${p} · ${decision() === 'allow' ? 'Allowed' : 'Denied'}`
  }

  const scan = () => {
    minute += 1 + (next % 2)
    const h = Math.floor(minute / 60)
    const t = `${String(h > 12 ? h - 12 : h).padStart(2, '0')}:${String(minute % 60).padStart(2, '0')} ${h >= 12 ? 'pm' : 'am'}`
    const s: Scan = { ...arrivals[next++ % arrivals.length], t, id: ids++ }
    setPeriod('today')
    setToday((xs) => [s, ...xs])
    setFresh(s.id)
  }

  return (
    <section
      class="mx mx-checkins"
      data-ui
      aria-label="Check-ins page: today's door scans with allowed and denied results"
    >
      <div class="mx-checkins-head">
        <h3>Check-ins</h3>
        <p>Who came in, straight from the door readers.</p>
      </div>

      <div class="mx-checkins-filters">
        <button
          ref={trigger}
          type="button"
          class="mx-checkins-btn"
          aria-haspopup="dialog"
          aria-expanded={open()}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon n="filter" />
          {summary()}
        </button>
        <button type="button" class="mx-checkins-btn" onClick={scan}>
          <Icon n="scan" />
          Simulate a scan
        </button>
        <Show when={open()}>
          <div ref={pop} class="mx-checkins-pop" role="dialog" aria-label="Filters">
            <p>Period</p>
            {/* biome-ignore lint/a11y/useSemanticElements: a fieldset brings its own border and padding */}
            <div class="g2" role="group" aria-label="Period">
              <For each={PRESETS}>
                {([k, label]) => (
                  <button type="button" aria-pressed={period() === k} onClick={() => setPeriod(k)}>
                    {label}
                  </button>
                )}
              </For>
            </div>
            <p>Result</p>
            {/* biome-ignore lint/a11y/useSemanticElements: a fieldset brings its own border and padding */}
            <div class="g3" role="group" aria-label="Result">
              <For each={DECISIONS}>
                {([k, label]) => (
                  <button type="button" aria-pressed={decision() === k} onClick={() => setDecision(k)}>
                    {label}
                  </button>
                )}
              </For>
            </div>
          </div>
        </Show>
        <label class="mx-checkins-search">
          <Icon n="search" />
          <input
            type="search"
            placeholder="Search name or customer number…"
            aria-label="Search name or customer number"
            value={q()}
            onInput={(e) => setQ(e.currentTarget.value)}
          />
        </label>
      </div>

      <div class="mx-checkins-stats">
        <div class="mx-checkins-stat">
          <Icon n="door" class="ok" />
          <div>
            <b>{stats().ok}</b>
            <span>Check-ins</span>
          </div>
        </div>
        <div class="mx-checkins-stat">
          <Icon n="users" />
          <div>
            <b>{stats().uniq}</b>
            <span>Unique members</span>
          </div>
        </div>
        <div class="mx-checkins-stat">
          <Icon n="shieldx" class="den" />
          <div>
            <b>{stats().den}</b>
            <span>Denied</span>
          </div>
        </div>
        <div class="mx-checkins-stat">
          <Icon n="scan" class="mu" />
          <div>
            <b>{stats().total}</b>
            <span>Total scans</span>
          </div>
        </div>
      </div>

      {/* biome-ignore-start lint/a11y/useSemanticElements lint/a11y/useFocusableInteractive: an ARIA table on CSS grid rows, as in the static screen */}
      <div class="mx-checkins-feed" role="table" aria-label={period() === 'today' ? 'Scans today' : 'Scans yesterday'}>
        <div class="mx-checkins-row th" role="row">
          <span role="columnheader">Time</span>
          <span role="columnheader">Customer</span>
          <span role="columnheader">Device</span>
          <span role="columnheader">Result</span>
          <span role="columnheader">Reason</span>
        </div>
        <For
          each={rows()}
          fallback={
            <p class="mx-checkins-empty">No check-ins in this range{q().trim() ? ` matching “${q().trim()}”` : ''}.</p>
          }
        >
          {(x) => (
            <div class="mx-checkins-row" classList={{ fresh: x.id === fresh() }} role="row">
              <span class="t" role="cell">
                {x.t}
              </span>
              <span class="c" role="cell">
                <b>{x.n}</b>
                <small>{x.no}</small>
              </span>
              <span class="d" role="cell">
                {x.d}
              </span>
              <span role="cell">{x.ok ? <em class="ok">Allowed</em> : <em class="den">Denied</em>}</span>
              <span class={x.r ? 'r' : 'r none'} role="cell">
                {x.r ?? '—'}
              </span>
            </div>
          )}
        </For>
      </div>
      {/* biome-ignore-end lint/a11y/useSemanticElements lint/a11y/useFocusableInteractive: see above */}
    </section>
  )
}
