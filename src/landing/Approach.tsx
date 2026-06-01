import { RevealSection } from './RevealSection'

const points = [
  {
    title: 'Built for the busy hours',
    body: 'We build for the front desk at 6pm, not for a slideshow. When the gym is packed and the day goes sideways, it keeps up.',
  },
  {
    title: 'One system, not five logins',
    body: 'The front desk, sales, HR, and the accounting all share the same data, so nothing slips through the cracks between apps.',
  },
  {
    title: 'You can actually reach us',
    body: 'We are a small team in Bahrain that builds and runs Gym Thing ourselves. Call or message and you get the people who made it.',
  },
]

export function Approach() {
  return (
    <RevealSection id="approach" className="tc-section tc-approach">
      <div className="tc-wrap">
        <header className="tc-section-head">
          <h2>What it’s like to work with us.</h2>
          <p>We build Gym Thing and we run it day to day. There is no faceless vendor to chase and no support queue to get lost in.</p>
        </header>
        <div className="tc-approach-grid">
          {points.map((p) => (
            <div key={p.title} className="tc-approach-item">
              <span className="tc-approach-mark" aria-hidden />
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
