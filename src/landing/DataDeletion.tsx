import { Link } from 'react-router-dom'
import './policy.css'
import { APPS, APP_STORE_DEVELOPER_NAME, GOOGLE_PLAY_DEVELOPER_NAME, LEGAL_ENTITY_NAME } from './appInfo'

const CONTACT_EMAIL = 'hello@thing.bh'
const DELETION_SUBJECT = `Account deletion request — ${APPS.member.name}`
const DELETION_BODY = [
  'I request deletion of my account and associated personal data.',
  '',
  'Account email: ',
  'Gym name: ',
  `App (${APPS.member.name} / ${APPS.memberTrain.name} / ${APPS.admin.name}): `,
].join('\n')
const DELETION_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DELETION_SUBJECT)}&body=${encodeURIComponent(DELETION_BODY)}`

export default function DataDeletion() {
  return (
    <div className="policy-page">
      <div className="policy-wrap">
        <Link to="/" className="policy-back">← Back</Link>
        <h1>Account & Data Deletion</h1>
        <p className="policy-meta">Last Updated: 12 Oct 2026</p>

        <p><strong>Operator:</strong> {LEGAL_ENTITY_NAME} (Commercial Registration No. 196454-1), based in Seef, Bahrain</p>

        <h2>Apps and Services Covered</h2>
        <p>This page explains how to request deletion of your account and personal data for:</p>
        <ul>
          <li><strong>{APPS.member.name}</strong> (<strong>{APPS.member.id}</strong>) – the member app, for members of gyms on the Gym Thing platform</li>
          <li><strong>{APPS.memberTrain.name}</strong> (<strong>{APPS.memberTrain.id}</strong>) – the member app of the Train Fitness gym</li>
          <li><strong>{APPS.admin.name}</strong> (<strong>{APPS.admin.id}</strong>) – the staff app, for gym employees and managers (a separate app from the {APPS.member.name} member app)</li>
          <li>The Thing Company platform and thing.bh website</li>
        </ul>
        <p>All are published on Google Play by the developer "{GOOGLE_PLAY_DEVELOPER_NAME}" and on the Apple App Store by "{APP_STORE_DEVELOPER_NAME}". See our <Link to="/privacy">Privacy Policy</Link> for what data each app handles.</p>

        <h2>Current Status</h2>
        <p>Account deletion is carried out on request. In the member apps ({APPS.member.name} and {APPS.memberTrain.name}) you can start a deletion request in the app (Profile → Delete account), which opens this page, or you can start it directly on this page by following the steps below. Members can also ask their gym. For the staff app ({APPS.admin.name}) and the Thing Company platform and website, follow the steps below.</p>

        <h2>How to Request</h2>
        <ol>
          <li>Open this page – in the member apps via Profile → Delete account, or directly in a browser.</li>
          <li>Send your request from the email address on your account to <a href="mailto:hello@thing.bh">hello@thing.bh</a> with the subject line "{DELETION_SUBJECT}", stating your account email, the name of your gym, and the exact name of the app – "{APPS.member.name}" or "{APPS.memberTrain.name}" if you are a gym member, or "{APPS.admin.name}" if you are gym staff. <a href={DELETION_MAILTO}>Tap here to open a ready-made deletion request email</a>.</li>
          <li>We confirm by reply (we may first ask you to verify your identity) and delete your account and the associated personal data, except the records described under "What May Be Retained" below.</li>
        </ol>
        <p>Members can alternatively ask their gym to make the request on their behalf, because the gym is the data controller for its members' data and {LEGAL_ENTITY_NAME} processes it for the gym.</p>

        <h2>What Is Deleted</h2>
        <p>On an approved request we delete or anonymise the personal data held for your account, including your profile and contact details, your sign-in credentials, and the workout data stored with your account (workouts, templates and personal records), subject to the retention exceptions below. Data stored only on your device (such as body-weight entries and cached data) is removed by signing out and uninstalling the app.</p>

        <h2>What May Be Retained</h2>
        <p>For the Gym Thing platform apps, the gym is the data controller and determines how long its membership and staff records are kept. After a deletion request, the following records may be kept where required by applicable law or for legitimate accounting and legal purposes:</p>
        <ul>
          <li>Invoices, payment and accounting records</li>
          <li>Attendance and access logs, where the gym must keep them</li>
          <li>Payroll and employment records of gym staff, where the employer must keep them</li>
          <li>Records needed to establish or defend legal claims</li>
        </ul>
        <p>More generally, Thing Company may fully or partially deny removal, or keep certain records, where retention serves purposes including:</p>
        <ul>
          <li>Active transactions</li>
          <li>Financial records, including invoices and payments, and escrow management</li>
          <li>Legal compliance obligations</li>
          <li>Fraud prevention measures</li>
          <li>Terms enforcement</li>
        </ul>
        <p>All requests undergo individual assessment.</p>

        <h2>Timeline</h2>
        {/* TODO(owner): confirm deletion-request response time and retention periods */}
        <p>Approved deletion requests are typically processed within a reasonable timeframe, though immediate removal isn't guaranteed. If your gym is the controller of the data, it may need to act on the request as well.</p>

        <h2>Financial Data</h2>
        <p>Transaction and payment records may persist separately to satisfy accounting and compliance requirements.</p>

        <h2>Third Parties</h2>
        <p>Thing Company cannot control deletion timelines for authorised service providers who function as independent data controllers.</p>

        <h2>Updates</h2>
        <p>This policy may be revised as platform capabilities, regulations, or internal practices evolve.</p>

        <h2>Contact</h2>
        <p><strong>Email:</strong> <a href="mailto:hello@thing.bh">hello@thing.bh</a><br /><strong>Entity:</strong> {LEGAL_ENTITY_NAME}<br /><strong>Location:</strong> Kingdom of Bahrain</p>

        <p className="policy-copy">© {new Date().getFullYear()} Thing Company. All rights reserved.</p>
      </div>
    </div>
  )
}
