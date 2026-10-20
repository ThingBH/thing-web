# SEO and metadata gaps

Found in an audit of the built site on 20 Oct 2026. Everything else (titles, descriptions, canonicals, hreflang, Open Graph, JSON-LD, sitemap, robots.txt, llms.txt) was in place on all 52 indexable pages.

1. **English comparison descriptions are too long.** Four run 172 to 181 characters, so search results cut them off at about 160: `/compare/mindbody/`, `/compare/perfect-gym/`, `/compare/spreadsheets/` and `/compare/tamarran/`. They fall back to the `lede`. Fix: add a shorter `description` to those entries in `src/data/compare.ts`. The Arabic entries already have one.
2. **Social cards don't state their size or alt text.** Add `og:image:width` (1200), `og:image:height` (630) and `og:image:alt` in `src/layouts/Base.astro`, so apps don't show a blank card the first time a link is shared.
3. **No Apple touch icon.** Add a 180×180 `apple-touch-icon.png` to `public/` and link it in `Base.astro`, for iPhone home screens.
4. **No rich result for the product.** The `SoftwareApplication` offer in `src/data/jsonld.ts` has no price and there are no reviews, so Google won't show it as a rich result. This can't be fixed while the price isn't public and there are no real reviews. Never invent either.

Not done yet: running the pages through Google's Rich Results Test and a social-card preview tool.
