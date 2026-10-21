import { createSignal, onCleanup, Show } from 'solid-js'
import './PayPage.css'
import { linkPaid, setLinkPaid } from './paylink-state'
import { Icon } from './shared'

// Strings from the-gym-thing apps/admin-web/lib/pay/i18n.ts, only the keys this page shows.
const en = {
  switchLanguage: 'العربية',
  switchLanguageLabel: 'Switch to Arabic',
  membershipFor: 'Membership for',
  startsOnPayment: 'Starts when you pay',
  subtotal: 'Subtotal',
  vat: 'VAT 10%',
  total: 'Total',
  reference: 'Reference',
  choosePayment: 'Choose how to pay',
  orCard: 'or pay by card',
  pay: 'Pay',
  secureNote: 'Card details go straight to Tap Payments. ABC Gym never sees your card number.',
  expires: 'This link expires 24 Oct 2026, 18:00',
  payAgain: 'Start a new payment',
  paidTitle: 'Payment received',
  paidBody: 'Your membership with ABC Gym is confirmed.',
  amountPaid: 'Amount paid',
  paidWith: 'Paid with',
  paidOn: 'Paid on',
  invoice: 'Invoice',
  copy: 'Copy',
  copied: 'Copied',
  cardInvalid: 'Check the card details and try again.',
  benefitPay: 'Pay with BenefitPay',
  cardLabels: { cardNumber: 'Card number', expirationDate: 'MM/YY', cvv: 'CVV', cardHolder: 'Name on card' },
}
const ar: typeof en = {
  switchLanguage: 'English',
  switchLanguageLabel: 'التبديل إلى الإنجليزية',
  membershipFor: 'اشتراك باسم',
  startsOnPayment: 'يبدأ عند الدفع',
  subtotal: 'المجموع قبل الضريبة',
  vat: 'ضريبة القيمة المضافة 10%',
  total: 'الإجمالي',
  reference: 'المرجع',
  choosePayment: 'اختر طريقة الدفع',
  orCard: 'أو ادفع بالبطاقة',
  pay: 'ادفع',
  secureNote: 'تُرسل بيانات البطاقة مباشرة إلى Tap Payments، ولا يطّلع ABC Gym على رقم بطاقتك.',
  expires: 'تنتهي صلاحية هذا الرابط في 24 أكتوبر 2026، 06:00 م',
  payAgain: 'ابدأ عملية دفع جديدة',
  paidTitle: 'تم استلام الدفع',
  paidBody: 'تم تأكيد اشتراكك في ABC Gym.',
  amountPaid: 'المبلغ المدفوع',
  paidWith: 'طريقة الدفع',
  paidOn: 'تاريخ الدفع',
  invoice: 'رقم الفاتورة',
  copy: 'نسخ',
  copied: 'تم النسخ',
  cardInvalid: 'تحقق من بيانات البطاقة وحاول مرة أخرى.',
  benefitPay: 'الدفع عبر BenefitPay',
  cardLabels: {
    cardNumber: 'رقم البطاقة',
    expirationDate: 'شهر/سنة',
    cvv: 'رمز التحقق',
    cardHolder: 'الاسم على البطاقة',
  },
}
const INVOICE = 'MEM-2026-000412'
const paidOn = (d: Date, ar: boolean) =>
  new Intl.DateTimeFormat(ar ? 'ar-u-nu-latn' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Bahrain',
  }).format(d)

