# Product

<!-- impeccable:product-schema 1 -->

## Register

brand

## Platform

web

## Users

Owners and managers of gyms, studios and clubs across the Gulf. Bahrain, Saudi Arabia, the UAE and the rest of the Gulf are treated as one market. They arrive comparing vendors, often while running on spreadsheets, paper, or software built for another region. What they want to know is whether Gym Thing can run their whole gym (desk, door, till, classes, payroll) and whether the people behind it will pick up the phone. Usually a non-technical owner makes the decision. Front-desk staff, coaches and accountants feel the result.

## Product Purpose

thing.bh is the marketing site for **Gym Thing**, one system that runs a gym end to end. It is made by **Thing W.L.L.**, a software company in Seef, Bahrain. The company has its own page at `/about/`; the site sells the product, not a studio portfolio. Thing Ledger and Field Thing are retired and must not appear.

Success is a **free-trial request**. "Request a free trial" is the one conversion: the trial lasts up to 3 months and Thing sets it up. Price comes up in that conversation. `/pricing` and `/get-a-quote` redirect away.

## Positioning

Gym Thing is built and supported locally for how Gulf gyms actually work. Members pay with BenefitPay, Apple Pay, Google Pay, cards, cash or a WhatsApp link. Members get Arabic and English. Payroll handles GOSI and WPS. Any door works: QR, wallet pass, turnstile, or an iPad at reception. The team that builds it also sets it up, moves members over, trains staff, and answers on WhatsApp, phone or email 7 days a week with same-day replies. Every gym gets every module, and there are no plan tiers.

## Operating Context

- Site sections: home, `/modules/` plus 13 module pages, `/compare/` plus one page per competitor (Mindbody, Glofox, Perfect Gym, Tamarran, spreadsheets and paper), `/about/`, `/free-trial/`, and legal pages (`/privacy/`, `/terms/`, `/data-deletion/`).
- Module pages: Members, Memberships, Classes and PT, Member app, Access control, Point of sale and stock, Staff app, Payments, Invoicing and accounting, HR and payroll, Automations, Reports and analytics, Branches, roles and branding.
- The only purchase choice is the member app: the generic "Gym Thing" app with the gym inside it, or the gym's own branded store app.
- Bring your own domain is a marketed feature.
- Trial form fields: gym name, name, WhatsApp. Nothing else. It submits through Web3Forms.
- Content is written for skeptical owners and for AI crawlers: static HTML per page, plus Markdown copies and `llms.txt`.

## Capabilities and Constraints

- **Languages:** English at `/` and Arabic (RTL) at `/ar/`, both **required at launch**. They are two separate sites joined by a language switch, and Arabic and English never share a page.
- **Every feature is live.** Never write "coming soon" or "rolling out".
- **Claims Thing must never make:** hosted in Bahrain (it is AWS Paris), ZATCA, an uptime SLA, PDPL or compliance badges, or any support speed faster than same-day.
- **Copy is about the owner's outcome, never system internals.** No jargon such as rotating codes, gapless series, geofencing, permission counts, AWS or replication detail, or trigger/action.
- **Market:** positioning covers the whole Gulf. The payment, payroll and compliance integrations confirmed today are Bahrain's (BenefitPay, GOSI, WPS). Do not claim country-specific integrations for other Gulf states until confirmed.

## Brand Commitments

- Name: **Gym Thing**, by **Thing W.L.L.** (CR No. 196454-1, Seef, Kingdom of Bahrain). Logo: `public/logo.svg`.
- Voice: confident and sales-forward, plain and specific. Name what the gym owner gets in their own words. Lead with graphics and live product over text.
- Product proof is **live HTML fragments rebuilt faithfully from the real Gym Thing UI** (source of truth: `../the-gym-thing`), never screenshots, device mockups or invented look-alike UI. Each module page shows its own module screen.
- Sample tenant in product fragments: **"ABC Gym"**.
- Payment brands appear as their real marks (BenefitPay mark in `public/brand/`) with no text labels.
- No loud gym clichés: no neon, no bodybuilder energy, no stock barbell photography.

## Evidence on Hand

- Gyms running Gym Thing that may be named: **Train Fitness**, **RSX Fitness**, **Pulse Fitness**, **Core District Gym**, **Elevation Fitness Club**. Never write "in Bahrain" in the clients line.
- Competitor comparisons with dated sources: `src/data/compare.ts`.
- Contact: WhatsApp and phone +973 3993 6601, support@thing.bh, hello@thing.bh (`src/data/site.ts`).
- **No testimonials, owner quotes, case studies, metrics or benchmarks exist yet.** Do not invent any. Only real, attributed owner quotes may be used.

## Product Principles

1. **One product, one conversation.** Every surface sells Gym Thing and routes to a free trial.
2. **Show the real thing.** Faithful live product beats description, and a module's own screen beats a generic dashboard.
3. **Outcomes, not internals.** Say what changes for the owner, desk or member. Leave out how the system does it.
4. **Truth is the ceiling.** Sell confidently, but within the claims truth table above.
5. **People are part of the product.** Local setup, migration, training and same-day support are things you sell, not footnotes.

## Accessibility & Inclusion

No formal compliance target. The baseline is **WCAG 2.1 AA**: at least 4.5:1 body contrast, keyboard-navigable controls, semantic markup, and reduced-motion alternatives for all animation. The Arabic site must be fully mirrored RTL, not a translated LTR layout.
