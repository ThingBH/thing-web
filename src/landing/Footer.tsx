const LogoMark = () => (
  <svg width="22" height="22" viewBox="0 0 415 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M0 0 C136.95 0 273.9 0 415 0 C415 40.26 415 80.52 415 122 C409.06 122 403.12 122 397 122 C396.67 121.67 396.34 121.34 396 121 C396 87.34 396 53.68 396 19 C271.26 19 146.52 19 18 19 C18 142.09 18 265.18 18 392 C142.74 392 267.48 392 396 392 C396 360.98 396 329.96 396 298 C402.27 298 408.54 298 415 298 C415 334.96 415 371.92 415 410 C278.05 410 141.1 410 0 410 C0 274.7 0 139.4 0 0 Z"
      fill="white"
    />
  </svg>
)

export function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-wrap">
        <div className="tc-footer-grid">
          <div className="tc-footer-brand">
            <a href="/" className="tc-logo">
              <span className="tc-logo-mark" aria-hidden>
                <LogoMark />
              </span>
              Thing Company
            </a>
            <p>
              Digital products, platforms, and partnerships for teams who expect
              more than a vendor relationship.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#products">Gym Thing</a>
              </li>
              <li>
                <a href="#products">Ledger Thing</a>
              </li>
              <li>
                <a href="#products">Field Thing</a>
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
                <span style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  <a href="mailto:hello@thing.bh">hello@thing.bh</a>
                </span>
              </li>
              <li>
                <span style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Manama, Bahrain
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="tc-footer-bottom">
          <span>
            © {new Date().getFullYear()} Thing Company. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacy" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Privacy</a>
            <a href="/terms" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Terms</a>
            <a href="/data-deletion" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Data Deletion</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
