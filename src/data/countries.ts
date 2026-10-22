export type Country = {
  slug: string
  name: string
  /** Search title, before " · Gym Thing". */
  title: string
  description: string
  h1: string
  lede: string
  /** What a gym in this country gets, as [heading, text]. */
  points: [heading: string, text: string][]
  faq: [question: string, answer: string][]
}

// Country landing pages under /gym-software/. Marketing copy: every point traces to a module in modules.ts.
// Arabic copy is in countries.ar.ts, keyed by slug; change both together.
export const countries: Country[] = [
  {
    slug: 'bahrain',
    name: 'Bahrain',
    title: 'Gym Management Software in Bahrain',
    description:
      'Gym management software built in Bahrain: BenefitPay, 10% VAT invoices, GOSI and WPS payroll, Gantner doors and an Arabic member app, with support 7 days a week.',
    h1: 'Gym software, made in Bahrain.',
    lede: 'Built in Seef for gyms in Manama, Riffa, Muharraq and across the Kingdom. BenefitPay, VAT invoices, GOSI payroll and an Arabic member app, all in one system.',
    points: [
      [
        'Every way Bahrain pays',
        'BenefitPay, Benefit cards, Apple Pay, Google Pay, cash and bank transfer. Send a payment link on WhatsApp and the membership starts the moment it is paid.',
      ],
      [
        'VAT invoices your accountant can file',
        'Every sale gets an invoice with your CR and VAT number, 10% worked out for you and totals in three-decimal dinars, numbered in order with no gaps.',
      ],
      [
        'GOSI and WPS on payday',
        'Salaries, commissions and GOSI worked out, the WPS file ready for the bank, and every payslip on your team’s phones.',
      ],
      [
        'A team you can visit',
        'We are in Seef. Train Fitness, RSX Fitness, Pulse Fitness, Core District Gym and Elevation Fitness Club run on Gym Thing.',
      ],
    ],
    faq: [
      [
        'Does Gym Thing take BenefitPay?',
        'Yes. Members pay by BenefitPay, Apple Pay, Google Pay or card from a link, and at the desk you record BenefitPay, Benefit cards, cash, transfer or cheque.',
      ],
      [
        'Are the invoices right for Bahrain VAT?',
        'Yes. Each invoice shows your legal name, CR and VAT number, with net, VAT and total in dinars to three decimals.',
      ],
      [
        'Does payroll handle GOSI and WPS?',
        'Yes. GOSI is worked out for Bahraini and non-Bahraini staff, and the WPS file is ready to upload to your bank.',
      ],
      [
        'How much does it cost?',
        "One yearly price based on your gym's size, with every module included. Start with a free trial of up to 3 months.",
      ],
    ],
  },
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    title: 'Gym Management Software in Saudi Arabia',
    description:
      'Gym management software for Saudi Arabia: memberships, doors, payments, 15% VAT invoices, ladies’ hours, payroll and an Arabic member app, with support 7 days a week.',
    h1: 'Gym software for Saudi Arabia.',
    lede: 'For gyms in Riyadh, Jeddah, Dammam and Al Khobar. Members, doors, payments and payroll in one system, with an Arabic member app and a team in the same time zone.',
    points: [
      [
        'Ladies’ hours and branches, enforced',
        'Limit any plan to certain days, hours or branches, like a ladies-only branch or women’s hours. The door checks it on every scan.',
      ],
      [
        '15% VAT, worked out for you',
        'Enter the price the member pays and Gym Thing splits out the VAT. Every sale gets a numbered invoice with your VAT number.',
      ],
      [
        'Built to open the next branch',
        'Riyadh today, Jeddah next year. Each branch has its own stock, staff and timetable, and reports show one branch or the whole business.',
      ],
      [
        'Arabic for every member',
        'The member app, the payment page and the WhatsApp messages are in Arabic and English, so each member uses the one they prefer.',
      ],
    ],
    faq: [
      [
        'Can I run a ladies-only gym or women’s hours?',
        'Yes. Each plan can be limited to certain days, hours and branches, and the door lets members in only then and there.',
      ],
      [
        'Is Gym Thing in Arabic?',
        'The member app, the staff app and the payment pages are in Arabic and English, and every WhatsApp message can go out in Arabic.',
      ],
      [
        'Your team is in Bahrain. How does support work?',
        'Bahrain is on the same clock as Riyadh. Reach us on WhatsApp, phone or email 7 days a week, and get a reply the same day.',
      ],
      [
        'How much does it cost?',
        "One yearly price based on your gym's size, with every module included. Start with a free trial of up to 3 months.",
      ],
    ],
  },
  {
    slug: 'uae',
    name: 'UAE',
    title: 'Gym Management Software in the UAE',
    description:
      'Gym management software for the UAE: memberships, turnstiles, Apple Pay links on WhatsApp, 5% VAT invoices, classes and a member app in Arabic and English.',
    h1: 'Gym software for the UAE.',
    lede: 'For gyms and studios in Dubai, Abu Dhabi, Sharjah and Ajman. Members, doors, classes and payments in one system, and an app in Arabic and English for every member.',
    points: [
      [
        'Every member, in their language',
        'The member app switches between Arabic and English, so a member from anywhere books classes and checks in in the language they like.',
      ],
      [
        'Apple Pay on a WhatsApp link',
        'Send a payment link on WhatsApp. The member pays by card, Apple Pay or Google Pay, and the membership starts by itself.',
      ],
      [
        'Open 24/7, or on your hours',
        'Turnstiles, phone-tap readers or an iPad at the desk check every plan’s hours and branches, and log every entry.',
      ],
      [
        '5% VAT, worked out for you',
        'Enter the price the member pays and Gym Thing splits out the VAT. Every sale gets a numbered invoice with your VAT number.',
      ],
    ],
    faq: [
      [
        'Can members book classes in the app?',
        'Yes. Members see the live timetable, book and cancel in the app, and your front desk can book for them too.',
      ],
      [
        'Which turnstiles does it work with?',
        'Gantner turnstile readers, phone-tap readers and any iPad at reception. Members can also check in with an Apple or Google Wallet pass.',
      ],
      [
        'Your team is in Bahrain. How does support work?',
        'Bahrain is one hour behind Dubai. Reach us on WhatsApp, phone or email 7 days a week, and get a reply the same day.',
      ],
      [
        'How much does it cost?',
        "One yearly price based on your gym's size, with every module included. Start with a free trial of up to 3 months.",
      ],
    ],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    title: 'Gym Management Software in Qatar',
    description:
      'Gym management software for Qatar: memberships, freezes for summer travel, ladies’ hours, WhatsApp renewals, doors and a member app in Arabic and English.',
    h1: 'Gym software for Qatar.',
    lede: 'For gyms in Doha, Lusail, Al Wakrah and Al Rayyan. Memberships, doors, payments and renewals in one system, with an Arabic member app and support every day of the week.',
    points: [
      [
        'Summer travel, sorted',
        'Freeze a membership from today or a future date and the end date moves out on its own. Back early? The unused days come off again.',
      ],
      [
        'Renewals that chase themselves',
        'Gym Thing messages members on WhatsApp before their plan ends. Send a payment link and the plan renews the moment they pay.',
      ],
      [
        'Ladies’ hours, enforced',
        'Limit a plan to certain days, hours or branches. The door checks it on every scan, so nobody gets in outside their plan.',
      ],
      [
        'No VAT? Switch it off',
        'Run without VAT today, and if it arrives, set your rate once and every new sale carries it.',
      ],
    ],
    faq: [
      [
        'What happens when members travel for the summer?',
        'Freeze their plan for the time away, and the end date moves out by the same number of days.',
      ],
      [
        'Can renewal reminders go out on WhatsApp?',
        'Yes. Automations send a WhatsApp message or email before a plan ends, on birthdays, or when a member stops coming.',
      ],
      [
        'Your team is in Bahrain. How does support work?',
        'Bahrain is on the same clock as Doha. Reach us on WhatsApp, phone or email 7 days a week, and get a reply the same day.',
      ],
      [
        'How much does it cost?',
        "One yearly price based on your gym's size, with every module included. Start with a free trial of up to 3 months.",
      ],
    ],
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    title: 'Gym Management Software in Kuwait',
    description:
      'Gym management software for Kuwait: memberships, class timetables, win-back messages, staff clock-ins, doors and a member app in Arabic and English.',
    h1: 'Gym software for Kuwait.',
    lede: 'For gyms in Kuwait City, Salmiya, Hawalli and Farwaniya. Members, classes, doors and staff in one system, with an Arabic member app and a team on WhatsApp seven days a week.',
    points: [
      [
        'A timetable that moves with the season',
        'Change the class timetable per branch in minutes, for Ramadan nights or the summer, and members see it live in the app.',
      ],
      [
        'Win back members who drift off',
        'When someone stops coming or lets a plan run out, Gym Thing sends them a WhatsApp message to bring them back.',
      ],
      [
        'Staff clock in at the branch',
        'Your team clocks in from their phone, only at the branch, and you see who is in from yours.',
      ],
      [
        'No VAT? Switch it off',
        'Run without VAT today, and if it arrives, set your rate once and every new sale carries it.',
      ],
    ],
    faq: [
      [
        'Can members see and book classes in the app?',
        'Yes. Members see the live timetable with places left, book and cancel, and your front desk can book for them too.',
      ],
      [
        'Can staff clock in from their phones?',
        'Yes, from the staff app, and only at their branch. Anything outside it waits for a manager to approve.',
      ],
      [
        'Your team is in Bahrain. How does support work?',
        'Bahrain is on the same clock as Kuwait. Reach us on WhatsApp, phone or email 7 days a week, and get a reply the same day.',
      ],
      [
        'How much does it cost?',
        "One yearly price based on your gym's size, with every module included. Start with a free trial of up to 3 months.",
      ],
    ],
  },
  {
    slug: 'oman',
    name: 'Oman',
    title: 'Gym Management Software in Oman',
    description:
      'Gym management software for Oman: memberships, payment links on WhatsApp, 5% VAT invoices, a front-desk till, doors and a member app in Arabic and English.',
    h1: 'Gym software for Oman.',
    lede: 'For gyms in Muscat, Sohar, Salalah and Nizwa. Members, payments, the front desk and payroll in one system, priced by the size of your gym.',
    points: [
      [
        'Start small, grow into it',
        'One price by the size of your gym, with every module included. Add a second branch later and it is already there.',
      ],
      [
        'Payments on WhatsApp',
        'Send a payment link with a ready message in Arabic or English. The member pays by card, Apple Pay or Google Pay and the plan starts.',
      ],
      [
        'A till for the front desk',
        'Sell drinks, supplements and towels in four taps, send the receipt on WhatsApp, and keep count of every bottle.',
      ],
      [
        '5% VAT, worked out for you',
        'Enter the price the member pays and Gym Thing splits out the VAT. Every sale gets a numbered invoice with your VAT number.',
      ],
    ],
    faq: [
      [
        'Is it worth it for a small gym?',
        "The price is set by your gym's size, so a small gym pays a small gym's price. Try it free for up to 3 months first.",
      ],
      [
        'Can we sell drinks and supplements at the desk?',
        'Yes. The till sells in a few taps, takes cash or card, and keeps stock per branch with low-stock warnings.',
      ],
      [
        'Your team is in Bahrain. How does support work?',
        'Bahrain is one hour behind Muscat. Reach us on WhatsApp, phone or email 7 days a week, and get a reply the same day.',
      ],
      [
        'How much does it cost?',
        "One yearly price based on your gym's size, with every module included. Start with a free trial of up to 3 months.",
      ],
    ],
  },
]
