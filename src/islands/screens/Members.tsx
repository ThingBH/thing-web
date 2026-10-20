import { createSignal, For, Match, onCleanup, onMount, Show, Switch } from 'solid-js'
import { createStore } from 'solid-js/store'
import { bhd, createToast, Icon } from './shared'
import './Members.css'

// Sample "now" for ABC Gym: Sat 17 Oct 2026, 7:42 AM. Dates are UTC so server and browser agree.
const DAY = 864e5
const D = (y: number, m: number, d: number, h = 0, min = 0) => Date.UTC(y, m - 1, d, h, min)
const NOW = D(2026, 10, 17, 7, 42)
const TODAY = D(2026, 10, 17)
const END = D(2027, 3, 25)
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const date = (t: number) => {
  const d = new Date(t)
  return `${d.getUTCDate()} ${MON[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}
const time = (t: number) => {
  const d = new Date(t)
  const h = d.getUTCHours()
  return `${h % 12 || 12}:${String(d.getUTCMinutes()).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
}
const stamp = (t: number) => {
  const ago = Math.floor(NOW / DAY) - Math.floor(t / DAY)
  return ago === 0 ? `Today, ${time(t)}` : ago === 1 ? `Yesterday, ${time(t)}` : `${date(t)}, ${time(t)}`
}

type Tab = 'sum' | 'plans' | 'hist'
type Kind = 'sale' | 'booking' | 'checkin' | 'membership' | 'admin'
type Ev = { id: string; t: number; kind: Kind; icon: string; title: string; detail?: string; tone: string }
const kindLabel: Record<Kind, string> = {
  sale: 'Sale',
  booking: 'Booking',
  checkin: 'Check-in',
  membership: 'Membership',
  admin: 'Admin',
}
const filters: [Kind | 'all', string, string][] = [
  ['all', 'All', 'clock'],
  ['sale', 'Sales', 'bag'],
  ['booking', 'Bookings', 'cal'],
  ['checkin', 'Check-ins', 'door'],
  ['membership', 'Membership changes', 'card'],
  ['admin', 'Admin actions', 'shield'],
]
const events0: Ev[] = [
  { id: 'c1', t: D(2026, 10, 17, 5, 42), kind: 'checkin', icon: 'door', title: 'Checked in', tone: 'gr' },
  { id: 'c2', t: D(2026, 10, 16, 18, 5), kind: 'checkin', icon: 'door', title: 'Checked in', tone: 'gr' },
  {
    id: 'b1',
    t: D(2026, 10, 14, 20),
    kind: 'booking',
    icon: 'cal',
    title: 'Yoga Flow',
    detail: '8:00 PM – 9:00 PM · ATTENDED',
    tone: 'bl',
  },
  { id: 'c3', t: D(2026, 10, 14, 19, 48), kind: 'checkin', icon: 'door', title: 'Checked in', tone: 'gr' },
  {
    id: 'b2',
    t: D(2026, 10, 12, 18),
    kind: 'booking',
    icon: 'cal',
    title: 'HIIT',
    detail: '6:00 PM – 7:00 PM · ATTENDED',
    tone: 'bl',
  },
  {
    id: 's2',
    t: D(2026, 3, 30, 10, 20),
    kind: 'sale',
    icon: 'bag',
    title: 'Purchased PT / Service Package',
    detail: `${bhd(136)} · Card`,
    tone: 'gr',
  },
  {
    id: 'm1',
    t: D(2026, 3, 30, 10, 12),
    kind: 'membership',
    icon: 'zap',
    title: 'Membership started — Gold — 12 Months',
    detail: '30 Mar 2026 → 25 Mar 2027',
    tone: 'gr',
  },
  {
    id: 's1',
    t: D(2026, 3, 30, 10, 12),
    kind: 'sale',
    icon: 'bag',
    title: 'Purchased Membership Purchase',
    detail: `${bhd(420)} · Card`,
    tone: 'gr',
  },
]
const sellItems: [string, string][] = [
  ['Sell membership', 'card'],
  ['Send payment link', 'arrow'],
  ['Sell PT package', 'dumbbell'],
  ['Sell drop-in', 'dumbbell'],
]

export default function Members() {
  const { say, Toast } = createToast()
  const [tab, setTab] = createSignal<Tab>('sum')
  const [menu, setMenu] = createSignal(false)
  const [ask, setAsk] = createSignal<'up' | 'cancel' | null>(null)
  const [filter, setFilter] = createSignal<Kind | 'all'>('all')
  const [m, setM] = createStore({
    st: 'ACTIVE' as 'ACTIVE' | 'FROZEN' | 'CANCELLED',
    plat: false,
    ext: 0,
    frz: 0,
    pt: 5,
  })
  const [events, setEvents] = createSignal(events0)
  let sellBtn!: HTMLButtonElement
  let menuEl!: HTMLDivElement
  let seq = 0

  const plan = () => `${m.plat ? 'Platinum' : 'Gold'} — 12 Months`
  const end = () => END + (m.ext + m.frz) * DAY
  const left = () => Math.round((end() - TODAY) / DAY)
  const paid = () => (m.plat ? 480 : 420)
  const log = (e: Omit<Ev, 'id' | 't'>) => setEvents((xs) => [{ ...e, id: `n${++seq}`, t: NOW + seq * 60e3 }, ...xs])
  const shown = () => {
    const f = filter()
    return events()
      .filter((e) => f === 'all' || e.kind === f)
      .sort((a, b) => b.t - a.t || Number(a.kind === 'sale') - Number(b.kind === 'sale'))
  }

  const freeze = () => {
    setM({ st: 'FROZEN', frz: 7 })
    log({
      kind: 'membership',
      icon: 'snow',
      title: `Frozen — ${plan()}`,
      detail: `${date(TODAY)} → ${date(TODAY + 7 * DAY)}`,
      tone: 'bl',
    })
    say('Membership frozen')
  }
  const unfreeze = () => {
    setM({ st: 'ACTIVE', frz: 0 })
    say('Membership unfrozen')
  }
  const extend = () => {
    const was = end()
    setM('ext', (x) => x + 7)
    log({
      kind: 'membership',
      icon: 'plus',
      title: `Extended — ${plan()}`,
      detail: `${date(was)} → ${date(end())}`,
      tone: 'bl',
    })
    say('Membership extended')
  }
  const upgrade = () => {
    setM('plat', true)
    setAsk(null)
    log({ kind: 'sale', icon: 'bag', title: 'Purchased Membership Upgrade', detail: `${bhd(60)} · Card`, tone: 'gr' })
    say('Membership upgraded')
  }
  const cancel = () => {
    setM('st', 'CANCELLED')
    setAsk(null)
    log({ kind: 'membership', icon: 'x', title: `Cancelled — ${plan()}`, tone: 'rd' })
    say('Membership cancelled')
  }
  const redeem = () => {
    if (!m.pt) return
    setM('pt', (x) => x - 1)
    say('Session marked as completed')
  }
  const sell = (label: string) => {
    setMenu(false)
    sellBtn.focus()
    say(`${label} opens for Aisha Kamal`)
  }

  onMount(() => {
    const away = (e: PointerEvent) => {
      if (menu() && !menuEl.contains(e.target as Node) && !sellBtn.contains(e.target as Node)) setMenu(false)
    }
    document.addEventListener('pointerdown', away)
    onCleanup(() => document.removeEventListener('pointerdown', away))
  })

  const Confirm = () => (
    <Show when={ask()}>
      {(k) => (
        <div
          class="mm-confirm"
          role="alertdialog"
          aria-label={k() === 'up' ? 'Upgrade membership' : 'Cancel membership'}
        >
          <Show
            when={k() === 'up'}
            fallback={
              <>
                <b>Cancel membership</b>
                <p class="mm-sub">{plan()} ends today. The member loses access at the door.</p>
              </>
            }
          >
            <b>Upgrade membership</b>
            <p class="mm-sub">
              Switch {plan()} to Platinum — 12 Months in place. The start date is kept. Collect{' '}
              <span class="mm-num">{bhd(60)}</span>.
            </p>
          </Show>
          <div class="mm-row">
            <button type="button" class="mm-btn" onClick={() => setAsk(null)}>
              {k() === 'up' ? 'Cancel' : 'Keep membership'}
            </button>
            <Show
              when={k() === 'up'}
              fallback={
                <button type="button" class="mm-btn mm-red" onClick={cancel}>
                  Cancel membership
                </button>
              }
            >
              <button type="button" class="mm-btn mm-pri" onClick={upgrade}>
                Upgrade
              </button>
            </Show>
          </div>
        </div>
      )}
    </Show>
  )
  const Status = () => (
    <span
      class="mm-badge"
      classList={{ 'mm-dark': m.st === 'ACTIVE', 'mm-sec': m.st === 'FROZEN', 'mm-dest': m.st === 'CANCELLED' }}
    >
      {m.st}
    </span>
  )
  const TabBtn = (p: { k: Tab; label: string }) => (
    <button
      type="button"
      role="tab"
      id={`mm-t-${p.k}`}
      aria-controls="mm-pane"
      aria-selected={tab() === p.k}
      classList={{ 'mm-on': tab() === p.k }}
      onClick={() => {
        setTab(p.k)
        setAsk(null)
      }}
    >
      {p.label}
    </button>
  )

  return (
    <section
      class="mx mx-members"
      data-ui
      aria-label="Member profile for Aisha Kamal: active Gold 12 months plan, PT balance, workout stats and lifetime spend"
    >
      <div class="mm-head">
        <div class="mm-id">
          <span class="mm-av" aria-hidden="true">
            A
          </span>
          <div class="mm-who">
            <div class="mm-name">
              <h3>Aisha Kamal</h3>
              <span class="mm-badge" classList={{ 'mm-dark': m.st !== 'CANCELLED', 'mm-sec': m.st === 'CANCELLED' }}>
                {m.st === 'CANCELLED' ? 'Inactive' : 'Active'}
              </span>
              <span class="mm-badge mm-out">
                <Icon n="phone" />
                App enabled
              </span>
            </div>
            <div class="mm-meta">
              <span class="mm-num">#ABC-00412</span>
              <span>
                <Icon n="clock" />
                Last login: 3h ago
              </span>
              <span>
                <Icon n="door" />
                Last check-in: 2h ago
              </span>
            </div>
          </div>
        </div>
        <div class="mm-acts">
          <div class="mm-sell">
            <button
              ref={sellBtn}
              type="button"
              class="mm-btn mm-pri"
              aria-haspopup="menu"
              aria-expanded={menu()}
              onClick={() => setMenu((x) => !x)}
            >
              <Icon n="cart" />
              Sell
              <Icon n="down" class="mm-chev" />
            </button>
            <Show when={menu()}>
              <div
                ref={menuEl}
                class="mm-menu"
                role="menu"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setMenu(false)
                    sellBtn.focus()
                  }
                }}
              >
                <For each={sellItems}>
                  {([label, ic], i) => (
                    <button
                      type="button"
                      role="menuitem"
                      ref={(el) => i() === 0 && queueMicrotask(() => el.focus())}
                      onClick={() => sell(label)}
                    >
                      <Icon n={ic} />
                      {label}
                    </button>
                  )}
                </For>
              </div>
            </Show>
          </div>
          <button type="button" class="mm-btn" onClick={() => say('Opens a WhatsApp chat with Aisha Kamal')}>
            <svg class="mm-wa" viewBox="0 0 24 24" aria-hidden="true">
              <use href="#b-whatsapp" />
            </svg>
            WhatsApp
          </button>
          <button type="button" class="mm-btn mm-x1" onClick={() => say('Book class opens for Aisha Kamal')}>
            <Icon n="cal" />
            Book class
          </button>
          <button type="button" class="mm-btn mm-x1" onClick={() => say('Edit opens the profile form')}>
            Edit
          </button>
          <button type="button" class="mm-btn mm-x2" onClick={() => say('Wallet link copied')}>
            <Icon n="wallet" />
            Add to Wallet
          </button>
          <button type="button" class="mm-btn mm-more" aria-label="More actions" onClick={() => say('More actions')}>
            <i />
            <i />
            <i />
          </button>
        </div>
        <div class="mm-tabs" role="tablist">
          <TabBtn k="sum" label="Summary" />
          <TabBtn k="plans" label="Plans & Services" />
          <TabBtn k="hist" label="History" />
        </div>
      </div>

      <div class="mm-body" id="mm-pane" role="tabpanel" aria-labelledby={`mm-t-${tab()}`}>
        <Switch>
          <Match when={tab() === 'sum'}>
            <div class="mm-two">
              <section class="mm-card">
                <h4>Active membership</h4>
                <Show
                  when={m.st !== 'CANCELLED'}
                  fallback={
                    <>
                      <p class="mm-sub">No active membership</p>
                      <button type="button" class="mm-btn mm-pri mm-self" onClick={() => sell('Sell membership')}>
                        <Icon n="card" />
                        Sell membership
                      </button>
                    </>
                  }
                >
                  <div class="mm-plan">
                    <div>
                      <p class="mm-plan-n">{plan()}</p>
                      <p class="mm-sub">30 Mar 2026 → {date(end())}</p>
                    </div>
                    <Status />
                  </div>
                  <Show when={m.st === 'FROZEN'} fallback={<p class="mm-left">{left()} days remaining</p>}>
                    <p class="mm-frz">Currently frozen · until {date(TODAY + 7 * DAY)}</p>
                  </Show>
                  <p class="mm-sub">
                    Paid <span class="mm-num">{bhd(paid())}</span>
                    {m.frz ? ` · Frozen ${m.frz} days` : ''}
                  </p>
                  <span class="mm-chip">Card</span>
                  <div class="mm-row">
                    <Show
                      when={m.st === 'ACTIVE'}
                      fallback={
                        <button type="button" class="mm-btn mm-pri" onClick={unfreeze}>
                          Unfreeze
                        </button>
                      }
                    >
                      <button type="button" class="mm-btn" onClick={freeze}>
                        Freeze
                      </button>
                      <button type="button" class="mm-btn" onClick={extend}>
                        Extend
                      </button>
                      <Show when={!m.plat}>
                        <button type="button" class="mm-btn" aria-pressed={ask() === 'up'} onClick={() => setAsk('up')}>
                          Upgrade
                        </button>
                      </Show>
                    </Show>
                    <button
                      type="button"
                      class="mm-btn mm-red"
                      aria-pressed={ask() === 'cancel'}
                      onClick={() => setAsk('cancel')}
                    >
                      Cancel
                    </button>
                  </div>
                  <Confirm />
                </Show>
              </section>
              <section class="mm-card">
                <h4>PT &amp; service balance</h4>
                <p class="mm-big">
                  <b>{m.pt}</b>
                  <span>session{m.pt === 1 ? '' : 's'} remaining</span>
                </p>
                <div class="mm-ent">
                  <div>
                    <p class="mm-ent-n">PT 8 sessions</p>
                    <p class="mm-sub">{m.pt} of 8 left · expires 30 Dec 2026</p>
                  </div>
                  <div class="mm-row mm-tight">
                    <button type="button" class="mm-btn" disabled={!m.pt} onClick={redeem}>
                      Redeem
                    </button>
                    <button type="button" class="mm-btn" onClick={() => say('Adjust opens the session balance')}>
                      Adjust
                    </button>
                  </div>
                </div>
                <button type="button" class="mm-btn mm-ghost" onClick={() => sell('Sell PT package')}>
                  + Sell another
                </button>
              </section>
            </div>

            <div class="mm-stats">
              <div class="mm-stat mm-or">
                <p class="mm-sl">
                  <Icon n="trend" />
                  Current streak
                </p>
                <p class="mm-sv">
                  6<small>days</small>
                </p>
              </div>
              <div class="mm-stat mm-bl">
                <p class="mm-sl">
                  <Icon n="dumbbell" />
                  Total workouts
                </p>
                <p class="mm-sv">142</p>
              </div>
              <div class="mm-stat mm-gr">
                <p class="mm-sl">
                  <Icon n="clock" />
                  Last workout
                </p>
                <p class="mm-sv mm-sv-s">1d ago</p>
                <p class="mm-st">16 Oct 2026</p>
              </div>
            </div>

            <section class="mm-card">
              <h4>
                <Icon n="trend" />
                Customer value
              </h4>
              <div class="mm-vals">
                <div>
                  <p>Total spent</p>
                  <b class="mm-strong">{bhd(paid() + 136)}</b>
                </div>
                <div>
                  <p>Memberships</p>
                  <b>{bhd(paid())}</b>
                </div>
                <div>
                  <p>Services</p>
                  <b>{bhd(136)}</b>
                </div>
              </div>
            </section>
          </Match>

          <Match when={tab() === 'plans'}>
            <div class="mm-row">
              <button type="button" class="mm-btn mm-pri" onClick={() => sell('Sell membership')}>
                <Icon n="card" />
                Sell membership
              </button>
              <button type="button" class="mm-btn" onClick={() => sell('Sell service')}>
                <Icon n="dumbbell" />
                Sell service
              </button>
            </div>
            <section class="mm-card">
              <h4>Active</h4>
              <Show when={m.st !== 'CANCELLED'}>
                <div class="mm-prow">
                  <div class="mm-pmain">
                    <div class="mm-pt">
                      <span class="mm-kind">Membership</span>
                      <b>{plan()}</b>
                      <Status />
                    </div>
                    <p class="mm-sub">
                      30 Mar 2026, 10:12 AM → {date(end())}, 11:59 PM · {bhd(paid())} · Card
                      {m.frz ? ` · Frozen ${m.frz}d` : ''}
                    </p>
                  </div>
                  <div class="mm-row mm-pacts">
                    <Show
                      when={m.st === 'ACTIVE'}
                      fallback={
                        <button type="button" class="mm-btn mm-pri" onClick={unfreeze}>
                          Unfreeze
                        </button>
                      }
                    >
                      <button type="button" class="mm-btn" onClick={freeze}>
                        Freeze
                      </button>
                      <button type="button" class="mm-btn" onClick={extend}>
                        Add days
                      </button>
                    </Show>
                    <button type="button" class="mm-btn" onClick={() => say('Move dates opens the date picker')}>
                      Move dates
                    </button>
                    <Show when={!m.plat}>
                      <button type="button" class="mm-btn" aria-pressed={ask() === 'up'} onClick={() => setAsk('up')}>
                        Upgrade
                      </button>
                    </Show>
                    <button
                      type="button"
                      class="mm-btn mm-red"
                      aria-pressed={ask() === 'cancel'}
                      onClick={() => setAsk('cancel')}
                    >
                      Cancel
                    </button>
                  </div>
                  <Confirm />
                </div>
              </Show>
              <div class="mm-prow">
                <div class="mm-pmain">
                  <div class="mm-pt">
                    <span class="mm-kind">Service</span>
                    <b>PT 8 sessions</b>
                    <span class="mm-badge" classList={{ 'mm-dark': m.pt > 0, 'mm-sec': !m.pt }}>
                      {m.pt ? 'ACTIVE' : 'DEPLETED'}
                    </span>
                  </div>
                  <p class="mm-sub">{m.pt}/8 remaining · granted 30 Mar 2026 · expires 30 Dec 2026</p>
                </div>
                <div class="mm-row mm-pacts">
                  <button type="button" class="mm-btn" disabled={!m.pt} onClick={redeem}>
                    Redeem
                  </button>
                  <button type="button" class="mm-btn" onClick={() => say('Adjust opens the session balance')}>
                    Adjust
                  </button>
                </div>
              </div>
            </section>
            <Show when={m.st === 'CANCELLED'}>
              <section class="mm-card">
                <h4>Past</h4>
                <div class="mm-prow mm-past">
                  <div class="mm-pmain">
                    <div class="mm-pt">
                      <span class="mm-kind">Membership</span>
                      <b>{plan()}</b>
                      <Status />
                    </div>
                    <p class="mm-sub">
                      30 Mar 2026, 10:12 AM → {date(end())}, 11:59 PM · {bhd(paid())} · Card
                    </p>
                  </div>
                  <div class="mm-row mm-pacts">
                    <button type="button" class="mm-btn" onClick={() => sell('Renew')}>
                      Renew
                    </button>
                  </div>
                </div>
              </section>
            </Show>
          </Match>

          <Match when={tab() === 'hist'}>
            <div class="mm-row">
              <For each={filters}>
                {([k, label, ic]) => (
                  <button
                    type="button"
                    class="mm-btn"
                    classList={{ 'mm-pri': filter() === k }}
                    aria-pressed={filter() === k}
                    onClick={() => setFilter(k)}
                  >
                    <Icon n={ic} />
                    {label}
                  </button>
                )}
              </For>
            </div>
            <section class="mm-card mm-hist">
              <For
                each={shown()}
                fallback={
                  <div class="mm-empty">
                    <b>No events to show</b>
                    <p class="mm-sub">Try another filter or check back after some activity.</p>
                  </div>
                }
              >
                {(e) => (
                  <div class={`mm-ev mm-t-${e.tone}`}>
                    <Icon n={e.icon} class="mm-evi" />
                    <div class="mm-evb">
                      <div class="mm-pt">
                        <b>{e.title}</b>
                        <span class="mm-kind">{kindLabel[e.kind]}</span>
                      </div>
                      <Show when={e.detail}>
                        <p class="mm-sub">{e.detail}</p>
                      </Show>
                    </div>
                    <time class="mm-sub">{stamp(e.t)}</time>
                  </div>
                )}
              </For>
            </section>
          </Match>
        </Switch>
      </div>
      <Toast />
    </section>
  )
}
