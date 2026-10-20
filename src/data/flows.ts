import type { Lang } from './i18n'

// Node canvases (n8n-style). An icon is a sprite name ("qr") or a brand symbol ("b:whatsapp").

export type Verdict = [kind: 'ok' | 'no', title: string, sub: string]
export type ActionKey = 'if' | 'a1' | 'a2' | 'a3'
export type FlowNode = {
  i: string
  t: string
  s: string
  /** What the hub shows when this trigger is picked. */
  v?: Verdict
  /** Index into `scenarios` when this trigger is picked. */
  sc?: number
  /** Which scenario label this node shows. */
  k?: ActionKey
  dark?: boolean
}
export type Flow = {
  cols: (FlowNode[] | 'hub')[]
  hub?: string
  scenarios?: Record<ActionKey, string>[]
}
export type FlowKey = 'access' | 'auto'

export const FLOWS: Record<Lang, Record<FlowKey, Flow>> = {
  en: {
    access: {
      cols: [
        [
          { i: 'qr', t: 'QR code', s: 'In the member app', v: ['ok', 'Welcome, Aisha', 'Gold 12 months'] },
          {
            i: 'wallet',
            t: 'Apple & Google Wallet',
            s: 'Straight from the lock screen',
            v: ['ok', 'Welcome, Fatima', 'All branches'],
          },
          { i: 'users', t: 'Front desk', s: 'Staff check them in', v: ['no', 'Not today, Omar', 'Membership ended'] },
        ],
        'hub',
        [
          { i: 'gate', t: 'Turnstiles & gates', s: 'Gantner readers' },
          { i: 'nfc', t: 'Phone-tap readers', s: 'Green to go, red to stop' },
          { i: 'tablet', t: 'Reception iPad', s: 'No gates needed' },
          { i: 'door', t: 'Check-ins log', s: 'Every entry and refusal' },
        ],
      ],
      hub: 'Checks their plan, every time',
    },
    auto: {
      cols: [
        [
          { i: 'cal', t: 'Plan ends in 7 days', s: 'When', sc: 0 },
          { i: 'cake', t: "Member's birthday", s: 'When', sc: 1 },
          { i: 'clock', t: 'No visit in 30 days', s: 'When', sc: 2 },
          { i: 'uplus', t: 'New member joins', s: 'When', sc: 3 },
        ],
        [{ i: 'filter', t: 'Membership is active', s: 'If', k: 'if', dark: true }],
        [
          { i: 'mail', t: 'Email a renewal link', s: 'Then', k: 'a1' },
          { i: 'b:whatsapp', t: 'WhatsApp a reminder', s: 'Then', k: 'a2' },
          { i: 'bell', t: 'Email the front desk', s: 'Then', k: 'a3' },
        ],
      ],
      scenarios: [
        {
          if: 'Membership is active',
          a1: 'Email a renewal link',
          a2: 'WhatsApp a reminder',
          a3: 'Email the front desk',
        },
        {
          if: 'Membership is active',
          a1: 'Send a birthday email',
          a2: 'WhatsApp a birthday wish',
          a3: 'Email the front desk',
        },
        {
          if: 'Membership has ended',
          a1: 'Send a we-miss-you email',
          a2: 'WhatsApp a comeback offer',
          a3: 'Email the front desk',
        },
        { if: 'First membership', a1: 'Send a welcome email', a2: 'WhatsApp the app link', a3: 'Email the front desk' },
      ],
    },
  },
  ar: {
    access: {
      cols: [
        [
          { i: 'qr', t: 'رمز QR', s: 'في تطبيق الأعضاء', v: ['ok', 'هلا، عائشة', 'باقة Gold، 12 شهر'] },
          {
            i: 'wallet',
            t: 'Apple وGoogle Wallet',
            s: 'على طول من شاشة القفل',
            v: ['ok', 'هلا، فاطمة', 'كل الفروع'],
          },
          { i: 'users', t: 'الاستقبال', s: 'الموظف يسجل دخولهم', v: ['no', 'مو اليوم، عمر', 'الاشتراك منتهي'] },
        ],
        'hub',
        [
          { i: 'gate', t: 'البوابات الدوّارة', s: 'قارئات Gantner' },
          { i: 'nfc', t: 'قارئات اللمس بالتلفون', s: 'الأخضر ادخل، والأحمر وقف' },
          { i: 'tablet', t: 'iPad في الاستقبال', s: 'ما تحتاج بوابات' },
          { i: 'door', t: 'سجل الدخول', s: 'كل دخول وكل رفض' },
        ],
      ],
      hub: 'يتأكد من باقتهم، كل مرة',
    },
    auto: {
      cols: [
        [
          { i: 'cal', t: 'الباقة تخلص بعد 7 أيام', s: 'لما', sc: 0 },
          { i: 'cake', t: 'عيد ميلاد العضو', s: 'لما', sc: 1 },
          { i: 'clock', t: 'ما زار من 30 يوم', s: 'لما', sc: 2 },
          { i: 'uplus', t: 'عضو جديد ينضم', s: 'لما', sc: 3 },
        ],
        [{ i: 'filter', t: 'الاشتراك فعّال', s: 'إذا', k: 'if', dark: true }],
        [
          { i: 'mail', t: 'إيميل برابط التجديد', s: 'بعدها', k: 'a1' },
          { i: 'b:whatsapp', t: 'تذكير على واتساب', s: 'بعدها', k: 'a2' },
          { i: 'bell', t: 'إيميل للاستقبال', s: 'بعدها', k: 'a3' },
        ],
      ],
      scenarios: [
        { if: 'الاشتراك فعّال', a1: 'إيميل برابط التجديد', a2: 'تذكير على واتساب', a3: 'إيميل للاستقبال' },
        { if: 'الاشتراك فعّال', a1: 'إيميل تهنئة بعيد الميلاد', a2: 'تهنئة على واتساب', a3: 'إيميل للاستقبال' },
        { if: 'الاشتراك منتهي', a1: 'إيميل «اشتقنا لك»', a2: 'عرض رجعة على واتساب', a3: 'إيميل للاستقبال' },
        { if: 'أول اشتراك', a1: 'إيميل ترحيب', a2: 'رابط التطبيق على واتساب', a3: 'إيميل للاستقبال' },
      ],
    },
  },
}
