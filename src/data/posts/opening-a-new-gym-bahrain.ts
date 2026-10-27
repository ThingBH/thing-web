import type { Post } from '../posts'

// Sources: docs/research/2026-10-new-gyms-bahrain/. Every quote was read on its source page on 27 Oct 2026.
// Gym Thing lines use features in src/data/modules.ts, traced in the README. The new-gym offer (free for up to
// 12 months, with migration, setup and training) was stated by the owner on 27 Oct 2026; keep "up to".
export const post: Post = {
  slug: 'opening-a-new-gym-bahrain',
  date: '2026-10-27',
  checked: '2026-10-27',
  tags: ['gulf', 'running-the-gym', 'gym-software'],
  en: {
    title: 'Opening a new gym in Bahrain: the software to sort out first',
    seoTitle: 'Opening a gym in Bahrain: the software checklist for new gyms',
    description:
      'Opening a gym in Bahrain? The software calls to make in the first months: members, pre-sales, BenefitPay, the door, staff and VAT, and a free year for new gyms.',
    lede: 'The licence is in, the equipment is on its way, and members are already asking how to sign up. In the first months of a new gym in Bahrain, the software gets picked last and in a hurry, and it ends up running everything: who paid, who gets in, who works when, and what goes on the invoice. Here are the calls to make before opening day, what goes wrong when they wait, and an offer for gyms that are just starting.',
    blocks: [
      {
        type: 'note',
        text: 'Opening in Saudi Arabia or the UAE? Licensing there is in [Opening a gym in Saudi Arabia or the UAE](/blog/opening-a-gym-saudi-uae/). This post is about Bahrain and the first months after you open.',
      },

      { type: 'heading', id: 'licence', text: 'The licence comes first, the system right after' },
      {
        type: 'text',
        paras: [
          'In Bahrain a fitness centre is licensed by the General Sports Authority, through Sijilat. The service page asks for your lease, engineering drawings, photos of the premises and your trainers’ certificates, and lists five working days to process.',
          'None of that covers how you will sell memberships, take payments or run the door. Those are yours to sort out, and the weeks between the licence and opening day are the best time to do it.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"License to operation of sports facilities through the website (Sijilat) of the Ministry of Industry and Commerce."',
            source: 'Bahrain National Portal, General Sports Authority licensing service',
            url: 'https://www.bahrain.bh/wps/portal/en/BNP/ServicesCatalogue/GSX-UI-PServiceDetails?psID=2542',
            date: 'Read 27 Oct 2026',
          },
          {
            quote: '"Availability of qualifications and training certificates suitable for the activity."',
            source: 'Bahrain National Portal, conditions for the same licence',
            url: 'https://www.bahrain.bh/wps/portal/en/BNP/ServicesCatalogue/GSX-UI-PServiceDetails?psID=2542',
            date: 'Read 27 Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'presale', text: 'Members sign up before the doors open' },
      {
        type: 'text',
        paras: [
          'Pre-sales are how a new gym fills its first month and pays for part of the fit-out. Even the big chains open this way in Bahrain.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"…selling 3,000 memberships in 24 hours ahead of the opening of its first location in Bahrain."',
            source: 'GDN Online, on GymNation’s first Bahrain gym at Atrium Mall',
            url: 'https://www.gdnonline.com/Details/1372722',
            date: '7 Jan 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'Your numbers will be smaller, but the job is the same: every pre-sale needs a plan, a start date and a record of the payment. On a spreadsheet and a WhatsApp group that works for the first fifty members. By opening day it’s a list nobody fully trusts.',
        ],
      },
      {
        type: 'answer',
        heading: 'Sell before you open',
        points: [
          'Build your plans with their own prices, lengths, days, hours and branches, including ladies’ hours.',
          'Send a payment link that starts the plan on a date you choose, such as opening day.',
          'Every member gets a profile and a number from the first sale, so nothing lives on a spreadsheet.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'Plans at ABC Gym, each with its own price, days, hours and branches.',
      },

      { type: 'heading', id: 'too-late', text: 'What goes wrong when the software comes last' },
      {
        type: 'text',
        paras: [
          'Most new gyms open on a spreadsheet, a WhatsApp group and a receipt book, planning to pick a system once things calm down. They don’t calm down. Three months in, you have members with two end dates, BenefitPay transfers that nobody matched to a plan, a desk letting people in from memory, and invoices typed by hand.',
          'Then the move itself gets harder. The longer you wait, the more members, freezes and part-payments have to be cleaned up and carried across, during your busiest months. And a system rushed in just before opening can fail you in front of your first members.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"…the software has repeatedly failed since my Grand Opening earlier this month and several potential clients called to complain that they were unable to schedule appointments online and in the app, causing a direct loss of revenue for my business."',
            source: 'A review of a gym software vendor',
            date: '28 Sep 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'For the order we’d follow to go live, whichever system you choose, read [Slow setup, weeks of training, and support that goes quiet](/blog/setup-and-staff-training/#go-live).',
        ],
      },

      { type: 'heading', id: 'payments', text: 'Payments: BenefitPay from the first day' },
      {
        type: 'text',
        paras: [
          'In Bahrain, your members will want to pay with BenefitPay, by card at the desk, or by Apple Pay. If those payments don’t start a plan by themselves, someone at the desk spends the evening matching transfers to names.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"BenefitPay accounted for about 246 million EFTS transactions worth BD5.4 billion, up 7.2% in both volume and value from the same period a year earlier…"',
            source: 'Zawya, on BENEFIT’s results for the first half of 2026',
            url: 'https://www.zawya.com/en/business/benefits-transaction-value-for-h1-surges-6.1-to-51.2bln-474775',
            date: '2 Sep 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'Every way Bahrain pays',
        points: [
          'Send a payment link on WhatsApp with a ready message in Arabic or English. Members pay by card, Apple Pay, Google Pay or BenefitPay, and the plan starts.',
          'At the desk, record cash, card, BenefitPay, bank transfer or a voucher, and split one sale across methods.',
          'Online payments go to your own merchant account with Tap.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'The ABC Gym pay page, with card, Apple Pay and BenefitPay.',
      },

      { type: 'heading', id: 'door', text: 'The door, before the first busy evening' },
      {
        type: 'text',
        paras: [
          'Opening week is when a door with no rules costs you most. Members with expired plans walk in with a friend, and the desk can’t tell who paid. Decide early who gets in, when and at which door, and let the system say no.',
        ],
      },
      {
        type: 'answer',
        heading: 'Only a valid plan gets in',
        points: [
          'Members check in with a code in the app, a Wallet pass or a tap of their phone.',
          'Use turnstiles, phone-tap readers, or just an iPad at the desk if you don’t have turnstiles yet.',
          'Plans that are ended, frozen, outside their hours or at the wrong branch are refused, with the reason on screen.',
          'Every entry is logged, so you see who came in and when.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns',
        caption: 'The check-ins log at ABC Gym: every scan, allowed or refused, with the reason.',
      },

      { type: 'heading', id: 'staff-vat', text: 'Staff and VAT, before they pile up' },
      {
        type: 'text',
        paras: [
          'Your first coaches and front-desk staff need rosters, clock-ins and a payslip at month end, with GOSI and the WPS salary file done right. And VAT in Bahrain is 10%: you must register once yearly sales pass BHD 37,500, which a busy new gym can reach in its first year. See [VAT on gym memberships in each GCC country](/blog/gcc-vat-for-gyms/).',
        ],
      },
      {
        type: 'answer',
        heading: 'Payroll and invoices from the first month',
        points: [
          'Staff files, a weekly roster per branch, and clock-ins from the staff app that only work at the branch.',
          'Salaries and commissions worked out, with GOSI, the WPS file and payslips on your team’s phones.',
          'Every sale gets a numbered invoice with your logo and CR. When you register for VAT, turn it on with your VAT number and the 10% is worked out for you.',
        ],
        module: 'hr-payroll',
      },

      { type: 'heading', id: 'checklist', text: 'A software checklist for the first three months' },
      {
        type: 'list',
        items: [
          'Before you open: your legal name and CR on the invoices, your plans written down, and pre-sale links that start on opening day.',
          'Before you open: a payment account, so card, Apple Pay and BenefitPay work from the first sale.',
          'Opening week: the door checking every plan, and the desk trained on five jobs: check-in, sell, renew, freeze and take a payment.',
          'Month one: every member, pre-sale and payment in the system, not in a spreadsheet beside it.',
          'Month one: rosters and clock-ins running, so the first payroll isn’t built by hand.',
          'Month three: look at your renewals and check-ins, and register for VAT when your sales get close to BHD 37,500.',
        ],
      },

      { type: 'heading', id: 'new-gym-offer', text: 'Free for up to a year, for new gyms' },
      {
        type: 'answer',
        heading: 'Start on Gym Thing while you’re still small',
        points: [
          'Gyms that are opening soon or have just opened can run Gym Thing free for up to 12 months. Tell us you’re a new gym when you sign up.',
          'We move your members, plans and history over from spreadsheets or another system, at no extra cost.',
          'We set up your plans, branches, payments and door, with your logo.',
          'We train your front desk and managers on the jobs they do every day.',
          'Support is on WhatsApp, phone and email, 7 days a week, with same-day replies. [Start with a free trial](/free-trial/).',
        ],
      },
      {
        type: 'text',
        paras: [
          'When the free period ends, Tamkeen may cover part of the bill: see [Your gym software, part-funded by Tamkeen](/blog/tamkeen-digital-enablement-gym-software/). Running a small gym? Read [gym software for small gyms in Bahrain](/blog/small-gym-software-bahrain/). Or see [Gym Thing in Bahrain](/gym-software/bahrain/) and how it compares with [running the gym on spreadsheets](/compare/spreadsheets/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'Sources' },
      {
        type: 'note',
        text: 'Licensing details are from the [Bahrain National Portal](https://www.bahrain.bh/wps/portal/en/BNP/ServicesCatalogue/GSX-UI-PServiceDetails?psID=2542). Requirements change, so check with the General Sports Authority before you apply. All sources were read on their pages on 27 Oct 2026. This is a guide, not legal or tax advice.',
      },
    ],
  },
  ar: {
    title: 'افتتاح نادٍ رياضي جديد في البحرين: البرنامج الذي يجب حسمه أولاً',
    seoTitle: 'افتتاح نادٍ رياضي في البحرين: قائمة برنامج الإدارة للأندية الجديدة',
    description:
      'تفتتح نادياً رياضياً في البحرين؟ قرارات البرنامج في الأشهر الأولى: الأعضاء والبيع المسبق وBenefitPay والدخول والموظفون والضريبة، وسنة مجانية للأندية الجديدة.',
    lede: 'الترخيص طلع، والأجهزة في الطريق، والناس من الحين يسألون شلون يشتركون. في أول شهور النادي الجديد في البحرين، البرنامج ينختار آخر شي وعلى عجل، وبعدين هو اللي يدير كل شي: منو دفع، ومنو يدخل، ومنو يداوم متى، وشنو ينكتب في الفاتورة. هني القرارات اللي لازم تحسمها قبل يوم الافتتاح، وشنو يصير إذا تأخرت، وعرض للنوادي اللي توها تبدأ.',
    blocks: [
      {
        type: 'note',
        text: 'بتفتح في السعودية أو الإمارات؟ الترخيص هناك في [افتتاح نادي في السعودية أو الإمارات](/ar/blog/opening-a-gym-saudi-uae/). هالمقال عن البحرين وعن أول شهور بعد الافتتاح.',
      },

      { type: 'heading', id: 'licence', text: 'الترخيص أول، والنظام بعده على طول' },
      {
        type: 'text',
        paras: [
          'في البحرين، مركز اللياقة ترخّصه الهيئة العامة للرياضة عن طريق سجلات. صفحة الخدمة تطلب عقد الإيجار والرسومات الهندسية وصور المحل وشهادات المدربين، ومكتوب إن الإنجاز 5 أيام عمل.',
          'بس ولا شي من هذا يقول لك شلون بتبيع الاشتراكات أو تستلم الدفع أو تدير الباب. هذي عليك، والأسابيع اللي بين الترخيص ويوم الافتتاح أحسن وقت تخلّصها فيه.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«ترخيص تشغيل المرافق الرياضية عبر موقع سجلات التابع لوزارة الصناعة والتجارة.»',
            source: 'البوابة الوطنية للبحرين، خدمة ترخيص الهيئة العامة للرياضة',
            url: 'https://www.bahrain.bh/wps/portal/en/BNP/ServicesCatalogue/GSX-UI-PServiceDetails?psID=2542',
            date: 'قُرئت في 27 أكتوبر 2026',
          },
          {
            quote: '«وجود مؤهلات وشهادات تدريبية مناسبة للنشاط المذكور.»',
            source: 'البوابة الوطنية للبحرين، شروط نفس الترخيص',
            url: 'https://www.bahrain.bh/wps/portal/en/BNP/ServicesCatalogue/GSX-UI-PServiceDetails?psID=2542',
            date: 'قُرئت في 27 أكتوبر 2026',
          },
        ],
      },

      { type: 'heading', id: 'presale', text: 'الأعضاء يشتركون قبل لا تفتح الأبواب' },
      {
        type: 'text',
        paras: [
          'البيع المسبق هو اللي يعبّي أول شهر للنادي الجديد ويغطي جزء من التجهيز. حتى السلاسل الكبيرة تفتح بهالطريقة في البحرين.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«…باعت 3,000 اشتراك خلال 24 ساعة قبل افتتاح أول فرع لها في البحرين.»',
            source: 'GDN Online، عن أول نادي لـ GymNation في البحرين في Atrium Mall',
            url: 'https://www.gdnonline.com/Details/1372722',
            date: '7 يناير 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'أرقامك بتكون أصغر، بس الشغل نفسه: كل بيع مسبق يبي له باقة وتاريخ بداية وتسجيل للدفع. على جدول بيانات وقروب واتساب يمشي لأول خمسين عضو. ويوم الافتتاح تصير عندك قائمة محد واثق فيها.',
        ],
      },
      {
        type: 'answer',
        heading: 'بيع قبل لا تفتح',
        points: [
          'سوّ باقاتك بأسعارها ومددها وأيامها وساعاتها وفروعها، وحتى ساعات السيدات.',
          'أرسل رابط دفع يبدأ الباقة في تاريخ تختاره، مثل يوم الافتتاح.',
          'كل عضو له ملف ورقم من أول بيعة، فما يبقى شي على جدول بيانات.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'الباقات في ABC Gym، كل وحدة بسعرها وأيامها وساعاتها وفروعها.',
      },

      { type: 'heading', id: 'too-late', text: 'شنو يصير لما البرنامج يجي آخر شي' },
      {
        type: 'text',
        paras: [
          'أغلب النوادي الجديدة تفتح على جدول بيانات وقروب واتساب ودفتر إيصالات، وتقول بنختار نظام لما الأمور تهدى. وما تهدى. بعد ثلاث شهور يصير عندك أعضاء لهم تاريخين انتهاء، وتحويلات BenefitPay محد ربطها بباقة، والاستقبال يدخّل الناس من الذاكرة، وفواتير تنكتب باليد.',
          'وبعدين النقل نفسه يصعب. كل ما تأخرت، زادت الأعضاء والتجميدات والدفعات الجزئية اللي لازم تتنظف وتنتقل، وفي أكثر شهورك زحمة. والنظام اللي ينركّب على عجل قبل الافتتاح ممكن يخذلك قدام أول أعضائك.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«…البرنامج تعطّل مرة بعد مرة من يوم الافتتاح الكبير بداية هالشهر، وعدد من العملاء المحتملين اتصلوا يشتكون إنهم ما قدروا يحجزون مواعيد أونلاين ولا في التطبيق، وهذا سبب خسارة مباشرة في دخل نشاطي.»',
            source: 'مراجعة لشركة برامج نوادي',
            date: '28 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'للترتيب اللي نتبعه عشان تشتغل على النظام الجديد، أي نظام تختار، اقرأ [إعداد بطيء وأسابيع تدريب ودعم يختفي](/ar/blog/setup-and-staff-training/#go-live).',
        ],
      },

      { type: 'heading', id: 'payments', text: 'الدفع: BenefitPay من أول يوم' },
      {
        type: 'text',
        paras: [
          'في البحرين، أعضاءك بيبون يدفعون بـ BenefitPay أو بالبطاقة في الاستقبال أو بـ Apple Pay. وإذا الدفع ما يشغّل الباقة بروحه، أحد في الاستقبال بيقضي الليل يطابق التحويلات بالأسامي.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«BenefitPay سجّل حوالي 246 مليون عملية بقيمة 5.4 مليار دينار، بزيادة 7.2% في العدد والقيمة عن نفس الفترة من السنة اللي قبل…»',
            source: 'زاوية، عن نتائج BENEFIT للنصف الأول من 2026',
            url: 'https://www.zawya.com/en/business/benefits-transaction-value-for-h1-surges-6.1-to-51.2bln-474775',
            date: '2 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'كل طرق الدفع في البحرين',
        points: [
          'أرسل رابط دفع على واتساب برسالة جاهزة بالعربي أو الإنجليزي. العضو يدفع بالبطاقة أو Apple Pay أو Google Pay أو BenefitPay، والباقة تبدأ.',
          'في الاستقبال، سجّل الكاش أو البطاقة أو BenefitPay أو التحويل البنكي أو القسيمة، وقسّم البيعة الوحدة على أكثر من طريقة.',
          'الدفع أونلاين يروح لحساب التاجر الخاص فيك عند Tap.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'صفحة الدفع في ABC Gym، بالبطاقة وApple Pay وBenefitPay.',
      },

      { type: 'heading', id: 'door', text: 'الباب، قبل أول ليلة زحمة' },
      {
        type: 'text',
        paras: [
          'أسبوع الافتتاح هو الوقت اللي الباب بدون قوانين يكلفك فيه أكثر شي. أعضاء باقاتهم منتهية يدخلون ومعاهم ربعهم، والاستقبال ما يعرف منو دفع. قرر من بدري منو يدخل ومتى ومن أي باب، وخل النظام هو اللي يقول لا.',
        ],
      },
      {
        type: 'answer',
        heading: 'بس الباقة الصالحة تدخل',
        points: [
          'الأعضاء يسجلون دخولهم بكود في التطبيق أو بطاقة Wallet أو بلمسة من تلفونهم.',
          'استخدم البوابات الدوّارة أو أجهزة اللمس، أو بس iPad في الاستقبال إذا ما عندك بوابات للحين.',
          'الباقة المنتهية أو المجمّدة أو برّا ساعاتها أو في فرع ثاني تنرفض، والسبب يطلع على الشاشة.',
          'كل دخول ينسجّل، فتشوف منو دخل ومتى.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns',
        caption: 'سجل الدخول في ABC Gym: كل مسح، مسموح أو مرفوض، مع السبب.',
      },

      { type: 'heading', id: 'staff-vat', text: 'الموظفين والضريبة، قبل لا تتكدس' },
      {
        type: 'text',
        paras: [
          'أول مدربينك وموظفين الاستقبال يبون جدول دوام وتسجيل حضور وقسيمة راتب آخر الشهر، مع التأمينات وملف WPS مضبوطين. والضريبة في البحرين 10%: لازم تسجّل لما مبيعاتك السنوية تتعدى 37,500 دينار، والنادي الجديد اللي عليه إقبال ممكن يوصلها في أول سنة. شوف [ضريبة القيمة المضافة على اشتراكات النوادي في كل دولة خليجية](/ar/blog/gcc-vat-for-gyms/).',
        ],
      },
      {
        type: 'answer',
        heading: 'الرواتب والفواتير من أول شهر',
        points: [
          'ملفات الموظفين، وجدول دوام أسبوعي لكل فرع، وتسجيل حضور من تطبيق الموظفين يشتغل بس في الفرع.',
          'الرواتب والعمولات محسوبة، مع التأمينات وملف WPS وقسائم الراتب على تلفونات فريقك.',
          'كل بيعة لها فاتورة مرقّمة بشعارك وسجلك التجاري. ولما تسجّل في الضريبة، شغّلها برقمك الضريبي والـ 10% تنحسب بروحها.',
        ],
        module: 'hr-payroll',
      },

      { type: 'heading', id: 'checklist', text: 'قائمة البرنامج لأول ثلاث شهور' },
      {
        type: 'list',
        items: [
          'قبل الافتتاح: اسمك القانوني وسجلك التجاري على الفواتير، وباقاتك مكتوبة، وروابط البيع المسبق تبدأ يوم الافتتاح.',
          'قبل الافتتاح: حساب دفع، عشان البطاقة وApple Pay وBenefitPay يشتغلون من أول بيعة.',
          'أسبوع الافتتاح: الباب يتأكد من كل باقة، والاستقبال متدرب على خمس شغلات: الدخول، والبيع، والتجديد، والتجميد، واستلام الدفع.',
          'الشهر الأول: كل عضو وكل بيع مسبق وكل دفعة في النظام، مو في جدول بيانات على صوبه.',
          'الشهر الأول: جداول الدوام وتسجيل الحضور شغّالة، عشان أول رواتب ما تنسوّى باليد.',
          'الشهر الثالث: شوف التجديدات والدخول، وسجّل في الضريبة لما مبيعاتك تقرب من 37,500 دينار.',
        ],
      },

      { type: 'heading', id: 'new-gym-offer', text: 'مجاناً لمدة تصل لسنة، للنوادي الجديدة' },
      {
        type: 'answer',
        heading: 'ابدأ على Gym Thing وانت للحين صغير',
        points: [
          'النوادي اللي بتفتح قريب أو توها فاتحة تقدر تشغّل Gym Thing مجاناً لمدة تصل إلى 12 شهر. قول لنا إنك نادي جديد لما تسجّل.',
          'ننقل أعضاءك وباقاتك وتاريخهم من جداول البيانات أو من نظام ثاني، بدون تكلفة إضافية.',
          'نجهّز باقاتك وفروعك والدفع والباب، بشعارك.',
          'ندرّب الاستقبال والمدراء على الشغل اللي يسوّونه كل يوم.',
          'الدعم على واتساب والتلفون والإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم. [ابدأ بتجربة مجانية](/ar/free-trial/).',
        ],
      },
      {
        type: 'text',
        paras: [
          'لما تخلص الفترة المجانية، تمكين ممكن تغطي جزء من التكلفة: شوف [برنامج ناديك بتمويل جزئي من تمكين](/ar/blog/tamkeen-digital-enablement-gym-software/). عندك نادي صغير؟ اقرأ [برنامج إدارة النوادي الصغيرة في البحرين](/ar/blog/small-gym-software-bahrain/). أو شوف [Gym Thing في البحرين](/ar/gym-software/bahrain/) وشلون يقارن مع [إدارة النادي على جداول البيانات](/ar/compare/spreadsheets/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'المصادر' },
      {
        type: 'note',
        text: 'تفاصيل الترخيص من [البوابة الوطنية للبحرين](https://www.bahrain.bh/wps/portal/ar/BNP/ServicesCatalogue/GSX-UI-PServiceDetails?psID=2542). المتطلبات تتغير، فتأكد مع الهيئة العامة للرياضة قبل لا تقدّم. كل المصادر انقرت في صفحاتها في 27 أكتوبر 2026. هذا دليل، مو استشارة قانونية أو ضريبية.',
      },
    ],
  },
}
