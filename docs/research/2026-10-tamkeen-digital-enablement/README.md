# Tamkeen Digital Enablement & AI Program, October 2026

Research for the blog post [Your gym software, part-funded by Tamkeen](../../../src/data/posts/tamkeen-digital-enablement-gym-software.ts). Collected 25 Oct 2026. Nothing in `docs/` ships with the site.

The angle: Tamkeen's Digital Enablement and AI Program can cover part of a Bahraini gym's software cost, so an owner can afford to switch to a system like Gym Thing. The post does **not** claim Gym Thing is an approved Tamkeen supplier.

## What was collected

- `raw.md`: the read-on-page text of the GCC Business News article, plus notes on the official page and the conflicting percentages.

## How far to trust it

- **Quoted in the post:** one sentence from GCC Business News, read on its page on 25 Oct 2026 (article dated 1 Oct 2026). It is a regional trade-news site, not Tamkeen itself; it is the strongest read-on-page source available.
- **Official Tamkeen page** (`tamkeen.bh/en/programs/digital-enablement-program/`): sits behind Cloudflare bot protection and would not open in a headless browser or to `WebFetch` (403 / "Just a moment..."). It is **linked, not quoted**, and named in the post as the source of truth for the current rate, eligible costs and eligibility.
- **Support percentage.** GCC Business News (1 Oct 2026) says **up to 50%** of software-solution costs. The post states 50%. (Some third-party consultancy blogs, hornettec.com and creatrixe.com, say up to 60%; not used.)
- **Eligibility** is stated only as broadly as the read-on-page source supports: "micro, small and medium enterprises." Specific rules (CR, no government violations) appeared only in unread third-party summaries, so they are **not asserted** in the post; the reader is sent to the official page.

## Gym Thing claims checked

Every Gym Thing line in the post uses only features described in `src/data/modules.ts` (itself traced to `the-gym-thing`):

- Access: QR, Apple/Google Wallet pass, phone tap, valid-plan-only entry — `modules.ts` access-control.
- Memberships + payments: any plan, WhatsApp payment link (one-tap pre-filled chat, not automated), card/Apple Pay/Google Pay/BenefitPay — memberships, payments.
- Classes/PT, booked in the member app — classes-and-pt, member-app.
- Payroll with GOSI and WPS file — hr-payroll.
- One owner dashboard, web and phone — reports, staff-app.
- Pricing/support/trial lines ("one yearly price by gym size", "free for up to 3 months", "WhatsApp, phone, email, 7 days a week, same-day") — `docs/brand/voice.md`.

Must-not-claim list from `docs/research/2026-10-gym-software-complaints/README.md` was respected: no automated WhatsApp, no auto-renew card billing, no uptime SLA, nothing unsourced about the program.
