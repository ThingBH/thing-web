import { createMemo, createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import './Pos.css'
import { bhd, createToast, Icon } from './shared'

type Cat = 'drinks' | 'apparel'
type Product = { id: string; n: string; p: number; ic: string; c: string; cat?: Cat; low: number }
type Line = { id: string; q: number; pct: number; note: string }
type Method = 'cash' | 'card' | 'benefit'
type Sale = { total: number; change: number | null; invoice: string; depleted: string[] }

// Prices in fils (BHD minor units). Stock is on hand before this ticket.
const P: Record<string, Product> = {
  water: { id: 'water', n: 'Water 500ml', p: 300, ic: 'drop', c: '#e0f2fe', cat: 'drinks', low: 5 },
  shake: { id: 'shake', n: 'Protein Shake', p: 2500, ic: 'cup', c: '#fef3c7', cat: 'drinks', low: 5 },
  whey: { id: 'whey', n: 'Whey Scoop', p: 2000, ic: 'pill', c: '#fce7f3', low: 5 },
  towel: { id: 'towel', n: 'Gym Towel', p: 3000, ic: 'shirt', c: '#dcfce7', cat: 'apparel', low: 5 },
  iso: { id: 'iso', n: 'Isotonic Berry', p: 800, ic: 'drop', c: '#fee2e2', cat: 'drinks', low: 5 },
  brew: { id: 'brew', n: 'Cold Brew', p: 1500, ic: 'cup', c: '#ffedd5', cat: 'drinks', low: 5 },
  tee: { id: 'tee', n: 'ABC Gym T-shirt', p: 8000, ic: 'shirt', c: '#ede9fe', cat: 'apparel', low: 3 },
  gloves: { id: 'gloves', n: 'Lifting Gloves', p: 6500, ic: 'bag', c: '#e0e7ff', cat: 'apparel', low: 3 },
}
const CATS: { id: Cat; n: string; ic: string; c: string }[] = [
  { id: 'drinks', n: 'Drinks', ic: 'cup', c: '#dbeafe' },
  { id: 'apparel', n: 'Apparel', ic: 'shirt', c: '#ede9fe' },
]
const ROOT = ['water', 'shake', 'whey', 'towel', 'iso']
const METHODS: [Method, string, string][] = [
  ['cash', 'Cash', 'cash'],
  ['card', 'Card', 'card'],
  ['benefit', 'BenefitPay', 'phone'],
]
const money = (f: number) => bhd(f / 1000)
const gross = (l: Line) => P[l.id].p * l.q
const disc = (l: Line) => Math.round((gross(l) * l.pct) / 100)

/** `Exact`, then the notes that would cover the amount (the-gym-thing lib/pos/split-payments.ts). */
function quickTenders(due: number) {
  const notes = [500, 1000, 5000, 10000, 20000]
  const big = notes[notes.length - 1]
  const m = Math.floor(due / big) + 1
  const covering = [...new Set([...notes, big * m, big * (m + 1)])]
    .filter((v) => v > due && (v <= big || due > big))
    .sort((a, b) => a - b)
    .slice(0, 3)
  return [
    { label: 'Exact', v: due },
    ...covering.map((v) => ({ label: (v / 1000).toFixed(3).replace(/\.0+$/, ''), v })),
  ]
}

export default function Pos() {
  const { say, Toast } = createToast()
  const [stock, setStock] = createStore<Record<string, number>>({
    water: 50,
    shake: 14,
    whey: 3,
    towel: 20,
    iso: 0,
    brew: 20,
    tee: 14,
    gloves: 2,
  })
  const [cart, setCart] = createStore<Line[]>([
    { id: 'water', q: 2, pct: 0, note: '' },
    { id: 'shake', q: 2, pct: 0, note: '' },
    { id: 'towel', q: 2, pct: 25, note: 'Staff' },
  ])
  const [cat, setCat] = createSignal<Cat | null>(null)
  const [q, setQ] = createSignal('')
  const [mode, setMode] = createSignal<'sell' | 'charge' | 'done'>('sell')
  const [method, setMethod] = createSignal<Method | null>(null)
  const [received, setReceived] = createSignal('')
  const [sale, setSale] = createSignal<Sale | null>(null)
  const [edit, setEdit] = createSignal<string | null>(null)
  const [draft, setDraft] = createStore({ pct: true, text: '', note: '' })
  let invoice = 4121
  let newSaleBtn: HTMLButtonElement | undefined
  let root!: HTMLElement

  onMount(() => {
    // ⌃↵ charges / confirms, as on the till, while focus is inside this screen.
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && root.contains(e.target as Node)) primary()
    }
    document.addEventListener('keydown', key)
    onCleanup(() => document.removeEventListener('keydown', key))
  })

  const inCart = (id: string) => cart.find((l) => l.id === id)?.q ?? 0
  const left = (id: string) => stock[id] - inCart(id)
  const count = () => cart.reduce((a, l) => a + l.q, 0)
  const sub = () => cart.reduce((a, l) => a + gross(l), 0)
  const discounts = () => cart.reduce((a, l) => a + disc(l), 0)
  const total = () => sub() - discounts()
  const vat = () => Math.round(total() / 11) // 10% VAT inside a VAT-inclusive total
  const receivedF = () => {
    const v = Number.parseFloat(received())
    return Number.isFinite(v) ? Math.round(v * 1000) : null
  }
  const change = () => (method() === 'cash' && receivedF() !== null ? (receivedF() as number) - total() : null)

  const tiles = createMemo(() => {
    const s = q().trim().toLowerCase()
    if (s) return Object.values(P).filter((p) => p.n.toLowerCase().includes(s))
    const c = cat()
    return c ? Object.values(P).filter((p) => p.cat === c) : ROOT.map((id) => P[id])
  })

  const add = (id: string) => {
    if (left(id) <= 0) return say(`${P[id].n}: Out of stock`)
    const i = cart.findIndex((l) => l.id === id)
    if (i < 0) setCart(cart.length, { id, q: 1, pct: 0, note: '' })
    else setCart(i, 'q', (n) => n + 1)
  }
  const less = (id: string) => {
    const i = cart.findIndex((l) => l.id === id)
    if (cart[i].q > 1) setCart(i, 'q', (n) => n - 1)
    else setCart((ls) => ls.filter((l) => l.id !== id))
  }

  const openLine = (l: Line) => {
    setDraft({ pct: l.pct > 0, text: l.pct ? String(l.pct) : '25', note: l.note })
    setEdit(l.id)
  }
  const draftPct = () => {
    const v = Number.parseFloat(draft.text)
    return draft.pct ? (v > 0 && v <= 100 ? v : null) : 0
  }
  const canApply = () => draftPct() !== null && (!draft.pct || draft.note.trim() !== '')
  const apply = () => {
    const i = cart.findIndex((l) => l.id === edit())
    if (i >= 0 && canApply()) setCart(i, { pct: draftPct() as number, note: draft.pct ? draft.note.trim() : '' })
    setEdit(null)
  }
  const editing = () => cart.find((l) => l.id === edit())

  const gate = () => {
    if (mode() === 'sell') return count() ? null : 'Add an item'
    if (!method()) return 'Choose a payment method'
    const c = change()
    return c !== null && c < 0 ? 'Balance not covered' : null
  }
  const primary = () => {
    if (gate()) return
    if (mode() === 'sell') {
      setEdit(null)
      setMode('charge')
      return
    }
    const depleted = cart.filter((l) => stock[l.id] - l.q <= 0).map((l) => P[l.id].n)
    for (const l of cart) setStock(l.id, (n) => n - l.q)
    setSale({ total: total(), change: change(), invoice: `POS-2026-00${invoice++}`, depleted })
    setCart([])
    setMode('done')
    newSaleBtn?.focus()
  }
  const back = () => {
    setMode('sell')
    setMethod(null)
    setReceived('')
  }
  const newSale = () => {
    back()
    setSale(null)
    setCat(null)
    setQ('')
  }

  return (
    <section
      class="mx mx-pos"
      data-ui
      aria-label="POS terminal: product catalog with stock counts and an open ticket ready to charge"
      ref={root}
    >
      <div class="mx-pos-bar">
        <Show
          when={mode() === 'charge'}
          fallback={
            <span class="mx-pos-branch">
              Seef
              <Icon n="down" />
            </span>
          }
        >
          <button type="button" class="mx-pos-branch back" onClick={back}>
            ‹ Back to ticket
          </button>
        </Show>
        <span class="mx-pos-cashier">
          <Icon n="users" />
          Layla Hassan
        </span>
        <span class="mx-pos-exit">
          <Icon n="arrow" />
          Exit
        </span>
      </div>

      <Show
        when={mode() !== 'done'}
        fallback={
          <div class="mx-pos-done">
            <span class="ok">
              <Icon n="check" />
            </span>
            <span class="lbl" role="status">
              Paid
            </span>
            <b class="amt">{money(sale()?.total ?? 0)}</b>
            <span class="who">Aisha Kamal</span>
            <span class="invno">{sale()?.invoice}</span>
            <Show when={(sale()?.change ?? 0) > 0}>
              <span class="chg">Change due {money(sale()?.change ?? 0)}</span>
            </Show>
            <For each={sale()?.depleted}>{(n) => <span class="dep">{n} is now out of stock.</span>}</For>
            <div class="acts">
              <button ref={newSaleBtn} type="button" class="pri" onClick={newSale}>
                New sale <kbd>↵</kbd>
              </button>
              <button type="button" onClick={() => say('Receipt sent to Aisha Kamal on WhatsApp')}>
                <svg class="wa" viewBox="0 0 24 24" aria-hidden="true">
                  <use href="#b-whatsapp" />
                </svg>
                Send receipt on WhatsApp
              </button>
            </div>
          </div>
        }
      >
        <div class="mx-pos-body">
          <Show
            when={mode() === 'charge'}
            fallback={
              <div class="mx-pos-cat">
                <input
                  class="mx-pos-search"
                  type="search"
                  placeholder="Search products"
                  aria-label="Search products"
                  value={q()}
                  onInput={(e) => setQ(e.currentTarget.value)}
                />
                <nav class="mx-pos-crumb" classList={{ in: !!cat() }} aria-label="Catalog">
                  <button type="button" aria-current={cat() ? undefined : 'page'} onClick={() => setCat(null)}>
                    All
                  </button>
                  <Show when={cat()}>
                    {(c) => (
                      <>
                        <Icon n="right" />
                        <span aria-current="page">{CATS.find((x) => x.id === c())?.n}</span>
                      </>
                    )}
                  </Show>
                </nav>
                <div class="mx-pos-grid" classList={{ in: !!cat() || !!q().trim() }}>
                  <Show when={!cat() && !q().trim()}>
                    <For each={CATS}>
                      {(c) => (
                        <button type="button" class="mx-pos-tile" style={{ '--c': c.c }} onClick={() => setCat(c.id)}>
                          <Icon n={c.ic} class="ic" />
                          <span class="sc">
                            <b>{c.n}</b>
                            <small>Category</small>
                          </span>
                        </button>
                      )}
                    </For>
                  </Show>
                  <For each={tiles()}>
                    {(p) => {
                      const r = () => left(p.id)
                      return (
                        <button
                          type="button"
                          class="mx-pos-tile"
                          classList={{ out: r() <= 0 }}
                          style={{ '--c': p.c }}
                          aria-label={r() <= 0 ? `${p.n} — out of stock` : undefined}
                          onClick={() => add(p.id)}
                        >
                          <Icon n={p.ic} class="ic" />
                          <span class="st" classList={{ low: r() > 0 && r() <= p.low }}>
                            {r() <= 0 ? 'OUT' : r() <= p.low ? `${r()} ⚠` : r()}
                          </span>
                          <span class="sc">
                            <b>{p.n}</b>
                            <span class="pr">{money(p.p)}</span>
                          </span>
                        </button>
                      )
                    }}
                  </For>
                  <Show when={!cat() && !q().trim()}>
                    <div class="mx-pos-tile add">
                      <Icon n="plus" />
                      <b>Custom amount</b>
                    </div>
                  </Show>
                </div>
              </div>
            }
          >
            <section class="mx-pos-cat mx-pos-pay" aria-label="Take payment">
              {/* biome-ignore lint/a11y/useSemanticElements: a fieldset brings its own border and padding */}
              <div class="mx-pos-methods" role="group" aria-label="Payment method">
                <For each={METHODS}>
                  {([k, label, ic], i) => (
                    <button
                      type="button"
                      aria-pressed={method() === k}
                      onClick={() => {
                        setMethod(k)
                        setReceived('')
                      }}
                    >
                      <Icon n={ic} />
                      {label}
                      <span aria-hidden="true">
                        <kbd>⌥{i() + 1}</kbd>
                      </span>
                    </button>
                  )}
                </For>
              </div>
              <Show when={method()}>
                {(m) => (
                  <div class="mx-pos-portion">
                    <span class="n">1</span>
                    <b>{METHODS.find((x) => x[0] === m())?.[1]}</b>
                    <span class="v">{money(total())}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${METHODS.find((x) => x[0] === m())?.[1]} payment`}
                      onClick={() => setMethod(null)}
                    >
                      <Icon n="x" />
                    </button>
                  </div>
                )}
              </Show>
              <Show when={method() === 'cash'}>
                <div class="mx-pos-cash">
                  <div class="band">
                    <label>
                      <span>Cash received</span>
                      <input
                        inputmode="decimal"
                        placeholder="0.000"
                        value={received()}
                        onInput={(e) => setReceived(e.currentTarget.value)}
                      />
                    </label>
                    <div>
                      <span>Change due</span>
                      <b classList={{ warn: (change() ?? 0) > 0 }}>
                        {change() === null ? '—' : money(change() as number)}
                      </b>
                    </div>
                  </div>
                  <div class="chips">
                    <For each={quickTenders(total())}>
                      {(c) => (
                        <button type="button" onClick={() => setReceived((c.v / 1000).toFixed(3))}>
                          {c.label}
                        </button>
                      )}
                    </For>
                  </div>
                </div>
              </Show>
              <div class="mx-pos-rem">
                <span>Remaining</span>
                <b classList={{ ok: !!method(), warn: !method() }}>{money(method() ? 0 : total())}</b>
              </div>
            </section>
          </Show>

          <div class="mx-pos-ticket">
            <div class="mx-pos-cust">
              <Icon n="users" />
              <span>
                <b>Aisha Kamal</b>
                <small>ABC-00412</small>
              </span>
              <kbd>F2</kbd>
              <Icon n="right" />
            </div>
            <div class="mx-pos-th">
              <b>TICKET</b>
              <span>{count() === 0 ? 'empty' : `${count()} ${count() === 1 ? 'item' : 'items'}`}</span>
            </div>
            <div class="mx-pos-lines">
              <For each={cart} fallback={<p class="mx-pos-empty">Tap a product to start.</p>}>
                {(l) => (
                  <div class="mx-pos-line">
                    <Show when={mode() === 'sell'} fallback={<span class="nm">{P[l.id].n}</span>}>
                      <button
                        type="button"
                        class="nm"
                        aria-label={`Options for ${P[l.id].n}`}
                        onClick={() => openLine(l)}
                      >
                        {P[l.id].n}
                      </button>
                    </Show>
                    <Show when={mode() === 'sell'} fallback={<span class="qty ro">×{l.q}</span>}>
                      <span class="qty">
                        <button
                          type="button"
                          aria-label={l.q === 1 ? `Remove ${P[l.id].n}` : `One fewer ${P[l.id].n}`}
                          onClick={() => less(l.id)}
                        >
                          <i>−</i>
                        </button>
                        <b>{l.q}</b>
                        <button type="button" aria-label={`One more ${P[l.id].n}`} onClick={() => add(l.id)}>
                          <i>+</i>
                        </button>
                      </span>
                    </Show>
                    <span class="amt">{money(gross(l) - disc(l))}</span>
                    <Show when={disc(l) > 0}>
                      <span class="dn">
                        −{l.pct}%{l.note ? ` ${l.note}` : ''}
                      </span>
                      <span class="da">{money(-disc(l))}</span>
                    </Show>
                  </div>
                )}
              </For>
            </div>
            <dl class="mx-pos-tot">
              <div>
                <dt>Subtotal</dt>
                <dd>{money(sub())}</dd>
              </div>
              <Show when={discounts() > 0}>
                <div>
                  <dt>Discounts</dt>
                  <dd>{money(-discounts())}</dd>
                </div>
              </Show>
              <div>
                <dt>VAT 10% (incl.)</dt>
                <dd>{money(vat())}</dd>
              </div>
              <div class="gt">
                <dt>TOTAL</dt>
                <dd>{money(total())}</dd>
              </div>
            </dl>
            <div class="mx-pos-go">
              <button type="button" class="mx-pos-charge" disabled={!!gate()} onClick={primary}>
                <span>{gate() ?? (mode() === 'charge' ? 'CONFIRM' : 'CHARGE')}</span>
                <span class="r">
                  <kbd>⌃↵</kbd>
                  <b>{money(total())}</b>
                </span>
              </button>
            </div>

            <Show when={editing()}>
              {(l) => (
                <div class="mx-pos-sheet" role="dialog" aria-label={P[l().id].n}>
                  <div class="hd">
                    <b>{P[l().id].n}</b>
                    <button type="button" class="x" aria-label="Close" onClick={() => setEdit(null)}>
                      <Icon n="x" />
                    </button>
                  </div>
                  <span class="lb">Price</span>
                  {/* biome-ignore lint/a11y/useSemanticElements: a fieldset brings its own border and padding */}
                  <div class="seg" role="group" aria-label="Price">
                    <button type="button" aria-pressed={!draft.pct} onClick={() => setDraft('pct', false)}>
                      List
                    </button>
                    <button type="button" aria-pressed={draft.pct} onClick={() => setDraft('pct', true)}>
                      %
                    </button>
                  </div>
                  <Show when={draft.pct}>
                    <label class="lb" for="mx-pos-pct">
                      Discount
                    </label>
                    <div class="pct">
                      <input
                        id="mx-pos-pct"
                        inputmode="decimal"
                        value={draft.text}
                        aria-invalid={draftPct() === null}
                        onInput={(e) => setDraft('text', e.currentTarget.value)}
                      />
                      <span>%</span>
                      <b>{money(-Math.round((gross(l()) * (draftPct() ?? 0)) / 100))}</b>
                    </div>
                    <label class="lb" for="mx-pos-note">
                      Note
                    </label>
                    <input
                      id="mx-pos-note"
                      class="note"
                      placeholder="staff discount"
                      value={draft.note}
                      onInput={(e) => setDraft('note', e.currentTarget.value)}
                    />
                    <small>Required for any adjustment — it lands on the sale record.</small>
                  </Show>
                  <div class="foot">
                    <span>Line total</span>
                    <b>{money(gross(l()) - Math.round((gross(l()) * (draftPct() ?? 0)) / 100))}</b>
                  </div>
                  <button type="button" class="apply" disabled={!canApply()} onClick={apply}>
                    Apply
                  </button>
                </div>
              )}
            </Show>
          </div>
        </div>
      </Show>
      <Toast />
    </section>
  )
}
