import type { ReactElement } from 'react'
import LandingPage from './landing/LandingPage'
import GymPage from './landing/GymPage'
import Privacy from './landing/Privacy'
import Terms from './landing/Terms'
import DataDeletion from './landing/DataDeletion'
import NotFound from './landing/NotFound'

export interface RouteDef {
  /** Router path. `*` is the catch-all rendered to dist/404.html at build time. */
  path: string
  element: ReactElement
  title: string
  description: string
  /** Open Graph / social share image, absolute path under public/. */
  image: string
}

/** Production origin, used to build absolute og:url and og:image at prerender time. */
export const SITE_URL = 'https://thing.bh'

const SITE = 'Thing Company'
const OG_DEFAULT = '/og-landing.png'
const DEFAULT_DESCRIPTION =
  'Thing Company builds scalable digital products across industries, including gym management software for fitness businesses.'

/** Real routes, each pre-rendered to its own static HTML file. */
export const routes: RouteDef[] = [
  {
    path: '/',
    element: <LandingPage />,
    title: 'Thing Company · Digital products that scale with your business',
    description: DEFAULT_DESCRIPTION,
    image: OG_DEFAULT,
  },
  {
    path: '/gym',
    element: <GymPage />,
    title: 'Gym Thing · Gym management software by Thing Company',
    description:
      'Gym Thing runs memberships, classes, payments, and reports for modern fitness studios. One web dashboard for your team, one app for members and coaches.',
    image: '/og-gym.png',
  },
  {
    path: '/privacy',
    element: <Privacy />,
    title: `Privacy Policy · ${SITE}`,
    description: 'How Thing Company collects, uses, and protects your personal data under Bahrain PDPL.',
    image: OG_DEFAULT,
  },
  {
    path: '/terms',
    element: <Terms />,
    title: `Terms of Service · ${SITE}`,
    description: 'The terms governing your use of Thing Company products and services.',
    image: OG_DEFAULT,
  },
  {
    path: '/data-deletion',
    element: <DataDeletion />,
    title: `Data Deletion · ${SITE}`,
    description: 'How to request deletion of your personal data from Thing Company.',
    image: OG_DEFAULT,
  },
]

/** Catch-all. Rendered to dist/404.html, which GitHub Pages serves for any unmatched path. */
export const notFound: RouteDef = {
  path: '*',
  element: <NotFound />,
  title: `Page not found · ${SITE}`,
  description: DEFAULT_DESCRIPTION,
  image: OG_DEFAULT,
}

export const allRoutes: RouteDef[] = [...routes, notFound]
