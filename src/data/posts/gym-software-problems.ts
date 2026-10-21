import type { Post } from '../posts'

// Source: docs/research/2026-10-gym-software-complaints (report.html). Every quote was read on its source page.
// Recheck a quote before reusing it, and keep its date. Gym Thing answers only use what the report claims.
export const post: Post = {
  slug: 'gym-software-problems',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['research', 'gym-software'],
  en: {
    title: 'What gym owners are fed up with in their software',
    seoTitle: 'Gym software problems: what gym owners are fed up with',
    description:
      'Twelve gym software problems that owners and front desks keep reporting, in their own words with sources, and how Gym Thing handles each one.',
    lede: "We read what owners and front-desk teams wrote about their gym software between 2025 and October 2026, on review sites, vendor policy pages, app stores and owner forums. Twelve problems came up again and again. Here they are, in owners' own words, with what Gym Thing does about each one. At the end, we look at three systems sold in the Gulf: Tamarran, Gymnago and FLYBY.",
    blocks: [
      {
        type: 'note',
        text: "How we did this. Every quote below links to the page we read it on, with its date. We only quote reviews we could open and read in full. Most come from Trustpilot, Apple's App Store, vendors' own pages and Reddit's r/gymowner and r/crossfit (21 Sep to 21 Oct 2026). A review is one person's experience, not proof of how every gym gets on with a product. We picked problems that showed up across several products and several reviewers.",
      },
      { type: 'heading', id: 'summary', text: 'Twelve problems, and our answer to each' },
      {
        type: 'list',
        items: [
          '[Prices that climb after the first year](#price): one yearly price by gym size, every module included.',
          '[Contracts that renew themselves](#contracts): up to 3 months free, with your real members, before you pay.',
          '[Support that disappears after you sign](#support): WhatsApp, phone and email, 7 days a week, same-day replies.',
          "[Members charged wrongly, or not at all](#billing): a plan starts when it's paid, and double payments are refunded.",
          '[Stuck with one card processor](#processing): payments go to your own account, and we take no cut.',
          '[Systems that fail at the busiest moment](#outages): daily backups, a standby database, and a person on WhatsApp.',
          '[Paying to leave with your own data](#data): we move your members over, and you can export any time.',
          '[Screens your staff need weeks to learn](#learning): we set it up and train your team, usually within a week.',
          "[Member apps that break or never arrive](#apps): an app in your gym's name, and a door that doesn't need it.",
          '[Renewals chased by hand](#renewals): reminder emails, and a pay link on WhatsApp in one tap.',
          '[Members who want to train outside class times](#access): plans with their own door hours and visit rules.',
          '[Software built for somewhere else](#gulf): BenefitPay, Arabic, VAT invoices, GOSI and WPS.',
        ],
      },

      { type: 'heading', id: 'price', text: 'Prices that climb after the first year' },
      {
        type: 'text',
        paras: [
          "The owner's software bill doubles with no warning and no reward for staying, and the front desk is left explaining price changes the gym never planned for.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"They increased the price by over 100% following my 2nd year with them."',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '1 Mar 2025',
          },
          {
            quote: '"I currently use Mindbody but the $900/month is ridiculous."',
            source: 'Owner of a 300-client gym, r/gymowner',
            url: 'https://www.reddit.com/r/gymowner/comments/1wr3eus/hello_i_run_a_300_client_gym_that_focuses_on/',
            date: '26 Sep 2026',
          },
          {
            quote: '"Their prices increase every year with no additional benefit."',
            source: 'Trustpilot review of Zen Planner',
            url: 'https://ie.trustpilot.com/review/zenplanner.com',
            date: '14 Apr 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'One yearly price, with everything in it',
        points: [
          'You pay one yearly price set by the size of your gym. Nothing is sold as an add-on.',
          'Memberships, the door, the till, classes and PT are all in it.',
          'So are payroll, payments, automations and every branch, along with setup, training and moving your members over.',
          "There's no setup fee. We tell you your price while we set up your free trial, so you can compare it with what you pay today.",
        ],
      },
      {
        type: 'text',
        paras: [
          'Read more: [What gym software really costs after the first year](/blog/price-contracts-and-your-data/)',
        ],
      },

      { type: 'heading', id: 'contracts', text: 'Contracts that renew themselves' },
      {
        type: 'text',
        paras: [
          "The owner is stuck paying for a year of software that isn't working, and charged again after cancelling, while the front desk keeps working around a tool the owner is trying to leave.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'Contracts "automatically renew at the end of the current term". Cancelling takes "at least 30 days\' notice", and "Cancellation is not available mid-term unless otherwise stated in your Order Form".',
            source: "Mindbody's own contracts page",
            url: 'https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data',
            date: 'updated 12 Mar 2026',
          },
          {
            quote: '"auto renews for a 12 month contract that I was never told about"',
            source: 'Trustpilot review of Mindbody',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com',
            date: '20 Oct 2026',
          },
          {
            quote:
              '"Tried to cancel 3 times, was persuaded not to - when finally cancelled was charged for a further month."',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=2',
            date: '10 Nov 2025',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'Try it on your real gym before you pay',
        points: [
          'You can run Gym Thing free for up to 3 months before paying anything.',
          'We move your members over for the trial, so you judge it on your own members, plans and staff, not a demo.',
          "You can keep your current system running alongside until you're sure.",
        ],
      },
      {
        type: 'text',
        paras: [
          'Read more: [What gym software really costs after the first year](/blog/price-contracts-and-your-data/)',
        ],
      },

      { type: 'heading', id: 'support', text: 'Support that disappears after you sign' },
      {
        type: 'text',
        paras: [
          'Problems that cost the owner money sit for days, worst of all at weekends, and the front desk faces upset members with no fix and nobody to call.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"they told me to wait until Monday"',
            source: 'Trustpilot review of Mindbody from a business open 7 days a week',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com?page=3',
            date: '27 Sep 2026',
          },
          {
            quote: '"the moment we signed on and became paying customers, that support disappeared."',
            source: 'Trustpilot review of WellnessLiving',
            url: 'https://www.trustpilot.com/review/wellnessliving.com',
            date: '1 Jun 2026',
          },
          {
            quote: '"You could talk to 4 different employees and get 4 totally different conflicting answers."',
            source: 'Trustpilot review of Mindbody',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com',
            date: '13 Oct 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'A person on WhatsApp, 7 days a week',
        points: [
          'Gyms open at weekends, so we do too.',
          'Message us on WhatsApp, call or email any day of the week and you get a reply the same day, in Arabic or English.',
          '[WhatsApp +973 3993 6601](https://wa.me/97339936601) or [support@thing.bh](mailto:support@thing.bh)',
        ],
      },
      {
        type: 'text',
        paras: [
          'Read more: [Slow setup, weeks of training, and support that goes quiet](/blog/setup-and-staff-training/)',
        ],
      },

      { type: 'heading', id: 'billing', text: 'Members charged wrongly, or not at all' },
      {
        type: 'text',
        paras: [
          'The owner loses revenue and members stop trusting the gym with their card, while the front desk spends the day on refunds and apologies.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"some members are attending classes for free" while "others are being charged without making a purchase"',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '10 Mar 2025',
          },
          {
            quote: '"customers have been charged for memberships we never created and overcharged for others,"',
            source: 'Trustpilot review of WellnessLiving',
            url: 'https://www.trustpilot.com/review/wellnessliving.com',
            date: '1 Jun 2026',
          },
          {
            quote: '"the platform continued attempting to bill customers after information had been removed."',
            source: 'Trustpilot review of Zen Planner',
            url: 'https://ie.trustpilot.com/review/zenplanner.com',
            date: '4 Jun 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: "A plan starts when it's paid, and not before",
        points: [
          'Sell a plan at the desk, or send a payment link. The plan starts the moment the member pays.',
          'Every online payment is matched to its sale. If a member pays twice, the extra payment is refunded.',
          'Every sale gets a VAT invoice, numbered with no gaps.',
          'Only members with a valid plan get through the door.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks',
        caption: "Payment links in Gym Thing, each showing whether it's open, paid, expired or needs attention.",
      },
      {
        type: 'text',
        paras: [
          'Read more: [Billing that charges the right member, and money that reaches you](/blog/billing-that-charges-right/)',
        ],
      },

      {
        type: 'heading',
        id: 'processing',
        text: 'Stuck with one card processor, and waiting for your own money',
      },
      {
        type: 'text',
        paras: [
          "The owner loses 3 to 5% of every payment in fees they can't negotiate, and payouts can stop without warning, while the front desk explains card surcharges to members.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"I am obliged to use your Credit Card payment processor (CardPointe) which is super expensive (~3.5%)."',
            source: 'Trustpilot review of Zen Planner',
            url: 'https://ie.trustpilot.com/review/zenplanner.com',
            date: '18 Jul 2025',
          },
          {
            quote: '"Recently they have withheld all our money earned through credit card transactions."',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '12 Mar 2025',
          },
          {
            quote: '"My funds are being withheld for proof of ownership."',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com',
            date: '9 Oct 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          "PushPress publishes card fees of 4.99% + 30¢ on its free plan and 2.89% + 30¢ on its Pro plan ([PushPress pricing](https://pushpress.com/pricing), read 21 Oct 2026). That's a published price, not a complaint.",
        ],
      },
      {
        type: 'answer',
        heading: 'Your payments go to your account, and we take no cut',
        points: [
          "Card and wallet payments go straight into your gym's own account with Tap, a licensed payment provider.",
          "Gym Thing takes no commission on them. Tap's fees and payout times are agreed between you and Tap.",
          'Members pay however they like: BenefitPay, Apple Pay, Google Pay, cards, cash or a payment link.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'A payment link sent on WhatsApp, and the pay page it opens.',
      },
      {
        type: 'text',
        paras: [
          'Read more: [Billing that charges the right member, and money that reaches you](/blog/billing-that-charges-right/)',
        ],
      },

      { type: 'heading', id: 'outages', text: 'Systems that fail at the busiest moment' },
      {
        type: 'text',
        paras: [
          'The owner loses sales and makes a bad first impression, often in opening week, while check-in and checkout stop at the front desk and members queue.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"the software has repeatedly failed since my Grand Opening earlier this month"',
            source: 'Trustpilot review of Mindbody',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com?page=3',
            date: '28 Sep 2026',
          },
          {
            quote: '"the last 10 months of constant errors has cost our business between £30,000 to £40,000"',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '24 Feb 2025',
          },
          {
            quote: '"users may experience inconsistent or incomplete page loading."',
            source: "Mindbody's own status page",
            url: 'https://status.mindbodyonline.com/incidents/csrn1wm6wcrc',
            date: '5 to 6 Aug 2025',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'Your data is safe, and a person answers',
        points: [
          'Your data is encrypted and backed up every day.',
          'A standby copy of your database is ready if the main one has a problem.',
          "If a payment gets stuck, it's checked and finished or refunded.",
          'If something does go wrong, you reach a person on WhatsApp the same day.',
        ],
      },

      { type: 'heading', id: 'data', text: 'Paying to leave with your own data' },
      {
        type: 'text',
        paras: [
          'The owner pays to get their own members back and risks weeks of lost billing during the move, while the front desk re-types members after a bad import.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'Mindbody "offers a data export service for an added fee". After the account is closed, "you will no longer be able to access the data".',
            source: "Mindbody's own contracts page",
            url: 'https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data',
            date: 'updated 12 Mar 2026',
          },
          {
            quote: '"they wanted to charge me £600 to transfer members payment details"',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '1 Mar 2025',
          },
          {
            quote:
              '"Still don\'t have my database export, that I paid for and wasn\'t able to bill my students for 6 weeks now."',
            source: 'Trustpilot review of Zen Planner',
            url: 'https://www.trustpilot.com/review/zenplanner.com?page=3',
            date: '2 Apr 2024',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'We do the move, and your data stays yours',
        points: [
          'We move your members, plans and history over as part of setup, at no extra cost.',
          'You see a preview before anything goes live.',
          'Any time after that, you can download your members, memberships, accounts, analytics and payroll as spreadsheets.',
        ],
        module: 'members',
      },
      {
        type: 'screen',
        show: 'screen:Members',
        caption: "One member's page in Gym Thing, with their plan, balance and history.",
      },
      {
        type: 'text',
        paras: [
          'Read more: [What gym software really costs after the first year](/blog/price-contracts-and-your-data/)',
        ],
      },

      { type: 'heading', id: 'learning', text: 'Screens your staff need weeks to learn' },
      {
        type: 'text',
        paras: [
          'The owner pays for training again every time a staff member leaves, and new hires at the front desk make mistakes on busy screens.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"This is the worst most unuser friendly, confusing one I have ever used."',
            source: 'Trustpilot review of TeamUp',
            url: 'https://www.trustpilot.com/review/goteamup.com',
            date: '12 Jan 2025',
          },
          {
            quote: '"the system is so rigid and convoluted"',
            source: 'Trustpilot review of WellnessLiving',
            url: 'https://www.trustpilot.com/review/wellnessliving.com',
            date: '1 May 2026',
          },
          {
            quote: '"The system is challenging to get used to and onboarding is a beast (but worth it)."',
            source: 'Trustpilot review of Exercise.com',
            url: 'https://www.trustpilot.com/review/exercise.com?page=2',
            date: '17 Nov 2025',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'We set it up and train your team',
        points: [
          'Most gyms are live within a week. We set up your plans, branches and payments, move your members over and train your staff.',
          "Freeze, extend or upgrade a plan from the member's page, and the end date updates itself.",
          'The till is built for a busy counter.',
          'Staff clock in, request leave and see payslips in their own app.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'Plans in Gym Thing: packages, lengths, prices and access hours on one screen.',
      },
      {
        type: 'text',
        paras: [
          'Read more: [Slow setup, weeks of training, and support that goes quiet](/blog/setup-and-staff-training/)',
        ],
      },

      { type: 'heading', id: 'apps', text: 'Member apps that break, and branded apps that never arrive' },
      {
        type: 'text',
        paras: [
          'For members, the app is the gym, so its bugs cost the owner members, and the front desk turns into app support, walking members through reinstalling.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"We have to constantly ask members to delete and re-download the app"',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=4',
            date: '24 Apr 2025',
          },
          {
            quote:
              '"I signed up to Glofox after being promised during the sales call that my package would include a branded app."',
            source: 'Trustpilot review of ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com',
            date: '5 Jun 2026',
          },
          {
            quote: '"Have waited months for "branded app" only to be told there is a technical issue"',
            source: 'Trustpilot review of Zen Planner',
            url: 'https://www.trustpilot.com/review/zenplanner.com?page=3',
            date: 'Oct 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: "An app in your gym's name, and a door that doesn't need it",
        points: [
          "Your member app carries your gym's name in the app stores, in Arabic and English. We build it for you.",
          'Members see their plan, book classes and log workouts.',
          'Nobody needs the app to get in. A pass in Apple or Google Wallet, or a QR code, opens the door.',
        ],
        module: 'member-app',
      },
      {
        type: 'screen',
        show: 'screen:MemberApp',
        caption: 'The member app: a check-in QR code, and classes to book.',
      },
      {
        type: 'text',
        paras: [
          'Read more: [Why gym member apps break, and what to ask before you pick one](/blog/member-apps-that-work/)',
        ],
      },

      { type: 'heading', id: 'renewals', text: 'Renewals chased by hand' },
      {
        type: 'text',
        paras: [
          'Members drift away when their plan quietly ends, and the front desk spends hours messaging them one by one.',
          "In October 2026, an [r/gymowner thread](https://www.reddit.com/r/gymowner/comments/1wxeguy/gym_owners_would_you_let_your_management_software/) asked owners whether they would let their software send renewal reminders from the gym's own WhatsApp number. Several other October threads in the same community asked owners what annoys them most about their software, and what it really costs them in money and time.",
        ],
      },
      {
        type: 'answer',
        heading: 'Reminders go out, and paying takes one tap',
        points: [
          'Members get a reminder email before their plan ends, without anyone sending it.',
          'Plans ending in the next 14 days are flagged for your team.',
          "One tap on the member's page opens WhatsApp with a payment link ready to send.",
          "A renewal starts the day the current plan ends, so there's no gap.",
        ],
        module: 'memberships',
      },
      {
        type: 'text',
        paras: [
          'Read more: [Billing that charges the right member, and money that reaches you](/blog/billing-that-charges-right/)',
        ],
      },

      { type: 'heading', id: 'access', text: 'Members who want to train outside class times' },
      {
        type: 'text',
        paras: [
          'Members leave the owner for a gym with open hours, and the front desk lets people in by hand, or turns them away.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"If my box offered out of hours access or an open gym only membership I would have never left."',
            source: 'Comment in r/crossfit with 32 upvotes',
            url: 'https://reddit.com/r/crossfit/comments/1x735pn/comment/ph2dgow/',
            date: 'Oct 2026',
          },
          {
            quote: '"I actually left a gym because they didn\'t have sufficient open gym times or 24/7 access."',
            source: 'Comment in r/crossfit',
            url: 'https://www.reddit.com/r/crossfit/comments/1x735pn/gym_owners/',
            date: 'Oct 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'Plans with their own door hours',
        points: [
          "Sell open gym, off-peak, ladies' hours or 10-visit passes, each with its own access rules.",
          'The door lets in only members whose plan allows that time, through Gantner turnstiles, a phone tap or an iPad at reception.',
          'Every refusal shows the reason, so staff know what to say.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns+flow:access',
        caption: 'Every door scan in Gym Thing, with the reason for each refusal, and every way members get in.',
      },
      {
        type: 'text',
        paras: [
          'Read more: [The front door: why gym check-ins fail, and what a good setup needs](/blog/the-front-door/)',
        ],
      },

      { type: 'heading', id: 'gulf', text: 'Software built for somewhere else' },
      {
        type: 'text',
        paras: [
          "The owner can't take BenefitPay or local cards and pays for VAT and payroll tools on the side, while the front desk runs a second card machine and works in English with members who expect Arabic.",
          "Stripe's list of supported countries includes the UAE, but not Bahrain, Saudi Arabia, Kuwait, Qatar or Oman ([Stripe global availability](https://stripe.com/global), read 21 Oct 2026). Gym software that takes payments only through Stripe has the same gap.",
          'PushPress\'s pricing page names no Gulf country and says "Contact Sales for international pricing." ([PushPress pricing](https://pushpress.com/pricing), read 21 Oct 2026)',
        ],
      },
      {
        type: 'answer',
        heading: 'Made for gyms in the Gulf',
        points: [
          'BenefitPay, Apple Pay, Google Pay, cards and cash',
          'Payment links on WhatsApp, written in Arabic or English',
          'An Arabic member app, staff app and pay page',
          'A VAT invoice for every sale',
          'Payroll with GOSI and the WPS file',
        ],
        module: 'hr-payroll',
      },
      {
        type: 'screen',
        show: 'screen:Payroll',
        caption: 'Payroll in Gym Thing: pick the month, check each pay record, then finalise.',
      },
      {
        type: 'text',
        paras: [
          'Read more: [Gym software built for somewhere else, seen from a gym in Bahrain](/blog/built-for-the-gulf/)',
        ],
      },

      { type: 'heading', id: 'gulf-systems', text: 'Three systems sold in the Gulf: Tamarran, Gymnago and FLYBY' },
      {
        type: 'text',
        paras: [
          "These three don't show up on the big review sites, so we read their app store reviews instead. Each one publishes a branded app for every gym it serves, so most of these reviews come from members using their own gym's app. We translated reviews written in Arabic and Turkish, and left out reviews that complain about a gym rather than its software.",
        ],
      },

      { type: 'heading', id: 'tamarran', text: 'Tamarran: logins that fail, and a new app members call worse' },
      {
        type: 'text',
        paras: [
          "Tamarran Sports Online Services W.L.L. runs a sports booking marketplace and publishes branded apps for gyms and studios, mostly in Saudi Arabia and Bahrain. Members who can't log in can't book, and they blame the gym, so the front desk takes the bookings the app failed to make.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"The password is correct but it always says there\'s an error."',
            source: 'App Store review of PT PureGym KSA, published by Tamarran',
            url: 'https://apps.apple.com/sa/app/id6443764479?see-all=reviews',
            date: '27 Sep 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"very slow and bad application, can\'t reserve the class until many times , always an error"',
            source: 'Google Play review of PT PureGym KSA',
            url: 'https://play.google.com/store/apps/details?id=com.tamarran.puregym',
            date: '18 Nov 2025',
          },
          {
            quote: '"The first app was excellent, and now it\'s like begging."',
            source: 'Google Play review of PT PureGym KSA',
            url: 'https://play.google.com/store/apps/details?id=com.tamarran.puregym',
            date: '10 Jul 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"The app is stuck. I deleted it and downloaded it again, same thing."',
            source: 'Google Play review of the Tamarran app',
            url: 'https://play.google.com/store/apps/details?id=com.tamarran.app',
            date: '4 Apr 2026',
            note: 'translated from Arabic',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'If a gym cancels its software plan, Tamarran\'s refund policy says "All eligible refunds are subject to a 50% administrative fee", and refunds can take up to 30 business days ([Tamarran refund policy](https://tamarran.co/en/refund-policy/), last updated 04.11.2025). All five plans on its [pricing page](https://tamarran.co/en/pricing/) say "Get a Quote", and every plan includes a listing on the Tamarran app.',
        ],
      },
      {
        type: 'answer',
        heading: "Members get in without the app, and you pay only once you're sure",
        points: [
          'Nobody needs the app to get in. A pass in Apple or Google Wallet, a QR code, a phone tap or an iPad at reception opens the door.',
          'Run Gym Thing free for up to 3 months before paying anything.',
          'One price with every module included. No tiers to choose between.',
          'When a member is stuck, your team reaches a person on WhatsApp the same day.',
        ],
        module: 'access-control',
      },
      {
        type: 'text',
        paras: [
          'Read more: [Why gym member apps break, and what to ask before you pick one](/blog/member-apps-that-work/)',
        ],
      },

      { type: 'heading', id: 'gymnago', text: 'Gymnago: apps that freeze, and a door that wants your face' },
      {
        type: 'text',
        paras: [
          "Gymnago is made by Pixel Mind IT Solutions W.L.L. of Bahrain, which publishes a branded app for each gym it serves, mostly in Saudi Arabia and Bahrain. Members who can't sign up never become members, and the front desk fields complaints about the app and the door.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"I can\'t log in, the app freezes every time, very bad."',
            source: 'Google Play review of Iron House Gym KSA',
            url: 'https://play.google.com/store/apps/details?id=com.ironHouse.gym',
            date: '19 Aug 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"The application isn\'t working and i cant sign up"',
            source: 'App Store review of Fitness Maker',
            url: 'https://apps.apple.com/sa/app/id6744639286',
            date: '20 Nov 2025',
          },
          {
            quote: '"There\'s no option to log in to my account with my phone number."',
            source: 'Google Play review of Fleur Fit Gym',
            url: 'https://play.google.com/store/apps/details?id=com.fleurFit.gym',
            date: '3 Sep 2026',
            note: 'translated from Arabic',
          },
          {
            quote:
              '"Is not activating the bar Code entry feature, instead it uses Face Id … Which has personal data risk. Other Gyms uses QR code in the App."',
            source: 'App Store review of Gym 650',
            url: 'https://apps.apple.com/sa/app/id6741509582',
            date: '3 Aug 2025',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'Gymnago\'s [integrations page](https://gymnago.com/features/integrations) lists 18 payment options, including Knet, OmanNet and Apple Pay, but not BenefitPay. Its [terms](https://gymnago.com/termsAndCondition) say subscriptions renew automatically and "any paid amount is non-refundable once the subscription period has begun."',
        ],
      },
      {
        type: 'answer',
        heading: 'Any door you like, and BenefitPay built in',
        points: [
          'Choose how members get in: QR code, a wallet pass, a phone tap, Gantner turnstiles or an iPad at reception.',
          'Members pay with BenefitPay, Apple Pay, Google Pay, cards, cash or a payment link.',
          'Every refusal at the door shows the reason, so staff can sort it out on the spot.',
          'Try it free for up to 3 months before you pay.',
        ],
        module: 'payments',
      },
      {
        type: 'text',
        paras: [
          'Read more: [The front door: why gym check-ins fail, and what a good setup needs](/blog/the-front-door/)',
        ],
      },

      { type: 'heading', id: 'flyby', text: 'FLYBY: QR codes that fail at the door, and updates that break the app' },
      {
        type: 'text',
        paras: [
          'FLYBY is club software from Senkron Tech in Istanbul, which says it runs in "600+ locations in 25+ countries", including all six Gulf states ([FLYBY brochure](https://www.flybyglobal.com/wp-content/uploads/2026/03/flyby-studio-mart-2026-en.pdf), March 2026). Every time the QR code fails there\'s a queue at the door, and the front desk lets members in by hand.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              "\"It gives the error 'This device is not registered for QR'. It hasn't generated a QR code for a month.\"",
            source: 'Google Play review of Club Sporium',
            url: 'https://play.google.com/store/apps/details?id=net.senkron.lapis.clubsporium',
            date: '18 Jun 2026',
            note: 'translated from Turkish',
          },
          {
            quote:
              '"Every time a new update is released I have to go through hell to get the app to work properly. I\'ve been locked out of my account for a week"',
            source: 'App Store review of Mi Estilo',
            url: 'https://apps.apple.com/tr/app/id1516830165?see-all=reviews',
            date: '3 Nov 2024',
          },
          {
            quote: '"Data from the old app wasn\'t carried over to the new one. My old measurements are lost."',
            source: 'App Store review of Acıbadem Sports',
            url: 'https://apps.apple.com/tr/app/id1477595376?see-all=reviews',
            date: '19 Jan 2024',
            note: 'translated from Turkish',
          },
          {
            quote: '"Right now it doesn\'t work on phones running Android 13."',
            source: 'Google Play review of IHU Sports',
            url: 'https://play.google.com/store/apps/details?id=net.senkron.lapis.ihu',
            date: '29 Aug 2026',
            note: 'translated from Turkish',
          },
        ],
      },
      { type: 'text', paras: ['We found no reply from the developer on any of the reviews we read.'] },
      {
        type: 'answer',
        heading: 'More than one way through the door, and a person who answers',
        points: [
          "If a phone won't cooperate, members can use a wallet pass, a QR code, a phone tap or the iPad at reception.",
          'Every refusal at the door shows the reason, so staff know what to fix.',
          "Your members' plans, visits and history stay in your account, and you can download them as spreadsheets.",
          'Support on WhatsApp, phone and email, 7 days a week, with same-day replies.',
        ],
        module: 'access-control',
      },
      {
        type: 'text',
        paras: [
          'Read more: [The front door: why gym check-ins fail, and what a good setup needs](/blog/the-front-door/)',
        ],
      },

      { type: 'heading', id: 'sources', text: 'About the sources' },
      {
        type: 'note',
        text: "English quotes are copied exactly as written, including the reviewers' spelling. Quotes from Arabic and Turkish reviews are our own translations. We left out reviewers' names. Dates are when the review was posted. Trustpilot moves reviews between pages as new ones arrive, so a quote may now sit on a different page from the one linked.",
      },
      {
        type: 'note',
        text: "We left out claims we couldn't read for ourselves, including review-site summaries, competitor blogs, and figures quoted second-hand. Gym Thing is made by Thing W.L.L., Seef, Bahrain.",
      },
    ],
  },
  ar: {
    title: 'شنو اللي مضايق أصحاب النوادي في برامجهم',
    seoTitle: 'مشكلات برامج إدارة النوادي الرياضية: ما الذي يزعج أصحاب النوادي',
    description:
      'اثنتا عشرة مشكلة في برامج إدارة النوادي الرياضية يشكو منها أصحاب النوادي وموظفو الاستقبال، بأقوالهم ومصادرها، وكيف يعالج Gym Thing كل مشكلة منها.',
    lede: 'قرينا شنو كتبوا أصحاب النوادي وفرق الاستقبال عن برامج النوادي اللي يستخدمونها بين 2025 وأكتوبر 2026، في مواقع المراجعات وصفحات سياسات الشركات ومتاجر التطبيقات ومنتديات أصحاب النوادي. في 12 مشكلة تتكرر وايد. هني هي، بكلامهم هم، ومع كل وحدة شنو يسوي Gym Thing فيها. وفي الآخر، نشوف ثلاث أنظمة تنباع في الخليج: Tamarran وGymnago وFLYBY.',
    blocks: [
      {
        type: 'note',
        text: 'شلون سوينا هالبحث. كل اقتباس تحت مربوط بالصفحة اللي قريناه فيها، مع تاريخه. وما اقتبسنا إلا مراجعات قدرنا نفتحها ونقراها كاملة. أغلبها من Trustpilot وApp Store وصفحات الشركات نفسها، ومن r/gymowner وr/crossfit على Reddit (من 21 سبتمبر لين 21 أكتوبر 2026). المراجعة تجربة شخص واحد، مو دليل على تجربة كل نادي مع البرنامج. واخترنا المشاكل اللي تكررت في أكثر من برنامج وعند أكثر من مراجع.',
      },
      { type: 'heading', id: 'summary', text: '12 مشكلة، وجوابنا على كل وحدة' },
      {
        type: 'list',
        items: [
          '[أسعار تزيد بعد أول سنة](#price): سعر سنوي واحد حسب حجم النادي، وكل الأقسام داخلة فيه.',
          '[عقود تتجدد بروحها](#contracts): لين 3 شهور مجاناً، على أعضاءك الحقيقيين، قبل لا تدفع.',
          '[دعم يختفي بعد ما توقّع](#support): واتساب وتلفون وإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم.',
          '[مبالغ تنسحب من الأعضاء غلط، أو ما تنسحب أبداً](#billing): الباقة تبدأ لما تندفع، والدفع المكرر يرجع.',
          '[عالق مع مزود دفع واحد](#processing): المدفوعات تروح لحسابك، وإحنا ما ناخذ نسبة.',
          '[أنظمة تطيح في أزحم وقت](#outages): نسخة احتياطية كل يوم، وقاعدة بيانات احتياطية، وشخص يرد عليك على واتساب.',
          '[تدفع عشان تطلع ببياناتك](#data): ننقل أعضاءك بدالك، وتقدر تنزّل بياناتك أي وقت.',
          '[شاشات يحتاج موظفينك أسابيع عشان يتعلمونها](#learning): نجهز النظام وندرّب فريقك، عادةً خلال أسبوع.',
          '[تطبيقات أعضاء تخرب أو ما توصل أبداً](#apps): تطبيق باسم ناديك، وباب ما يحتاج التطبيق.',
          '[تجديدات تلاحقها بيدك](#renewals): إيميلات تذكير، ورابط دفع على واتساب بضغطة وحدة.',
          '[أعضاء يبون يتمرنون برّا أوقات الحصص](#access): باقات لها ساعات دخول وقواعد زيارات خاصة فيها.',
          '[برامج مسوية لمكان ثاني](#gulf): BenefitPay، والعربي، والفواتير الضريبية، والتأمينات (GOSI) وحماية الأجور (WPS).',
        ],
      },

      { type: 'heading', id: 'price', text: 'أسعار تزيد بعد أول سنة' },
      {
        type: 'text',
        paras: [
          'فاتورة البرنامج على صاحب النادي تتضاعف بدون إنذار وبدون أي مقابل على إنه بقى، والاستقبال يتورط يشرح زيادات ما كان النادي حاسب حسابها.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«زادوا السعر أكثر من 100% بعد سنتي الثانية وياهم.»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '1 مارس 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أستخدم Mindbody حالياً، بس 900 دولار في الشهر شي ما يصير.»',
            source: 'صاحب نادي فيه 300 عميل، في r/gymowner',
            url: 'https://www.reddit.com/r/gymowner/comments/1wr3eus/hello_i_run_a_300_client_gym_that_focuses_on/',
            date: '26 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أسعارهم تزيد كل سنة بدون أي فايدة زيادة.»',
            source: 'مراجعة على Trustpilot لـ Zen Planner',
            url: 'https://ie.trustpilot.com/review/zenplanner.com',
            date: '14 أبريل 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'سعر سنوي واحد، وكل شي داخل فيه',
        points: [
          'تدفع سعر سنوي واحد حسب حجم ناديك. وما في شي ينباع كإضافة.',
          'الاشتراكات، والباب، ونقطة البيع، والحصص والتدريب الشخصي، كلها داخلة فيه.',
          'وكذلك الرواتب والمدفوعات والأتمتة وكل الفروع، ومعاهم التجهيز والتدريب ونقل أعضاءك.',
          'ما في رسوم تجهيز. نعطيك سعرك وإحنا نجهز تجربتك المجانية، عشان تقارنه باللي تدفعه اليوم.',
        ],
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى](/ar/blog/price-contracts-and-your-data/)',
        ],
      },

      { type: 'heading', id: 'contracts', text: 'عقود تتجدد بروحها' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يظل يدفع سنة كاملة على برنامج مو شغّال، وينخصم منه مرة ثانية بعد ما يلغي، والاستقبال يظل يدبّر أموره مع أداة صاحب النادي يحاول يتخلص منها.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'العقود «تتجدد تلقائياً في نهاية المدة الحالية». والإلغاء يحتاج «إشعاراً قبل 30 يوماً على الأقل»، و«الإلغاء غير متاح في منتصف المدة ما لم يُذكر خلاف ذلك في نموذج الطلب».',
            source: 'صفحة العقود في موقع Mindbody نفسه',
            url: 'https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data',
            date: 'تحديث 12 مارس 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«يتجدد تلقائياً لعقد 12 شهر ما أحد قال لي عنه»',
            source: 'مراجعة على Trustpilot لـ Mindbody',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com',
            date: '20 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«حاولت ألغي 3 مرات، وكل مرة يقنعوني ما ألغي، ولما ألغيت أخيراً انخصم مني شهر زيادة.»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=2',
            date: '10 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'جرّبه على ناديك الحقيقي قبل لا تدفع',
        points: [
          'تقدر تشغّل Gym Thing مجاناً لين 3 شهور قبل لا تدفع أي شي.',
          'ننقل أعضاءك للتجربة، عشان تحكم عليه بأعضاءك وباقاتك وموظفينك، مو بعرض تجريبي.',
          'وتقدر تخلي نظامك الحالي شغّال وياه لين ما تتأكد.',
        ],
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى](/ar/blog/price-contracts-and-your-data/)',
        ],
      },

      { type: 'heading', id: 'support', text: 'دعم يختفي بعد ما توقّع' },
      {
        type: 'text',
        paras: [
          'المشاكل اللي تكلف صاحب النادي فلوس تقعد أيام، وأسوأها في الويكند، والاستقبال يواجه أعضاء زعلانين بدون حل وبدون أحد يتصل فيه.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«قالوا لي انطر لين يوم الاثنين»',
            source: 'مراجعة على Trustpilot لـ Mindbody من نشاط تجاري يفتح 7 أيام في الأسبوع',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com?page=3',
            date: '27 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أول ما وقّعنا وصرنا عملاء ندفع، اختفى الدعم.»',
            source: 'مراجعة على Trustpilot لـ WellnessLiving',
            url: 'https://www.trustpilot.com/review/wellnessliving.com',
            date: '1 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«تقدر تكلم 4 موظفين مختلفين وتاخذ 4 أجوبة مختلفة ومتناقضة تماماً.»',
            source: 'مراجعة على Trustpilot لـ Mindbody',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com',
            date: '13 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'شخص يرد عليك على واتساب، 7 أيام في الأسبوع',
        points: [
          'النوادي تفتح في الويكند، وإحنا بعد.',
          'راسلنا على واتساب أو اتصل أو ارسل إيميل أي يوم في الأسبوع، والرد يوصلك في نفس اليوم، بالعربي أو بالإنجليزي.',
          'واتساب [+973 3993 6601](https://wa.me/97339936601)، أو [support@thing.bh](mailto:support@thing.bh)',
        ],
      },
      {
        type: 'text',
        paras: ['للمزيد: [إعداد بطيء وتدريب يستغرق أسابيع ودعم يختفي بعد التوقيع](/ar/blog/setup-and-staff-training/)'],
      },

      { type: 'heading', id: 'billing', text: 'مبالغ تنسحب من الأعضاء غلط، أو ما تنسحب أبداً' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يخسر دخل، والأعضاء يوقفون يثقون في النادي على بطاقاتهم، والاستقبال يقضي يومه في الاسترجاعات والاعتذارات.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«بعض الأعضاء قاعدين يحضرون الحصص ببلاش» بينما «غيرهم ينخصم منهم بدون ما يشترون شي»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '10 مارس 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«انخصم من عملاء على اشتراكات عمرنا ما سويناها، وانخصم من غيرهم أكثر من اللازم،»',
            source: 'مراجعة على Trustpilot لـ WellnessLiving',
            url: 'https://www.trustpilot.com/review/wellnessliving.com',
            date: '1 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«النظام ظل يحاول يسحب من العملاء حتى بعد ما انحذفت بياناتهم.»',
            source: 'مراجعة على Trustpilot لـ Zen Planner',
            url: 'https://ie.trustpilot.com/review/zenplanner.com',
            date: '4 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'الباقة تبدأ لما تندفع، مو قبل',
        points: [
          'بيع الباقة في الاستقبال، أو ارسل رابط دفع. والباقة تبدأ أول ما يدفع العضو.',
          'كل دفعة أونلاين تنربط بعملية البيع حقها. وإذا دفع العضو مرتين، المبلغ الزايد يرجع له.',
          'كل عملية بيع لها فاتورة ضريبية، بأرقام متسلسلة بدون فراغات.',
          'ما يدخل من الباب إلا العضو اللي عنده باقة سارية.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks',
        caption: 'روابط الدفع في Gym Thing، وكل رابط يبين إذا هو مفتوح أو مدفوع أو منتهي أو يحتاج متابعة.',
      },
      {
        type: 'text',
        paras: ['للمزيد: [فوترة تحصّل المبلغ الصحيح، وأموال تصل إليك](/ar/blog/billing-that-charges-right/)'],
      },

      { type: 'heading', id: 'processing', text: 'عالق مع مزود دفع واحد، وتنطر فلوسك' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يروح عليه 3 إلى 5% من كل دفعة في رسوم ما يقدر يفاوض عليها، والتحويلات ممكن توقف بدون إنذار، والاستقبال يشرح للأعضاء رسوم البطاقات.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«مجبور أستخدم مزود الدفع بالبطاقات حقكم (CardPointe) وهو غالي وايد (حوالي 3.5%).»',
            source: 'مراجعة على Trustpilot لـ Zen Planner',
            url: 'https://ie.trustpilot.com/review/zenplanner.com',
            date: '18 يوليو 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«من فترة قريبة حجزوا كل فلوسنا اللي جت من الدفع بالبطاقات.»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '12 مارس 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«فلوسي محجوزة لين أثبت الملكية.»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com',
            date: '9 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'PushPress تنشر رسوم بطاقات 4.99% + 30 سنت في باقتها المجانية، و2.89% + 30 سنت في باقة Pro ([أسعار PushPress](https://pushpress.com/pricing)، قريناها في 21 أكتوبر 2026). وهذا سعر منشور، مو شكوى.',
        ],
      },
      {
        type: 'answer',
        heading: 'مدفوعاتك تروح لحسابك، وإحنا ما ناخذ نسبة',
        points: [
          'الدفع بالبطاقات والمحافظ يروح على طول لحساب ناديك عند Tap، مزود دفع مرخّص.',
          'Gym Thing ما ياخذ أي عمولة عليها. ورسوم Tap ومواعيد التحويل تتفق عليها إنت وTap.',
          'الأعضاء يدفعون باللي يريحهم: BenefitPay، Apple Pay، Google Pay، البطاقات، الكاش أو رابط دفع.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'رابط دفع على واتساب، وصفحة الدفع اللي يفتحها.',
      },
      {
        type: 'text',
        paras: ['للمزيد: [فوترة تحصّل المبلغ الصحيح، وأموال تصل إليك](/ar/blog/billing-that-charges-right/)'],
      },

      { type: 'heading', id: 'outages', text: 'أنظمة تطيح في أزحم وقت' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يخسر مبيعات ويعطي انطباع أول سيء، وأغلب الأحيان في أسبوع الافتتاح، وفي الاستقبال يوقف تسجيل الدخول والدفع والأعضاء واقفين في الطابور.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«البرنامج طاح أكثر من مرة من يوم الافتتاح الكبير بداية هالشهر»',
            source: 'مراجعة على Trustpilot لـ Mindbody',
            url: 'https://www.trustpilot.com/review/www.mindbodyonline.com?page=3',
            date: '28 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«آخر 10 شهور من الأخطاء المستمرة كلفت شغلنا بين 30,000 و40,000 جنيه إسترليني»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '24 فبراير 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«قد يواجه المستخدمون تحميلاً غير منتظم أو غير مكتمل للصفحات.»',
            source: 'صفحة الحالة في موقع Mindbody نفسه',
            url: 'https://status.mindbodyonline.com/incidents/csrn1wm6wcrc',
            date: '5 إلى 6 أغسطس 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'بياناتك في أمان، وفي شخص يرد عليك',
        points: [
          'بياناتك مشفّرة وتنحفظ منها نسخة احتياطية كل يوم.',
          'في نسخة احتياطية من قاعدة بياناتك جاهزة إذا صار شي في الأساسية.',
          'إذا علقت أي دفعة، تنفحص وتكمل أو ترجع.',
          'وإذا صار أي خلل، توصل لشخص على واتساب في نفس اليوم.',
        ],
      },

      { type: 'heading', id: 'data', text: 'تدفع عشان تطلع ببياناتك' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يدفع عشان يرجع له أعضاءه، ويخاطر بأسابيع بدون تحصيل وقت النقل، والاستقبال يعيد كتابة الأعضاء بيده بعد استيراد خربان.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'Mindbody «تقدم خدمة لتصدير البيانات برسوم إضافية». وبعد إغلاق الحساب، «لن تتمكن من الوصول إلى البيانات».',
            source: 'صفحة العقود في موقع Mindbody نفسه',
            url: 'https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data',
            date: 'تحديث 12 مارس 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«بغوا ياخذون مني 600 جنيه إسترليني عشان ينقلون بيانات الدفع حق الأعضاء»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=5',
            date: '1 مارس 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«للحين ما وصلني ملف قاعدة البيانات اللي دفعت عليه، وصار لي 6 أسابيع ما قدرت أحصّل من طلابي.»',
            source: 'مراجعة على Trustpilot لـ Zen Planner',
            url: 'https://www.trustpilot.com/review/zenplanner.com?page=3',
            date: '2 أبريل 2024',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'إحنا ننقلك، وبياناتك تبقى لك',
        points: [
          'ننقل أعضاءك وباقاتك وتاريخهم كجزء من التجهيز، بدون أي تكلفة زيادة.',
          'تشوف معاينة قبل لا يشتغل أي شي.',
          'وبعدها، أي وقت، تقدر تنزّل أعضاءك واشتراكاتك وحساباتك وتحليلاتك ورواتبك كملفات إكسل.',
        ],
        module: 'members',
      },
      {
        type: 'screen',
        show: 'screen:Members',
        caption: 'صفحة عضو واحد في Gym Thing، فيها باقته ورصيده وتاريخه.',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى](/ar/blog/price-contracts-and-your-data/)',
        ],
      },

      { type: 'heading', id: 'learning', text: 'شاشات يحتاج موظفينك أسابيع عشان يتعلمونها' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يدفع على التدريب من جديد كل ما طلع موظف، والموظفين الجدد في الاستقبال يغلطون في الشاشات المزحومة.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«هذا أسوأ واحد استخدمته في حياتي، صعب الاستخدام ومحيّر.»',
            source: 'مراجعة على Trustpilot لـ TeamUp',
            url: 'https://www.trustpilot.com/review/goteamup.com',
            date: '12 يناير 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«النظام جامد ومعقد وايد»',
            source: 'مراجعة على Trustpilot لـ WellnessLiving',
            url: 'https://www.trustpilot.com/review/wellnessliving.com',
            date: '1 مايو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«النظام صعب تتعود عليه، والتهيئة متعبة وايد (بس تستاهل).»',
            source: 'مراجعة على Trustpilot لـ Exercise.com',
            url: 'https://www.trustpilot.com/review/exercise.com?page=2',
            date: '17 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'إحنا نجهزه وندرّب فريقك',
        points: [
          'أغلب النوادي تشتغل خلال أسبوع. نجهز باقاتك وفروعك والمدفوعات، وننقل أعضاءك وندرّب موظفينك.',
          'جمّد الباقة أو مدّدها أو رقّها من صفحة العضو، وتاريخ الانتهاء يتحدث بروحه.',
          'نقطة البيع مسوية لكاونتر عليه زحمة.',
          'الموظفين يسجلون حضورهم، ويطلبون إجازات، ويشوفون قسائم رواتبهم في تطبيقهم الخاص.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'الباقات في Gym Thing: الفئات والمدد والأسعار وساعات الدخول في شاشة وحدة.',
      },
      {
        type: 'text',
        paras: ['للمزيد: [إعداد بطيء وتدريب يستغرق أسابيع ودعم يختفي بعد التوقيع](/ar/blog/setup-and-staff-training/)'],
      },

      { type: 'heading', id: 'apps', text: 'تطبيقات أعضاء تخرب، وتطبيقات بهوية النادي ما توصل أبداً' },
      {
        type: 'text',
        paras: [
          'عند الأعضاء التطبيق هو النادي، فأخطاؤه تكلّف صاحب النادي أعضاء، والاستقبال يتحول لدعم فني للتطبيق، يمشّي الأعضاء خطوة خطوة عشان يحذفونه وينزلونه من جديد.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«لازم كل شوي نطلب من الأعضاء يحذفون التطبيق وينزلونه من جديد»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com?page=4',
            date: '24 أبريل 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«اشتركت في Glofox بعد ما وعدوني في مكالمة المبيعات إن باقتي بتشمل تطبيق بهوية النادي.»',
            source: 'مراجعة على Trustpilot لـ ABC Glofox',
            url: 'https://www.trustpilot.com/review/glofox.com',
            date: '5 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«انتظرت شهور على "التطبيق بهويتنا" وفي الأخير قالوا لي فيه مشكلة تقنية»',
            source: 'مراجعة على Trustpilot لـ Zen Planner',
            url: 'https://www.trustpilot.com/review/zenplanner.com?page=3',
            date: 'أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'تطبيق باسم ناديك، وباب ما يحتاج التطبيق',
        points: [
          'تطبيق الأعضاء يحمل اسم ناديك في المتاجر، بالعربي والإنجليزي. وإحنا نبنيه لك.',
          'الأعضاء يشوفون باقتهم، ويحجزون الحصص، ويسجلون تمارينهم.',
          'ما أحد يحتاج التطبيق عشان يدخل. بطاقة في Apple Wallet أو Google Wallet، أو رمز QR، تفتح الباب.',
        ],
        module: 'member-app',
      },
      {
        type: 'screen',
        show: 'screen:MemberApp',
        caption: 'تطبيق الأعضاء: رمز QR للدخول، وحصص للحجز.',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [لماذا تتعطّل تطبيقات أعضاء النوادي الرياضية، وما الذي ينبغي أن تسأل عنه قبل الاختيار](/ar/blog/member-apps-that-work/)',
        ],
      },

      { type: 'heading', id: 'renewals', text: 'تجديدات تلاحقها بيدك' },
      {
        type: 'text',
        paras: [
          'الأعضاء يروحون لما تخلص باقتهم بهدوء، والاستقبال يقضي ساعات يراسلهم واحد واحد.',
          'في أكتوبر 2026، [موضوع في r/gymowner](https://www.reddit.com/r/gymowner/comments/1wxeguy/gym_owners_would_you_let_your_management_software/) سأل أصحاب النوادي إذا يقبلون إن برنامجهم يرسل تذكيرات التجديد من رقم الواتساب حق النادي نفسه. ومواضيع ثانية في نفس المجتمع في أكتوبر سألت أصحاب النوادي شنو أكثر شي يضايقهم في برنامجهم، وكم يكلفهم فعلاً من فلوس ووقت.',
        ],
      },
      {
        type: 'answer',
        heading: 'التذكيرات توصل، والدفع بضغطة وحدة',
        points: [
          'الأعضاء يوصلهم إيميل تذكير قبل لا تخلص باقتهم، بدون ما أحد يرسله.',
          'الباقات اللي بتخلص خلال 14 يوم تطلع لفريقك عشان يتابعونها.',
          'ضغطة وحدة في صفحة العضو تفتح واتساب ورابط الدفع جاهز للإرسال.',
          'التجديد يبدأ نفس اليوم اللي تخلص فيه الباقة الحالية، يعني ما في فراغ.',
        ],
        module: 'memberships',
      },
      {
        type: 'text',
        paras: ['للمزيد: [فوترة تحصّل المبلغ الصحيح، وأموال تصل إليك](/ar/blog/billing-that-charges-right/)'],
      },

      { type: 'heading', id: 'access', text: 'أعضاء يبون يتمرنون برّا أوقات الحصص' },
      {
        type: 'text',
        paras: ['الأعضاء يتركون النادي لنادي ثاني مفتوح أوقات أطول، والاستقبال يدخّل الناس بيده، أو يردّهم.'],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«لو النادي حقي كان فيه دخول برّا الأوقات أو اشتراك للصالة المفتوحة بس، ما كان تركته أبداً.»',
            source: 'تعليق في r/crossfit عليه 32 تصويت',
            url: 'https://reddit.com/r/crossfit/comments/1x735pn/comment/ph2dgow/',
            date: 'أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«صراحة تركت نادي لأنه ما كان فيه أوقات كافية للصالة المفتوحة أو دخول 24/7.»',
            source: 'تعليق في r/crossfit',
            url: 'https://www.reddit.com/r/crossfit/comments/1x735pn/gym_owners/',
            date: 'أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'باقات لها ساعات دخول خاصة فيها',
        points: [
          'بيع باقات الصالة المفتوحة، أو أوقات خارج الذروة، أو ساعات السيدات، أو باقة 10 زيارات، وكل وحدة لها قواعد دخول خاصة فيها.',
          'الباب ما يدخّل إلا العضو اللي باقته تسمح بهالوقت، عن طريق بوابات Gantner الدوّارة، أو لمسة بالتلفون، أو iPad في الاستقبال.',
          'كل رفض يبين السبب، عشان الموظفين يعرفون شنو يقولون.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns+flow:access',
        caption: 'كل عملية دخول في Gym Thing مع سبب كل رفض، وكل الطرق اللي يدخل فيها الأعضاء.',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [باب النادي: لماذا يتعطل تسجيل الدخول، وما الذي يحتاجه نظام دخول جيد](/ar/blog/the-front-door/)',
        ],
      },

      { type: 'heading', id: 'gulf', text: 'برامج مسوية لمكان ثاني' },
      {
        type: 'text',
        paras: [
          'صاحب النادي ما يقدر يستلم بـ BenefitPay أو البطاقات المحلية، ويدفع على أدوات للضريبة والرواتب على جنب، والاستقبال يشغّل جهاز بطاقات ثاني ويشتغل بالإنجليزي مع أعضاء يتوقعون العربي.',
          'قائمة الدول اللي تدعمها Stripe فيها الإمارات، بس ما فيها البحرين ولا السعودية ولا الكويت ولا قطر ولا عُمان ([توفّر Stripe حول العالم](https://stripe.com/global)، قريناها في 21 أكتوبر 2026). وبرامج النوادي اللي ما تستلم إلا عن طريق Stripe عندها نفس النقص.',
          'صفحة أسعار PushPress ما تذكر أي دولة خليجية، وتقول «تواصل مع المبيعات للأسعار الدولية» ([أسعار PushPress](https://pushpress.com/pricing)، قريناها في 21 أكتوبر 2026).',
        ],
      },
      {
        type: 'answer',
        heading: 'مسوي للنوادي في الخليج',
        points: [
          'BenefitPay، Apple Pay، Google Pay، البطاقات والكاش',
          'روابط دفع على واتساب، مكتوبة بالعربي أو الإنجليزي',
          'تطبيق أعضاء وتطبيق موظفين وصفحة دفع بالعربي',
          'فاتورة ضريبية لكل عملية بيع',
          'رواتب مع التأمينات الاجتماعية (GOSI) وملف حماية الأجور (WPS)',
        ],
        module: 'hr-payroll',
      },
      {
        type: 'screen',
        show: 'screen:Payroll',
        caption: 'الرواتب في Gym Thing: اختار الشهر، راجع سجل كل موظف، وبعدين اعتمد الرواتب.',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [برامج النوادي المصممة لأسواق أخرى، من منظور نادٍ رياضي في البحرين](/ar/blog/built-for-the-gulf/)',
        ],
      },

      { type: 'heading', id: 'gulf-systems', text: 'ثلاث أنظمة تنباع في الخليج: Tamarran وGymnago وFLYBY' },
      {
        type: 'text',
        paras: [
          'هالثلاث ما يطلعون في مواقع المراجعات الكبيرة، فقرينا مراجعاتهم في متاجر التطبيقات بدالها. كل واحد منهم ينشر تطبيق بهوية كل نادي يخدمه، فأغلب هالمراجعات من أعضاء يستخدمون تطبيق ناديهم. ترجمنا المراجعات المكتوبة بالإنجليزي والتركي، وما حطينا المراجعات اللي تشتكي من النادي نفسه مو من البرنامج.',
        ],
      },

      { type: 'heading', id: 'tamarran', text: 'Tamarran: تسجيل دخول ما يزبط، وتطبيق جديد يقول الأعضاء إنه أسوأ' },
      {
        type: 'text',
        paras: [
          'شركة Tamarran Sports Online Services W.L.L. تدير سوق لحجوزات الرياضة، وتنشر تطبيقات بهوية النوادي والاستوديوهات، أغلبها في السعودية والبحرين. والعضو اللي ما يقدر يسجل دخول ما يقدر يحجز، ويلوم النادي، فالاستقبال ياخذ الحجوزات اللي فشل فيها التطبيق.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«الرقم السري صحيح ولكن يكتب يوجد خطأ دائما»',
            source: 'مراجعة على App Store لتطبيق PT PureGym KSA، من نشر Tamarran',
            url: 'https://apps.apple.com/sa/app/id6443764479?see-all=reviews',
            date: '27 سبتمبر 2026',
          },
          {
            quote: '«تطبيق بطيء وسيء وايد، ما أقدر أحجز الحصة إلا بعد محاولات وايد، دايماً فيه خطأ»',
            source: 'مراجعة على Google Play لتطبيق PT PureGym KSA',
            url: 'https://play.google.com/store/apps/details?id=com.tamarran.puregym',
            date: '18 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«الله يرحم اول تطبيق ممتاز والان كانك تشحت»',
            source: 'مراجعة على Google Play لتطبيق PT PureGym KSA',
            url: 'https://play.google.com/store/apps/details?id=com.tamarran.puregym',
            date: '10 يوليو 2026',
          },
          {
            quote: '«التطبيق معلق معي حذفته وحملته نفس الشي»',
            source: 'مراجعة على Google Play لتطبيق Tamarran',
            url: 'https://play.google.com/store/apps/details?id=com.tamarran.app',
            date: '4 أبريل 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'إذا النادي ألغى باقة البرنامج، سياسة الاسترجاع عند Tamarran تقول «جميع المبالغ المستردة المؤهلة تخضع لرسوم إدارية بنسبة 50%»، والاسترجاع ممكن ياخذ لين 30 يوم عمل ([سياسة الاسترجاع عند Tamarran](https://tamarran.co/en/refund-policy/)، آخر تحديث 04.11.2025). والباقات الخمس كلها في [صفحة الأسعار](https://tamarran.co/en/pricing/) مكتوب عليها «اطلب عرض سعر»، وكل باقة فيها ظهور في تطبيق Tamarran.',
        ],
      },
      {
        type: 'answer',
        heading: 'الأعضاء يدخلون بدون التطبيق، وما تدفع إلا لما تتأكد',
        points: [
          'ما أحد يحتاج التطبيق عشان يدخل. بطاقة في Apple Wallet أو Google Wallet، أو رمز QR، أو لمسة بالتلفون، أو iPad في الاستقبال، يفتح الباب.',
          'شغّل Gym Thing مجاناً لين 3 شهور قبل لا تدفع أي شي.',
          'سعر واحد وكل الأقسام داخلة فيه. ما في فئات تحتار بينها.',
          'لما يعلق أي عضو، فريقك يوصل لشخص على واتساب في نفس اليوم.',
        ],
        module: 'access-control',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [لماذا تتعطّل تطبيقات أعضاء النوادي الرياضية، وما الذي ينبغي أن تسأل عنه قبل الاختيار](/ar/blog/member-apps-that-work/)',
        ],
      },

      { type: 'heading', id: 'gymnago', text: 'Gymnago: تطبيقات تعلّق، وباب يبي وجهك' },
      {
        type: 'text',
        paras: [
          'Gymnago من شركة Pixel Mind IT Solutions W.L.L. في البحرين، اللي تنشر تطبيق بهوية كل نادي تخدمه، أغلبها في السعودية والبحرين. واللي ما يقدر يسجل ما يصير عضو أصلاً، والاستقبال يستقبل الشكاوي عن التطبيق والباب.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«ما اقدر اسجل دخول التطبيق يعلق كل مره سيء جداااا»',
            source: 'مراجعة على Google Play لتطبيق Iron House Gym KSA',
            url: 'https://play.google.com/store/apps/details?id=com.ironHouse.gym',
            date: '19 أغسطس 2026',
          },
          {
            quote: '«التطبيق ما يشتغل وما أقدر أسجل»',
            source: 'مراجعة على App Store لتطبيق Fitness Maker',
            url: 'https://apps.apple.com/sa/app/id6744639286',
            date: '20 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«لايوجد خيار لتسجيل الدخول بحسابي برقم الهاتف»',
            source: 'مراجعة على Google Play لتطبيق Fleur Fit Gym',
            url: 'https://play.google.com/store/apps/details?id=com.fleurFit.gym',
            date: '3 سبتمبر 2026',
          },
          {
            quote:
              '«ما يفعّل خاصية الدخول بالباركود، وبدالها يستخدم Face ID… وهذا فيه خطر على البيانات الشخصية. النوادي الثانية تستخدم رمز QR في التطبيق.»',
            source: 'مراجعة على App Store لتطبيق Gym 650',
            url: 'https://apps.apple.com/sa/app/id6741509582',
            date: '3 أغسطس 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          '[صفحة التكاملات](https://gymnago.com/features/integrations) عند Gymnago فيها 18 طريقة دفع، منها Knet وOmanNet وApple Pay، بس ما فيها BenefitPay. و[الشروط](https://gymnago.com/termsAndCondition) حقها تقول إن الاشتراكات تتجدد تلقائياً، و«أي مبلغ مدفوع غير قابل للاسترداد بمجرد بدء فترة الاشتراك».',
        ],
      },
      {
        type: 'answer',
        heading: 'أي باب يناسبك، وBenefitPay موجود',
        points: [
          'اختار شلون يدخل الأعضاء: رمز QR، أو بطاقة في المحفظة، أو لمسة بالتلفون، أو بوابات Gantner الدوّارة، أو iPad في الاستقبال.',
          'الأعضاء يدفعون بـ BenefitPay، Apple Pay، Google Pay، البطاقات، الكاش أو رابط دفع.',
          'كل رفض على الباب يبين السبب، عشان الموظفين يحلونه في مكانه.',
          'جرّبه مجاناً لين 3 شهور قبل لا تدفع.',
        ],
        module: 'payments',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [باب النادي: لماذا يتعطل تسجيل الدخول، وما الذي يحتاجه نظام دخول جيد](/ar/blog/the-front-door/)',
        ],
      },

      { type: 'heading', id: 'flyby', text: 'FLYBY: رموز QR تفشل على الباب، وتحديثات تخرّب التطبيق' },
      {
        type: 'text',
        paras: [
          'FLYBY برنامج للأندية من Senkron Tech في إسطنبول، واللي تقول إنه شغّال في «أكثر من 600 موقع في أكثر من 25 دولة»، منها دول الخليج الست كلها ([كتيّب FLYBY](https://www.flybyglobal.com/wp-content/uploads/2026/03/flyby-studio-mart-2026-en.pdf)، مارس 2026). وكل ما فشل رمز QR صار طابور على الباب، والاستقبال يدخّل الأعضاء بيده.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«يطلع خطأ "هذا الجهاز غير مسجّل لرمز QR". وصار له شهر ما يطلّع رمز QR.»',
            source: 'مراجعة على Google Play لتطبيق Club Sporium',
            url: 'https://play.google.com/store/apps/details?id=net.senkron.lapis.clubsporium',
            date: '18 يونيو 2026',
            note: 'مترجم من التركية',
          },
          {
            quote:
              '«كل ما نزل تحديث جديد لازم أمر بجحيم عشان أخلي التطبيق يشتغل عدل. وصار لي أسبوع ما أقدر أدخل حسابي»',
            source: 'مراجعة على App Store لتطبيق Mi Estilo',
            url: 'https://apps.apple.com/tr/app/id1516830165?see-all=reviews',
            date: '3 نوفمبر 2024',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«البيانات من التطبيق القديم ما انتقلت للجديد. وقياساتي القديمة راحت.»',
            source: 'مراجعة على App Store لتطبيق Acıbadem Sports',
            url: 'https://apps.apple.com/tr/app/id1477595376?see-all=reviews',
            date: '19 يناير 2024',
            note: 'مترجم من التركية',
          },
          {
            quote: '«حالياً ما يشتغل على التلفونات اللي عليها Android 13.»',
            source: 'مراجعة على Google Play لتطبيق IHU Sports',
            url: 'https://play.google.com/store/apps/details?id=net.senkron.lapis.ihu',
            date: '29 أغسطس 2026',
            note: 'مترجم من التركية',
          },
        ],
      },
      { type: 'text', paras: ['ما لقينا أي رد من المطوّر على أي مراجعة من المراجعات اللي قريناها.'] },
      {
        type: 'answer',
        heading: 'أكثر من طريقة للدخول، وشخص يرد عليك',
        points: [
          'إذا التلفون ما تعاون، الأعضاء يقدرون يستخدمون بطاقة في المحفظة، أو رمز QR، أو لمسة بالتلفون، أو الـ iPad في الاستقبال.',
          'كل رفض على الباب يبين السبب، عشان الموظفين يعرفون شنو يصلحون.',
          'باقات أعضاءك وزياراتهم وتاريخهم تبقى في حسابك، وتقدر تنزّلها كملفات إكسل.',
          'دعم على واتساب وتلفون وإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم.',
        ],
        module: 'access-control',
      },
      {
        type: 'text',
        paras: [
          'للمزيد: [باب النادي: لماذا يتعطل تسجيل الدخول، وما الذي يحتاجه نظام دخول جيد](/ar/blog/the-front-door/)',
        ],
      },

      { type: 'heading', id: 'sources', text: 'عن المصادر' },
      {
        type: 'note',
        text: 'الاقتباسات العربية منقولة مثل ما انكتبت، بإملاء أصحابها. والاقتباسات من مراجعات بالإنجليزي والتركي ترجمتنا إحنا. ما ذكرنا أسماء المراجعين. والتواريخ هي تاريخ نشر المراجعة. Trustpilot ينقل المراجعات بين الصفحات كل ما نزلت مراجعات جديدة، فممكن تلقى الاقتباس الحين في صفحة غير الصفحة المربوطة.',
      },
      {
        type: 'note',
        text: 'ما حطينا أي معلومة ما قدرنا نقراها بنفسنا، ومنها ملخصات مواقع المراجعات، ومدونات المنافسين، والأرقام المنقولة من مصدر ثاني. Gym Thing من Thing W.L.L.، السيف، البحرين.',
      },
    ],
  },
}
