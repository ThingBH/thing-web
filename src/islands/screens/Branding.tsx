import { createSignal, createUniqueId, Show } from 'solid-js'
import { createStore, unwrap } from 'solid-js/store'
import { createToast, Icon } from './shared'
import './Branding.css'

/** What the console uses when a gym sets no accent. */
const PLATFORM_ACCENT = '#18181B'
const HEX = /^#[0-9a-fA-F]{6}$/

// WCAG 2.1 contrast, as the product computes it for "On the accent".
const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = Number.parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m)
  return (x + 0.05) / (y + 0.05)
}
const foreground = (hex: string) => (ratio(hex, '#FAFAFA') >= ratio(hex, '#18181B') ? '#FAFAFA' : '#18181B')

type Form = {
  accent: string | null
  size: 'A4' | 'LETTER'
  orient: 'PORTRAIT' | 'LANDSCAPE'
  crName: string
  show: boolean
}
const saved: Form = { accent: '#0F766E', size: 'A4', orient: 'PORTRAIT', crName: 'ABC Gym W.L.L.', show: true }
const SIZES = { A4: 'A4 (210 × 297 mm)', LETTER: 'Letter (8.5 × 11 in)' }
const ORIENTS = { PORTRAIT: 'Portrait', LANDSCAPE: 'Landscape' }

