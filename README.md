# Gym Thing — Landing Page

A modern, animated landing page for a gym brand. Built with React + TypeScript + Vite.

## Sections

- **Hero** — Full-screen opener with CTA
- **About** — Brand story and values
- **Capabilities** — What the gym offers
- **Gym Highlight** — Featured gym showcase
- **Products** — Membership plans or products
- **Social Proof** — Testimonials / trust signals
- **Final CTA** — Conversion close
- **Footer** — Links and contact info

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for bundling
- CSS with scroll-based reveal animations (`useInView` hook)
- **Static pre-rendering**: each route is emitted as real HTML at build time, then hydrated in the browser. No SPA redirect hacks; works natively on GitHub Pages.

## How routing works

Routes are declared once in `src/routes.tsx` and shared by both the client and the build:

- `src/main.tsx` hydrates the pre-rendered markup (or mounts fresh in `dev`).
- `src/entry-server.tsx` renders each route to a string during the build.
- `scripts/prerender.mjs` writes one static file per route with its own `<title>` and meta description.

Output uses clean URLs: `/` → `index.html`, `/gym` → `gym/index.html`, etc. The catch-all route is written to `404.html`, which GitHub Pages serves for any unmatched path. To add a page, add a component and one entry to `src/routes.tsx`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.
