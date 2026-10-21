// Draws a 1200×630 share card for every indexable page once the site is built. The card text comes from the
// built HTML itself (title, h1, language), so it can never drift from the page. See cardPath in src/data/jsonld.ts.
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { AstroIntegration } from 'astro'
import sharp from 'sharp'
import { decompress } from 'wawoff2'
import { SITE_URL as site } from '../data/site'

const W = 1200
const H = 630
const PAD = 72
const INK = '#0a0a0a'
const GREY = '#5c5c5c'
const GRAPHITE = '#262626'
const CANVAS = '#f8f9fb'
const fonts = new URL('../assets/fonts/', import.meta.url)

/** Pango can't read WOFF2, so unpack the site's own fonts and point a private fontconfig at only them. */
async function setUpFonts() {
  const dir = mkdtempSync(join(tmpdir(), 'thing-og-'))
  for (const f of ['Geist-Variable', 'IBMPlexSansArabic-500', 'IBMPlexSansArabic-700']) {
    writeFileSync(join(dir, `${f}.ttf`), await decompress(readFileSync(new URL(`${f}.woff2`, fonts))))
  }
  writeFileSync(
    join(dir, 'fonts.conf'),
    `<?xml version="1.0"?><fontconfig><dir>${dir}</dir><cachedir>${dir}/cache</cachedir></fontconfig>`,
  )
  // Same fonts on macOS and Linux: no system fonts, and fontconfig instead of CoreText on macOS.
  process.env.FONTCONFIG_FILE = join(dir, 'fonts.conf')
  process.env.PANGOCAIRO_BACKEND = 'fc'
}

const decode = (s: string) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim()
const markup = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pick = (html: string, re: RegExp) => decode(re.exec(html)?.[1] ?? '')

type Text = { text: string; size: number; weight: number; color: string; ar: boolean; width?: number; lh?: number }

/** Tracking tightens as type grows, as on the site: -0.035em at 48px to -0.058em at 132px. */
const track = (size: number) =>
  Math.round(size * -(0.035 + (Math.min(Math.max(size, 48), 132) - 48) * (0.023 / 84)) * 1024)

/** One block of text as a transparent PNG. Arabic is set right to left (RLM) in Plex with no tracking; Latin
 *  stays Geist and is tracked, even inside Arabic. line_height is absolute (Pango units) because a factor
 *  would scale Plex's tall line box, even on Latin lines. */
const text = ({ text, size, weight, color, ar, width = W - 2 * PAD, lh = 1 }: Text) => {
  const latin = (t: string) => `<span letter_spacing="${track(size)}">${t}</span>`
  const body = ar
    ? markup(text).replace(/(?<![&\w])[A-Za-z][\w.]*(?:[ \u00a0][A-Za-z][\w.]*)*/g, latin)
    : latin(markup(text))
  return sharp({
    text: {
      // Geist has no Arabic, so Arabic letters fall through to Plex while "Gym Thing" and digits stay Geist.
      text: `${ar ? '\u200f' : ''}<span foreground="${color}" weight="${weight}" line_height="${Math.round(size * lh * 1024)}">${body}</span>`,
      font: `Geist, IBM Plex Sans Arabic ${size}px`,
      width,
      // An RTL paragraph mirrors alignment, so "left" (start) puts Arabic on the right.
      align: 'left',
      rgba: true,
      dpi: 72,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true })
}

/** The headline at the largest size step that fits the box, or one step smaller if that saves a line. Then the
 *  box is narrowed to the fewest pixels that keep the line count, so lines come out balanced. Short words are
 *  tied to the next word so no line ends on "a", "in" or "في". */
async function headline(title: string, ar: boolean, maxH: number) {
  const lh = ar ? 1.2 : 0.96
  const s = title.replace(/(?<=^|[ \u00a0])(\S{1,2}) /g, '$1\u00a0')
  const sizes = ar ? [108, 96, 84, 72, 62, 54, 48] : [132, 112, 96, 84, 72, 62, 54, 48]
  const lines = (h: number, size: number) => Math.round(h / (size * lh))
  let pick: { size: number; img: Awaited<ReturnType<typeof text>> } | undefined
  for (const size of sizes) {
    const img = await text({ text: s, size, weight: 700, color: INK, ar, lh })
    if (img.info.height > maxH) continue
    if (pick) {
      if (lines(img.info.height, size) < lines(pick.img.info.height, pick.size)) pick = { size, img }
      break
    }
    pick = { size, img }
  }
  if (!pick) throw new Error(`OG card: headline too long to fit: ${title}`)
  const { size } = pick
  let best = pick.img
  let [lo, hi] = [Math.round((W - 2 * PAD) * 0.4), W - 2 * PAD]
  while (hi - lo > 8) {
    const mid = Math.round((lo + hi) / 2)
    const t = await text({ text: s, size, weight: 700, color: INK, ar, lh, width: mid })
    if (lines(t.info.height, size) === lines(best.info.height, size)) [hi, best] = [mid, t]
    else lo = mid
  }
  return { ...best, size }
}

const logo = () => {
  const sprite = readFileSync(new URL('../components/Sprite.astro', import.meta.url), 'utf8')
  const [, viewBox, body] = /<symbol id="thing-logo" viewBox="([^"]+)">(.*?)<\/symbol>/s.exec(sprite) ?? []
  if (!body) throw new Error('OG card: #thing-logo not found in Sprite.astro')
  const h = 80
  const [, , vw, vh] = viewBox.split(' ').map(Number)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${Math.round((h * vw) / vh)}" height="${h}" fill="${INK}">${body}</svg>`
  return sharp(Buffer.from(svg)).png().toBuffer({ resolveWithObject: true })
}

