// Everything a page needs that differs by language. English data files stay the source of truth.

import { comparisons } from './compare'
import { comparisonsAr } from './compare.ar'
import { countries } from './countries'
import { countriesAr } from './countries.ar'
import { href, type Lang, locale } from './i18n'
import { modules } from './modules'
import { modulesAr } from './modules.ar'
import { postDate, posts, TAGS } from './posts'
import { SITE_URL } from './site'

export const content = {
  en: { modules, comparisons, countries },
  ar: { modules: modulesAr, comparisons: comparisonsAr, countries: countriesAr },
} satisfies Record<Lang, unknown>

/** A source's "checked" date (written like "20 Oct 2026") in the page's language. */
export const checkedOn = (lang: Lang, day: string) =>
  lang === 'en'
    ? day
    : new Intl.DateTimeFormat(locale.ar, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
        new Date(`${day} UTC`),
      )

const md = (body: string[]) =>
  new Response(body.join('\n'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })

const words = {
  en: {
    canonical: 'Canonical page',
    modules: 'Modules',
    does: 'What it does',
    faq: 'Questions owners ask',
    trial: 'Start with a free trial',
    strong: (n: string, g?: boolean) => (g ? 'What it does well' : `Where ${n} is strong`),
    side: 'Side by side',
    need: 'What you need',
    from: (n: string, g?: boolean) =>
      g
        ? 'Sources are at the bottom of this page.'
        : `From ${n}'s public website, help pages and listings. Sources are at the bottom of this page.`,
    matters: 'What matters for a gym here',
    moving: (n: string, g?: boolean) => (g ? 'Moving to Gym Thing' : `Moving from ${n}`),
    sources: 'Sources',
    checked: 'checked',
  },
  ar: {
    canonical: 'الصفحة الأصلية',
    modules: 'الأقسام',
    does: 'شنو يسوي',
    faq: 'أسئلة يسألها أصحاب النوادي',
    trial: 'ابدأ بتجربة مجانية',
    strong: (n: string) => `نقاط قوة ${n}`,
    side: 'جنب بعض',
    need: 'اللي تحتاجه',
    from: (n: string, g?: boolean) =>
      g ? 'المصادر في آخر الصفحة.' : `من موقع ${n} الرسمي وصفحات المساعدة والقوائم. المصادر في آخر الصفحة.`,
    matters: 'شنو يهم النادي هني',
    moving: (n: string, g?: boolean) => (g ? 'الانتقال إلى Gym Thing' : `النقل من ${n}`),
    sources: 'المصادر',
    checked: 'تم التحقق',
  },
}

/** A plain Markdown copy of a module page for AI readers. */
export function moduleMd(lang: Lang, slug: string | undefined) {
  const m = content[lang].modules.find((x) => x.slug === slug)
  if (!m) throw new Error(`Unknown module "${slug}"`)
  const w = words[lang]
  const url = (path: string) => `${SITE_URL}${href(lang, path)}`
  return md([
    `# ${m.name}`,
    '',
    `> ${m.promise}`,
    '',
    m.summary,
    '',
    `${w.canonical}: ${url(`/modules/${m.slug}/`)}`,
    '',
    `## ${w.does}`,
    ...m.groups.flatMap((g) => ['', `### ${g.t}`, '', ...g.items.map(([name, line]) => `- **${name}**: ${line}`)]),
    ...(m.faq.length ? ['', `## ${w.faq}`, ...m.faq.flatMap(([q, a]) => ['', `### ${q}`, '', a])] : []),
    '',
    `${w.trial}: ${url('/free-trial/')}`,
    '',
  ])
}

/** A plain Markdown copy of a country page for AI readers. */
export function countryMd(lang: Lang, slug: string | undefined) {
  const c = content[lang].countries.find((x) => x.slug === slug)
  if (!c) throw new Error(`Unknown country "${slug}"`)
  const w = words[lang]
  const url = (path: string) => `${SITE_URL}${href(lang, path)}`
  return md([
    `# ${c.title}`,
    '',
    `> ${c.lede}`,
    '',
    `${w.canonical}: ${url(`/gym-software/${c.slug}/`)}`,
    ...c.points.flatMap(([h, p]) => ['', `## ${h}`, '', p]),
    '',
    `## ${w.modules}`,
    '',
    ...content[lang].modules.map(
      (m) =>
        `- [${m.name}](${url(`/modules/${m.slug}/`)}): ${m.groups
          .slice(0, 3)
          .map((g) => g.t)
          .join(lang === 'ar' ? '، ' : ', ')}`,
    ),
    '',
    `## ${w.faq}`,
    ...c.faq.flatMap(([q, a]) => ['', `### ${q}`, '', a]),
    '',
    `${w.trial}: ${url('/free-trial/')}`,
    '',
  ])
}

/** A plain Markdown copy of a comparison page for AI readers. */
export function compareMd(lang: Lang, slug: string | undefined) {
  const c = content[lang].comparisons.find((x) => x.slug === slug)
  if (!c) throw new Error(`Unknown comparison "${slug}"`)
  const w = words[lang]
  const url = (path: string) => `${SITE_URL}${href(lang, path)}`
  const rows = c.rows.filter((r) => r[0] !== 'Topic')
  return md([
    `# ${c.title}`,
    '',
    `> ${c.lede}`,
    '',
    `${w.canonical}: ${url(`/compare/${c.slug}/`)}`,
    '',
    `## ${w.strong(c.name, c.generic)}`,
    '',
    c.they,
    '',
    ...c.strengths.map((s) => `- ${s}`),
    '',
    `## ${w.side}`,
    '',
    `| ${w.need} | Gym Thing | ${c.name} |`,
    '| --- | --- | --- |',
    ...rows.map((r) => `| ${r.map((t) => t.replace(/\|/g, '\\|')).join(' | ')} |`),
    '',
    w.from(c.name, c.generic),
    '',
    `## ${w.matters}`,
    ...c.differences.flatMap(([h, p]) => ['', `### ${h}`, '', p]),
    '',
    `## ${w.moving(c.name, c.generic)}`,
    '',
    c.switching,
    '',
    `## ${w.faq}`,
    ...c.faq.flatMap(([q, a]) => ['', `### ${q}`, '', a]),
    ...(c.sources.length
      ? [
          '',
          `## ${w.sources}`,
          '',
          ...c.sources.map(
            ([label, link, checked]) => `- [${label}](${link}), ${w.checked} ${checkedOn(lang, checked)}`,
          ),
        ]
      : []),
    '',
    `${w.trial}: ${url('/free-trial/')}`,
    '',
  ])
}

