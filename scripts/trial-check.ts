// Self-check for the free-trial form handler in the Worker. Run: node scripts/trial-check.ts
import assert from 'node:assert/strict'
import worker, { parse } from '../src/worker.ts'

const form = (fields: Record<string, string>) => {
  const f = new FormData()
  for (const [k, v] of Object.entries(fields)) f.set(k, v)
  return f
}
const ok = { gym: ' RSX\nFitness ', name: 'Sara Ali', whatsapp: '+973 3993 6601', 'cf-turnstile-response': 'tok' }

assert.deepEqual(parse(form(ok)), {
  gym: 'RSX Fitness',
  name: 'Sara Ali',
  whatsapp: '+973 3993 6601',
  token: 'tok',
  bot: false,
})
assert.equal(parse(form({ ...ok, botcheck: 'on' }))?.bot, true)
for (const bad of [
  { gym: ' ' },
  { name: '' },
  { whatsapp: '1234567' },
  { whatsapp: '+973 3993 6601 <x>' },
  { 'cf-turnstile-response': '' },
  { gym: 'x'.repeat(121) },
  { 'cf-turnstile-response': 'x'.repeat(2049) },
]) {
  assert.equal(parse(form({ ...ok, ...bad })), null, JSON.stringify(bad))
}

// Handler: mock siteverify and Resend; check what gets sent and how each client is answered.
const env = {
  TURNSTILE_SECRET_KEY: 'secret',
  RESEND_API_KEY: 'key',
  ASSETS: { fetch: async () => new Response('asset') },
}
let human = true
let sent = 0
globalThis.fetch = async (url) => {
  if (String(url).includes('siteverify')) return Response.json({ success: human })
  sent++
  return Response.json({ id: '1' })
}
const post = (fields: Record<string, string>, accept = 'application/json') =>
  worker.fetch(
    new Request('https://thing.bh/api/trial/', { method: 'POST', body: form(fields), headers: { Accept: accept } }),
    env,
  )

assert.equal((await post(ok)).status, 200)
assert.equal(sent, 1)
const noJs = await post({ ...ok, lang: 'ar' }, 'text/html')
assert.equal(noJs.status, 303)
assert.equal(noJs.headers.get('Location'), 'https://thing.bh/ar/free-trial/thanks/')
assert.equal((await post({ ...ok, botcheck: 'on' })).status, 200)
assert.equal((await post({ ...ok, gym: '' })).status, 400)
human = false
assert.equal((await post(ok)).status, 403)
assert.equal(sent, 2) // bot, bad input and failed captcha sent nothing
assert.equal(await (await worker.fetch(new Request('https://thing.bh/free-trial/'), env)).text(), 'asset')
assert.equal((await worker.fetch(new Request('https://thing.bh/api/trial/'), env)).status, 405)
console.log('trial-check: ok')
