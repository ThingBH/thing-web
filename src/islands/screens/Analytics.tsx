import { createSignal, For, Show } from 'solid-js'
import { bhd, Icon } from './shared'
import './Analytics.css'

type Key = 'tm' | 'lm' | 'l3' | 'l6' | 'ty'
// [key, label, extra class, range, previous range, [gross, sales, new memberships, attendance], previous]
const periods: [Key, string, string, string, string, number[], number[]][] = [
  [
    'tm',
    'This Month',
    '',
    '2026-10-01 – 2026-10-17',
    '2026-09-14 – 2026-09-30',
    [6842.25, 1206, 64, 1384],
    [6312.04, 1121, 58, 1421],
  ],
  [
    'lm',
    'Last Month',
    '',
    '2026-09-01 – 2026-09-30',
    '2026-08-02 – 2026-08-31',
    [12104.75, 2131, 112, 2496],
    [11520.3, 2040, 98, 2388],
  ],
  [
    'l3',
    'Last 3 Months',
    'an-x',
    '2026-08-01 – 2026-10-17',
    '2026-05-15 – 2026-07-31',
    [31640.9, 5588, 268, 6402],
    [29870.4, 5305, 241, 6155],
  ],
  [
    'l6',
    'Last 6 Months',
    'an-x an-x2',
    '2026-05-01 – 2026-10-17',
    '2025-11-12 – 2026-04-30',
    [61218.65, 10842, 497, 12710],
    [55904.1, 9958, 455, 12960],
  ],
  [
    'ty',
    'This Year',
    'an-x an-x2',
    '2026-01-01 – 2026-10-17',
    '2025-03-17 – 2025-12-31',
    [101934.2, 18105, 812, 21486],
    [88612.75, 15890, 690, 19902],
  ],
]
// Active subscriptions is a live count; the previous figure is what it was at the end of the previous period.
const prevActive: Record<Key, number> = { tm: 417, lm: 409, l3: 396, l6: 371, ty: 344 }

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const HOURS = Array.from({ length: 19 }, (_, i) => i + 5).map((h) =>
  h < 12 ? `${h}a` : h === 12 ? '12p' : `${h - 12}p`,
)
const heat = [
  [4, 28, 35, 16, 10, 8, 6, 6, 5, 4, 5, 11, 22, 40, 39, 34, 21, 9, 2],
  [4, 33, 31, 19, 10, 7, 6, 6, 5, 4, 6, 12, 21, 38, 38, 33, 19, 8, 2],
  [4, 29, 32, 16, 10, 8, 6, 6, 5, 4, 6, 11, 23, 33, 39, 36, 18, 8, 2],
  [4, 31, 33, 19, 9, 8, 7, 6, 5, 4, 6, 12, 22, 34, 42, 36, 21, 8, 2],
  [3, 26, 26, 15, 8, 6, 5, 5, 4, 3, 5, 11, 17, 32, 36, 33, 18, 7, 2],
  [2, 13, 16, 9, 4, 3, 3, 3, 2, 2, 3, 5, 10, 17, 19, 18, 9, 4, 1],
  [2, 16, 22, 11, 6, 5, 4, 4, 3, 2, 3, 7, 12, 21, 24, 20, 11, 4, 1],
]
const MAX = Math.max(...heat.flat())
const n = (v: number) => v.toLocaleString('en-US')

function Delta(p: { cur: number; prev: number; money?: boolean }) {
  const pct = () => ((p.cur - p.prev) / p.prev) * 100
  const up = () => pct() >= 0
  const abs = () => {
    const d = Math.abs(p.cur - p.prev)
    return `${up() ? '+' : '−'}${p.money ? d.toFixed(3) : n(d)}`
  }
  const txt = () => `${up() ? '+' : '-'}${Math.abs(pct()).toFixed(1)}%`
  return (
    <span class="an-d" classList={{ 'an-up': up(), 'an-dn': !up() }} title={`${abs()} vs previous period (${txt()})`}>
      <Icon n="trend" />
      {txt()}
    </span>
  )
}

