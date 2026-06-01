import { RevealSection } from './RevealSection'

export function BuildAnything() {
  return (
    <RevealSection id="build" className="tc-section tc-build">
      <div className="tc-wrap tc-build-inner">
        <h2>We don’t only build for gyms.</h2>
        <p>
          Gym Thing is what we shipped first. We build software around how a business actually works,
          whatever the industry. If you have something specific in mind, tell us and we’ll build it
          with you.
        </p>
        <a href="#contact" className="tc-btn tc-btn-primary">
          Tell us what you need
        </a>
      </div>
    </RevealSection>
  )
}
