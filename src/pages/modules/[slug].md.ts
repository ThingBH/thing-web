import type { APIRoute, GetStaticPaths } from 'astro'
import { moduleMd } from '../../data/content'
import { modules } from '../../data/modules'

export const getStaticPaths = (() => modules.map((m) => ({ params: { slug: m.slug } }))) satisfies GetStaticPaths

export const GET: APIRoute = ({ params }) => moduleMd('en', params.slug)
