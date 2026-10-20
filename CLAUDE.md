# thing.bh

The marketing site for **Gym Thing**, gym management software by Thing W.L.L. (Seef, Bahrain, CR No. 196454-1). Gym Thing is the homepage; Thing the company lives on `/about/`. Static Astro 7 site on GitHub Pages; the README covers commands and layout.

## Product truth: where UI and features come from

The product lives in **`/Users/natheer/Developer/the-gym-thing`**. It is the single source of truth for what Gym Thing does and what its screens look like. Read the real component before building or changing any product screen, and copy its structure and labels.

| Need | Where in the-gym-thing |
| --- | --- |
| Admin web screens (members, memberships, classes, POS, payroll, analytics, settings) | `apps/admin-web/app/(dashboard)/dashboard/<area>/`; nav in `apps/admin-web/lib/navigation.ts` |
| POS till | `apps/admin-web/app/(pos)/pos/_components/` (current; `docs/pos-screenshots/` is outdated) |
| iPad Reader mode, door denial reasons | `apps/admin-web/app/(reader)/`, `apps/admin-web/lib/access/reason-text.ts` |
| Online pay page (+ real Arabic strings) | `apps/admin-web/components/pay/`, `apps/admin-web/lib/pay/i18n.ts` |
| Member app | `apps/customer-mobile/src/app/(tabs)/`, `src/components/`, locales in `src/shared/i18n/locales/` |
| Staff app (dark theme) | `apps/admin-mobile/src/features/`, `apps/admin-mobile/store-assets/` |
| Design tokens | `DESIGN.md`, `apps/admin-web/app/globals.css` |
| Backend behaviour (what really exists) | `apps/backend/src/modules/` |

## Claims

Copy says what the owner gets, in plain words, never how the system works inside. Every claim traces to code in the-gym-thing:

- **Built** (including built but switched off, e.g. Apple Wallet, member class booking, WhatsApp in automations): say it as available today. The site never says "coming soon" or "rolling out".
- **No trace in code**: leave it off and tell the owner (e.g. CPR card at the door, buying plans in the member app, credit notes, Arabic invoices).
- **Untrue, always off**: "hosted in Bahrain" (it's AWS Paris), ZATCA, uptime SLA, fake customers, testimonials or numbers, anything unsourced about a competitor.

Nameable clients: Train Fitness, RSX Fitness, Pulse Fitness, Core District Gym, Elevation Fitness Club. Competitor facts live in `src/data/compare.ts`, each with a source and checked date; update both together.

## Site rules the owner set

- One call to action everywhere: **Start with a free trial** (`/free-trial/`). There is no quote flow and no pricing page; price is "one monthly price by gym size, everything included".
- English and Arabic are separate sites (`/`, `/ar/`), and page copy never mixes the two. "Gym Thing" stays in Latin script in Arabic. Arabic copy is light Bahraini dialect; page titles and meta descriptions are formal Arabic. Legal pages (privacy, terms, data deletion) are English only. Product screens stay in English on both sites, as the product is.
- Look ("Daylight"): light canvas, black ink, large Geist type, black and white for marketing. Product colours appear only inside product screens. Real THING logo from the sprite; the logo mark never gets a border-radius.
- Product visuals are rebuilt in HTML from the real UI with sample tenant **ABC Gym**, never screenshots or device frames.
- Each module page shows its own module's screen; the clickable dashboard appears only on the homepage. Home showcases are calm and link "Read more on <Module>".
- Support is a headline value: WhatsApp, phone, email, 7 days a week, same-day replies.

## How the code fits together

- **Both languages share one template per page.** Page markup lives in `src/views/`; `src/pages/` and `src/pages/ar/` are thin routes that render it. Views read the language from `Astro.currentLocale` (`langOf` and `href` in `src/data/i18n.ts`) and keep short copy in an `{ en, ar }` object beside the markup. Arabic module and comparison copy is in `modules.ar.ts` and `compare.ar.ts`, keyed by slug, and the build fails if it falls out of step with the English feature lists or tables. When you change English copy or a competitor fact, change the Arabic too.
- **Content is data.** `src/data/modules.ts` (13 modules, feature groups, FAQ, `show` = `screen:<Name>` / `flow:<key>` joined by `+`), `compare.ts`, `site.ts` (contact, FAQs, Web3Forms key), `flows.ts`, `jsonld.ts`. Pages, Markdown copies, `llms.txt` and JSON-LD are generated from these, so edit the data rather than the pages.
- **Product screens are Solid islands** in `src/islands/screens/<Name>.tsx` + `<Name>.css`. Contract: root `<div class="mx mx-<name>">`, every CSS selector scoped under `.mx-<name>`, `container-type: inline-size` on the root, shared `Icon` / `bhd` / `createToast` from `shared.tsx`, browser-only code inside `onMount`. Register each screen in `src/components/Screen.astro`: Astro can only hydrate islands named in markup, so a lookup map won't work.
- **Flow canvases** (`Flow.astro`, `scripts/flow.ts`): nodes must never move or resize when the selection changes. Wires are drawn once per layout; picking a trigger only toggles classes. Check node rects before and after a click whenever you touch it.
- **Icons** come from one inline sprite, `src/components/Sprite.astro`: `<use href="#i-name">` for line icons, `#b-<brand>` for payment marks, `#thing-logo`. The BenefitPay mark is `/brand/benefitpay.png`.
- **Forms** post to Web3Forms. The access key in `site.ts` is public by design.
- `public/.well-known/` holds Apple Pay domain verification. It must ship.

## Gotchas

- **Type-checking:** `npm run typecheck` uses TypeScript **7.1 beta** with `@astrojs/ts-content-mapper`, so one `tsc` covers `.ts`, `.tsx` and `.astro`. `astro check` refuses TS 7; don't add it back. Move to 7.1 stable when it ships.
- **Fonts:** Geist is self-hosted (`src/assets/fonts/`, Astro fonts API, local provider) because the build can't reach Fontsource.
- **Biome on `.astro`:** unused-import/variable rules are off for `.astro` (it can't see template usage). `noDescendingSpecificity` is off for hand-written CSS.
- **impeccable:** `.impeccable/config.json` suppresses `side-tab` in `Members.css` only; that border copies the real plans/history tabs.

## Verifying a change

1. `npm run typecheck`, `npx biome ci .`, `npm run build`, all clean.
2. Look at what you changed in a real browser at **1440px and 390px**. Drive Chrome with the taste skill's library: `import { Browser, sleep } from './.claude/skills/design-taste-frontend/scripts/lib/cdp.mjs'` (`Browser.launch()`, `newPage({ width, height, mobile })`, `goto`, `eval`, `screenshot`; `page.consoleErrors` collects JS errors).
3. Done means: no horizontal overflow, exactly one `h1` per page, no JS errors, every island hydrated (no `astro-island[ssr]` left after scrolling through the page), and every internal link resolving.