type Card = { kicker: string; title: string; ar: boolean }

async function draw({ kicker, title, ar }: Card, mark: Awaited<ReturnType<typeof logo>>) {
  const at = (w: number) => (ar ? W - PAD - w : PAD)
  const domain = await text({ text: 'thing.bh', size: 30, weight: 600, color: GRAPHITE, ar: false })
  const kick = await text({ text: kicker, size: 34, weight: 600, color: GREY, ar })
  const top = PAD + mark.info.height + 48
  const bottom = H - PAD + (ar ? 8 : 0) // Plex's line box carries more room under the baseline.
  const head = await headline(title, ar, bottom - top - kick.info.height - 20)
  const headTop = bottom - head.info.height
  // Plex's line box adds room above the first line; pull the kicker down so the gap matches English.
  const kickTop = headTop - 20 - kick.info.height + (ar ? Math.round(head.size * 0.12) : 0)
  return sharp({ create: { width: W, height: H, channels: 3, background: CANVAS } })
    .composite([
      { input: mark.data, left: at(mark.info.width), top: PAD },
      {
        input: domain.data,
        left: ar ? PAD : W - PAD - domain.info.width,
        top: PAD + Math.round((mark.info.height - domain.info.height) / 2),
      },
      { input: kick.data, left: at(kick.info.width), top: kickTop },
      { input: head.data, left: at(head.info.width), top: headTop },
    ])
    .png({ palette: true, compressionLevel: 9 })
    .toBuffer()
}

/** Card text for one built page. Child pages: section above, title as headline. Top-level pages, whose title
 *  is just the section name: the title above, the page's own h1 as headline. */
function cardFor(html: string, parentHtml: (path: string) => string | undefined, path: string): Card {
  const ar = /<html lang="ar"/.test(html)
  const full = pick(html, /<title>([^<]*)<\/title>/)
  const brand = / · (Gym Thing|Thing)$/.exec(full)?.[1] ?? 'Gym Thing'
  const strip = (t: string) => t.replace(/ · (Gym Thing|Thing)$/, '').replace(/^Gym Thing · /, '')
  const name = strip(full)
  const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/)
  const parts = path
    .replace(/^\/ar(?=\/)/, '')
    .split('/')
    .filter(Boolean)
  if (parts.length > 1) {
    const parent = parentHtml(path.replace(/[^/]+\/$/, ''))
    return { kicker: parent ? strip(pick(parent, /<title>([^<]*)<\/title>/)) : brand, title: name, ar }
  }
  return { kicker: parts.length === 0 || name === h1 ? brand : name, title: h1 || name, ar }
}

export default function ogCards(): AstroIntegration {
  return {
    name: 'og-cards',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const t0 = performance.now()
        const root = fileURLToPath(dir)
        const files = readdirSync(root, { recursive: true, encoding: 'utf8' }).filter((f) => f.endsWith('.html'))
        const byPath = new Map(
          files.map((f) => [`/${f.replace(/index\.html$/, '')}`, readFileSync(join(root, f), 'utf8')]),
        )
        await setUpFonts()
        const mark = await logo()
        const jobs = new Map<string, Card>()
        for (const [path, html] of byPath) {
          if (html.includes('<meta name="robots" content="noindex"')) continue
          const src = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1]
          if (!src?.startsWith(`${site}/og`)) continue
          jobs.set(
            src.slice(site.length),
            cardFor(html, (p) => byPath.get(p), path),
          )
        }
        await Promise.all(
          [...jobs].map(async ([url, card]) => {
            const out = join(root, url)
            mkdirSync(dirname(out), { recursive: true })
            writeFileSync(out, await draw(card, mark))
          }),
        )
        logger.info(`${jobs.size} share cards in ${Math.round(performance.now() - t0)}ms`)
      },
    },
  }
}
