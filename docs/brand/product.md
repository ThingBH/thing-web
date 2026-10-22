# Product truth: where UI and features come from

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

## Depicting the product

Product visuals are rebuilt in HTML from the real UI with sample tenant **ABC Gym**, never screenshots or device frames. This holds for the website and for social.
