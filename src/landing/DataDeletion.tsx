import { Link } from 'react-router-dom'
import './policy.css'

export default function DataDeletion() {
  return (
    <div className="policy-page">
      <div className="policy-wrap">
        <Link to="/" className="policy-back">← Back</Link>
        <h1>Data Deletion Policy</h1>

        <p><strong>Operator:</strong> The 1 Percent Solutions (Commercial Registration No. 102103-1), based in Seef, Bahrain</p>

        <h2>Current Status</h2>
        <p>Thing Company does not support self-service account deletion through the mobile application or website at this time. Account removal requires a formal request submission.</p>

        <h2>How to Request</h2>
        <p>Contact <a href="mailto:hello@thing.bh">hello@thing.bh</a> from your registered email address or with sufficient identity verification details.</p>

        <h2>What Happens Next</h2>
        <p>All requests undergo individual assessment. Thing Company may fully or partially deny removal where data retention serves purposes including:</p>
        <ul>
          <li>Active transactions</li>
          <li>Financial records and escrow management</li>
          <li>Legal compliance obligations</li>
          <li>Fraud prevention measures</li>
          <li>Terms enforcement</li>
        </ul>

        <h2>Timeline</h2>
        <p>Approved deletion requests are typically processed within a reasonable timeframe, though immediate removal isn't guaranteed.</p>

        <h2>Financial Data</h2>
        <p>Transaction and payment records may persist separately to satisfy accounting and compliance requirements.</p>

        <h2>Third Parties</h2>
        <p>Thing Company cannot control deletion timelines for authorised service providers who function as independent data controllers.</p>

        <h2>Updates</h2>
        <p>This policy may be revised as platform capabilities, regulations, or internal practices evolve.</p>

        <h2>Contact</h2>
        <p><strong>Email:</strong> <a href="mailto:hello@thing.bh">hello@thing.bh</a><br /><strong>Entity:</strong> The 1 Percent Solutions<br /><strong>Location:</strong> Kingdom of Bahrain</p>

        <p className="policy-copy">© {new Date().getFullYear()} Thing Company. All rights reserved.</p>
      </div>
    </div>
  )
}
