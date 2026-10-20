// Site-wide behaviour: the mobile menu, the header shadow, and fading in sections below the fold.
const header = document.getElementById('top')
const menu = document.getElementById('menu')
const setMenu = (open: boolean) => {
  header?.classList.toggle('open', open)
  menu?.setAttribute('aria-expanded', String(open))
}
menu?.addEventListener('click', () => setMenu(!header?.classList.contains('open')))
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !header?.classList.contains('open')) return
  setMenu(false)
  menu?.focus()
})
header?.querySelector('nav')?.addEventListener('click', (e) => {
  if ((e.target as Element).closest('a')) setMenu(false)
})
addEventListener('scroll', () => header?.classList.toggle('scrolled', scrollY > 8), { passive: true })

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      const el = e.target as HTMLElement
      const i = Array.prototype.indexOf.call(el.parentNode?.children ?? [], el)
      el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`
      el.classList.remove('pending')
      io.unobserve(el)
    }
  },
  { rootMargin: '0px 0px -6% 0px' },
)
for (const el of document.querySelectorAll<HTMLElement>('.rise')) {
  if (el.getBoundingClientRect().top > innerHeight) {
    el.classList.add('pending')
    io.observe(el)
  }
}
