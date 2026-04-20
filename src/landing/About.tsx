import { RevealSection } from './RevealSection'

export function About() {
  return (
    <RevealSection id="about" className="tc-section">
      <div className="tc-wrap tc-about">
        <h2>We build products that earn a place in the workday.</h2>
        <p>
          Thing Company exists to ship dependable software for industries where reliability matters: gyms, field teams,
          finance leaders, and anyone tired of duct-taped workflows. Our teams blend product design, platform engineering,
          and customer success so launches stay sharp long after the kickoff call.
        </p>
      </div>
    </RevealSection>
  )
}
