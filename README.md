# thing.bh

The marketing site for Gym Thing, gym management software by Thing W.L.L. (Seef, Bahrain).

## Stack

- [Astro 7](https://astro.build): every page is prerendered to static HTML; English at `/`, Arabic at `/ar/` (built-in i18n routing).
- [SolidJS](https://www.solidjs.com) for the one interactive island: the clickable ABC Gym dashboard on the homepage.
- TypeScript 7.1 (native compiler). `npm run typecheck` checks `.ts`, `.tsx` and `.astro` files through `@astrojs/ts-content-mapper`.
- [Biome](https://biomejs.dev) for linting and formatting.
- GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Static site in `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run typecheck` | Type-check everything |
| `npm run lint` / `npm run format` | Check / fix lint and formatting |

## Where things live

- `src/data/`: the content. `modules.ts` (13 module pages), `compare.ts` (comparison pages, with dated sources), `countries.ts` (GCC country pages), `site.ts` (contact, FAQs, offer), `jsonld.ts` (structured data).
- `src/views/`: one template per page, shared by both languages.
- `src/pages/`, `src/pages/ar/`: thin routes per language. Module and compare pages are generated from the data files, along with Markdown copies, `llms.txt` and `robots.txt`.
- `src/components/screens/`: product screens rebuilt in HTML from the real Gym Thing UI, with ABC Gym sample data.
- `src/islands/`: the Solid dashboard.
- `src/styles/`: global styles (`site.css`) and the dashboard's product styles (`dash.css`).
- `public/`: static files served as-is, including `.well-known/` (Apple Pay domain verification; do not remove).

## Forms

The free-trial form posts to [Web3Forms](https://web3forms.com), which emails each request. The access key lives in `src/data/site.ts` (`web3forms`); it is public by design. With JavaScript the form submits in place and shows a thank-you panel; without it, Web3Forms redirects to `/free-trial/thanks/`.
