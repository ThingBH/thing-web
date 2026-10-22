# Website engineering

Static Astro 7 site on GitHub Pages. README has commands and layout. Read `docs/brand/` before writing copy.

## Look ("Daylight")

- Light canvas, black ink, large Geist type. Black and white for marketing.
- Product colours appear only inside product screens.
- Real THING logo from the sprite. The logo mark never gets a border-radius.
- Each module page shows its own module's screen. The clickable dashboard is homepage only.
- Home showcases are calm and link "Read more on <Module>".

## Code map

- **One template per page, both languages.** Markup in `src/views/`. `src/pages/` and `src/pages/ar/` are thin routes. Views read language from `Astro.currentLocale` (`langOf`, `href` in `src/data/i18n.ts`), short copy in an `{ en, ar }` object beside the markup.
- **Arabic copy** is in `modules.ar.ts`, `compare.ar.ts`, `countries.ar.ts`, keyed by slug. Build fails if it falls out of step with the English lists or tables. Change English copy or a competitor fact, change the Arabic too.
- **Content is data** in `src/data/`: `modules.ts` (13 modules, feature groups, FAQ, `show` = `screen:<Name>`/`flow:<key>` joined by `+`), `compare.ts`, `countries.ts` (GCC pages at `/gym-software/<slug>/`), `site.ts` (contact, FAQs, Web3Forms key), `flows.ts`, `jsonld.ts`. Pages, Markdown, `llms.txt`, JSON-LD are generated from these. Edit the data, not the pages.
- **Product screens are Solid islands** in `src/islands/screens/<Name>.tsx` + `.css`. Contract: root `<div class="mx mx-<name>">`, every selector scoped under `.mx-<name>`, `container-type: inline-size` on root, shared `Icon`/`bhd`/`createToast` from `shared.tsx`, browser-only code inside `onMount`. Register each in `src/components/Screen.astro` (Astro hydrates only islands named in markup, so a lookup map won't work).
- **Share cards** (`src/integrations/og.ts`): post-build, each page gets a 1200x630 PNG at `/og/<path>.png` (home is `/og.png`, `/og-ar.png`), drawn by sharp from the page's `<title>`, `<h1>`, language, with repo Geist + IBM Plex Sans Arabic (unpacked by `wawoff2`, never system fonts). Build fails if a title can't fit. No cards under `npm run dev`. Tags in `Base.astro`, JSON-LD image via `jsonld.ts` (`cardPath`).
- **Prefetch** (`astro.config.ts`): `prefetchAll: true, defaultStrategy: 'hover'`. Override with `data-astro-prefetch`: `"viewport"` only on the header's "Start with a free trial", `"false"` on big/non-page files (none today). Never `"load"`/`"viewport"` on lists of cards or posts (fetches every page). `clientPrerender` is off.
- **Flow canvases** (`Flow.astro`, `scripts/flow.ts`): nodes never move or resize on selection change. Wires drawn once per layout; picking a trigger only toggles classes. Check node rects before and after a click.
- **Icons**: one inline sprite, `src/components/Sprite.astro`. `#i-<name>` line icons, `#b-<brand>` payment marks, `#thing-logo`. BenefitPay mark is `/brand/benefitpay.png`.
- **Forms** post to Web3Forms. The `site.ts` access key is public by design.
- `public/.well-known/` holds Apple Pay domain verification. It must ship.

## Gotchas

- **Type-check:** `npm run typecheck` uses TypeScript 7.1 beta + `@astrojs/ts-content-mapper`, so one `tsc` covers `.ts`, `.tsx`, `.astro`. `astro check` refuses TS 7; don't add it back.
- **Fonts:** Geist is self-hosted (`src/assets/fonts/`, Astro fonts API) because the build can't reach Fontsource.
- **Biome on `.astro`:** unused-import/variable rules off (can't see template usage). `noDescendingSpecificity` off for hand-written CSS.
- **impeccable:** `.impeccable/config.json` suppresses `side-tab` in `Members.css` only (border copies the real plans/history tabs).

## Verify (run before claiming done)

1. `npm run typecheck`, `npx biome ci .`, `npm run build`, all clean.
2. Check at 1440px and 390px in a real browser. Drive Chrome with `./.claude/skills/design-taste-frontend/scripts/lib/cdp.mjs` (`Browser.launch()`, `newPage({ width, height, mobile })`, `goto`, `eval`, `screenshot`; `page.consoleErrors`).
3. Done = no horizontal overflow, exactly one `h1` per page, no JS errors, every island hydrated (no `astro-island[ssr]` left after scrolling), every internal link resolves.
