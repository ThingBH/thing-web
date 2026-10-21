# Gym software complaints, October 2026

Research for the blog: what gym owners, staff and members complain about in other gym software, and how Gym Thing answers each problem. Collected 21 Oct 2026. Nothing in `docs/` ships with the site.

- `report.html`: the finished report (12 problems, plus Tamarran, Gymnago and FLYBY). Open it in a browser. Published privately at https://claude.ai/artifact/9cYsdijwtXbncidJSmScMC
- `last30days-raw.md`: the raw Reddit/HN pull for 21 Sep to 21 Oct 2026, with the web sources appended.

## How far to trust it

- Every quote in `report.html` was read on its source page. Arabic and Turkish quotes are our translations.
- Capterra, G2, GetApp, Software Advice and Reddit thread pages blocked us, so nothing from those sites is quoted, except Reddit post titles and comments the research engine returned.
- Tamarran, Gymnago and FLYBY have no owner or staff complaints we could find. Their evidence is member reviews of the branded gym apps each vendor publishes. Linking Gymnago and FLYBY to those apps rests on the publisher account and app package names.
- Reviews are dated. Recheck any quote before reusing it, and keep the date with it.

## Gym Thing claims checked against the product code

The "How Gym Thing handles it" panels only use features in `the-gym-thing`. Things the code does not have, so the posts must not claim them: auto-renew card billing and failed-payment retries, members cancelling or freezing in the app, automatic waitlist move-up, SMS and push, automated WhatsApp messages (WhatsApp is a one-tap pre-filled chat), a lead or CRM pipeline, offline door or till, one-click full export, credit notes, Arabic invoices, an uptime SLA.

Built but switched off (allowed as available, per CLAUDE.md): member class booking, Google and Apple Wallet passes (Apple has no add button yet), member-app plan checkout (backend only).

Site copy that goes further than the code, found during this research: `modules.ts` and `compare.ts` say reminders go "by WhatsApp"; the automation sender for WhatsApp was removed.
