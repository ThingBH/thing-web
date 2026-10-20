import { createSignal, For, Index, Match, onCleanup, onMount, Show, Switch } from 'solid-js'
import { createStore } from 'solid-js/store'
import { createToast, Icon } from './shared'
import './MemberApp.css'

// The rotating check-in code: 25×25 modules. Finder and timing patterns stay put; data modules change per code.
const N = 25
const QR0 =
  '1111111010101111101111111100000100100010100100000110111010101001001010111011011101011111000001011101101110100110001000101110110000010100111111010000011111111010101010101111111000000000110000010000000010010011010111101010101110011000001100011010110010100011111011010101101111101100001001010010010101100011011011010000010101000100100011011110000011111101111011101010110010101111111000001011000110010100010101111111001011111101000000000101010001000101101111111001011100101010000100000100101101010001000110111010010010101111101101011101000010111000000001101110101010111110101100010000010001000000011000011111111011011000011011100'
const fixed = (i: number) => {
  const r = Math.floor(i / N)
  const c = i % N
  const inFinder = (a: number, b: number) => a < 8 && b < 8
  return inFinder(r, c) || inFinder(r, N - 1 - c) || inFinder(N - 1 - r, c) || r === 6 || c === 6
}
const nextCode = (bits: boolean[]) => bits.map((b, i) => (fixed(i) ? b : Math.random() < 0.5))
const LIFE = 30 // seconds each code is shown before the app fetches the next one

type Cls = {
  n: string
  desc?: string
  day: string
  time: string
  cap: number
  booked: number
  me: '' | 'booked' | 'wait'
}
const classes0: Cls[] = [
  {
    n: 'HIIT',
    desc: 'Full-body intervals with Ali Hassan',
    day: 'Sat, Oct 17',
    time: '6:00 PM – 7:00 PM',
    cap: 20,
    booked: 12,
    me: 'booked',
  },
  { n: 'Yoga Flow', day: 'Sat, Oct 17', time: '8:00 PM – 9:00 PM', cap: 12, booked: 8, me: '' },
  { n: 'Boxing', day: 'Sun, Oct 18', time: '7:00 PM – 8:00 PM', cap: 16, booked: 16, me: '' },
]

