# Small gyms in Bahrain, October 2026

Research for the blog post [Gym software for small gyms in Bahrain, free for up to a year](../../../src/data/posts/small-gym-software-bahrain.ts). Collected 27 Oct 2026. Nothing in `docs/` ships with the site.

The angle: single-branch, boutique and studio gyms run on WhatsApp, Excel and paper, and assume proper software is for chains. What that costs them (renewals, cash and BenefitPay matching, who's in, staff hours), why they put it off, and the small-gym offer.

## What was collected

- `raw.md`: every read-on-page quote with its URL and the date the page shows, plus the full Arabic text of the two Mostaql requests.
- `last30days-raw.md`: the `/last30days` pull (Reddit, Hacker News) for 27 Sep to 27 Oct 2026. Almost nothing on-topic.

## How far to trust it

- **Daily Tribune** (30 Jun 2026) and **Zawya** (4 Jun 2026) agree on 93.4% / about 85,700 SMEs. These are figures for all Bahraini businesses, not gyms. The post doesn't claim a gym-specific share.
- **Gulf Daily News** (7 Jan 2026): GymNation's 3,000 memberships in 24 hours. Used as context for chains arriving, not as a claim about GymNation's systems.
- **Mostaql** requests (10 Mar and 4 May 2026) are real requests in the posters' own Arabic. The pages don't show the country, so the post says "in the Arab world", not Bahrain. Posters are not named. The 1219711 poster lists themselves as a software engineer, so the post calls it "a request ... for a martial arts gym", not an owner's own request.
- **Blocked / not used:** Reddit (curl and headless Chrome both blocked; the Claude in Chrome extension was not connected), so the r/gymowner post title from last30days is not quoted. Khamsat (403). MOIC SME statistics PDF (download returned HTML). Arabian Business (CloudFront block). App Store: the only owner-side app with real review volume ("My Gym: Fitness Studio Manager") turned out to be a game; the real owner apps have 0 to 7 ratings.
- No source on small-gym software prices in Bahrain was found, so the post makes no price comparison.

## Gym Thing claims checked against `the-gym-thing`

- Renewals list for plans ending within 30 days, tiered at 3 days / this week / this month, plus low visit days: `apps/admin-web/app/(dashboard)/dashboard/memberships/page.tsx`.
- Reminder emails before a plan ends: `apps/backend/src/modules/automations` (email is the only channel; triggers include `membership.ends_at`). No WhatsApp automation is claimed.
- Payment link on WhatsApp (one-tap pre-filled chat), card / Apple Pay / Google Pay / BenefitPay, plan starts on payment: as traced for `running-a-gym-on-whatsapp.ts`.
- Sales record the payment method (cash, card, Benefit); sales report by date, branch and payment method as PDF or CSV: `apps/backend/src/modules/reports/registry.ts`, `dashboard/sales/page.tsx`. Walk-in sales have no customer, so the post doesn't say every sale is tied to a member.
- Till change and split payments: as in `setup-and-staff-training.ts`.
- Door: QR, Wallet pass, phone tap, valid plan only (`modules.ts`); refusal reasons (`apps/admin-web/lib/access/reason-text.ts`); check-ins list with today/denied filters (`dashboard/check-ins/page.tsx`).
- Migration with preview and duplicate check: `apps/backend/src/modules/migration` (analyze, then import).
- "Most gyms live within a week", "no setup fee", one yearly price by gym size, support line: existing site copy (`setup-and-staff-training.ts`, `docs/brand/voice.md`).
- **Small-gym offer** (free for up to 12 months, with migration, setup and training): stated by the Gym Thing owner for this post. There is no code for it. It's worded "up to", and the standard "up to 3 months" trial is unchanged everywhere else.

## Dropped

- Cash drawer close / end-of-day reconciliation: no shift or drawer-close feature in the code. The post says to pull today's cash sales report and count the drawer against it.
- "Every sale recorded against the member": not true for walk-in sales.
- VAT invoice line: true, but cut because many small gyms are under the VAT threshold.
- "Learn it in an afternoon" and "software is usually sold per month, per branch": no source.
- "Most gyms in Bahrain are independent": no gym-specific source. Softened to "plenty of gyms".
