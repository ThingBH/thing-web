import { createSignal, For, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import { bhd, createToast, Icon } from './shared'
import './Memberships.css'

// Access rules as the product stores them: weekday bitmask (Sun=1 … Sat=64), minute-of-day window, branch list.
type Access = { mask: number; start: number; end: number; branches: string[] }
const ALL: Access = { mask: 127, start: 0, end: 1440, branches: [] }
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const clock = (m: number) => {
  if (m >= 1440) return '12:00 AM (next day)'
  const h = Math.floor(m / 60)
  return `${h % 12 || 12}:${String(m % 60).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
}
const isDefault = (a: Access) => a.mask === 127 && a.start === 0 && a.end >= 1440 && a.branches.length === 0
/** Same wording as the product's formatAccessSummary. */
const summary = (a: Access) => {
  const days =
    a.mask === 127
      ? 'Every day'
      : a.mask === 62
        ? 'Weekdays'
        : DAYS.filter((_, i) => a.mask & (1 << i)).join(', ') || 'No days selected'
  const hours = a.start === 0 && a.end >= 1440 ? 'All day' : `${clock(a.start)} – ${clock(a.end)}`
  return `${days} · ${hours} · ${a.branches.length ? `Branches: ${a.branches.join(', ')}` : 'All branches'}`
}

type Row = { d: string; per: string; price: number; app: boolean; access: Access }
type Pkg = { name: string; code: string; desc: string; access?: Access; rows: Row[] }
const pkgs0: Pkg[] = [
  {
    name: 'Gold',
    code: 'GLD',
    desc: 'Full gym and all group classes',
    rows: [
      { d: '1 Month', per: '1 Month', price: 35, app: true, access: ALL },
      { d: '3 Months', per: '3 Months', price: 95, app: true, access: ALL },
      { d: '12 Months', per: '12 Months', price: 330, app: true, access: ALL },
      {
        d: 'Daytime 3 Months',
        per: '3 Months',
        price: 70,
        app: false,
        access: { ...ALL, mask: 62, start: 360, end: 840 },
      },
    ],
  },
  {
    name: 'Ladies',
    code: 'LDS',
    desc: 'Ladies-only floor at Seef',
    access: { mask: 127, start: 480, end: 1260, branches: ['Seef'] },
    rows: [
      { d: '1 Month', per: '1 Month', price: 30, app: true, access: ALL },
      { d: '6 Months', per: '6 Months', price: 150, app: true, access: ALL },
      { d: '10 Visit Days', per: '10 visit days · valid 2 months', price: 40, app: false, access: ALL },
    ],
  },
]
const counts: [string, number, string, string][] = [
  ['Active', 428, 'Currently active memberships', 'ms-gr'],
  ['Frozen', 14, 'Temporarily paused memberships', 'ms-bl'],
  ['Scheduled', 6, 'Starting in the future', 'ms-yl'],
  ['Cancellations this month', 3, 'Cancelled since 1 Oct', 'ms-rd'],
]
const renewals: [string, string, string, number][] = [
  ['Mariam Hasan', 'Gold — 3 Months', '23 Oct 2026', 6],
  ['Zainab Ebrahim', 'Gold — 3 Months', '29 Oct 2026', 12],
  ['Noor Al-Sayed', 'Ladies — 6 Months', '2 Nov 2026', 16],
]

export default function Memberships() {
  const { say, Toast } = createToast()
  const [tab, setTab] = createSignal<'pk' | 'sub'>('pk')
  const [pkgs, setPkgs] = createStore(structuredClone(pkgs0))
  const [edit, setEdit] = createSignal<string | null>(null)
  const [err, setErr] = createSignal('')

  const save = (p: number, r: number, raw: string) => {
    const v = Number(raw)
    if (!raw.trim() || !Number.isFinite(v) || v < 0) return setErr('Enter a valid price')
    setPkgs(p, 'rows', r, 'price', Math.round(v * 1000) / 1000)
    setEdit(null)
    say('Price updated')
  }
  const Tab = (p: { k: 'pk' | 'sub'; label: string }) => (
    <button
      type="button"
      role="tab"
      id={`ms-t-${p.k}`}
      aria-controls="ms-pane"
      aria-selected={tab() === p.k}
      classList={{ 'ms-on': tab() === p.k }}
      onClick={() => setTab(p.k)}
    >
      {p.label}
    </button>
  )

  return (
    <section
      class="mx mx-memberships"
      data-ui
      aria-label="Memberships Packages tab: Gold and Ladies packages with lengths, VAT-inclusive BHD prices, access hours and member app switches"
    >
      <div class="ms-ph">
        <h3>Memberships</h3>
        <p>Manage membership plans and active subscriptions</p>
      </div>
      <div class="ms-tabs" role="tablist">
        <Tab k="pk" label="Packages" />
        <Tab k="sub" label="Subscriptions" />
      </div>
      <Show
        when={tab() === 'pk'}
        fallback={
          <div class="ms-subs" id="ms-pane" role="tabpanel" aria-labelledby="ms-t-sub">
            <div class="ms-sums">
              <For each={counts}>
                {([label, n, desc, tone]) => (
                  <section class="ms-card ms-sum">
                    <p class="ms-sl">{label}</p>
                    <b class={tone}>{n}</b>
                    <p class="ms-desc">{desc}</p>
                  </section>
                )}
              </For>
            </div>
            <section class="ms-card">
              <div class="ms-rh">
                <h4>Upcoming renewals</h4>
                <button type="button" class="ms-btn ms-sm" onClick={() => say('Reminders sent to 3 members')}>
                  Send reminder
                </button>
              </div>
              <table class="ms-tbl">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th class="ms-per">Plan</th>
                    <th>Expiry Date</th>
                    <th>Days Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  <For each={renewals}>
                    {([n, plan, exp, left]) => (
                      <tr>
                        <td>
                          <b>{n}</b>
                        </td>
                        <td class="ms-per">{plan}</td>
                        <td class="ms-pr">{exp}</td>
                        <td class="ms-amb">{left} days</td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </section>
          </div>
        }
      >
        <div class="ms-bar">
          <p>Each package is a membership product with one or more duration options.</p>
          <button type="button" class="ms-btn ms-pri" onClick={() => say('New package opens the package form')}>
            <Icon n="plus" />
            New package
          </button>
        </div>

        <div class="ms-grid" id="ms-pane" role="tabpanel" aria-labelledby="ms-t-pk">
          <For each={pkgs}>
            {(pkg, p) => (
              <section class="ms-card">
                <div class="ms-ch">
                  <div class="ms-t">
                    <h4>{pkg.name}</h4>
                    <span class="ms-code">{pkg.code}</span>
                    <span class="ms-act">Active</span>
                  </div>
                  <p class="ms-desc">{pkg.desc}</p>
                  <Show when={pkg.access}>{(a) => <p class="ms-pkg">Package access: {summary(a())}</p>}</Show>
                </div>
                <table class="ms-tbl">
                  <thead>
                    <tr>
                      <th>Duration</th>
                      <th class="ms-per">Period</th>
                      <th>Price</th>
                      <th>In app</th>
                    </tr>
                  </thead>
                  <tbody>
                    <For each={pkg.rows}>
                      {(row, r) => {
                        const key = () => `${p()}-${r()}`
                        const label = () => `${pkg.name} · ${row.d}`
                        return (
                          <tr>
                            <td>
                              <b>{row.d}</b>
                              <small classList={{ 'ms-amb': !isDefault(row.access) }}>
                                {isDefault(row.access) ? '24/7 · All branches' : summary(row.access)}
                              </small>
                            </td>
                            <td class="ms-per">{row.per}</td>
                            <td class="ms-pr">
                              <Show
                                when={edit() === key()}
                                fallback={
                                  <button
                                    type="button"
                                    class="ms-prb"
                                    title="Click to edit price"
                                    aria-label={`Edit price: ${bhd(row.price)}`}
                                    onClick={() => {
                                      setErr('')
                                      setEdit(key())
                                    }}
                                  >
                                    {bhd(row.price)}
                                  </button>
                                }
                              >
                                <form
                                  class="ms-edit"
                                  noValidate
                                  onSubmit={(e) => {
                                    e.preventDefault()
                                    save(
                                      p(),
                                      r(),
                                      (e.currentTarget.elements.namedItem('price') as HTMLInputElement).value,
                                    )
                                  }}
                                >
                                  <input
                                    name="price"
                                    type="number"
                                    min="0"
                                    step="0.001"
                                    inputmode="decimal"
                                    value={row.price.toFixed(3)}
                                    aria-label={`Price for ${label()}, BHD`}
                                    aria-invalid={err() ? true : undefined}
                                    ref={(el) => queueMicrotask(() => el.select())}
                                    onKeyDown={(e) => e.key === 'Escape' && setEdit(null)}
                                  />
                                  <button type="submit" class="ms-ib" aria-label="Save price">
                                    <Icon n="check" />
                                  </button>
                                  <button
                                    type="button"
                                    class="ms-ib"
                                    aria-label="Cancel price edit"
                                    onClick={() => setEdit(null)}
                                  >
                                    <Icon n="x" />
                                  </button>
                                  <Show when={err()}>
                                    <small class="ms-err">{err()}</small>
                                  </Show>
                                </form>
                              </Show>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="ms-sw"
                                classList={{ 'ms-swon': row.app }}
                                role="switch"
                                aria-checked={row.app}
                                aria-label={`Sell ${label()} in the member app`}
                                onClick={() => {
                                  setPkgs(p(), 'rows', r(), 'app', (x) => !x)
                                  say(row.app ? 'Now sold in the member app' : 'Removed from the app')
                                }}
                              />
                            </td>
                          </tr>
                        )
                      }}
                    </For>
                  </tbody>
                </table>
                <button type="button" class="ms-btn ms-add" onClick={() => say('Add duration option opens the form')}>
                  <Icon n="plus" />
                  Add duration option
                </button>
              </section>
            )}
          </For>
        </div>
      </Show>
      <Toast />
    </section>
  )
}
