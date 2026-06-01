export function Hero() {
  return (
    <section className="tc-hero tc-wrap" aria-labelledby="hero-heading">
      <div className="tc-hero-text">
        <h1 id="hero-heading" className="reveal">
          Run your whole gym from <span className="accent">one place</span>.
        </h1>
        <p className="tc-hero-lead reveal reveal-delay-1">
          Memberships, classes, the front desk, sales, HR, payroll, the accounting, and the rest of
          the day to day. Gym Thing brings it into one system, so your team stops juggling apps and
          spreadsheets.
        </p>
        <div className="tc-hero-ctas reveal reveal-delay-2">
          <a href="#contact" className="tc-btn tc-btn-primary">
            Request a demo
          </a>
          <a href="/gym" className="tc-btn tc-btn-ghost">
            See what it does
          </a>
        </div>
        <p className="tc-hero-note reveal reveal-delay-3">
          Made in <strong>Seef, Bahrain</strong>, by a team you can actually reach.
        </p>
      </div>
    </section>
  )
}
