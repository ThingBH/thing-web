export type Comparison = {
  slug: string
  name: string
  title: string
  lede: string
  /** Search description, when it should differ from the lede. */
  description?: string
  /** Not a vendor (spreadsheets, a home-built system): the page drops "their website" wording and mid-sentence names. */
  generic?: true
  they: string
  strengths: string[]
  /** [topic, Gym Thing, them]; the first row may be a header and is skipped. */
  rows: [topic: string, us: string, them: string][]
  differences: [heading: string, text: string][]
  switching: string
  faq: [question: string, answer: string][]
  sources: [label: string, url: string, checked: string][]
}

// Competitor facts checked against the sources listed per entry, on the date beside each source.
export const comparisons: Comparison[] = [
  {
    slug: 'mindbody',
    name: 'Mindbody',
    title: 'Gym Thing vs Mindbody',
    lede: 'Mindbody is a mature booking platform with a large consumer marketplace. Gym Thing is built in Bahrain for gyms that take BenefitPay, run GOSI payroll and want an Arabic member app.',
    they: 'Mindbody is a booking and business platform founded in San Luis Obispo, California, and now part of Playlist alongside ClassPass, Booker and EGYM. It suits studios and wellness businesses that want to be found on the Mindbody consumer app and are paid in the markets it supports.',
    strengths: [
      'A free listing on the Mindbody app, which Mindbody says draws more than 3 million shoppers a month.',
      'Unlimited staff users on every plan and no onboarding fee.',
      'Mindbody Payments supports Apple Pay, Google Pay, Tap to Pay and local methods in more than 40 countries.',
      'Trustpilot reviewers often praise its onboarding staff; it scores 4.4 from 2,334 reviews.',
      'A Brivo integration that syncs members into cloud door access.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'Mindbody'],
      ['Arabic member app', 'Yes, Arabic and English', 'Not listed; app lists English, Spanish'],
      ['BenefitPay', 'Yes', 'Not listed'],
      ['Online payments in Bahrain', 'Benefit, Apple Pay, Google Pay, cards', '40+ countries; Bahrain not named'],
      ['WhatsApp', 'Payment links that start the membership', 'Not listed; email and text'],
      ['Bahrain VAT invoices', 'CR, VAT number, three-decimal BHD', 'VAT tools listed; Bahrain not specified'],
      ['GOSI and WPS payroll', 'Yes, with branded payslips', 'Not listed'],
      ['Gantner turnstiles', 'Yes, or phone tap, or iPad', 'Not listed; Brivo integration'],
      ['Branded app', 'Yours in the stores, or in ours', 'Add-on on Accelerate and Ultimate'],
      ['Apple and Google Wallet passes', 'Yes, plus NFC tap', 'Not listed'],
      ['Team', 'Seef, Bahrain', 'Founded in California; global hubs'],
      ['Pricing', 'One price by gym size', 'From US$79 a month, then quote'],
      ['Setup and moving data', 'Included, with staff training', 'No onboarding fee; data transfer may cost'],
      ['Free trial', 'Up to 3 months', 'Not listed'],
    ],
    differences: [
      [
        'Paid the way Bahrain pays',
        'Mindbody Payments covers more than 40 countries, but its payments page does not name Bahrain or BenefitPay. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash, and a WhatsApp payment link starts the membership the moment it is paid.',
      ],
      [
        'Arabic for members',
        "The Mindbody app lists English and Spanish in the App Store. Gym Thing's member app is in Arabic and English, so each member uses the language they prefer.",
      ],
      [
        'Payroll and VAT done locally',
        'Gym Thing runs GOSI and WPS payroll with branded payslips and issues VAT invoices with your CR and VAT number in three-decimal BHD. Mindbody does not list GOSI or WPS, so payroll stays in a separate tool.',
      ],
      [
        'Help in your time zone',
        "Our team is in Seef and does your setup, moves your members over and trains your staff. Mindbody's company page describes global hubs but does not name a Gulf office.",
      ],
    ],
    switching:
      'We move your members, plans and history over from Mindbody, set up your branches and train your staff, all included. You can run Gym Thing free for up to 3 months before paying. Mindbody says cancellation may need advance notice, so check your agreement first.',
    faq: [
      [
        'Is Gym Thing cheaper than Mindbody?',
        'Mindbody starts at US$79 a month in North America and Asia, with higher plans by quote and the branded app as an add-on. Gym Thing has one price by gym size with no tiers, and we share yours while we set up your free trial, so you can compare like for like.',
      ],
      [
        'Will we lose bookings from the Mindbody app?',
        'The Mindbody marketplace is part of Mindbody, so yes. If many new members find you there, weigh that. Gym Thing gives you your own branded app and WhatsApp payment links instead.',
      ],
      [
        'Can we keep our member history?',
        'Yes. Moving members, plans and history over is part of setup, at no extra cost.',
      ],
      [
        'Does Gym Thing work with Gantner gates?',
        'Yes. Use Gantner turnstiles, phone-tap readers, or an iPad at reception if you have no gates.',
      ],
    ],
    sources: [
      ['Mindbody pricing and FAQ', 'https://www.mindbodyonline.com/business/pricing', '20 Oct 2026'],
      ['Mindbody Payments', 'https://www.mindbodyonline.com/business/payments', '20 Oct 2026'],
      ['Mindbody company page', 'https://www.mindbodyonline.com/company', '20 Oct 2026'],
      [
        'Mindbody and Brivo press release',
        'https://www.mindbodyonline.com/company/press/mindbody-partners-with-brivo-to-bring-better-security-to-the-wellness-industry-with-brivos',
        '20 Oct 2026',
      ],
      [
        'Mindbody app, App Store Bahrain',
        'https://apps.apple.com/bh/app/mindbody-fitness-wellness/id689501356',
        '20 Oct 2026',
      ],
      [
        'Playlist and EGYM merger',
        'https://insider.fitt.co/press-release/playlist-and-egym-complete-merger-to-power-the-worlds-most-comprehensive-fitness-wellness-operating-system/',
        '20 Oct 2026',
      ],
      ['Mindbody on Trustpilot', 'https://www.trustpilot.com/review/mindbodyonline.com', '20 Oct 2026'],
    ],
  },

  {
    slug: 'glofox',
    name: 'Glofox',
    title: 'Gym Thing vs Glofox',
    lede: 'Glofox is a polished studio platform from ABC Fitness with a strong branded app. Gym Thing is built in Bahrain for BenefitPay, Arabic, GOSI payroll and turnstiles.',
    they: 'Glofox was founded in Dublin and is now part of ABC Fitness, serving operators in more than 80 countries. It suits boutique studios and franchises in markets where Stripe or its other card gateway is available.',
    strengths: [
      'A standalone branded app that Glofox designs, builds and publishes, typically live in 4 to 6 weeks.',
      'Payment links for overdue invoices with card, Apple Pay and Google Pay, sent by hand or by automation.',
      'A WhatsApp inbox inside the dashboard, now in pilot at selected locations.',
      'Door access through Kisi and Passport Technologies, including Kisi tap-to-unlock in the branded app.',
      'Trustpilot reviewers often mention ease of use and helpful onboarding.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'Glofox'],
      ['Arabic member app', 'Yes, Arabic and English', 'Not in its listed languages'],
      ['BenefitPay', 'Yes', 'Not listed'],
      [
        'Online payments in Bahrain',
        'Benefit, Apple Pay, Google Pay, cards',
        'Stripe not in Bahrain; Mastercard gateway listed',
      ],
      ['WhatsApp', 'Payment links that start the membership', 'Inbox in pilot; links pasted manually'],
      ['Bahrain VAT invoices', 'CR, VAT number, three-decimal BHD', 'Tax rates; Bahrain format not listed'],
      ['GOSI and WPS payroll', 'Yes, with branded payslips', 'Trainer pay report; GOSI, WPS not listed'],
      ['Gantner turnstiles', 'Yes, or phone tap, or iPad', 'Not listed; Kisi, Passport Technologies'],
      ['Branded app', 'Yours in the stores, or in ours', 'Standalone app, bought separately'],
      ['Apple and Google Wallet passes', 'Yes, plus NFC tap', 'Not listed; Kisi tap-to-unlock'],
      ['Team', 'Seef, Bahrain', 'US, Brazil, Europe, Australia'],
      ['Pricing', 'One price by gym size', 'By quote'],
      ['Setup and moving data', 'Included, with staff training', 'Onboarding manager; fees not listed'],
      ['Free trial', 'Up to 3 months', 'Not listed; free demo'],
    ],
    differences: [
      [
        'Card payments that work here',
        "Glofox Payments runs on Stripe, and neither Glofox's country table nor Stripe's own list includes Bahrain. Glofox also lists a Mastercard gateway, without saying where it applies. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash out of the box.",
      ],
      [
        'Arabic for members',
        "Glofox lists 18 languages for its dashboard and member app, and Arabic is not one of them. It says a language change may carry a translation fee. Gym Thing's member app is in Arabic and English as standard.",
      ],
      [
        'WhatsApp that collects money',
        "Glofox's WhatsApp inbox is a pilot, and its payment links only cover overdue invoices on Stripe. In Gym Thing, a WhatsApp payment link sells the membership and starts it when paid.",
      ],
      [
        'Front desk and payroll in one',
        'Gym Thing connects to Gantner turnstiles, reads Bahraini and GCC ID cards at the desk and runs GOSI and WPS payroll. Glofox lists trainer pay reports but not GOSI or WPS.',
      ],
    ],
    switching:
      'We move your members, plans and history over from Glofox and set up your branches, payments and staff, with training included. You can run Gym Thing free for up to 3 months before paying, alongside Glofox until you are ready.',
    faq: [
      [
        'Can Glofox take payments in Bahrain?',
        'Its help centre lists Stripe countries, and Bahrain is not among them. It also lists a Mastercard gateway but does not say which countries it covers, so ask Glofox directly.',
      ],
      [
        'Does Glofox have a branded app?',
        'Yes. Glofox builds and publishes a standalone branded app, bought separately. Gym Thing gives you your own app in the stores, or your gym inside the Gym Thing app.',
      ],
      [
        'Does Glofox support WhatsApp?',
        'It has a WhatsApp inbox in pilot at selected locations. Gym Thing sends automations and payment links by WhatsApp to every gym.',
      ],
      [
        'How long does moving over take?',
        'We handle the move for you, including members, plans and history, and train your team before you go live.',
      ],
    ],
    sources: [
      ['Glofox pricing page', 'https://www.glofox.com/pricing/', '20 Oct 2026'],
      ['Glofox about page', 'https://www.glofox.com/about/', '20 Oct 2026'],
      ['Glofox contact page', 'https://www.glofox.com/contact-us/', '20 Oct 2026'],
      [
        'Glofox help: Set up Glofox Payments (Stripe)',
        'https://support.glofox.com/hc/en-us/articles/46466480893204-How-to-Set-up-Glofox-Payments-Stripe',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Getting started with payment processing',
        'https://support.glofox.com/hc/en-us/articles/46466538745236-Getting-Started-with-Payment-Processing',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Change the default language',
        'https://support.glofox.com/hc/en-us/articles/46424635188756-How-to-Change-the-Default-Language-in-Glofox',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Conversations, WhatsApp',
        'https://support.glofox.com/hc/en-us/articles/46385383383188-Conversations-WhatsApp',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Payment links',
        'https://support.glofox.com/hc/en-us/articles/46457162945300-Using-Payment-Links-to-Collect-Failed-Subscription-Payments',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Standalone app process',
        'https://support.glofox.com/hc/en-us/articles/46443858038292-Standalone-App-Requirements-and-Process',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Kisi access control',
        'https://support.glofox.com/hc/en-us/articles/46378931802004-Integrating-Access-Control-with-Kisi',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Pay rates',
        'https://support.glofox.com/hc/en-us/articles/46455615797780-New-Introducing-our-Pay-Rates-Feature',
        '20 Oct 2026',
      ],
      [
        'Glofox help: Sales tax, tax-inclusive',
        'https://support.glofox.com/hc/en-us/articles/46456978236692-How-to-Set-Up-Sales-Tax-in-Glofox-for-Tax-Inclusive-Businesses',
        '20 Oct 2026',
      ],
      ['Stripe global availability', 'https://stripe.com/global', '20 Oct 2026'],
      [
        'ThinkBusiness: Glofox acquired by ABC Fitness',
        'https://www.thinkbusiness.ie/articles/glofox-abc-fitness-solutions/',
        '20 Oct 2026',
      ],
      ['Glofox on Trustpilot', 'https://www.trustpilot.com/review/glofox.com', '20 Oct 2026'],
    ],
  },

  {
    slug: 'perfect-gym',
    name: 'Perfect Gym',
    title: 'Gym Thing vs Perfect Gym',
    lede: 'Perfect Gym is enterprise club software with wide hardware support, used by large chains. Gym Thing is built in Bahrain, with BenefitPay, GOSI payroll and one price by size.',
    they: 'Perfect Gym is club management software from Warsaw, part of Hamburg-based Sport Alliance since May 2024. It suits multi-site chains that want deep configuration, a long list of hardware integrations and a formal implementation project.',
    strengths: [
      'A long list of supported access hardware, including Gantner, Suprema, ZKTeco and Assa Abloy readers.',
      'Published starting prices per club, from €179 for Studio to €575 for Enterprise.',
      'Its Perfect Gym Go member app lists Arabic among more than 20 languages.',
      'Listed payment providers in the UAE, Saudi Arabia, Qatar and Kuwait.',
      'Chosen by GymNation, a large GCC chain, to power its growth.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'Perfect Gym'],
      ['Arabic member app', 'Yes, Arabic and English', 'Yes, Perfect Gym Go lists Arabic'],
      ['BenefitPay', 'Yes', 'Not listed'],
      ['Online payments in Bahrain', 'Benefit, Apple Pay, Google Pay, cards', 'No Bahrain provider listed'],
      ['WhatsApp', 'Payment links that start the membership', 'Not listed'],
      ['Bahrain VAT invoices', 'CR, VAT number, three-decimal BHD', 'VAT rates per club; Bahrain not specified'],
      ['GOSI and WPS payroll', 'Yes, with branded payslips', 'Commission module; GOSI, WPS not listed'],
      ['Gantner turnstiles', 'Yes, or phone tap, or iPad', 'Yes, plus Suprema, ZKTeco and more'],
      ['Branded app', 'Yours in the stores, or in ours', 'White-label app, priced by sales'],
      ['Apple and Google Wallet passes', 'Yes, plus NFC tap', 'Not listed'],
      ['Team', 'Seef, Bahrain', 'Warsaw and Melbourne offices'],
      ['Pricing', 'One price by gym size', 'From €179 per club, then quote'],
      ['Setup and moving data', 'Included, with staff training', 'Required implementation, scoped by quote'],
      ['Free trial', 'Up to 3 months', 'Not listed; free demo'],
    ],
    differences: [
      [
        'Payments for Bahrain',
        "Perfect Gym's payment provider list covers the UAE, Saudi Arabia, Qatar and Kuwait but has no entry for Bahrain. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash for every gym here.",
      ],
      [
        'One price, everything included',
        'Perfect Gym sells four packages per club, with the mobile app, CRM and kiosk as add-ons and a required implementation. Gym Thing has one price by gym size, and setup, moving members over and training are included.',
      ],
      [
        'Payroll and WhatsApp built in',
        "Gym Thing runs GOSI and WPS payroll with branded payslips and sends automations and payment links by WhatsApp. Perfect Gym's help centre lists none of GOSI, WPS or WhatsApp.",
      ],
      [
        'Sized for independent gyms too',
        'Perfect Gym is designed for chains and enterprise clubs. Gym Thing suits a single gym or a growing group, with multi-branch, roles and a custom domain when you need them.',
      ],
    ],
    switching:
      'We move your members, plans and history over from Perfect Gym and keep your Gantner turnstiles where they are. Setup and staff training are included, and you can run Gym Thing free for up to 3 months before paying.',
    faq: [
      [
        'Can we keep our Gantner hardware?',
        'Yes. Gym Thing works with Gantner turnstiles, and also with phone-tap readers or an iPad at reception.',
      ],
      [
        'Does Perfect Gym have an Arabic app?',
        "Yes. Its Perfect Gym Go app lists Arabic in the App Store. Gym Thing's member app is in Arabic and English too, with Apple and Google Wallet passes.",
      ],
      [
        'How do the prices compare?',
        'Perfect Gym starts at €179 per club for Studio and rises to €575 for Enterprise, with add-ons and implementation quoted. Gym Thing has one price by gym size with no tiers.',
      ],
      [
        'Is Perfect Gym part of ABC Fitness?',
        'No. Sport Alliance, based in Hamburg, announced its acquisition of Perfect Gym in May 2024.',
      ],
    ],
    sources: [
      ['Perfect Gym pricing', 'https://www.perfectgym.com/en/pricing', '20 Oct 2026'],
      ['Perfect Gym contact page', 'https://www.perfectgym.com/en/contact', '20 Oct 2026'],
      [
        'Perfect Gym help: Compatible access control devices',
        'https://help.perfectgym.com/hc/en-001/articles/39316450793745-List-of-compatible-Access-Control-devices',
        '20 Oct 2026',
      ],
      [
        'Perfect Gym help: Payment providers list',
        'https://help.perfectgym.com/hc/en-001/articles/39316236170001-Payment-Providers-List',
        '20 Oct 2026',
      ],
      [
        'Perfect Gym help: Taxes overview',
        'https://help.perfectgym.com/hc/en-001/articles/39316663978129-Taxes-Overview',
        '20 Oct 2026',
      ],
      [
        'Perfect Gym help: White-label mobile app supplement',
        'https://help.perfectgym.com/hc/en-001/articles/42160794841745-Mobile-application-Supplement-to-the-Agreement',
        '20 Oct 2026',
      ],
      ['Perfect Gym Go, App Store Bahrain', 'https://apps.apple.com/bh/app/perfect-gym-go/id1437382071', '20 Oct 2026'],
      [
        'Sport Alliance: PerfectGym joins Sport Alliance',
        'https://sportalliance.com/en/press/perfectgym-joins-sport-alliance/',
        '20 Oct 2026',
      ],
      [
        'Health Club Management: GymNation and Perfect Gym',
        'https://www.healthclubmanagement.co.uk/health-club-management-press-releases/is-the-weight-lifting-gymnation-unveils-the-worry-bench-for-world-mental-health-day-2026/363732',
        '20 Oct 2026',
      ],
    ],
  },

  {
    slug: 'tamarran',
    name: 'Tamarran',
    title: 'Gym Thing vs Tamarran',
    lede: 'Tamarran is a Bahraini booking marketplace and studio system with Arabic support. Gym Thing is a full gym system, from turnstiles and payroll to VAT invoices and WhatsApp payments.',
    they: 'Tamarran Sports Online Services W.L.L. is a Bahraini company running a sports booking app and management software for gyms, studios and trainers in the GCC. It suits studios and academies that want bookings from its consumer marketplace and a local team.',
    strengths: [
      'A Bahraini company that offers support 24/7 in Arabic and English, with unlimited training.',
      'A consumer marketplace that it says has 20,000 active users and 60,000 bookings a month.',
      'Accepts Benefit cards through Credimax in Bahrain, and PayTabs in Saudi Arabia.',
      'Publishes branded booking apps for studios in Bahrain and Saudi Arabia.',
      'Arabic and English website for businesses.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'Tamarran'],
      ['Arabic member app', 'Yes, Arabic and English', 'App Store lists English only'],
      ['BenefitPay', 'Yes', 'Not listed; Benefit cards via Credimax'],
      ['Online payments in Bahrain', 'Benefit, Apple Pay, Google Pay, cards', 'Cards and Benefit via Credimax'],
      ['WhatsApp', 'Payment links that start the membership', 'Not listed'],
      ['Bahrain VAT invoices', 'CR, VAT number, three-decimal BHD', 'Not listed'],
      ['GOSI and WPS payroll', 'Yes, with branded payslips', 'Not listed'],
      ['Gantner turnstiles', 'Yes, or phone tap, or iPad', 'Access control listed as add-on'],
      ['Branded app', 'Yours in the stores, or in ours', 'Add-on; publishes standalone studio apps'],
      ['Apple and Google Wallet passes', 'Yes, plus NFC tap', 'Not listed'],
      ['Team', 'Seef, Bahrain', 'Bahrain'],
      ['Pricing', 'One price by gym size', 'Plans per branch; prices not shown'],
      ['Marketplace commission', 'None', '10% per booking on Get Listed'],
      ['Free trial', 'Up to 3 months', 'Not listed; free demo'],
    ],
    differences: [
      [
        'A gym system, not a marketplace',
        'Tamarran grew from a booking marketplace and charges 10% commission on its Get Listed plan. Gym Thing takes no commission on your sales and focuses on running the gym: memberships, front desk, POS, staff and payroll.',
      ],
      [
        'Payroll and VAT for Bahrain',
        "Gym Thing runs GOSI and WPS payroll with branded payslips and issues VAT invoices with your CR and VAT number in three-decimal BHD. Tamarran's business pages do not list payroll or VAT invoicing.",
      ],
      [
        'Gates, wallets and ID cards',
        'Gym Thing works with Gantner turnstiles and phone-tap readers, issues Apple and Google Wallet passes and reads Bahraini and GCC ID cards at the desk. Tamarran lists access control as an add-on without naming hardware.',
      ],
      [
        'Arabic in the member app',
        "Tamarran supports businesses in Arabic and English, but its App Store listings show English as the app language. Gym Thing's member app runs fully in Arabic and English.",
      ],
    ],
    switching:
      'We move your members, plans and history over from Tamarran and set up payments, branches and staff with you, with training included. You can run Gym Thing free for up to 3 months before paying.',
    faq: [
      [
        'Both are in Bahrain. What is the difference?',
        'Tamarran centres on bookings and its consumer marketplace. Gym Thing covers the whole gym, including turnstiles, POS with stock per branch, GOSI and WPS payroll, VAT invoices and WhatsApp payments.',
      ],
      [
        'Does Tamarran take BenefitPay?',
        'Its terms say it accepts Visa, Mastercard and Benefit cards through Credimax in Bahrain. BenefitPay is not mentioned. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash.',
      ],
      [
        'Can we keep a branded app?',
        'Yes. Gym Thing gives you your own branded app in the App Store and Google Play, or your gym inside the Gym Thing app.',
      ],
      [
        'What does Tamarran cost?',
        'Its Get Listed plan has a US$50 setup fee and 10% commission per booking. Prices for its monthly plans are not shown on its site: its five plans, from Manager to Ultimate, are each by quote, with setup, training, data migration and live support included.',
      ],
      [
        'What happens if we cancel Tamarran?',
        'Its refund policy says every eligible refund carries a 50% administrative fee and can take up to 30 business days. Its own example: a $1,200 annual plan ended after 6 months refunds $300. Gym Thing is one monthly price, and you can run it free for up to 3 months before paying.',
      ],
    ],
    sources: [
      ['Tamarran for business', 'https://www.tamarran.com/en/business', '20 Oct 2026'],
      ['Tamarran for business, Arabic', 'https://www.tamarran.com/ar/business', '20 Oct 2026'],
      ['Tamarran terms and conditions', 'https://www.tamarran.com/En/content/Terms', '20 Oct 2026'],
      ['Tamarran app, App Store Bahrain', 'https://apps.apple.com/bh/app/tamarran/id1167408314', '20 Oct 2026'],
      [
        'Tamarran Owner app, App Store Bahrain',
        'https://apps.apple.com/bh/app/tamarran-owner/id1242559122',
        '20 Oct 2026',
      ],
      [
        'CrossFit Riffa app by Tamarran, App Store Bahrain',
        'https://apps.apple.com/bh/app/crossfit-riffa/id6443648623',
        '20 Oct 2026',
      ],
      ['Flat6Labs: Tamarran profile', 'https://flat6labs.com/fr/?p=19079', '20 Oct 2026'],
      ['Tamarran refund policy', 'https://tamarran.co/en/refund-policy/', '21 Oct 2026'],
      ['Tamarran pricing', 'https://tamarran.co/en/pricing/', '21 Oct 2026'],
    ],
  },

  {
    slug: 'gymnago',
    name: 'Gymnago',
    title: 'Gym Thing vs Gymnago',
    lede: 'Gymnago is a Bahrain-registered, all-in-one platform sold across the GCC, with a branded app per gym. Gym Thing adds BenefitPay, GOSI payroll, VAT invoices and turnstiles.',
    they: 'Gymnago is owned and operated by Pixel Mind IT Solutions W.L.L., with a developer address in Al Hadd, and says it launched its first web platform in Bahrain. It suits gyms and wellness businesses across the GCC that want bookings, POS, loyalty and a branded app, and pay through gateways such as Knet, OmanNet or Qatar Pay.',
    strengths: [
      'Registered in Bahrain, with WhatsApp sales contacts for the UAE, Saudi Arabia and Kuwait.',
      'A branded app for each gym, published for clients mostly in Saudi Arabia and Bahrain.',
      'POS with inventory and multi-branch management.',
      'Loyalty and gift cards, plus workout and diet plans for members.',
      'Lists 18 payment options, including Knet, OmanNet, Qatar Pay, Apple Pay and PayPal.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'Gymnago'],
      ['BenefitPay', 'Yes', 'Not in its 18 payment options'],
      [
        'Online payments in Bahrain',
        'Benefit, Apple Pay, Google Pay, cards',
        'Apple Pay, Google Pay, cards; Benefit not listed',
      ],
      ['WhatsApp', 'Payment links that start the membership', 'Not in its integrations list'],
      ['Bahrain VAT invoices', 'CR, VAT number, three-decimal BHD', 'Not listed'],
      ['GOSI and WPS payroll', 'Yes, with branded payslips', 'Not listed'],
      ['Gantner turnstiles', 'Yes, or phone tap, or iPad', 'No access hardware in its integrations'],
      ['Branded app', 'Yours in the stores, or in ours', 'Yes, published under Pixel Mind'],
      ['Team', 'Seef, Bahrain', 'Bahrain, with GCC sales contacts'],
      ['Pricing', 'One monthly price by gym size', 'Not shown; book a demo'],
      ['Contract', 'Monthly, every module included', 'Monthly or annual, renews automatically'],
      ['Setup and moving data', 'Included, with staff training', 'Not listed'],
      ['Free trial', 'Up to 3 months', 'Not listed; book a demo'],
    ],
    differences: [
      [
        'BenefitPay, not just cards',
        "Gymnago's integrations page lists 18 payment options, from Knet to PayPal, and BenefitPay is not one of them. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash, and a payment link sent in WhatsApp starts the membership when it is paid.",
      ],
      [
        'Payroll and VAT done locally',
        "Gym Thing runs GOSI and WPS payroll with payslips and issues a VAT invoice for every sale. Gymnago's site does not list payroll or VAT invoicing, so they stay in a separate tool.",
      ],
      [
        'The door as well as the desk',
        'Gym Thing works with Gantner turnstiles, phone tap or an iPad at reception. Gymnago names no access hardware on its integrations page.',
      ],
      [
        'A price you see before you sign',
        'Gymnago shows no prices and its terms say a paid subscription is non-refundable once the period has begun. Gym Thing has one monthly price by gym size with every module included and no setup fee, and you can run it free for up to 3 months first.',
      ],
    ],
    switching:
      "We move your members, plans and history over from Gymnago, set up your branches and train your staff, all included. You can run Gym Thing free for up to 3 months before paying. Gymnago's terms say subscriptions renew automatically and are non-refundable once a period has begun, so check your renewal date first.",
    faq: [
      [
        'Gymnago is from Bahrain too. What is the difference?',
        'Gymnago is made by Pixel Mind IT Solutions W.L.L. and sells across the GCC, with bookings, a branded app, POS and loyalty. Gym Thing adds BenefitPay, GOSI and WPS payroll, a VAT invoice for every sale and Gantner turnstiles.',
      ],
      [
        'Does Gymnago take BenefitPay?',
        'Its integrations page lists 18 payment options, including Knet, OmanNet, Qatar Pay, Apple Pay and PayPal. BenefitPay is not among them. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash.',
      ],
      [
        'What does Gymnago cost?',
        'Its site shows no prices and asks you to book a demo. Its terms say subscriptions are billed monthly or annually and renew automatically. Gym Thing has one monthly price by gym size, with every module included and no setup fee.',
      ],
      [
        'Can we get a refund if we leave Gymnago mid-term?',
        'Its terms say any paid amount is non-refundable once the subscription period has begun. Plan your move around your renewal date, and run Gym Thing free for up to 3 months in the meantime.',
      ],
    ],
    sources: [
      ['Gymnago home page', 'https://gymnago.com/', '21 Oct 2026'],
      ['Gymnago about page', 'https://gymnago.com/about', '21 Oct 2026'],
      ['Gymnago integrations', 'https://gymnago.com/features/integrations', '21 Oct 2026'],
      ['Gymnago terms and conditions', 'https://gymnago.com/termsAndCondition', '21 Oct 2026'],
      [
        'Gymnago, Google Play Bahrain',
        'https://play.google.com/store/apps/details?id=com.gymnago&hl=en&gl=bh',
        '21 Oct 2026',
      ],
      ['Gymnago, App Store Bahrain', 'https://apps.apple.com/bh/app/gymnago/id6499132679', '21 Oct 2026'],
      [
        'Iron House Gym app by Pixel Mind, Google Play',
        'https://play.google.com/store/apps/details?id=com.ironHouse.gym',
        '21 Oct 2026',
      ],
    ],
  },

  {
    slug: 'flyby',
    name: 'FLYBY',
    title: 'Gym Thing vs FLYBY',
    lede: 'FLYBY is club software from Istanbul with deep hardware integrations, used from gyms to hotels and water parks. Gym Thing is built in Bahrain for gyms, with BenefitPay and GOSI payroll.',
    they: 'FLYBY is club management software developed in 2004 by Senkron Tech of Istanbul, which says it has 30 years of software and R&D experience. Its 2026 brochure puts it in more than 600 locations in over 25 countries, including Bahrain and the rest of the GCC. It suits large clubs, spas, hotels and resorts that want one system across many kinds of venue.',
    strengths: [
      'A long track record, in use since 2004.',
      'Integrations with Gantner, Technogym, Life Fitness and InBody, plus an open API.',
      'Covers spas, water parks, golf, kids clubs and hotel PMS as well as gyms.',
      'A POS and e-wallet that takes card, wristband, NFC or QR payments.',
      'Automated SMS, e-mail and push messages, with call lists for sales teams.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'FLYBY'],
      ['Arabic member app', 'Yes, Arabic and English', 'Multiple languages; Arabic not named'],
      ['BenefitPay', 'Yes', 'Not listed'],
      ['Online payments in Bahrain', 'Benefit, Apple Pay, Google Pay, cards', 'Stripe and HyperPay'],
      ['WhatsApp', 'Payment links that start the membership', 'Not listed; SMS, e-mail, push'],
      ['Bahrain VAT invoices', 'CR, VAT number, three-decimal BHD', 'Fiscal integration; Bahrain not specified'],
      ['GOSI and WPS payroll', 'Yes, with branded payslips', 'Payroll and commissions; GOSI, WPS not listed'],
      ['Gantner turnstiles', 'Yes, or phone tap, or iPad', 'Yes, plus wristbands and QR'],
      ['Branded app', 'Yours in the stores, or in ours', 'White-label member app'],
      ['Built for', 'Gyms and studios', 'Gyms, spas, hotels, water parks, golf'],
      ['Team', 'Seef, Bahrain', 'Istanbul, Turkey'],
      ['Pricing', 'One monthly price by gym size', 'Prices not shown'],
      ['Setup and moving data', 'Included, with staff training', 'Not listed'],
      ['Free trial', 'Up to 3 months', 'Not listed'],
    ],
    differences: [
      [
        'Paid the way Bahrain pays',
        "FLYBY's brochure names Stripe and HyperPay for online sales and does not list BenefitPay. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash, and a payment link sent in WhatsApp starts the membership when it is paid.",
      ],
      [
        'Payroll for Bahrain',
        'FLYBY lists payroll and commission management but does not name GOSI or WPS. Gym Thing runs GOSI and WPS payroll with payslips and issues a VAT invoice for every sale.',
      ],
      [
        'Made for gyms, run from Seef',
        'FLYBY covers everything from water parks to hotels from Istanbul. Gym Thing is built for gyms, and our team in Seef sets you up, moves your members and trains your staff, with support on WhatsApp, phone and email 7 days a week.',
      ],
      [
        'One price, every module',
        'FLYBY does not publish prices. Gym Thing has one monthly price by gym size with every module included, no setup fee and no commission on your sales.',
      ],
    ],
    switching:
      'We move your members, plans and history over from FLYBY and keep your Gantner turnstiles where they are. Setup and staff training are included, and you can run Gym Thing free for up to 3 months before paying.',
    faq: [
      [
        'Can we keep our Gantner hardware?',
        'Yes. Gym Thing works with Gantner turnstiles, and also with phone tap or an iPad at reception.',
      ],
      [
        'Does FLYBY take BenefitPay?',
        'Its 2026 brochure names Stripe and HyperPay for online sales, and BenefitPay is not listed. Gym Thing takes BenefitPay, Benefit, Apple Pay, Google Pay, cards and cash.',
      ],
      [
        'FLYBY has been around since 2004. Why look at Gym Thing?',
        'FLYBY suits operators that run spas, hotels or water parks alongside the gym and want its hardware integrations. If you run a gym in Bahrain and want BenefitPay, GOSI and WPS payroll and a team in Seef, Gym Thing is built for that.',
      ],
      [
        'What does FLYBY cost?',
        'FLYBY does not publish prices. Gym Thing has one monthly price by gym size with every module included, and we share yours while we set up your free trial.',
      ],
    ],
    sources: [
      ['Senkron Tech: FLYBY', 'https://www.senkrontech.com/en/operations/group-companies/flyby/', '21 Oct 2026'],
      [
        'FLYBY studio brochure, March 2026',
        'https://www.flybyglobal.com/wp-content/uploads/2026/03/flyby-studio-mart-2026-en.pdf',
        '21 Oct 2026',
      ],
    ],
  },

  {
    slug: 'vibe-coded',
    generic: true,
    name: "Your friend's AI-built system",
    title: 'Gym Thing vs a gym system your friend built with AI',
    lede: 'A friend who codes can build a gym system with AI in days, made exactly for your gym. Gym Thing takes care of what comes after: payments, security, VAT, payroll, the apps and support every day.',
    description:
      'Gym Thing compared with a gym system a friend built with AI: what the first version gives you, and what payments, security, VAT, payroll, apps and support need after it.',
    they: 'With AI coding tools, a friend who codes can put together a members list, a check-in screen and a payment page in days, built exactly the way you run the gym. It suits a small gym with simple needs and a friend with time to keep working on it.',
    strengths: [
      'Cheap or free to start, with no vendor contract.',
      'Built exactly around how your gym works.',
      'Ask for any change and it can be made.',
      'The person who built it is a friend who answers.',
      'A first version can be running in days.',
    ],
    rows: [
      ['Topic', 'Gym Thing', "Your friend's system"],
      [
        'Card and BenefitPay payments',
        'BenefitPay, Benefit, Apple Pay, Google Pay, cards, cash',
        'Needs a merchant account and card rules',
      ],
      [
        'Card data',
        'Goes through Tap, a licensed provider; never reaches us',
        'Up to you and your friend under PCI DSS',
      ],
      [
        'Security fixes and backups',
        'Data encrypted and backed up every day',
        'Up to your friend, for as long as it runs',
      ],
      ['VAT invoices', 'For every sale, numbered with no gaps', "Built to NBR's invoice rules by your friend"],
      ['GOSI and WPS payroll', 'Built in, with payslips', 'Separate sheet or accountant'],
      ['Door hardware', 'Gantner turnstiles, phone tap or iPad', 'Each device connected by your friend'],
      [
        'Member app in the stores',
        'Your brand, App Store and Google Play',
        'Developer accounts, store review, new OS versions',
      ],
      ['Arabic and English', 'Member app and staff app', 'Every screen translated and kept in step'],
      ['When your friend is busy', 'A team in Seef, Bahrain', 'Changes wait until they are free'],
      ['Staff training', 'Done by us at setup', 'Up to you and your friend'],
      ['Support at weekends', 'WhatsApp, phone, email, 7 days a week', 'When your friend has time'],
      ['Cost', 'One monthly price by gym size, no setup fee', 'Low to start; hosting, store fees and time after'],
    ],
    differences: [
      [
        'Taking money safely',
        "PCI DSS, the card industry's security standard, covers anyone who stores, processes or transmits card data, and taking cards or BenefitPay online needs a merchant account. In Gym Thing, card payments go through Tap, a licensed provider, so card numbers never reach us, and a payment link opened in WhatsApp starts the membership when it is paid.",
      ],
      [
        'Security never finishes',
        "Veracode's 2025 test of more than 100 AI models found security flaws in AI-written code in 45% of the coding tasks. That doesn't make your friend's code unsafe, but someone has to check and fix it for as long as it runs. Bahrain's Personal Data Protection Law also makes the gym responsible for protecting members' data, with fines of up to BD 20,000. In Gym Thing, your data is encrypted and backed up every day.",
      ],
      [
        "Bahrain's paperwork, built in",
        "NBR's VAT guide lists what every VAT invoice must show, including your VAT account number and a sequential invoice number, and LMRA requires private-sector employers to pay wages through the Wage Protection System. Gym Thing issues a VAT invoice for every sale, numbered with no gaps, and runs GOSI and WPS payroll with payslips.",
      ],
      [
        'A team, not one person',
        'Your friend has a job, a family and weekends, and may one day move on. Gym Thing has a team in Seef that sets you up, trains your staff and answers on WhatsApp, phone and email 7 days a week, with same-day replies.',
      ],
    ],
    switching:
      "We move your members, plans and history over from your friend's system or your spreadsheets, set everything up and train your staff. Your friend gets their evenings back, and you can run Gym Thing free for up to 3 months before paying.",
    faq: [
      [
        'My friend can build this for free. Why pay?',
        'The first version is the quick part. Payments, security fixes, backups, VAT invoices, payroll and app updates carry on every month after it. Gym Thing has one monthly price by gym size with every module included and no setup fee, and you can try it free for up to 3 months.',
      ],
      [
        'Can my friend put our app in the App Store and Google Play?',
        'Yes, with an Apple Developer Program membership at $99 a year and a Google Play account at $25 once, plus store review for each release. Both stores also set new minimums: since April 2026 Apple only accepts apps built with the iOS 26 SDK, and new apps and updates on Google Play must target Android 16. Gym Thing puts your branded member app in both stores, in Arabic and English.',
      ],
      [
        'Can you move our members from the system my friend built?',
        'Yes. Send us an export or a spreadsheet, however it looks, and we move your members, plans and history as part of setup.',
      ],
    ],
    sources: [
      [
        'Veracode: 2025 GenAI Code Security Report',
        'https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/',
        '21 Oct 2026',
      ],
      [
        'PCI Security Standards Council: PCI DSS',
        'https://www.pcisecuritystandards.org/standards/pci-dss/',
        '21 Oct 2026',
      ],
      [
        'Law No. 30 of 2018, Personal Data Protection Law (Articles 8 and 55)',
        'https://www.lloc.gov.bh/FullEn/K3018.docx',
        '21 Oct 2026',
      ],
      [
        'NBR: VAT General Guide (VAT invoices)',
        'https://www.nbr.gov.bh/publications/view/VAT_General_guide',
        '21 Oct 2026',
      ],
      ['NBR: VAT FAQs (VAT account number)', 'https://www.nbr.gov.bh/vat_faqs/2', '21 Oct 2026'],
      ['LMRA: Wage Protection System FAQs', 'https://lmra.gov.bh/en/faq/category/12', '21 Oct 2026'],
      ['Apple Developer Program', 'https://developer.apple.com/programs/', '21 Oct 2026'],
      [
        'Apple: SDK minimum requirements',
        'https://developer.apple.com/news/upcoming-requirements/?id=04282026a',
        '21 Oct 2026',
      ],
      [
        'Google Play: developer account registration fee',
        'https://support.google.com/googleplay/android-developer/answer/6112435?hl=en',
        '21 Oct 2026',
      ],
      [
        'Google Play: target API level requirements',
        'https://support.google.com/googleplay/android-developer/answer/11926878?hl=en',
        '21 Oct 2026',
      ],
    ],
  },

  {
    slug: 'spreadsheets',
    generic: true,
    name: 'Spreadsheets and paper',
    title: 'Gym Thing vs spreadsheets and paper',
    lede: 'Plenty of gyms in Bahrain run on Excel, WhatsApp and a paper register, and it works for a while. Gym Thing takes over the chasing, counting and copying once you outgrow it.',
    they: 'Running the gym on Excel, WhatsApp and a paper register costs nothing upfront and everyone already knows how. It suits a new gym with a few dozen members and an owner who is at the desk every day.',
    strengths: [
      'No subscription and nothing to install.',
      'Every member and every coach already uses WhatsApp.',
      'Total flexibility: add any column, any price, any exception.',
      'Works offline, with no system to learn.',
      'No contract and no vendor to depend on.',
    ],
    rows: [
      ['Topic', 'Gym Thing', 'Spreadsheets and paper'],
      ['Member app', 'Arabic and English, your brand', 'None'],
      ['Collecting renewals', 'WhatsApp link starts membership when paid', 'Messages sent one by one'],
      ['BenefitPay and cards', 'Recorded automatically against the member', 'Checked and typed by hand'],
      ['Who is in the gym', 'Turnstile, phone tap or iPad', 'Paper register at the desk'],
      ['VAT invoices', 'CR, VAT number, three-decimal BHD', 'Typed up by hand'],
      ['GOSI and WPS payroll', 'Built in, with branded payslips', 'Separate sheet or accountant'],
      ['Classes and PT packs', 'Bookings, waitlists, sessions counted', 'Group chats and tally marks'],
      ['Stock and POS', 'Stock per branch', 'Counted by hand'],
      ['Several branches', 'One system, roles per staff', 'One file per branch'],
      ['If the owner is away', 'Staff see everything they need', "It lives in one person's head"],
      ['Cost', 'One price by gym size', 'Free, paid in staff hours'],
    ],
    differences: [
      [
        'Renewals that collect themselves',
        'With spreadsheets, someone has to notice who expired and send each reminder. Gym Thing sends the reminder by WhatsApp or email, and the payment link starts the membership the moment it is paid.',
      ],
      [
        'One record, not five',
        "A member's payments, visits, classes and invoices usually sit in different sheets, chats and notebooks. In Gym Thing they sit on one profile, so reception, coaches and the owner see the same thing.",
      ],
      [
        'Compliance without the late nights',
        'VAT invoices with your CR and VAT number, three-decimal BHD totals, and GOSI and WPS payroll are produced by the system. No retyping at month end.',
      ],
      [
        'Ready to grow',
        'A second branch doubles the spreadsheets. In Gym Thing it is another branch in the same system, with its own stock, staff and reports.',
      ],
    ],
    switching:
      'Send us your spreadsheets as they are, however messy, and we move your members, plans and history into Gym Thing for you. Setup and training are included, and you can use it free for up to 3 months before paying.',
    faq: [
      [
        'We only have 80 members. Is it worth it?',
        'Try it free for up to 3 months and see how much time renewals and the register take with and without it. The price is set by gym size, so a small gym pays a small-gym price.',
      ],
      [
        'Our data is spread across files and notebooks. Can you still move it?',
        'Yes. Send us what you have and we clean it up and import it as part of setup.',
      ],
      [
        'Can we keep using WhatsApp?',
        'Yes. Gym Thing sends reminders, automations and payment links through WhatsApp, so members keep the channel they already use.',
      ],
    ],
    sources: [],
  },
]
