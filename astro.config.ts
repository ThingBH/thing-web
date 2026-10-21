import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import { defineConfig, fontProviders } from 'astro/config'

const arabic: [string, ...string[]] = [
  'U+0600-06FF',
  'U+0750-077F',
  'U+0870-08FF',
  'U+200C-200E',
  'U+FB50-FDFF',
  'U+FE70-FEFC',
]

export default defineConfig({
  site: 'https://thing.bh',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  redirects: { '/gym': '/', '/pricing': '/', '/get-a-quote': '/free-trial/' },
  fonts: [
    {
      // Self-hosted Geist (SIL OFL), one variable file for every weight.
      provider: fontProviders.local(),
      name: 'Geist',
      cssVariable: '--font-geist',
      options: { variants: [{ src: ['./src/assets/fonts/Geist-Variable.woff2'], weight: '100 900', style: 'normal' }] },
    },
    {
      // Arabic glyphs only (SIL OFL). Limited to the Arabic range and with no Arial fallback, so it can sit
      // ahead of Geist's own Arial fallback while Latin and digits still render in Geist, as in the product.
      provider: fontProviders.local(),
      name: 'IBM Plex Sans Arabic',
      cssVariable: '--font-plex-arabic',
      fallbacks: [],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/IBMPlexSansArabic-400.woff2'],
            weight: 400,
            style: 'normal',
            unicodeRange: arabic,
          },
          {
            src: ['./src/assets/fonts/IBMPlexSansArabic-500.woff2'],
            weight: 500,
            style: 'normal',
            unicodeRange: arabic,
          },
          {
            src: ['./src/assets/fonts/IBMPlexSansArabic-600.woff2'],
            weight: 600,
            style: 'normal',
            unicodeRange: arabic,
          },
          {
            src: ['./src/assets/fonts/IBMPlexSansArabic-700.woff2'],
            weight: 700,
            style: 'normal',
            unicodeRange: arabic,
          },
        ],
      },
    },
  ],
  integrations: [
    solid(),
    sitemap({
      filter: (page) => !page.endsWith('/thanks/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
      xslURL: '/sitemap.xsl',
    }),
  ],
})
