import { Link } from 'react-router-dom'
import './policy.css'

export default function Privacy() {
  return (
    <div className="policy-page">
      <div className="policy-wrap">
        <Link to="/" className="policy-back">← Back</Link>
        <h1>Privacy Policy</h1>
        <p className="policy-meta">Last Updated: 28 Jan 2026</p>

        <p>Thing Company ("Thing Company", "we", "us", or "our") is a digital platform operated by <strong>The 1 Percent Solutions</strong>, Commercial Registration No. <strong>102103-1</strong>, headquartered in <strong>Seef, Kingdom of Bahrain</strong>.</p>
        <p>This Privacy Policy explains how we collect, use, disclose, store, and protect personal data when you use the Thing Company platform and related services (collectively, the "Platform"). This policy is issued in accordance with Bahrain's Personal Data Protection Law (Law No. 30 of 2018) ("PDPL").</p>
        <p>By accessing or using Thing Company, you acknowledge that you have read and understood this Privacy Policy.</p>

        <h2>1. Scope of Application</h2>
        <p>This Privacy Policy applies to:</p>
        <ul>
          <li>Users who browse, register, or transact on Thing Company</li>
          <li>Buyers and sellers using the Platform</li>
          <li>Visitors to Thing Company's landing website</li>
        </ul>
        <p>Thing Company is intended for users of all ages. Where legally required, consent is obtained from a parent or legal guardian.</p>

        <h2>2. Data Controller</h2>
        <p>For the purposes of the PDPL, the data controller is:</p>
        <p><strong>The 1 Percent Solutions</strong><br />CR No.: 102103-1<br />Address: Seef, Kingdom of Bahrain<br />Email: <a href="mailto:hello@thing.bh">hello@thing.bh</a></p>
        <p>Thing Company does not currently appoint a formal Data Protection Officer. All data protection matters are handled internally.</p>

        <h2>3. Personal Data We Collect</h2>
        <p>We collect only data that is operationally necessary to deliver our services.</p>

        <h3>3.1 Data You Provide Directly</h3>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Profile information</li>
          <li>Listings content (photos, descriptions)</li>
          <li>Messages exchanged via in-app chat</li>
          <li>Delivery location data for orders</li>
          <li>Payment-related confirmations (excluding full card details)</li>
        </ul>

        <h3>3.2 Identity & Verification Data (Conditional)</h3>
        <p>Where required for compliance, fraud prevention, or verification, we may collect:</p>
        <ul>
          <li>CPR information</li>
          <li>Commercial registration documents</li>
          <li>Business ownership details</li>
        </ul>

        <h3>3.3 Transactional Data</h3>
        <ul>
          <li>Order history</li>
          <li>Payment status</li>
          <li>Refunds and escrow-related records</li>
        </ul>

        <h3>3.4 Technical & Usage Data</h3>
        <ul>
          <li>Device identifiers</li>
          <li>IP address</li>
          <li>App usage analytics and event data</li>
        </ul>

        <h2>4. Purpose of Processing</h2>
        <p>We process personal data to:</p>
        <ul>
          <li>Create and manage user accounts</li>
          <li>Enable platform transactions</li>
          <li>Facilitate payments and escrow services</li>
          <li>Enable communication between parties</li>
          <li>Deliver orders and location-based services</li>
          <li>Prevent fraud and misuse</li>
          <li>Improve Platform performance and user experience</li>
          <li>Comply with legal and regulatory obligations</li>
          <li>Send transactional and marketing communications (where permitted)</li>
        </ul>
        <p>Processing is conducted on lawful bases including user consent, contractual necessity, and legitimate business interests.</p>

        <h2>5. Payments & Escrow</h2>
        <p>Online payments are processed via <strong>Tap Payments</strong>, a third-party payment service provider. Thing Company does not store full payment card details.</p>
        <p>Thing Company may temporarily hold funds in escrow until orders are confirmed as delivered, in accordance with Platform rules.</p>

        <h2>6. Third-Party Service Providers</h2>
        <p>We work with vetted third parties strictly on a need-to-know basis, including:</p>
        <ul>
          <li><strong>Tap Payments</strong> – payment processing</li>
          <li><strong>PostHog</strong> – analytics and product insights</li>
          <li><strong>Amazon Web Services (AWS)</strong> – cloud infrastructure (Bahrain region)</li>
          <li><strong>Vercel</strong> – website hosting</li>
        </ul>
        <p>All third parties are contractually bound to process data in accordance with applicable data protection laws.</p>

        <h2>7. Data Storage & Localization</h2>
        <ul>
          <li>Personal data is hosted primarily on AWS infrastructure located in Bahrain</li>
          <li>We do not intentionally transfer personal data outside the Kingdom of Bahrain</li>
          <li>Data is retained only for as long as required for operational, legal, or regulatory purposes</li>
        </ul>

        <h2>8. User Rights</h2>
        <p>Subject to applicable law, users have the right to:</p>
        <ul>
          <li>Access their personal data</li>
          <li>Correct inaccurate or outdated data</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>Requests related to personal data may be submitted to <a href="mailto:hello@thing.bh">hello@thing.bh</a>.</p>

        <h2>9. Marketing Communications</h2>
        <p>Thing Company may send marketing emails or messages related to offers, features, or updates. Users may opt out at any time via provided unsubscribe mechanisms or by contacting us directly. Transactional communications are mandatory and cannot be opted out of.</p>

        <h2>10. Data Security</h2>
        <p>We implement commercially reasonable administrative, technical, and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. No system is completely secure. Users acknowledge and accept residual risks inherent in digital platforms.</p>

        <h2>11. Children's Privacy</h2>
        <p>Thing Company is accessible to users of all ages. Where required by law, consent must be obtained from a parent or legal guardian before collecting personal data from minors.</p>

        <h2>12. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. Material changes will be communicated through the Platform. Continued use of Thing Company constitutes acceptance of the updated policy.</p>

        <h2>13. Contact Us</h2>
        <p><strong>Email:</strong> <a href="mailto:hello@thing.bh">hello@thing.bh</a><br /><strong>Entity:</strong> The 1 Percent Solutions<br /><strong>Location:</strong> Kingdom of Bahrain</p>

        <p className="policy-copy">© {new Date().getFullYear()} Thing Company. All rights reserved.</p>
      </div>
    </div>
  )
}
