import type { Post } from '../posts'

// Sources: docs/research/2026-10-small-gyms-bahrain/. Every quote was read on its source page on 27 Oct 2026.
// Gym Thing lines are traced in that folder's README. The small-gym offer (free for up to 12 months, with migration,
// setup and training) was stated by the owner of Gym Thing; keep it "up to", and keep the standard trial at 3 months.
export const post: Post = {
  slug: 'small-gym-software-bahrain',
  date: '2026-10-27',
  checked: '2026-10-27',
  tags: ['gym-software', 'gulf', 'running-the-gym'],
  en: {
    title: 'Gym software for small gyms in Bahrain, free for up to a year',
    seoTitle: 'Small gym software in Bahrain: what a spreadsheet costs you',
    description:
      'What a small gym in Bahrain loses on WhatsApp and Excel, why owners think gym software is only for chains, and how to run Gym Thing free for up to a year.',
    lede: "If your gym has one branch, a small team and a few hundred members, it probably runs on WhatsApp, an Excel sheet and the owner's memory. It works, until a renewal slips, the cash doesn't match, or you're away for a week. Most owners assume proper gym software is for the chains: too expensive, too much setup. Here's what the spreadsheet really costs you, and how a small gym can run Gym Thing free for up to a year.",
    blocks: [
      {
        type: 'note',
        text: 'For the WhatsApp side of the desk, see [Running a gym on WhatsApp in the Gulf](/blog/running-a-gym-on-whatsapp/). For the full list of what owners complain about in their software, see [What gym owners are fed up with in their software](/blog/gym-software-problems/).',
      },

      { type: 'heading', id: 'small', text: 'Bahrain runs on small businesses, gyms included' },
      {
        type: 'text',
        paras: [
          'Plenty of gyms in Bahrain are independent: one branch, a CrossFit box, a ladies-only studio, a martial arts club. The owner often coaches, opens up and does the books. Small is the norm for Bahraini business in general.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Registered SMEs reached about 85,700 by the end of 2025, making up 93.4pc of all firms in the kingdom and employing over 47,000 Bahrainis."',
            source: 'The Daily Tribune',
            url: 'https://www.newsofbahrain.com/bahrain/136336.html',
            date: '30 Jun 2026',
          },
          {
            quote: '"…selling 3,000 memberships in 24 hours ahead of the opening of its first location in Bahrain."',
            source: 'Gulf Daily News, on a gym chain arriving in Bahrain',
            url: 'https://www.gdnonline.com/Details/1372722',
            date: '7 Jan 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          "Chains have a head office and a team to run their systems. A small gym can't outspend that. It wins by knowing its members, and that only works if you can see who is due, who has paid and who stopped coming without scrolling a chat.",
        ],
      },

      { type: 'heading', id: 'renewals', text: 'Renewals nobody chases' },
      {
        type: 'text',
        paras: [
          'On a spreadsheet, a membership ends quietly. Nobody gets a reminder unless someone scrolls the sheet, spots the date and sends a WhatsApp. On a busy week nobody does, and the member who would have renewed for another three months simply stops coming.',
          'Gyms know this. Owners in the Arab world post jobs asking freelancers to make their Excel files flag ending plans and spot members who never came back:',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"I want an Excel file to manage a sports club (Martial Arts Gym)… an alert for memberships that have ended or are about to end"',
            source: 'A request on Mostaql, an Arabic freelance site',
            url: 'https://mostaql.com/project/1219711',
            date: '10 Mar 2026',
            note: 'translated from Arabic',
          },
          {
            quote:
              '"I want a new upgrade to the Excel file so it gives me a clear analysis of the customers from the day the gym opened until now"',
            source: "A gym's request on Mostaql, an Arabic freelance site",
            url: 'https://mostaql.com/project/1237031',
            date: '4 May 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"had a membership before but didn\'t renew after it ended"',
            source: "The same gym's definition of a lapsed member",
            url: 'https://mostaql.com/project/1237031',
            date: '4 May 2026',
            note: 'translated from Arabic',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'A better sheet helps, but it still waits for someone to open it. The renewal you lose is the one nobody looked at in time.',
        ],
      },
      {
        type: 'answer',
        heading: 'Renewals in one list, and paid from WhatsApp',
        points: [
          'Plans ending in the next 30 days sit in one renewals list, with the next 3 days at the top, plus members running low on visits.',
          'Gym Thing emails members before their plan ends, so the reminder goes out on a busy week too.',
          'Send a payment link on WhatsApp with the message already filled in. The plan renews the moment the member pays, by card, Apple Pay, Google Pay or BenefitPay.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks',
        caption: 'Payment links at ABC Gym: sent, paid, expired, each one tied to a member and a plan.',
      },

      { type: 'heading', id: 'money', text: "Cash, card and BenefitPay that don't add up" },
      {
        type: 'text',
        paras: [
          "A small gym takes money in four places: cash at the desk, a card machine, BenefitPay transfers to the owner's phone, and the odd bank transfer. At the end of the month someone has to match each one to a member in the sheet. A transfer with no name, a cash payment written on a sticky note, a protein shake nobody rang up: each one is a few dinars, and they add up.",
        ],
      },
      {
        type: 'answer',
        heading: 'Every fil accounted for',
        points: [
          "Every sale records how it was paid, cash, card or BenefitPay, and a membership sale sits on the member's page.",
          'The till works out the change, and one sale can be split across payments.',
          'Pull the sales report for today, filtered to cash, and count the drawer against it. It downloads as a PDF or a spreadsheet for your accountant.',
        ],
        module: 'point-of-sale',
      },
      {
        type: 'screen',
        show: 'screen:Pos',
        caption: 'The Gym Thing till: cash, card or BenefitPay, with the change worked out.',
      },

      { type: 'heading', id: 'door', text: 'Who is actually in the gym' },
      {
        type: 'text',
        paras: [
          "With a paper register or a nod from the desk, you can't tell who came in on an expired plan, or who shared a friend's card. Usually nobody minds, because the coach knows everyone. Then the coach is off, a new hire covers the desk, and the members who stopped paying keep training.",
        ],
      },
      {
        type: 'answer',
        heading: 'Only a valid plan gets in',
        points: [
          'Members check in with a QR code, a Wallet pass or a tap of their phone, and only a valid plan opens the door.',
          'Every refusal shows the reason, such as expired, frozen, outside access hours or no visits left, so whoever is on the desk knows what to say.',
          'The check-ins list shows who came in today, and who was turned away.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns',
        caption: 'Check-ins at ABC Gym: every entry and every refusal, with the reason.',
      },

      { type: 'heading', id: 'staff-time', text: 'The hours nobody counts' },
      {
        type: 'text',
        paras: [
          'The spreadsheet looks free. It isn\'t. Someone types in every new member, copies payments from WhatsApp, works out end dates by hand, answers "how many days do I have left?" and fixes the mistakes. In a small gym that someone is you, or the coach who should be on the floor.',
          'It also lives in one head. When the person who keeps the sheet is sick, travelling or leaves, the gym is guessing until they come back.',
        ],
      },

      { type: 'heading', id: 'why-not', text: 'Why small gyms put it off' },
      {
        type: 'list',
        items: [
          '"It\'s for big gyms." Most of what a chain needs is what you need: who has paid, who is due, who is in. The difference is the number of members, so the price should follow that too. Gym Thing has one yearly price by gym size, so a small gym pays a small gym\'s price.',
          '"It\'s too expensive." Count what the spreadsheet already costs you first: lapsed members who were never asked to renew, payments nobody matched, and your own hours.',
          '"Switching is too much work." Moving members from a sheet and a WhatsApp list is the part owners dread. It is also the part a vendor should do for you. See [what a proper go-live looks like](/blog/setup-and-staff-training/#go-live).',
          '"My staff won\'t learn it." The desk does the same five jobs all day. Software built around those jobs is quicker to learn, and we train your team on exactly those jobs.',
        ],
      },

      { type: 'heading', id: 'offer', text: 'Free for up to a year for small gyms' },
      {
        type: 'answer',
        heading: 'Run Gym Thing free for up to 12 months',
        points: [
          'Small gyms can run Gym Thing free for up to a year, on their real members.',
          'We move your members, plans and history over from your spreadsheets, WhatsApp lists or another system, and you see a preview before anything goes live.',
          'We set up your plans, door rules and payments, and train your staff on the jobs they do every day. Most gyms are live within a week.',
          "After that, it's one yearly price by gym size, with no setup fee. In Bahrain, [Tamkeen's Digital Enablement Program](/blog/tamkeen-digital-enablement-gym-software/) may cover up to 50% of software costs for eligible businesses.",
          'Support on WhatsApp, phone and email, 7 days a week, with same-day replies, in Arabic or English.',
          "[Start with a free trial](/free-trial/) and tell us you're a small gym when you sign up.",
        ],
      },

      { type: 'heading', id: 'checklist', text: "Signs you've outgrown the spreadsheet" },
      {
        type: 'list',
        items: [
          "You find out a plan ended when the member asks why the desk didn't tell them.",
          'Matching BenefitPay transfers to members takes an evening every month.',
          "You can't say how many members are active today without counting.",
          'Members train on plans that ended weeks ago, and nobody noticed.',
          'Only one person knows how the sheet works.',
          "You've lost a member you never got the chance to ask to renew.",
        ],
      },
      {
        type: 'text',
        paras: [
          'Comparing options? See [Gym Thing vs spreadsheets and paper](/compare/spreadsheets/) and [Gym Thing in Bahrain](/gym-software/bahrain/). Opening a new gym instead? Read [Opening a new gym in Bahrain](/blog/opening-a-new-gym-bahrain/). For contracts and taking your data with you, see [What gym software really costs after the first year](/blog/price-contracts-and-your-data/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'Sources' },
      {
        type: 'note',
        text: 'Read on their pages on 27 Oct 2026: [The Daily Tribune](https://www.newsofbahrain.com/bahrain/136336.html) (30 Jun 2026), [Gulf Daily News](https://www.gdnonline.com/Details/1372722) (7 Jan 2026), and two requests on [Mostaql](https://mostaql.com/project/1219711) (10 Mar 2026) and [Mostaql](https://mostaql.com/project/1237031) (4 May 2026), quoted in our translation. Collected in docs/research/2026-10-small-gyms-bahrain.',
      },
    ],
  },
  ar: {
    title: 'برنامج إدارة للنوادي الرياضية الصغيرة في البحرين، مجاناً لمدة تصل إلى سنة',
    seoTitle: 'برنامج إدارة النوادي الرياضية الصغيرة في البحرين: ما تكلفة جداول البيانات',
    description:
      'ما الذي يخسره النادي الرياضي الصغير في البحرين حين يُدار عبر واتساب وإكسل، ولماذا يظن أصحابه أن البرامج للسلاسل فقط، وكيف يشغّل Gym Thing مجاناً حتى سنة.',
    lede: 'إذا ناديك فرع واحد، وفريقه صغير، وعنده كم مية عضو، فغالباً يمشي على الواتساب وشيت إكسل وذاكرة صاحب النادي. ويمشي الحال، لين ما يفوتك تجديد، أو الكاش ما يطابق، أو تسافر أسبوع. أغلب أصحاب النوادي يحسبون إن برامج النوادي حق السلاسل الكبيرة: غالية ومتعبة في الإعداد. هني شنو يكلفك الشيت فعلاً، وشلون النادي الصغير يقدر يشغّل Gym Thing ببلاش لين سنة.',
    blocks: [
      {
        type: 'note',
        text: 'عن الواتساب في الاستقبال، شوف [إدارة النادي الرياضي عبر واتساب في الخليج](/ar/blog/running-a-gym-on-whatsapp/). وعن كل اللي يشتكي منه أصحاب النوادي في برامجهم، شوف [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/).',
      },

      { type: 'heading', id: 'small', text: 'البحرين تمشي على البزنس الصغير، والنوادي منه' },
      {
        type: 'text',
        paras: [
          'نوادي وايد في البحرين مستقلة: فرع واحد، أو صالة كروس فت، أو استوديو للسيدات، أو نادي فنون قتالية. وصاحب النادي في أغلب الأحيان يدرّب، ويفتح الصبح، ويمسك الحسابات. والبزنس الصغير هو الأساس في البحرين بشكل عام.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«وصل عدد المؤسسات الصغيرة والمتوسطة المسجلة إلى حوالي 85,700 بنهاية 2025، وهي تشكّل 93.4% من كل الشركات في المملكة وتوظّف أكثر من 47,000 بحريني.»',
            source: 'ديلي تريبيون',
            url: 'https://www.newsofbahrain.com/bahrain/136336.html',
            date: '30 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«…باعت 3,000 اشتراك خلال 24 ساعة قبل افتتاح أول فرع لها في البحرين.»',
            source: 'Gulf Daily News، عن سلسلة نوادٍ تدخل البحرين',
            url: 'https://www.gdnonline.com/Details/1372722',
            date: '7 يناير 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'السلاسل عندها إدارة وفريق يشغّل أنظمتها. النادي الصغير ما يقدر يصرف مثلهم. يفوز لأنه يعرف أعضاءه، وهذا ما يصير إلا إذا تقدر تشوف منو عليه تجديد، ومنو دفع، ومنو وقف يجي، بدون ما تدوّر في المحادثات.',
        ],
      },

      { type: 'heading', id: 'renewals', text: 'تجديدات محد يلاحقها' },
      {
        type: 'text',
        paras: [
          'في الشيت، الاشتراك يخلص بهدوء. محد يوصله تذكير إلا إذا أحد فتح الشيت، وشاف التاريخ، وأرسل واتساب. وفي الأسبوع الزحمة محد يسويها، والعضو اللي كان بيجدد ثلاث شهور ثانية يوقف يجي وبس.',
          'والنوادي تعرف هالشي. أصحاب نوادي في العالم العربي ينشرون طلبات لمستقلين عشان ملفات الإكسل حقتهم تنبّه على الاشتراكات اللي بتخلص، وتطلّع الأعضاء اللي ما رجعوا:',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«أريد ملف Excel لإدارة نادي رياضي (Martial Arts Gym)… تنبيه الاشتراكات المنتهية أو القريبة من الانتهاء»',
            source: 'طلب على مستقل، منصة عربية للعمل الحر',
            url: 'https://mostaql.com/project/1219711',
            date: '10 مارس 2026',
          },
          {
            quote: '«عاوز تطوير جديد على ملف الإكسل بحيث يعطيني تحليل واضح للعملاء من بداية افتتاح النادي إلى الآن»',
            source: 'طلب نادٍ رياضي على مستقل، منصة عربية للعمل الحر',
            url: 'https://mostaql.com/project/1237031',
            date: '4 مايو 2026',
          },
          {
            quote: '«له اشتراك سابق لكن ما جدد بعد انتهاءه»',
            source: 'تعريف نفس النادي للعضو المتوقف',
            url: 'https://mostaql.com/project/1237031',
            date: '4 مايو 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: ['الشيت الأحسن يساعد، بس بعده ينطر أحد يفتحه. والتجديد اللي يروح عليك هو اللي محد شافه في وقته.'],
      },
      {
        type: 'answer',
        heading: 'التجديدات في قائمة وحدة، والدفع من الواتساب',
        points: [
          'الباقات اللي بتخلص خلال الـ 30 يوم الياية في قائمة تجديدات وحدة، واللي باقي لها 3 أيام فوق، ومعاها الأعضاء اللي زياراتهم قاربت تخلص.',
          'Gym Thing يرسل إيميل للأعضاء قبل لا تخلص باقتهم، فالتذكير يطلع حتى في الأسبوع الزحمة.',
          'ارسل رابط دفع على الواتساب والرسالة جاهزة ومعبّاة. والباقة تتجدد أول ما يدفع العضو، ببطاقة أو Apple Pay أو Google Pay أو BenefitPay.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks',
        caption: 'روابط الدفع في ABC Gym: مرسلة ومدفوعة ومنتهية، وكل رابط مربوط بعضو وباقة.',
      },

      { type: 'heading', id: 'money', text: 'كاش وبطاقات وBenefitPay ما تطابق' },
      {
        type: 'text',
        paras: [
          'النادي الصغير ياخذ فلوس من أربع أماكن: كاش في الاستقبال، وجهاز البطاقات، وتحويلات BenefitPay على تلفون صاحب النادي، وتحويل بنكي بين فترة وفترة. وفي آخر الشهر لازم أحد يطابق كل وحدة بعضو في الشيت. تحويل بدون اسم، ودفعة كاش مكتوبة على ورقة لاصقة، وبروتين شيك محد سجّله: كل وحدة كم دينار، وتتجمع.',
        ],
      },
      {
        type: 'answer',
        heading: 'كل فلس محسوب',
        points: [
          'كل بيعة تنسجل مع طريقة دفعها، كاش أو بطاقة أو BenefitPay، وبيعة الباقة تنحفظ في صفحة العضو.',
          'نقطة البيع تحسب لك الباقي، وتقدر تقسّم البيعة الوحدة على أكثر من دفعة.',
          'طلّع تقرير مبيعات اليوم، وفلتره على الكاش، وعدّ الدرج عليه. وينزل PDF أو جدول بيانات حق محاسبك.',
        ],
        module: 'point-of-sale',
      },
      {
        type: 'screen',
        show: 'screen:Pos',
        caption: 'نقطة البيع في Gym Thing: كاش أو بطاقة أو BenefitPay، والباقي محسوب.',
      },

      { type: 'heading', id: 'door', text: 'منو فعلاً داخل النادي' },
      {
        type: 'text',
        paras: [
          'مع دفتر حضور أو هزة راس من الاستقبال، ما تقدر تعرف منو دخل وباقته خالصة، أو منو دخل ببطاقة ربعه. وعادةً محد يهتم، لأن المدرب يعرف الكل. بعدين المدرب ياخذ إجازة، وموظف جديد يغطي الاستقبال، والأعضاء اللي وقفوا يدفعون يكملون تمرين.',
        ],
      },
      {
        type: 'answer',
        heading: 'ما يدخل إلا اللي باقته سارية',
        points: [
          'الأعضاء يدخلون بكود QR أو بطاقة Wallet أو بلمسة من تلفونهم، والباب ما يفتح إلا لباقة سارية.',
          'كل رفض يبيّن السبب، مثل باقة منتهية أو مجمّدة أو برّا ساعات الدخول أو ما باقي زيارات، فاللي في الاستقبال يعرف شنو يقول.',
          'قائمة الدخول تبيّن منو دخل اليوم، ومنو انرفض.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns',
        caption: 'الدخول في ABC Gym: كل دخول وكل رفض، مع السبب.',
      },

      { type: 'heading', id: 'staff-time', text: 'الساعات اللي محد يحسبها' },
      {
        type: 'text',
        paras: [
          'الشيت يبين ببلاش. بس هو مو ببلاش. أحد لازم يدخّل كل عضو جديد، وينقل الدفعات من الواتساب، ويحسب تواريخ الانتهاء باليد، ويرد على «كم يوم باقي لي؟»، ويصلّح الأغلاط. وفي النادي الصغير هالأحد هو أنت، أو المدرب اللي المفروض يكون في الصالة.',
          'وبعد كله في راس شخص واحد. لما اللي ماسك الشيت يمرض أو يسافر أو يطلع، النادي يمشي على التخمين لين يرجع.',
        ],
      },

      { type: 'heading', id: 'why-not', text: 'ليش النوادي الصغيرة تأجّلها' },
      {
        type: 'list',
        items: [
          '«هذي حق النوادي الكبيرة.» أغلب اللي تحتاجه السلسلة تحتاجه أنت: منو دفع، ومنو عليه تجديد، ومنو داخل. الفرق في عدد الأعضاء، فالسعر لازم يمشي عليه بعد. Gym Thing سعره سنوي واحد على حسب حجم النادي، فالنادي الصغير يدفع سعر نادي صغير.',
          '«غالية.» احسب أول شنو يكلفك الشيت أصلاً: أعضاء وقفوا ومحد سألهم يجددون، ودفعات محد طابقها، وساعاتك أنت.',
          '«النقلة شغل وايد.» نقل الأعضاء من الشيت ومن قائمة الواتساب هو الجزء اللي يخوّف أصحاب النوادي. وهو بعد الجزء اللي المفروض الشركة تسويه عنك. شوف [شلون يكون التشغيل الصح](/ar/blog/setup-and-staff-training/#go-live).',
          '«موظفيني ما بيتعلمونه.» الاستقبال يسوي نفس الخمس شغلات طول اليوم. والبرنامج المبني على هالشغلات أسرع في التعلّم، وإحنا ندرّب فريقك على هالشغلات بالذات.',
        ],
      },

      { type: 'heading', id: 'offer', text: 'ببلاش لين سنة للنوادي الصغيرة' },
      {
        type: 'answer',
        heading: 'شغّل Gym Thing ببلاش لين 12 شهر',
        points: [
          'النوادي الصغيرة تقدر تشغّل Gym Thing ببلاش لين سنة، على أعضاءها الحقيقيين.',
          'ننقل أعضاءك وباقاتهم وتاريخهم من الشيتات أو قوائم الواتساب أو أي نظام ثاني، وتشوف معاينة قبل لا يشتغل أي شي.',
          'نجهز باقاتك وقواعد الدخول والمدفوعات، وندرّب موظفينك على الشغل اللي يسوونه كل يوم. وأغلب النوادي تشتغل خلال أسبوع.',
          'بعدها، سعر سنوي واحد على حسب حجم النادي، بدون رسوم إعداد. وفي البحرين، [برنامج التمكين الرقمي من تمكين](/ar/blog/tamkeen-digital-enablement-gym-software/) ممكن يغطي لين 50% من تكاليف البرامج للشركات المؤهلة.',
          'الدعم على الواتساب والتلفون والإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم، بالعربي أو بالإنجليزي.',
          '[ابدأ بتجربة مجانية](/ar/free-trial/) وقول لنا إن ناديك صغير لما تسجّل.',
        ],
      },

      { type: 'heading', id: 'checklist', text: 'علامات إن ناديك كبر على الشيت' },
      {
        type: 'list',
        items: [
          'تعرف إن الباقة خلصت لما العضو يسألك ليش الاستقبال ما قال له.',
          'مطابقة تحويلات BenefitPay مع الأعضاء تاخذ منك ليلة كاملة كل شهر.',
          'ما تقدر تقول كم عضو فعّال اليوم بدون ما تعدّ.',
          'أعضاء يتمرنون على باقات خالصة من أسابيع، ومحد انتبه.',
          'شخص واحد بس يعرف شلون يشتغل الشيت.',
          'خسرت عضو ما سنحت لك الفرصة تسأله يجدد.',
        ],
      },
      {
        type: 'text',
        paras: [
          'تقارن بين الخيارات؟ شوف [Gym Thing مقابل جداول البيانات والورق](/ar/compare/spreadsheets/) و[Gym Thing في البحرين](/ar/gym-software/bahrain/). تفتح نادي جديد؟ اقرا [افتتاح نادٍ رياضي جديد في البحرين](/ar/blog/opening-a-new-gym-bahrain/). وعن العقود والطلعة ببياناتك، شوف [التكلفة الحقيقية لبرامج إدارة النوادي بعد السنة الأولى](/ar/blog/price-contracts-and-your-data/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'المصادر' },
      {
        type: 'note',
        text: 'قريناها على صفحاتها في 27 أكتوبر 2026: [ديلي تريبيون](https://www.newsofbahrain.com/bahrain/136336.html) (30 يونيو 2026)، و[Gulf Daily News](https://www.gdnonline.com/Details/1372722) (7 يناير 2026)، وطلبين على [مستقل](https://mostaql.com/project/1219711) (10 مارس 2026) و[مستقل](https://mostaql.com/project/1237031) (4 مايو 2026)، ومنقولة بنصها الأصلي. البحث محفوظ في docs/research/2026-10-small-gyms-bahrain.',
      },
    ],
  },
}
