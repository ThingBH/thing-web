---
name: blog-post
description: Research, write and publish a Gym Thing blog post in English and Arabic. Use when asked to write a blog post, a new post, or to blog or post about a topic.
---

# Gym Thing blog post

A post is one file, `src/data/posts/<slug>.ts`, exporting `post: Post`. The build turns it into the EN and AR pages, the blog index, RSS, sitemap, `llms.txt`, JSON-LD and the Markdown copies. Types, `TAGS` and the drift check are in [`src/data/posts.ts`](../../../src/data/posts.ts). Model posts are [`gym-software-problems.ts`](../../../src/data/posts/gym-software-problems.ts) (the pillar post) and [`the-front-door.ts`](../../../src/data/posts/the-front-door.ts) (a deep dive). Read both before you write.

Every quote is **read-on-page**: you opened the page and saw the words yourself. Every Gym Thing claim is **traced**: you found it in the product code.

## 1. Topic and research

1. Pick one owner problem and an angle: what goes wrong, why it happens, what to ask before signing, how Gym Thing handles it. Read the existing posts in `src/data/posts/` and pick an angle they don't already cover. If a post already covers the topic, deepen it there instead.
2. Run `/last30days` (the `last30days:last30days` skill) on the topic, and dispatch subagents for web search on reviews, app stores, vendor pages and owner forums. Search in Arabic too, for Gulf sources.
3. Quote only read-on-page text. Sites that block fetchers (Capterra, G2, Reddit threads) get opened in Chrome with `.claude/skills/design-taste-frontend/scripts/lib/cdp.mjs`. A page you could not open is not quoted. For each quote keep the verbatim text, the exact URL and the date as the page shows it. Name the platform and product ("App Store review of PT PureGym KSA"), never the reviewer.
4. Save the research to `docs/research/<yyyy-mm>-<topic>/`, laid out like [`docs/research/2026-10-gym-software-complaints/`](../../../docs/research/2026-10-gym-software-complaints/README.md): a `README.md` (what was collected, when, how far to trust it, which sites blocked you, the claims checked) plus the raw pulls.

Done when every quote you will use is in the research folder with its URL and date, and was read on its page.

## 2. Truth-check the Gym Thing side

Trace every claim in the "How Gym Thing handles it" panels, the text and the captions to code in `/Users/natheer/Developer/the-gym-thing`. CLAUDE.md's table says where each area lives, and its **Claims** section says how to treat built, switched-off and untraced features. Check the "must not claim" list in the research README above. Where CLAUDE.md and that list disagree (WhatsApp in automations is one case), the code decides. Write what the owner gets, in plain words.

Competitor facts come from `src/data/compare.ts` (each has a source and a checked date) or from your own read-on-page sources. Leave out anything else about a competitor.

Done when every Gym Thing sentence has a file in the-gym-thing behind it. Report anything you dropped to the owner.

## 3. Write the post file

Use the template below and the field docs in `posts.ts`.

- **Blocks**: `heading`, `text`, `list`, `quotes`, `answer`, `screen`, `note`. A run of `quotes` (plus `text` after them) followed by an `answer` renders side by side (`rows()` in `posts.ts`). The model posts use the shape: opening `note` → for each problem `heading`, `text`, `quotes`, `text`, `answer`, sometimes a `screen` → a checklist `list` → closing `answer` with the free trial → links `text` → a `sources` heading and `note`.
- **Links**: Markdown `[label](/path/)`, `[label](#id)` or `[label](https://…)` in `text`, `list`, `note` and answer points. `Rich.astro` prints the URL as written, so Arabic links use `/ar/…` paths. The only call to action is [Start with a free trial](/free-trial/).
- **EN and AR mirror each other**: the same blocks in the same order, the same heading ids, quote URLs, `show` and `module`. The build fails otherwise.
- **Arabic**: light Bahraini dialect for the body (lede, text, answers); formal Arabic for `title`, `seoTitle` and `description`. Product and company names stay Latin (Gym Thing, BenefitPay, Tamarran). Quote `source` and `date` are in Arabic (`'27 سبتمبر 2026'`).
- **Quotes**: a quote translated into the page's language carries `note` (`'translated from Arabic'` / `'مترجم من الإنجليزية'`). A quote that was Arabic originally appears verbatim on the AR side with no `note`. Quote text includes its quotation marks (`"…"` in EN, `«…»` in AR).
- **Top comment**: name the research folder and the date the sources were read, as the model posts do.

