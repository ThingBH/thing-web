import { createSignal, For, Match, onCleanup, onMount, Show, Switch } from 'solid-js'
import './StaffApp.css'
import { createToast, Icon } from './shared'

type Period = 'today' | 'd7' | 'd30'
type Sheet = 'leave' | 'slips' | 'pt' | null

const PERIODS: [Period, string][] = [
  ['today', 'Today'],
  ['d7', '7d'],
  ['d30', '30d'],
]
const kpis: Record<
  Period,
  { rev: string; delta: string; up: boolean; active: number; males: number; females: number; ms: number[] }
> = {
  today: { rev: 'BHD 1,284.500', delta: '+8.2%', up: true, active: 428, males: 61, females: 67, ms: [428, 9, 6, 61] },
  d7: { rev: 'BHD 8,912.250', delta: '+4.1%', up: true, active: 431, males: 214, females: 236, ms: [431, 12, 5, 58] },
  d30: {
    rev: 'BHD 36,480.000',
    delta: '−2.3%',
    up: false,
    active: 437,
    males: 402,
    females: 455,
    ms: [437, 15, 8, 72],
  },
}
const MS: [string, string][] = [
  ['a', 'Active'],
  ['s', 'Scheduled'],
  ['f', 'Frozen'],
  ['e', 'Expired'],
]
const hm = (min: number) => (min >= 60 ? `${Math.floor(min / 60)}h ${min % 60}m` : `${min}m`)
const clock = (d: Date) => d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

