import type { Lang } from './i18n'

export const SITE_URL = 'https://thing.bh'

/** Gyms running Gym Thing that agreed to be named. */
export const clients = ['Train Fitness', 'RSX Fitness', 'Pulse Fitness', 'Core District Gym', 'Elevation Fitness Club']

export const contact = {
  whatsapp: '+973 3993 6601',
  whatsappHref: 'https://wa.me/97339936601',
  phoneHref: 'tel:+97339936601',
  support: 'support@thing.bh',
  sales: 'hello@thing.bh',
  instagram: 'https://www.instagram.com/thing.bh/',
  linkedin: 'https://www.linkedin.com/company/thing-bh/',
}

/** The free-trial form posts to the Worker (`src/worker.ts`), which checks Turnstile and emails the request. */
export const trialForm = {
  endpoint: '/api/trial/',
  // Turnstile widget "thing.bh free-trial form" (thing.bh + thing-3a1.workers.dev). Public by design;
  // its secret is the Worker secret TURNSTILE_SECRET_KEY.
  turnstileSiteKey: '0x4AAAAAAFn_q7OLR3Y8cUPR',
}

export const nav: Record<Lang, { href: string; label: string }[]> = {
  en: [
    { href: '/modules/', label: 'Modules' },
    { href: '/compare/', label: 'Compare' },
    { href: '/blog/', label: 'Blog' },
    { href: '/about/', label: 'About' },
  ],
  ar: [
    { href: '/modules/', label: 'الأقسام' },
    { href: '/compare/', label: 'المقارنة' },
    { href: '/blog/', label: 'المدونة' },
    { href: '/about/', label: 'من نحن' },
  ],
}

export const included: Record<Lang, string[]> = {
  en: [
    'Every kind of membership',
    'Any door: QR, wallet, gates or none',
    'A till for the counter',
    'Classes and PT',
    'Payroll, GOSI and WPS',
    'Every way to get paid',
    'Follow-ups on autopilot',
    'Every branch, every role',
    'Bring your own domain',
    'Setup and training by us',
    'Your members moved over',
    'Support on WhatsApp, 7 days a week',
  ],
  ar: [
    'كل أنواع الاشتراكات',
    'أي باب: QR، المحفظة، بوابات أو بدون',
    'نقطة بيع للكاونتر',
    'الحصص والتدريب الشخصي',
    'الرواتب والتأمينات (GOSI) وحماية الأجور (WPS)',
    'كل طرق الدفع',
    'متابعات تلقائية',
    'كل فرع وكل صلاحية',
    'دومينك الخاص',
    'التجهيز والتدريب علينا',
    'ننقل أعضاءك بدالك',
    'دعم على واتساب، 7 أيام في الأسبوع',
  ],
}

export type QA = [question: string, answer: string]

export const homeFaq: Record<Lang, QA[]> = {
  en: [
    [
      'How long does setup take?',
      'Most gyms are live within a week. We set everything up, move your members over and train your team.',
    ],
    [
      'How much does it cost?',
      "One yearly price based on your gym's size, with every module included and no setup fee. We share your price while we set up your free trial.",
    ],
    ['Can I keep my turnstiles?', 'Yes. And if you have no gates, an iPad at reception does the job.'],
    [
      'Do members need an app?',
      'No. A pass in Apple or Google Wallet gets them in. The app adds their plan, classes and workouts.',
    ],
    ['Is it in Arabic?', 'Yes. Your members get Arabic and English, and so does our support.'],
    [
      'How do members pay?',
      'BenefitPay, Apple Pay, Google Pay, cards, cash or a link on WhatsApp. Whatever they like.',
    ],
    [
      'Is our data safe?',
      "Yes. It's encrypted and backed up every day, and card payments go through a licensed provider, so card numbers never reach us.",
    ],
  ],
  ar: [
    ['كم ياخذ التجهيز؟', 'أغلب النوادي تشتغل خلال أسبوع. إحنا نجهز كل شي، ننقل أعضاءك وندرّب فريقك.'],
    [
      'كم السعر؟',
      'سعر سنوي واحد حسب حجم ناديك، فيه كل الأقسام وبدون رسوم تجهيز. نعطيك سعرك وإحنا نجهز تجربتك المجانية.',
    ],
    ['أقدر أخلي البوابات اللي عندي؟', 'نعم. وإذا ما عندك بوابات، iPad في الاستقبال يكفي.'],
    [
      'لازم الأعضاء ينزلون تطبيق؟',
      'لا. بطاقة في Apple Wallet أو Google Wallet تدخّلهم. والتطبيق يضيف باقتهم وحصصهم وتمارينهم.',
    ],
    ['النظام بالعربي؟', 'نعم. أعضاءك يحصلون عربي وإنجليزي، وكذلك الدعم عندنا.'],
    ['شلون يدفعون الأعضاء؟', 'BenefitPay، Apple Pay، Google Pay، البطاقات، الكاش أو رابط على واتساب. اللي يريحهم.'],
    [
      'بياناتنا في أمان؟',
      'نعم. مشفّرة وتنحفظ منها نسخة احتياطية كل يوم، والدفع بالبطاقات يمر عن طريق مزود دفع مرخّص، يعني أرقام البطاقات ما توصلنا أبداً.',
    ],
  ],
}

/** Three modules the homepage teases, each with its most unusual feature. */
export const picks: Record<Lang, [slug: string, title: string, text: string][]> = {
  en: [
    [
      'member-app',
      'Your own app in the stores.',
      'Your name and logo on the App Store and Google Play, with a workout tracker members open every day.',
    ],
    [
      'point-of-sale',
      'Stock in from a photo.',
      'Snap the supplier receipt and the delivery goes into stock. The till warns when the last bottle sells.',
    ],
    [
      'classes-and-pt',
      'PT packs that count down.',
      "Sell 10 sessions, and every session a coach marks done comes off the member's pack.",
    ],
  ],
  ar: [
    [
      'member-app',
      'تطبيقك الخاص في المتاجر.',
      'اسم ناديك وشعاره على App Store وGoogle Play، مع متتبع تمارين يفتحه الأعضاء كل يوم.',
    ],
    [
      'point-of-sale',
      'المخزون يدخل من صورة.',
      'صوّر فاتورة المورد والشحنة تدخل المخزون. ونقطة البيع تنبهك لما تنباع آخر غرشة.',
    ],
    ['classes-and-pt', 'باقات تدريب شخصي تنقص بروحها.', 'بيع 10 جلسات، وكل جلسة يسجلها المدرب تنخصم من باقة العضو.'],
  ],
}
