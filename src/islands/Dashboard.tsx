import { createMemo, createSignal, For, Match, onCleanup, onMount, Show, Switch } from 'solid-js'
import { createStore } from 'solid-js/store'
import '../styles/dash.css'
import {
  badgeCls,
  bhd,
  days,
  hours,
  initials,
  nextScans,
  type PeriodKey,
  people,
  periods,
  products,
  type Scan,
  scans as scans0,
  sched,
  staff,
  statusLabel,
} from './dashboard-data'

type View = 'dash' | 'cust' | 'chk' | 'cls' | 'pos' | 'pay'
type Props = { start?: View; open?: number }

const navs: { g: string; c: string; items: [View, string, string][] }[] = [
  { g: 'Overview', c: '#2563eb', items: [['dash', 'Dashboard', 'grid']] },
  {
    g: 'Members',
    c: '#16a34a',
    items: [
      ['cust', 'Customers', 'users'],
      ['chk', 'Check-ins', 'door'],
      ['cls', 'Classes', 'cal'],
    ],
  },
  { g: 'Business', c: '#ea580c', items: [['pos', 'Point of Sale', 'store']] },
  { g: 'Team', c: '#9333ea', items: [['pay', 'Payroll', 'brief']] },
]
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0)
const first = (n: string) => n.split(' ')[0]

const I = (p: { n: string; c?: string }) => (
  <svg class={p.c ? `i ${p.c}` : 'i'} aria-hidden="true">
    <use href={`#i-${p.n}`} />
  </svg>
)
const Crumb = (p: { t: string }) => (
  <div class="crumb">
    ABC Gym <I n="right" />
    <b>{p.t}</b>
  </div>
)

