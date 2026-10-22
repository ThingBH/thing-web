import { href, type Lang } from './i18n'
import { type Post, TAGS } from './posts'
import { contact, SITE_URL } from './site'

type Node = Record<string, unknown>
const org = `${SITE_URL}/#org`
const website = (lang: Lang) => `${SITE_URL}${href(lang, '/')}#website`

const product: Record<Lang, { description: string; offer: string }> = {
  en: {
    description:
      'Gym management software built in Bahrain: memberships, access control, payments, VAT invoices, payroll, classes and a member app in Arabic and English.',
    offer: 'One yearly price by gym size, everything included. Free trial up to 3 months.',
  },
  ar: {
    description:
      'برنامج لإدارة النوادي الرياضية مطوّر في البحرين: الاشتراكات والتحكم بالدخول والمدفوعات والفواتير الضريبية والرواتب والحصص وتطبيق للأعضاء بالعربية والإنجليزية.',
    offer: 'سعر سنوي واحد حسب حجم النادي، يشمل كل شيء. تجربة مجانية لمدة تصل إلى 3 أشهر.',
  },
}

/** The graph every page carries: the company, the site in this language and the product. */
export const baseGraph = (lang: Lang): Node[] => [
  {
    '@type': 'Organization',
    '@id': org,
    name: 'Thing W.L.L.',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    email: contact.sales,
    sameAs: [contact.instagram, contact.linkedin],
    identifier: { '@type': 'PropertyValue', name: 'Commercial Registration No.', value: '196454-1' },
    address: { '@type': 'PostalAddress', addressLocality: 'Seef', addressCountry: 'BH' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+973-3993-6601',
        email: contact.support,
        availableLanguage: ['en', 'ar'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        },
      },
      { '@type': 'ContactPoint', contactType: 'sales', email: contact.sales, availableLanguage: ['en', 'ar'] },
    ],
  },
  {
    '@type': 'WebSite',
    '@id': website(lang),
    url: `${SITE_URL}${href(lang, '/')}`,
    name: 'Gym Thing',
    publisher: { '@id': org },
    inLanguage: lang,
  },
  {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#gymthing`,
    name: 'Gym Thing',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Gym management software',
    operatingSystem: 'Web, iOS, Android, Windows, macOS',
    description: product[lang].description,
    areaServed: ['Bahrain', 'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Oman'].map((name) => ({
      '@type': 'Country',
      name,
    })),
    publisher: { '@id': org },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BHD',
      description: product[lang].offer,
      url: `${SITE_URL}${href(lang, '/free-trial/')}`,
    },
  },
]

export const faqPage = (qa: [string, string][]): Node => ({
  '@type': 'FAQPage',
  mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})

export const breadcrumbs = (trail: [name: string, path: string][]): Node => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
})

/** The page itself, so every page states its language and which site it belongs to. */
export const webPage = (lang: Lang, url: string, name: string, description: string, image: string): Node => ({
  '@type': 'WebPage',
  '@id': url,
  url,
  name,
  description,
  image,
  inLanguage: lang,
  isPartOf: { '@id': website(lang) },
})

/** A page's share card, drawn at build time by src/integrations/og.ts. The home cards keep the old /og.png
 *  addresses; pages with no address of their own (404, thank-you) share the home card. */
export const cardPath = (path: string) =>
  path === '/' ? '/og.png' : path === '/ar/' ? '/og-ar.png' : `/og${path.replace(/\/$/, '')}.png`

const blogId = (lang: Lang) => `${SITE_URL}${href(lang, '/blog/')}#blog`

/** One blog post. `url` is its canonical URL; author and publisher are the company node in baseGraph. */
export const blogPosting = (lang: Lang, url: string, p: Post): Node => ({
  '@type': 'BlogPosting',
  '@id': `${url}#post`,
  headline: p[lang].title,
  description: p[lang].description,
  url,
  datePublished: p.date,
  dateModified: p.updated ?? p.date,
  inLanguage: lang,
  author: { '@id': org },
  publisher: { '@id': org },
  image: `${SITE_URL}${cardPath(new URL(url).pathname)}`,
  mainEntityOfPage: { '@id': url },
  isPartOf: { '@id': blogId(lang) },
  keywords: p.tags.map((t) => TAGS[t][lang]).join(lang === 'ar' ? '، ' : ', '),
})

/** The blog index, listing every post. */
export const blog = (lang: Lang, name: string, description: string, posts: Post[]): Node => ({
  '@type': 'Blog',
  '@id': blogId(lang),
  url: `${SITE_URL}${href(lang, '/blog/')}`,
  name,
  description,
  inLanguage: lang,
  publisher: { '@id': org },
  blogPost: posts.map((p) => {
    const url = `${SITE_URL}${href(lang, `/blog/${p.slug}/`)}`
    return {
      '@type': 'BlogPosting',
      '@id': `${url}#post`,
      headline: p[lang].title,
      url,
      datePublished: p.date,
    }
  }),
})
