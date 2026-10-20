import { createMemo, createSignal, For } from 'solid-js'
import './PayLinks.css'
import { linkPaid } from './paylink-state'
import { Icon } from './shared'

type Status = 'OPEN' | 'PROCESSING' | 'PAID' | 'NEEDS_ATTENTION' | 'EXPIRED' | 'CANCELLED'
type Link = { ref: string; cu: string; it: string; plus?: boolean; am: string; st: Status; ex: string; charge: string }

// From the-gym-thing payment-link-status-badge.tsx and payment-links/page.tsx.
const LABEL: Record<Status, string> = {
  OPEN: 'Open',
  PROCESSING: 'Processing',
  PAID: 'Paid',
  NEEDS_ATTENTION: 'Needs attention',
  EXPIRED: 'Expired',
  CANCELLED: 'Cancelled',
}
const CLS: Record<Status, string> = {
  OPEN: 'open',
  PROCESSING: 'open',
  PAID: 'paid',
  NEEDS_ATTENTION: 'att',
  EXPIRED: 'exp',
  CANCELLED: 'exp',
}
const FILTERS: (Status | 'ALL')[] = ['ALL', 'OPEN', 'PROCESSING', 'NEEDS_ATTENTION', 'PAID', 'EXPIRED', 'CANCELLED']

const links: Link[] = [
  {
    ref: 'PL-7K3M9Q',
    cu: 'Mariam Hasan',
    it: 'Gold 3 months',
    am: 'BHD 75.000',
    st: 'OPEN',
    ex: 'Oct 24, 2026, 06:00 PM',
    charge: '',
  },
  {
    ref: 'PL-6QJ3VA',
    cu: 'Noor Al-Sayed',
    it: 'Ladies 6 months',
    am: 'BHD 130.000',
    st: 'NEEDS_ATTENTION',
    ex: 'Paid Oct 17, 2026, 08:21 AM',
    charge: 'chg_TS04A2120842Kt9e1710123',
  },
  {
    ref: 'PL-4XR2WD',
    cu: 'Aisha Kamal',
    it: 'Gold 12 months',
    plus: true,
    am: 'BHD 240.000',
    st: 'PAID',
    ex: 'Paid Oct 16, 2026, 09:14 PM',
    charge: 'chg_TS07A1621140Jx2m1610498',
  },
  {
    ref: 'PL-9HB5TE',
    cu: 'Yousif Abdulla',
    it: '10 visit days',
    am: 'BHD 25.000',
    st: 'PAID',
    ex: 'Paid Oct 15, 2026, 07:40 PM',
    charge: 'chg_TS02A1519403Pq8w1510377',
  },
  {
    ref: 'PL-2MN8KC',
    cu: 'Omar Haddad',
    it: 'Gold 3 months',
    am: 'BHD 75.000',
    st: 'EXPIRED',
    ex: 'Oct 10, 2026, 11:00 AM',
    charge: '',
  },
]
const stamp = (d: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Bahrain',
  }).format(d)

export default function PayLinks() {
  const [q, setQ] = createSignal('')
  const [status, setStatus] = createSignal<Status | 'ALL'>('ALL')

  const rows = createMemo(() => {
    const paid = linkPaid()
    const s = q().trim().toLowerCase()
    return links
      .map((l) => (l.ref === 'PL-7K3M9Q' && paid ? { ...l, st: 'PAID' as const, ex: `Paid ${stamp(paid.at)}` } : l))
      .filter((l) => status() === 'ALL' || l.st === status())
      .filter((l) => !s || `${l.ref} ${l.charge} ${l.cu}`.toLowerCase().includes(s))
  })

  return (
    <section
      class="mx mx-paylinks"
      data-ui
      aria-label="Payment links list with open, paid, expired and needs-attention links"
    >
      <div class="mx-paylinks-top">
        <div class="mx-paylinks-head">
          <h3>Payment links</h3>
          <p>Links sent to customers to pay online.</p>
        </div>
        <div class="mx-paylinks-filters">
          <label class="mx-paylinks-search">
            <Icon n="search" />
            <input
              type="search"
              placeholder="PL- reference or Tap charge id"
              aria-label="Search payment links"
              value={q()}
              onInput={(e) => setQ(e.currentTarget.value)}
            />
          </label>
          <label class="mx-paylinks-select">
            {status() === 'ALL' ? 'All statuses' : LABEL[status() as Status]}
            <Icon n="down" />
            <select
              aria-label="Status"
              value={status()}
              onChange={(e) => setStatus(e.currentTarget.value as Status | 'ALL')}
            >
              <For each={FILTERS}>{(s) => <option value={s}>{s === 'ALL' ? 'All statuses' : LABEL[s]}</option>}</For>
            </select>
          </label>
        </div>
      </div>
      {/* biome-ignore-start lint/a11y/useSemanticElements lint/a11y/useFocusableInteractive: an ARIA table on CSS grid rows, as in the static screen */}
      <div class="mx-paylinks-tbl" role="table" aria-label="Payment links">
        <div class="mx-paylinks-row th" role="row">
          <span role="columnheader">Reference</span>
          <span role="columnheader">Customer</span>
          <span class="it" role="columnheader">
            Item
          </span>
          <span class="am" role="columnheader">
            Amount
          </span>
          <span role="columnheader">Status</span>
          <span class="ex" role="columnheader">
            Expires / paid
          </span>
        </div>
        <For each={rows()} fallback={<p class="mx-paylinks-empty">No payment links match your filters.</p>}>
          {(l) => (
            <div class="mx-paylinks-row" role="row">
              <span class="ref" role="cell">
                {l.ref}
              </span>
              <span class="cu" role="cell">
                {l.cu}
              </span>
              <span class="it" role="cell">
                {l.it}
                {l.plus && <i />}
              </span>
              <span class="am" role="cell">
                {l.am}
              </span>
              <span role="cell">
                <em class={CLS[l.st]}>{LABEL[l.st]}</em>
              </span>
              <span class="ex" role="cell">
                {l.ex}
              </span>
            </div>
          )}
        </For>
      </div>
      {/* biome-ignore-end lint/a11y/useSemanticElements lint/a11y/useFocusableInteractive: see above */}
    </section>
  )
}