/** The blog's name and summary, shared by the index page and the RSS feed. */
export const blogCopy = {
  en: {
    name: 'The Gym Thing blog',
    description:
      'Research, guides and news for gym owners in Bahrain and the Gulf, from the team that builds Gym Thing.',
  },
  ar: {
    name: 'مدونة Gym Thing',
    description: 'أبحاث وأدلة وأخبار لأصحاب النوادي الرياضية في البحرين والخليج، من الفريق الذي يطوّر Gym Thing.',
  },
}

/** Labels a post page and its Markdown copy share. */
export const postText = {
  en: {
    words: 'In their words',
    answer: 'How Gym Thing handles it',
    more: 'Read more on',
    published: 'Published',
    checked: 'Sources checked',
  },
  ar: {
    words: 'بكلامهم',
    answer: 'شلون يتعامل Gym Thing وياها',
    more: 'اقرأ أكثر عن',
    published: 'نُشر في',
    checked: 'تم التحقق من المصادر في',
  },
}

/** A plain Markdown copy of a blog post for AI readers. Product screens are left out. */
export function postMd(lang: Lang, slug: string | undefined) {
  const p = posts.find((x) => x.slug === slug)
  if (!p) throw new Error(`Unknown blog post "${slug}"`)
  const c = p[lang]
  const w = postText[lang]
  const url = (path: string) => `${SITE_URL}${href(lang, path)}`
  const mods = content[lang].modules
  // In-page anchors point at the HTML page, since this copy has no ids.
  const page = url(`/blog/${p.slug}/`)
  const abs = (s: string) => s.replaceAll('](#', `](${page}#`)
  return md([
    `# ${c.title}`,
    '',
    `> ${c.lede}`,
    '',
    `${w.published} ${postDate(lang, p.date)} · ${p.tags.map((t) => TAGS[t][lang]).join(', ')}`,
    '',
    `${words[lang].canonical}: ${url(`/blog/${p.slug}/`)}`,
    ...c.blocks.flatMap((b): string[] => {
      switch (b.type) {
        case 'heading':
          return ['', `## ${b.text}`]
        case 'text':
          return b.paras.flatMap((t) => ['', abs(t)])
        case 'list':
          return ['', ...b.items.map((t) => `- ${abs(t)}`)]
        case 'note':
          return ['', `*${b.text}*`]
        case 'quotes':
          return b.items.flatMap((q) => [
            '',
            `> ${q.quote}`,
            '>',
            `> [${q.source}](${q.url})${lang === 'ar' ? '، ' : ', '}${[q.date, q.note].filter(Boolean).join(lang === 'ar' ? '، ' : ', ')}`,
          ])
        case 'answer': {
          const m = b.module ? mods.find((x) => x.slug === b.module) : undefined
          return [
            '',
            `### ${w.answer}: ${b.heading}`,
            '',
            ...b.points.map((t) => `- ${t}`),
            ...(m ? ['', `${w.more} [${m.name}](${url(`/modules/${m.slug}/`)})`] : []),
          ]
        }
        default:
          // Product screens have no Markdown form.
          return []
      }
    }),
    '',
    `${w.checked} ${postDate(lang, p.checked)}`,
    '',
    `${words[lang].trial}: ${url('/free-trial/')}`,
    '',
  ])
}

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** RSS 2.0 feed of the blog in one language. */
export function blogRss(lang: Lang) {
  const url = (path: string) => `${SITE_URL}${href(lang, path)}`
  const rfc822 = (d: string) => new Date(`${d}T00:00:00Z`).toUTCString()
  const b = blogCopy[lang]
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>${xml(b.name)}</title>`,
    `<link>${url('/blog/')}</link>`,
    `<atom:link href="${url('/blog/rss.xml')}" rel="self" type="application/rss+xml" />`,
    `<description>${xml(b.description)}</description>`,
    `<language>${lang}</language>`,
    ...(posts[0] ? [`<lastBuildDate>${rfc822(posts[0].updated ?? posts[0].date)}</lastBuildDate>`] : []),
    ...posts.map((p) =>
      [
        '<item>',
        `<title>${xml(p[lang].title)}</title>`,
        `<link>${url(`/blog/${p.slug}/`)}</link>`,
        `<guid isPermaLink="true">${url(`/blog/${p.slug}/`)}</guid>`,
        `<pubDate>${rfc822(p.date)}</pubDate>`,
        `<description>${xml(p[lang].description)}</description>`,
        ...p.tags.map((t) => `<category>${xml(TAGS[t][lang])}</category>`),
        '</item>',
      ].join('\n'),
    ),
    '</channel>',
    '</rss>',
    '',
  ]
  // application/xml, not rss+xml, so browsers apply rss.xsl instead of downloading the feed. Readers accept both.
  return new Response(body.join('\n'), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