## 4. Screens and answers

- At most 3 `screen` blocks. `show` is `screen:<ScreenName>` or `flow:<FlowKey>`, joined by `+` for two. Names are in `ScreenName` in `src/components/Screen.astro`; flows are `access` and `auto` in `src/data/flows.ts`.
- Pick the screen that shows the module the section is about. Read its source (`src/islands/screens/<Name>.tsx`, or the flow in `flows.ts`) and check everything it shows is traced, e.g. `flow:auto` shows WhatsApp sends.
- Give each `answer` a `module` (a slug in `src/data/modules.ts`) so it links "Read more on <Module>".

## 5. SEO

- `seoTitle` leads with the phrase an owner would search ("Gym check-in problems: …"). `title` is the h1 and may read more naturally.
- `description` is 140 to 160 characters in each language. Check with:
  `node -e "import('./src/data/posts/<slug>.ts').then(({post:p})=>{for(const l of ['en','ar'])console.log(l,p[l].description.length,p[l].seoTitle??p[l].title)})"`
- Heading ids are short, unique, stable English kebab-case (`qr-fails`). Keep them once published; other posts link to them.
- Link internally: the module pages (`/modules/<slug>/`), comparison pages (`/compare/<slug>/`, slugs in `compare.ts`), the pillar post `/blog/gym-software-problems/`, and sibling posts. Add a link to the new post from the pillar or a sibling where it fits.
- `tags` are keys of `TAGS`. A new tag gets an entry in `TAGS` with both `en` and `ar` labels.

## 6. Verify

1. `npm run typecheck`, `npx biome ci .`, `npm run build`, all clean. The build runs the drift check and names the block that differs.
2. `npm run preview` and, with `cdp.mjs`, load `/blog/<slug>/` and `/ar/blog/<slug>/` at 1440px and 390px (`newPage({ width: 390, height: 844, mobile: true })`). On each: `scrollWidth <= innerWidth`, exactly one `h1`, `page.consoleErrors` empty, no `astro-island[ssr]` left after scrolling to the bottom (`page.wheel`), and every internal `a[href^="/"]` fetches with 200. Look at the screenshots.
3. Check the generated output: the post is on `/blog/` and `/ar/blog/`, in `/blog/rss.xml` and `/ar/blog/rss.xml`, in `llms.txt`, at `/blog/<slug>.md`, in the sitemap with `lastmod`, and the page has `BlogPosting` JSON-LD.

Refreshing an existing post: recheck its quotes on their pages, set `updated` to today (drives `dateModified` and sitemap `lastmod`) and `checked` to the day you re-read the sources. Leave `date` alone.

Done when all three pass for both languages at both widths. Leave committing to the owner.

## Post template

```ts
import type { Post } from '../posts'

// Sources: docs/research/<yyyy-mm>-<topic>/. Every quote was read on its source page on <date>.
export const post: Post = {
  slug: '<slug>', // must match the file name
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['gym-software'],
  en: {
    title: '…',
    seoTitle: '…',
    description: '… 140 to 160 characters …',
    lede: '…',
    blocks: [
      { type: 'heading', id: 'problem', text: '…' },
      { type: 'text', paras: ['…'] },
      { type: 'quotes', items: [{ quote: '"…"', source: 'Trustpilot review of X', url: 'https://…', date: '1 Mar 2025' }] },
      { type: 'answer', heading: '…', points: ['… [Start with a free trial](/free-trial/).'], module: 'payments' },
      { type: 'screen', show: 'screen:PayLinks' },
    ],
  },
  ar: {
    title: '…', // formal
    seoTitle: '…', // formal
    description: '…', // formal
    lede: '…', // light Bahraini
    blocks: [
      { type: 'heading', id: 'problem', text: '…' },
      { type: 'text', paras: ['…'] },
      { type: 'quotes', items: [{ quote: '«…»', source: 'مراجعة على Trustpilot لـ X', url: 'https://…', date: '1 مارس 2025', note: 'مترجم من الإنجليزية' }] },
      { type: 'answer', heading: '…', points: ['… [ابدأ بتجربة مجانية](/ar/free-trial/).'], module: 'payments' },
      { type: 'screen', show: 'screen:PayLinks' },
    ],
  },
}
```
