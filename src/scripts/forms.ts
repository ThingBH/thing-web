// Progressive enhancement for the free-trial form: inline validation, then a fetch
// submit to /api/trial/ with a thank-you panel. Without JS the form posts normally and the Worker redirects to /free-trial/thanks/.
import { href, langOf } from '../data/i18n'

const lang = langOf(document.documentElement.lang)
const t = {
  en: {
    empty: 'Please fill this in.',
    phone: 'Add the full number, including the country code.',
    captcha: "Tick the box to show you're not a robot.",
    failed: "We couldn't send that. Tick the box and try again, or message us on WhatsApp.",
    thanks: (name: string, gym: string) => `Thanks, ${name}. We're setting up ${gym}.`,
    next: "We'll message you on WhatsApp to book your walkthrough.",
    home: 'Back to the homepage',
  },
  ar: {
    empty: 'لو سمحت عبّ هذي الخانة.',
    phone: 'اكتب الرقم كامل، مع رمز الدولة.',
    captcha: 'أشّر على المربع عشان نتأكد إنك مو روبوت.',
    failed: 'ما قدرنا نرسله. أشّر على المربع وجرّب مرة ثانية، أو راسلنا على واتساب.',
    thanks: (name: string, gym: string) => `شكراً ${name}. قاعدين نجهز ${gym}.`,
    next: 'بنراسلك على واتساب عشان نحجز موعد الشرح.',
    home: 'رجوع للصفحة الرئيسية',
  },
}[lang]

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] ?? c)

type Control = HTMLInputElement | HTMLSelectElement

function clear(field: Element | null) {
  field?.classList.remove('bad')
  const err = field?.querySelector('.err')
  if (err) err.textContent = ''
  const el = field?.querySelector('input, select')
  el?.removeAttribute('aria-invalid')
  el?.removeAttribute('aria-describedby')
}

function validate(form: HTMLFormElement) {
  let first: Control | null = null
  for (const f of form.querySelectorAll('.field')) clear(f)
  for (const el of form.querySelectorAll<Control>('[required]')) {
    const v = el.value.trim()
    let msg = ''
    if (!v) msg = t.empty
    else if (el.type === 'tel' && v.replace(/\D/g, '').length < 8) msg = t.phone
    if (!msg) continue
    const f = el.closest('.field')
    f?.classList.add('bad')
    const err = f?.querySelector('.err')
    if (err) {
      err.textContent = msg
      err.id ||= `${el.id}-err`
      el.setAttribute('aria-describedby', err.id)
    }
    el.setAttribute('aria-invalid', 'true')
    first ??= el
  }
  first?.focus()
  // Turnstile puts its token in this hidden input once solved.
  const captcha = form.querySelector<HTMLInputElement>('[name="cf-turnstile-response"]')
  if (first || !captcha || captcha.value) return !first
  captchaError(form, t.captcha)
  return false
}

function captchaError(form: HTMLFormElement, msg: string) {
  const err = form.querySelector('[data-captcha-field] .err')
  if (err) err.textContent = msg
}

function thanks(gym: string, name: string) {
  const h = t.thanks(esc(name), esc(gym))
  return `<div class="done" role="status" tabindex="-1"><span class="ok"><svg class="i"><use href="#i-check"/></svg></span><h2 class="d3">${h}</h2><p class="body">${t.next}</p><a class="btn ghost" href="${href(lang, '/')}">${t.home}</a></div>`
}

for (const host of document.querySelectorAll<HTMLElement>('[data-form]')) {
  const form = host.querySelector('form')
  if (!form) continue
  form.noValidate = true
  form.addEventListener(
    'blur',
    (e) => {
      const el = e.target as Control
      if (el.required && el.value.trim()) clear(el.closest('.field'))
    },
    true,
  )
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!validate(form)) return
    const button = form.querySelector('button')
    if (button) button.disabled = true
    const value = (sel: string) => form.querySelector<HTMLInputElement>(sel)?.value.trim() ?? ''
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      const data: { success?: boolean } = await res.json()
      if (!res.ok || !data.success) throw new Error(String(res.status))
    } catch {
      // Tokens are single-use, so a retry needs a fresh one.
      ;(globalThis as { turnstile?: { reset: () => void } }).turnstile?.reset()
      captchaError(form, t.failed)
      if (button) button.disabled = false
      return
    }
    host.innerHTML = thanks(value('[id$="-gym"]'), value('[id$="-name"]').split(' ')[0])
    host.querySelector<HTMLElement>('.done')?.focus()
  })
}
