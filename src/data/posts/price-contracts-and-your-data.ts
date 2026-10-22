import type { Post } from '../posts'

// Source: docs/research/2026-10-gym-software-complaints (report.html), plus vendor terms re-read on 21 Oct 2026.
// Recheck a quote before reusing it, and keep its date.
// Gym Thing answers only use what the report claims. No "no contract" or "cancel anytime": nothing sources it.
export const post: Post = {
  slug: 'price-contracts-and-your-data',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['gym-software', 'running-the-gym'],
  en: {
    title: 'What gym software really costs after the first year',
    seoTitle: 'Gym software contracts and cost: what to check before you sign',
    description:
      'Why gym software prices climb after year one, how contracts renew themselves, what leaving with your own data costs, and seven things to check before you sign.',
    lede: 'The price on your first invoice is rarely the price you pay in year three. Owners online tell the same story again and again: the bill climbs, the contract renews before they notice, and leaving costs extra because their own members are locked inside. Here is why it happens, what to read in a contract before you sign, and how Gym Thing handles price, the trial and your data.',
    blocks: [
      {
        type: 'note',
        text: 'This post goes deeper on three of the twelve problems in [What gym owners are fed up with in their software](/blog/gym-software-problems/). Vendor terms change, so read the current version before you rely on it.',
      },

      { type: 'heading', id: 'price', text: 'Why the price climbs after year one' },
      {
        type: 'text',
        paras: [
          'Gym software is usually sold on its first-year price. The number that matters is what you pay once that year is over, and few owners ask about it when they sign.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"They increased the price by over 100% following my 2nd year with them."',
            source: 'A review of a gym software vendor',
            date: '1 Mar 2025',
          },
          {
            quote:
              '"they upgraded my subscription to a more expensive plan based on the number of clients in my account"',
            source: 'A review of a gym software vendor',
            date: '9 Jun 2025',
          },
          {
            quote: '"Their prices increase every year with no additional benefit."',
            source: 'A review of a gym software vendor',
            date: '14 Apr 2026',
          },
          {
            quote: '"I currently use a major platform but the $900/month is ridiculous."',
            source: 'Owner of a 300-client gym',
            date: '26 Sep 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'The rise usually comes from one of three places. A first-year discount ends. Your member count crosses a line and you move to a bigger plan, as one review describes. Or something you need turns out to be an add-on. None of this is hidden, but it sits in different parts of the agreement.',
          'Do the sum per member. $900 a month for 300 clients is $3 per client, every month. Ask any vendor for the price at your size today, and at the size you plan to be in two years.',
        ],
      },
      {
        type: 'answer',
        heading: 'One yearly price, with everything in it',
        points: [
          'You pay one yearly price set by the size of your gym. Nothing is sold as an add-on.',
          'Memberships, the door, the till, classes and PT, payroll, payments, automations and every branch are all in it.',
          "Setup, training and moving your members over are included too, and there's no setup fee.",
          'We tell you your price while we set up your free trial, so you can compare it with what you pay today.',
        ],
      },

      { type: 'heading', id: 'renewal', text: 'Contracts that renew before you notice' },
      {
        type: 'text',
        paras: [
          "Most gym software contracts run for a fixed term and renew themselves unless you give notice in time. A major platform's own contracts page gives 12, 24 or 36 months as examples. The trap is the notice window. With 30 days' notice on a 12-month term, your real decision date falls in month eleven, and it passes quietly while you're busy running the gym.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"If you seek to cancel and notice is not received within the required window, the agreement will auto renew for the next term."',
            source: "A major platform's own contracts page",
            date: 'updated 12 Mar 2026',
          },
          {
            quote: '"auto renews for a 12 month contract that I was never told about"',
            source: 'A review of a gym software vendor',
            date: '20 Oct 2026',
          },
          {
            quote:
              '"they automatically renew the contract for 12 months at a time and refuse any possibility of early termination"',
            source: 'A review of a gym software vendor',
            date: '9 Jun 2025',
          },
          {
            quote:
              '"The platform would later claim we had already been automatically renewed into another 12-month contract."',
            source: 'A review of a gym software vendor',
            date: '10 Jul 2026',
          },
        ],
      },

      { type: 'heading', id: 'leaving-early', text: 'Leaving mid-term, and what you get back' },
      {
        type: 'text',
        paras: [
          "If the software isn't working, the next question is whether you can leave before the term ends. The answer is in the refund clause, not on the sales page. Here is what three vendors write in their own terms.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"Cancellation is not available mid-term unless otherwise stated in your Order Form."',
            source: "A major platform's own contracts page",
            date: 'updated 12 Mar 2026',
          },
          {
            quote: '"All eligible refunds are subject to a 50% administrative fee."',
            source: "One vendor's refund policy",
            date: 'last updated 04.11.2025',
          },
          {
            quote:
              'Subscriptions "automatically renew unless canceled before the renewal date", and "any paid amount is non-refundable once the subscription period has begun."',
            source: "One vendor's terms and conditions",
            date: 'read 21 Oct 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          "One vendor's refund policy gives its own example. A business pays $1,200 for a year and leaves after 6 months. The unused half is worth $600, the 50% fee takes $300, and $300 comes back, within 30 business days. If you're weighing a move, [see a side-by-side](/compare/tamarran/) or [another](/compare/gymnago/).",
        ],
      },
      {
        type: 'answer',
        heading: 'Try it on your real gym before you pay',
        points: [
          'You can run Gym Thing free for up to 3 months before paying anything.',
          'We move your members over for the trial, so you judge it on your own members, plans and staff, not a demo.',
          "You can keep your current system running alongside until you're sure, so you never give notice on a hunch.",
        ],
      },

      { type: 'heading', id: 'data', text: 'Paying to get your own members back' },
      {
        type: 'text',
        paras: [
          'Your member list, plans, visit history and payments are the gym. Yet many contracts treat getting them out as a paid service. The export may cost extra, may only be open for a short time after you cancel, and may leave out what you need to keep billing.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'A major platform "offers a data export service for an added fee", available "for up to 30 days after cancellation". Once the site is deactivated, "you will no longer be able to access the data stored in it."',
            source: "A major platform's own contracts page",
            date: 'updated 12 Mar 2026',
          },
          {
            quote: '"they wanted to charge me £600 to transfer members payment details"',
            source: 'A review of a gym software vendor',
            date: '1 Mar 2025',
          },
          {
            quote:
              '"Still don\'t have my database export, that I paid for and wasn\'t able to bill my students for 6 weeks now."',
            source: 'A review of a gym software vendor',
            date: '2 Apr 2024',
          },
          {
            quote: '"Moving a few hundred member accounts over here was a nightmare the first week."',
            source: 'A review of a gym software vendor',
            date: '7 Oct 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          "The move itself is where the money goes. Six weeks without billing, as in one review, is six weeks of renewals you may never get back. Even when the new vendor helps, as one reviewer says theirs did, the first week is hard. So before you give notice, download everything you can yourself, open the files, and check the totals match what's on screen.",
        ],
      },
      {
        type: 'answer',
        heading: 'We do the move, and your data stays yours',
        points: [
          'We move your members, plans and history over as part of setup, at no extra cost.',
          'You see a preview before anything goes live.',
          'Any time after that, you can download your members, memberships, accounts, analytics and payroll as spreadsheets yourself.',
        ],
        module: 'members',
      },
      {
        type: 'screen',
        show: 'screen:Members',
        caption: "A member's page in Gym Thing: their plan, balance and history, kept in your account.",
      },

      { type: 'heading', id: 'checklist', text: 'Seven things to read before you sign' },
      {
        type: 'text',
        paras: [
          "Get these answers in writing, and find them in the document you actually sign. A major platform's page says your Order Form sets your contract length, renewal terms and notice, so that's the page to read, not the brochure.",
        ],
      },
      {
        type: 'list',
        items: [
          'Term. How long is the first term, and what does it turn into when it ends?',
          'Auto-renewal. Does it renew itself, and for how long? A 12-month renewal is a new 12-month commitment.',
          'Notice. How many days, in what form, and sent to whom? Ask whether an email to your account manager counts.',
          "Leaving mid-term. Can you leave early, and what comes back? Ask for a worked example with your own numbers, the way one vendor's policy gives one.",
          'Price increases. Can the price change at renewal, and by how much? Does a higher member count move you to a bigger plan?',
          'Data export. What can you download yourself, in what format, and for how long after you leave? If there is an export service, what does it cost?',
          'Member data. Does the contract say the member records are yours? That means plans, visits and payment history, not just names and phone numbers.',
        ],
      },
      {
        type: 'text',
        paras: [
          "Then put one date in your calendar: the renewal date minus the notice period. If you renew on 1 December with 30 days' notice, you decide by 1 November. Count back three months from there and you have time to run a real trial on your own members before you have to choose.",
        ],
      },

      { type: 'heading', id: 'gym-thing', text: 'Where Gym Thing stands on price, the trial and your data' },
      {
        type: 'answer',
        heading: 'Plain answers before you pay',
        points: [
          'Price: one yearly price by gym size, every module included, no setup fee. You hear it while we set up your trial.',
          'Trial: up to 3 months free, on your real members, before you pay anything.',
          "Switching: we move your members, plans and history over, with a preview first, and your old system keeps running until you're sure.",
          'Your data: members, memberships, accounts, analytics and payroll download as spreadsheets whenever you want them.',
          'Questions: ask us anything on this list on WhatsApp, phone or email, 7 days a week, with same-day replies.',
        ],
        module: 'reports',
      },
      {
        type: 'screen',
        show: 'screen:Analytics',
        caption:
          'Analytics in Gym Thing, comparing any period with the one before. Your figures are yours to download.',
      },
      {
        type: 'text',
        paras: [
          'Comparing with what you use now? See [a side-by-side](/compare/mindbody/) or [another](/compare/glofox/). To see it on your own gym, [start with a free trial](/free-trial/).',
          'Payment fees and held payouts are in [Billing that charges the right member, and money that reaches you](/blog/billing-that-charges-right/), and moving over and training your team in [Slow setup, weeks of training, and support that goes quiet](/blog/setup-and-staff-training/).',
        ],
      },
    ],
  },
  ar: {
    title: 'التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى',
    seoTitle: 'عقود برامج إدارة النوادي الرياضية وتكلفتها: ما يجب التحقق منه قبل التوقيع',
    description:
      'لماذا ترتفع أسعار برامج إدارة النوادي الرياضية بعد السنة الأولى، وكيف تتجدد العقود تلقائياً، وكم يكلف الخروج ببياناتك، وسبعة بنود تراجعها قبل التوقيع.',
    lede: 'السعر اللي في أول فاتورة نادراً يكون نفس السعر اللي تدفعه في السنة الثالثة. أصحاب النوادي يكتبون نفس القصة مرة بعد مرة: الفاتورة تزيد، والعقد يتجدد قبل لا ينتبهون، والطلعة تكلف زيادة لأن أعضاءهم محبوسين داخل النظام. هني ليش يصير هالشي، وشنو تقرا في العقد قبل لا توقّع، وشلون يتعامل Gym Thing مع السعر والتجربة وبياناتك.',
    blocks: [
      {
        type: 'note',
        text: 'هالمقال يتعمق في ثلاث من المشاكل الـ 12 اللي في [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/). وشروط الشركات تتغير، فاقرا النسخة الحالية قبل لا تعتمد عليها.',
      },

      { type: 'heading', id: 'price', text: 'ليش السعر يزيد بعد أول سنة' },
      {
        type: 'text',
        paras: [
          'برامج النوادي عادةً تنباع بسعر السنة الأولى. بس الرقم المهم هو اللي بتدفعه بعد ما تخلص هالسنة، وقليل من أصحاب النوادي يسألون عنه وقت التوقيع.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«زادوا السعر أكثر من 100% بعد سنتي الثانية وياهم.»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '1 مارس 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«نقلوا اشتراكي لباقة أغلى على حسب عدد العملاء اللي في حسابي»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '9 يونيو 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أسعارهم تزيد كل سنة بدون أي فايدة زيادة.»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '14 أبريل 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أستخدم منصة كبيرة حالياً، بس 900 دولار في الشهر شي ما يصير.»',
            source: 'صاحب نادي فيه 300 عميل',
            date: '26 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'الزيادة عادةً تجي من وحدة من ثلاث. خصم السنة الأولى يخلص. أو عدد أعضاءك يعدّي حد معين وتنتقل لباقة أكبر، مثل ما تقول إحدى المراجعات. أو شي تحتاجه يطلع إنه إضافة. ولا شي من هذا مخفي، بس كل واحد منها في مكان مختلف من الاتفاقية.',
          'احسبها على كل عضو. 900 دولار في الشهر لـ 300 عميل يعني 3 دولار على كل عميل، كل شهر. واسأل أي شركة عن السعر على حجمك اليوم، وعلى الحجم اللي تخطط توصله بعد سنتين.',
        ],
      },
      {
        type: 'answer',
        heading: 'سعر سنوي واحد، وكل شي داخل فيه',
        points: [
          'تدفع سعر سنوي واحد حسب حجم ناديك. وما في شي ينباع كإضافة.',
          'الاشتراكات، والباب، ونقطة البيع، والحصص والتدريب الشخصي، والرواتب والمدفوعات والأتمتة وكل الفروع، كلها داخلة فيه.',
          'والتجهيز والتدريب ونقل أعضاءك بعد داخلين، وما في رسوم تجهيز.',
          'نعطيك سعرك وإحنا نجهز تجربتك المجانية، عشان تقارنه باللي تدفعه اليوم.',
        ],
      },

      { type: 'heading', id: 'renewal', text: 'عقود تتجدد قبل لا تنتبه' },
      {
        type: 'text',
        paras: [
          'أغلب عقود برامج النوادي لها مدة ثابتة، وتتجدد بروحها إذا ما أرسلت إشعار في الوقت. صفحة العقود في منصة كبيرة نفسها تعطي 12 و24 و36 شهر كأمثلة. والفخ هو مدة الإشعار. إذا الإشعار 30 يوم على عقد 12 شهر، فموعد قرارك الحقيقي في الشهر الحادي عشر، ويعدّي بهدوء وإنت مشغول بالنادي.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«إذا أردت الإلغاء ولم يصل الإشعار خلال المدة المطلوبة، فسيتجدد الاتفاق تلقائياً للمدة التالية.»',
            source: 'صفحة العقود في منصة كبيرة نفسها',
            date: 'تحديث 12 مارس 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«يتجدد تلقائياً لعقد 12 شهر ما أحد قال لي عنه»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '20 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«يجددون العقد تلقائياً 12 شهر كل مرة، ويرفضون أي إمكانية إنك تنهيه بدري»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '9 يونيو 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«بعدين المنصة قالت إننا أصلاً تجددنا تلقائياً لعقد ثاني مدته 12 شهر.»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '10 يوليو 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'leaving-early', text: 'الطلعة في نص المدة، وكم يرجع لك' },
      {
        type: 'text',
        paras: [
          'إذا البرنامج مو شغّال، السؤال اللي بعده: تقدر تطلع قبل لا تخلص المدة؟ الجواب في بند الاسترجاع، مو في صفحة المبيعات. هذا اللي كاتبينه ثلاث شركات في شروطهم.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«الإلغاء غير متاح في منتصف المدة ما لم يُذكر خلاف ذلك في نموذج الطلب.»',
            source: 'صفحة العقود في منصة كبيرة نفسها',
            date: 'تحديث 12 مارس 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«جميع المبالغ المستردة المؤهلة تخضع لرسوم إدارية بنسبة 50%.»',
            source: 'سياسة الاسترجاع عند إحدى الشركات',
            date: 'آخر تحديث 04.11.2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              'الاشتراكات «تتجدد تلقائياً ما لم تُلغَ قبل تاريخ التجديد»، و«أي مبلغ مدفوع غير قابل للاسترداد بمجرد بدء فترة الاشتراك».',
            source: 'الشروط والأحكام عند إحدى الشركات',
            date: 'قريناها في 21 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'سياسة إحدى الشركات تعطي مثال من عندها. نشاط يدفع 1,200 دولار على سنة، ويطلع بعد 6 شهور. النص اللي ما استخدمه قيمته 600 دولار، والرسوم الـ 50% تاخذ 300 دولار، ويرجع له 300 دولار، خلال 30 يوم عمل. إذا تفكر تنتقل، شوف [مقارنة جنب جنب](/ar/compare/tamarran/) أو [وحدة ثانية](/ar/compare/gymnago/).',
        ],
      },
      {
        type: 'answer',
        heading: 'جرّبه على ناديك الحقيقي قبل لا تدفع',
        points: [
          'تقدر تشغّل Gym Thing مجاناً لين 3 شهور قبل لا تدفع أي شي.',
          'ننقل أعضاءك للتجربة، عشان تحكم عليه بأعضاءك وباقاتك وموظفينك، مو بعرض تجريبي.',
          'وتقدر تخلي نظامك الحالي شغّال وياه لين ما تتأكد، فما ترسل إشعار الإلغاء على تخمين.',
        ],
      },

      { type: 'heading', id: 'data', text: 'تدفع عشان يرجع لك أعضاءك' },
      {
        type: 'text',
        paras: [
          'قائمة أعضاءك وباقاتهم وزياراتهم ومدفوعاتهم، هذي هي النادي. ومع هذا، عقود وايد تعامل طلعتها كخدمة مدفوعة. التصدير ممكن يكلف زيادة، وممكن يكون متاح بس لفترة قصيرة بعد الإلغاء، وممكن ما يشمل اللي تحتاجه عشان تكمل تحصيل.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              'منصة كبيرة «تقدم خدمة لتصدير البيانات برسوم إضافية»، متاحة «لمدة تصل إلى 30 يوماً بعد الإلغاء». وبعد إيقاف الموقع نهائياً، «لن تتمكن من الوصول إلى البيانات المخزنة فيه».',
            source: 'صفحة العقود في منصة كبيرة نفسها',
            date: 'تحديث 12 مارس 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«بغوا ياخذون مني 600 جنيه إسترليني عشان ينقلون بيانات الدفع حق الأعضاء»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '1 مارس 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«للحين ما وصلني ملف قاعدة البيانات اللي دفعت عليه، وصار لي 6 أسابيع ما قدرت أحصّل من طلابي.»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '2 أبريل 2024',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«نقل كم مية حساب عضو لهني كان كابوس في أول أسبوع.»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '7 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'النقل نفسه هو المكان اللي تروح فيه الفلوس. ست أسابيع بدون تحصيل، مثل إحدى المراجعات، يعني ست أسابيع من التجديدات ممكن ما ترجع لك أبداً. وحتى لما الشركة الجديدة تساعد، مثل ما يقول أحد المراجعين عن شركته، أول أسبوع يكون صعب. فقبل لا ترسل إشعار الإلغاء، نزّل كل شي تقدر عليه بنفسك، وافتح الملفات، وتأكد إن المجاميع نفس اللي على الشاشة.',
        ],
      },
      {
        type: 'answer',
        heading: 'إحنا ننقلك، وبياناتك تبقى لك',
        points: [
          'ننقل أعضاءك وباقاتك وتاريخهم كجزء من التجهيز، بدون أي تكلفة زيادة.',
          'تشوف معاينة قبل لا يشتغل أي شي.',
          'وبعدها، أي وقت، تقدر تنزّل بنفسك أعضاءك واشتراكاتك وحساباتك وتحليلاتك ورواتبك كملفات إكسل.',
        ],
        module: 'members',
      },
      {
        type: 'screen',
        show: 'screen:Members',
        caption: 'صفحة عضو في Gym Thing: باقته ورصيده وتاريخه، محفوظة في حسابك.',
      },

      { type: 'heading', id: 'checklist', text: 'سبع أشياء تقراها قبل لا توقّع' },
      {
        type: 'text',
        paras: [
          'خذ هالأجوبة مكتوبة، ولاقها في الورقة اللي بتوقّع عليها فعلاً. صفحة منصة كبيرة تقول إن نموذج الطلب هو اللي يحدد مدة عقدك وشروط التجديد والإشعار، فهذي الصفحة اللي لازم تقراها، مو الكتيّب.',
        ],
      },
      {
        type: 'list',
        items: [
          'المدة. كم مدة العقد الأول، وشنو يصير لما يخلص؟',
          'التجديد التلقائي. يتجدد بروحه؟ ولكم مدة؟ تجديد 12 شهر يعني التزام جديد 12 شهر.',
          'الإشعار. كم يوم، وبأي طريقة، ولمنو ترسله؟ اسأل إذا إيميل لمدير حسابك يكفي.',
          'الطلعة في نص المدة. تقدر تطلع بدري؟ وكم يرجع لك؟ اطلب مثال محسوب بأرقامك، مثل ما سياسة إحدى الشركات تعطي مثال.',
          'زيادة السعر. السعر يتغير عند التجديد؟ وبكم؟ وإذا زاد عدد أعضاءك، تنتقل لباقة أكبر؟',
          'تصدير البيانات. شنو تقدر تنزّل بنفسك، وبأي صيغة، ولين متى بعد ما تطلع؟ وإذا في خدمة تصدير، كم تكلف؟',
          'بيانات الأعضاء. العقد يقول إن سجلات الأعضاء لك؟ وهذا يشمل الباقات والزيارات وتاريخ المدفوعات، مو بس الأسماء وأرقام التلفون.',
        ],
      },
      {
        type: 'text',
        paras: [
          'بعدين حط تاريخ واحد في تقويمك: تاريخ التجديد ناقص مدة الإشعار. إذا عقدك يتجدد في 1 ديسمبر والإشعار 30 يوم، لازم تقرر قبل 1 نوفمبر. ارجع من هناك ثلاث شهور، ويصير عندك وقت تجرب فيه تجربة حقيقية على أعضاءك قبل لا تختار.',
        ],
      },

      { type: 'heading', id: 'gym-thing', text: 'وين يوقف Gym Thing من السعر والتجربة وبياناتك' },
      {
        type: 'answer',
        heading: 'أجوبة واضحة قبل لا تدفع',
        points: [
          'السعر: سعر سنوي واحد حسب حجم النادي، وكل الأقسام داخلة فيه، وما في رسوم تجهيز. تعرفه وإحنا نجهز تجربتك.',
          'التجربة: لين 3 شهور مجاناً، على أعضاءك الحقيقيين، قبل لا تدفع أي شي.',
          'الانتقال: ننقل أعضاءك وباقاتك وتاريخهم، مع معاينة قبلها، ونظامك القديم يظل شغّال لين ما تتأكد.',
          'بياناتك: الأعضاء والاشتراكات والحسابات والتحليلات والرواتب تنزل كملفات إكسل متى ما بغيت.',
          'الأسئلة: اسألنا أي شي من هالقائمة على واتساب أو تلفون أو إيميل، 7 أيام في الأسبوع، والرد في نفس اليوم.',
        ],
        module: 'reports',
      },
      {
        type: 'screen',
        show: 'screen:Analytics',
        caption: 'التحليلات في Gym Thing، تقارن أي فترة باللي قبلها. وأرقامك لك، تنزّلها متى ما بغيت.',
      },
      {
        type: 'text',
        paras: [
          'تقارن باللي تستخدمه الحين؟ شوف [مقارنة جنب جنب](/ar/compare/mindbody/) أو [وحدة ثانية](/ar/compare/glofox/). وعشان تشوفه على ناديك، [ابدأ بتجربة مجانية](/ar/free-trial/).',
          'رسوم الدفع والتحويلات المحجوزة في مقال [فوترة تحصّل المبلغ الصحيح، وأموال تصل إليك](/ar/blog/billing-that-charges-right/)، والانتقال وتدريب فريقك في [إعداد بطيء وتدريب يستغرق أسابيع ودعم يختفي بعد التوقيع](/ar/blog/setup-and-staff-training/).',
        ],
      },
    ],
  },
}
