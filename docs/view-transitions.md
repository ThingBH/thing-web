# View transitions on thing.bh

Status: working prototype on branch `worktree-agent-ad20553bef6fe684c`. Nothing here is on `main` yet.

## Recommendation

Use **cross-document (MPA) view transitions in CSS**, with a few `view-transition-name`s and no router.

- Every page stays a static document. Islands, `flow.ts`, `forms.ts`, Turnstile, gtag, JSON-LD and hreflang all behave exactly as today, because each navigation is still a full page load.
- The change is progressive enhancement. Browsers that support it cross-fade and morph. The rest navigate as they do now, with no polyfill and no extra JS.
- It is small: 31 lines of CSS, one inline `<style>` in the head, and a `--vt` name on four templates.
- Motion is calm and short, matching Daylight. The page cross-fades over 140/240 ms and a title morphs over 300 ms on the site's `--ease-out`. Nothing slides, bounces or blurs.
- Reduced motion keeps the cross-fade (a change of state, not movement) and turns off the moving titles.
- RTL needs nothing extra. Nothing moves sideways, and morphs only pair titles within one language, because the language is part of the name.
- No layout shift and no flow canvas change. A view transition only paints snapshots over the page, so the nodes are never moved or resized.

**Not recommended:** Astro `<ClientRouter />`, and `document.startViewTransition()` inside the islands. The reasons are below.

## The three approaches

### 1. Cross-document view transitions (recommended)

- Opt in with `@view-transition { navigation: auto; }` on both pages. This prototype puts it in an inline `<style>` in `Base.astro`. See risk 1 for why it can't live in `site.css`.
- Unnamed content cross-fades as the `root` group. Each element that has a `view-transition-name` gets its own group, which moves and resizes from its old box to its new one.
- `pageswap` and `pagereveal` (with `e.viewTransition.types`) and `:active-view-transition-type()` are there for per-route variations, such as a different animation for the language switch. **None were needed.** Putting the language in each name covers the only case that needed different behaviour.
- Back and forward get the reverse morph for free (sample 06).

### 2. Astro `<ClientRouter />` (`astro:transitions`)

What it would add:
- SPA-style swaps, with transitions in browsers that lack cross-document support (`fallback="animate"`, which covers Firefox).
- `transition:persist`, to keep an island alive across pages, and built-in prefetch.

What it would cost here:
- **Scripts.** Bundled module scripts run once per session, not once per page. `site.ts` (menu, header shadow, `.rise` observer), `flow.ts` (`initFlows`, its `ResizeObserver`s and its 3.4 s `setInterval`) and `forms.ts` would all need rewriting around `astro:page-load`, with cleanup on `astro:before-swap`. Otherwise listeners would point at a header that was swapped out, and flow timers would build up from page to page.
- **Islands.** Each swap tears down and re-hydrates the Solid islands. Every timer in a screen (the Dashboard clock, toasts) would need its `onCleanup` checked.
- **Analytics.** gtag only sends a `page_view` on a real load. Soft navigations would need a manual `gtag('event', 'page_view')` on `astro:page-load`, or they would go uncounted.
- **The form and Turnstile.** The free-trial form binds in place and loads Turnstile. Both would need re-initialising after a swap.
- **Language switch.** EN↔AR flips `lang`/`dir`, the font preloads (Plex Arabic) and the hreflang links. The router swaps the head and root attributes, but the safe choice is `data-astro-reload` on the language link, which gives up the transition for exactly the move we most want to look clean.
- **JSON-LD and the per-page `<link rel="alternate" type="text/markdown">`.** These are swapped in the head. That's fine for people and doesn't matter to crawlers, but it is one more thing to keep right.
- Every page ships the router's JS, while today's pages load only the island code they use.

Verdict: a lot of rework to protect, in exchange for transitions in Firefox. Not worth it for a marketing site whose pages already load quickly.

### 3. Same-document `document.startViewTransition()` inside islands and widgets

| Candidate | Verdict | Why |
| --- | --- | --- |
| Homepage Dashboard tab switch (`Dashboard.tsx` `go()`) | **Keep the current `.swap`** | It already has a 280 ms `swap-in` (opacity, 4 px rise, 4 px blur) and skips it under reduced motion. A document view transition snapshots the whole page and ignores input for the duration. Cross-fading two dense admin screens leaves a double image, and a sliding nav highlight would be motion the real Gym Thing admin doesn't have. Product screens copy the product. |
| Screens with tabs (Members plans/history, and others) | Keep as is | Same reason. They copy the real tabs. |
| FAQ (`Faq.astro`, `<details>`) | No view transition | If it should ever animate, use `::details-content` with `interpolate-size: allow-keywords`. That stays live and keeps native semantics. |
| Mobile menu (`Header.astro`, `.top.open nav`) | No view transition | The header is sticky and named. A short `@starting-style` opacity/translate on `.top.open nav` is the right tool if wanted. |
| Flow canvases | Never | CLAUDE.md: nodes must never move or resize when the selection changes. A view transition would turn each selection into a snapshot animation. Selection stays a class toggle. |

## The moments

