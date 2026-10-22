import type { APIRoute, GetStaticPaths } from 'astro'
import { countryMd } from '../../data/content'
import { countries } from '../../data/countries'

export const getStaticPaths = (() => countries.map((c) => ({ params: { slug: c.slug } }))) satisfies GetStaticPaths

export const GET: APIRoute = ({ params }) => countryMd('en', params.slug)
