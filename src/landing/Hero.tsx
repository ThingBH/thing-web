export function Hero() {
  return (
    <section className="tc-hero tc-wrap" aria-labelledby="hero-heading">
      <div className="tc-hero-grid">
        <div>
          <p className="tc-eyebrow reveal">Multi-product platform studio</p>
          <h1 id="hero-heading" className="reveal reveal-delay-1">
            Software products built for <span className="accent">real operations</span>, not slide decks.
          </h1>
          <p className="tc-hero-lead reveal reveal-delay-2">
            Thing Company designs and ships cloud-native tools for growing businesses, from boutique studios to
            distributed enterprises, with deep expertise in fitness and gym management.
          </p>
          <div className="tc-hero-ctas reveal reveal-delay-2">
            <a href="#products" className="tc-btn tc-btn-primary">
              Explore products
            </a>
            <a href="#contact" className="tc-btn tc-btn-ghost">
              Request demo
            </a>
          </div>
          <dl className="tc-hero-meta reveal reveal-delay-3">
            <div>
              <dt>Products live</dt>
              <dd>3+</dd>
            </div>
            <div>
              <dt>Uptime posture</dt>
              <dd>99.99%</dd>
            </div>
            <div>
              <dt>Industries</dt>
              <dd>12+</dd>
            </div>
          </dl>
        </div>

        <div className="tc-hero-visual reveal reveal-delay-1" aria-hidden>
          <div className="tc-hero-orbit" />
          <div className="tc-card-stack">
            <div className="tc-dash-card back" role="presentation">
              <div className="tc-dash-top">
                <div className="tc-dash-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="tc-dash-title">Operations</span>
              </div>
              <div className="tc-dash-body">
                <div className="tc-dash-row">
                  <div className="tc-dash-stat">
                    <strong>842</strong>
                    <span>Active members</span>
                  </div>
                  <div className="tc-dash-stat">
                    <strong>38</strong>
                    <span>Classes this week</span>
                  </div>
                </div>
                <div className="tc-dash-chart">
                  <div className="tc-bar" style={{ height: '42%' }} />
                  <div className="tc-bar" />
                  <div className="tc-bar" style={{ height: '58%' }} />
                  <div className="tc-bar" />
                  <div className="tc-bar" style={{ height: '50%' }} />
                  <div className="tc-bar" />
                </div>
              </div>
            </div>

            <div className="tc-dash-card front" role="presentation">
              <div className="tc-dash-top">
                <div className="tc-dash-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="tc-dash-title">Thing Gym / Overview</span>
              </div>
              <div className="tc-dash-body">
                <div className="tc-dash-row">
                  <div className="tc-dash-stat">
                    <strong>$128k</strong>
                    <span>ARR tracked</span>
                  </div>
                  <div className="tc-dash-stat">
                    <strong>4.9</strong>
                    <span>Member NPS</span>
                  </div>
                </div>
                <div className="tc-dash-chart">
                  <div className="tc-bar" style={{ height: '38%' }} />
                  <div className="tc-bar" style={{ height: '62%' }} />
                  <div className="tc-bar" style={{ height: '48%' }} />
                  <div className="tc-bar" style={{ height: '88%' }} />
                  <div className="tc-bar" style={{ height: '52%' }} />
                  <div className="tc-bar" style={{ height: '70%' }} />
                </div>
              </div>
            </div>

            <div className="tc-phone" role="presentation">
              <div className="tc-phone-notch" />
              <div className="tc-phone-screen">
                <div className="tc-phone-line short" />
                <div className="tc-phone-line" />
                <div className="tc-phone-line accent" />
                <div className="tc-phone-line" />
                <div className="tc-phone-line short" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