Names are set on the element as `--vt`, and `.vt { view-transition-name: var(--vt) }` applies them. The language is part of every name, so `en-…` never pairs with `ar-…`.

| # | Moment | Old page element → new page element | Name | Motion |
| --- | --- | --- | --- | --- |
| 1 | Module card → module page | `/modules/` `.modcard h3.vt` → `/modules/<slug>/` `.modpage h1.d1.vt` | `{lang}-mod-{slug}` | Title group moves and scales 300 ms `var(--ease-out)`. Old copy fades out in 140 ms `ease-out`, new fades in over 240 ms `var(--ease-out)`. |
| 2 | Compare card → compare page | `/compare/` `.cmphub .modcard h3.vt` ("vs Mindbody") → `/compare/<slug>/` `.cmppage h1.d1.vt` ("Gym Thing vs Mindbody") | `{lang}-cmp-{slug}` | Same as 1 |
| 3 | Header holds still on every navigation | `header.top` → `header.top` | `site-header` | Own group, so it stays put while the page cross-fades. Only `aria-current` changes inside it. |
| 4 | Page cross-fade, the default for every link | everything else | `root` | Old 140 ms `ease-out` out, new 240 ms `var(--ease-out)` in |
| 5 | EN↔AR language switch | the whole page | `root` + `site-header` | Plain cross-fade. Titles don't pair (`en-mod-members` vs `ar-mod-members`), so nothing flies across the mirrored layout. |
| 6 | Back from a module page | the reverse of 1 | `{lang}-mod-{slug}` | The h1 shrinks back into its card. Works with bfcache. |

`.vt` also sets `width: fit-content`, so the snapshot box hugs the text. Without it the h3 (card-wide) and h1 (container-wide) boxes have unrelated widths and the morph distorts the text. This changes nothing visible at rest.

Rejected moments: a logo morph (it is already static in the named header, and on EN↔AR it would fly from one side to the other), "Next module" slides (decorative), home "Read more on <Module>" links (no matching element on the target), and a blog (none in this tree).

## Browser support

Checked against what I knew in October 2026. Confirm on caniuse before shipping.

- **Chrome and Edge 126+:** cross-document view transitions, `pageswap`/`pagereveal`, types and `view-transition-class`. This is what was recorded.
- **Safari 18.2+ (macOS and iOS):** cross-document view transitions and the same CSS. Not tested in this session (no Safari driver). Check by hand on an iPhone.
- **Firefox:** has same-document view transitions (144+). Cross-document support was still in development at my last check. It navigates exactly as today.
- Browsers without support ignore the at-rule and the property. No feature detection is needed.

## Risks and what was found

1. **Opt-in from an external stylesheet is unreliable on a cold cache (fixed).** With `@view-transition` only in `site.css`, Chrome skipped the transition on the first, uncached navigation in 5 of 8 fresh launches ("ViewTransition opt-in disabled"). With the rule inlined in the head, it was 8 of 8. Keep it inline in `Base.astro`.
2. **A mobile page that is briefly wider than the screen aborts the transition (fixed).** On a 390 px phone, `/modules/access-control/` and `/modules/automations/` first laid out 925 px wide, because the flow canvas only switched to its phone layout (`.flow.v`) in a `ResizeObserver` callback after first layout. Chrome aborted with "Viewport size changed". A one-line inline script in `Flow.astro` now sets `.v` before first paint, using the same 760 px rule as `flow.ts`. This also removes a real first-layout overflow on phones. Nodes are untouched when the selection changes.
3. **Duplicate names abort the whole transition.** A name must be unique on each page. Today `/modules/` has 13 module names and `/compare/` has 5 comparison names, and the check below found no duplicates. Never put `class="vt"` with a `--vt` on anything that repeats (for example the "Next module" link, the "Other comparisons" list, or the home showcase).
4. **Mismatched text in the compare morph.** "vs Mindbody" (one line) grows into "Gym Thing vs Mindbody" (two lines). The old copy fades out in 140 ms, so the scaled-up ghost is faint and brief (sample 02). If it bothers anyone, drop moment 2 and keep only the cross-fade.
5. **Input is ignored while the transition runs** (about 300 ms), as with every view transition. This is fine at these durations. Don't lengthen them.
6. **Slow navigations.** The old page stays frozen until the new one is ready to render, and Chrome gives up after 4 s and just shows the page. Cloudflare Pages is fast. Astro `prefetch` (hover) would make it instant, but it isn't part of this change.
7. **Arabic font on the language switch.** Plex Arabic is preloaded, so the new page usually renders in it. On a very cold load the cross-fade can land on the fallback font for a moment. No worse than today.

## Verification (in the worktree)

- `npm run typecheck`: clean. `npx biome ci .`: clean (1 info, as on `main`). `npm run build`: 52 pages.
- At 1440 and 390 (mobile emulation), across `/`, `/modules/`, `/modules/access-control/`, `/modules/automations/`, `/compare/`, `/compare/mindbody/`, `/ar/`, `/ar/modules/`, `/ar/modules/access-control/` and `/ar/compare/glofox/`: exactly one `h1`, no horizontal overflow, no JS errors, no `astro-island[ssr]` left after scrolling, no duplicate `view-transition-name`. Flows are horizontal at 1440 and vertical at 390.
- In every "after" clip, `pagereveal` reported `e.viewTransition` in Chrome (headless `--headless=new`, which runs cross-document transitions). In every "before" clip it was skipped on purpose.
- `impeccable detect`: no findings in the new code. Its advisories are older and elsewhere in `site.css`.

