import { Component, type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { RevealSection } from './RevealSection'
import { useCardTilt } from '../hooks/useCardTilt'
import './landing.css'
import './gym.css'

class ErrorBoundary extends Component<{ children: ReactNode }, { err: string | null }> {
  state = { err: null }
  static getDerivedStateFromError(e: Error) { return { err: e.message } }
  render() {
    if (this.state.err) {
      return (
        <div style={{ padding: 40, color: '#C6FF00', fontFamily: 'monospace', background: '#050608', minHeight: '100vh' }}>
          <h2>Page error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#f87171' }}>{this.state.err}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

type Feature = { title: string; desc: string; icon: ReactNode }

const features: Feature[] = [
  {
    title: 'Member Profiles',
    desc: 'Unified timelines with attendance, waivers, and full communication history — every member at a glance.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: 'Smart Scheduling',
    desc: 'Capacity-aware scheduling that respects coach availability, room types, and recurring cohorts. No spreadsheets.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Stripe Payments',
    desc: 'Native Stripe integration with dunning, family plans, and corporate invoicing. Revenue that runs itself.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" />
      </svg>
    ),
  },
  {
    title: 'Revenue Analytics',
    desc: 'Connect marketing spend to mat retention. Leadership metrics that actually matter, not vanity dashboards.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 20h18M7 20V12M11 20V8M15 20v-6M19 20V5" />
      </svg>
    ),
  },
  {
    title: 'Mobile-native',
    desc: 'Native-grade mobile for coaches and members — check-ins, class bookings, and real-time updates on the floor.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="7" y="2" width="10" height="20" rx="2" /><circle cx="12" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Multi-location',
    desc: 'Central command across all locations. Consolidated reporting, cross-location credits, and granular permissions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
]

function HeroVisual() {
  return (
    <div className="gym-hero-visual" aria-hidden>
      <div className="gym-hero-card gym-hero-card-back">
        <div className="tc-dash-top">
          <div className="tc-dash-dots"><span /><span /><span /></div>
          <span className="tc-dash-title">Members / Overview</span>
        </div>
        <div className="tc-dash-body">
          <div className="tc-dash-row">
            <div className="tc-dash-stat"><strong>842</strong><span>Active</span></div>
            <div className="tc-dash-stat"><strong style={{ color: '#C6FF00' }}>+24</strong><span>This month</span></div>
          </div>
          <div className="gym-chart" style={{ height: 70 }}>
            <div className="gym-bar" style={{ height: '55%' }} />
            <div className="gym-bar" style={{ height: '72%' }} />
            <div className="gym-bar" style={{ height: '44%' }} />
            <div className="gym-bar" style={{ height: '88%' }} />
            <div className="gym-bar" style={{ height: '60%' }} />
          </div>
        </div>
      </div>
      <div className="gym-hero-card gym-hero-card-front">
        <div className="tc-dash-top">
          <div className="tc-dash-dots"><span /><span /><span /></div>
          <span className="tc-dash-title">Gym Thing / Revenue</span>
        </div>
        <div className="tc-dash-body">
          <div className="tc-dash-row">
            <div className="tc-dash-stat"><strong style={{ color: '#C6FF00' }}>$48.2k</strong><span>MRR</span></div>
            <div className="tc-dash-stat"><strong>+12%</strong><span>vs last qtr</span></div>
          </div>
          <div className="gym-chart">
            <div className="gym-bar" style={{ height: '40%' }} />
            <div className="gym-bar" style={{ height: '60%' }} />
            <div className="gym-bar" style={{ height: '35%' }} />
            <div className="gym-bar" style={{ height: '82%' }} />
            <div className="gym-bar" style={{ height: '55%' }} />
            <div className="gym-bar" style={{ height: '70%' }} />
          </div>
          <div className="tc-mock-table">
            <div className="tc-mock-table-row head"><span>Plan</span><span>Members</span><span>Churn</span></div>
            <div className="tc-mock-table-row"><span>Unlimited</span><span>412</span><span>1.8%</span></div>
            <div className="tc-mock-table-row"><span>Corporate</span><span>96</span><span>0.9%</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardPreview() {
  const revenueCard = useCardTilt(9)
  const membersCard = useCardTilt(9)

  return (
    <div className="gym-preview-grid">
      <div
        ref={revenueCard.ref}
        className="gym-mock-card large"
        onMouseMove={revenueCard.onMouseMove}
        onMouseLeave={revenueCard.onMouseLeave}
        aria-hidden
      >
        <div className="tc-dash-top">
          <div className="tc-dash-dots"><span /><span /><span /></div>
          <span className="tc-dash-title">Gym Thing / Revenue</span>
        </div>
        <div className="tc-dash-body">
          <div className="tc-dash-row">
            <div className="tc-dash-stat"><strong style={{ color: '#C6FF00' }}>$48.2k</strong><span>MRR</span></div>
            <div className="tc-dash-stat"><strong>+12%</strong><span>vs last quarter</span></div>
          </div>
          <div className="gym-chart">
            <div className="gym-bar" style={{ height: '42%' }} />
            <div className="gym-bar" style={{ height: '58%' }} />
            <div className="gym-bar" style={{ height: '36%' }} />
            <div className="gym-bar" style={{ height: '78%' }} />
            <div className="gym-bar" style={{ height: '52%' }} />
            <div className="gym-bar" style={{ height: '68%' }} />
            <div className="gym-bar" style={{ height: '90%' }} />
          </div>
          <div className="tc-mock-table">
            <div className="tc-mock-table-row head"><span>Plan</span><span>Members</span><span>Churn</span></div>
            <div className="tc-mock-table-row"><span>Unlimited</span><span>412</span><span>1.8%</span></div>
            <div className="tc-mock-table-row"><span>Corporate</span><span>96</span><span>0.9%</span></div>
            <div className="tc-mock-table-row"><span>Drop-in</span><span>58</span><span>—</span></div>
          </div>
        </div>
      </div>

      <div
        ref={membersCard.ref}
        className="gym-mock-card"
        onMouseMove={membersCard.onMouseMove}
        onMouseLeave={membersCard.onMouseLeave}
        aria-hidden
      >
        <div className="tc-dash-top">
          <div className="tc-dash-dots"><span /><span /><span /></div>
          <span className="tc-dash-title">Members / Active</span>
        </div>
        <div className="tc-dash-body">
          <div className="tc-dash-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="tc-dash-stat"><strong>842</strong><span>Active</span></div>
            <div className="tc-dash-stat"><strong style={{ color: '#C6FF00' }}>+24</strong><span>This month</span></div>
          </div>
          <div className="gym-member-list">
            {[
              { name: 'Sara Al-Dosari', plan: 'Unlimited', active: true },
              { name: 'Khalid Mansoor', plan: 'Corporate', active: true },
              { name: 'Nour Rashid', plan: 'Unlimited', active: true },
              { name: 'Ali Al-Farsi', plan: 'Drop-in', active: false },
            ].map((m) => (
              <div key={m.name} className="gym-member-row">
                <div><div className="name">{m.name}</div><div className="plan">{m.plan}</div></div>
                <span className={`status${m.active ? '' : ' inactive'}`}>{m.active ? 'Active' : 'Lapsed'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function GymPageContent() {
  return (
    <div className="gym-page">
      <Header />
      <main>
        <section className="gym-hero">
          <div className="gym-hero-grid-bg" aria-hidden />
          <div className="tc-wrap gym-hero-inner">
            <div className="gym-hero-text">
              <div className="gym-eyebrow">
                <span className="gym-badge">Gym Thing</span>
                <span>Gym management software</span>
              </div>
              <h1>
                The operating layer for{' '}
                <span className="gym-accent">ambitious fitness brands.</span>
              </h1>
              <p className="gym-hero-lead">
                Purpose-built for owners who outgrew generic tools. Web command center for leadership,
                native-grade mobile for coaches and members on the floor.
              </p>
              <div className="gym-hero-actions">
                <a href="mailto:hello@thing.bh" className="gym-btn-primary">Request a demo</a>
                <a href="#features" className="tc-btn tc-btn-ghost">See what it does</a>
              </div>
              <dl className="gym-stats">
                <div className="gym-stat"><dt>Member retention</dt><dd>94%+</dd></div>
                <div className="gym-stat"><dt>Setup time</dt><dd>&lt; 2 weeks</dd></div>
                <div className="gym-stat"><dt>Uptime</dt><dd>99.99%</dd></div>
              </dl>
            </div>
            <HeroVisual />
          </div>
        </section>

        <RevealSection id="features" className="gym-features">
          <div className="tc-wrap">
            <header className="tc-section-head">
              <p className="gym-kicker">What it does</p>
              <h2>Everything your gym needs. Nothing it doesn't.</h2>
              <p>One platform, shared data layer — not a patchwork of integrations.</p>
            </header>
            <div className="gym-features-grid">
              {features.map((f) => (
                <div key={f.title} className="gym-feature-card">
                  <div className="gym-feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="gym-preview">
          <div className="tc-wrap">
            <div className="gym-preview-head">
              <p className="gym-kicker">Live dashboard</p>
              <h2>Real-time visibility across your whole operation.</h2>
              <p>From MRR to member churn — always current. <em>Move your cursor over the cards.</em></p>
            </div>
            <DashboardPreview />
          </div>
        </RevealSection>

        <RevealSection className="gym-cta">
          <div className="tc-wrap">
            <div className="gym-cta-box">
              <h2>Ready to modernize your gym?</h2>
              <p>
                Join fitness operators who run leaner, grow faster, and retain more members
                with a system built for the way gyms actually work.
              </p>
              <div className="gym-cta-actions">
                <a href="mailto:hello@thing.bh" className="gym-btn-primary">Request a demo</a>
                <a href="/" className="tc-btn tc-btn-ghost">Back to Thing Company</a>
              </div>
            </div>
          </div>
        </RevealSection>
      </main>
      <Footer />
    </div>
  )
}

export default function GymPage() {
  return (
    <ErrorBoundary>
      <GymPageContent />
    </ErrorBoundary>
  )
}
