import { Component, type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { RevealSection } from './RevealSection'
import { Partners } from './Partners'
import { Contact } from './Contact'
import { IconCheck } from './icons'
import './landing.css'
import './gym.css'

class ErrorBoundary extends Component<{ children: ReactNode }, { err: string | null }> {
  state = { err: null }
  static getDerivedStateFromError(e: Error) {
    return { err: e.message }
  }
  render() {
    if (this.state.err) {
      return (
        <div
          style={{
            padding: 40,
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            background: 'var(--void)',
            minHeight: '100vh',
          }}
        >
          <h2>Page error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--danger)' }}>{this.state.err}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

type Feature = { title: string; desc: string; icon: ReactNode }

const features: Feature[] = [
  {
    title: 'Memberships',
    desc: 'Every member in one timeline: their plan, visits, payments, and notes. Sign someone up at the desk in under a minute.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: 'Classes & scheduling',
    desc: 'Set up classes, coaches, and rooms once. Members book and join the waitlist from the app, and the calendar sorts the rest.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Sales & front desk',
    desc: 'Sell memberships, day passes, and products at the counter. Every sale lands straight in your books, no double entry.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 4h2l2.4 12h10L20 7H6" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="17" cy="20" r="1" />
      </svg>
    ),
  },
  {
    title: 'HR & payroll',
    desc: 'Your staff, their shifts, and payroll live in the same place as everything else. One less tool to keep in sync.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
        <path d="M16 5.5a3 3 0 0 1 0 5.4M17.5 14.6c2.3.6 4 2.7 4 5.2" />
      </svg>
    ),
  },
  {
    title: 'Accounting',
    desc: 'Income, expenses, and reports that actually add up. Hand your accountant numbers they can trust at month end.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: 'The member app',
    desc: 'Your members get a clean app for check-ins, bookings, and updates, carrying your gym’s name and colors.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
]

const webPoints = ['Member and revenue overview', 'Scheduling and capacity planning', 'Reporting across every location']
const mobilePoints = ['One-tap check-ins at the desk', 'Class booking and waitlists', 'Live updates for coaches on the floor']

function GymPageContent() {
  return (
    <div className="gym-page">
      <div className="tc-grid-lines" aria-hidden />
      <Header />
      <main>
        <section className="tc-hero tc-wrap gym-hero" aria-labelledby="gym-h1">
          <div className="tc-hero-text">
            <h1 id="gym-h1" className="reveal">
              Everything your gym needs, in <span className="accent">one system</span>.
            </h1>
            <p className="tc-hero-lead reveal reveal-delay-1">
              Memberships, classes, sales, HR, payroll, accounting, and pretty much everything else
              it takes to run the place, all in one system. Your team runs the day from one
              dashboard, and your members get an app they actually open.
            </p>
            <div className="tc-hero-ctas reveal reveal-delay-2">
              <a href="mailto:hello@thing.bh" className="tc-btn tc-btn-primary">
                Request a demo
              </a>
              <a href="#features" className="tc-btn tc-btn-ghost">
                See what it does
              </a>
            </div>
          </div>
        </section>

        <RevealSection id="features" className="tc-section">
          <div className="tc-wrap">
            <header className="tc-section-head">
              <h2>Not just memberships.</h2>
              <p>Gym Thing covers the whole gym: the front desk, the back office, and the floor. The parts that usually take five different apps to hold together.</p>
            </header>
            <div className="gym-features-grid">
              {features.map((f) => (
                <div key={f.title} className="gym-feature-card">
                  <span className="tc-product-glyph">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="tc-section tc-approach">
          <div className="tc-wrap">
            <header className="tc-section-head">
              <h2>One system, two ways in.</h2>
              <p>The same data, shaped for whoever is using it. Your team works on the web, members and coaches use the app.</p>
            </header>
            <div className="gym-surfaces-grid">
              <div className="gym-surface">
                <span className="gym-surface-glyph">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M9 21h6M12 17v4" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>Staff dashboard</h3>
                <p>Where owners and the front desk run the day: members, payments, classes, and reports across every location.</p>
                <ul>
                  {webPoints.map((p) => (
                    <li key={p}>
                      <IconCheck />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gym-surface">
                <span className="gym-surface-glyph">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <path d="M11 18h2" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>Member app</h3>
                <p>A native app for members and coaches, so check-ins, class booking, and updates happen right on the floor.</p>
                <ul>
                  {mobilePoints.map((p) => (
                    <li key={p}>
                      <IconCheck />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>

        <Partners />

        <Contact />
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
