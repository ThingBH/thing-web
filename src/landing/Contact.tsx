import { RevealSection } from './RevealSection'
import { EMAIL, LOCATION, PHONE_TEL, WHATSAPP } from './contactInfo'

function Arrow() {
  return (
    <svg className="tc-contact-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Contact() {
  return (
    <RevealSection id="contact" className="tc-contact">
      <div className="tc-wrap">
        <div className="tc-contact-inner">
          <div className="tc-contact-lead">
            <h2>Talk to the people who build it.</h2>
            <p>
              Tell us about your gym, how many locations, and what’s driving you up the wall. We’ll
              show you how Gym Thing handles it, and you’ll be talking to the people who made it.
            </p>
            <p className="tc-contact-where">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {LOCATION}
            </p>
          </div>

          <div className="tc-contact-methods">
            <a className="tc-contact-method is-primary" href={`mailto:${EMAIL}`}>
              <span className="tc-contact-method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="tc-contact-method-body">
                <span className="tc-contact-method-k">Email us</span>
                <span className="tc-contact-method-v">{EMAIL}</span>
              </span>
              <Arrow />
            </a>

            <a className="tc-contact-method" href={`tel:${PHONE_TEL}`}>
              <span className="tc-contact-method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="tc-contact-method-body">
                <span className="tc-contact-method-k">Call us</span>
                <span className="tc-contact-method-v">Sunday to Thursday, 9 to 6</span>
              </span>
              <Arrow />
            </a>

            <a className="tc-contact-method" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              <span className="tc-contact-method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3z" strokeLinejoin="round" />
                  <path d="M8.5 8.8c.2 2.3 2.4 4.5 4.7 4.7.5 0 1.2-.6 1.4-1.1l-1.6-.9-.8.8a4.6 4.6 0 0 1-1.9-1.9l.8-.8-.9-1.6c-.5.2-1.1.9-1.1 1.4z" />
                </svg>
              </span>
              <span className="tc-contact-method-body">
                <span className="tc-contact-method-k">WhatsApp</span>
                <span className="tc-contact-method-v">Message us anytime</span>
              </span>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
