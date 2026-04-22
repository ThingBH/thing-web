import { RevealSection } from "./RevealSection";

const logos = [
  "Northline Athletic",
  "Forma Collective",
  "Pulse District",
  "Iron & Oak",
  "Studio Meridian",
  "Rise Rowing",
];

const quotes = [
  {
    text: "We replaced three tools with Gym Thing. Scheduling, payments, and member comms finally agree with each other.",
    name: "Elena Voss",
    role: "Owner, Forma Collective",
  },
  {
    text: "Our CFO lives in the revenue tab. The clarity around subscriptions and pauses paid for the migration in weeks.",
    name: "Marcus Chen",
    role: "COO, Pulse District",
  },
  {
    text: "The mobile experience is what sold our coaches. Check-ins and waitlists just work, even on Saturday peak.",
    name: "Priya Nandakumar",
    role: "Director of Operations, Iron & Oak",
  },
];

export function SocialProof() {
  return (
    <RevealSection id="proof" className="tc-section">
      <div className="tc-wrap">
        <header className="tc-section-head">
          <h2>Trusted by operators who measure everything.</h2>
          <p>
            Teams across boutique fitness, hybrid gyms, and multi-site
            franchises run critical workflows on Thing Company products.
          </p>
        </header>

        <div className="tc-logos" role="list">
          {logos.map((name) => (
            <span key={name} className="tc-logo-pill" role="listitem">
              {name}
            </span>
          ))}
        </div>

        <div className="tc-testimonials">
          {quotes.map((q) => (
            <figure key={q.name} className="tc-quote">
              <blockquote>“{q.text}”</blockquote>
              <figcaption>
                <cite>{q.name}</cite>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
