// Build-time pre-renderer: turns the SSR bundle into static HTML files, one per route.
// Run after `vite build` (client) and `vite build --ssr` (server). See package.json "build".
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'

const here = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(here, '..', 'dist')

const { render, routes, notFound, SITE_URL } = await import(resolve(distDir, 'server/entry-server.js'))
const template = await readFile(resolve(distDir, 'index.html'), 'utf-8')

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const ROOT_MARKER = '<div id="root"></div>'

// Swap the content="" of a meta tag matched by property= or name=.
function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[\\s\\S]*?(")`)
  return html.replace(re, `$1${escapeHtml(value)}$2`)
}

function buildPage(route, appHtml) {
  const { title, description, image, path } = route
  if (!template.includes(ROOT_MARKER)) {
    throw new Error(`Root marker ${ROOT_MARKER} not found in dist/index.html`)
  }
  const url = SITE_URL + (path === '/' || path === '*' ? '/' : path)
  const imageUrl = SITE_URL + image

  let html = template.replace(ROOT_MARKER, `<div id="root">${appHtml}</div>`)
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  html = setMeta(html, 'name', 'description', description)
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', description)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'property', 'og:image', imageUrl)
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', description)
  html = setMeta(html, 'name', 'twitter:image', imageUrl)
  return html
}

async function emit(route, outRel) {
  const html = buildPage(route, render(route.path === '*' ? '/__not_found__' : route.path))
  const outPath = resolve(distDir, outRel)
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, html, 'utf-8')
  console.log(`  ✓  ${outRel}`)
}

console.log('Pre-rendering static pages:')
for (const route of routes) {
  const outRel = route.path === '/' ? 'index.html' : `${route.path.replace(/^\//, '')}/index.html`
  await emit(route, outRel)
}
// Branded 404 served by GitHub Pages for any path without a matching file.
await emit(notFound, '404.html')

// The SSR bundle is a build-time artifact only; don't ship it to the static host.
await rm(resolve(distDir, 'server'), { recursive: true, force: true })
console.log('Done.')
