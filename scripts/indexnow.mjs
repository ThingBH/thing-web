// Notify IndexNow (Bing, Yandex, et al.) of every live URL after a deploy.
// The key is public by design: it is served at keyLocation so search engines can
// verify we own the host. Committing it is correct, not a leak.
// shortcut: submits the whole sitemap each deploy, not just changed URLs. Fine for
// an infrequently-deployed marketing site; diff against the previous sitemap if it grows.

const HOST = 'thing.bh'
const KEY = '39cdc92d3256084106a2c04fe230ade7'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP = `https://${HOST}/sitemap-index.xml`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())

const get = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return res.text()
}

// Prove the key file is live and matches before we claim ownership to IndexNow.
const published = (await get(KEY_LOCATION)).trim()
if (published !== KEY) throw new Error(`Key file at ${KEY_LOCATION} is "${published}", expected "${KEY}"`)

// sitemap-index.xml points at child sitemaps; each child holds the page URLs.
const children = locs(await get(SITEMAP))
const pages = (await Promise.all(children.map(get))).flatMap(locs)

// Defensive: only ever notify URLs on our own host, whatever the sitemap says.
const urlList = [...new Set(pages)].filter((u) => new URL(u).host === HOST)
if (urlList.length === 0) throw new Error('No thing.bh URLs found in sitemap')

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
})
// IndexNow returns 200 (accepted) or 202 (accepted, pending). Anything else is a failure.
const body = await res.text()
if (res.status !== 200 && res.status !== 202) throw new Error(`IndexNow ${res.status}: ${body}`)
console.log(`Submitted ${urlList.length} URLs to IndexNow (${res.status})`)
