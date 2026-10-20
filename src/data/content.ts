// Everything a page needs that differs by language. English data files stay the source of truth.

import { comparisons } from './compare'
import { comparisonsAr } from './compare.ar'
import { href, type Lang, locale } from './i18n'
import { modules } from './modules'
import { modulesAr } from './modules.ar'
import { SITE_URL } from './site'

export const content = {
  en: { modules, comparisons },
  ar: { modules: modulesAr, comparisons: comparisonsAr },
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
    does: 'What it does',
    faq: 'Questions owners ask',
    trial: 'Start with a free trial',
    strong: (n: string) => `Where ${n} is strong`,
    side: 'Side by side',
    need: 'What you need',
    from: (n: string) => `From ${n}'s public website, help pages and listings. Sources are at the bottom of this page.`,
    matters: 'What matters for a gym here',
    moving: (n: string) => `Moving from ${n}`,
    sources: 'Sources',
    checked: 'checked',
  },
  ar: {
    canonical: 'الصفحة الأصلية',
    does: 'شنو يسوي',
    faq: 'أسئلة يسألها أصحاب النوادي',
    trial: 'ابدأ بتجربة مجانية',
    strong: (n: string) => `نقاط قوة ${n}`,
    side: 'جنب بعض',
    need: 'اللي تحتاجه',
    from: (n: string) => `من موقع ${n} الرسمي وصفحات المساعدة والقوائم. المصادر في آخر الصفحة.`,
    matters: 'شنو يهم النادي هني',
    moving: (n: string) => `النقل من ${n}`,
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
    `## ${w.strong(c.name)}`,
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
    w.from(c.name),
    '',
    `## ${w.matters}`,
    ...c.differences.flatMap(([h, p]) => ['', `### ${h}`, '', p]),
    '',
    `## ${w.moving(c.name)}`,
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
