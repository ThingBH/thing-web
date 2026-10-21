import type { APIRoute } from 'astro'
import { comparisons } from '../data/compare'
import { comparisonsAr } from '../data/compare.ar'
import { modules } from '../data/modules'
import { modulesAr } from '../data/modules.ar'
import { posts } from '../data/posts'
import { SITE_URL } from '../data/site'

// llmstxt.org format: title, summary, then sections of links with one-line notes.
export const GET: APIRoute = () => {
  const link = (name: string, path: string, note: string) => `- [${name}](${SITE_URL}${path}): ${note}`
  const txt = [
    '# Gym Thing',
    '',
    '> Gym management software built in Bahrain by Thing W.L.L. (Seef): memberships, access control, payments, VAT invoices, payroll, classes and a member app in Arabic and English. Every gym gets every module for one yearly price by gym size, with setup, moving members over, training and a free trial of up to 3 months included.',
    '',
    '## Pages',
    '',
    link('Home', '/', 'The whole gym, in one system.'),
    link('Modules', '/modules/', 'Every module, grouped from the front desk to payday.'),
    link('Compare', '/compare/', 'Gym Thing side by side with the other options gyms in Bahrain use.'),
    link('Blog', '/blog/', 'Research, guides and news for gym owners in Bahrain and the Gulf.'),
    link('About', '/about/', 'Who builds Gym Thing, how we work with you, and how to reach support.'),
    link('Start with a free trial', '/free-trial/', 'Up to 3 months on the full system, set up for your gym.'),
    '',
    '## Modules',
    '',
    ...modules.map((m) => link(m.name, `/modules/${m.slug}.md`, m.promise)),
    '',
    '## Comparisons',
    '',
    ...comparisons.map((c) => link(c.title, `/compare/${c.slug}.md`, c.lede)),
    '',
    '## Blog',
    '',
    ...posts.map((p) => link(p.en.title, `/blog/${p.slug}.md`, p.en.description)),
    '',
    '## العربية (Arabic)',
    '',
    link('الصفحة الرئيسية', '/ar/', 'النادي كله، في نظام واحد.'),
    link('الأقسام', '/ar/modules/', 'كل أقسام Gym Thing، من الاستقبال لين يوم الراتب.'),
    link('المقارنة', '/ar/compare/', 'Gym Thing جنب الخيارات الثانية اللي تستخدمها النوادي في البحرين.'),
    link('المدونة', '/ar/blog/', 'بحوث وأدلة وأخبار لأصحاب النوادي في البحرين والخليج.'),
    link('من نحن', '/ar/about/', 'منو يبني Gym Thing، وشلون نشتغل وياك، وشلون توصل للدعم.'),
    link('ابدأ بتجربة مجانية', '/ar/free-trial/', 'لين 3 شهور على النظام كامل، مجهّز لناديك.'),
    ...modulesAr.map((m) => link(m.name, `/ar/modules/${m.slug}.md`, m.promise)),
    ...comparisonsAr.map((c) => link(c.title, `/ar/compare/${c.slug}.md`, c.lede)),
    ...posts.map((p) => link(p.ar.title, `/ar/blog/${p.slug}.md`, p.ar.description)),
    '',
    '## Optional',
    '',
    link('Privacy Policy', '/privacy/', 'How personal data is collected, used and protected.'),
    link('Terms & Conditions', '/terms/', 'The terms for using the Thing Company platform.'),
    link('Account & Data Deletion', '/data-deletion/', 'How to request deletion of an account and its data.'),
    '',
  ]
  return new Response(txt.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
