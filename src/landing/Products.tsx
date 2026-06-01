import { RevealSection } from './RevealSection'

export function Products() {
  return (
    <RevealSection id="products" className="tc-section">
      <div className="tc-wrap">
        <header className="tc-section-head">
          <h2>Everything your gym runs on, in one system.</h2>
          <p>
            Most gyms run on a handful of tools that never talk to each other. Gym Thing replaces the
            lot: the front desk, classes, sales, HR, payroll, and the accounting, all sharing the
            same data.
          </p>
        </header>

        <div className="tc-products">
          <article className="tc-product-flag">
            <div className="tc-product-flag-body">
              <span className="tc-product-tag">Gym Thing</span>
              <h3>One login for the whole team.</h3>
              <p>
                Your manager, your coaches, and your accountant all work in the same place, looking
                at the same numbers. No more exporting spreadsheets between five apps to see how the
                month went.
              </p>
              <div className="tc-chiplist">
                <span>Memberships</span>
                <span>Classes</span>
                <span>Sales &amp; front desk</span>
                <span>HR &amp; payroll</span>
                <span>Accounting</span>
                <span>Multi-location</span>
              </div>
              <a href="/gym" className="tc-textlink">
                Explore Gym Thing
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </RevealSection>
  )
}
