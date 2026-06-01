export function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-wrap">
        <div className="tc-footer-grid">
          <div className="tc-footer-brand">
            <a href="/" className="tc-logo">
              <span className="tc-logo-mark" aria-hidden />
            </a>
            <p>
              Thing Company builds Gym Thing, software for modern fitness businesses. Based in
              Seef, Bahrain.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li>
                <a href="/gym">Gym Thing</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/#approach">How we work</a>
              </li>
              <li>
                <a href="/#about">About</a>
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
                <a href="mailto:hello@thing.bh">hello@thing.bh</a>
              </li>
              <li>
                <a href="https://instagram.com/thing.bh" target="_blank" rel="noreferrer">@thing.bh</a>
              </li>
              <li>
                <span className="tc-footer-muted">Seef, Bahrain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="tc-footer-bottom">
          <span>© {new Date().getFullYear()} Thing Company. All rights reserved.</span>
          <div className="tc-footer-legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/data-deletion">Data Deletion</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