export default function Branding() {
  const [base, setBase] = createSignal<Form>(saved)
  const [f, setF] = createStore<Form>({ ...saved })
  const [hex, setHex] = createSignal(saved.accent ?? '')
  const { say, Toast } = createToast()
  const acc = () => f.accent ?? PLATFORM_ACCENT
  const fg = () => foreground(acc())
  const contrast = () => ratio(acc(), fg())
  const dirty = () => (Object.keys(saved) as (keyof Form)[]).some((k) => f[k] !== base()[k])
  const id = createUniqueId()

  const setAccent = (v: string | null) => {
    setF('accent', v)
    setHex(v ?? '')
  }
  const typeHex = (v: string) => {
    setHex(v)
    const t = v.trim()
    if (!t) setF('accent', null)
    else if (HEX.test(t)) setF('accent', t.toUpperCase())
  }
  const discard = () => {
    setF({ ...base() })
    setHex(base().accent ?? '')
  }
  const save = () => {
    setBase({ ...unwrap(f) })
    say('Branding saved')
  }

  return (
    <section
      class="mx mx-branding"
      data-ui
      aria-label="Branding settings: logo, brand colour, document setup and a live payslip preview"
      style={{ '--acc': acc(), '--acc-fg': fg() }}
    >
      <div class="bd-head">
        <div>
          <h3 class="bd-h1">Branding</h3>
          <p class="bd-sub">Your logo, colour and document style.</p>
        </div>
        <span class="bd-btn bd-sm">
          <Icon n="file" />
          Generate sample report
        </span>
      </div>

      <div class="bd-grid">
        <div class="bd-left">
          <div class="bd-card">
            <h4 class="bd-ct">Brand</h4>
            <p class="bd-cd">Changes preview live. Save to keep them.</p>
            <div class="bd-body">
              <div class="bd-field">
                <p class="bd-fl">Logo</p>
                <div class="bd-drop">
                  <span class="bd-tile">
                    <span class="bd-mark">ABC</span>
                  </span>
                  <p class="bd-hint">Square image, at least 512×512.</p>
                  <span class="bd-acts">
                    <span class="bd-btn bd-sm">Replace</span>
                    <span class="bd-btn bd-sm bd-ghost">Remove</span>
                  </span>
                </div>
              </div>
              <div class="bd-colour">
                <div class="bd-cf">
                  <label class="bd-lab" for={`${id}-accent`}>
                    Brand colour
                  </label>
                  <span class="bd-row">
                    <span class="bd-swatch">
                      <i />
                      <input
                        type="color"
                        aria-label="Brand colour swatch"
                        value={acc().toLowerCase()}
                        onInput={(e) => setAccent(e.currentTarget.value.toUpperCase())}
                      />
                    </span>
                    <input
                      id={`${id}-accent`}
                      class="bd-in bd-mono"
                      value={hex()}
                      maxLength={7}
                      placeholder={PLATFORM_ACCENT}
                      spellcheck={false}
                      autocomplete="off"
                      onInput={(e) => typeHex(e.currentTarget.value)}
                    />
                  </span>
                </div>
                <div class="bd-cf">
                  <span class="bd-lab">On the accent</span>
                  <span class="bd-row">
                    <span class="bd-aa">Aa</span>
                    <span class="bd-ratio">{contrast().toFixed(2)}:1</span>
                  </span>
                </div>
                <Show when={f.accent !== null}>
                  <button type="button" class="bd-btn bd-sm bd-ghost bd-reset" onClick={() => setAccent(null)}>
                    Reset to default
                  </button>
                </Show>
              </div>
              <Show when={contrast() < 4.5}>
                <p class="bd-warn" role="status">
                  <Icon n="warn" />
                  Text on this colour measures {contrast().toFixed(2)}:1, below the 4.5:1 needed for WCAG AA. You can
                  still save it.
                </p>
              </Show>
            </div>
          </div>

          <div class="bd-card">
            <h4 class="bd-ct">Documents</h4>
            <p class="bd-cd">Letterhead, page setup and footer for every export.</p>
            <div class="bd-body">
              <div class="bd-field">
                <p class="bd-fl">Preset</p>
                <button type="button" class="bd-preset" aria-pressed="true">
                  <span class="bd-pt">
                    <b>Classic</b>
                    <span class="bd-badge">Selected</span>
                  </span>
                  <small>Clean header band, single accent rule, body in serif.</small>
                </button>
              </div>
              <div class="bd-field">
                <p class="bd-fl">Page setup</p>
                <div class="bd-two">
                  <div class="bd-cf">
                    <label class="bd-lab" for={`${id}-size`}>
                      Page size
                    </label>
                    <span class="bd-in bd-select">
                      {SIZES[f.size]}
                      <Icon n="down" />
                      <select
                        id={`${id}-size`}
                        value={f.size}
                        onChange={(e) => setF('size', e.currentTarget.value as Form['size'])}
                      >
                        <option value="A4">{SIZES.A4}</option>
                        <option value="LETTER">{SIZES.LETTER}</option>
                      </select>
                    </span>
                  </div>
                  <div class="bd-cf">
                    <label class="bd-lab" for={`${id}-orient`}>
                      Orientation
                    </label>
                    <span class="bd-in bd-select">
                      {ORIENTS[f.orient]}
                      <Icon n="down" />
                      <select
                        id={`${id}-orient`}
                        value={f.orient}
                        onChange={(e) => setF('orient', e.currentTarget.value as Form['orient'])}
                      >
                        <option value="PORTRAIT">{ORIENTS.PORTRAIT}</option>
                        <option value="LANDSCAPE">{ORIENTS.LANDSCAPE}</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
              <div class="bd-field">
                <p class="bd-fl">Footer identity</p>
                <p class="bd-fd">Blank fields are left out.</p>
                <div class="bd-cf">
                  <label class="bd-lab" for={`${id}-cr`}>
                    CR / legal name
                  </label>
                  <input
                    id={`${id}-cr`}
                    class="bd-in"
                    value={f.crName}
                    placeholder="e.g. Your Company W.L.L."
                    autocomplete="off"
                    onInput={(e) => setF('crName', e.currentTarget.value)}
                  />
                </div>
                <div class="bd-toggle">
                  <span id={`${id}-show`}>Show on documents</span>
                  <button
                    type="button"
                    class="bd-switch"
                    classList={{ 'bd-off': !f.show }}
                    role="switch"
                    aria-checked={f.show}
                    aria-labelledby={`${id}-show`}
                    onClick={() => setF('show', !f.show)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-prev">
          <div class="bd-ph">
            <span>Payslip preview</span>
            <small>Sample data</small>
          </div>
          <div class="bd-paper" classList={{ 'bd-land': f.orient === 'LANDSCAPE', 'bd-letter': f.size === 'LETTER' }}>
            <div class="bd-ptop">
              <span class="bd-plogo">
                <span class="bd-mark">ABC</span>
                <b>ABC Gym</b>
              </span>
              <span class="bd-pdate">Print Date: 17-10-2026</span>
            </div>
            <span class="bd-rule" />
            <p class="bd-ptitle">This Salary Slip for the employee</p>
            <div class="bd-info">
              <div>
                <p>
                  <span>Month</span>
                  <b>October 2026</b>
                </p>
                <p>
                  <span>Employee Name</span>
                  <b>Sara Ahmed</b>
                </p>
                <p>
                  <span>ID</span>
                  <b>1001</b>
                </p>
                <p>
                  <span>Position</span>
                  <b>Head Coach</b>
                </p>
                <p>
                  <span>Department</span>
                  <b>Coaching</b>
                </p>
              </div>
              <div>
                <p>
                  <span>Bank Name</span>
                  <b>BBK</b>
                </p>
                <p>
                  <span>IBAN</span>
                  <b class="bd-mono">BH67 BBKU 0010 0000 0012 34</b>
                </p>
              </div>
            </div>
            <p class="bd-sec">Amounts</p>
            <div class="bd-lines">
              <p>
                <span>Basic Salary</span>
                <b>650.000 BHD</b>
              </p>
              <p>
                <span>Commission</span>
                <b>135.000 BHD</b>
              </p>
              <p class="bd-tot">
                <span>Total</span>
                <b>785.000 BHD</b>
              </p>
            </div>
            <p class="bd-sec">Monthly Deductions</p>
            <div class="bd-lines">
              <p>
                <span>Social Insurance (GOSI)</span>
                <b>(52.000 BHD)</b>
              </p>
              <p class="bd-tot">
                <span>Total</span>
                <b>(52.000 BHD)</b>
              </p>
            </div>
            <div class="bd-net">
              <p>
                <span>Net Pay</span>
                <b>733.000 BHD</b>
              </p>
              <p class="bd-cur">
                <span>Currency</span>
                <b>BHD</b>
              </p>
            </div>
            <div class="bd-foot">
              <Show when={f.show} fallback={<span class="bd-hidden">Footer hidden — “Show on documents” is off</span>}>
                <Show when={f.crName.trim()}>
                  <b>{f.crName.trim()}</b>
                </Show>
                <span>CR NO: 123456-1</span>
              </Show>
            </div>
          </div>
        </div>
      </div>

      <Show when={dirty()}>
        <div class="bd-bar">
          <p>Unsaved changes — the console is showing a preview.</p>
          <span>
            <button type="button" class="bd-btn bd-sm bd-ghost" onClick={discard}>
              Discard
            </button>
            <button type="button" class="bd-btn bd-sm bd-pri" onClick={save}>
              Save changes
            </button>
          </span>
        </div>
      </Show>
      <Toast />
    </section>
  )
}