export default function StaffApp() {
  const { say, Toast } = createToast()
  const [since, setSince] = createSignal<Date | null>(null)
  const [now, setNow] = createSignal(0)
  const [worked, setWorked] = createSignal(0) // minutes from sessions finished in the demo
  const [period, setPeriod] = createSignal<Period>('today')
  const [sheet, setSheet] = createSignal<Sheet>(null)
  const [unlocked, setUnlocked] = createSignal(false)
  let sheetEl: HTMLDivElement | undefined
  let opener: HTMLElement | undefined

  onMount(() => {
    const tick = setInterval(() => setNow(Date.now()), 250)
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && sheet() && close()
    document.addEventListener('keydown', esc)
    onCleanup(() => {
      clearInterval(tick)
      document.removeEventListener('keydown', esc)
    })
  })

  const secs = () => {
    const s = since()
    return s ? Math.max(0, Math.floor((now() - s.getTime()) / 1000)) : 0
  }
  // The open session counts from its first minute, so Today moves the moment you check in.
  const live = () => worked() + (since() ? Math.ceil((secs() + 1) / 60) : 0)
  const elapsed = () => {
    const s = secs()
    return `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
  }
  const checkIn = () => {
    setNow(Date.now())
    setSince(new Date())
    say('Checked in')
  }
  const checkOut = () => {
    setWorked(live())
    setSince(null)
    say('Checked out')
  }
  const show = (s: Sheet) => (e: MouseEvent) => {
    opener = e.currentTarget as HTMLElement
    setSheet(s)
    sheetEl?.focus()
  }
  const close = () => {
    setSheet(null)
    opener?.focus()
  }
  const k = () => kpis[period()]

  return (
    <section
      class="mx mx-staffapp"
      data-ui
      aria-label="Staff app in dark mode: a coach's My Work screen with geofenced check-in, and the owner's Dashboard"
    >
      <div class="mx-staffapp-in">
        <section class="mx-staffapp-ph" aria-label="My Work screen">
          <div class="mx-staffapp-scroll">
            <h3>My Work</h3>
            <div class="mx-staffapp-card ol pad">
              <span class="mx-staffapp-mut sm">Today</span>
              <b class="mx-staffapp-h4">{hm(135 + live())}</b>
            </div>
            <Show
              when={since()}
              fallback={
                <div class="mx-staffapp-card ck">
                  <span class="mx-staffapp-mut">You're not checked in</span>
                  <span class="mx-staffapp-mut sm">Shift today 9:00 – 17:00</span>
                  <span class="mx-staffapp-pill">
                    <Icon n="check" />
                    In range · 40 m
                  </span>
                  <button type="button" class="mx-staffapp-btn" onClick={checkIn}>
                    Check In
                  </button>
                </div>
              }
            >
              {(s) => (
                <div class="mx-staffapp-card ck">
                  <span class="mx-staffapp-mut sm">Checked in since {clock(s())}</span>
                  <span class="mx-staffapp-pill">
                    <Icon n="check" />
                    In range · 40 m
                  </span>
                  <span class="mx-staffapp-badge">On time</span>
                  <span class="mx-staffapp-mut sm">Shift today 9:00 – 17:00</span>
                  <b class="mx-staffapp-timer" role="timer">
                    {elapsed()}
                  </b>
                  <button type="button" class="mx-staffapp-btn out" onClick={checkOut}>
                    Check Out
                  </button>
                </div>
              )}
            </Show>
            <div class="mx-staffapp-card ol">
              <div class="mx-staffapp-kv">
                <span>Today's shift</span>
                <b>9:00 – 17:00</b>
              </div>
              <div class="mx-staffapp-kv">
                <span>This week</span>
                <b>{hm(32 * 60 + 10 + live())}</b>
              </div>
            </div>
            <button type="button" class="mx-staffapp-card ol mx-staffapp-entry" onClick={show('leave')}>
              <Icon n="cal" />
              <span>
                <b>Leave</b>
                <small>Balances and requests</small>
              </span>
              <Icon n="right" class="ch" />
            </button>
            <button type="button" class="mx-staffapp-card ol mx-staffapp-entry" onClick={show('slips')}>
              <Icon n="wallet" />
              <span>
                <b>Salary slips</b>
                <small>View and download your payslips</small>
              </span>
              <Icon n="right" class="ch" />
            </button>
            <button type="button" class="mx-staffapp-card ol mx-staffapp-entry" onClick={show('pt')}>
              <Icon n="dumbbell" />
              <span>
                <b>My PT sessions</b>
                <small>Your coaching schedule</small>
              </span>
              <Icon n="right" class="ch" />
            </button>
          </div>
          <div class="mx-staffapp-tabs">
            <span>
              <Icon n="grid" />
              Dashboard
            </span>
            <span class="on">
              <Icon n="clock" />
              My Work
            </span>
            <span>
              <Icon n="menu" />
              More
            </span>
          </div>

          <Show when={sheet()}>
            <button type="button" class="mx-staffapp-scrim" aria-label="Close" tabIndex={-1} onClick={close} />
            <div
              ref={sheetEl}
              class="mx-staffapp-sheet"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mx-staffapp-sheet-h"
              tabIndex={-1}
            >
              <div class="hd">
                <b id="mx-staffapp-sheet-h">
                  {sheet() === 'leave' ? 'Leave' : sheet() === 'slips' ? 'Salary slips' : 'My PT sessions'}
                </b>
                <button type="button" class="x" aria-label="Close" onClick={close}>
                  <Icon n="x" />
                </button>
              </div>
              <Switch>
                <Match when={sheet() === 'leave'}>
                  <span class="mx-staffapp-mut sm">Balances</span>
                  <div class="mx-staffapp-card ol">
                    <div class="mx-staffapp-kv">
                      <span>
                        Annual leave<small>21 entitled · 6.5 taken</small>
                      </span>
                      <b>14.5 days</b>
                    </div>
                    <div class="mx-staffapp-kv">
                      <span>
                        Sick leave<small>15 entitled · 2 taken</small>
                      </span>
                      <b>13 days</b>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="mx-staffapp-btn"
                    onClick={() => {
                      close()
                      say('Request submitted')
                    }}
                  >
                    Request leave
                  </button>
                </Match>
                <Match when={sheet() === 'slips' && !unlocked()}>
                  <div class="lock">
                    <Icon n="lock" />
                    <b>Your salary slips are protected</b>
                    <span class="mx-staffapp-mut sm">
                      Unlock with Face ID, Touch ID, or your device passcode to view your payslips.
                    </span>
                  </div>
                  <button type="button" class="mx-staffapp-btn" onClick={() => setUnlocked(true)}>
                    Unlock
                  </button>
                </Match>
                <Match when={sheet() === 'slips'}>
                  <div class="mx-staffapp-card ol">
                    <For each={['September 2026', 'August 2026', 'July 2026']}>
                      {(m) => (
                        <button type="button" class="mx-staffapp-kv" onClick={() => say(`${m} payslip downloaded`)}>
                          <span>
                            {m}
                            <small>Net pay</small>
                          </span>
                          <b>BHD 612.500</b>
                        </button>
                      )}
                    </For>
                  </div>
                </Match>
                <Match when={sheet() === 'pt'}>
                  <span class="mx-staffapp-mut sm">Sessions</span>
                  <div class="mx-staffapp-card ol">
                    <div class="mx-staffapp-kv">
                      <span>
                        Aisha Kamal<small>Today · 10:00</small>
                      </span>
                      <b>Scheduled</b>
                    </div>
                    <div class="mx-staffapp-kv">
                      <span>
                        Omar Haddad<small>Today · 18:30</small>
                      </span>
                      <b>Scheduled</b>
                    </div>
                  </div>
                </Match>
              </Switch>
            </div>
          </Show>
          <Toast />
        </section>

        <section class="mx-staffapp-ph" aria-label="Owner dashboard screen">
          <div class="mx-staffapp-scroll">
            <h3>Dashboard</h3>
            <p class="mx-staffapp-greet">Good morning</p>
            {/* biome-ignore lint/a11y/useSemanticElements: a fieldset brings its own border and padding */}
            <div class="mx-staffapp-seg" role="group" aria-label="Period">
              <For each={PERIODS}>
                {([p, label]) => (
                  <button
                    type="button"
                    class={period() === p ? 'on' : ''}
                    aria-pressed={period() === p}
                    onClick={() => setPeriod(p)}
                  >
                    {label}
                  </button>
                )}
              </For>
            </div>
            <div class="mx-staffapp-kpis">
              <div class="mx-staffapp-card ol pad mx-staffapp-kpi">
                <span class="mx-staffapp-mut">Revenue</span>
                <b>{k().rev}</b>
                <em class={k().up ? '' : 'dn'}>
                  {k().up ? '↑' : '↓'} {k().delta}
                </em>
              </div>
              <div class="mx-staffapp-card ol pad mx-staffapp-kpi">
                <span class="mx-staffapp-mut">Active Members</span>
                <b>{k().active}</b>
              </div>
              <div class="mx-staffapp-card ol pad mx-staffapp-kpi">
                <span class="mx-staffapp-mut">Males</span>
                <b>{k().males}</b>
                <span class="mx-staffapp-mut">checked in</span>
              </div>
              <div class="mx-staffapp-card ol pad mx-staffapp-kpi">
                <span class="mx-staffapp-mut">Females</span>
                <b>{k().females}</b>
                <span class="mx-staffapp-mut">checked in</span>
              </div>
            </div>
            <div class="mx-staffapp-ms">
              <b class="mx-staffapp-sec">Membership Status</b>
              <div class="mx-staffapp-bar">
                <For each={MS}>{([c], i) => <i class={c} style={{ flex: k().ms[i()] }} />}</For>
              </div>
              <div class="mx-staffapp-leg">
                <For each={MS}>
                  {([c, label], i) => (
                    <span>
                      <i class={c} />
                      {label} <b>{k().ms[i()]}</b>
                    </span>
                  )}
                </For>
              </div>
            </div>
            <div class="mx-staffapp-card ol pad mx-staffapp-who">
              <b class="cap">Who's in now (3)</b>
              <div class="row">
                <i />
                <span>
                  <b>Sara Ahmed</b>
                  <small>in since 6:02 AM</small>
                </span>
              </div>
              <div class="row">
                <i />
                <span>
                  <b>Layla Hassan</b>
                  <small>in since 8:55 AM</small>
                </span>
              </div>
              <div class="row">
                <i />
                <span>
                  <b>Ali Hassan</b>
                  <small>in since 9:01 AM</small>
                </span>
              </div>
            </div>
          </div>
          <div class="mx-staffapp-tabs">
            <span class="on">
              <Icon n="grid" />
              Dashboard
            </span>
            <span>
              <Icon n="clock" />
              My Work
            </span>
            <span>
              <Icon n="menu" />
              More
            </span>
          </div>
        </section>
      </div>
    </section>
  )
}
