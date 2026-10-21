import type { APIRoute } from 'astro'
import { blogRss } from '../../../data/content'

export const GET: APIRoute = () => blogRss('ar')
