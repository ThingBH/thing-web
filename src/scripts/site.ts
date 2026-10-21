// Site-wide behaviour: the mobile menu, the header shadow, and fading in sections below the fold.
const header = document.getElementById('top')
const menu = document.getElementById('menu')
const setMenu = (open: boolean) => {
  header?.classList.toggle('open', open)
  menu?.setAttribute('aria-expanded', String(open))
  // The button shows a close icon while the menu is open.
  menu?.querySelector('use')?.setAttribute('href', open ? '#i-x' : '#i-menu')
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

// FAQ answers slide open and shut. Safari can't animate <details> height in CSS, so the Web Animations API
// (iOS 13.4+) does it. Without JS, or with reduced motion, answers open instantly as plain <details>.
const reduce = matchMedia('(prefers-reduced-motion: reduce)')
const ease = { duration: 280, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
for (const d of document.querySelectorAll<HTMLDetailsElement>('.faq details')) {
  const s = d.querySelector('summary')
  if (!s) continue
  let anim: Animation | null = null
  let closing = false
  const done = () => {
    anim = null
    closing = false
    d.style.overflow = ''
  }
  s.addEventListener('click', (e) => {
    if (reduce.matches) return
    e.preventDefault()
    // Start from the current height, so a click mid-animation turns it around without a jump.
    const from = `${d.offsetHeight}px`
    anim?.cancel()
    d.style.overflow = 'hidden'
    if (d.open && !closing) {
      closing = true
      const to = `${s.offsetHeight + d.offsetHeight - d.clientHeight}px`
      // Hold the last frame until the answer is shut, or it flashes back to full height for a frame.
      anim = d.animate({ height: [from, to] }, { ...ease, fill: 'forwards' })
      anim.onfinish = () => {
        d.open = false
        anim?.cancel()
        done()
      }
    } else {
      closing = false
      d.open = true
      anim = d.animate({ height: [from, `${d.offsetHeight}px`] }, ease)
      d.querySelector('p')?.animate({ opacity: [0, 1] }, ease)
      anim.onfinish = done
    }
  })
}

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