export default function PayPage() {
  const [ar_, setAr] = createSignal(false)
  const [card, setCard] = createSignal({ no: '', exp: '', cvv: '', name: '' })
  const [invalid, setInvalid] = createSignal(false)
  const [copied, setCopied] = createSignal('')
  const t = () => (ar_() ? ar : en)

  const payCard = (e: SubmitEvent) => {
    e.preventDefault()
    const c = card()
    const no = c.no.replace(/\D/g, '')
    if (no.length < 12 || !/^\d{2}\s*\/?\s*\d{2}$/.test(c.exp) || !/^\d{3,4}$/.test(c.cvv) || !c.name.trim())
      return setInvalid(true)
    const brand = no[0] === '4' ? 'Visa' : no[0] === '5' ? 'Mastercard' : 'Card'
    setLinkPaid({ at: new Date(), method: `${brand} •••• ${no.slice(-4)}` })
  }
  const field = (k: keyof ReturnType<typeof card>) => (e: InputEvent & { currentTarget: HTMLInputElement }) => {
    setInvalid(false)
    setCard((c) => ({ ...c, [k]: e.currentTarget.value }))
  }
  let copyT: ReturnType<typeof setTimeout> | undefined
  onCleanup(() => clearTimeout(copyT))
  const copy = (v: string) => {
    navigator.clipboard?.writeText(v).catch(() => {})
    setCopied(v)
    clearTimeout(copyT)
    copyT = setTimeout(() => setCopied(''), 2000)
  }
  const reset = () => {
    setLinkPaid(null)
    setCard({ no: '', exp: '', cvv: '', name: '' })
  }
  const Copy = (p: { label: string; value: string; big?: boolean }) => (
    <div class="cv">
      <div>
        <small>{p.label}</small>
        <span class={p.big ? 'big' : ''} dir="ltr">
          {p.value}
        </span>
      </div>
      <button type="button" aria-label={`${t().copy} ${p.label}`} onClick={() => copy(p.value)}>
        <Icon n={copied() === p.value ? 'check' : 'file'} />
        {copied() === p.value ? t().copied : t().copy}
      </button>
    </div>
  )

  return (
    <section
      class="mx mx-paypage"
      data-ui
      aria-label="A WhatsApp payment link message and the online pay page it opens"
    >
      <div class="mx-paypage-in">
        <section class="mx-paypage-chat" aria-label="WhatsApp message with the payment link">
          <div class="mx-paypage-ch">
            <span class="av">ABC</span>
            <b>ABC Gym</b>
            <svg class="wa" viewBox="0 0 24 24" aria-hidden="true">
              <use href="#b-whatsapp" />
            </svg>
          </div>
          <div class="mx-paypage-thread">
            <span class="mx-paypage-day">Today</span>
            <div class="mx-paypage-bubble">
              <div class="mx-paypage-prev">
                <span class="lg">ABC</span>
                <span>
                  <b>ABC Gym</b>
                  <small>Gym Management</small>
                  <small class="host">abcgym.gym.thing.bh</small>
                </span>
              </div>
              {/* WhatsApp renders *bold* and _italic_ without the markers, so the bubble shows them styled. */}
              <p>
                Hi <strong>Mariam</strong>,
                <br />
                We've sent you a payment link for <strong>Gold 3 months</strong> (<strong>BHD 75.000</strong>).
                <br />
                <em>It expires on 24 Oct 2026, 18:00.</em>
              </p>
              <p>
                <span class="url">https://abcgym.gym.thing.bh/pay/q7Xc2LmR9vTn4bWk8sYe1HdJ0pFa6uGz3NoKiE5rMhw</span>
              </p>
              <span class="time">10:42</span>
            </div>
          </div>
        </section>

        <section class="mx-paypage-page" aria-label="Pay page" dir={ar_() ? 'rtl' : 'ltr'} lang={ar_() ? 'ar' : 'en'}>
          <div class="mx-paypage-hd">
            <span class="lg">ABC</span>
            <b>ABC Gym</b>
            <button
              type="button"
              class="lang"
              lang={ar_() ? 'en' : 'ar'}
              aria-label={t().switchLanguageLabel}
              onClick={() => setAr((v) => !v)}
            >
              {t().switchLanguage}
            </button>
          </div>

          <Show when={linkPaid()}>
            {(p) => (
              <section class="mx-paypage-out">
                <span class="ok">
                  <Icon n="check" />
                </span>
                <h4 role="status">{t().paidTitle}</h4>
                <p>{t().paidBody}</p>
                <Copy label={t().invoice} value={INVOICE} big />
                <dl>
                  <div>
                    <dt>{t().amountPaid}</dt>
                    <dd dir="ltr" class="m">
                      BHD 75.000
                    </dd>
                  </div>
                  <div>
                    <dt>{t().paidWith}</dt>
                    <dd dir="ltr">{p().method}</dd>
                  </div>
                  <div>
                    <dt>{t().paidOn}</dt>
                    <dd>{paidOn(p().at, ar_())}</dd>
                  </div>
                </dl>
                <div class="rule">
                  <Copy label={t().reference} value="PL-7K3M9Q" />
                </div>
                <button type="button" class="again" onClick={reset}>
                  {t().payAgain}
                </button>
              </section>
            )}
          </Show>

          <section class="mx-paypage-pass">
            <div class="band">
              <span>{t().membershipFor}</span>
              <b>
                <bdi>Mariam Hasan</bdi>
              </b>
              <Show when={linkPaid()}>
                <em>
                  <Icon n="check" />
                  {t().paidTitle}
                </em>
              </Show>
            </div>
            <div class="bd">
              <h4>
                <bdi>Gold 3 months</bdi>
              </h4>
              <span class="st">
                <Icon n="cal" />
                {t().startsOnPayment}
              </span>
            </div>
            <div class="tear" aria-hidden="true" />
            <dl>
              <div>
                <dt>{t().subtotal}</dt>
                <dd dir="ltr">BHD 68.182</dd>
              </div>
              <div>
                <dt>{t().vat}</dt>
                <dd dir="ltr">BHD 6.818</dd>
              </div>
              <div class="tot">
                <dt>{t().total}</dt>
                <dd dir="ltr">BHD 75.000</dd>
              </div>
            </dl>
          </section>
          <div class="mx-paypage-ref">
            <span>
              {t().reference} <b dir="ltr">PL-7K3M9Q</b>
            </span>
            <Show when={!linkPaid()}>
              <span>{t().expires}</span>
            </Show>
          </div>

          <Show when={!linkPaid()}>
            <div class="mx-paypage-methods">
              <h4>{t().choosePayment}</h4>
              <button
                type="button"
                class="apple"
                aria-label="Apple Pay"
                onClick={() => setLinkPaid({ at: new Date(), method: 'Apple Pay' })}
              >
                {/* The standard Apple Pay button: the Apple logo followed by "Pay". */}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href="#b-apple" />
                </svg>
                <span aria-hidden="true">Pay</span>
              </button>
              <button type="button" class="bp" onClick={() => setLinkPaid({ at: new Date(), method: 'BenefitPay' })}>
                {t().benefitPay}
              </button>
              <div class="or">
                <i />
                {t().orCard}
                <i />
              </div>
              <form class="mx-paypage-form" onSubmit={payCard} novalidate>
                <div class="fields">
                  <input
                    class="f"
                    dir="ltr"
                    inputmode="numeric"
                    autocomplete="cc-number"
                    placeholder={t().cardLabels.cardNumber}
                    aria-label={t().cardLabels.cardNumber}
                    aria-invalid={invalid() && card().no.replace(/\D/g, '').length < 12}
                    value={card().no}
                    onInput={field('no')}
                  />
                  <div class="pair">
                    <input
                      class="f"
                      dir="ltr"
                      inputmode="numeric"
                      autocomplete="cc-exp"
                      placeholder={t().cardLabels.expirationDate}
                      aria-label={t().cardLabels.expirationDate}
                      value={card().exp}
                      onInput={field('exp')}
                    />
                    <input
                      class="f"
                      dir="ltr"
                      inputmode="numeric"
                      autocomplete="cc-csc"
                      placeholder={t().cardLabels.cvv}
                      aria-label={t().cardLabels.cvv}
                      value={card().cvv}
                      onInput={field('cvv')}
                    />
                  </div>
                  <input
                    class="f"
                    autocomplete="cc-name"
                    placeholder={t().cardLabels.cardHolder}
                    aria-label={t().cardLabels.cardHolder}
                    value={card().name}
                    onInput={field('name')}
                  />
                  <Show when={invalid()}>
                    <p class="err" role="alert">
                      {t().cardInvalid}
                    </p>
                  </Show>
                </div>
                <button type="submit" class="pay">
                  {t().pay}{' '}
                  <b>
                    <bdi dir="ltr">BHD 75.000</bdi>
                  </b>
                </button>
              </form>
              <p class="note">
                <Icon n="lock" />
                {t().secureNote}
              </p>
            </div>
          </Show>
        </section>
      </div>
    </section>
  )
}
