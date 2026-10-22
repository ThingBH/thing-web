# Website lane

The marketing site. Read the doc that fits your task.

**Writing or changing copy:**
- `../docs/brand/claims.md` what you may and may not claim. Read for anything user-facing.
- `../docs/brand/voice.md` CTA, English/Arabic rules, tone, support.
- `../docs/brand/product.md` what the product does and how to depict it.
- `../docs/brand/company.md` Thing W.L.L. facts.

**Touching site code:**
- `../docs/engineering.md` stack, views, data, islands, og cards, prefetch, flows, icons, forms, gotchas, verify checklist. Read before building a screen and before claiming done.

Orientation: both languages share one template per page in `src/views/`; `src/pages/` and `src/pages/ar/` are thin routes. Content is data in `src/data/`.

## Design skills

Invoke the right skill. Don't eyeball design work.

- **`design-taste-frontend`** (taste skill): art direction and anti-slop house style for any public page (hero, landing, marketing, module pages). Researched directions + a real-browser look-and-fix loop on screenshots.
- **`frontend-design`**: aesthetic direction for a new UI or reshaping one. Use to avoid templated, generic defaults.
- **`ui-ux-pro-max`**: UI/UX reference data. Palettes, font pairings, UX guidelines, chart types, icons, per-stack notes. Use when picking a palette, type, or chart.
- **`impeccable`**: UX audit and polish. Hierarchy, layout, spacing, motion, copy, accessibility, responsive, edge cases, design systems.

**When to invoke:**
1. **During planning:** name the skill you'll use. `design-taste-frontend` or `frontend-design` for direction; `ui-ux-pro-max` if choosing palette/type/charts.
2. **Before the task:** invoke it, then build.
3. **Before a release:** run `impeccable` (UX audit) and the `design-taste-frontend` look-and-fix loop over what changed.
