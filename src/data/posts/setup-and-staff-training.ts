import type { Post } from '../posts'

// Source: docs/research/2026-10-gym-software-complaints (report.html), plus two Mindbody reviews read on
// Trustpilot on 21 Oct 2026. Recheck a quote before reusing it, and keep its date.
// Gym Thing answers only use what the report and README allow.
export const post: Post = {
  slug: 'setup-and-staff-training',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['running-the-gym', 'gym-software'],
  en: {
    title: 'Slow setup, weeks of training, and support that goes quiet',
    seoTitle: 'Gym software onboarding and staff training: a go-live plan',
    description:
      'Why new gym software takes weeks to set up and learn, why support fades once you sign, and a go-live plan with the questions to ask before you switch.',
    lede: 'Owners rarely leave a gym system over one missing feature. They leave because setup dragged on for a month, the front desk never got comfortable, and support stopped answering once the contract was signed. Here is why that happens, what owners wrote about it, a plan for going live without losing members, and how Gym Thing does it.',
    blocks: [
      {
        type: 'note',
        text: "This post goes deeper on two problems from our research, [What gym owners are fed up with in their software](/blog/gym-software-problems/). A review is one person's experience, not proof of how every gym gets on with a product.",
      },

      { type: 'heading', id: 'why', text: 'Why new software takes so long to settle in' },
      {
        type: 'text',
        paras: [
          'Most gym systems are sold to studios, spas, boxes and big chains at once. To cover all of them, every screen carries every option, and setup becomes a long list of choices: plan types, prices, tax, door rules, payment accounts, staff roles. Someone has to make each one before the first member walks in. Usually that someone is you.',
          "Then your members have to come across. An export from the old system rarely fits the new one, so names, end dates and balances get checked by hand. Until that's done, you can't bill with confidence, and you can't promote the gym.",
          "Training is often a video library and one call. That works for the person on the call. It doesn't work for the coach who covers the desk on a Friday night, or for the new hire who starts next month.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"The system is challenging to get used to and onboarding is a beast (but worth it)."',
            source: 'Trustpilot review of a gym software vendor',
            date: '17 Nov 2025',
          },
          {
            quote: '"I’m now a month in and still don’t have a booking platform."',
            source: 'Trustpilot review of a gym software vendor',
            date: '15 Oct 2026',
          },
          {
            quote: '"I spent THREE MONTHS of time and money on this."',
            source: 'Trustpilot review of a gym software vendor, from a small business',
            date: '2 Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'front-desk', text: 'Screens the front desk has to fight' },
      {
        type: 'text',
        paras: [
          'The front desk does the same few jobs all day: let a member in, sell or renew a plan, freeze one for a trip, sell a drink, take a payment. When each of those means hunting through menus built for some other kind of business, mistakes follow. A plan gets the wrong end date. A member pays twice. Someone is let in by hand because nobody can see why the door said no.',
          'Front-desk staff also change more often than anyone else in the gym. Every new hire means training again, so a system that takes weeks to learn costs you those weeks each time someone leaves.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"This is the worst most unuser friendly, confusing one I have ever used."',
            source: 'Trustpilot review of a gym software vendor',
            date: '12 Jan 2025',
          },
          {
            quote: '"the system is so rigid and convoluted"',
            source: 'Trustpilot review of a gym software vendor',
            date: '1 May 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'The daily jobs, one screen away',
        points: [
          "Freeze, extend or upgrade a plan from the member's page, and the end date updates itself.",
          'Sell a plan at the desk, or send a payment link. The plan starts the moment the member pays.',
          'Plans ending in the next 14 days are flagged for your team.',
          'Every refusal at the door shows the reason, so staff know what to say.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'Plans in Gym Thing: packages, lengths, prices and access hours on one screen.',
      },

      { type: 'heading', id: 'support', text: 'Support that goes quiet after you sign' },
      {
        type: 'text',
        paras: [
          'Before you sign, you talk to a sales team whose job is to answer fast. After you sign, you join a support queue shared by thousands of businesses, often in another time zone and open on weekdays only. Gyms are busiest in the evenings and at weekends, which is exactly when that queue is closed.',
          "Answers also change with whoever picks up. When support staff don't know the product well, every ticket starts from zero, and you explain your gym again from the beginning.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"they told me to wait until Monday"',
            source: 'Trustpilot review of a gym software vendor, from a business open 7 days a week',
            date: '27 Sep 2026',
          },
          {
            quote: '"the moment we signed on and became paying customers, that support disappeared."',
            source: 'Trustpilot review of a gym software vendor',
            date: '1 Jun 2026',
          },
          {
            quote: '"there are serious bottlenecks in support, it seems like only one person works there"',
            source: 'Trustpilot review of a gym software vendor',
            date: '16 Sep 2026',
          },
          {
            quote: '"You could talk to 4 different employees and get 4 totally different conflicting answers."',
            source: 'Trustpilot review of a gym software vendor',
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
          '[WhatsApp +973 3993 6601](https://wa.me/97339936601), [call +973 3993 6601](tel:+97339936601) or [support@thing.bh](mailto:support@thing.bh)',
        ],
      },

      { type: 'heading', id: 'go-live', text: 'A go-live plan for switching' },
      {
        type: 'text',
        paras: ['One owner on r/gymowner gave new owners advice that works just as well for switching systems:'],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"get your gym software set up before you start promoting. Billing, sign-ups, waivers, all of it."',
            source: "An owner's advice to new owners, r/gymowner",
            url: 'https://www.reddit.com/r/gymowner/comments/1wur9en/gym_owners_what_do_you_wish_you_knew_before/',
            date: '1 Oct 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: ["Here is the order we'd follow, whichever system you pick."],
      },
      {
        type: 'list',
        items: [
          'Write down your plans. List every plan you sell today with its price, length, visit limit and door hours. Old plans nobody buys any more can stay behind.',
          'Move your members, then check them. Bring over names, phone numbers, current plans, end dates and balances. Pick twenty members you know well and check each one on the new system before going live.',
          "Set the [door rules](/modules/access-control/) and [payments](/modules/payments/). Decide who gets in when, such as ladies' hours, off-peak or 10-visit passes. Connect the payment methods your members already use, so the first renewal just works.",
          'Train the desk on five jobs: checking a member in and reading a door refusal, selling or renewing a plan, freezing or extending one, selling at the till, and sending a payment link. Have each person do every job once, on a real member, while you watch.',
          'Run old and new side by side. Keep the old system open for a few weeks, so anything that looks wrong on the new one can be checked against the old.',
          'Know who to call at the weekend. Save the support number on the desk phone before go-live day, and agree who on your team makes the call. Go live on a quiet morning, not a busy evening.',
          'Promote last. Run the opening offer or the January push only once billing, sign-ups and the door have worked for a full week.',
        ],
      },

      { type: 'heading', id: 'questions', text: 'Questions to ask before you sign' },
      {
        type: 'list',
        items: [
          'Who sets up my plans, branches and payments: you or me?',
          'Do you move my members over? Does it cost extra? Can I check them before we go live?',
          'How long until a gym my size is live? Ask for the usual time, not the best case.',
          'Who trains my staff, and what happens when I hire someone new next year?',
          'When can I reach a person? Ask about Friday and Saturday specifically.',
          'Is support on WhatsApp and the phone, or only a ticket form? Can I get help in Arabic?',
          'Can I run it free on my real members before I pay, and keep my old system running alongside?',
          'If I leave, can I [take my data with me](/blog/gym-software-problems/#data), and what does that cost?',
        ],
      },

      { type: 'heading', id: 'gym-thing', text: 'How Gym Thing gets you live' },
      {
        type: 'answer',
        heading: 'We set it up, move your members and train your team',
        points: [
          'Most gyms are live within a week.',
          'We set up your plans, branches and payments, so you skip the long setup list.',
          'We move your members, plans and history over at no extra cost, and you see a preview before anything goes live.',
          'We train your staff on the jobs they do every day.',
          "There's no setup fee. Run Gym Thing free for up to 3 months on your real members, and keep your current system running alongside until you're sure.",
        ],
      },
      {
        type: 'answer',
        heading: 'A till built for a busy counter',
        points: [
          'Products are big picture tiles. Tap to add, and each tile shows how many are left.',
          'Take cash, card or BenefitPay, with the change worked out for you, or split one sale across payments.',
          "Send the receipt to the member's WhatsApp, already filled in, or print it.",
        ],
        module: 'point-of-sale',
      },
      {
        type: 'screen',
        show: 'screen:Pos',
        caption: 'The Gym Thing till, with a ticket ready to charge.',
      },
      {
        type: 'answer',
        heading: 'Staff look after their own day',
        points: [
          'Staff clock in from their phone, and it only works at the branch.',
          "They see today's shift, request leave and open their payslips in their own app, in Arabic or English.",
          'Leave balances are in the app, so nobody has to ask you how many days they have left.',
        ],
        module: 'staff-app',
      },
      {
        type: 'screen',
        show: 'screen:StaffApp',
        caption: "The Gym Thing staff app: clock in, today's shift, leave and payslips.",
      },
      {
        type: 'text',
        paras: [
          'Weighing Gym Thing against what you use today? Our comparisons with [Mindbody](/compare/mindbody/) and with [running the gym on spreadsheets](/compare/spreadsheets/) go through it point by point.',
          'Contracts and leaving with your data are covered in [What gym software really costs after the first year](/blog/price-contracts-and-your-data/). For Arabic and weekend support, see [Gym software built for somewhere else, seen from a gym in Bahrain](/blog/built-for-the-gulf/).',
        ],
      },
    ],
  },
  ar: {
    title: 'إعداد بطيء وتدريب يستغرق أسابيع ودعم يختفي بعد التوقيع',
    seoTitle: 'تهيئة برنامج إدارة النادي الرياضي وتدريب الموظفين: خطة للانتقال',
    description:
      'لماذا يستغرق إعداد برنامج النادي الجديد وتعلّمه أسابيع، ولماذا يتراجع الدعم بعد التوقيع، مع خطة للانتقال وأسئلة ينبغي طرحها قبل تغيير البرنامج.',
    lede: 'نادراً ما يترك صاحب النادي برنامجه عشان ميزة وحدة ناقصة. يتركه لأن الإعداد طوّل شهر، والاستقبال ما تعوّد عليه أبداً، والدعم وقف يرد أول ما توقّع العقد. هني بنشرح ليش يصير هذا، وشنو كتبوا أصحاب النوادي عنه، وخطة عشان تنتقل بدون ما تخسر أعضاء، وشلون يسويها Gym Thing.',
    blocks: [
      {
        type: 'note',
        text: 'هذا المقال يتعمق في مشكلتين من بحثنا [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/). المراجعة تجربة شخص واحد، مو دليل على تجربة كل نادي مع البرنامج.',
      },

      { type: 'heading', id: 'why', text: 'ليش البرنامج الجديد ياخذ وقت طويل لين يستقر' },
      {
        type: 'text',
        paras: [
          'أغلب برامج النوادي تنباع للاستوديوهات والسبا ونوادي الكروس فت والسلاسل الكبيرة في نفس الوقت. وعشان تغطيهم كلهم، كل شاشة فيها كل الخيارات، والإعداد يصير قائمة طويلة من القرارات: أنواع الباقات، والأسعار، والضريبة، وقواعد الدخول، وحسابات الدفع، وصلاحيات الموظفين. لازم أحد ياخذ كل قرار قبل لا يدخل أول عضو. وعادةً هالأحد هو أنت.',
          'بعدين لازم ينتقلون أعضاءك. الملف اللي يطلع من النظام القديم نادراً ما يركب على الجديد، فالأسامي وتواريخ الانتهاء والأرصدة تنراجع باليد. ولين ما يخلص هذا، ما تقدر تحاسب الأعضاء وأنت مرتاح، وما تقدر تسوي إعلانات للنادي.',
          'والتدريب في أغلب الأحيان مكتبة فيديوهات واتصال واحد. هذا ينفع للشخص اللي كان في الاتصال. بس ما ينفع للمدرب اللي يغطي الاستقبال ليلة الجمعة، ولا للموظف الجديد اللي بيبدأ الشهر الياي.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«النظام صعب تتعود عليه، والتهيئة متعبة وايد (بس تستاهل).»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
            date: '17 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«صار لي شهر وللحين ما عندي نظام حجوزات.»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
            date: '15 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«صرفت ثلاث شهور من وقتي وفلوسي على هذا.»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي، من نشاط تجاري صغير',
            date: '2 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'front-desk', text: 'شاشات يتعب معاها الاستقبال' },
      {
        type: 'text',
        paras: [
          'الاستقبال يسوي نفس الشغلات القليلة طول اليوم: يدخّل عضو، يبيع باقة أو يجددها، يجمّد وحدة لعضو مسافر، يبيع مشروب، وياخذ دفعة. ولما كل وحدة من هذي تعني إنك تدوّر في قوائم مسوية لنوع ثاني من البزنس، تبدأ الأغلاط. باقة ينحط لها تاريخ انتهاء غلط. عضو يدفع مرتين. وأحد يدخل باليد لأن محد يعرف ليش الباب رفضه.',
          'وموظفين الاستقبال يتغيرون أكثر من أي أحد ثاني في النادي. كل موظف جديد يعني تدريب من جديد، فالنظام اللي ياخذ أسابيع عشان ينتعلم يكلفك هالأسابيع كل ما طلع أحد.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«هذا أسوأ واحد استخدمته في حياتي، صعب الاستخدام ومحيّر.»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
            date: '12 يناير 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«النظام جامد ومعقد وايد»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
            date: '1 مايو 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'شغل كل يوم، على بعد شاشة وحدة',
        points: [
          'جمّد الباقة أو مدّدها أو رقّها من صفحة العضو، وتاريخ الانتهاء يتحدث بروحه.',
          'بيع الباقة في الاستقبال، أو ارسل رابط دفع. والباقة تبدأ أول ما يدفع العضو.',
          'الباقات اللي بتخلص خلال الـ 14 يوم الياية تطلع لفريقك.',
          'كل رفض عند الباب يبيّن السبب، فالموظفين يعرفون شنو يقولون.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'الباقات في Gym Thing: الفئات والمدد والأسعار وساعات الدخول في شاشة وحدة.',
      },

      { type: 'heading', id: 'support', text: 'دعم يسكت بعد ما توقّع' },
      {
        type: 'text',
        paras: [
          'قبل لا توقّع، تكلم فريق مبيعات شغلته إنه يرد بسرعة. وبعد ما توقّع، تدخل طابور دعم يتشاركونه آلاف الشركات، وأغلب الأحيان في منطقة زمنية ثانية ويفتح أيام الدوام بس. والنوادي أزحم شي في الليل وفي الويكند، يعني بالضبط الوقت اللي يكون فيه هالطابور مسكّر.',
          'والأجوبة بعد تتغير على حسب منو يرد. لما موظفين الدعم ما يعرفون البرنامج زين، كل طلب يبدأ من الصفر، وأنت تعيد تشرح ناديك من البداية.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«قالوا لي انطر لين يوم الاثنين»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي، من نشاط تجاري يفتح 7 أيام في الأسبوع',
            date: '27 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أول ما وقّعنا وصرنا عملاء ندفع، اختفى الدعم.»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
            date: '1 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«في زحمة كبيرة في الدعم، كأن شخص واحد بس يشتغل عندهم»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
            date: '16 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«تقدر تكلم 4 موظفين مختلفين وتاخذ 4 أجوبة مختلفة ومتناقضة تماماً.»',
            source: 'مراجعة على Trustpilot لـإحدى شركات برامج النوادي',
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
          'واتساب [+973 3993 6601](https://wa.me/97339936601)، أو اتصل على [+973 3993 6601](tel:+97339936601)، أو [support@thing.bh](mailto:support@thing.bh)',
        ],
      },

      { type: 'heading', id: 'go-live', text: 'خطة عشان تنتقل للبرنامج الجديد' },
      {
        type: 'text',
        paras: ['صاحب نادي في r/gymowner عطى أصحاب النوادي الجدد نصيحة تنفع بعد لما تغيّر برنامجك:'],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«جهّز برنامج النادي قبل لا تبدأ الإعلانات. الفوترة، والتسجيل، ونماذج الإقرار، كل شي.»',
            source: 'نصيحة صاحب نادي لأصحاب النوادي الجدد، في r/gymowner',
            url: 'https://www.reddit.com/r/gymowner/comments/1wur9en/gym_owners_what_do_you_wish_you_knew_before/',
            date: '1 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: ['وهذا الترتيب اللي نمشي عليه، أي برنامج اخترت.'],
      },
      {
        type: 'list',
        items: [
          'اكتب باقاتك. سوّ قائمة بكل باقة تبيعها اليوم، مع سعرها ومدتها وعدد زياراتها وساعات الدخول. والباقات القديمة اللي محد يشتريها خلها ورا.',
          'انقل أعضاءك، وبعدين راجعهم. انقل الأسامي وأرقام التلفون والباقات الحالية وتواريخ الانتهاء والأرصدة. اختار عشرين عضو تعرفهم زين وراجع كل واحد منهم في النظام الجديد قبل لا تشغّله.',
          'جهّز [قواعد الدخول](/ar/modules/access-control/) و[المدفوعات](/ar/modules/payments/). حدد منو يدخل ومتى، مثل ساعات السيدات أو خارج الذروة أو باقة 10 زيارات. واربط طرق الدفع اللي يستخدمونها أعضاءك أصلاً، عشان أول تجديد يمشي بدون مشاكل.',
          'درّب الاستقبال على خمس شغلات: تدخيل العضو وقراية سبب الرفض عند الباب، وبيع الباقة أو تجديدها، وتجميدها أو تمديدها، والبيع في نقطة البيع، وإرسال رابط دفع. خل كل موظف يسوي كل شغلة مرة، على عضو حقيقي، وأنت تشوفه.',
          'شغّل القديم والجديد مع بعض. خل النظام القديم مفتوح كم أسبوع، عشان أي شي يطلع غلط في الجديد تقدر تقارنه بالقديم.',
          'اعرف منو تكلم في الويكند. احفظ رقم الدعم على تلفون الاستقبال قبل يوم التشغيل، واتفقوا منو من فريقك يتصل. وشغّل النظام في صبح هادي، مو في ليلة زحمة.',
          'الإعلانات آخر شي. سوّ عرض الافتتاح أو حملة يناير بس بعد ما الفوترة والتسجيل والباب يشتغلون أسبوع كامل بدون مشاكل.',
        ],
      },

      { type: 'heading', id: 'questions', text: 'أسئلة اسألها قبل لا توقّع' },
      {
        type: 'list',
        items: [
          'منو يجهز باقاتي وفروعي والمدفوعات: إنتون ولا أنا؟',
          'تنقلون أعضائي؟ هذا عليه فلوس زيادة؟ أقدر أراجعهم قبل التشغيل؟',
          'كم ياخذ نادي بحجمي لين يشتغل؟ اسأل عن الوقت المعتاد، مو أحسن حالة.',
          'منو يدرّب موظفيني، وشنو يصير لما أوظف أحد جديد السنة الياية؟',
          'متى أقدر أوصل لشخص؟ اسأل عن الجمعة والسبت بالذات.',
          'الدعم على واتساب والتلفون، ولا بس نموذج طلبات؟ أقدر آخذ المساعدة بالعربي؟',
          'أقدر أشغّله ببلاش على أعضائي الحقيقيين قبل لا أدفع، وأخلي نظامي القديم شغال معاه؟',
          'إذا طلعت، أقدر [آخذ بياناتي معاي](/ar/blog/gym-software-problems/#data)، وكم يكلف هذا؟',
        ],
      },

      { type: 'heading', id: 'gym-thing', text: 'شلون يشغّلك Gym Thing' },
      {
        type: 'answer',
        heading: 'إحنا نجهزه، وننقل أعضاءك، وندرّب فريقك',
        points: [
          'أغلب النوادي تشتغل خلال أسبوع.',
          'نجهز باقاتك وفروعك والمدفوعات، فما تحتاج تعبي قائمة الإعداد الطويلة.',
          'ننقل أعضاءك وباقاتهم وتاريخهم بدون أي تكلفة زيادة، وتشوف معاينة قبل لا يشتغل أي شي.',
          'ندرّب موظفينك على الشغل اللي يسوونه كل يوم.',
          'ما في رسوم إعداد. شغّل Gym Thing ببلاش لين 3 شهور على أعضاءك الحقيقيين، وخل نظامك الحالي شغال معاه لين تتأكد.',
        ],
      },
      {
        type: 'answer',
        heading: 'نقطة بيع مسوية لكاونتر عليه زحمة',
        points: [
          'المنتجات مربعات كبيرة بالصور. اضغط عشان تضيف، وكل مربع يبيّن كم باقي منه.',
          'خذ كاش أو بطاقة أو BenefitPay، والباقي ينحسب لك، أو قسّم البيعة الوحدة على أكثر من دفعة.',
          'ارسل الإيصال على واتساب العضو، جاهز ومعبّى، أو اطبعه.',
        ],
        module: 'point-of-sale',
      },
      {
        type: 'screen',
        show: 'screen:Pos',
        caption: 'نقطة البيع في Gym Thing، والطلب جاهز للدفع.',
      },
      {
        type: 'answer',
        heading: 'الموظفين يتابعون يومهم بروحهم',
        points: [
          'الموظفين يسجلون حضورهم من تلفوناتهم، وما يشتغل إلا في الفرع.',
          'يشوفون دوامهم اليوم، ويطلبون إجازات، ويفتحون قسائم رواتبهم في تطبيقهم الخاص، بالعربي أو بالإنجليزي.',
          'رصيد الإجازات في التطبيق، فمحد يحتاج يسألك كم يوم باقي له.',
        ],
        module: 'staff-app',
      },
      {
        type: 'screen',
        show: 'screen:StaffApp',
        caption: 'تطبيق الموظفين في Gym Thing: تسجيل الحضور، ودوام اليوم، والإجازات، وقسائم الرواتب.',
      },
      {
        type: 'text',
        paras: [
          'تقارن Gym Thing باللي تستخدمه اليوم؟ مقارناتنا مع [Mindbody](/ar/compare/mindbody/) ومع [إدارة النادي على جداول البيانات](/ar/compare/spreadsheets/) تمشي عليها نقطة نقطة.',
          'العقود والطلعة ببياناتك في مقال [التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى](/ar/blog/price-contracts-and-your-data/). وعن الدعم بالعربي وفي الويكند، شوف [برامج النوادي المصممة لأسواق أخرى، من منظور نادٍ رياضي في البحرين](/ar/blog/built-for-the-gulf/).',
        ],
      },
    ],
  },
}
