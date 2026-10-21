import type { APIRoute, GetStaticPaths } from 'astro'
import { postMd } from '../../../data/content'
import { posts } from '../../../data/posts'

export const getStaticPaths = (() => posts.map((p) => ({ params: { slug: p.slug } }))) satisfies GetStaticPaths

export const GET: APIRoute = ({ params }) => postMd('ar', params.slug)