export default function Analytics() {
  const [key, setKey] = createSignal<Key>('tm')
  const [cmp, setCmp] = createSignal(true)
  const [cell, setCell] = createSignal<[number, number] | null>(null)
  const p = () => periods.find((x) => x[0] === key()) ?? periods[0]
  const cur = () => p()[5]
  const prev = () => p()[6]

  const Kpi = (k: { label: string; v: string; i: number; sub: string; ic: string; c: string; money?: boolean }) => (
    <div class="an-kpi">
      <div>
        <p>{k.label}</p>
        <div class="an-v">
          <b>{k.v}</b>
          <Show when={cmp()}>
            <Delta cur={k.i < 0 ? 428 : cur()[k.i]} prev={k.i < 0 ? prevActive[key()] : prev()[k.i]} money={k.money} />
          </Show>
        </div>
        <small>{k.sub}</small>
      </div>
      <span class={`an-ic ${k.c}`}>
        <Icon n={k.ic} />
      </span>
    </div>
  )

  return (
    <section
      class="mx mx-analytics"
      data-ui
      aria-label="Analytics page: pick a period, compare with the previous one, and read the peak hours heatmap"
    >
      <div class="an-head">
        <div>
          <h3 class="an-h1">Analytics</h3>
          <p class="an-sub">Business insights and performance metrics</p>
        </div>
        <div class="an-sel">
          <For each={periods}>
            {([k, label, x]) => (
              <button
                type="button"
                class={x}
                classList={{ 'an-on': key() === k }}
                aria-pressed={key() === k}
                onClick={() => setKey(k)}
              >
                {label}
              </button>
            )}
          </For>
          <button
            type="button"
            classList={{ 'an-cmp': cmp() }}
            aria-pressed={cmp()}
            title="Compare with previous period"
            onClick={() => setCmp(!cmp())}
          >
            Compare
          </button>
        </div>
      </div>

      <Show when={cmp()}>
        <div class="an-banner">
          <div class="an-bl">
            <b>Comparing:</b>
            <span>{p()[3]}</span>
            <span class="an-vs">vs</span>
            <span>{p()[4]}</span>
          </div>
          <div class="an-leg">
            <span>
              <i class="an-solid" />
              Current period
            </span>
            <span>
              <i class="an-dash" />
              Previous period
            </span>
          </div>
        </div>
      </Show>

      <div class="an-kpis">
        <Kpi
          label="Total Revenue (Gross)"
          v={bhd(cur()[0])}
          i={0}
          money
          sub={`${n(cur()[1])} sales`}
          ic="cash"
          c="an-blue"
        />
        <Kpi label="New Memberships" v={n(cur()[2])} i={2} sub="sold this period" ic="trend" c="an-green" />
        <Kpi label="Active Subscriptions" v="428" i={-1} sub="current active memberships" ic="users" c="an-violet" />
        <Kpi label="Class Attendance" v={n(cur()[3])} i={3} sub="total attended this period" ic="zap" c="an-orange" />
      </div>

      <div class="an-card">
        <h4 class="an-ct">
          <Icon n="clock" />
          Peak Hours Heatmap
        </h4>
        <div class="an-heat" onPointerLeave={(e) => e.pointerType === 'mouse' && setCell(null)}>
          <span />
          <For each={HOURS}>{(h) => <span class="an-hl">{h}</span>}</For>
          <For each={DAYS}>
            {(day, d) => (
              <>
                <span class="an-dl">{day}</span>
                <For each={heat[d()]}>
                  {(v, h) => (
                    // biome-ignore lint/a11y/noStaticElementInteractions lint/a11y/useKeyWithClickEvents: pointer readout; each cell also carries its value in title
                    <i
                      style={{ '--o': (0.15 + (v / MAX) * 0.85).toFixed(2) }}
                      classList={{ 'an-hot': cell()?.[0] === d() && cell()?.[1] === h() }}
                      title={`${day} ${HOURS[h()]}: ${v} attended`}
                      onPointerEnter={() => setCell([d(), h()])}
                      onClick={() => setCell([d(), h()])}
                    />
                  )}
                </For>
              </>
            )}
          </For>
        </div>
        <div class="an-scale">
          <span>Low</span>
          <span class="an-sw">
            <i style="--o:.15" />
            <i style="--o:.35" />
            <i style="--o:.55" />
            <i style="--o:.75" />
            <i style="--o:1" />
          </span>
          <span>High</span>
          <span class="an-read" role="status">
            {(() => {
              const c = cell()
              return c ? `${DAYS[c[0]]} ${HOURS[c[1]]}: ${heat[c[0]][c[1]]} attended` : ''
            })()}
          </span>
        </div>
      </div>
    </section>
  )
}
