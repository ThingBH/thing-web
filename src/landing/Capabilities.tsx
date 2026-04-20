import { IconCloud, IconGrid, IconLayers, IconSpark } from './icons'
import { RevealSection } from './RevealSection'

const items = [
  {
    title: 'Scalable SaaS solutions',
    body: 'Tenant-aware architecture, usage-based scaling, and operational playbooks so your rollout stays boring in the best way.',
    Icon: IconLayers,
  },
  {
    title: 'Mobile and web, together',
    body: 'Parity between front-of-house tablets, member apps, and leadership dashboards. One data model, multiple surfaces.',
    Icon: IconGrid,
  },
  {
    title: 'Cloud-native systems',
    body: 'Managed infrastructure, encrypted pipelines, and regional deployment options aligned to enterprise procurement.',
    Icon: IconCloud,
  },
  {
    title: 'Interfaces people adopt',
    body: 'Design systems tuned for high-frequency workflows: fewer taps, clearer states, and accessibility baked into components.',
    Icon: IconSpark,
  },
]

export function Capabilities() {
  return (
    <RevealSection id="capabilities" className="tc-section">
      <div className="tc-wrap">
        <header className="tc-section-head">
          <p className="tc-kicker">How we build</p>
          <h2>Capabilities that compound across every product line.</h2>
          <p>
            From first deployment to thousandth daily active user, the same engineering standards apply: performance
            budgets, incident response, and measurable outcomes for operators.
          </p>
        </header>

        <div className="tc-cap-grid">
          {items.map((c) => (
            <div key={c.title} className="tc-cap">
              <div className="tc-cap-icon">
                <c.Icon />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
