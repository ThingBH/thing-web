# New gyms in Bahrain, October 2026

Research for the blog post [Opening a new gym in Bahrain](../../../src/data/posts/opening-a-new-gym-bahrain.ts). Collected 27 Oct 2026. Nothing in `docs/` ships with the site.

The angle: the software calls a new gym owner in Bahrain makes in the first months (pre-sales, payments with BenefitPay, the door, staff, VAT), what goes wrong when they are left late, and the new-gym offer (free for up to 12 months, with migration, setup and training).

## What was collected

- `raw.md`: the read-on-page text of every quoted source, with URL and date, plus the sources that were not used and why.

## How far to trust it

- **Bahrain National Portal licensing page** (EN and AR, `psID=2542`): government source, read with curl on 27 Oct 2026. The page shows no publish date, so the post dates the quotes "Read 27 Oct 2026". The AR quote uses the portal's own Arabic wording; the URL kept in the post is the EN page (EN and AR blocks must share quote URLs).
- **GymNation 3,000 pre-sales**: GDN Online (Bahrain daily), 7 Jan 2026, read in headless Chrome. Same figure in the GymNation press release on Fitt Insider (2 Jan 2026) and Health Club Management (5 Jan 2026). It is the company's own figure, reported, not audited.
- **BenefitPay H1 2026**: Zawya, 2 Sep 2026 (same text on TradeArabia, 1 Sep 2026), from BENEFIT's announcement.
- **Grand-opening failure review**: Trustpilot review of Mindbody, 28 Sep 2026, re-read on page 4 of its Trustpilot listing on 27 Oct 2026. Quoted unnamed and unlinked, per the rule that competitors are named only on /compare/.
- **Blocked**: Reddit (human-check page in headless Chrome; old.reddit JSON also blocked), Arabian Business (403). Nothing from either is quoted.
- **Arabic search**: Arabic queries found no Bahrain-specific gym opening coverage beyond GymNation; the Arabic GSA portal page is the Arabic source used.
- `/last30days` was not run for this post; the 21 Oct pull in `../2026-10-gym-software-complaints/` has no Bahrain-specific owner posts.

## Gym Thing claims checked

Every Gym Thing line uses features in `src/data/modules.ts`, spot-checked against `the-gym-thing`:

- Plans with prices, lengths, days, hours, branches, ladies' hours: memberships.
- Payment link that starts the plan on a chosen date: `PaymentLinkStartMode = 'on_payment' | 'fixed_date'` in `apps/backend/src/db/schema/online-payments.ts`.
- BenefitPay online: `/links/:token/benefitpay-session` in `apps/backend/src/entrypoints/rest/pay.ts`; at the desk: `PaymentMethod` includes `benefit` in `apps/backend/src/db/schema/memberships.ts`. Tap merchant account per gym: payments module.
- Door: QR code, Wallet pass, phone tap, Gantner turnstiles, iPad reader, refusal reasons, check-ins log: access-control.
- Invoices with CR and logo; VAT switchable, VAT number printed only when VAT is on, rate in `vat_rate_bps`: `apps/backend/src/db/schema/tables.ts`, `apps/backend/src/modules/organizations/application/organizations.ts`; 10% default: invoicing.
- Rosters, branch-only clock-in, payroll with GOSI and WPS, payslips in the staff app: hr-payroll, staff-app.
- Moving members, plans and history from spreadsheets or another system, at no extra cost: `src/data/compare.ts`; migration module in `apps/backend/src/modules/migration/`.
- Training for front desk and managers: `src/views/FreeTrial.astro`. Support line: `docs/brand/voice.md`.
- **New-gym offer** (free for up to 12 months, with migration, setup and training): stated by the owner on 27 Oct 2026. Not in code or other site copy; the standard "up to 3 months" trial wording elsewhere is unchanged.

Dropped: "most gyms are live within a week", "no card, no contract" (both belong to the standard trial and were not confirmed for the new-gym offer), the Reddit "set up your software before you start promoting" quote (could not re-read), BenefitPay user counts (undated interview), Bahrain gym counts (paid report). Must-not-claim list from `../2026-10-gym-software-complaints/README.md` respected: no automated WhatsApp, no auto-renew billing, no "hosted in Bahrain".
