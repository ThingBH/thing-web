import { createMemo, createSignal, For, Show } from 'solid-js'
import { bhd, createToast, Icon } from './shared'
import './Accounting.css'

type Key = 'tm' | 'lm'
const data: Record<
  Key,
  { m: string; mon: string; to: number; tx: number; days: number[]; pm: [string, number, string][] }
> = {
  tm: {
    m: '10',
    mon: 'Oct',
    to: 17,
    tx: 1206,
    days: [
      544.53, 280.515, 333.768, 500.277, 454.9, 421.898, 437.274, 408.772, 246.764, 319.893, 484.152, 469.526, 430.899,
      444.399, 478.151, 268.515, 318.017,
    ],
    pm: [
      ['Card', 3612.4, '#6366f1'],
      ['Benefit', 2104.85, '#06b6d4'],
      ['Cash', 1125, '#f59e0b'],
    ],
  },
  lm: {
    m: '09',
    mon: 'Sep',
    to: 30,
    tx: 2131,
    days: [
      438.232, 474.836, 410.779, 233.859, 351.805, 425.013, 456.534, 493.138, 429.081, 465.685, 188.104, 306.05, 479.92,
      410.779, 447.383, 483.987, 419.93, 243.01, 360.956, 434.164, 465.685, 401.628, 438.232, 474.836, 197.255, 315.201,
      489.071, 419.93, 456.534, 493.133,
    ],
    pm: [
      ['Card', 6390.25, '#6366f1'],
      ['Benefit', 3702.5, '#06b6d4'],
      ['Cash', 2012, '#f59e0b'],
    ],
  },
}
const r3 = (v: number) => Math.round(v * 1000) / 1000
const pad = (n: number) => String(n).padStart(2, '0')

export default function Accounting() {
  const [key, setKey] = createSignal<Key>('tm')
  const [hot, setHot] = createSignal<number | null>(null)
  const { say, Toast } = createToast()
  const d = () => data[key()]
  const k = createMemo(() => {
    const gross = r3(d().pm.reduce((a, p) => a + p[1], 0))
    const net = r3(gross / 1.1)
    const max = Math.max(...d().days)
    return { gross, net, vat: r3(gross - net), max, pmMax: Math.max(...d().pm.map((p) => p[1])) }
  })
  const label = (i: number) => `${d().m}-${pad(i + 1)}`
  const pick = (v: Key) => {
    setKey(v)
    setHot(null)
  }

  return (
    <section
      class="mx mx-accounting"
      data-ui
      aria-label="Accounting page: revenue, VAT and transactions for this month or last month"
    >
      <div class="ac-head">
        <div>
          <h3 class="ac-h1">Accounting</h3>
          <p class="ac-sub">Revenue, VAT, payroll, and P&amp;L overview</p>
        </div>
        <button
          type="button"
          class="ac-btn"
          onClick={() => say(`Downloaded accounting-2026-${d().m}-01--2026-${d().m}-${pad(d().to)}.csv`)}
        >
          Export CSV
        </button>
      </div>

      <div class="ac-period">
        <div class="ac-seg">
          <For
            each={
              [
                ['tm', 'This Month'],
                ['lm', 'Last Month'],
              ] as const
            }
          >
            {([v, t]) => (
              <button
                type="button"
                classList={{ 'ac-on': key() === v }}
                aria-pressed={key() === v}
                onClick={() => pick(v)}
              >
                {t}
              </button>
            )}
          </For>
        </div>
        <div class="ac-range">
          <span class="ac-mut">From</span>
          <span class="ac-in">
            {d().m}/01/2026
            <Icon n="cal" />
          </span>
          <span class="ac-mut">to</span>
          <span class="ac-in">
            {d().m}/{pad(d().to)}/2026
            <Icon n="cal" />
          </span>
        </div>
      </div>

      <div class="ac-kpis">
        <div class="ac-kpi ac-green">
          <div>
            <p>Gross Revenue</p>
            <b>{bhd(k().gross)}</b>
          </div>
          <span class="ac-ic">
            <Icon n="wallet" />
          </span>
        </div>
        <div class="ac-kpi ac-blue">
          <div>
            <p>Net Revenue</p>
            <b>{bhd(k().net)}</b>
          </div>
          <span class="ac-ic">
            <Icon n="trend" />
          </span>
        </div>
        <div class="ac-kpi ac-amber">
          <div>
            <p>VAT Collected</p>
            <b>{bhd(k().vat)}</b>
          </div>
          <span class="ac-ic">
            <Icon n="trend" class="ac-down" />
          </span>
        </div>
        <div class="ac-kpi ac-purple">
          <div>
            <p>Transaction Count</p>
            <b>{d().tx.toLocaleString('en-US')}</b>
          </div>
          <span class="ac-ic">
            <Icon n="updown" class="ac-lr" />
          </span>
        </div>
      </div>

      <div class="ac-cards">
        <div class="ac-card ac-chart">
          <h4 class="ac-ct">
            Daily Revenue — 01 {d().mon} 2026 – {pad(d().to)} {d().mon} 2026
          </h4>
          <svg
            class="ac-bars"
            viewBox={`0 0 ${d().days.length * 20} 160`}
            preserveAspectRatio="none"
            aria-hidden="true"
            onPointerLeave={(e) => e.pointerType === 'mouse' && setHot(null)}
          >
            <For each={d().days}>
              {(v, i) => {
                const h = () => r3((v / k().max) * 145.2)
                return (
                  // biome-ignore lint/a11y/noStaticElementInteractions: pointer-only chart readout; the totals are in the KPIs above
                  <g
                    classList={{ 'ac-hot': hot() === i(), 'ac-dim': hot() !== null && hot() !== i() }}
                    onPointerEnter={() => setHot(i())}
                    onClick={() => setHot(i())}
                  >
                    <rect class="ac-hit" x={i() * 20} y="0" width="20" height="160" />
                    <rect x={i() * 20 + 3} y={r3(160 - h())} width="14" height={h()} />
                  </g>
                )
              }}
            </For>
          </svg>
          <Show when={hot() !== null}>
            <div
              class="ac-tip"
              role="status"
              style={{ '--x': String(((hot() ?? 0) + 0.5) / d().days.length) }}
              classList={{ 'ac-tip-l': (hot() ?? 0) < 3, 'ac-tip-r': (hot() ?? 0) > d().days.length - 4 }}
            >
              <b>{label(hot() ?? 0)}</b>
              <span>Gross Revenue: {bhd(d().days[hot() ?? 0])}</span>
            </div>
          </Show>
          <div
            class="ac-days"
            classList={{ 'ac-long': d().days.length > 20 }}
            style={{ 'grid-template-columns': `repeat(${d().days.length}, minmax(0, 1fr))` }}
          >
            <For each={d().days}>{(_, i) => <span classList={{ 'ac-odd': i() % 2 === 1 }}>{label(i())}</span>}</For>
          </div>
        </div>

        <div class="ac-card">
          <h4 class="ac-ct">Revenue by Payment Method</h4>
          <div class="ac-pm">
            <For each={d().pm}>
              {([name, v, c]) => (
                <div class="ac-pmr">
                  <span class="ac-pml">{name}</span>
                  <span class="ac-pmb">
                    <i style={{ width: `${((v / k().pmMax) * 100).toFixed(1)}%`, background: c }} />
                  </span>
                  <span class="ac-pmv">{bhd(v)}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <Toast />
    </section>
  )
}