## Samples

Recorded from `astro preview` on port 4610 with headless Chrome (`--headless=new`). Clicks are real input events, because Chrome only runs cross-document transitions for navigations the page starts. The animation clock was slowed to 0.25× through CDP `Animation.setPlaybackRate`, captured with `Page.startScreencast`, then retimed back to real speed. The animations therefore play at true speed, but network wait is shortened by 4×. "Before" clips use the same build with `skipTransition()` on `pageswap`/`pagereveal`, which matches today's site. Phone clips are 390×844 CSS px at 2× (780×1688). The recorder is `record.mjs` in the session scratchpad.

Each clip is an MP4 (H.264, yuv420p, 30 fps) with a matching GIF:

- `01-modules-card-to-page-{before,after}-{1440,390}`: Access control card → module page
- `02-compare-card-to-page-{before,after}-{1440,390}`: "vs Mindbody" card → comparison page
- `03-header-holds-nav-{before,after}-1440`: home → Modules from the header nav
- `04-lang-switch-en-to-ar-{before,after}-1440`: `/modules/members/` → `/ar/modules/members/`
- `05-ar-modules-card-to-page-after-{1440,390}`: Arabic Point of sale card → page (RTL)
- `06-module-back-to-card-after-1440`: Payments page → back to its card
- `07-modules-card-reduced-motion-after-1440`: moment 1 with `prefers-reduced-motion: reduce` (cross-fade only)

## Diff to apply to `main`

```diff
--- a/src/layouts/Base.astro
+++ b/src/layouts/Base.astro
@@ <head>
     <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
+    <!-- Page transitions opt in here, not in site.css: Chrome reads the opt-in before an uncached stylesheet arrives. -->
+    <style is:inline>@view-transition{navigation:auto}</style>
     <title>{title}</title>
--- a/src/styles/site.css
+++ b/src/styles/site.css
@@ end of file
+/* ================= PAGE TRANSITIONS ================= */
+/* Cross-document View Transitions (opt-in is inline in Base.astro): pages cross-fade, the header holds still,
+   and a card's title grows into the title of the page it opens. Browsers without support navigate as before. */
+.top {
+  view-transition-name: site-header;
+}
+/* Pages set --vt per title (e.g. en-mod-members). The language is in the name so EN↔AR never pairs titles. */
+.vt {
+  view-transition-name: var(--vt);
+  width: fit-content;
+}
+::view-transition-group(*) {
+  animation-duration: 300ms;
+  animation-timing-function: var(--ease-out);
+}
+/* The old copy fades early, so a small title scaled up never shows soft. */
+::view-transition-old(*) {
+  animation-duration: 140ms;
+  animation-timing-function: ease-out;
+}
+::view-transition-new(*) {
+  animation-duration: 240ms;
+  animation-timing-function: var(--ease-out);
+}
+/* Reduced motion keeps the cross-fade and drops the moving titles. */
+@media (prefers-reduced-motion: reduce) {
+  .vt {
+    view-transition-name: none;
+  }
+}
--- a/src/views/Modules.astro
+++ b/src/views/Modules.astro
-                <h3>{m.name}</h3>
+                <h3 class="vt" style={`--vt:${lang}-mod-${m.slug}`}>{m.name}</h3>
--- a/src/views/Module.astro
+++ b/src/views/Module.astro
-        <h1 class="d1" id={`mh-${m.slug}`}>{m.name}</h1>
+        <h1 class="d1 vt" id={`mh-${m.slug}`} style={`--vt:${lang}-mod-${m.slug}`}>{m.name}</h1>
--- a/src/views/Compares.astro
+++ b/src/views/Compares.astro
-            <h3>{t.vs} {c.name}</h3>
+            <h3 class="vt" style={`--vt:${lang}-cmp-${c.slug}`}>{t.vs} {c.name}</h3>
--- a/src/views/Compare.astro
+++ b/src/views/Compare.astro
-        <h1 class="d1" id={`ch-${c.slug}`}>{c.title}</h1>
+        <h1 class="d1 vt" id={`ch-${c.slug}`} style={`--vt:${lang}-cmp-${c.slug}`}>{c.title}</h1>
--- a/src/components/Flow.astro
+++ b/src/components/Flow.astro
@@ after the closing </div> of .flow, inside [data-flow]
+  <!-- Pick the phone layout before first paint (flow.ts keeps it in step; same 760px), so the page never lays out wider than a phone. -->
+  <script is:inline>
+    ((f) => f.classList.toggle('v', f.clientWidth < 760))(document.currentScript.previousElementSibling)
+  </script>
```

To apply it, run this from the main checkout (the worktree changes are uncommitted): `git -C .claude/worktrees/agent-ad20553bef6fe684c diff -- src | git apply`, then copy `docs/view-transitions.md` across.
