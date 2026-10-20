// English lives at `/`, Arabic at `/ar/`. Pages are one template each; copy is picked by language.
export type Lang = 'en' | 'ar'

export const langOf = (locale: string | undefined): Lang => (locale === 'ar' ? 'ar' : 'en')

/** A path in the given language. Write paths in their English form. */
export const href = (lang: Lang, path: string) => (lang === 'ar' ? `/ar${path}` : path)

/** The same page in the other language. */
export const otherPath = (path: string) => (path.startsWith('/ar/') ? path.slice(3) : `/ar${path}`)

/** Western digits in Arabic, as the product shows them. */
export const locale: Record<Lang, string> = { en: 'en-GB', ar: 'ar-u-nu-latn' }
