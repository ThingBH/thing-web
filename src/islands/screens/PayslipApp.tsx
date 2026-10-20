import { createSignal, createUniqueId, For, Show } from 'solid-js'
import { bhd, createToast, Icon } from './shared'
import './PayslipApp.css'

// Sara Ahmed's slips. Basic 650 with PT commission; deductions are 8% of basic.
const slips = [
  { name: 'October 2026', range: 'Thu, Oct 1 – Sat, Oct 31', com: 135 },
  { name: 'September 2026', range: 'Tue, Sep 1 – Wed, Sep 30', com: 110 },
  { name: 'August 2026', range: 'Sat, Aug 1 – Mon, Aug 31', com: 123 },
].map((s) => ({ ...s, basic: 650, gross: 650 + s.com, ded: 52, net: 650 + s.com - 52 }))

export default function PayslipApp() {
  const [open, setOpen] = createSignal<number | null>(0)
  const { say, Toast } = createToast()
  const id = createUniqueId()

  return (
    <section class="mx mx-payslipapp" data-ui aria-label="Staff app: Sara Ahmed's salary slips, opened on her phone">
      <div class="ps-screen">
        <div class="ps-back">
          <Icon n="right" />
        </div>
        <h3 class="ps-h1">Salary slips</h3>
        <div class="ps-card">
          <For each={slips}>
            {(s, i) => (
              <>
                <Show when={i() > 0}>
                  <span class="ps-sep ps-in" />
                </Show>
                <button
                  type="button"
                  class="ps-row"
                  classList={{ 'ps-open': open() === i() }}
                  aria-expanded={open() === i()}
                  aria-controls={`${id}-${i()}`}
                  onClick={() => setOpen(open() === i() ? null : i())}
                >
                  <span class="ps-per">
                    <b>{s.name}</b>
                    <small>{s.range}</small>
                  </span>
                  <span class="ps-net">
                    <small>Net pay</small>
                    <b>{bhd(s.net)}</b>
                  </span>
                  <Icon n="down" class="ps-chev" />
                </button>
                <Show when={open() === i()}>
                  <div class="ps-detail" id={`${id}-${i()}`}>
                    <span class="ps-sep" />
                    <span class="ps-lbl">Earnings</span>
                    <div class="ps-lines">
                      <div class="ps-ln">
                        <span>Basic salary</span>
                        <span>{bhd(s.basic)}</span>
                      </div>
                      <div class="ps-ln">
                        <span>PT commission</span>
                        <span>{bhd(s.com)}</span>
                      </div>
                      <div class="ps-ln">
                        <span>Gross</span>
                        <span>{bhd(s.gross)}</span>
                      </div>
                    </div>
                    <div class="ps-lines ps-ded">
                      <div class="ps-ln">
                        <span>Deductions</span>
                        <span>−{s.ded.toFixed(3)}</span>
                      </div>
                    </div>
                    <button type="button" class="ps-btn" onClick={() => say(`Opening your ${s.name} payslip`)}>
                      <Icon n="file" />
                      Download PDF
                    </button>
                  </div>
                </Show>
              </>
            )}
          </For>
        </div>
      </div>
      <Toast />
    </section>
  )
}
