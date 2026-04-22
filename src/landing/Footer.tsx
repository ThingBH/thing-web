export function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-wrap">
        <div className="tc-footer-grid">
          <div className="tc-footer-brand">
            <a href="#" className="tc-logo">
              <span className="tc-logo-mark" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden>
                  <path
                    d="M7 17 12 6l5 11M9.5 13h5"
                    stroke="url(#lg2)"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="lg2" x1="7" y1="6" x2="17" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5ee7d8" />
                      <stop offset="1" stopColor="#d4b896" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              Thing Company
            </a>
            <p>Digital products, platforms, and partnerships for teams who expect more than a vendor relationship.</p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#products">Thing Gym</a>
              </li>
              <li>
                <a href="#products">Thing Ledger</a>
              </li>
              <li>
                <a href="#products">Thing Field</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">Mission</a>
              </li>
              <li>
                <a href="#proof">Customers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Manama, Bahrain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="tc-footer-bottom">
          <span>© {new Date().getFullYear()} Thing Company. All rights reserved.</span>
          <div className="tc-social" aria-label="Social">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm2.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM9 10H6v9h3v-9Zm2 0h3v1.2h.1c.3-.6 1.2-1.2 2.4-1.2 2.6 0 3.1 1.7 3.1 4V19h-3v-3.6c0-.9 0-2-1.2-2-1.2 0-1.4.9-1.4 1.9V19H9v-9Z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M14.6 4h3.2l-7 8 8 12h-6.3l-5-7.4L5 20H1.7l7.5-8.6L1.7 4h6.4l4.5 6.7L14.6 4Z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.5 1 2.5 0 3.9-2.4 4.8-4.7 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
