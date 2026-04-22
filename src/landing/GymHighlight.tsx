import { IconCheck } from "./icons";
import { RevealSection } from "./RevealSection";

const benefits = [
  "Unified member profiles with attendance, waivers, and communication history in one timeline.",
  "Scheduling that respects coach capacity, room types, and recurring cohorts without spreadsheet gymnastics.",
  "Stripe-native payments with dunning, family plans, and corporate invoicing where you need it.",
  "Leadership analytics that connect marketing spend to mat retention, not vanity chart junk.",
];

export function GymHighlight() {
  return (
    <RevealSection id="gym" className="tc-gym">
      <div className="tc-wrap">
        <div className="tc-gym-inner">
          <div>
            <p className="tc-kicker">Gym product spotlight</p>
            <h2>
              Gym Thing is the operating layer for ambitious fitness brands.
            </h2>
            <p className="tc-gym-lead">
              Purpose-built for owners who outgrew generic tools. Web command
              center for leadership, native-grade mobile for coaches and members
              on the floor.
            </p>
            <ul className="tc-gym-list">
              {benefits.map((b) => (
                <li key={b}>
                  <IconCheck />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="tc-btn tc-btn-primary">
              View gym solution
            </a>
          </div>

          <div className="tc-gym-mocks" aria-hidden>
            <div className="tc-mock-dash-lg">
              <div className="tc-dash-top">
                <div className="tc-dash-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="tc-dash-title">Gym Thing / Revenue</span>
              </div>
              <div className="tc-dash-body">
                <div className="tc-dash-row">
                  <div className="tc-dash-stat">
                    <strong>$48.2k</strong>
                    <span>MRR</span>
                  </div>
                  <div className="tc-dash-stat">
                    <strong>+12%</strong>
                    <span>vs last quarter</span>
                  </div>
                </div>
                <div className="tc-dash-chart" style={{ height: 110 }}>
                  <div className="tc-bar" style={{ height: "45%" }} />
                  <div className="tc-bar" style={{ height: "62%" }} />
                  <div className="tc-bar" style={{ height: "38%" }} />
                  <div className="tc-bar" style={{ height: "82%" }} />
                  <div className="tc-bar" style={{ height: "55%" }} />
                  <div className="tc-bar" style={{ height: "70%" }} />
                  <div className="tc-bar" style={{ height: "50%" }} />
                </div>
                <div className="tc-mock-table" role="presentation">
                  <div className="tc-mock-table-row head">
                    <span>Plan</span>
                    <span>Members</span>
                    <span>Churn</span>
                  </div>
                  <div className="tc-mock-table-row">
                    <span>Unlimited</span>
                    <span>412</span>
                    <span>1.8%</span>
                  </div>
                  <div className="tc-mock-table-row">
                    <span>Corporate</span>
                    <span>96</span>
                    <span>0.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
