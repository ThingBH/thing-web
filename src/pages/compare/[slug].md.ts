import type { APIRoute, GetStaticPaths } from 'astro'
import { comparisons } from '../../data/compare'
import { compareMd } from '../../data/content'

export const getStaticPaths = (() => comparisons.map((c) => ({ params: { slug: c.slug } }))) satisfies GetStaticPaths

export const GET: APIRoute = ({ params }) => compareMd('en', params.slug)
