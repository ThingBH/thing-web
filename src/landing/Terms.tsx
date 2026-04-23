import { Link } from 'react-router-dom'
import './policy.css'

export default function Terms() {
  return (
    <div className="policy-page">
      <div className="policy-wrap">
        <Link to="/" className="policy-back">← Back</Link>
        <h1>Terms & Conditions</h1>
        <p className="policy-meta">Last Updated: 28 Jan 2026</p>

        <p>These Terms & Conditions establish the rules for accessing and using the Thing Company platform, which includes a mobile application, website, and connected services.</p>
        <p>Thing Company operates under <strong>The 1 Percent Solutions</strong>, a Bahrain-registered entity (Commercial Registration No. 102103-1), headquartered in Seef.</p>
        <p>By using the platform, you agree to these terms. Non-agreement means you should refrain from using the service.</p>

        <h2>1. Definitions</h2>
        <ul>
          <li><strong>Thing Company</strong> (also "we," "us," "our"): The 1 Percent Solutions</li>
          <li><strong>User</strong>: Anyone accessing or using the platform</li>
          <li><strong>Buyer</strong>: A user purchasing goods or services</li>
          <li><strong>Seller</strong>: A user listing or selling goods or services</li>
          <li><strong>Order</strong>: A transaction initiated through the platform</li>
          <li><strong>Escrow</strong>: Funds temporarily retained by Thing Company until order completion</li>
        </ul>

        <h2>2. Platform Role & Nature of Service</h2>
        <p>Thing Company functions as a technology platform connecting buyers and sellers. The platform:</p>
        <ul>
          <li>Is <strong>not</strong> a seller, merchant, or service provider</li>
          <li>Does not own, manufacture, or examine listed items</li>
          <li>Provides no guarantees regarding item quality, legality, or availability</li>
        </ul>
        <p>Transactions occur directly between parties.</p>

        <h2>3. Eligibility & Accounts</h2>
        <ul>
          <li>All age groups may use the platform</li>
          <li>Users must supply truthful, thorough, and current details</li>
          <li>Users bear responsibility for account activity</li>
          <li>Thing Company reserves suspension or termination rights for term violations</li>
        </ul>

        <h2>4. Listings & Seller Obligations</h2>
        <p>Sellers must:</p>
        <ul>
          <li>Give truthful, legally compliant item descriptions</li>
          <li>Ensure goods follow Bahraini regulations</li>
          <li>Complete orders professionally and promptly</li>
          <li>Keep prices, stock, and delivery promises</li>
        </ul>
        <p>Thing Company retains authority to remove or limit listings.</p>

        <h2>5. Orders & Payments</h2>
        <h3>5.1 Online Payments</h3>
        <ul>
          <li>Tap Payments handles online transactions</li>
          <li>Thing Company does not retain complete payment card information</li>
        </ul>

        <h3>5.2 Cash Payments</h3>
        <ul>
          <li>Buyer and seller exchange cash directly</li>
          <li>Thing Company assumes no liability for cash-based deals</li>
        </ul>

        <h3>5.3 Escrow</h3>
        <ul>
          <li>For online purchases, Thing Company may hold funds temporarily</li>
          <li>Funds are released to the Seller once delivery is confirmed</li>
          <li>Thing Company may withhold funds for disputes, fraud, or policy breaches</li>
        </ul>

        <h2>6. Delivery & Fulfillment</h2>
        <ul>
          <li>Sellers manage delivery and fulfillment exclusively</li>
          <li>Delivery timeframes represent approximations only</li>
          <li>Thing Company bears no responsibility for delays, loss, or harm during shipping</li>
        </ul>

        <h2>7. Cancellations, Refunds & Disputes</h2>
        <ul>
          <li>Cancellation and refund terms differ by seller</li>
          <li>Thing Company may assist in resolving disagreements but has no obligation</li>
          <li>Escrow decisions are binding unless law mandates otherwise</li>
        </ul>

        <h2>8. Communications</h2>
        <p>Users agree to receive transactional alerts (email, SMS, push) and service announcements. Marketing messages may be delivered where allowed and can be declined.</p>

        <h2>9. Prohibited Conduct</h2>
        <p>Users cannot:</p>
        <ul>
          <li>Employ the platform illegally or fraudulently</li>
          <li>Share false, deceptive, or rights-infringing material</li>
          <li>Sabotage platform function or safeguards</li>
          <li>Bypass payment or escrow protections</li>
          <li>Mistreat other users</li>
        </ul>
        <p>Breach results in account suspension or closure.</p>

        <h2>10. Intellectual Property</h2>
        <ul>
          <li>Thing Company owns or licenses all software, marks, and materials</li>
          <li>Reproducing or adapting platform content without approval is prohibited</li>
          <li>Users own uploaded material but grant Thing Company a non-exclusive license to use it for Platform operations</li>
        </ul>

        <h2>11. Account Suspension & Termination</h2>
        <p>Thing Company may suspend or terminate accounts for breaking these terms, for suspected fraud or misuse, or to meet legal or governmental requirements. Termination does not excuse unpaid debts.</p>

        <h2>12. Disclaimers</h2>
        <p>The platform operates on an "as is" and "as available" foundation. Thing Company offers no assurances on listing truthfulness, continuous uninterrupted service, or vendor and buyer conduct. Users assume all risks.</p>

        <h2>13. Limitation of Liability</h2>
        <p>Within legal constraints, Thing Company avoids liability for secondary, unexpected, or cascading harm. Thing Company's responsibility caps at fees paid during the last year, if applicable.</p>

        <h2>14. Indemnification</h2>
        <p>Users will shield and safeguard Thing Company from claims, costs, or losses arising from platform usage, term violations, or buyer-seller dealings.</p>

        <h2>15. Governing Law & Jurisdiction</h2>
        <p>Bahraini law applies. Disputes fall under Bahraini court authority.</p>

        <h2>16. Changes to Terms</h2>
        <p>Thing Company may revise these terms anytime. Continuing to use the service means accepting modifications.</p>

        <h2>17. Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:hello@thing.bh">hello@thing.bh</a><br /><strong>Organisation:</strong> The 1 Percent Solutions<br /><strong>Region:</strong> Kingdom of Bahrain</p>

        <p className="policy-copy">© {new Date().getFullYear()} Thing Company. All rights reserved.</p>
      </div>
    </div>
  )
}
