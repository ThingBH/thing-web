import { createMemo, createSignal, createUniqueId, For, onCleanup, onMount, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import { bhd, createToast, Icon } from './shared'
import './Payroll.css'

type Status = 'GENERATED' | 'FINALIZED'
type Rec = { n: string; no: string; basic: number; com: number; bonus: number; iban: boolean }
type Period = { name: string; range: string; status: Status; recs: Rec[] }

// ABC Gym staff. GOSI is 8% (employee) and 12% (employer) of basic salary.
const staff = [
  ['Sara Ahmed', '1001', 650, true],
  ['Ali Hassan', '1002', 480, true],
  ['Yousif Nasser', '1003', 520, true],
  ['Layla Hassan', '1004', 420, true],
  ['Noor Khalil', '1005', 450, false],
] as const
const recs = (coms: number[]): Rec[] =>
  staff.map(([n, no, basic, iban], i) => ({ n, no, basic, com: coms[i], bonus: 0, iban }))

const r3 = (v: number) => Math.round(v * 1000) / 1000
const gross = (r: Rec) => r.basic + r.com + r.bonus
const gosiEe = (r: Rec) => r3(r.basic * 0.08)
const gosiEr = (r: Rec) => r3(r.basic * 0.12)
const net = (r: Rec) => r3(gross(r) - gosiEe(r))
const sum = (rs: Rec[], f: (r: Rec) => number) => r3(rs.reduce((a, r) => a + f(r), 0))
const BONUS = 25

export default function Payroll() {
  const [periods, setPeriods] = createStore<Period[]>([
    {
      name: 'October 2026',
      range: 'Oct 1, 2026 – Oct 31, 2026',
      status: 'GENERATED',
      recs: recs([135, 90, 60, 0, 45]),
    },
    {
      name: 'September 2026',
      range: 'Sep 1, 2026 – Sep 30, 2026',
      status: 'FINALIZED',
      recs: recs([110, 75, 50, 0, 35]),
    },
    {
      name: 'August 2026',
      range: 'Aug 1, 2026 – Aug 31, 2026',
      status: 'FINALIZED',
      recs: recs([123, 80, 55, 0, 40]),
    },
  ])
  const [sel, setSel] = createSignal(0)
  const [open, setOpen] = createSignal<number | null>(null)
  const [confirm, setConfirm] = createSignal(false)
  const { say, Toast } = createToast()
  const id = createUniqueId()
  const p = () => periods[sel()]
  const fin = () => p().status === 'FINALIZED'
  const person = () => {
    const i = open()
    return i === null ? undefined : p().recs[i]
  }
  let opener: HTMLElement | undefined
  let closeBtn: HTMLButtonElement | undefined
  let cancelBtn: HTMLButtonElement | undefined
  /** Puts an overlay card at the top of the visible part of the screen, below the site header, then focuses it. */
  const focusIn = (btn?: HTMLButtonElement) => {
    const card = btn?.closest<HTMLElement>('.pr-sheet, .pr-dlg')
    const root = card?.closest<HTMLElement>('.mx-payroll')
    if (!btn || !card || !root) return
    const r = root.getBoundingClientRect()
    const lift = card.classList.contains('pr-dlg') ? 160 : 88
    card.style.marginTop = `${Math.max(0, Math.min(lift - r.top, r.height - card.offsetHeight))}px`
    card.scrollIntoView({ block: 'nearest' })
    btn.focus({ preventScroll: true })
  }

  const kpis = createMemo(() => {
    const cur = p().recs
    const prev = periods[sel() + 1]?.recs
    return {
      gross: sum(cur, gross),
      net: sum(cur, net),
      com: sum(cur, (r) => r.com),
      er: sum(cur, gosiEr),
      prev: prev && { gross: sum(prev, gross), com: sum(prev, (r) => r.com), er: sum(prev, gosiEr), n: prev.length },
    }
  })

  const show = (i: number, el: HTMLElement) => {
    opener = el
    setOpen(i)
    focusIn(closeBtn)
  }
  const hide = () => {
    setOpen(null)
    setConfirm(false)
    opener?.focus({ preventScroll: true })
  }
  const pick = (i: number) => {
    setSel(i)
    setOpen(null)
  }
  const finalize = () => {
    setPeriods(sel(), 'status', 'FINALIZED')
    setConfirm(false)
    say(`Finalized "${p().name}"`)
  }
  const wps = () => {
    const missing = p().recs.filter((r) => !r.iban)
    if (!missing.length) return say(`All ${p().recs.length} records are ready for submission.`)
    say(
      `${missing.length} employee${missing.length === 1 ? '' : 's'} cannot be submitted: ${missing
        .map((r) => `${r.n} (missing primary IBAN)`)
        .join(', ')}`,
    )
  }
  const slug = () => p().name.replace(/\s+/g, '-').toLowerCase()

  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (confirm()) setConfirm(false)
      else if (open() !== null) hide()
    }
    document.addEventListener('keydown', onKey)
    onCleanup(() => document.removeEventListener('keydown', onKey))
  })

  const Delta = (d: { cur: number; prev?: number; money?: boolean }) => {
    const diff = () => r3(d.cur - (d.prev ?? 0))
    return (
      <Show when={d.prev !== undefined}>
        <Show when={diff()} fallback={<span class="pr-d">— No change</span>}>
          <span class="pr-d" classList={{ 'pr-up': diff() > 0, 'pr-dn': diff() < 0 }}>
            <Icon n="arrow" />
            {`${d.money ? bhd(Math.abs(diff())) : Math.abs(diff())} (${((Math.abs(diff()) / (d.prev || 1)) * 100).toFixed(1)}%)`}
          </span>
        </Show>
      </Show>
    )
  }
  const Pill = (s: { status: Status }) => (
    <span class="pr-pill" classList={{ 'pr-fin': s.status === 'FINALIZED', 'pr-gen': s.status === 'GENERATED' }}>
      {s.status === 'FINALIZED' ? 'Finalized' : 'Generated'}
    </span>
  )

  return (
    <section
      class="mx mx-payroll"
      data-ui
      aria-label="Payroll page: pick a period, open a pay record, finalize the month"
    >
      <div class="pr-head">
        <div>
          <h3 class="pr-h1">Payroll</h3>
          <p class="pr-sub">Run payroll periods and manage employee pay.</p>
        </div>
        <span class="pr-btn pr-btn-pri">
          <Icon n="plus" />
          New period
        </span>
      </div>

      <div class="pr-rail-top">
        <span class="pr-h2">Periods</span>
        <span class="pr-arch">
          <span class="pr-switch" aria-hidden="true" />
          Show archived
        </span>
      </div>
      <div class="pr-rail">
        <For each={periods}>
          {(per, i) => (
            <button
              type="button"
              class="pr-period"
              classList={{ 'pr-on': sel() === i() }}
              aria-pressed={sel() === i()}
              onClick={() => pick(i())}
            >
              <b>{per.name}</b>
              <small>{per.range}</small>
              <Pill status={per.status} />
            </button>
          )}
        </For>
      </div>

      <div class="pr-card">
        <div class="pr-card-h">
          <div class="pr-title">
            <div class="pr-t1">
              <b>{p().name}</b>
              <Pill status={p().status} />
            </div>
            <small>{p().range}</small>
          </div>
          <div class="pr-acts">
            <button
              type="button"
              class="pr-btn pr-sm"
              disabled={!fin()}
              title={fin() ? undefined : 'Finalize the period to issue official payslips'}
              onClick={() => say(`Downloaded ${p().recs.length} payslips`)}
            >
              Download all slips
            </button>
            <Show when={fin()}>
              <button type="button" class="pr-btn pr-sm" onClick={wps}>
                <Icon n="file" />
                WPS export
              </button>
            </Show>
            <button type="button" class="pr-btn pr-sm" onClick={() => say(`Downloaded payroll-${slug()}.csv`)}>
              CSV
            </button>
            <Show when={!fin()}>
              <button
                type="button"
                class="pr-btn pr-sm"
                onClick={() => {
                  setConfirm(true)
                  focusIn(cancelBtn)
                }}
              >
                <Icon n="lock" />
                Finalize
              </button>
            </Show>
          </div>
        </div>

        <div class="pr-kpis">
          <div class="pr-kpi">
            <p>Total gross</p>
            <b class="pr-m">{bhd(kpis().gross)}</b>
            <Delta cur={kpis().gross} prev={kpis().prev?.gross} money />
          </div>
          <div class="pr-kpi">
            <p>Employees paid</p>
            <b>{p().recs.length}</b>
            <Delta cur={p().recs.length} prev={kpis().prev?.n} />
          </div>
          <div class="pr-kpi">
            <p>Total net</p>
            <b class="pr-m">{bhd(kpis().net)}</b>
          </div>
          <div class="pr-kpi">
            <p>Total commission</p>
            <b class="pr-m">{bhd(kpis().com)}</b>
            <Delta cur={kpis().com} prev={kpis().prev?.com} money />
          </div>
          <div class="pr-kpi">
            <p>Total employer GOSI</p>
            <b class="pr-m">{bhd(kpis().er)}</b>
            <Delta cur={kpis().er} prev={kpis().prev?.er} money />
          </div>
        </div>

        <table class="pr-tbl">
          <thead>
            <tr>
              <th class="pr-chev" />
              <th>Employee</th>
              <th class="pr-r pr-c1">Gross</th>
              <th class="pr-r pr-c2">Commission</th>
              <th class="pr-r pr-c3">Deductions</th>
              <th class="pr-r pr-c3">GOSI (empr.)</th>
              <th class="pr-r">Net pay</th>
            </tr>
          </thead>
          <tbody>
            <For each={p().recs}>
              {(r, i) => (
                <tr
                  classList={{ 'pr-sel': open() === i() }}
                  title="View pay breakdown"
                  onClick={(e) => show(i(), e.currentTarget.querySelector('button') ?? e.currentTarget)}
                >
                  <td class="pr-chev">
                    <Icon n="right" />
                  </td>
                  <td>
                    <button type="button" class="pr-who" aria-haspopup="dialog">
                      <b>{r.n}</b>
                      <small>#{r.no}</small>
                    </button>
                  </td>
                  <td class="pr-r pr-m pr-c1">{bhd(gross(r))}</td>
                  <td class="pr-r pr-m pr-mut pr-c2">{r.com ? `+${bhd(r.com)}` : '—'}</td>
                  <td class="pr-r pr-m pr-mut pr-c3">—</td>
                  <td class="pr-r pr-m pr-mut pr-c3">{bhd(gosiEr(r))}</td>
                  <td class="pr-r pr-m pr-net">{bhd(net(r))}</td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>

      <Show when={person()}>
        {(r) => (
          // biome-ignore lint/a11y/noStaticElementInteractions lint/a11y/useKeyWithClickEvents: click-outside to close; Escape and the buttons are the keyboard path
          <div class="pr-scrim" onClick={(e) => e.target === e.currentTarget && hide()}>
            <div class="pr-sheet" role="dialog" aria-modal="true" aria-labelledby={`${id}-pr-sheet-t`}>
              <div class="pr-sh-h">
                <div>
                  <h4 id={`${id}-pr-sheet-t`}>{r().n}</h4>
                  <p>
                    Pay breakdown for {p().name} · #{r().no}
                  </p>
                </div>
                <button type="button" class="pr-x" aria-label="Close" ref={(el) => (closeBtn = el)} onClick={hide}>
                  <Icon n="x" />
                </button>
              </div>
              <p class="pr-sh-l">Earnings</p>
              <div class="pr-box">
                <p>
                  <span>Basic salary</span>
                  <b class="pr-m">{bhd(r().basic)}</b>
                </p>
                <Show when={r().com}>
                  <p>
                    <span>Commission</span>
                    <b class="pr-m">{bhd(r().com)}</b>
                  </p>
                </Show>
                <Show when={r().bonus}>
                  <p>
                    <span>Bonus</span>
                    <b class="pr-m">{bhd(r().bonus)}</b>
                  </p>
                </Show>
                <p>
                  <span>Gross pay</span>
                  <b class="pr-m">{bhd(gross(r()))}</b>
                </p>
              </div>
              <p class="pr-sh-l">Deductions</p>
              <div class="pr-box">
                <p>
                  <span>GOSI (employee)</span>
                  <b class="pr-m">−{bhd(gosiEe(r()))}</b>
                </p>
                <p class="pr-netrow">
                  <span>Net pay</span>
                  <b class="pr-m">{bhd(net(r()))}</b>
                </p>
              </div>
              <div class="pr-box pr-dash">
                <p>
                  <span>GOSI (employer contribution)</span>
                  <b class="pr-m pr-mut">{bhd(gosiEr(r()))}</b>
                </p>
              </div>
              <div class="pr-box">
                <p>
                  <span>Period status</span>
                  <Pill status={p().status} />
                </p>
              </div>
              <Show when={!fin()} fallback={<p class="pr-lock">Finalized. No further adjustments can be added.</p>}>
                <button
                  type="button"
                  class="pr-btn pr-wide"
                  onClick={() => {
                    setPeriods(sel(), 'recs', open() ?? 0, 'bonus', (b) => b + BONUS)
                    say(`Bonus of ${bhd(BONUS)} added for ${r().n}`)
                  }}
                >
                  <Icon n="plus" />
                  Add adjustment
                </button>
              </Show>
            </div>
          </div>
        )}
      </Show>

      <Show when={confirm()}>
        {/* biome-ignore lint/a11y/noStaticElementInteractions lint/a11y/useKeyWithClickEvents: click-outside to close; Escape and the buttons are the keyboard path */}
        <div class="pr-scrim pr-mid" onClick={(e) => e.target === e.currentTarget && setConfirm(false)}>
          <div
            class="pr-dlg"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={`${id}-pr-dlg-t`}
            aria-describedby={`${id}-pr-dlg-d`}
          >
            <h4 id={`${id}-pr-dlg-t`}>Finalize payroll period?</h4>
            <p id={`${id}-pr-dlg-d`}>
              "{p().name}" will move to FINALIZED. After this no further adjustments can be added.
            </p>
            <div class="pr-dlg-a">
              <button type="button" class="pr-btn" ref={(el) => (cancelBtn = el)} onClick={() => setConfirm(false)}>
                Cancel
              </button>
              <button type="button" class="pr-btn pr-btn-pri" onClick={finalize}>
                Finalize
              </button>
            </div>
          </div>
        </div>
      </Show>

      <Toast />
    </section>
  )
}
