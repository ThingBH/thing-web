export function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-wrap">
        <div className="tc-footer-grid">
          <div className="tc-footer-brand">
            <a href="#" className="tc-logo">
              <span className="tc-logo-mark" aria-hidden>
                <img
                  src="/logo.svg"
                  alt=""
                  width="20"
                  height="20"
                  style={{ filter: "invert(1)", display: "block" }}
                />
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
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}
                >
                  <a href="mailto:hello@thing.bh">hello@thing.bh</a>
                </span>
              </li>
              <li>
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}
                >
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
        </div>
      </div>
    </footer>
  );
}
