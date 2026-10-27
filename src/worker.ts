// Worker entry: serves dist/ through the ASSETS binding and handles the free-trial form at POST /api/trial/.
// The form verifies the Turnstile token, then emails the request via Resend. Web3Forms refuses server-side
// posts (paid plan + a fixed server IP, which Workers don't have).
// Secrets, set in the Cloudflare dashboard (Worker > Settings > Variables and Secrets): TURNSTILE_SECRET_KEY, RESEND_API_KEY.
import { contact } from './data/site.ts'

export type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  TURNSTILE_SECRET_KEY: string
  RESEND_API_KEY: string
}
export type Trial = { gym: string; name: string; whatsapp: string; token: string; bot: boolean }

const field = (form: FormData, key: string, max: number) => {
  const v = form.get(key)
  const s = typeof v === 'string' ? v.trim().replace(/\s+/g, ' ') : '' // one line: these go into the email subject
  return s.length <= max ? s : ''
}

/** Reads the posted form. Returns null when a required field is missing or malformed. */
export function parse(form: FormData): Trial | null {
  const t: Trial = {
    gym: field(form, 'gym', 120),
    name: field(form, 'name', 120),
    whatsapp: field(form, 'whatsapp', 32),
    token: field(form, 'cf-turnstile-response', 2048),
    bot: form.has('botcheck'),
  }
  const phoneOk = /^[+\d\s()-]+$/.test(t.whatsapp) && t.whatsapp.replace(/\D/g, '').length >= 8
  return t.gym && t.name && phoneOk && t.token ? t : null
}

const failText = {
  en: `Sorry, we couldn't send your request. Go back and try again, or message us on WhatsApp at ${contact.whatsapp}.`,
  ar: `آسفين، ما قدرنا نرسل طلبك. ارجع وجرّب مرة ثانية، أو راسلنا على واتساب على ${contact.whatsapp}.`,
}

export async function trial(request: Request, env: Pick<Env, 'TURNSTILE_SECRET_KEY' | 'RESEND_API_KEY'>) {
  const wantsJson = request.headers.get('Accept')?.includes('application/json')
  const form = await request.formData().catch(() => new FormData())
  const t = parse(form)
  const lang = form.get('lang') === 'ar' ? 'ar' : 'en'
  const done = () =>
    wantsJson
      ? Response.json({ success: true })
      : Response.redirect(new URL(lang === 'ar' ? '/ar/free-trial/thanks/' : '/free-trial/thanks/', request.url), 303)
  const fail = (status: number) =>
    wantsJson
      ? Response.json({ success: false }, { status })
      : new Response(failText[lang], { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })

  if (!t) return fail(400)
  if (t.bot) return done() // honeypot ticked: look successful, send nothing

  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: t.token,
      remoteip: request.headers.get('CF-Connecting-IP') ?? '',
    }),
  })
    .then((r) => r.json() as Promise<{ success?: boolean }>)
    .catch(() => ({ success: false }))
  if (!verify.success) return fail(403)

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'thing.bh free trial <trial@site.thing.bh>',
      to: contact.sales,
      subject: `Free trial request${lang === 'ar' ? ' (Arabic site)' : ''} · ${t.gym}`,
      text: `Gym: ${t.gym}\nName: ${t.name}\nWhatsApp: ${t.whatsapp}\nSite: ${lang === 'ar' ? 'Arabic' : 'English'}`,
    }),
  }).catch((e: unknown) => {
    console.error('resend fetch failed', e)
    return null
  })
  if (sent && !sent.ok) console.error('resend rejected', sent.status, await sent.text())
  return sent?.ok ? done() : fail(502)
}

export default {
  fetch(request: Request, env: Env) {
    const { pathname } = new URL(request.url)
    if (pathname !== '/api/trial/' && pathname !== '/api/trial') return env.ASSETS.fetch(request)
    return request.method === 'POST'
      ? trial(request, env)
      : new Response(null, { status: 405, headers: { Allow: 'POST' } })
  },
}
