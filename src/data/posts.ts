// The blog. One file per post in ./posts/<slug>.ts, each exporting `post`. Adding a post = adding one file.
import type { ScreenName } from '../components/Screen.astro'
import type { FlowKey } from './flows'
import { type Lang, locale } from './i18n'
import { modules } from './modules'

/** Tag keys a post can use, with their label in each language. Add a key here to use a new tag. */
export const TAGS = {
  research: { en: 'Research', ar: 'بحث' },
  'gym-software': { en: 'Gym software', ar: 'برامج النوادي' },
  payments: { en: 'Payments', ar: 'المدفوعات' },
  'front-door': { en: 'Front door', ar: 'الدخول' },
  'member-app': { en: 'Member app', ar: 'تطبيق الأعضاء' },
  'running-the-gym': { en: 'Running the gym', ar: 'إدارة النادي' },
  gulf: { en: 'Gulf', ar: 'الخليج' },
} satisfies Record<string, Record<Lang, string>>
export type Tag = keyof typeof TAGS

type Piece = `screen:${ScreenName}` | `flow:${FlowKey}`
/** Product pieces, as on module pages: one or two, joined by `+`. */
export type Show = Piece | `${Piece}+${Piece}`

/** Text in `text`, `list`, `note` and answer points may hold Markdown links: [label](https://…), (/path/) or (#id). */
export type Quote = {
  /** As shown, with its quotation marks. */
  quote: string
  /** Readable label, e.g. "Arab News on the CST Saudi Internet Report 2025". Competitor reviews are quoted unnamed and unlinked. */
  source: string
  /** Link to the source page. Omitted for anonymised competitor reviews. */
  url?: string
  /** As written, e.g. "1 Mar 2025" or "Oct 2026". */
  date: string
  /** Shown after the date, e.g. "translated from Arabic". */
  note?: string
}
export type Block =
  | { type: 'heading'; text: string; id: string }
  | { type: 'text'; paras: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'quotes'; items: Quote[] }
  /** "How Gym Thing handles it". `module` (a slug in modules.ts) adds "Read more on <Module>". */
  | { type: 'answer'; heading: string; points: string[]; module?: string }
  | { type: 'screen'; show: Show; caption?: string }
  | { type: 'note'; text: string }

export type PostCopy = {
  /** The h1, and the title in the index, RSS and structured data. */
  title: string
  /** The <title>, when it should differ from `title` (e.g. to carry the search phrase). */
  seoTitle?: string
  /** Meta description, ~150 characters. Formal Arabic on the Arabic side. */
  description: string
  lede: string
  blocks: Block[]
}
export type Post = {
  slug: string
  /** YYYY-MM-DD */
  date: string
  updated?: string
  /** When the sources were last checked. */
  checked: string
  tags: Tag[]
  en: PostCopy
  ar: PostCopy
}

const day = /^\d{4}-\d{2}-\d{2}$/
const slugs = new Set(modules.map((m) => m.slug))

/** Fails the build if the two languages drift apart. */
function check(file: string, p: Post) {
  const fail = (msg: string, i?: number) => {
    throw new Error(`Blog post "${p.slug}"${i === undefined ? '' : ` block ${i}`}: ${msg}`)
  }
  if (`./posts/${p.slug}.ts` !== file) fail(`slug doesn't match its file name ${file}`)
  for (const d of [p.date, p.checked, p.updated ?? p.date]) if (!day.test(d)) fail(`"${d}" isn't a YYYY-MM-DD date`)
  const { en, ar } = p
  if (en.blocks.length !== ar.blocks.length)
    fail(`English has ${en.blocks.length} blocks, Arabic has ${ar.blocks.length}`)
  const ids = new Set<string>()
  en.blocks.forEach((e, i) => {
    const a = ar.blocks[i]
    if (e.type !== a.type) fail(`English is "${e.type}", Arabic is "${a.type}"`, i)
    const same = (what: string, x: unknown, y: unknown) => {
      if (JSON.stringify(x) !== JSON.stringify(y))
        fail(`${what} differs: ${JSON.stringify(x)} vs ${JSON.stringify(y)}`, i)
    }
    if (e.type === 'heading' && a.type === 'heading') {
      same('heading id', e.id, a.id)
      if (ids.has(e.id)) fail(`heading id "${e.id}" is used twice`, i)
      ids.add(e.id)
    }
    if (e.type === 'quotes' && a.type === 'quotes') {
      same('quote count', e.items.length, a.items.length)
      same(
        'quote urls',
        e.items.map((q) => q.url),
        a.items.map((q) => q.url),
      )
    }
    if (e.type === 'screen' && a.type === 'screen') same('screen show', e.show, a.show)
    if (e.type === 'answer' && a.type === 'answer') {
      same('answer module', e.module, a.module)
      if (e.module && !slugs.has(e.module)) fail(`answer module "${e.module}" isn't a module slug`, i)
    }
  })
}

const files = import.meta.glob<{ post: Post }>('./posts/*.ts', { eager: true })

/** Every post, newest first. */
export const posts: Post[] = Object.entries(files)
  .map(([file, m]) => {
    check(file, m.post)
    return m.post
  })
  .sort((a, b) => b.date.localeCompare(a.date))

/** "2026-10-21" in the page's language, e.g. "21 Oct 2026". */
export const postDate = (lang: Lang, d: string) =>
  new Intl.DateTimeFormat(locale[lang], {
    day: 'numeric',
    month: lang === 'ar' ? 'long' : 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${d}T00:00:00Z`))

/** Splits text on Markdown links, so views can render them as <a>. */
export const linkParts = (s: string) =>
  s.split(/(\[[^\]]+\]\([^)\s]+\))/).map((part) => {
    const m = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part)
    return m ? { text: m[1], url: m[2] } : { text: part }
  })

export type Row = { pair?: undefined; block: Block } | { pair: Block[]; block: Extract<Block, { type: 'answer' }> }

/** Pairs each answer with the evidence before it (quotes, plus any text after them), for side-by-side layout.
 *  The text right under a heading stays above the pair. An answer with no quotes before it stands alone. */
export function rows(blocks: Block[]): Row[] {
  const out: Row[] = []
  for (const [i, b] of blocks.entries()) {
    if (b.type !== 'answer') {
      out.push({ block: b })
      continue
    }
    let start = i
    while (start > 0) {
      const prev = blocks[start - 1]
      const underHeading = blocks[start - 2]?.type === 'heading'
      if (prev.type === 'quotes' || (prev.type === 'text' && !underHeading)) start--
      else break
    }
    const pair = blocks.slice(start, i)
    if (pair.some((x) => x.type === 'quotes')) {
      out.splice(out.length - pair.length, pair.length)
      out.push({ pair, block: b })
    } else out.push({ block: b })
  }
  return out
}
