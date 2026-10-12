import { Link } from 'react-router-dom'
import './policy.css'
import { APPS, APP_STORE_DEVELOPER_NAME, GOOGLE_PLAY_DEVELOPER_NAME, LEGAL_ENTITY_NAME } from './appInfo'

export default function Privacy() {
  return (
    <div className="policy-page">
      <div className="policy-wrap">
        <Link to="/" className="policy-back">← Back</Link>
        <h1>Privacy Policy</h1>
        <p className="policy-meta">Last Updated: 12 Oct 2026</p>

        <p>Thing Company ("Thing Company", "we", "us", or "our") is a digital platform operated by <strong>{LEGAL_ENTITY_NAME}</strong>, Commercial Registration No. <strong>196454-1</strong>, headquartered in <strong>Seef, Kingdom of Bahrain</strong>.</p>
        <p>This Privacy Policy explains how we collect, use, disclose, store, and protect personal data when you use the Thing Company platform and related services (collectively, the "Platform"). This policy is issued in accordance with Bahrain's Personal Data Protection Law (Law No. 30 of 2018) ("PDPL").</p>
        <p>By accessing or using Thing Company, you acknowledge that you have read and understood this Privacy Policy.</p>

        <h2>Apps covered by this policy</h2>
        <p>This Privacy Policy applies to the following apps, each published on Google Play by the developer <strong>{GOOGLE_PLAY_DEVELOPER_NAME}</strong> and on the Apple App Store by <strong>{APP_STORE_DEVELOPER_NAME}</strong>, in addition to the Thing Company marketplace platform and the thing.bh website:</p>
        <ul>
          <li><strong>{APPS.member.name}</strong> (Android package / iOS bundle identifier <strong>{APPS.member.id}</strong>) – the <strong>member app</strong> of the Gym Thing platform, used by members (customers) of gyms that subscribe to the platform (see section 9).</li>
          <li><strong>{APPS.admin.name}</strong> (Android package / iOS bundle identifier <strong>{APPS.admin.id}</strong>) – the <strong>staff app</strong> of the Gym Thing platform, used by employees and managers of gyms that subscribe to the platform (see section 8).</li>
          <li><strong>{APPS.memberTrain.name}</strong> (Android package / iOS bundle identifier <strong>{APPS.memberTrain.id}</strong>) – the <strong>member app</strong> of the Train Fitness gym, built on the same software as the {APPS.member.name} member app and covered by the same section 9.</li>
        </ul>
        <p>{APPS.member.name} and {APPS.admin.name} are two separate apps with different users and different data practices: "{APPS.member.name}" ({APPS.member.id}) is for gym members, and "{APPS.admin.name}" ({APPS.admin.id}) is for gym staff. In this policy, "the Gym Thing platform" means the gym-management service behind these apps, "the member apps" means {APPS.member.name} and {APPS.memberTrain.name}, and "the staff app" means {APPS.admin.name}.</p>
        <p>Other apps we may publish for the Gym Thing platform are also covered by this policy.</p>
        <p><strong>Which sections apply to you.</strong> Sections 3 to 7 and section 11 (Personal Data We Collect, Purpose of Processing, Payments & Escrow, Third-Party Service Providers, Data Storage & Localization, and Marketing Communications) describe the <strong>Thing Company marketplace and the thing.bh website only</strong>. They do not describe the Gym Thing platform apps. For the staff app, section 8 applies <strong>instead of</strong> those sections, and for the member apps, section 9 applies <strong>instead of</strong> those sections – not in addition to them. What {APPS.member.name}, {APPS.memberTrain.name} and {APPS.admin.name} collect, use and share is set out only in sections 8 and 9. Sections 1, 2, 10 and 12 to 15 apply to all our services.</p>

        <h2>1. Scope of Application</h2>
        <p>This Privacy Policy applies to:</p>
        <ul>
          <li>Users who browse, register, or transact on Thing Company</li>
          <li>Buyers and sellers using the Platform</li>
          <li>Visitors to Thing Company's landing website</li>
          <li>Employees and managers of subscribing gyms who use the staff app ({APPS.admin.name})</li>
          <li>Members of subscribing gyms who use a member app ({APPS.member.name} or {APPS.memberTrain.name})</li>
        </ul>
        <p>The Thing Company marketplace is intended for users of all ages; where legally required, consent is obtained from a parent or legal guardian. The Gym Thing platform apps are not directed at children: accounts in those apps are created by the gym, as described in sections 9.8 and 13.</p>

        <h2>2. Data Controller</h2>
        <p>For the purposes of the PDPL, the data controller for the Thing Company marketplace and the thing.bh website, and for the account and sign-in data we handle in our own right, is:</p>
        <p><strong>{LEGAL_ENTITY_NAME}</strong><br />CR No.: 196454-1<br />Address: Seef, Kingdom of Bahrain<br />Email: <a href="mailto:hello@thing.bh">hello@thing.bh</a></p>
        <p>For the Gym Thing platform apps the roles are different. The gym is the data controller for its members' membership data (member apps) and for its employees' staff and HR data (staff app). {LEGAL_ENTITY_NAME} operates the Gym Thing platform and processes that data as a data processor, on the gym's behalf and on its instructions, as described in sections 8.4 and 9.4.</p>
        <p>Thing Company does not currently appoint a formal Data Protection Officer. All data protection matters are handled internally.</p>

        <h2>3. Personal Data We Collect</h2>
        <p>This section applies to the Thing Company marketplace and the thing.bh website only. The data collected by the Gym Thing platform apps is listed in section 8.1 (staff app) and section 9.1 (member apps) instead.</p>
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
        <p>This section applies to the Thing Company marketplace and the thing.bh website only. For the Gym Thing platform apps, sections 8.3 and 9.3 apply instead.</p>
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
        <p>This section applies to the Thing Company marketplace only. It does not describe the Gym Thing platform apps.</p>
        <p>Online payments are processed via <strong>Tap Payments</strong>, a third-party payment service provider. Thing Company does not store full payment card details.</p>
        <p>Thing Company may temporarily hold funds in escrow until orders are confirmed as delivered, in accordance with Platform rules.</p>

        <h2>6. Third-Party Service Providers</h2>
        <p>This section applies to the Thing Company marketplace and the thing.bh website only. The service providers used by the Gym Thing platform apps are listed in sections 8.4 and 9.4 instead; those apps do not use PostHog or any other analytics provider.</p>
        <p>We work with vetted third parties strictly on a need-to-know basis, including:</p>
        <ul>
          <li><strong>Tap Payments</strong> – payment processing</li>
          <li><strong>PostHog</strong> – analytics and product insights</li>
          <li><strong>Amazon Web Services (AWS)</strong> – cloud infrastructure (Bahrain region)</li>
          <li><strong>Vercel</strong> – website hosting</li>
        </ul>
        <p>All third parties are contractually bound to process data in accordance with applicable data protection laws.</p>

        <h2>7. Data Storage & Localization</h2>
        <p>The following applies to the <strong>Thing Company marketplace platform</strong> (buying and selling on Thing Company) only:</p>
        <ul>
          <li>Marketplace personal data is hosted primarily on AWS infrastructure located in Bahrain</li>
          <li>We do not intentionally transfer marketplace personal data outside the Kingdom of Bahrain</li>
        </ul>
        <p>This does not describe the Gym Thing platform apps. Data handled by <strong>{APPS.member.name}</strong>, <strong>{APPS.memberTrain.name}</strong> and <strong>{APPS.admin.name}</strong> is hosted outside Bahrain, in the AWS eu-west-3 (Paris, European Union) region, as described in sections 8.4 and 9.4, which govern for those apps.</p>
        <p>Marketplace data is retained only for as long as required for operational, legal, or regulatory purposes. Retention for the Gym Thing platform apps is described in sections 8.6 and 9.7.</p>

        <h2>8. Staff App ({APPS.admin.name})</h2>
        <p>This section applies specifically to <strong>{APPS.admin.name}</strong> (package/bundle id <strong>{APPS.admin.id}</strong>), the staff app used by employees and managers of gyms subscribed to the Gym Thing platform. For this app it applies instead of sections 3 to 7 and 11, which describe the Thing Company marketplace only. It does not apply to the member app "{APPS.member.name}" ({APPS.member.id}), which is covered by section 9.</p>

        <h3>8.1 Data We Collect</h3>
        <ul>
          <li><strong>Account identity</strong> – email address and password/authentication tokens (via AWS Cognito), your gym/organisation association, and your role and permissions</li>
          <li><strong>Employee profile data</strong> provided by your employer gym – name, employee number, job title/department, contact details, and HR records the gym maintains, including attendance, shifts, leave, and, for gyms using payroll, salary/payslip data the employer records</li>
          <li><strong>Attendance data</strong> – check-in/check-out timestamps and status</li>
          <li><strong>Location data</strong> – see "Location Data" below</li>
          <li><strong>Device and technical data</strong> – device type, OS version, app version, and basic diagnostic logs</li>
        </ul>

        <h3>8.2 Location Data</h3>
        <p>Gym Thing Admin captures a single location fix (latitude, longitude, and accuracy) only at the moment an employee checks in or out, only while the app is in use in the foreground ("when in use" permission), used solely to verify that the check-in happened at the assigned branch (geofence verification). This location fix is stored with the attendance record. The app does not track location continuously or in the background, and location data is never sold or used for advertising.</p>

        <h3>8.3 Why We Collect This Data</h3>
        <p>We use this data to provide the staff app (attendance, scheduling, member check-in, and payroll access where enabled by the employer gym), to verify attendance location, for security and fraud prevention, to support the employer gym's HR and compliance obligations, and to provide customer support.</p>

        <h3>8.4 Sharing & Processors</h3>
        <ul>
          <li><strong>Amazon Web Services (AWS)</strong> – hosting, authentication, storage, and email/SMS/push delivery. Data for the Gym Thing platform is hosted in the AWS <strong>eu-west-3 (Paris, European Union)</strong> region</li>
          <li><strong>Your employer gym</strong> – your employer gym is the data controller for your HR data; {LEGAL_ENTITY_NAME} processes it on the gym's behalf</li>
        </ul>
        <p>We do not sell personal data collected through Gym Thing Admin, and we do not share it with advertising networks.</p>

        <h3>8.5 App Permissions</h3>
        <ul>
          <li><strong>Location ("when in use")</strong> – to verify check-in/check-out at the assigned branch, as described above</li>
          <li><strong>Camera</strong> – to scan member QR codes at reception, requested only when the employee opens the scanner; the app does not read your photos</li>
          <li><strong>Notifications</strong> – to deliver work notifications; the app does not read your contacts</li>
        </ul>
        <p>Gym Thing Admin does not use any third-party analytics or crash-reporting SDKs.</p>

        <h3>8.6 Retention & Deletion</h3>
        <p>We retain this data for as long as your account or employment record with your employer gym is active, and as required by the employer's legal and payroll record-keeping obligations. To request deletion, contact <a href="mailto:hello@thing.bh">hello@thing.bh</a> or see our <Link to="/data-deletion">Account & Data Deletion</Link> page.</p>

        <h2>9. Member Apps ({APPS.member.name} and {APPS.memberTrain.name})</h2>
        <p>This section applies specifically to <strong>{APPS.member.name}</strong> (package/bundle id <strong>{APPS.member.id}</strong>) and to <strong>{APPS.memberTrain.name}</strong> (package/bundle id <strong>{APPS.memberTrain.id}</strong>), the member apps used by members of gyms subscribed to the Gym Thing platform. For these apps it applies instead of sections 3 to 7 and 11, which describe the Thing Company marketplace only. It does not apply to the staff app "{APPS.admin.name}" ({APPS.admin.id}), which is covered by section 8. Both member apps are published on Google Play by the developer "{GOOGLE_PLAY_DEVELOPER_NAME}" and on the Apple App Store by "{APP_STORE_DEVELOPER_NAME}". Member accounts are created by your gym; you activate yours in the app with a code emailed to you and then sign in with your email address and password.</p>

        <h3>9.1 Data We Collect</h3>
        <ul>
          <li><strong>Account identity</strong> – email address and your password/authentication tokens, and your gym/organisation association</li>
          <li><strong>Profile and membership data</strong> held by your gym – name, phone number, membership/customer number, membership status and dates, and the service or personal-training entitlements on your account</li>
          <li><strong>Access credential data</strong> – the short-lived tokens used to generate the rotating QR code you show at the gym door</li>
          <li><strong>Class bookings</strong> – the class bookings made for you at your gym, which the app displays. Classes are booked and cancelled at your gym's reception, not in the app</li>
          <li><strong>Workout data</strong> – see "Fitness and Workout Data" below</li>
          <li><strong>Technical data</strong> – your IP address and the app and device information sent with requests to our servers, and basic diagnostic logs on the server</li>
        </ul>

        <h3>9.2 Fitness and Workout Data</h3>
        <p>The app includes a workout tracker. Data you enter in it – exercises, sets, repetitions, weights, workout templates, workout sessions and personal records – is sent to our servers and stored with your account so it is available on your account. Body-weight entries you log are stored only on your device, in the app's private storage, and are not sent to us. We do not read health data from Apple Health, Health Connect or any other health or fitness platform, and we do not collect data from wearables or device sensors.</p>

        <h3>9.3 Why We Collect This Data</h3>
        <p>We use this data to run your account and sign you in, to show your membership status and entitlements, to let you open the gym door with your QR credential, to show you the class schedule and your class bookings, to provide the workout tracker, for security and fraud prevention, and to provide customer support. We do not use it for advertising and we do not build advertising profiles.</p>

        <h3>9.4 Sharing & Processors</h3>
        <ul>
          <li><strong>Your gym</strong> – your gym is the data controller for your membership data; {LEGAL_ENTITY_NAME} processes it on the gym's behalf as the operator of the Gym Thing platform, and your gym can see the data held on your member account</li>
          <li><strong>Amazon Web Services (AWS)</strong> – hosting, authentication, storage, and email delivery (for example your activation code). Data for the Gym Thing platform is hosted in the AWS <strong>eu-west-3 (Paris, European Union)</strong> region</li>
          <li><strong>Google Wallet</strong> – only if you tap "Add to Google Wallet" (offered on Android, for gyms that have enabled it). A pass containing your name and member identifier is then created with Google, and Google's own privacy policy applies to the pass once it is in your Google Wallet</li>
          <li><strong>Expo (EAS Update)</strong> – the app checks Expo's update service for app updates when it starts, and Expo receives technical request data such as the app version, the platform (iOS or Android) and an anonymous installation identifier; no account or workout data is sent to Expo for this purpose</li>
          <li><strong>Google (Firebase Cloud Messaging)</strong> – on Android, the app includes this Google service so that it can receive notifications. It assigns an app-installation identifier on your device and registers it with Google when the app starts. On iOS, the Apple Push Notification service is used only if you allow notifications. No notification token is sent to our servers unless you allow notifications and the gym platform enables them</li>
        </ul>
        <p>We do not sell personal data collected through the member apps, and we do not share it with advertising networks.</p>

        <h3>9.5 App Permissions</h3>
        <ul>
          <li><strong>Notifications (optional)</strong> – the app may ask for your permission to send notifications. Permission is optional: nothing is sent until you allow notifications and the gym platform enables them. Notifications are used only for notices about your gym, your membership and your classes, and can be turned off at any time in your device's system settings. The app works without them</li>
        </ul>
        <p>The member apps do not request location, camera, contacts, photos/media library, microphone, Bluetooth or health-data permissions. They do not track your location, do not scan or read your photos, and do not read your contacts. The apps require network access to communicate with our servers. They contain no third-party analytics, advertising, or crash-reporting SDKs.</p>

        <h3>9.6 Data Stored on Your Device</h3>
        <p>Current versions of the app store your sign-in tokens in your device's secure storage (the iOS Keychain, or Android Keystore-backed encrypted storage), falling back to the app's private storage only if secure storage is unavailable on the device; older versions stored them in the app's private storage. Basic account details, your language setting, and your body-weight entries and locally cached workout data are stored in the app's private storage on your device. Signing out removes the stored sign-in tokens from the device. Uninstalling the app removes the app's private storage, but on iOS items saved in the Keychain can remain after an uninstall, so sign out before uninstalling to remove your sign-in tokens from the device.</p>

        <h3>9.7 Retention & Deletion</h3>
        <p>We retain this data for as long as your membership account with your gym is active and as required by your gym's and our legal and accounting record-keeping obligations. Your gym, as the data controller, determines how long its membership records are kept. You can start a deletion request in the app (Profile → Delete account), which opens our <Link to="/data-deletion">Account & Data Deletion</Link> page, or directly on that page, or by contacting <a href="mailto:hello@thing.bh">hello@thing.bh</a>; you may also ask your gym. After a deletion request, some records may be kept where required by applicable law or for legitimate accounting and legal purposes: invoices, payment and accounting records, attendance and access logs where the gym must keep them, and records needed to establish or defend legal claims.</p>

        <h3>9.8 Children & Age</h3>
        <p>The member apps are used by members whose accounts are created by their gym, and are not directed at children. Members are registered by their gym; where a member is a minor, the gym obtains the consent of a parent or legal guardian (see section 13).</p>

        <h2>10. User Rights</h2>
        <p>Subject to applicable law, users have the right to:</p>
        <ul>
          <li>Access their personal data</li>
          <li>Correct inaccurate or outdated data</li>
          <li>Request erasure (deletion) of their personal data</li>
          <li>Object to the processing of their personal data</li>
          <li>Withdraw consent at any time where processing is based on consent</li>
          <li>Raise a concern with us about how their personal data is handled</li>
        </ul>
        <p>Requests related to personal data may be submitted to <a href="mailto:hello@thing.bh">hello@thing.bh</a>. For the Gym Thing platform apps, where your gym is the data controller, you may also send your request to your gym. To request deletion of an account, see our <Link to="/data-deletion">Account & Data Deletion</Link> page.</p>

        <h2>11. Marketing Communications</h2>
        <p>This section applies to the Thing Company marketplace only. It does not apply to the Gym Thing platform apps, whose notifications are described in sections 8.5 and 9.5.</p>
        <p>Thing Company may send marketing emails or messages related to offers, features, or updates. Users may opt out at any time via provided unsubscribe mechanisms or by contacting us directly. Transactional communications are mandatory and cannot be opted out of.</p>

        <h2>12. Data Security</h2>
        <p>We implement commercially reasonable administrative, technical, and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. No system is completely secure. Users acknowledge and accept residual risks inherent in digital platforms.</p>

        <h2>13. Children's Privacy</h2>
        <p>The Thing Company marketplace is accessible to users of all ages. Where required by law, consent must be obtained from a parent or legal guardian before collecting personal data from minors.</p>
        <p>The Gym Thing platform apps ({APPS.member.name}, {APPS.memberTrain.name} and {APPS.admin.name}) are not directed at children. Members are registered by their gym; where a member is a minor, the gym obtains the consent of a parent or legal guardian. The staff app is used only by a gym's employees and managers.</p>

        <h2>14. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. Material changes will be communicated through the Platform. Continued use of Thing Company constitutes acceptance of the updated policy.</p>

        <h2>15. Contact Us</h2>
        <p><strong>Email:</strong> <a href="mailto:hello@thing.bh">hello@thing.bh</a><br /><strong>Entity:</strong> {LEGAL_ENTITY_NAME}<br /><strong>Location:</strong> Kingdom of Bahrain</p>

        <p className="policy-copy">© {new Date().getFullYear()} Thing Company. All rights reserved.</p>
      </div>
    </div>
  )
}
