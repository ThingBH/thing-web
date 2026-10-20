---
name: Gym Thing (thing.bh)
description: Daylight. A light admin canvas, black ink and very large Geist type, with the real product as the only colour.
colors:
  admin-canvas: "#f8f9fb"
  paper-white: "#ffffff"
  ink-black: "#0a0a0a"
  graphite: "#262626"
  pencil-grey: "#5c5c5c"
  hairline: "#e7e7e9"
  hairline-strong: "#d9d9dd"
  band-grey: "#f1f3f6"
  night-band: "#0a0a0a"
  night-text: "#fafafa"
  night-soft: "#d4d4d4"
  door-green: "#15803d"
  door-red: "#c8102e"
  focus-blue: "#2563eb"
  error-red: "#b91c1c"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(52px, 8.4vw, 132px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.058em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(38px, 5vw, 72px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.048em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 36px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.4vw, 34px)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.4
  small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  focus: "4px"
  nav: "8px"
  control: "10px"
  node: "12px"
  window: "16px"
  cell: "20px"
  band: "28px"
spacing:
  gutter: "24px"
  container: "1240px"
  header: "72px"
  section: "140px"
  section-tight: "96px"
  cell-pad: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "46px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#2a2a2a"
  button-ghost:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "46px"
  button-small:
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "38px"
  input-field:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "46px"
  nav-link:
    textColor: "{colors.graphite}"
    rounded: "{rounded.nav}"
    padding: "8px 12px"
  cell:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.cell}"
    padding: "32px"
  close-band:
    backgroundColor: "{colors.night-band}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.band}"
    padding: "88px 64px"
  flow-node:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.node}"
    padding: "11px 16px 11px 11px"
    width: "252px"
---

# Design System: Gym Thing (thing.bh)

## Overview

**Creative North Star: "Daylight"**

The site runs on the same light canvas as the Gym Thing admin, with the lights fully on. Nothing is hidden behind atmosphere: a near-white canvas, black ink, and headlines set very large and very tight. The page carries no colour of its own, so the only colour a visitor sees comes from the product itself. That includes the live, rebuilt Gym Thing screens and the real payment marks. Confidence comes from scale and emptiness, not decoration.

Density is low in the marketing chrome and true to the product inside the product pieces. Sections are separated by wide vertical gaps (140px), not rules or panels. The product fragments are faithful HTML rebuilds of the real admin, member and staff apps. They keep their own colours, radii and density. The marketing system frames them and never restyles them. Once per page, a black "night" band flips the canvas for a closing call to action or a support statement.

Motion is short and physical: a strong ease-out, a 0.97 press scale on controls, arrows that nudge forward on hover, and content that rises 24px into place below the fold. Reduced motion turns rises into plain fades and turns off smooth scroll.

**Key Characteristics:**
- Monochrome chrome: canvas, paper, ink and greys only.
- Huge, tight Geist headlines (up to 132px, tracking down to −0.058em).
- White cells on a grey-white canvas, separated by tone rather than borders.
- Real product fragments are the colour and the proof.
- One black night band per page for the closing moment.
- Short, physical motion with a reduced-motion fallback everywhere.

## Colors

A strict monochrome system: cool grey-white, white and near-black. Functional colour lives only inside the product.

### Primary
- **Ink Black** (`ink-black`): headlines, body text, primary buttons, focused field borders, active flow nodes and text selection. It is the brand colour.

### Neutral
- **Admin Canvas** (`admin-canvas`): the page background and the translucent sticky header (at 92% opacity). It is the same cool off-white as the Gym Thing admin.
- **Paper White** (`paper-white`): cells, FAQ panels, ghost buttons, inputs and flow nodes. It sits one step above the canvas.
- **Graphite** (`graphite`): ledes, body copy, nav links and FAQ answers. It softens long text without going grey.
- **Pencil Grey** (`pencil-grey`): small print, optional-field hints, the language switch and other secondary metadata.
- **Hairline** (`hairline`): FAQ dividers and the bottom edge the header gains on scroll.
- **Hairline Strong** (`hairline-strong`): borders on ghost buttons, inputs and the menu button. Hover deepens it to #bdbdc2.
- **Band Grey** (`band-grey`): icon wells inside flow nodes and quiet inset surfaces.
- **Night Band** (`night-band`), **Night Text** (`night-text`), **Night Soft** (`night-soft`): the inverted closing band and dark sections. Inside them the primary button turns white and ghost buttons become transparent with a #3f3f46 border.

### Functional (product only)
- **Door Green** (`door-green`), **Door Red** (`door-red`): allow and deny states inside access-control product pieces.
- **Focus Blue** (`focus-blue`): the 2px keyboard focus ring site-wide, and blue states inside product pieces.
- **Error Red** (`error-red`): form error text. The invalid-field border uses #dc2626.