export default function MemberApp() {
  const { say, Toast } = createToast()
  const [qr, setQr] = createSignal([...QR0].map((b) => b === '1'))
  const [left, setLeft] = createSignal(23)
  const [seg, setSeg] = createSignal<'classes' | 'pt' | 'services'>('classes')
  const [cls, setCls] = createStore(structuredClone(classes0))

  onMount(() => {
    const tick = setInterval(() => {
      const s = left() - 1
      if (s > 0) return setLeft(s)
      if (s === 0) return setLeft(0) // one beat of "Refreshing…"
      setQr(nextCode(qr()))
      setLeft(LIFE)
    }, 1000)
    onCleanup(() => clearInterval(tick))
  })

  const toggle = (i: number) => {
    const c = cls[i]
    if (c.me === 'booked') {
      setCls(i, { me: '', booked: c.booked - 1 })
      say('Booking cancelled')
    } else if (c.me === 'wait') {
      setCls(i, 'me', '')
      say('Left the waitlist')
    } else if (c.booked >= c.cap) {
      setCls(i, 'me', 'wait')
      say('Added to the waitlist')
    } else {
      setCls(i, { me: 'booked', booked: c.booked + 1 })
      say(`Booked ${c.n}, ${c.day}`)
    }
  }
  const Seg = (p: { k: 'classes' | 'pt' | 'services'; label: string }) => (
    <button
      type="button"
      role="tab"
      id={`ma-t-${p.k}`}
      aria-controls="ma-pane"
      aria-selected={seg() === p.k}
      classList={{ 'ma-on': seg() === p.k }}
      onClick={() => setSeg(p.k)}
    >
      {p.label}
    </button>
  )

  return (
    <section
      class="mx mx-memberapp"
      data-ui
      aria-label="Member app: the Pass screen with a rotating check-in QR code, and the Classes screen with upcoming classes"
    >
      <section class="ma-scr" aria-label="Pass screen">
        <h4 class="ma-lt">Pass</h4>
        <div class="ma-pass">
          <div class="ma-qr" role="img" aria-label="Your check-in QR code">
            <div class="ma-mod">
              <Index each={qr()}>
                {(on) => (
                  <Show when={on()} fallback={<i />}>
                    <b />
                  </Show>
                )}
              </Index>
            </div>
            <span class="ma-logo">
              <svg viewBox="0 0 720 410" aria-hidden="true">
                <use href="#thing-logo" />
              </svg>
            </span>
          </div>
          <div class="ma-cd">
            <div class="ma-bar" aria-hidden="true">
              <span classList={{ 'ma-low': left() / LIFE <= 0.12 }} style={{ width: `${(left() / LIFE) * 100}%` }} />
            </div>
            <p>{left() > 0 ? `Refreshes in 0:${String(left()).padStart(2, '0')}` : 'Refreshing…'}</p>
          </div>
          <p class="ma-hint">Show this QR code at the gate to check in</p>
          <button type="button" class="ma-wallet" onClick={() => say('Opening Google Wallet…')}>
            <Icon n="wallet" />
            Add to Google Wallet
          </button>
        </div>
        <h5 class="ma-sec">Membership Status</h5>
        <div class="ma-card ma-ms">
          <div class="ma-kv">
            <span>Status</span>
            <span class="ma-pill ma-ok ma-md">
              <Icon n="check" />
              Active
            </span>
          </div>
          <div class="ma-kv">
            <span>Membership Type</span>
            <b>Gold · 12 Months</b>
          </div>
          <div class="ma-kv">
            <span>Days left</span>
            <b>159</b>
          </div>
          <div class="ma-kv">
            <span>Expires</span>
            <b>Mar 25, 2027</b>
          </div>
        </div>
      </section>
      <section class="ma-scr" aria-label="Classes screen">
        <h4 class="ma-lt">Classes</h4>
        <div class="ma-seg" role="tablist" aria-label="Classes, PT sessions or services">
          <Seg k="classes" label="Classes" />
          <Seg k="pt" label="PT Sessions" />
          <Seg k="services" label="Services" />
        </div>
        <div class="ma-list" id="ma-pane" role="tabpanel" aria-labelledby={`ma-t-${seg()}`}>
          <Switch>
            <Match when={seg() === 'classes'}>
              <For each={cls}>
                {(c, i) => (
                  <div class="ma-card ma-cc">
                    <div class="ma-ct">
                      <div>
                        <h5>{c.n}</h5>
                        <Show when={c.desc}>
                          <p class="ma-desc">{c.desc}</p>
                        </Show>
                      </div>
                      <Switch fallback={<span class="ma-pill ma-info">Available</span>}>
                        <Match when={c.me === 'booked'}>
                          <span class="ma-pill ma-ok">
                            <Icon n="check" />
                            Booked
                          </span>
                        </Match>
                        <Match when={c.me === 'wait'}>
                          <span class="ma-pill ma-warn">
                            <Icon n="clock" />
                            Waitlisted
                          </span>
                        </Match>
                        <Match when={c.booked >= c.cap}>
                          <span class="ma-pill ma-warn">
                            <Icon n="warn" />
                            Full
                          </span>
                        </Match>
                      </Switch>
                    </div>
                    <p class="ma-line">
                      <Icon n="cal" />
                      {c.day}
                    </p>
                    <p class="ma-line">
                      <Icon n="clock" />
                      {c.time} · 60 min
                    </p>
                    <p class="ma-line">
                      <Icon n="users" />
                      {c.booked} / {c.cap}
                    </p>
                    <button
                      type="button"
                      class="ma-act"
                      classList={{ 'ma-act-pri': !c.me }}
                      aria-label={`${c.me === 'booked' ? 'Cancel booking' : c.me === 'wait' ? 'Leave waitlist' : c.booked >= c.cap ? 'Join waitlist' : 'Book'}: ${c.n}, ${c.day}`}
                      onClick={() => toggle(i())}
                    >
                      {c.me === 'booked'
                        ? 'Cancel booking'
                        : c.me === 'wait'
                          ? 'Leave waitlist'
                          : c.booked >= c.cap
                            ? 'Join waitlist'
                            : 'Book'}
                    </button>
                  </div>
                )}
              </For>
            </Match>
            <Match when={seg() === 'pt'}>
              <div class="ma-card ma-cc">
                <div class="ma-ct">
                  <div>
                    <h5>PT 8 sessions</h5>
                    <p class="ma-desc">Purchased Mar 30, 2026</p>
                  </div>
                  <span class="ma-pill ma-ok">Active</span>
                </div>
                <p class="ma-line">
                  <Icon n="card" />
                  Credits left: 5 of 8
                </p>
                <p class="ma-line">
                  <Icon n="cal" />
                  Days left: 74
                </p>
              </div>
            </Match>
            <Match when={seg() === 'services'}>
              <div class="ma-card ma-empty">
                <h5>No services yet</h5>
                <p class="ma-desc">Contact the front desk to purchase a service.</p>
              </div>
            </Match>
          </Switch>
        </div>
      </section>
      <Toast />
    </section>
  )
}
