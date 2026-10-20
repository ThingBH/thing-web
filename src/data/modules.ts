export type Feature = [name: string, line: string]
export type Module = {
  slug: string
  name: string
  group: 'Members' | 'The front desk' | 'Money' | 'Running the business'
  promise: string
  /** Search description, when it should differ from the promise. */
  description?: string
  summary: string
  /** Product pieces shown under the hero, in order: `screen:<Name>` or `flow:<key>`. */
  show: string
  groups: { t: string; items: Feature[] }[]
  faq: [question: string, answer: string][]
}

export const modules: Module[] = [
  {
    slug: 'members',
    name: 'Members',
    group: 'Members',
    promise: "Every member's details, plans and visits on one page.",
    summary:
      'Keep a full record of every member, with your own profile fields, photo, plans, visits and payments. New members sign themselves up on a tablet or their phone, or your desk reads their ID card to fill the form.',
    show: 'screen:Members',
    groups: [
      {
        t: 'Member profiles',
        items: [
          ['One page per member', 'Summary, plans and history tabs, with photo, member number, status and app access.'],
          [
            'Your own profile fields',
            'Build forms with text, dates, dropdowns, phone, email, photos and file uploads.',
          ],
          ['Sign-up or staff-only fields', 'Choose which sections show at sign-up and which stay private to staff.'],
          ['Profile photos', 'Upload a photo once and it shows on check-in screens.'],
          [
            'Health and emergency details',
            'Date of birth, CPR number, emergency contact and medical conditions on the standard form.',
          ],
          ['Engagement at a glance', 'Total workouts, current streak, last visit, total spent and upcoming sessions.'],
          ['Staff who are also members', 'One person can be a member and an employee, with both profiles linked.'],
        ],
      },
      {
        t: 'Sign-up and walk-ins',
        items: [
          ['Self sign-up kiosk', 'A full-screen sign-up form for a reception tablet, or a link for their phone.'],
          [
            'Your terms, agreed on sign-up',
            'Members accept your membership agreement, which you write and edit yourself.',
          ],
          ['Walk-in review queue', 'Staff check each sign-up, add notes, then approve it or reject it with a reason.'],
          ['Approve and invite together', 'Approving a walk-in can switch on their app and send the welcome email.'],
          ['Waiting sign-ups flagged', 'A banner and a menu badge show how many walk-ins await review.'],
        ],
      },
      {
        t: 'ID card reading',
        items: [
          ['Sign up by ID card', 'Read their ID card and name, birth date, ID number and photo fill the form.'],
          ['Find members by card', 'The card is matched to your members, showing what it matched on.'],
          ['Update details from the card', "Refresh an existing member's details and photo straight from their ID."],
          ['Bahraini and GCC cards', 'Reads old and new Bahraini cards, plus Kuwaiti and Saudi cards.'],
        ],
      },
      {
        t: 'Search and bulk actions',
        items: [
          ['Search from anywhere', 'One box finds members by name, member number or phone, however it is typed.'],
          ['Smart filters', 'Status, plan, expiring soon, birthday today, flagged, low visits and join date.'],
          ['Table or card view', 'Pick your layout and the details you want to see.'],
          ['Bulk actions', 'Assign a plan, send app invites, export or suspend many members at once.'],
          ['Export to a spreadsheet', "Export the whole list, a selection or one member's full profile."],
          [
            'Move your members over',
            'A guided import previews members, plans and history before bringing them across.',
          ],
        ],
      },
      {
        t: 'History and alerts',
        items: [
          [
            'Full history per member',
            'Check-ins, plan changes, sales, bookings and staff actions on one timeline, with who did it.',
          ],
          ['Membership timeline', 'Each plan from sale to start, freezes, extensions and end, with the reasons.'],
          ['Flag a member', 'Record a reason, and the door stops them and asks them to see staff.'],
          ['Birthdays today', 'A banner shows whose birthday it is, one click to see them.'],
          ['Plans ending soon', 'A banner lists every plan ending in the next 14 days.'],
          ['Message on WhatsApp', 'Open a WhatsApp chat with the member straight from their profile.'],
        ],
      },
      {
        t: 'Member app access',
        items: [
          ['Invite members to the app', 'Switch on app access and send the activation email, one by one or in bulk.'],
          ['Set or reset passwords', 'Staff can set a password for a member or switch their app access off.'],
          ['See who uses the app', "The member list shows each member's last login."],
        ],
      },
    ],
    faq: [
      [
        "Can I add my own fields to a member's profile?",
        'Yes, build your own sections with text, dates, dropdowns, photos and file uploads. You choose whether members fill them at sign-up or only staff see them.',
      ],
      [
        'Can members sign themselves up?',
        'Yes, put the sign-up form on a reception tablet or share the link. Each sign-up waits in a review queue for staff to approve.',
      ],
      [
        'Do you read Bahraini ID cards?',
        'Yes, with the desktop app and a card reader, an ID card fills the new-member form, photo included. It also finds the member who already has that card.',
      ],
      [
        'Can I bring my members over from my current system?',
        'Yes, we move your members over with a guided import. You see a preview of what comes across before anything is saved.',
      ],
      [
        'Can I stop a specific person getting in?',
        'Yes, flag them with a reason. The door turns them away and asks them to see staff, even with an active plan.',
      ],
    ],
  },
  {
    slug: 'memberships',
    name: 'Memberships',
    group: 'Members',
    promise: 'Sell any plan at your price and hours, and change it in two clicks.',
    summary:
      'Build packages and lengths with their own VAT-inclusive prices, and decide which days, hours and branches each plan can use. Freeze, extend, upgrade, renew or cancel in a couple of clicks, and every change is recorded.',
    show: 'screen:Memberships',
    groups: [
      {
        t: 'Plans and pricing',
        items: [
          ['Packages and lengths', 'Set tiers like Gold or Student, add lengths, and price every combination.'],
          ['Time-based plans', 'Access for a set number of days or months.'],
          ['Visit-day plans', 'Members buy a number of days, and a day is used only when they come.'],
          ['Expiry your way', 'Visit days can never expire or expire after a window, and freezing pushes it back.'],
          ['Discounts and special prices', 'Percentage off, amount off or a fixed price for each package.'],
          ['VAT worked out for you', 'Enter the price the member pays and the VAT split is calculated at your rate.'],
          ['Archive without losing history', 'Edit prices in place, and archive or restore old plans at any time.'],
        ],
      },
      {
        t: 'Access rules per plan',
        items: [
          ['Rules the door enforces', "Each plan's days, hours and branches are checked on every scan."],
          ['Allowed days', 'Pick days of the week, or every day or weekdays in one tap.'],
          ["Off-peak and ladies' hours", 'Set access hours like 10:00 to 16:00 for a plan, or keep it open 24/7.'],
          ['Branch access', 'A plan can work at every branch or only the ones you pick.'],
          ['Rules per package or length', 'Set rules once for a package and override them for one length.'],
          ['Plain-English summary', 'Each plan shows its rules in one line, like weekdays, 6am to 10pm, all branches.'],
        ],
      },
      {
        t: 'Selling and renewing',
        items: [
          ['Renew without gaps', 'A renewal is booked to start the moment the current plan ends.'],
          ['Sell at the desk', 'Pick package, length, start date and payment: cash, card, Benefit or split.'],
          ['Send a payment link', 'The plan starts when the member pays, or on a date you set.'],
          ['Record the real sale date', 'Log a sale made earlier with the date it actually happened.'],
          ['Assign to many at once', 'Give a group of members the same plan in one go.'],
          ['Top up visit days', "Sell more visit days straight from the member's plans tab."],
          ['No overlapping plans', 'Two plans for the same member can never overlap by mistake.'],
        ],
      },
      {
        t: 'Changing a plan',
        items: [
          ['Freeze now or later', 'Freeze from today or a future date, and the end date moves out on its own.'],
          ['Unfreeze early', 'Unused freeze days come off the end date again.'],
          ['Extend a plan', 'Add extra days or visit days, with a reason.'],
          ['Upgrade in place', 'Move a member to a better plan and collect just the difference.'],
          ['Move a start date', 'Push back a plan that has not started, keeping its length.'],
          ['Cancel properly', 'Keep it as paid, mark it refunded or void a mistaken sale, with a reason.'],
          ['Undo a visit', 'A wrongly counted visit day goes back on the balance.'],
        ],
      },
      {
        t: 'Renewals and reporting',
        items: [
          ['Membership health at a glance', 'Active plans, cancellations this month, churn rate and renewal rate.'],
          ['Charts that explain churn', 'Monthly churn, cancellations and their reasons, and how plans compare.'],
          ['Upcoming renewals', 'Plans ending soon with days remaining, ready to export to a spreadsheet.'],
          ['Members without a plan', 'See active members who have no current membership.'],
          ['Automatic reminders', 'Ready-made messages for plans expiring in 7 days and visit days running low.'],
        ],
      },
    ],
    faq: [
      [
        "Can I sell off-peak or ladies' hours memberships?",
        'Yes, every plan can be limited to certain days, hours and branches. The door checks it on every scan.',
      ],
      [
        'Do you support 10-visit passes?',
        'Yes, visit-day plans use a day only when the member comes in, and a second visit that day is free. The days can expire or never expire.',
      ],
      [
        'What happens to the end date when I freeze someone?',
        'It moves out by the length of the freeze. If they come back early, the unused days come off again.',
      ],
      [
        'Can a member upgrade mid-plan?',
        'Yes, the plan is upgraded in place and you collect the difference. Their history stays in one piece.',
      ],
      [
        'Are prices VAT-inclusive?',
        "Yes, you enter the price the member pays. The VAT split is worked out at your gym's rate.",
      ],
    ],
  },
  {
    slug: 'classes-and-pt',
    name: 'Classes and PT',
    group: 'Members',
    promise: "Your timetable, your PT sessions, and every member's sessions left.",
    summary:
      'Drag classes onto a weekly calendar, repeat them for weeks in one go, and let members book from the app. Sell PT and service packs with their own prices and expiry, and every session a coach completes comes off the balance.',
    show: 'screen:Classes',
    groups: [
      {
        t: 'Class timetable',
        items: [
          ['Drag to schedule', 'Drag a class onto any day and time, and drag it again to move it.'],
          ['Weekly calendar', 'See the whole week at a glance with a current-time line.'],
          ['Class templates', 'Set up Yoga or HIIT once with a description and capacity, then reuse it.'],
          ['Repeat weekly', 'Repeat for a number of weeks or until a date, and see the count first.'],
          ['Coach, room and capacity', 'Assign a coach, a room and a place limit to every class.'],
          ['Timetable per branch', 'Each class belongs to a branch, and you can view one branch or all.'],
          ['Cancel a class', 'Mark a class cancelled and booked members are told automatically.'],
        ],
      },
      {
        t: 'Bookings and waitlists',
        items: [
          ['Members book in the app', 'Members book and cancel classes themselves from the member app.'],
          ['Book from the desk', 'Book a member from the class roster or from their profile.'],
          ['Waitlist when full', 'Once a class is full, new bookings join the waitlist.'],
          ['Live roster', 'Booked count, waitlist count and who is coming, for every class.'],
          ['Cancel a booking', 'One click from the roster frees the place.'],
          ['Class history per member', 'Every class a member has booked, on their profile.'],
        ],
      },
      {
        t: 'PT and service packs',
        items: [
          ['Packs with sessions and expiry', 'Sell a 10-pack of PT with its own price and an optional expiry.'],
          ['Service groups', 'Group services like personal training and massage, each with its own priced packs.'],
          ['Member and non-member prices', 'Charge a different price to people without a membership.'],
          ['Bundle sessions with a plan', 'Include services in a membership, like 2 PT sessions with every Gold plan.'],
          ['Sell at the desk', "Sell a pack from the member's page with a discount and split payment."],
          ['Track who delivered it', 'Record which coach ran each PT or massage session.'],
          ['Adjust or cancel a pack', 'Correct sessions with a reason, or cancel an unused pack and refund it.'],
        ],
      },
      {
        t: 'Coach schedules',
        items: [
          ['Sessions come off the pack', "Each session marked completed or no-show takes one off the member's pack."],
          ['PT sessions page', 'Each coach sees their upcoming and past sessions with client, status and branch.'],
          ['Book PT against a pack', "Pick the client's pack, soonest to expire first, and set a time."],
          [
            "Coaches' phone app",
            'Coaches see their classes, rosters and PT sessions, and schedule PT from the staff app.',
          ],
        ],
      },
      {
        t: 'Member view',
        items: [
          [
            'Timetable in the member app',
            'Upcoming classes with places taken, and whether each is available, full or booked.',
          ],
          ['Sessions left', "Members see each pack's credits left and the days before it expires."],
          ['Upcoming classes on home', "Booked and waitlisted classes show on the member's home screen."],
        ],
      },
      {
        t: 'Booking messages',
        items: [
          ['Booking confirmations', 'A message goes out when a member is booked or waitlisted.'],
          ['Cancellation notices', 'Members hear when their booking is cancelled or the class is called off.'],
          ['Your words, your timing', 'Write each message yourself and switch it on when you are ready.'],
        ],
      },
    ],
    faq: [
      [
        'Can I set up a class once and repeat it?',
        'Yes, pick the days and repeat for a number of weeks or until a date. All the classes are created together.',
      ],
      [
        'Can members book classes from the app?',
        'Yes, members see the timetable, book and cancel in the member app. Your front desk can book for them too.',
      ],
      [
        'What happens when a class is full?',
        'New bookings go on a waitlist, and you see the waitlist count on the class.',
      ],
      [
        'How do PT packages work?',
        'You sell a pack with a set number of sessions and an optional expiry. Each session the coach marks completed or no-show comes off the balance.',
      ],
      [
        'Can coaches see their schedule on their phone?',
        'Yes, coaches see their classes, rosters and PT sessions in the staff app. They can schedule PT sessions there too.',
      ],
    ],
  },
  {
    slug: 'member-app',
    name: 'Member app',
    group: 'Members',
    promise: "Your gym in every member's pocket, in Arabic and English.",
    summary:
      'Members get a check-in code that refreshes itself, a Wallet pass, their plan and days left, your class timetable and a workout tracker. It comes as your own branded app in the stores, or inside the Gym Thing app with your name and logo.',
    show: 'screen:MemberApp',
    groups: [
      {
        t: 'Getting members in',
        items: [
          ['Set up in a minute', 'Your desk adds the member, who confirms a 6-digit email code and picks a password.'],
          ['Activate from a web link', 'A welcome page lets members set a password, then download the app.'],
          ['One link to download', 'One link sends members to the App Store or Google Play.'],
          ['Forgot password', 'Members reset it themselves with an emailed 6-digit code.'],
          ['One account, several gyms', 'Members of more than one gym pick which to open and switch later.'],
        ],
      },
      {
        t: 'Pass and check-in',
        items: [
          ['Apple and Google Wallet', 'Members save their pass to Apple Wallet or Google Wallet in one tap.'],
          ['Check-in code', 'A large code with your logo, shown at the gate or front desk.'],
          ['Refreshes itself', 'The code changes on a timer, so a screenshot cannot be passed around.'],
          ['Tap to get in', 'Members tap their Wallet pass on a phone-tap reader, without opening the app.'],
          ['Pass in your colours', "The Wallet pass carries your logo, colours and the member's details."],
          ['Staff can hand it over', 'Staff show a code or send a link that adds the pass to the phone.'],
          ['Clear no-entry messages', 'Members see no active membership or no visit days left, not a failing code.'],
        ],
      },
      {
        t: 'Plan and sessions left',
        items: [
          ['Membership status card', 'Plan name, days left and last valid day on home, pass and profile.'],
          ['Expiry warnings', 'Expiring soon, last day and expired messages, in plain words.'],
          ['Visit days balance', 'Members see days left and when each batch expires.'],
          ['PT and service packs', 'Credits left, purchase date and expiry for each pack.'],
          ['Member card details', 'Member number and member-since date on their profile.'],
        ],
      },
      {
        t: 'Classes and PT',
        items: [
          ['Book and cancel classes', 'Members book a place or cancel it from the live timetable.'],
          ['Live class timetable', 'Time, length, coach and places taken, with full, waitlist or available.'],
          ['Their bookings marked', 'Booked and waitlisted classes are marked and appear on the home screen.'],
          ['Classes, PT and services', 'Group classes, PT packs and other services in three tabs.'],
          ['Call reception in one tap', 'Each class has a button that dials your front desk.'],
          ['Book a coach shortcut', "Straight from the home screen to the member's PT packs."],
        ],
      },
      {
        t: 'Workout tracker',
        items: [
          ['Guided workouts', 'Log weight and reps set by set, with previous best and a rest timer.'],
          ['873-exercise library', 'Search by name, filter by type and equipment, or add your own.'],
          ['Workout templates', 'Members build their own or start from ready-made upper and lower body plans.'],
          ['Personal records', 'New records for weight, reps, volume and estimated one-rep max.'],
          ['Progress at a glance', 'A weekly calendar, a muscle map of what was trained and a body-weight chart.'],
          ['Works offline', 'Workouts save on the phone first and back up when online.'],
          ['Streaks on home', 'Streak, this week and total workouts tiles keep members coming back.'],
        ],
      },
      {
        t: 'Your brand, their language',
        items: [
          ['Your own branded app', 'Your name, icon, logo and colour in the App Store and Google Play.'],
          ['Or inside Gym Thing', 'No store listing needed: members find your gym with your logo.'],
          ['Arabic and English', 'Every screen in both languages with proper right-to-left, switchable from profile.'],
          ['Light and dark mode', "The app follows the phone's own setting."],
          ['Account essentials', 'Contact reception, privacy policy, terms, switch gym, sign out and delete account.'],
        ],
      },
    ],
    faq: [
      [
        'Do I need my own app in the App Store?',
        "No, members can use the Gym Thing app and find your gym inside it. You can also have your own branded app under your gym's name.",
      ],
      [
        'How do members get their account?',
        'Your staff add them, then the member enters their email, gets a 6-digit code and sets a password.',
      ],
      [
        'Can a member share a screenshot of their code?',
        'No, the code refreshes itself on a short timer, so an old screenshot stops working.',
      ],
      ['Is the app in Arabic?', 'Yes, every screen is in Arabic and English with full right-to-left layout.'],
      [
        'Does it work with Apple Wallet?',
        'Yes, members can save their pass to Apple Wallet or Google Wallet and tap their phone to get in.',
      ],
    ],
  },
  {
    slug: 'access-control',
    name: 'Access control',
    group: 'The front desk',
    promise: 'Only members with a valid plan get in, and you see every entry.',
    summary:
      'Members check in with a code in the app, an Apple or Google Wallet pass, or a tap of their phone. Turnstile readers, phone-tap readers or an iPad at reception check every plan, hour and branch, and every scan is logged.',
    show: 'screen:CheckIns+flow:access',
    groups: [
      {
        t: 'Ways members check in',
        items: [
          ['Code that refreshes itself', 'The app code changes every few seconds, so screenshots stop working.'],
          ['Apple and Google Wallet', "Members save a pass in your gym's colours to their phone wallet."],
          ['Tap your phone', 'Members tap their Wallet pass on a reader, no app opening needed.'],
          ['Plan status beside the code', 'Members see their status and days or visits left above the code.'],
          ['Passes that update themselves', "The Wallet pass keeps the member's details current on its own."],
          ['Staff can send the pass', "Send the Wallet link from the member's profile in a click."],
        ],
      },
      {
        t: 'Door hardware',
        items: [
          ['Gantner turnstile readers', 'Each scan is checked on the spot and the reader shows allow or deny.'],
          ['Phone-tap readers', 'A green light and a beep to let in, red and a buzz to refuse.'],
          ['Design the reader screen', 'Put your branding on the turnstile screen and send it straight to the reader.'],
          ['Every reader in one list', 'Branch, type, status and last contact for each reader, filtered as you like.'],
          ['Live feed per reader', 'Each scan with its result and reason, plus alerts when a reader goes offline.'],
        ],
      },
      {
        t: 'An iPad at reception',
        items: [
          ['No turnstile needed', "An iPad's camera reads the member's code at the front desk."],
          ['Big, clear result', 'Full-screen green welcome with photo, plan and days left, or red with the reason.'],
          ['It speaks', "The iPad says the member's name, or why they cannot come in."],
          ['Front or back camera', 'Staff pick the branch and camera when they start.'],
          ['Locked to the desk', "Leaving reader mode needs the staff member's password."],
          ['Logged like a turnstile', 'Every iPad scan appears in the same check-ins log.'],
        ],
      },
      {
        t: 'Rules at the door',
        items: [
          ['Only live plans get in', 'Plans not started, ended, frozen or missing are turned away.'],
          [
            'Hours and branches enforced',
            'A plan limited to certain hours or branches opens the door only then and there.',
          ],
          ['Visit days counted fairly', 'The first entry of the day uses a visit day, and coming back later does not.'],
          ['Flagged members stopped', 'A flagged member is refused and asked to see staff.'],
          ["Other gyms' passes refused", 'A pass from a different gym is turned away.'],
          ['Clear reasons, kindly worded', 'Staff see the real reason, and the member sees a polite version.'],
        ],
      },
      {
        t: 'Check-ins log',
        items: [
          ['Who came in', 'Every scan with member, reader, result and reason, straight from the door.'],
          ['Daily numbers', 'Check-ins, unique members, refusals and total scans at a glance.'],
          ['Quick periods and filters', 'Today, this week, this month or any dates, allowed or refused, by name.'],
          ['Manual visits', 'Record a visit by hand when someone comes in without scanning.'],
          ['Check-ins start messages', "A check-in, or a member's first ever, can trigger an automatic message."],
        ],
      },
    ],
    faq: [
      [
        'Can members share a screenshot of their code?',
        'No, the code refreshes every few seconds, so an old screenshot is turned away.',
      ],
      [
        'Do I need turnstiles?',
        'No, an iPad at reception can be the reader. It scans the code, shows the result full screen and reads it aloud.',
      ],
      [
        'Which hardware works?',
        "Gantner turnstile readers, phone-tap readers and any iPad at reception. Turnstiles connect through the desktop app on your gym's network.",
      ],
      [
        'Will it tell me why someone was turned away?',
        'Yes, every refusal is logged with a reason like membership frozen or outside access hours. The member sees a polite version.',
      ],
      [
        'Can members use Apple or Google Wallet?',
        "Yes, members save a pass in your gym's colours to their phone and tap it on a reader.",
      ],
    ],
  },
  {
    slug: 'point-of-sale',
    name: 'Point of sale and stock',
    group: 'The front desk',
    promise: 'A front-desk till that sells in four taps and counts every bottle.',
    summary:
      'A full-screen till for drinks, supplements, towels and apparel: tap a tile, take cash, card or BenefitPay, and send the receipt on WhatsApp. Behind it sits a stockroom per branch, with deliveries, counts, transfers and low-stock warnings.',
    show: 'screen:Pos',
    groups: [
      {
        t: 'The till',
        items: [
          ['Picture tiles', 'Products as big tiles with icons, colours or photos, tap to add.'],
          ['Stock on every tile', 'Each tile shows how many are left, warns when low and greys out when empty.'],
          ['Product search', 'Find any product straight from the till.'],
          ['Custom amount', 'Ring up a one-off item, like a replacement locker key, at your own price.'],
          ['Product options', 'Shakes with choices like oat milk, required or optional.'],
          ['Discounts with a reason', 'Take money off one item or the whole order, and note why.'],
          ['VAT on the ticket', 'Subtotal, discounts, VAT and total, always up to date.'],
        ],
      },
      {
        t: 'Taking payment',
        items: [
          ['Cash, card or BenefitPay', 'Three big payment tiles, with change due and quick cash amounts.'],
          ['Split payment', 'Pay part cash and part card, up to three payments per sale.'],
          ['Receipt on WhatsApp', "Send the receipt to the member's WhatsApp, already filled in, or print it."],
          ['Out-of-stock alert', 'The cashier is told the moment a product runs out.'],
          ['Sell the last one anyway', 'With permission, staff can sell an item that shows as out.'],
        ],
      },
      {
        t: 'Members and cashiers',
        items: [
          ['Just checked in', 'The member who just scanned in appears first, or search by name or phone.'],
          ['New member at the till', 'Add a name and phone and they become a member with a number.'],
          ['Walk-in sales', 'Sell without a member under a label you choose.'],
          ['Cashier switching', 'Several staff share one till with a tap or PIN, and every sale records who.'],
          ['Sells from the right branch', "The till sells from the chosen branch's own stock."],
          ['Touch or keyboard', 'Works by touch or keyboard on a front-desk touchscreen PC.'],
        ],
      },
      {
        t: 'Products and catalogue',
        items: [
          ['Cost and margin', 'See your average cost and margin on every product.'],
          ['Simple categories', 'Drinks can hold water and juices, never more than one tap deep.'],
          ['Icons, colours and photos', 'Make every tile easy to recognise at a glance.'],
          ['Track stock or not', 'Count towels and shakers, and leave locker deposits unlimited.'],
          ['Low-stock level per product', 'Set the number that triggers a warning for each item.'],
          ['Units', 'Label how each product is counted, like cans or millilitres.'],
          ['Archive and restore', 'Retire products without losing their sales history.'],
        ],
      },
      {
        t: 'Stockroom',
        items: [
          ['Receive from a photo', 'Photograph a supplier receipt, confirm the matched lines, and it goes into stock.'],
          ['Stock per branch', 'On hand, threshold and status, with a banner when items run low.'],
          ['Receive a delivery', 'Enter quantities, supplier and unit cost, and your average cost updates itself.'],
          ['Stock counts', 'Count the shelf, see expected against counted, then confirm.'],
          ['Transfer between branches', 'Move stock from one branch to another in one step.'],
          ['Write-offs with a reason', 'Damaged, expired or used in-house stock always needs a reason.'],
          ['Every movement explained', 'Each change shows who, when and the balance after.'],
        ],
      },
    ],
    faq: [
      [
        'Do I have to count stock for everything?',
        'No, turn stock tracking on per product. Untracked items like deposits are always sellable.',
      ],
      [
        'Can several staff share one till?',
        'Yes, cashiers switch with a tap or a PIN, and every sale records who made it.',
      ],
      ['Can a member pay part cash and part card?', 'Yes, one sale can be split across up to three payments.'],
      [
        'How do I send a receipt?',
        "After the sale, one button opens the member's WhatsApp with the receipt filled in. You can print it instead.",
      ],
      [
        'What if we have more than one branch?',
        'Each branch keeps its own stock, and you can transfer stock between them.',
      ],
    ],
  },
  {
    slug: 'staff-app',
    name: 'Staff app',
    group: 'The front desk',
    promise: 'Your team clocks in from their phone, and you see the gym from yours.',
    summary:
      'Every staff member gets a My Work screen to clock in at the branch, see shifts, request leave and open payslips, and coaches get their PT sessions and rosters. Owners and managers get a live dashboard, sales and payroll totals, reports and approvals.',
    show: 'screen:StaffApp',
    groups: [
      {
        t: 'My Work',
        items: [
          ['Clock in at the branch', 'One button, and it works only at the branch.'],
          ['Today and this week', "Today's shift, upcoming shifts and hours worked, on time or late."],
          ['Attendance calendar', 'Day, week and month views, with forgotten shifts added for manager approval.'],
          ['Leave requests', 'Balances, requests with working-day counts and an attached medical certificate.'],
          ['Payslips, locked', 'Net pay, deductions, GOSI and PDF download behind Face ID or fingerprint.'],
          ['Full edit history', 'Every entry shows who added, edited or approved it.'],
          ['Arabic and English', 'Staff choose their language on first launch, with full right-to-left.'],
        ],
      },
      {
        t: 'Coaches',
        items: [
          ['Schedule a PT session', 'Pick the client and their pack, set the time, and one credit is used.'],
          ['My PT sessions', "The coach's schedule with scheduled, completed, no-show and cancelled sessions."],
          ['Mark the outcome', 'Completed, no-show or cancelled in one tap.'],
          ['My classes and rosters', 'Classes they teach, places booked, waitlist and who attended.'],
        ],
      },
      {
        t: 'Owner dashboard',
        items: [
          ['Live numbers', 'Revenue with trend, active members and check-ins by gender, for any period.'],
          ['Revenue over time', 'Daily revenue on a chart with its trend.'],
          ['Membership status', 'Active, scheduled, frozen, expired and cancelled at a glance.'],
          ['Top packages', 'Your best-selling memberships and services.'],
          ['Newest members', 'The latest joiners with member number and join date.'],
          ['Who is in now', 'Staff currently at work and since when.'],
          ['Several gyms, one app', 'Switch gym or add another account from your profile.'],
        ],
      },
      {
        t: 'Team and approvals',
        items: [
          ['Approvals on the go', 'Approve or reject manual time entries and out-of-range clock-ins with a note.'],
          ['Team today', 'Who is in, arriving soon, scheduled or absent, per branch.'],
          ['Leave approvals', 'Review and decide on leave requests from your phone.'],
          ['Staff directory', 'Search staff and open their job, contract, bank and GOSI details.'],
          ['Change a role', 'Pick a role and preview what they will see before saving.'],
          ['Each person sees their part', 'Tabs appear by role, so a trainer never sees your revenue.'],
        ],
      },
      {
        t: 'Money and reports',
        items: [
          ['Sales summary', 'Net, gross, VAT, refunds and a split by payment method.'],
          ['Payroll overview', "Payroll periods with their status and every payslip's breakdown."],
          ['Sales report export', 'Pick a period and branch and export as a PDF or spreadsheet.'],
        ],
      },
      {
        t: 'Front-desk desktop app',
        items: [
          ['Windows and Mac app', 'Your full admin in its own window, with the front-desk hardware connected.'],
          ['Read national ID cards', 'Insert a GCC ID card and the name, ID number and photo are read in seconds.'],
          ['Find members by card', 'Match the card to a member or start a new member form.'],
          ['Live gate feed', 'Every entry pops up as access granted or denied, with recent events.'],
          ['Gate status at a glance', 'A connected or offline badge, and a banner when a gate drops.'],
          ['Push screens to the gates', 'Design what the turnstile shows and send it live.'],
          ['iPad at reception', "An iPad reads members' codes and shows a green or red result."],
        ],
      },
    ],
    faq: [
      [
        'Can my staff clock in from home?',
        'No, clocking in works only at the branch. Anything outside it or added by hand waits for a manager.',
      ],
      [
        'Will a trainer see my revenue?',
        'No, each person sees only what their role allows. Revenue can be hidden on its own.',
      ],
      [
        'Can staff see their payslips on the phone?',
        'Yes, finalised payslips with the full breakdown and PDF, locked behind Face ID or fingerprint.',
      ],
      [
        'Do I need the desktop app?',
        'Only for front-desk hardware: reading ID cards and connecting Gantner turnstiles. Everything else works in the browser.',
      ],
      ['Is the staff app in Arabic?', 'Yes, it works in Arabic and English with full right-to-left layout.'],
    ],
  },
  {
    slug: 'payments',
    name: 'Payments',
    group: 'Money',
    promise: 'Every way Bahrain pays, and links that start the plan once paid.',
    summary:
      'Record any payment at the desk, from cash to cheque, and split one sale across methods. Send a payment link on WhatsApp, and when the member pays by card, Apple Pay, Google Pay or BenefitPay, the membership starts by itself.',
    show: 'screen:PayPage+screen:PayLinks',
    groups: [
      {
        t: 'Payment links on WhatsApp',
        items: [
          ['Send a link instead', 'The membership starts and the sale is recorded once they pay.'],
          ['Ready-made WhatsApp message', 'English and Arabic, with name, plan, amount and expiry filled in.'],
          ['Start on payment or date', 'The plan begins when they pay, or on the date you choose.'],
          ['Links that expire', 'Links expire after a time you set, and you can resend or cancel them.'],
          ['Every link in one list', 'See each link as open, paid, expired, cancelled or needing attention.'],
          ['A tidy preview in chat', 'The link shows your logo and the plan in WhatsApp.'],
        ],
      },
      {
        t: 'Online payments',
        items: [
          ['Apple Pay, BenefitPay and cards', 'Members pay by card, Apple Pay, Google Pay or BenefitPay.'],
          ['Your own branded pay page', "Your logo on your gym's own web address, in English or Arabic."],
          ['Payment received screen', 'Members see the amount, method and invoice number once paid.'],
          ['Money goes to your account', 'Each gym has its own merchant account with Tap, the Gulf payment provider.'],
        ],
      },
      {
        t: 'Payments at the desk',
        items: [
          [
            'Every method Bahrain uses',
            'Cash, card, bank transfer, BenefitPay, vouchers and cheque, each with the right details.',
          ],
          ['Card brands including Benefit', 'Visa, Mastercard, Benefit, Benefit QR and American Express.'],
          ['Corporate and gift vouchers', 'Record company-paid memberships and gift cards as payments.'],
          ['Split payments', 'One sale paid by two cards and cash, always adding up to the total.'],
          ['Attach the payment slip', 'Upload the card-machine slip or transfer screenshot to the payment.'],
          ['Fix a payment later', 'Change the method or split on a past sale, and the change is logged.'],
        ],
      },
      {
        t: 'Refunds and safety nets',
        items: [
          ['Refunds back to the card', "Refund an online sale and the money goes back to the member's card."],
          [
            'Paid twice, refunded automatically',
            'If a member pays the same link twice, the extra payment is refunded.',
          ],
          ['No payment left hanging', 'Unfinished payments are checked every few minutes and completed or flagged.'],
          ['Needs-attention list', 'If money arrived but the plan did not start, staff fix it or refund it.'],
          ['Partial refunds at the desk', 'Refund any amount with a reason, shown as a deduction in your totals.'],
        ],
      },
      {
        t: 'Seeing your money',
        items: [
          ['Revenue by payment method', 'Totals for each method over any period.'],
          ['Sales by channel', 'Filter sales from the desk, the till or payment links.'],
          ['Find any online payment', 'Search by the link reference to find a payment fast.'],
        ],
      },
    ],
    faq: [
      [
        'Which payment methods can I record?',
        'Cash, card, bank transfer, BenefitPay, vouchers and cheque. You can split one sale across several.',
      ],
      [
        'Can members pay with Apple Pay and BenefitPay?',
        'Yes, payment links accept card, Apple Pay, Google Pay and BenefitPay.',
      ],
      [
        'What happens after a member pays a link?',
        'The membership starts and the sale and invoice are recorded automatically.',
      ],
      ['How do online payments reach my bank?', 'Through your own Tap merchant account, which we set up for you.'],
      ['How do I refund an online payment?', "Refund the sale as usual and the money goes back to the member's card."],
    ],
  },
  {
    slug: 'invoicing',
    name: 'Invoicing and accounting',
    group: 'Money',
    promise: 'A correct VAT invoice for every sale, and your month on one page.',
    summary:
      'Every membership, PT pack and till sale gets a VAT invoice automatically, numbered in order and carrying your logo, CR and VAT number. The accounting page shows revenue, VAT collected, payroll and an approximate profit, and every report downloads as a PDF or spreadsheet.',
    show: 'screen:Accounting',
    groups: [
      {
        t: 'VAT invoices',
        items: [
          [
            'An invoice for every sale',
            'Memberships, upgrades, PT packs, till sales and manual sales are all invoiced.',
          ],
          [
            'Numbers that never skip',
            'Separate numbering for the till, memberships and PT, with no gaps, restarting each year.',
          ],
          ['VAT worked out for you', 'Enter the VAT-inclusive price and the split is calculated, 10% by default.'],
          ['Bill to a company', 'Bill an invoice to the member, another person, or a company with its CR.'],
          ['Walk-in invoices', 'Till sales without a member are invoiced as walk-in.'],
          ['Invoices by email', 'Attach the invoice to an automatic email after each sale.'],
        ],
      },
      {
        t: 'Your details on documents',
        items: [
          ['Legal name, CR and VAT', 'Set them once and they print on every invoice.'],
          ['Logo, colours and layout', 'Your logo, accent colour, page size and orientation.'],
          ['Company footer', 'Address, phone, email and CR number at the foot of every page.'],
          ['Footer note and print date', 'Add a line like confidential, for internal use only.'],
          ['Preview before you save', 'Generate a sample document with your branding.'],
        ],
      },
      {
        t: 'Sales records',
        items: [
          ['Every sale in one list', 'Invoice, date, member, item, net, VAT, total, method and who sold it.'],
          ['Correct a sale', 'Fix the amount, date, VAT or bill-to, and every change is logged.'],
          ['Move a sale between members', 'Everything it created moves with it, and the invoice is regenerated.'],
          [
            'Refund or void',
            'Refunds show as deductions, and voided mistakes leave your totals but keep their number.',
          ],
          ['Restock on refund', 'Choose how many items go back on the shelf.'],
          ['Record a manual sale', 'Sell a towel or day pass without opening the till.'],
        ],
      },
      {
        t: 'Accounting overview',
        items: [
          ['Revenue and VAT, instantly', 'Gross and net revenue, VAT collected and transaction count for any period.'],
          ['Daily revenue chart', "See how each day's sales add up across the month."],
          ['Revenue by payment method', 'Cash, card and Benefit totals side by side.'],
          ['Payroll as an expense', 'Payroll costs sit next to revenue for each period.'],
          ['Approximate profit', 'Revenue minus payroll, clearly marked as approximate.'],
          ['Accounting on your phone', 'Sales and payroll summaries in the staff app.'],
        ],
      },
      {
        t: 'Reports and exports',
        items: [
          [
            'Sales report for your accountant',
            'Net, VAT, gross and refunds, by method and line by line, as PDF or spreadsheet.',
          ],
          ['Branded invoice PDFs', 'Download any invoice as a PDF with your logo.'],
          ['Export from accounting', 'Download the accounting figures as a spreadsheet.'],
          ['Report history', 'Every report and export your team made, with who and when.'],
        ],
      },
    ],
    faq: [
      [
        'Are the invoices VAT-compliant for Bahrain?',
        'Yes, each invoice shows your legal name, CR and VAT number, with net, VAT and total. Numbers run in order with no gaps and restart each year.',
      ],
      [
        'Can I invoice a company instead of the member?',
        'Yes, choose to bill a company and enter its name and CR number.',
      ],
      [
        'What happens to the invoice if I void a sale?',
        'The sale drops out of your totals, but its invoice number is kept so your numbering stays complete.',
      ],
      [
        'Can my accountant get the data?',
        'Yes, the sales report downloads as a PDF or spreadsheet with net, VAT and gross for every sale.',
      ],
      [
        'Does it show profit?',
        'It shows an approximate profit: revenue minus payroll for the period. Other expenses are not included.',
      ],
    ],
  },
  {
    slug: 'hr-payroll',
    name: 'HR and payroll',
    group: 'Running the business',
    promise: 'Rosters, clock-ins, leave and payroll with GOSI and WPS, in one place.',
    summary:
      'Keep every staff file, shift and leave balance together, and let staff clock in, request leave and read payslips on their phone. At month end, generate payroll with GOSI, allowances and deductions worked out, then export the WPS salary file.',
    show: 'screen:Payroll',
    groups: [
      {
        t: 'Staff files',
        items: [
          [
            'Complete employee profiles',
            'Job, department, contract type, start date, probation, notice period and weekly hours.',
          ],
          [
            'Identity and expat documents',
            'CPR, nationality, passport, visa and work permit numbers and expiry dates.',
          ],
          ['Bank details', 'Bahrain bank, account holder and IBAN, ready for payroll.'],
          ['Employment timeline', 'Every status and salary change on one timeline.'],
          ['Nothing slips', 'Badges flag overdue probation and missing information on the staff list.'],
          ['Hire a member', 'Turn an existing member into staff without typing them again.'],
          ['Offboarding with a pay estimate', 'See leave encashment and notice pay before you sign off.'],
        ],
      },
      {
        t: 'Shifts and rosters',
        items: [
          ['Weekly shift board', 'A week grid per branch where you drag shifts and assign staff.'],
          ['Repeating shifts', 'Save a pattern once and generate the weeks ahead in one go.'],
          ['Team today', 'Who is in, arriving soon, scheduled, absent or gone home, across branches.'],
          ['Scheduled against actual', 'Each shift marked on time, late, left early or unscheduled.'],
          ['Lateness rules', 'Choose how strict attendance is, with a grace period and early clock-in window.'],
          ['Rest days your way', 'Set rest days per branch and per person, so leave counts working days.'],
        ],
      },
      {
        t: 'Clock-in and attendance',
        items: [
          ['Clock in at the branch', 'Staff clock in from the staff app, and only at their branch.'],
          ['Branch area on a map', 'Drop a pin, set the distance, and exempt drivers or outdoor coaches.'],
          ['Forgot to clock in', 'Staff add the time with a reason, and it counts once a manager approves.'],
          ['Approval queue', 'Self-entered time and outside-the-branch clock-ins wait for a manager, on web or phone.'],
          ['Full edit history', 'Every change shows who, what and why, and removed entries stay on record.'],
          ['Forgotten clock-outs closed', 'Open entries left overnight are closed and marked automatically.'],
          ['Attendance calendar', 'Day, week and month views per person, with hours totals.'],
        ],
      },
      {
        t: 'Leave and holidays',
        items: [
          [
            'Balances that run themselves',
            'Days build up monthly from each contract start, with carryover and expiry.',
          ],
          [
            'Your own leave types',
            'Annual, sick or anything you name, with entitlement, carryover cap and minimum service.',
          ],
          ['Pay while on leave', 'Full, half, unpaid or tiered by days used, as for sick leave.'],
          ['Public holidays', 'Your holiday calendar is left out of leave day counts.'],
          [
            'Leave from the phone',
            'Staff request leave with a document, and managers approve or reject with a reason.',
          ],
          ['Working days shown first', 'Staff see how many working days a request uses before sending.'],
        ],
      },
      {
        t: 'Payroll',
        items: [
          [
            'WPS salary file',
            'Export the WPS salary file from a finalised month, with missing bank details listed first.',
          ],
          ['GOSI built in', "Employee and employer rates by date, with each person's GOSI number and overrides."],
          ['Salary profiles', 'Monthly salary or hourly rate, effective from any date.'],
          ['Allowances and deductions', 'Name your own, like housing or transport, and attach them per person.'],
          [
            'Commission and bonuses',
            "Enter each person's monthly commission, bonuses and overtime as their own payslip lines.",
          ],
          ['Overtime and holiday pay', 'Set the rates, and unpaid leave is deducted automatically.'],
          ['Payroll periods', 'Generate, review totals and finalise to lock, per branch or for the whole business.'],
        ],
      },
      {
        t: 'Payslips',
        items: [
          ['Branded payslips', 'Your logo and footer, with earnings, deductions, GOSI and year-to-date.'],
          ['All slips in one download', 'Download, print or export the whole period at once.'],
          ['Payslips on the phone', 'Staff open their slips in the staff app behind Face ID or Touch ID.'],
        ],
      },
    ],
    faq: [
      [
        'Can staff clock in from home?',
        "Not unless you allow it. Clocking in works only at the branch, and anything else waits for a manager's approval.",
      ],
      [
        'Does it handle GOSI?',
        'Yes, GOSI rates are set by date, and each person can have their own number and overrides. Employee and employer shares appear on every payslip.',
      ],
      [
        'Can I pay part-timers by the hour?',
        'Yes, salary profiles can be hourly, and the payslip shows hours worked and the rate.',
      ],
      [
        'How do I pay salaries through WPS?',
        'Finalise the month and export the WPS salary file. Staff with missing bank details are listed before you download.',
      ],
      [
        'Do staff need a computer?',
        'No, the staff app covers clock-in, shifts, leave requests and payslips, in English and Arabic.',
      ],
    ],
  },
  {
    slug: 'automations',
    name: 'Automations',
    group: 'Running the business',
    promise: 'Birthday, renewal and win-back messages that send themselves.',
    summary:
      'Build a flow on a visual canvas: pick what starts it, choose who it is for, then send an email or WhatsApp message. Start from ready-made templates, check who it will reach before switching it on, and see every send in the history.',
    show: 'flow:auto',
    groups: [
      {
        t: 'What starts it',
        items: [
          ['Before or after a date', "Up to 365 days around a plan's end or start, a join date or last visit."],
          ['When something happens', '22 moments, from a new member or check-in to a renewal, freeze or sale.'],
          ['Membership moments', 'Created, renewed, upgraded, frozen, extended, cancelled, started or expired.'],
          [
            'Visits, classes and sales',
            'Visit days used up, a class booking or cancellation, or a sale completed or refunded.',
          ],
          ['Birthdays and anniversaries', 'Greet members on their birthday or the anniversary of joining.'],
          ['On a schedule', 'Every day, week or month, at the hour you choose.'],
          ['Run by hand', 'Press run now whenever you like.'],
        ],
      },
      {
        t: 'Who it is for',
        items: [
          ['Filter on anything', 'Name, gender, birthday, status, join date, last check-in, plan or visit days left.'],
          ['Plans, sales and classes', 'Filter by plan, price, sale amount, sale type, class name or room.'],
          ['Your own profile fields', 'Any field you added to member profiles can be a filter.'],
          ['Plain-English rules', 'Equals, contains, is today, within the next few days, before or after.'],
          ['All or any', 'Require every condition to match, or just one of them.'],
          ['Yes and no paths', 'Send one message to members who match and another to those who do not.'],
        ],
      },
      {
        t: 'What it sends',
        items: [
          ['Email and WhatsApp', 'Message the member by email or WhatsApp, or email your manager.'],
          ['Personal details filled in', "Insert the member's name, plan, end date or visit days left with one click."],
          ['Invoice attached', 'Sale flows can attach the branded invoice PDF to the email.'],
          ['Several messages per flow', 'Chain more than one send after a trigger or filter.'],
          ['Sent from your domain', 'With your own web address, emails come from your gym.'],
        ],
      },
      {
        t: 'Building safely',
        items: [
          [
            'Six ready-made templates',
            'Birthday, expiring in 7 days, welcome, win-back, visit days low and class cancelled.',
          ],
          ['Visual canvas', 'See the whole flow, from what starts it to what it sends.'],
          ['Check before you send', 'A dry run shows how many members match, with the first 50 listed.'],
          ['Send-to-everyone guard', 'A flow with no filter asks you to confirm before it goes out.'],
          ['Off until you say so', 'Saved flows stay off until you enable them, and can be archived.'],
          ['Sensible send times', 'Date-based messages go from 09:00 gym time, only to active members.'],
        ],
      },
      {
        t: 'Run history',
        items: [
          ['Every send tracked', 'Each member shows as sent, delivered, bounced, skipped or failed, with the reason.'],
          ['Every run listed', 'Each run marked completed, partly delivered or failed.'],
          ['Never sent twice', 'Each member gets each message once, even if a run is retried.'],
        ],
      },
    ],
    faq: [
      [
        'Can it remind members before their membership ends?',
        'Yes, use the expiring in 7 days template, or pick any number of days before the end date.',
      ],
      ['Does it send WhatsApp messages?', 'Yes, each flow can send an email, a WhatsApp message or both.'],
      [
        'Will it message everyone by mistake?',
        'No, a flow with no filter asks you to confirm first. A dry run shows exactly how many members match.',
      ],
      [
        'Can I see if the message arrived?',
        'Yes, the history shows each member as sent, delivered, bounced or skipped, with the reason.',
      ],
      [
        'Can I send the invoice automatically after a sale?',
        'Yes, a flow that starts on a completed sale can attach the invoice PDF to the email.',
      ],
    ],
  },
  {
    slug: 'reports',
    name: 'Reports and analytics',
    group: 'Running the business',
    promise: 'Know how the gym is really doing, without building a spreadsheet.',
    summary:
      'A live dashboard for today, an analytics page that compares any period with the one before, and branded reports for sales, VAT and members. Owners get the same numbers on their phone.',
    show: 'screen:Analytics',
    groups: [
      {
        t: "Today's dashboard",
        items: [
          ['Today at a glance', 'Classes, new members and sales today, the moment you log in.'],
          ['Key numbers', 'New members, active members, transactions and sales for today, 7 or 30 days.'],
          ['Quick actions', 'Add a member, schedule a class or assign a plan in one click.'],
          ['Book from the dashboard', "Today's classes with booking, right on the home page."],
          ['Owner dashboard on your phone', 'Revenue with trend, active members, who is in and top packages.'],
        ],
      },
      {
        t: 'Analytics for any period',
        items: [
          ['Compare with last period', 'Overlay the previous period on every chart with one switch.'],
          ['Revenue', 'Gross and net over time, and a split by cash, card and Benefit.'],
          ['Membership health', 'New against cancelled memberships each month, with status and trend.'],
          ['Renewals and churn', 'How many stayed, renewed or left, with your churn rate.'],
          ['Peak hours heatmap', 'Attendance by day and hour, so you staff the busy times.'],
          ['Top members and classes', 'Your highest spenders and the classes that fill up.'],
          ['Insights in plain words', 'Automatic notes, like a warning when churn runs high.'],
        ],
      },
      {
        t: 'Reports and exports',
        items: [
          [
            'Sales and VAT report',
            'Any dates, branch or method, with net, VAT, gross and refunds, as PDF or spreadsheet.',
          ],
          ['Member profile report', "One member's details, sales history and attendance as a PDF."],
          ['Branded PDFs', 'Invoices and payslips carry your logo and footer.'],
          ['Spreadsheet exports', 'Export analytics, the member list and payroll periods.'],
          ['Export history', 'Every report and export your team made, with who and when.'],
          ['Reports from your phone', 'Run a sales report by period and branch, and open it on your phone.'],
        ],
      },
      {
        t: 'Team and branches',
        items: [
          [
            'Branch comparison',
            'Members, revenue this month, active plans and utilisation for every branch side by side.',
          ],
          ['HR at a glance', 'Headcount, who is on leave, attendance rate and attendance by branch.'],
          ['Profit and loss overview', 'Revenue by method, payroll costs and an approximate profit.'],
        ],
      },
    ],
    faq: [
      [
        'Can I see my VAT for the quarter?',
        'Yes, run the sales report for any dates and it totals net, VAT and gross, as a PDF or spreadsheet.',
      ],
      ['Can I compare this month to last month?', 'Yes, switch on compare with previous period on the analytics page.'],
      [
        'Can I check the numbers away from the gym?',
        'Yes, the owner dashboard and sales reports are in the staff app.',
      ],
      [
        'Which branch is doing best?',
        'The branches page shows you, comparing members, revenue this month, active plans and utilisation for each branch.',
      ],
    ],
  },
  {
    slug: 'branches',
    name: 'Branches, roles and branding',
    group: 'Running the business',
    promise: 'Every branch in one account, each person seeing only their part.',
    summary:
      'Add branches, switch between them or see the whole business at once, and give staff ready-made roles for one branch or all. Your logo, colour and company details go on every invoice, payslip and email, on your own web address.',
    show: 'screen:Branding',
    groups: [
      {
        t: 'Branches',
        items: [
          ['One branch or all', 'Switch between a single branch and the whole business in one click.'],
          ['Every branch set up', 'Each branch has its own code and address, and archiving keeps its history.'],
          ['Branch page', 'Members, revenue this month, staff and payment methods for each branch.'],
          ['Branch comparison', 'Members, revenue, active plans and utilisation side by side.'],
          ['Staff by branch', "Assign staff to one or more branches, and they pick today's branch in the app."],
          ['Rules per branch', 'Clock-in area, rest days and payroll periods set branch by branch.'],
        ],
      },
      {
        t: 'Roles and access',
        items: [
          ['Ready-made roles', 'Owner, manager, HR, accountant, sales, reception, trainer and employee, ready to use.'],
          ['Your own roles', 'Tick exactly what a role can see and do, with sensitive items marked.'],
          ['One branch or everywhere', 'Give someone a role for one branch or the whole business.'],
          ['Invite staff', 'Add name, email or phone, role and branch, and they get their own login.'],
          ['Roles follow the job title', 'New hires get the right access from their job title automatically.'],
          ['Menus show only what fits', 'Staff see only the pages they can use, on web and phone.'],
        ],
      },
      {
        t: 'Branding and documents',
        items: [
          ['One logo everywhere', 'Upload once and it appears in the app, the browser tab and documents.'],
          ['Your brand colour', 'Pick a colour with a live preview and a readability check.'],
          ['Document style', 'Pick the layout, orientation and footer, with your CR, address and contact details.'],
          ['Live preview', 'See a sample payslip or report before you save.'],
          ['Legal and VAT details', 'Registered name, CR and VAT number on every invoice.'],
          ['Your agreement and privacy page', 'Your own membership agreement at sign-up and a public privacy policy.'],
          ['Member numbers your way', 'Choose the prefix for your member numbers.'],
        ],
      },
      {
        t: 'Your own web address',
        items: [
          ['Custom domain', 'Run the app and payment pages on your own address, like app.yourgym.com.'],
          ['Emails from your gym', 'Invites, password resets and automations come from your own domain.'],
          ['No domain needed to start', 'Use our email sender until your own domain is connected.'],
        ],
      },
      {
        t: 'Desktop and updates',
        items: [
          ['Desktop app for every gym', 'A Windows and Mac app for the front desk, with ID readers and turnstiles.'],
          ["What's new, explained", 'An update badge and release notes with pictures for every new version.'],
          ['Nothing reloads mid-sale', 'Updates wait until you are ready, so no sale is interrupted.'],
          [
            'Change history where it counts',
            'Attendance edits, employment and salary changes, and role changes, with who and when.',
          ],
        ],
      },
    ],
    faq: [
      [
        'Can a receptionist see revenue?',
        'Only if you allow it. Each role controls what it sees, and revenue can be hidden on its own.',
      ],
      [
        'Can a manager see only their own branch?',
        'Yes, a role can be given for one branch or for the whole business.',
      ],
      [
        'Will invoices and payslips carry my logo?',
        'Yes, your logo, colour and CR and VAT footer go on invoices, payslips and reports.',
      ],
      [
        'Can I use my own domain?',
        'Yes, connect an address like app.yourgym.com, and emails go out from your gym too.',
      ],
      [
        'Is there a desktop app?',
        'Yes, every gym gets the Windows and Mac app for the front desk. It connects ID card readers and turnstiles.',
      ],
    ],
  },
]
