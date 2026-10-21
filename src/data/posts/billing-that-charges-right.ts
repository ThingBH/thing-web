import type { Post } from '../posts'

// Source: docs/research/2026-10-gym-software-complaints (report.html). Quotes are reused from the report with
// their URL and date. Gym Thing answers only use what the report and modules.ts claim (no auto-renew card billing).
export const post: Post = {
  slug: 'billing-that-charges-right',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['payments', 'gym-software'],
  en: {
    title: 'Billing that charges the right member, and money that reaches you',
    seoTitle: 'Gym billing software: right charges, fair fees, your own payouts',
    description:
      'Why gym billing software charges members wrongly, takes a cut and holds payouts, what to ask about payments before you sign, and how Gym Thing handles it.',
    lede: 'Billing is where gym software costs an owner real money. One member is charged for a plan they never bought. Another trains for months without paying. The processor takes 3.5% of every card payment, or holds your payouts while it checks who you are. We read what owners wrote about this, looked at why it keeps happening, and wrote down the questions worth asking before you sign. Then we show how Gym Thing handles each part.',
    blocks: [
      {
        type: 'note',
        text: "Every quote below links to the page we read it on, with its date. They come from our [research into gym software complaints](/blog/gym-software-problems/), read between 2025 and October 2026. A review is one person's experience, not proof of how every gym gets on with a product.",
      },

      { type: 'heading', id: 'why', text: 'Why billing goes wrong' },
      {
        type: 'text',
        paras: [
          'A membership is a chain: a plan, a price, a start date, a payment, an invoice, and a door that knows whether to open. Billing goes wrong when those links come apart.',
          "Many gym systems bill on a schedule. They keep the member's card and charge it on a set day, from a billing record that lives apart from the plan. If someone cancels, deletes or changes a plan and the billing record isn't updated, the charge still goes out. If a payment fails and nobody notices, the member keeps training.",
          'The second problem is who holds the money. Many platforms take card payments through their own payment account, or through one partner they picked. Your members pay into that account first. The software company sets the fee and decides when you get paid.',
        ],
      },

      { type: 'heading', id: 'wrong-charges', text: 'Members charged wrongly, or not at all' },
      {
        type: 'text',
        paras: [
          "For the owner, it's lost revenue and members who stop trusting the gym with their card. For the front desk, it's a day of refunds and apologies.",
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
          {
            quote: '"Charged an annual fee twice."',
            source: 'Trustpilot review of ABC Fitness by a gym member',
            url: 'https://www.trustpilot.com/review/abcfitness.com',
            date: '23 Aug 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'These go both ways. Some members pay for nothing, and others train for free. Both come from the same gap: money moving on its own schedule, apart from the plan it pays for.',
        ],
      },
      {
        type: 'answer',
        heading: 'Nothing is charged unless the member pays it',
        points: [
          'Gym Thing never takes money from a member on its own. Every payment is one the member makes, at the desk or through a payment link.',
          'Sell a plan at the desk, or send a payment link. The plan starts the moment the member pays, or on a date you choose.',
          'Every online payment is matched to its sale. If a member pays the same link twice, the extra payment is refunded.',
          "If money arrives but the plan doesn't start, the link is marked as needing attention, so staff can fix it or refund it.",
          'Only members with a valid plan get through the door.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks',
        caption: "Payment links in Gym Thing. Each one shows whether it's open, paid, expired or needs attention.",
      },

      { type: 'heading', id: 'processor', text: 'Stuck with one card processor, and its fees' },
      {
        type: 'text',
        paras: [
          "When the software picks the processor, you can't shop around. The fee comes with the package, and the only way to change it is to change your whole system.",
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
        ],
      },
      {
        type: 'text',
        paras: [
          "PushPress publishes card fees of 4.99% + 30¢ on its free plan and 2.89% + 30¢ on its Pro plan ([PushPress pricing](https://pushpress.com/pricing), read 21 Oct 2026). That's a published price, not a complaint.",
          'Small percentages add up. On BHD 8,000 of card payments a month, a 3.5% fee is BHD 280 a month, or BHD 3,360 a year.',
        ],
      },
      {
        type: 'answer',
        heading: 'Your own payment account, and no cut for us',
        points: [
          "Card and wallet payments go straight into your gym's own account with Tap, a licensed payment provider. We set it up for you.",
          "Gym Thing takes no commission on them. Tap's fees are agreed between you and Tap.",
          'Members pay however suits them: BenefitPay, Apple Pay, Google Pay, cards, cash or a payment link.',
          'At the desk, one sale can be split across cash and cards, and bank transfers, vouchers and cheques are recorded too.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'A payment link sent on WhatsApp, and the pay page it opens. Card details go to Tap, not to the gym.',
      },

      { type: 'heading', id: 'payouts', text: 'When your own money is held back' },
      {
        type: 'text',
        paras: ["This one hurts most. The members have paid and the work is done. The money just doesn't arrive."],
      },
      {
        type: 'quotes',
        items: [
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
          "When a software company takes payments under its own account, it carries the risk for every gym on it. So it runs checks, and while it checks, payouts can stop. That's the trade you make when the merchant account isn't in your gym's name. See [how Gym Thing compares with Glofox](/compare/glofox/) on payments in Bahrain.",
        ],
      },
      {
        type: 'answer',
        heading: "The merchant account is in your gym's name",
        points: [
          'Each gym has its own merchant account with Tap, and payouts go from Tap to your bank.',
          'Payout times are agreed between you and Tap.',
          'Revenue by payment method shows what came in by card, Benefit and cash for any period, so you can check it against your bank.',
          'Find any online payment by its link reference or Tap charge ID.',
        ],
        module: 'payments',
      },

      { type: 'heading', id: 'renewals', text: 'Renewals chased by hand' },
      {
        type: 'text',
        paras: [
          "The quietest loss isn't a wrong charge. It's the member whose plan ends on a Tuesday and who never comes back, because nobody reminded them. Front desks fill the gap by messaging members one by one.",
          "In October 2026, an [r/gymowner thread](https://www.reddit.com/r/gymowner/comments/1wxeguy/gym_owners_would_you_let_your_management_software/) asked owners whether they would let their software send renewal reminders from the gym's own WhatsApp number.",
        ],
      },
      {
        type: 'answer',
        heading: 'Reminders go out, and paying takes one tap',
        points: [
          'Members get a reminder email before their plan ends, without anyone sending it.',
          'Plans ending in the next 14 days are flagged for your team.',
          "One tap on the member's page opens WhatsApp with a payment link ready to send.",
          "A renewal starts the day the current plan ends, so there's no gap and no overlap.",
        ],
        module: 'memberships',
      },

      { type: 'heading', id: 'invoices', text: 'A VAT invoice for every sale' },
      {
        type: 'text',
        paras: [
          "Billing isn't finished when the money arrives. If your gym is registered for VAT, your sales need proper invoices, and your accountant needs them to add up. Gaps in the numbering, sales with no invoice, and refunds that simply vanish all turn into questions at the end of the quarter.",
        ],
      },
      {
        type: 'answer',
        heading: 'Every sale invoiced, every number accounted for',
        points: [
          'Memberships, PT packs and till sales each get a VAT invoice automatically, with your legal name, CR and VAT number.',
          'Invoice numbers run in order with no gaps, and restart each year.',
          'A voided sale drops out of your totals but keeps its number, so the sequence stays complete. Refunds show as deductions.',
          'Your accountant gets a sales report with net, VAT and gross for every sale, as a PDF or spreadsheet.',
        ],
        module: 'invoicing',
      },
      {
        type: 'screen',
        show: 'screen:Accounting',
        caption: 'Accounting in Gym Thing: revenue, VAT collected and revenue by payment method for the month.',
      },

      { type: 'heading', id: 'questions', text: 'Questions to ask about payments before you sign' },
      {
        type: 'text',
        paras: ['Take these to every demo, and ask for the answers in writing.'],
      },
      {
        type: 'list',
        items: [
          "Whose merchant account is it? Is it in your gym's name, or the software company's?",
          'What does each card payment cost, who sets that fee, and can you use another provider?',
          'Who decides when payouts reach your bank, and what can stop them?',
          'Can members pay the way they do here, with BenefitPay, Apple Pay, cards and cash, without a second card machine?',
          "When does a plan start: when it's sold, when it's paid, or on a date? What happens if the member never pays?",
          'If a member pays twice, who notices, and how does the money go back?',
          'What happens to scheduled charges when a member cancels or is deleted?',
          'Does every sale get a VAT invoice with your CR and VAT number, and do the numbers run without gaps?',
          'Can your accountant get a sales report without asking the software company?',
        ],
      },

      { type: 'heading', id: 'next', text: "If you're comparing systems" },
      {
        type: 'text',
        paras: [
          'Billing is one of [twelve problems owners keep reporting](/blog/gym-software-problems/) about their gym software. The best test is your own gym: [start with a free trial](/free-trial/), and we move your members over, so you see your real plans and payments before you pay anything.',
          'Contracts, price rises and leaving with your data are in [What gym software really costs after the first year](/blog/price-contracts-and-your-data/).',
        ],
      },
      {
        type: 'note',
        text: "English quotes are copied exactly as written. We left out reviewers' names. Dates are when the review was posted. Trustpilot moves reviews between pages as new ones arrive, so a quote may now sit on a different page from the one linked. Gym Thing is made by Thing W.L.L., Seef, Bahrain.",
      },
    ],
  },
  ar: {
    title: 'فوترة تحصّل المبلغ الصحيح، وأموال تصل إليك',
    seoTitle: 'برامج فوترة النوادي الرياضية: تحصيل صحيح ورسوم عادلة وأموال تصل إلى حسابك',
    description:
      'لماذا تخطئ برامج النوادي في تحصيل الاشتراكات وتقتطع نسبة وتحجز التحويلات، وما الأسئلة التي تطرحها عن المدفوعات قبل التوقيع، وكيف يتعامل Gym Thing مع ذلك.',
    lede: 'الفوترة هي المكان اللي يكلّف فيه برنامج النادي صاحبه فلوس حقيقية. عضو ينخصم منه على باقة عمره ما اشتراها. وعضو ثاني يتمرن شهور بدون ما يدفع. ومزود الدفع ياخذ 3.5% من كل دفعة بالبطاقة، أو يحجز تحويلاتك لين يتأكد منك. قرينا شنو كتبوا أصحاب النوادي عن هالشي، وشفنا ليش يتكرر، وكتبنا الأسئلة اللي تستاهل تسألها قبل لا توقّع. وبعدين نوريك شلون يتعامل Gym Thing مع كل جزء.',
    blocks: [
      {
        type: 'note',
        text: 'كل اقتباس تحت مربوط بالصفحة اللي قريناه فيها، مع تاريخه. وكلها من [بحثنا عن شكاوى برامج النوادي](/ar/blog/gym-software-problems/)، من مراجعات انكتبت بين 2025 وأكتوبر 2026. المراجعة تجربة شخص واحد، مو دليل على تجربة كل نادي مع البرنامج.',
      },

      { type: 'heading', id: 'why', text: 'ليش الفوترة تغلط' },
      {
        type: 'text',
        paras: [
          'الاشتراك سلسلة: باقة، وسعر، وتاريخ بداية، ودفعة، وفاتورة، وباب يعرف إذا يفتح أو لا. والفوترة تغلط لما هالحلقات تنفك عن بعض.',
          'أنظمة نوادي وايد تسحب الفلوس على جدول. تحفظ بطاقة العضو وتسحب منها في يوم محدد، من سجل فوترة منفصل عن الباقة. إذا أحد ألغى باقة أو حذفها أو غيّرها وسجل الفوترة ما تحدّث، السحب يصير على أي حال. وإذا فشلت دفعة وما أحد انتبه، العضو يظل يتمرن.',
          'المشكلة الثانية: منو ماسك الفلوس. منصات وايد تاخذ الدفع بالبطاقات عن طريق حساب الدفع حقها، أو عن طريق شريك واحد هي اختارته. أعضاءك يدفعون لهالحساب أول. والشركة اللي مسوية البرنامج هي اللي تحدد الرسوم وتقرر متى توصلك فلوسك.',
        ],
      },

      { type: 'heading', id: 'wrong-charges', text: 'مبالغ تنسحب من الأعضاء غلط، أو ما تنسحب أبداً' },
      {
        type: 'text',
        paras: [
          'صاحب النادي يخسر دخل، والأعضاء يوقفون يثقون في النادي على بطاقاتهم. والاستقبال يقضي يومه في الاسترجاعات والاعتذارات.',
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
          {
            quote: '«انخصمت مني رسوم سنوية مرتين.»',
            source: 'مراجعة على Trustpilot لـ ABC Fitness من عضو في نادي',
            url: 'https://www.trustpilot.com/review/abcfitness.com',
            date: '23 أغسطس 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'الغلط هني في الاتجاهين. أعضاء يدفعون على لا شي، وأعضاء يتمرنون ببلاش. والاثنين من نفس الفجوة: فلوس تمشي على جدولها بروحها، بعيد عن الباقة اللي هي حقها.',
        ],
      },
      {
        type: 'answer',
        heading: 'ما ينسحب شي إلا إذا العضو دفعه',
        points: [
          'Gym Thing عمره ما ياخذ فلوس من عضو بروحه. كل دفعة العضو هو اللي يدفعها، في الاستقبال أو عن طريق رابط دفع.',
          'بيع الباقة في الاستقبال، أو ارسل رابط دفع. والباقة تبدأ أول ما يدفع العضو، أو في تاريخ إنت تختاره.',
          'كل دفعة أونلاين تنربط بعملية البيع حقها. وإذا دفع العضو نفس الرابط مرتين، المبلغ الزايد يرجع له.',
          'إذا وصلت الفلوس والباقة ما بدت، الرابط يتعلّم إنه يحتاج متابعة، عشان الموظفين يصلحونه أو يرجعون المبلغ.',
          'ما يدخل من الباب إلا العضو اللي عنده باقة سارية.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks',
        caption: 'روابط الدفع في Gym Thing، وكل رابط يبين إذا هو مفتوح أو مدفوع أو منتهي أو يحتاج متابعة.',
      },

      { type: 'heading', id: 'processor', text: 'عالق مع مزود دفع واحد، ورسومه' },
      {
        type: 'text',
        paras: [
          'لما البرنامج هو اللي يختار مزود الدفع، ما تقدر تقارن وتختار. الرسوم تجي مع الباقة، والطريقة الوحيدة عشان تغيرها إنك تغير النظام كله.',
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
        ],
      },
      {
        type: 'text',
        paras: [
          'PushPress تنشر رسوم بطاقات 4.99% + 30 سنت في باقتها المجانية، و2.89% + 30 سنت في باقة Pro ([أسعار PushPress](https://pushpress.com/pricing)، قريناها في 21 أكتوبر 2026). وهذا سعر منشور، مو شكوى.',
          'النسب الصغيرة تتجمع. لو عندك 8,000 دينار دفعات بالبطاقة في الشهر، رسوم 3.5% يعني 280 دينار في الشهر، يعني 3,360 دينار في السنة.',
        ],
      },
      {
        type: 'answer',
        heading: 'حساب دفع باسمك، وإحنا ما ناخذ نسبة',
        points: [
          'الدفع بالبطاقات والمحافظ يروح على طول لحساب ناديك عند Tap، مزود دفع مرخّص. وإحنا نجهزه لك.',
          'Gym Thing ما ياخذ أي عمولة عليها. ورسوم Tap تتفق عليها إنت وTap.',
          'الأعضاء يدفعون باللي يريحهم: BenefitPay، Apple Pay، Google Pay، البطاقات، الكاش أو رابط دفع.',
          'في الاستقبال، تقدر تقسم عملية البيع الوحدة بين الكاش والبطاقات، وتسجل بعد التحويل البنكي والقسائم والشيكات.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'رابط دفع على واتساب، وصفحة الدفع اللي يفتحها. بيانات البطاقة تروح لـ Tap، مو للنادي.',
      },

      { type: 'heading', id: 'payouts', text: 'لما فلوسك تنحجز عنك' },
      {
        type: 'text',
        paras: ['هذي أكثر وحدة توجع. الأعضاء دفعوا والشغل خلص، بس الفلوس ما توصل.'],
      },
      {
        type: 'quotes',
        items: [
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
          'لما شركة البرنامج تاخذ الدفع تحت حسابها هي، تتحمل المخاطرة عن كل نادي عندها. فتسوي تدقيق، وخلال التدقيق ممكن توقف التحويلات. وهذا الثمن اللي تدفعه لما حساب التاجر مو باسم ناديك. شوف [مقارنة Gym Thing مع Glofox](/ar/compare/glofox/) في الدفع في البحرين.',
        ],
      },
      {
        type: 'answer',
        heading: 'حساب التاجر باسم ناديك',
        points: [
          'كل نادي عنده حساب تاجر خاص فيه عند Tap، والتحويلات تروح من Tap لبنكك.',
          'مواعيد التحويل تتفق عليها إنت وTap.',
          'تقرير الدخل حسب طريقة الدفع يبين لك شنو دخل بالبطاقة وBenefit والكاش في أي فترة، عشان تطابقه مع حسابك في البنك.',
          'تقدر تلقى أي دفعة أونلاين برقم الرابط أو رقم العملية عند Tap.',
        ],
        module: 'payments',
      },

      { type: 'heading', id: 'renewals', text: 'تجديدات تلاحقها بيدك' },
      {
        type: 'text',
        paras: [
          'أهدى خسارة مو مبلغ انسحب غلط. هي العضو اللي تخلص باقته يوم ثلاثاء وما يرجع، لأن ما أحد ذكّره. والاستقبال يسد الفراغ ويراسل الأعضاء واحد واحد.',
          'في أكتوبر 2026، [موضوع في r/gymowner](https://www.reddit.com/r/gymowner/comments/1wxeguy/gym_owners_would_you_let_your_management_software/) سأل أصحاب النوادي إذا يقبلون إن برنامجهم يرسل تذكيرات التجديد من رقم الواتساب حق النادي نفسه.',
        ],
      },
      {
        type: 'answer',
        heading: 'التذكيرات توصل، والدفع بضغطة وحدة',
        points: [
          'الأعضاء يوصلهم إيميل تذكير قبل لا تخلص باقتهم، بدون ما أحد يرسله.',
          'الباقات اللي بتخلص خلال 14 يوم تطلع لفريقك عشان يتابعونها.',
          'ضغطة وحدة في صفحة العضو تفتح واتساب ورابط الدفع جاهز للإرسال.',
          'التجديد يبدأ نفس اليوم اللي تخلص فيه الباقة الحالية، يعني لا فراغ ولا تداخل.',
        ],
        module: 'memberships',
      },

      { type: 'heading', id: 'invoices', text: 'فاتورة ضريبية لكل عملية بيع' },
      {
        type: 'text',
        paras: [
          'الفوترة ما تخلص لما توصل الفلوس. إذا ناديك مسجل في ضريبة القيمة المضافة، مبيعاتك تحتاج فواتير صحيحة، والمحاسب حقك يحتاجها تطابق. الأرقام الناقصة في التسلسل، ومبيعات بدون فاتورة، واسترجاعات تختفي من القائمة، كلها تصير أسئلة في آخر الربع.',
        ],
      },
      {
        type: 'answer',
        heading: 'كل عملية بيع لها فاتورة، وكل رقم محسوب',
        points: [
          'الاشتراكات وباقات التدريب الشخصي ومبيعات نقطة البيع، كل وحدة تطلع لها فاتورة ضريبية تلقائياً، فيها اسمك القانوني والسجل التجاري والرقم الضريبي.',
          'أرقام الفواتير متسلسلة بدون فراغات، وتبدأ من جديد كل سنة.',
          'العملية الملغية تطلع من مجاميعك بس تحتفظ برقمها، عشان التسلسل يظل كامل. والاسترجاعات تطلع كخصومات.',
          'المحاسب حقك ياخذ تقرير مبيعات فيه الصافي والضريبة والإجمالي لكل عملية، PDF أو جدول بيانات.',
        ],
        module: 'invoicing',
      },
      {
        type: 'screen',
        show: 'screen:Accounting',
        caption: 'المحاسبة في Gym Thing: الدخل، والضريبة المحصلة، والدخل حسب طريقة الدفع للشهر.',
      },

      { type: 'heading', id: 'questions', text: 'أسئلة عن المدفوعات تسألها قبل لا توقّع' },
      {
        type: 'text',
        paras: ['خذ هالأسئلة وياك لكل عرض، واطلب الأجوبة مكتوبة.'],
      },
      {
        type: 'list',
        items: [
          'حساب التاجر باسم منو؟ باسم ناديك، أو باسم شركة البرنامج؟',
          'كم تكلف كل دفعة بالبطاقة، ومنو يحدد هالرسوم، وتقدر تستخدم مزود ثاني؟',
          'منو يقرر متى توصل التحويلات لبنكك، وشنو ممكن يوقفها؟',
          'الأعضاء يقدرون يدفعون بالطريقة اللي متعودين عليها هني، BenefitPay وApple Pay والبطاقات والكاش، بدون جهاز بطاقات ثاني؟',
          'متى تبدأ الباقة: لما تنباع، لما تندفع، أو في تاريخ معين؟ وشنو يصير إذا العضو ما دفع أبداً؟',
          'إذا دفع العضو مرتين، منو ينتبه، وشلون ترجع الفلوس؟',
          'شنو يصير للسحوبات المجدولة لما العضو يلغي أو ينحذف؟',
          'كل عملية بيع تطلع لها فاتورة ضريبية فيها سجلك التجاري ورقمك الضريبي، والأرقام متسلسلة بدون فراغات؟',
          'المحاسب حقك يقدر ياخذ تقرير المبيعات بدون ما يطلبه من شركة البرنامج؟',
        ],
      },

      { type: 'heading', id: 'next', text: 'إذا قاعد تقارن بين الأنظمة' },
      {
        type: 'text',
        paras: [
          'الفوترة وحدة من [12 مشكلة يشتكي منها أصحاب النوادي](/ar/blog/gym-software-problems/) في برامجهم. وأحسن تجربة هي ناديك نفسه: [ابدأ بتجربة مجانية](/ar/free-trial/)، وإحنا ننقل أعضاءك، عشان تشوف باقاتك ومدفوعاتك الحقيقية قبل لا تدفع أي شي.',
          'العقود وزيادة الأسعار والطلعة ببياناتك في مقال [التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى](/ar/blog/price-contracts-and-your-data/).',
        ],
      },
      {
        type: 'note',
        text: 'الاقتباسات مترجمة من الإنجليزية. ما ذكرنا أسماء أصحاب المراجعات. والتواريخ هي تواريخ نشر المراجعات. Trustpilot ينقل المراجعات بين الصفحات لما تنزل مراجعات جديدة، فممكن الاقتباس يكون الحين في صفحة غير الصفحة المربوطة. Gym Thing من صنع Thing W.L.L.، السيف، البحرين.',
      },
    ],
  },
}