export default function Dashboard(props: Props) {
  const [view, setView] = createSignal<View>(props.start ?? 'dash')
  const [period, setPeriod] = createSignal<PeriodKey>('mtd')
  const [q, setQ] = createSignal('')
  const [sel, setSel] = createSignal<number | null>(props.open ?? null)
  const [enter, setEnter] = createSignal(false)
  const [ppl, setPpl] = createStore(structuredClone(people))
  const [scans, setScans] = createSignal<Scan[]>([...scans0])
  const [fresh, setFresh] = createSignal(false)
  const [booked, setBooked] = createSignal<Record<string, boolean>>({})
  const [ticket, setTicket] = createSignal<{ n: string; p: number; q: number }[]>([])
  const [toast, setToast] = createSignal<{ msg: string } | null>(null)
  const [clock, setClock] = createSignal('07:42:10')
  const [fit, setFit] = createSignal<{ k: number; h: number; compact: boolean } | null>(null)
  let host!: HTMLDivElement
  let viewEl!: HTMLDivElement
  let invoice = 4118
  let scanI = 0
  let toastT: ReturnType<typeof setTimeout> | undefined

  onMount(() => {
    const measure = () => {
      const w = host.clientWidth
      if (!w) return
      const compact = w < 700
      const k = w / (compact ? 780 : 1280)
      setFit({ k, h: Math.round((compact ? 860 : 780) * k), compact })
    }
    const ro = new ResizeObserver(measure)
    ro.observe(host)
    measure()
    const p = (n: number) => String(n).padStart(2, '0')
    const tick = setInterval(() => {
      const d = new Date()
      setClock(`07:${p(42 + Math.floor((d.getMinutes() % 10) / 5))}:${p(d.getSeconds())}`)
    }, 1000)
    onCleanup(() => {
      ro.disconnect()
      clearInterval(tick)
      clearTimeout(toastT)
    })
  })

  const say = (msg: string) => {
    setToast({ msg })
    clearTimeout(toastT)
    toastT = setTimeout(() => setToast(null), 2600)
  }
  const go = (v: View) => {
    if (view() === v) return
    setView(v)
    setSel(null)
    setFresh(false)
    viewEl.classList.remove('swap')
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    void viewEl.offsetWidth // restart the animation
    viewEl.classList.add('swap')
  }
  const open = (id: number) => {
    setSel(id)
    setEnter(true)
    if (view() !== 'cust') {
      setView('cust')
      setQ('')
    }
  }
  const person = () => ppl.find((x) => x.id === sel())
  const rows = createMemo(() => {
    const s = q().trim().toLowerCase()
    return ppl
      .filter((x) => !s || `${x.n} ${x.no} ${x.plan} ${statusLabel[x.st]}`.toLowerCase().includes(s))
      .slice(0, 7)
  })
  const subtotal = () => sum(ticket().map((t) => t.p * t.q))
  const okScans = () => scans().filter((x) => x.ok).length
  const addScan = (s: Omit<Scan, 't'>) => setScans((xs) => [{ t: `07:4${xs.length % 10}`, ...s }, ...xs])

  const spark = createMemo(() => {
    const p = periods[period()]
    const max = Math.max(...p.pts)
    const W = 520
    const H = 120
    const n = p.pts.length
    const xy = p.pts.map((v, i) => [24 + (i * (W - 48)) / (n - 1), 14 + (H - 40) * (1 - v / max)])
    const line = xy.map((pt, i) => `${i ? 'L' : 'M'}${pt[0].toFixed(1)} ${pt[1].toFixed(1)}`).join(' ')
    return { p, xy, line, area: `${line} L${xy[n - 1][0]} ${H - 22} L${xy[0][0]} ${H - 22} Z`, last: xy[n - 1], H }
  })

  const book = (k: string, full: boolean) => {
    if (full) return say('That class is full. Aisha is on the waitlist.')
    const on = !booked()[k]
    setBooked((b) => ({ ...b, [k]: on }))
    say(on ? `Aisha booked into ${sched[k][0]}. She gets a reminder an hour before.` : 'Booking cancelled.')
  }
  const add = (i: number) => {
    const p = products[i]
    setTicket((t) =>
      t.some((x) => x.n === p.n)
        ? t.map((x) => (x.n === p.n ? { ...x, q: x.q + 1 } : x))
        : [...t, { n: p.n, p: p.p, q: 1 }],
    )
  }

  const DashView = () => {
    const exp = () => ppl.filter((x) => x.st === 'wn' || x.st === 'no')
    const lc = () => spark().p.label.toLowerCase()
    return (
      <>
        <div class="ph">
          <div>
            <h4>Good morning, Layla</h4>
            <p>Here's what's happening at ABC Gym today.</p>
          </div>
          <div class="clock">
            <b>{clock()}</b>
            <small>Saturday, 17 October 2026</small>
            <small>Asia/Bahrain</small>
          </div>
        </div>
        <div class="card">
          <div class="card-h">
            <b>Today at a Glance</b>
            <small>Saturday, 17 October 2026</small>
          </div>
          <div class="tiles">
            <div class="t-indigo">
              <I n="cal" />
              <b>6</b>
              <small>Classes</small>
            </div>
            <div class="t-teal">
              <I n="uplus" />
              <b>4</b>
              <small>New Customers</small>
            </div>
            <div class="t-purple">
              <I n="cart" />
              <b>BHD 412.500</b>
              <small>Revenue</small>
            </div>
          </div>
        </div>
        {/* biome-ignore lint/a11y/useSemanticElements: a fieldset would bring its own border and padding into dash.css */}
        <div class="segc" role="group" aria-label="Period">
          <For each={Object.keys(periods) as PeriodKey[]}>
            {(k) => (
              <button
                type="button"
                class={k === period() ? 'on' : ''}
                aria-pressed={k === period()}
                onClick={() => setPeriod(k)}
              >
                {periods[k].label}
              </button>
            )}
          </For>
        </div>
        <div class="kpis">
          <div class="t-teal">
            <span>
              <I n="uplus" />
              New customers
            </span>
            <b>{spark().p.nc}</b>
            <small>{lc()}</small>
          </div>
          <div class="t-green">
            <span>
              <I n="users" />
              Active members
            </span>
            <b>{spark().p.am}</b>
            <small>with active subscriptions</small>
          </div>
          <div class="t-indigo">
            <span>
              <I n="arrow" />
              Transactions
            </span>
            <b>{spark().p.tx.toLocaleString('en')}</b>
            <small>{lc()}</small>
          </div>
          <div class="t-purple">
            <span>
              <I n="cart" />
              Sales
            </span>
            <b>BHD {spark().p.sales}</b>
            <small>{lc()}</small>
          </div>
        </div>
        <div class="two">
          <div class="card">
            <div class="card-h">
              <b>Revenue</b>
              <small>{spark().p.label}</small>
            </div>
            <svg class="spark" viewBox="0 0 520 120" preserveAspectRatio="none" aria-hidden="true">
              <path class="area" d={spark().area} />
              <path class="ln" d={spark().line} />
              <circle class="dot" cx={spark().last[0]} cy={spark().last[1]} r="4" />
              <For each={spark().p.axis}>
                {(a, i) => (
                  <text x={spark().xy[i()][0]} y={spark().H - 6} text-anchor="middle">
                    {a}
                  </text>
                )}
              </For>
            </svg>
          </div>
          <div class="card">
            <div class="card-h">
              <b>Needs attention</b>
              <small>{exp().length} members</small>
            </div>
            <div class="list">
              <For each={exp()}>
                {(x) => (
                  <button type="button" class="li" onClick={() => open(x.id)}>
                    <span class="av">{initials(x.n)}</span>
                    <span>
                      <b style="font-weight:500">{x.n}</b>
                      <small>
                        {x.plan} · {x.ends}
                      </small>
                    </span>
                    <span class={`badge ${badgeCls[x.st]}`}>{statusLabel[x.st]}</span>
                  </button>
                )}
              </For>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Drawer = () => (
    <Show when={person()} keyed>
      {(x) => {
        const pct = () => Math.max(0, Math.min(100, Math.round((100 * x.left) / x.total)))
        return (
          <div class="drawer" classList={{ enter: enter() }} role="dialog" aria-label={x.n}>
            <button type="button" class="x" aria-label="Close" onClick={() => setSel(null)}>
              <I n="x" />
            </button>
            <div class="dhead">
              <span class="av-s">{initials(x.n)}</span>
              <span>
                <b>{x.n}</b>
                <small>
                  {x.no} · {x.br}
                </small>
              </span>
            </div>
            <div class="memcard">
              <div class="top2">
                <b>{x.plan}</b>
                <span class={`badge ${badgeCls[x.st]}`}>{statusLabel[x.st]}</span>
              </div>
              <div class="bar2">
                <i style={{ width: `${pct()}%` }} />
              </div>
              <div class="top2">
                <small>{x.st === 'no' ? `Ended ${x.ends}` : `${x.left} ${x.unit || 'days'} left`}</small>
                <small>{x.st === 'no' ? '' : `Ends ${x.ends}`}</small>
              </div>
            </div>
            <div class="kv">
              <div>
                <small>Last visit</small>
                <b>{x.last}</b>
              </div>
              <div>
                <small>Branch access</small>
                <b>{x.br}</b>
              </div>
              <div>
                <small>Wallet pass</small>
                <b>Apple Wallet</b>
              </div>
              <div>
                <small>Balance</small>
                <b>BHD 0.000</b>
              </div>
            </div>
            <div class="acts">
              <button
                type="button"
                class="ui-btn p"
                onClick={() => {
                  const total = x.unit ? x.total : 90
                  setPpl((p) => p.id === x.id, { st: 'ok', left: total, total, ends: '17 Jan 2027' })
                  say(`Payment link sent to ${first(x.n)} on WhatsApp.`)
                }}
              >
                <I n="chat" />
                Send renewal link
              </button>
              <button
                type="button"
                class="ui-btn o"
                onClick={() => {
                  if (x.st === 'fz') {
                    setPpl((p) => p.id === x.id, { st: 'ok', ends: '13 Apr 2027' })
                    say('Unfrozen. Days carried over.')
                  } else {
                    setPpl((p) => p.id === x.id, { st: 'fz', ends: 'Frozen until 1 Nov' })
                    say(`${first(x.n)}'s membership is frozen.`)
                  }
                }}
              >
                <I n="snow" />
                {x.st === 'fz' ? 'Unfreeze' : 'Freeze'}
              </button>
              <button
                type="button"
                class="ui-btn o"
                onClick={() => {
                  const ok = x.st === 'ok' || x.st === 'wn'
                  addScan({
                    n: x.n,
                    how: 'Front desk',
                    door: 'Reception',
                    ok,
                    why: ok ? x.plan : statusLabel[x.st],
                  })
                  say(ok ? `${first(x.n)} checked in.` : `Denied: membership ${statusLabel[x.st].toLowerCase()}.`)
                }}
              >
                <I n="door" />
                Check in
              </button>
            </div>
          </div>
        )
      }}
    </Show>
  )

  const CustView = () => (
    <>
      <Crumb t="Customers" />
      <div class="ph">
        <div>
          <h4>Customers</h4>
          <p>View and manage registered customer profiles</p>
        </div>
        <button type="button" class="ui-btn p" onClick={() => say('Tap their CPR card and the form fills itself in.')}>
          <I n="plus" />
          New customer
        </button>
      </div>
      <For
        each={
          [
            ['or', 'warn', '1 walk-in awaiting review', ''],
            ['or', 'warn', '2 memberships expiring in the next 14 days', 'Expiring'],
            ['pk', 'cake', 'Noor Al-Sayed has a birthday today', 'Noor'],
          ] as const
        }
      >
        {([tone, icon, text, query]) => (
          <div class={`banner ${tone}`}>
            <I n={icon} />
            {text}
            <button
              type="button"
              class="rv"
              onClick={() => {
                setQ(query)
                setSel(null)
              }}
            >
              Review
            </button>
          </div>
        )}
      </For>
      <div class="tools">
        <label class="search">
          <I n="search" />
          <input
            type="text"
            value={q()}
            placeholder="Search by name or member number…"
            aria-label="Search customers"
            onInput={(e) => {
              setQ(e.currentTarget.value)
              setSel(null)
            }}
          />
        </label>
        <button type="button" class="ui-btn o">
          <I n="filter" />
          Filters
        </button>
      </div>
      <div class="table">
        <div class="tr h">
          <span>Name</span>
          <span>Member no.</span>
          <span>Plan</span>
          <span>Status</span>
          <span>Ends</span>
          <span />
        </div>
        <div>
          <For each={rows()} fallback={<div class="empty">No customers match "{q()}".</div>}>
            {(x) => (
              <button type="button" class="tr" classList={{ sel: sel() === x.id }} onClick={() => open(x.id)}>
                <span class="who">
                  <span class="av-s">{initials(x.n)}</span>
                  <span>{x.n}</span>
                </span>
                <span class="mono" style="font-size:12.5px">
                  {x.no}
                </span>
                <span>{x.plan}</span>
                <span>
                  <span class={`badge ${badgeCls[x.st]}`}>{statusLabel[x.st]}</span>
                </span>
                <span>{x.ends}</span>
                <I n="right" />
              </button>
            )}
          </For>
        </div>
      </div>
      <Drawer />
    </>
  )

  const ChkView = () => (
    <>
      <Crumb t="Check-ins" />
      <div class="ph">
        <div>
          <h4>Check-ins</h4>
          <p>Everyone who came in today, at every door.</p>
        </div>
        <button
          type="button"
          class="ui-btn p"
          onClick={() => {
            scanI = (scanI + 1) % nextScans.length
            addScan(nextScans[scanI])
            setFresh(true)
          }}
        >
          <I n="scan" />
          Simulate a scan
        </button>
      </div>
      <div class="statrow">
        <For
          each={
            [
              ['#0d9488', 'door', () => 180 + okScans(), 'Check-ins'],
              ['#65a30d', 'users', () => 164 + okScans(), 'Unique members'],
              ['#dc2626', 'shieldx', () => scans().length - okScans(), 'Denied'],
              ['#525252', 'scan', () => 180 + scans().length, 'Total scans'],
            ] as const
          }
        >
          {([color, icon, value, label]) => (
            <div>
              <span style={{ color }}>
                <I n={icon} />
              </span>
              <span>
                <b>{value()}</b>
                <small>{label}</small>
              </span>
            </div>
          )}
        </For>
      </div>
      <div class="feed">
        <div class="fr h">
          <span>Time</span>
          <span>Member</span>
          <span>Credential</span>
          <span>Door</span>
          <span>Result</span>
        </div>
        <For each={scans().slice(0, 8)}>
          {(x, i) => (
            <div class="fr" classList={{ new: i() === 0 && fresh() }}>
              <time>{x.t}</time>
              <span>
                <b style="font-weight:500">{x.n}</b>
                <small style="display:block;color:#737373;font-size:12px">{x.why}</small>
              </span>
              <span>{x.how}</span>
              <span>{x.door}</span>
              <span class={`badge ${x.ok ? 'b-ok' : 'b-no'}`}>{x.ok ? 'Allowed' : 'Denied'}</span>
            </div>
          )}
        </For>
      </div>
    </>
  )

  const ClsView = () => (
    <>
      <Crumb t="Classes" />
      <div class="ph">
        <div>
          <h4>Classes</h4>
          <p>This week at Seef. Click a class to book Aisha in.</p>
        </div>
        <button type="button" class="ui-btn o">
          <I n="plus" />
          Schedule class
        </button>
      </div>
      <div class="week">
        <div class="dh" />
        <For each={days}>
          {(d, i) => <div class={`dh${i() === 0 ? ' today' : ''}${i() > 2 ? ' wide' : ''}`}>{d}</div>}
        </For>
        <For each={hours}>
          {(h, r) => (
            <>
              <div class="hr">{h}</div>
              <For each={days}>
                {(_, c) => {
                  const k = `${c()}-${r()}`
                  const x = sched[k]
                  const cls = c() > 2 ? 'slot wide' : 'slot'
                  if (!x) return <div class={cls} />
                  const b = () => !!booked()[k]
                  const cnt = () => x[2] + (b() ? 1 : 0)
                  const full = () => cnt() >= x[3] && !b()
                  return (
                    <div class={cls}>
                      <button
                        type="button"
                        class={`cl ${x[4]}`}
                        classList={{ booked: b() }}
                        onClick={() => book(k, full())}
                      >
                        <b>{x[0]}</b>
                        <span>Coach {x[1]}</span>
                        <span>
                          {cnt()}/{x[3]}
                          {full() ? ' · Full' : b() ? ' · Booked' : ''}
                        </span>
                      </button>
                    </div>
                  )
                }}
              </For>
            </>
          )}
        </For>
      </div>
    </>
  )

  const PosView = () => (
    <>
      <Crumb t="Point of Sale" />
      <div class="pos2">
        <div class="cat">
          <For each={products}>
            {(p, i) => (
              <button type="button" class="pt" onClick={() => add(i())}>
                <span class="st">{p.st}</span>
                <I n={p.ic} />
                <span />
                <b>{p.n}</b>
                <span class="pr">{bhd(p.p)}</span>
              </button>
            )}
          </For>
        </div>
        <div class="ticket">
          <div class="th">
            <span>
              <I n="users" /> Walk-in guest
            </span>
            <button type="button" class="ui-btn o" onClick={() => setTicket([])}>
              Clear
            </button>
          </div>
          <div class="tl">
            <For each={ticket()} fallback={<div class="empty">Tap a product to start.</div>}>
              {(t) => (
                <div class="tln">
                  <span>
                    <em>×{t.q}</em>
                    {t.n}
                  </span>
                  <span>{bhd(t.p * t.q)}</span>
                </div>
              )}
            </For>
          </div>
          <div class="tt">
            <div>
              <span>Subtotal</span>
              <span>{bhd(subtotal())}</span>
            </div>
            <div>
              <span>VAT 10% (incl.)</span>
              <span>{bhd(subtotal() - subtotal() / 1.1)}</span>
            </div>
            <div class="big">
              <span>Total</span>
              <span>{bhd(subtotal())}</span>
            </div>
          </div>
          <button
            type="button"
            class="charge2"
            disabled={!ticket().length}
            onClick={() => {
              setTicket([])
              invoice++
              say(`Paid. Invoice POS-2026-00${invoice} sent on WhatsApp.`)
            }}
          >
            CHARGE {bhd(subtotal())}
          </button>
        </div>
      </div>
    </>
  )

  const PayView = () => (
    <>
      <Crumb t="Payroll" />
      <div class="ph">
        <div>
          <h4>October 2026 payroll</h4>
          <p>Seef branch · 5 staff · pay date 30 Oct</p>
        </div>
        <button type="button" class="ui-btn p" onClick={() => say('Salary file ready for the bank.')}>
          <I n="file" />
          Export WPS file
        </button>
      </div>
      <div class="pay-sum kpis">
        <div class="t-indigo">
          <span>Gross pay</span>
          <b>{bhd(sum(staff.map((x) => x.b + x.c)))}</b>
        </div>
        <div class="t-red">
          <span>GOSI employee</span>
          <b>{bhd(sum(staff.map((x) => x.g)))}</b>
        </div>
        <div class="t-green">
          <span>Net pay</span>
          <b>{bhd(sum(staff.map((x) => x.net)))}</b>
        </div>
        <div class="t-amber">
          <span>Commissions</span>
          <b>{bhd(sum(staff.map((x) => x.c)))}</b>
        </div>
      </div>
      <div class="table pay-tb">
        <div class="tr h">
          <span>Employee</span>
          <span>Basic</span>
          <span>Commission</span>
          <span>GOSI 8%</span>
          <span>Net</span>
          <span>Status</span>
        </div>
        <For each={staff}>
          {(x) => (
            <div class="tr">
              <span class="who">
                <span class="av-s">{initials(x.n)}</span>
                <span>
                  {x.n}
                  <small style="display:block;color:#737373;font-size:12px;font-family:var(--sans)">{x.r}</small>
                </span>
              </span>
              <span>{x.b.toFixed(3)}</span>
              <span>{x.c.toFixed(3)}</span>
              <span>−{x.g.toFixed(3)}</span>
              <span>{x.net.toFixed(3)}</span>
              <span>
                <span class="badge b-ok" style="font-family:var(--sans)">
                  Ready
                </span>
              </span>
            </div>
          )}
        </For>
      </div>
    </>
  )

  return (
    <div
      ref={host}
      class="fit window"
      data-dash
      // Before measuring (server render), reserve the desktop ratio and clip the unscaled app.
      style={fit() ? { '--k': fit()?.k, height: `${fit()?.h}px` } : { 'aspect-ratio': '1280 / 780', overflow: 'clip' }}
    >
      <div class="stage" data-ui>
        <div class="app" classList={{ compact: !!fit()?.compact }}>
          <aside class="side">
            <div class="org">
              <span class="sq">ABC</span>
              <span>
                <b>ABC Gym</b>
                <small>All branches</small>
              </span>
              <I n="updown" />
            </div>
            <For each={navs}>
              {(g) => (
                <div class="grp">
                  <span style={{ color: g.c }}>{g.g}</span>
                  <For each={g.items}>
                    {([v, label, icon]) => (
                      <button
                        type="button"
                        class="nav-i"
                        classList={{ on: view() === v }}
                        aria-current={view() === v ? 'page' : undefined}
                        style={{ '--tone': g.c }}
                        onClick={() => go(v)}
                      >
                        <I n={icon} />
                        <span class="lbl">{label}</span>
                        <Show when={v === 'cust'}>
                          <span class="ct">2</span>
                        </Show>
                      </button>
                    )}
                  </For>
                </div>
              )}
            </For>
            <div class="me">
              <span class="av">LH</span>
              <span>
                Layla Hassan<small>Front desk · Seef</small>
              </span>
            </div>
          </aside>
          <div class="main">
            <div class="bar">
              <label class="search">
                <I n="search" />
                <input
                  type="text"
                  placeholder="Search members…"
                  aria-label="Search members"
                  onInput={(e) => {
                    setQ(e.currentTarget.value)
                    go('cust')
                  }}
                />
                <kbd>⌘ K</kbd>
              </label>
              <I n="bell" c="bell" />
            </div>
            <div class="view" ref={viewEl}>
              <Switch>
                <Match when={view() === 'dash'}>
                  <DashView />
                </Match>
                <Match when={view() === 'cust'}>
                  <CustView />
                </Match>
                <Match when={view() === 'chk'}>
                  <ChkView />
                </Match>
                <Match when={view() === 'cls'}>
                  <ClsView />
                </Match>
                <Match when={view() === 'pos'}>
                  <PosView />
                </Match>
                <Match when={view() === 'pay'}>
                  <PayView />
                </Match>
              </Switch>
              <Show when={toast()} keyed>
                {(t) => (
                  <div class="toast" role="status">
                    <I n="check" />
                    {t.msg}
                  </div>
                )}
              </Show>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