### Named Rules
**The Daylight Monochrome Rule.** Marketing chrome is black, white and grey only. Green, red and blue appear only inside product fragments, plus the blue focus ring and red form errors. Payment brand marks keep their own colours.

**The Product Keeps Its Colours Rule.** A rebuilt Gym Thing screen uses the real product's tokens (`src/styles/dash.css`, `src/islands/screens/*.css`), never the marketing palette. The page frames the product and never repaints it.

## Typography

**Display Font:** Geist, a self-hosted variable font covering weights 100–900, with ui-sans-serif and system-ui as fallbacks.
**Body Font:** Geist.
**Mono Font:** ui-monospace, SF Mono or Menlo. It is used only where the product itself uses mono.

**Character:** one family doing everything. Bold, very tightly tracked display sizes give the page its voice. The same face at body sizes stays plain and readable. Contrast comes from scale and weight, not from pairing two families.

### Hierarchy
- **Display** (700, `clamp(52px, 8.4vw, 132px)`, line-height 0.92, −0.058em): one per page, the page hero headline. Balanced wrapping.
- **Headline** (700, `clamp(38px, 5vw, 72px)`, 0.98, −0.048em): section openers.
- **Title** (700, `clamp(26px, 2.6vw, 36px)`, 1.08, −0.035em): sub-sections, cell headings and company facts.
- **Statement** (500, `clamp(24px, 2.4vw, 34px)`, 1.25, −0.025em, max 30ch): a single spoken-weight sentence, such as the "why we built it" line.
- **Lede** (400, `clamp(18px, 1.5vw, 21px)`, 1.5, max 46ch, Graphite): the paragraph under a headline.
- **Body** (400, 17px, 1.55, max 56ch, Graphite): running copy. FAQ answers run to 70ch.
- **Label** (600, 14.5–15.5px): buttons, form labels and nav links. FAQ questions are 600 at 18px with −0.015em tracking.
- **Small** (400, 14px, Pencil Grey): fine print and metadata.

### Named Rules
**The Tighten-As-You-Grow Rule.** Tracking tightens as size grows: −0.015em at 18px, −0.035em at title, −0.048em at headline and −0.058em at display. Body text is never tracked.

**The One Display Rule.** Display size appears once per page, in the hero. Every later section starts at Headline or smaller.

## Layout

A centred 1240px container with a 24px gutter that respects safe-area insets. The header is sticky, 72px tall and translucent over the canvas; it gains a 1px hairline once the page scrolls. Sections are spaced by `padding-block-start` of 140px (96px for tight sections and below 900px), and the next section's top padding does the separating. Two-column compositions use asymmetric grids such as 4fr/8fr and 1.2fr/0.8fr, never equal halves by default, and collapse to one column at 900px. The desktop nav collapses into a menu button at 1020px. Text measures are capped per role (30–70ch). Layout uses logical properties (`margin-inline`, `inset-inline`, `padding-inline`) so the Arabic RTL site can mirror the layout without rewriting it.

### Named Rules
**The Gap Is The Divider Rule.** Sections are separated by space, not by rules, borders or alternating backgrounds. The night band is the only full-bleed tone change.

## Elevation & Depth

The page is flat, and depth comes from tone: Paper White cells sit on the Admin Canvas with at most a hairline shadow (`0 1px 2px rgba(0,0,0,0.08)`). Real lift is reserved for real product. A product window gets a soft, long shadow that makes it read as an application sitting on the page. Interactive state may add depth temporarily: an active flow node lifts, and an open mobile menu casts a soft drop.

### Shadow Vocabulary
- **Hairline lift** (`box-shadow: 0 1px 2px rgba(0,0,0,0.08)`): white cells on the canvas.
- **Scroll edge** (`box-shadow: 0 1px 0 #e7e7e9`): the sticky header after scroll.
- **Product window** (`box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 24px 60px -24px rgba(16,24,40,0.18)`): rebuilt Gym Thing screens only.
- **Active node** (`box-shadow: 0 10px 28px -14px rgba(0,0,0,0.35)`): the selected node in the access-control flow.
- **Menu drop** (`box-shadow: 0 12px 24px rgba(0,0,0,0.06)`): the opened mobile nav panel.
- **Field focus** (`box-shadow: 0 0 0 3px rgba(10,10,10,0.08)`): a soft ink halo around a focused input.

### Named Rules
**The Only Product Lifts Rule.** At rest, a long or soft shadow belongs only to a real product window. Marketing cells stay at hairline lift.

## Shapes

Rounded but not soft. Radii scale with the size of the object: 4px focus rings, 8px nav pills, 10px buttons, fields and the menu button, 12px flow nodes, 16px product windows, 20px cells and FAQ panels, and 28px for the night closing band (20px on mobile). Icons are 16px line icons with a 2px round-capped stroke in the current text colour. Avatars and status dots are full circles. Pills (999px) are rare.

