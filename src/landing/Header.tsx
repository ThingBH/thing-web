import { useEffect, useState } from 'react'

const LogoMark = () => (
  <svg width="22" height="22" viewBox="0 0 415 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M0 0 C136.95 0 273.9 0 415 0 C415 40.26 415 80.52 415 122 C409.06 122 403.12 122 397 122 C396.67 121.67 396.34 121.34 396 121 C396 87.34 396 53.68 396 19 C271.26 19 146.52 19 18 19 C18 142.09 18 265.18 18 392 C142.74 392 267.48 392 396 392 C396 360.98 396 329.96 396 298 C402.27 298 408.54 298 415 298 C415 334.96 415 371.92 415 410 C278.05 410 141.1 410 0 410 C0 274.7 0 139.4 0 0 Z"
      fill="white"
    />
  </svg>
)

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
          <span className="tc-logo-mark" aria-hidden>
            <LogoMark />
          </span>
          Thing Company
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
