import { RevealSection } from './RevealSection'

export function FinalCta() {
  return (
    <RevealSection id="contact" className="tc-final">
      <div className="tc-wrap">
        <div className="tc-final-box">
          <h2>Bring Thing Company into your next chapter.</h2>
          <p>
            Tell us about your locations, members, and timelines. We will tailor a walkthrough across Thing Gym and the
            wider suite, with solution architects on the line from day one.
          </p>
          <div className="tc-final-actions">
            <a href="mailto:hello@thing.company" className="tc-btn tc-btn-primary">
              Book a demo
            </a>
            <a href="#products" className="tc-btn tc-btn-ghost">
              Explore products
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