### Named Rules
**The Bigger Box, Bigger Corner Rule.** Pick the radius by the object's scale on the ladder above. Never put a cell-sized radius on a control or a control radius on a band.

**The Square Logo Rule.** The THING logo mark is never rounded and never placed in a rounded tile. Use `public/logo.svg` as drawn.

## Components

Solid and quiet: black-filled actions, white ghost actions and calm fields, with one physical press response. Confident without ornament.

### Buttons
- **Shape:** gently rounded (10px), 46px tall (38px for `sm`), label weight 600.
- **Primary:** Ink Black fill with Night Text. Hover goes to #2a2a2a. On the night band it inverts to white fill and ink text.
- **Ghost:** Paper White with a Hairline Strong border and ink text. Hover deepens the border to #bdbdc2. On the night band it becomes transparent with a #3f3f46 border and white text.
- **Press:** `scale(0.97)` over 140ms with the strong ease-out. A trailing arrow icon nudges 3px forward on hover.
- **Hover** applies only on `(hover: hover) and (pointer: fine)`, so touch devices never get stuck hover states.
- **Text link:** weight 600 and no underline at rest. Hover shows an underline 4px below the text.

### Cards / Containers (Cells)
- **Corner Style:** 20px.
- **Background:** Paper White on the Admin Canvas.
- **Shadow Strategy:** hairline lift only (see Elevation).
- **Border:** none.
- **Internal Padding:** 32px.

### Inputs / Fields
- **Style:** 46px tall, a 1px Hairline Strong border, 10px radius, white fill, 16px text (prevents iOS zoom). Labels are 14.5px at 600, with optional hints in Pencil Grey.
- **Focus:** the border turns Ink Black and a 3px soft ink halo appears. There is no blue glow on fields.
- **Error:** the border turns #dc2626 and an Error Red message appears at 13.5px below the field.

### Navigation
- **Desktop:** 15px nav links at weight 500 in Graphite, in 8px-radius pills. Hover adds a 4% black wash. The current page gets a 6% wash and ink text. The language switch is a quiet Pencil Grey link. The primary CTA sits at the inline end.
- **Mobile (below 1020px):** a 40px bordered menu button opens a full-width panel over the canvas, with 18px links and the menu drop shadow.

### FAQ
A single Paper White panel (20px radius) holding `<details>` rows separated by hairlines. Questions are 600 at 18px. The plus icon rotates 45° when a row opens, over 220ms.

### Night Band (signature)
The closing call to action is an ink-black block (28px radius, 88px × 64px padding) with an asymmetric 1.2fr/0.8fr grid and its buttons aligned to the bottom. Full-bleed `.night` sections use the same inversion for support and contact statements. Use one per page.

### Product Window (signature)
A live, interactive rebuild of a real Gym Thing screen (a Solid island loaded when visible), framed with a 16px radius and the product-window shadow. Each module page shows its own screen. The sample tenant is "ABC Gym".

### Flow Canvas (signature)
The access-control node map: fixed-size 252px white nodes with 1.5px #c9c9cf borders and 12px corners, connected by SVG wires. The selected node turns its border Ink Black and lifts. Node sizes never change when content changes, so the canvas never reflows. The result tile shows allow as a white fill and deny as an inset 1.5px #52525b outline on dark.

## Do's and Don'ts

### Do:
- **Do** keep marketing chrome to canvas, paper, ink and the greys. Colour comes from product fragments and real payment marks.
- **Do** set headlines in Geist 700 with tracking that tightens as size grows (−0.035em to −0.058em), and wrap them with `text-wrap: balance`.
- **Do** separate sections with 140px of space (96px on mobile), not rules or alternating backgrounds.
- **Do** show proof as live HTML rebuilds of the real Gym Thing UI, using the product's own tokens, inside a 16px product window.
- **Do** use one night band per page for the closing moment.
- **Do** use logical properties so every layout mirrors for the Arabic RTL site.
- **Do** set Arabic in IBM Plex Sans Arabic (Arabic range only, so Latin and digits stay Geist) with no letter-spacing, and display sizes one step smaller and looser (`.d1` 44–108px at 1.2, `.d2` 34–64px at 1.25), so dots and descenders never clip.
- **Do** give every motion a reduced-motion fallback: rises become fades and smooth scroll turns off.

### Don't:
- **Don't** use screenshots, device frames, invented look-alike UI, or animated hero glows or auroras.
- **Don't** use Gym Thing's product green or red, or any accent colour, in marketing chrome.
- **Don't** round the THING logo mark or put it in a rounded tile.
- **Don't** use black-and-gold, boxy tile boards, or blocky grids of identical cells.
- **Don't** put a soft or long shadow on marketing cells. Only product windows lift.
- **Don't** let flow-canvas nodes resize or move when their content changes.
- **Don't** mix Arabic and English in page copy. Product screens are the exception: they stay in English (as the product is), marked `lang="en" dir="ltr"`.
