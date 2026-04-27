import { useEffect, useState } from 'react'


const links = [
  { href: '#products', label: 'Products' },
  { href: '/gym', label: 'Gym Thing' },
  { href: '#about', label: 'About' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`tc-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="tc-wrap tc-header-inner">
        <a href="/" className="tc-logo" onClick={() => setOpen(false)}>
          <span className="tc-logo-mark" aria-hidden />
        </a>

        <nav className="tc-nav" aria-label="Primary">
          <div className="tc-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="tc-nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href="#contact" className="tc-btn tc-btn-primary tc-btn-sm">
              Request demo
            </a>
          </div>
          <button
            type="button"
            className="tc-mobile-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'none',
              marginLeft: 8,
              width: 44,
              height: 44,
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.04)',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text)',
            }}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6 18 18M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tc-nav-links { display: none !important; }
          .tc-nav-cta { display: none !important; }
          .tc-mobile-toggle { display: inline-flex !important; }
        }
        @media (min-width: 901px) {
          .tc-mobile-panel { display: none !important; }
        }
      `}</style>

      {open ? (
        <div
          id="mobile-nav"
          className="tc-mobile-panel"
          style={{
            position: 'fixed',
            inset: 0,
            top: 73,
            background: 'rgba(5,6,8,0.97)',
            backdropFilter: 'blur(16px)',
            padding: '24px 20px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            borderTop: '1px solid var(--border)',
            zIndex: 40,
            overflowY: 'auto',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: '16px 18px',
                borderRadius: 14,
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                minHeight: 52,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="tc-btn tc-btn-primary"
            style={{ marginTop: 8, justifyContent: 'center', minHeight: 52 }}
          >
            Request demo
          </a>
        </div>
      ) : null}
    </header>
  )
}
