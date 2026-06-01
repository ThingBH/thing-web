/* eslint-disable react-refresh/only-export-components -- build-time SSR entry, not an HMR boundary */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

/** Render a single route to an HTML string for the requested path. Called by scripts/prerender.mjs. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}

export { routes, notFound, SITE_URL } from './routes'
