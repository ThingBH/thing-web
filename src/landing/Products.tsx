import { IconCalendar, IconCart, IconDumbbell } from "./icons";
import { RevealSection } from "./RevealSection";

const products = [
  {
    name: "Gym Thing",
    description:
      "Member journeys, staff workflows, and revenue visibility in one cohesive system built for modern fitness operators.",
    featured: true,
    Icon: IconDumbbell,
    features: [
      "Member management",
      "Class scheduling",
      "Payments and subscriptions",
      "Analytics dashboard",
    ],
  },
  {
    name: "Thing Ledger",
    description:
      "Financial operations hub for multi-location brands: consolidated reporting, approvals, and audit-ready exports.",
    featured: false,
    Icon: IconCart,
    features: [] as string[],
  },
  {
    name: "Field Thing",
    description:
      "Dispatch, asset tracking, and mobile-first tasking for teams that work beyond the desk, from facilities to field service.",
    featured: false,
    Icon: IconCalendar,
    features: [] as string[],
  },
];

export function Products() {
  return (
    <RevealSection id="products" className="tc-section">
      <div className="tc-wrap">
        <header className="tc-section-head">
          <p className="tc-kicker">Product portfolio</p>
          <h2>A company of products, not a single feature shipped once.</h2>
          <p>
            Each product is engineered as a long-lived platform. Gym Thing is
            our flagship for fitness, with shared identity, billing primitives,
            and observability across the suite.
          </p>
        </header>

        <div className="tc-products-grid">
          {products.map((p) => (
            <article
              key={p.name}
              className={`tc-product${p.featured ? " featured" : ""}`}
            >
              {p.featured ? (
                <span className="tc-product-badge">3A+</span>
              ) : null}
              <div className="tc-product-icon">
                <p.Icon />
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              {p.features.length ? (
                <ul className="tc-product-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              ) : (
                <a
                  href="#contact"
                  className="tc-btn tc-btn-ghost tc-btn-sm"
                  style={{ alignSelf: "flex-start" }}
                >
                  Talk to product team
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
