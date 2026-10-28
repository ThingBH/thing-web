import type { Post } from '../posts'

// Sources: docs/research/2026-10-gym-software-complaints (report.html) and the relevant entries in
// compare.ts. Vendor and regulator lines were read on their pages on 21 Oct 2026. Gym Thing answers only use what
// the report and modules.ts claim: the admin website is English only, and WhatsApp is a one-tap pre-filled chat.
export const post: Post = {
  slug: 'built-for-the-gulf',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['gulf', 'payments'],
  en: {
    title: 'Gym software built for somewhere else, seen from a gym in Bahrain',
    seoTitle: 'Gym software for Bahrain and the Gulf: what to check before you sign',
    description:
      'Why gym software made abroad misses BenefitPay, VAT invoices, GOSI and WPS, Arabic and weekend support, and a checklist for Gulf owners before they sign.',
    lede: 'Most gym software is built in the US or Europe and sold everywhere. It looks fine in the demo. Then you try to take BenefitPay, file VAT, pay staff through WPS or send a member something in Arabic, and the gaps show. Here is why that happens, what to ask before you sign, and how Gym Thing handles each part for a gym in Bahrain.',
    blocks: [
      {
        type: 'note',
        text: 'This post builds on our [research into gym software complaints](/blog/gym-software-problems/#gulf). It is written for Bahrain. If you run gyms elsewhere in the GCC, ask the same questions about your own country.',
      },

      { type: 'heading', id: 'why', text: 'Why so much gym software misses the Gulf' },
      {
        type: 'text',
        paras: [
          'A gym system is built around its home market. The payment provider, the invoice, the payroll, the language and the support hours are all chosen for the place where most of its customers are. The Gulf is a small slice of that market, so it gets the same product with a currency setting changed.',
          "That's fine for the members list and the class timetable. It breaks at the edges where money and the law meet: how members pay, what an invoice must show, how salaries are paid, and who answers when something goes wrong on a Friday.",
        ],
      },

      { type: 'heading', id: 'payments', text: "Members can't pay the way they pay everywhere else" },
      {
        type: 'text',
        paras: [
          "Many international gym systems take payments through Stripe. Stripe's list of supported countries includes the UAE, but not Bahrain, Saudi Arabia, Kuwait, Qatar or Oman ([Stripe global availability](https://stripe.com/global), read 21 Oct 2026). Software that pays out only through Stripe has the same gap.",
          "Gulf systems aren't always better. One Gulf system's integrations page lists 18 payment options, including Knet, OmanNet and Apple Pay, but not BenefitPay. The owner ends up running a second card machine and a BenefitPay QR on the counter, and the front desk matches payments to members by hand.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"Price in USD. Contact Sales for international pricing."',
            source: "A gym software vendor's pricing page",
            date: 'read 21 Oct 2026',
          },
          {
            quote: 'Under "Online Package & Product Sales": "Stripe, Assescco, Hyper Pay Integration"',
            source: 'A gym software brochure, which does not list BenefitPay',
            date: 'Mar 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'Every way Bahrain pays, in one place',
        points: [
          'Members pay online with BenefitPay, Apple Pay, Google Pay or a card.',
          'At the desk you record cash, card (Benefit cards too), bank transfer, BenefitPay, vouchers or cheque, and you can split one sale across methods.',
          "One tap on a member's page opens WhatsApp with a payment link and a ready message in Arabic or English. The plan starts when they pay.",
          "Online payments go into your gym's own account with Tap, and Gym Thing takes no cut.",
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'A payment link sent on WhatsApp, and the pay page it opens. Switch the page to Arabic at the top.',
      },

      { type: 'heading', id: 'vat', text: 'VAT invoices your accountant can file' },
      {
        type: 'text',
        paras: [
          'Software built for US sales tax or European VAT can print a receipt, not a Bahrain VAT invoice. Prices may show two decimals, though the dinar has three. Numbering may reset or skip when a sale is voided. Then your accountant rebuilds the month from a spreadsheet.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'A full VAT invoice must show the "VAT Account Number of the supplier", "A sequential VAT invoice number" and "The total amount due, inclusive of VAT, in Bahraini Dinars".',
            source: 'NBR VAT General Guide, version 1.16, section 10.3',
            url: 'https://www.nbr.gov.bh/publications/view/VAT_General_guide',
            date: 'read 21 Oct 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'A VAT invoice for every sale, numbered with no gaps',
        points: [
          'Every membership, PT pack and till sale gets a VAT invoice on its own.',
          'Your legal name, CR and VAT number print on every invoice, with net, VAT and total in BHD to three decimals.',
          'Numbers run in order with no gaps. A voided sale leaves your totals but keeps its number.',
          'Your accountant downloads the sales report as a PDF or spreadsheet.',
        ],
        module: 'invoicing',
      },
      {
        type: 'screen',
        show: 'screen:Accounting',
        caption: 'Accounting in Gym Thing: revenue, VAT collected and every sale for the month.',
      },

      { type: 'heading', id: 'payroll', text: 'Payroll that knows GOSI and WPS' },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Under Resolution (68) of 2019 (effective July 11, 2019), every private sector employer is legally required to pay employee wages through the WPS"',
            source: 'LMRA: Wage Protection System FAQs',
            url: 'https://lmra.gov.bh/en/faq/category/12',
            date: 'updated 10 Aug 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'Where foreign gym software lists payroll, it usually means trainer pay and commission, not GOSI or the WPS salary file. One such system lists payroll and commission management, but names neither ([see how it compares](/compare/flyby/)). So payroll lives in a second tool or with your accountant, and every month someone types the same numbers twice.',
        ],
      },
      {
        type: 'answer',
        heading: 'GOSI worked out, and the WPS file ready',
        points: [
          "GOSI employee and employer rates are set by date, with each person's GOSI number.",
          'Finalise the month and export the WPS salary file. Staff with missing bank details are listed first.',
          'Payslips carry your logo, GOSI and year-to-date. Staff open them in the staff app.',
          'Staff files hold CPR, passport, visa and work permit numbers, with expiry dates.',
        ],
        module: 'hr-payroll',
      },
      {
        type: 'screen',
        show: 'screen:Payroll',
        caption: 'Payroll in Gym Thing: pick the month, check each pay record, finalise, then export the WPS file.',
      },

      { type: 'heading', id: 'language', text: 'Arabic for members and staff, and WhatsApp for both' },
      {
        type: 'text',
        paras: [
          'Many members and many staff would rather read Arabic. An app or pay page in English only makes the front desk the translator.',
          'The channel matters too. Members here read WhatsApp first. When the software has no way to put a payment link into a WhatsApp chat, the front desk ends up copying links from one app into another.',
        ],
      },
      {
        type: 'answer',
        heading: 'Arabic where members and staff use it',
        points: [
          "The member app carries your gym's name, in Arabic and English.",
          'The staff app is in Arabic and English, for clock-in, leave and payslips.',
          'The pay page switches between Arabic and English.',
          'The WhatsApp payment message is ready in either language.',
          'The admin website your managers use is in English.',
        ],
        module: 'member-app',
      },

      { type: 'heading', id: 'support', text: 'Support in your time zone, and on your weekend' },
      {
        type: 'text',
        paras: [
          "Bahrain is 7 or 8 hours ahead of New York. A message sent at 9 in the morning in Manama arrives in the middle of their night. And Bahrain's weekend is Friday and Saturday, so a vendor's working week and yours only partly overlap.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"they told me to wait until Monday"',
            source: 'A review of a gym software vendor, from a business open 7 days a week',
            date: '27 Sep 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'A team in Seef, 7 days a week',
        points: [
          'Our team is in Seef, Bahrain, on your clock.',
          'WhatsApp, phone and email, 7 days a week, with same-day replies, in Arabic or English.',
          'We set you up, move your members and train your staff. Most gyms are live within a week.',
          '[WhatsApp +973 3330 9918](https://wa.me/97333309918) or [support@thing.bh](mailto:support@thing.bh)',
        ],
      },

      { type: 'heading', id: 'checklist', text: 'A Gulf checklist: questions to ask before you sign' },
      {
        type: 'text',
        paras: [
          'Ask for answers on screen, with your own data, not on a slide. If the answer is "it\'s on the roadmap", treat it as a no.',
        ],
      },
      {
        type: 'list',
        items: [
          'Can members pay with BenefitPay, Benefit cards, Apple Pay and Google Pay, online and at the desk? Which payment provider is it, and does it work in Bahrain?',
          'Whose merchant account is it? Does the money land in your account, and does the vendor take a cut?',
          'Show me a VAT invoice. Does it carry my VAT account number, a sequential number and totals in Bahraini dinars?',
          'Are amounts in BHD with three decimals, or rounded to two?',
          'What happens to the invoice number when a sale is voided or refunded?',
          'Does payroll work out GOSI and export the WPS salary file, or do I need a second tool?',
          'Are the member app and the staff app in Arabic? Show me the Arabic screens.',
          'How do payment links and reminders reach members? Can staff send them on WhatsApp?',
          'Who answers support, in which time zone, and on Friday and Saturday?',
          "Who is responsible for members' data? Under Bahrain's [Personal Data Protection Law](https://www.lloc.gov.bh/FullEn/K3018.docx) (Law No. 30 of 2018), it's the gym, so ask how the data is protected.",
          'Is the price on the page in your currency, or behind "contact sales"?',
        ],
      },

      { type: 'heading', id: 'next', text: 'Test it on your own gym' },
      {
        type: 'text',
        paras: [
          'The best test is a real month: real members paying with BenefitPay, real invoices and a real payroll run. [Start with a free trial](/free-trial/): we move your members over, and you can run Gym Thing free for up to 3 months before paying.',
          'See how Gym Thing compares on [payments](/compare/gymnago/) and [payroll](/compare/flyby/), or read about [payments](/modules/payments/), [invoicing](/modules/invoicing/) and [payroll](/modules/hr-payroll/).',
          'Payments and support each have their own post: [Billing that charges the right member, and money that reaches you](/blog/billing-that-charges-right/) and [Slow setup, weeks of training, and support that goes quiet](/blog/setup-and-staff-training/). Running gyms elsewhere in the GCC? Read [the best gym software in the GCC](/blog/best-gym-software-gcc/) and [VAT on gym memberships in each GCC country](/blog/gcc-vat-for-gyms/). In Bahrain, [Tamkeen can part-fund the switch](/blog/tamkeen-digital-enablement-gym-software/).',
        ],
      },
      {
        type: 'note',
        text: 'Vendor and regulator pages change, so check the current version before you decide.',
      },
    ],
  },
  ar: {
    title: 'برامج النوادي المصممة لأسواق أخرى، من منظور نادٍ رياضي في البحرين',
    seoTitle: 'برامج إدارة النوادي الرياضية في البحرين والخليج: ما يجب التحقق منه قبل التعاقد',
    description:
      'لماذا تفتقد برامج النوادي المصممة في الخارج BenefitPay والفواتير الضريبية والتأمينات الاجتماعية وحماية الأجور والعربية، وقائمة أسئلة لأصحاب النوادي في الخليج.',
    lede: 'أغلب برامج النوادي مسوية في أمريكا أو أوروبا وتنباع في كل مكان. في العرض التجريبي تبين زينة. بس أول ما تبي تستلم بـ BenefitPay، أو تقدّم الضريبة، أو تدفع الرواتب عن طريق حماية الأجور، أو ترسل للعضو شي بالعربي، تطلع النواقص. هني ليش يصير هالشي، وشنو تسأل قبل لا توقّع، وشلون يتعامل Gym Thing مع كل جزء لنادي في البحرين.',
    blocks: [
      {
        type: 'note',
        text: 'هالمقال مبني على [بحثنا عن شكاوى برامج النوادي](/ar/blog/gym-software-problems/#gulf). وهو مكتوب للبحرين. إذا عندك نوادي في دولة خليجية ثانية، اسأل نفس الأسئلة عن قوانين بلدك.',
      },

      { type: 'heading', id: 'why', text: 'ليش برامج وايد ما تناسب الخليج' },
      {
        type: 'text',
        paras: [
          'أي نظام نوادي ينبني حول سوقه الأساسي. مزود الدفع، وشكل الفاتورة، والرواتب، واللغة، وساعات الدعم، كلها تنختار على حسب المكان اللي فيه أغلب عملائه. والخليج جزء صغير من هالسوق، فيوصله نفس البرنامج وبس العملة متغيرة.',
          'هالشي ما يضر في قائمة الأعضاء وجدول الحصص. بس يخرب في الأطراف اللي تلتقي فيها الفلوس بالقانون: شلون يدفع العضو، وشنو لازم تبين الفاتورة، وشلون تندفع الرواتب، ومنو يرد عليك إذا صار شي يوم الجمعة.',
        ],
      },

      { type: 'heading', id: 'payments', text: 'الأعضاء ما يقدرون يدفعون مثل ما يدفعون في كل مكان' },
      {
        type: 'text',
        paras: [
          'وايد من برامج النوادي العالمية تستلم الدفع عن طريق Stripe. وقائمة الدول اللي تدعمها Stripe فيها الإمارات، بس ما فيها البحرين ولا السعودية ولا الكويت ولا قطر ولا عُمان ([توفّر Stripe حول العالم](https://stripe.com/global)، قريناها في 21 أكتوبر 2026). والبرنامج اللي ما يحوّل إلا عن طريق Stripe عنده نفس النقص.',
          'والأنظمة الخليجية مو دايماً أحسن. في نظام خليجي صفحة التكاملات عنده فيها 18 طريقة دفع، منها Knet وOmanNet وApple Pay، بس ما فيها BenefitPay. وفي الآخر صاحب النادي يشغّل جهاز بطاقات ثاني ورمز BenefitPay على الكاونتر، والاستقبال يطابق المدفوعات بالأعضاء بيده.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«السعر بالدولار الأمريكي. تواصل مع المبيعات للأسعار الدولية.»',
            source: 'صفحة أسعار إحدى شركات برامج النوادي',
            date: 'قريناها في 21 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: 'تحت «بيع الباقات والمنتجات أونلاين»: «تكامل مع Stripe وAssescco وHyper Pay»',
            source: 'كتيّب أحد برامج النوادي، وما فيه BenefitPay',
            date: 'مارس 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'كل طرق الدفع في البحرين، في مكان واحد',
        points: [
          'الأعضاء يدفعون أونلاين بـ BenefitPay أو Apple Pay أو Google Pay أو بالبطاقة.',
          'وفي الاستقبال تسجّل كاش أو بطاقة (وبطاقات Benefit بعد) أو تحويل بنكي أو BenefitPay أو قسائم أو شيك، وتقدر تقسّم البيعة الوحدة على أكثر من طريقة.',
          'ضغطة وحدة في صفحة العضو تفتح واتساب ومعاه رابط دفع ورسالة جاهزة بالعربي أو بالإنجليزي. والباقة تبدأ أول ما يدفع.',
          'الدفع أونلاين يروح لحساب ناديك عند Tap، وGym Thing ما ياخذ أي نسبة.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayPage',
        caption: 'رابط دفع على واتساب، وصفحة الدفع اللي يفتحها. تقدر تحوّل الصفحة للعربي من فوق.',
      },

      { type: 'heading', id: 'vat', text: 'فواتير ضريبية يقدر محاسبك يقدّمها' },
      {
        type: 'text',
        paras: [
          'البرامج المسوية لضريبة المبيعات الأمريكية أو للضريبة الأوروبية ممكن تطبع إيصال، مو فاتورة ضريبية بحرينية. والأسعار ممكن تطلع بخانتين بعد الفاصلة، والدينار له ثلاث. والترقيم ممكن يرجع من الأول أو ينط إذا انلغت بيعة. وبعدين محاسبك يعيد الشهر كله من جدول.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'الفاتورة الضريبية الكاملة لازم تبين «رقم حساب ضريبة القيمة المضافة للمورد» و«رقماً تسلسلياً للفاتورة الضريبية» و«إجمالي المبلغ المستحق شاملاً ضريبة القيمة المضافة بالدينار البحريني».',
            source: 'الدليل العام لضريبة القيمة المضافة من الجهاز الوطني للإيرادات، الإصدار 1.16، القسم 10.3',
            url: 'https://www.nbr.gov.bh/publications/view/VAT_General_guide',
            date: 'قريناه في 21 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'فاتورة ضريبية لكل بيعة، بأرقام بدون فراغات',
        points: [
          'كل اشتراك وكل باقة تدريب شخصي وكل بيعة في نقطة البيع تطلع لها فاتورة ضريبية بروحها.',
          'اسمك القانوني والسجل التجاري والرقم الضريبي ينطبعون على كل فاتورة، مع المبلغ قبل الضريبة والضريبة والإجمالي بالدينار وبثلاث خانات.',
          'الأرقام متسلسلة بدون فراغات. والبيعة الملغية تطلع من المجاميع بس رقمها يبقى.',
          'ومحاسبك ينزّل تقرير المبيعات PDF أو جدول.',
        ],
        module: 'invoicing',
      },
      {
        type: 'screen',
        show: 'screen:Accounting',
        caption: 'المحاسبة في Gym Thing: الإيرادات والضريبة المحصّلة وكل بيعة في الشهر.',
      },

      { type: 'heading', id: 'payroll', text: 'رواتب تعرف التأمينات الاجتماعية وحماية الأجور' },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«بموجب القرار رقم (68) لسنة 2019 (الساري من 11 يوليو 2019)، يُلزَم كل صاحب عمل في القطاع الخاص قانونياً بدفع أجور العمال عبر نظام حماية الأجور»',
            source: 'هيئة تنظيم سوق العمل: الأسئلة الشائعة عن نظام حماية الأجور',
            url: 'https://lmra.gov.bh/en/faq/category/12',
            date: 'تحديث 10 أغسطس 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'لما برامج النوادي الأجنبية تذكر الرواتب، أغلب الأحيان قصدها رواتب المدربين وعمولاتهم، مو التأمينات الاجتماعية (GOSI) ولا ملف رواتب حماية الأجور (WPS). في نظام من هذي يذكر إدارة الرواتب والعمولات، بس ما يسمي ولا وحدة منهم ([شوف شلون يقارن](/ar/compare/flyby/)). فتصير الرواتب في برنامج ثاني أو عند المحاسب، وكل شهر أحد يكتب نفس الأرقام مرتين.',
        ],
      },
      {
        type: 'answer',
        heading: 'التأمينات محسوبة، وملف حماية الأجور جاهز',
        points: [
          'نسب التأمينات الاجتماعية على الموظف وصاحب العمل تنضبط حسب التاريخ، ومع كل موظف رقمه في التأمينات.',
          'اعتمد الشهر وصدّر ملف رواتب حماية الأجور. والموظفين اللي ناقصهم بيانات البنك يطلعون لك أول.',
          'قسائم الرواتب فيها شعارك والتأمينات والمجموع من بداية السنة. والموظفين يفتحونها في تطبيق الموظفين.',
          'ملفات الموظفين فيها أرقام الهوية والجواز والتأشيرة وتصريح العمل، مع تواريخ انتهائها.',
        ],
        module: 'hr-payroll',
      },
      {
        type: 'screen',
        show: 'screen:Payroll',
        caption: 'الرواتب في Gym Thing: اختر الشهر، راجع سجل كل موظف، اعتمد، وبعدين صدّر ملف حماية الأجور.',
      },

      { type: 'heading', id: 'language', text: 'العربي للأعضاء والموظفين، وواتساب للكل' },
      {
        type: 'text',
        paras: [
          'وايد من الأعضاء ووايد من الموظفين يرتاحون أكثر بالعربي. والتطبيق أو صفحة الدفع اللي بالإنجليزي بس تخلي الاستقبال هو المترجم.',
          'والقناة بعد مهمة. الأعضاء هني يقرون واتساب قبل أي شي. وإذا البرنامج ما يقدر يحط رابط الدفع في محادثة واتساب، الاستقبال يظل ينسخ الروابط من تطبيق ويلصقها في ثاني.',
        ],
      },
      {
        type: 'answer',
        heading: 'العربي في المكان اللي يستخدمه الأعضاء والموظفين',
        points: [
          'تطبيق الأعضاء باسم ناديك، بالعربي والإنجليزي.',
          'تطبيق الموظفين بالعربي والإنجليزي، لتسجيل الحضور والإجازات وقسائم الرواتب.',
          'صفحة الدفع تتحول بين العربي والإنجليزي.',
          'ورسالة الدفع على واتساب جاهزة بأي لغة منهم.',
          'وموقع الإدارة اللي يستخدمه المدراء بالإنجليزي.',
        ],
        module: 'member-app',
      },

      { type: 'heading', id: 'support', text: 'دعم على توقيتك، وفي ويكندك' },
      {
        type: 'text',
        paras: [
          'البحرين قدّام نيويورك بـ 7 أو 8 ساعات. الرسالة اللي ترسلها الساعة 9 الصبح في المنامة توصلهم نص الليل. والويكند عندنا جمعة وسبت، فأسبوع شغل الشركة وأسبوعك ما يلتقون إلا في جزء منه.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«قالوا لي انطر لين يوم الاثنين»',
            source: 'مراجعة لإحدى شركات برامج النوادي، من نشاط تجاري يفتح 7 أيام في الأسبوع',
            date: '27 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'فريق في السيف، 7 أيام في الأسبوع',
        points: [
          'فريقنا في السيف، في البحرين، وعلى نفس توقيتك.',
          'واتساب وتلفون وإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم، بالعربي أو بالإنجليزي.',
          'نجهز لك النظام وننقل أعضاءك وندرّب موظفينك. وأغلب النوادي تشتغل خلال أسبوع.',
          'واتساب [+973 3330 9918](https://wa.me/97333309918)، أو [support@thing.bh](mailto:support@thing.bh)',
        ],
      },

      { type: 'heading', id: 'checklist', text: 'قائمة خليجية: أسئلة تسألها قبل لا توقّع' },
      {
        type: 'text',
        paras: [
          'اطلب الجواب على الشاشة، ببياناتك إنت، مو في عرض شرائح. وإذا كان الجواب «موجود في الخطة الجاية»، اعتبره لا.',
        ],
      },
      {
        type: 'list',
        items: [
          'هل يقدر الأعضاء يدفعون بـ BenefitPay وبطاقات Benefit وApple Pay وGoogle Pay، أونلاين وفي الاستقبال؟ ومنو مزود الدفع، وهل يشتغل في البحرين؟',
          'حساب التاجر باسم منو؟ الفلوس توصل حسابك إنت؟ والشركة تاخذ نسبة؟',
          'وريني فاتورة ضريبية. فيها رقمي الضريبي، ورقم متسلسل، والمجاميع بالدينار البحريني؟',
          'المبالغ بالدينار وبثلاث خانات، ولا مقرّبة لخانتين؟',
          'شنو يصير لرقم الفاتورة إذا انلغت البيعة أو رجعت؟',
          'الرواتب تحسب التأمينات الاجتماعية وتصدّر ملف حماية الأجور، ولا أحتاج برنامج ثاني؟',
          'تطبيق الأعضاء وتطبيق الموظفين بالعربي؟ وريني الشاشات بالعربي.',
          'شلون توصل روابط الدفع والتذكيرات للأعضاء؟ يقدر الموظف يرسلها على واتساب؟',
          'منو يرد على الدعم، وعلى أي توقيت، ويوم الجمعة والسبت؟',
          'منو المسؤول عن بيانات الأعضاء؟ حسب [قانون حماية البيانات الشخصية](https://www.lloc.gov.bh/FullEn/K3018.docx) في البحرين (القانون رقم 30 لسنة 2018)، المسؤول هو النادي، فاسأل شلون تنحمى البيانات.',
          'السعر مكتوب في الصفحة وبعملتك، ولا ورا «تواصل مع المبيعات»؟',
        ],
      },

      { type: 'heading', id: 'next', text: 'جرّبه على ناديك' },
      {
        type: 'text',
        paras: [
          'أحسن تجربة هي شهر حقيقي: أعضاء حقيقيين يدفعون بـ BenefitPay، وفواتير حقيقية، ومسير رواتب حقيقي. [ابدأ بتجربة مجانية](/ar/free-trial/): ننقل أعضاءك، وتقدر تشغّل Gym Thing مجاناً لين 3 شهور قبل لا تدفع.',
          'شوف شلون يقارن Gym Thing في [المدفوعات](/ar/compare/gymnago/) و[الرواتب](/ar/compare/flyby/)، أو اقرأ عن [المدفوعات](/ar/modules/payments/) و[الفواتير](/ar/modules/invoicing/) و[الرواتب](/ar/modules/hr-payroll/).',
          'وللمدفوعات والدعم مقالات خاصة: [فوترة تحصّل المبلغ الصحيح، وأموال تصل إليك](/ar/blog/billing-that-charges-right/) و[إعداد بطيء وتدريب يستغرق أسابيع ودعم يختفي بعد التوقيع](/ar/blog/setup-and-staff-training/). وعندك نوادي في دولة خليجية ثانية؟ اقرأ [أفضل برامج النوادي في الخليج](/ar/blog/best-gym-software-gcc/) و[ضريبة القيمة المضافة على اشتراكات النوادي في كل دولة خليجية](/ar/blog/gcc-vat-for-gyms/). وفي البحرين، [تمكين تقدر تموّل جزء من النقلة](/ar/blog/tamkeen-digital-enablement-gym-software/).',
        ],
      },
      {
        type: 'note',
        text: 'صفحات الشركات والجهات الحكومية تتغير، فتأكد من النسخة الحالية قبل لا تقرر.',
      },
    ],
  },
}
