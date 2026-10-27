import type { Post } from '../posts'

// Sources: docs/research/2026-10-gcc-gym-software/vat-and-licences.md (parts B and market facts).
// Gym Thing points only use features in modules.ts.
export const post: Post = {
  slug: 'opening-a-gym-saudi-uae',
  date: '2026-10-22',
  checked: '2026-10-22',
  tags: ['running-the-gym', 'gulf'],
  en: {
    title: 'Opening a gym in Saudi Arabia or the UAE: the software checklist',
    seoTitle: 'Opening a gym in Saudi Arabia or the UAE: licences and software checklist',
    description:
      'What to know before opening a gym in Saudi Arabia or Dubai in 2026: licences, the market, and the software checklist for plans, doors, payments, VAT and staff.',
    lede: 'Saudi Arabia licensed more than 4,000 private sports facilities in a single year, and the big chains are still adding branches across the Gulf. If you’re opening a gym in Riyadh, Jeddah, Dubai or Abu Dhabi, the licence comes first and the fit-out second. The software should be ready before the first member walks in, not chosen in a hurry the week after. Here’s what the licensing pages say, and the checklist we’d use for the system that runs the gym.',
    blocks: [
      {
        type: 'note',
        text: 'This is a guide, not legal advice. Check the current requirements with the ministry or the Dubai Sports Council before you apply.',
      },

      { type: 'heading', id: 'market', text: 'A market that keeps growing' },
      {
        type: 'text',
        paras: [
          'The demand is real. Saudi Arabia’s Ministry of Sport passed its licensing target for private sports facilities in 2025. Leejam, which runs Fitness Time, has 235 centres in the Kingdom and 12 in the UAE, and GymNation is aiming for more than 100 Gulf locations. For an independent gym that means members who know what a good gym feels like, and expect the app, the door and the payments to just work.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Meanwhile, the Ministry of Sport issued 4,228 licenses for private sports facilities, exceeding its target of 4,000."',
            source: 'Riyadh Daily, on the Quality of Life Program in 2025',
            url: 'https://alriyadhdaily.com/article/c1c8ac19ed6842259516b77c69d99933',
            date: '3 Aug 2026',
          },
          {
            quote:
              '"GymNation confirmed it is targeting more than 100 locations across the GCC region within three years… building on its nearly 50 locations and more than 200,000 members across the UAE, Saudi Arabia and Bahrain."',
            source: 'Athletech News',
            url: 'https://athletechnews.com/gymnation-100-million-private-credit-middle-east-expansion-asia-debut/',
            date: '19 May 2026',
          },
        ],
      },

      { type: 'heading', id: 'saudi', text: 'The licence in Saudi Arabia' },
      {
        type: 'text',
        paras: [
          'Private gyms in Saudi Arabia are licensed by the Ministry of Sport, through the platform it launched in 2021 for clubs, academies and gyms (written Nafis or NAFES). A new Sports Law took effect in 2026: running a sports facility needs a ministry licence, and businesses already open have a year to put their papers in order.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"…launched today, June 21, "Nafis" platform to license sport clubs, academies, and private gyms for the first time in the Kingdom."',
            source: 'Argaam',
            url: 'https://www.argaam.com/en/article/articledetail/id/1476244',
            date: '21 Jun 2021',
          },
          {
            quote:
              '"Facilities : Construction or modification of sports facilities, as well as their operation or management, require Ministry licensing, subject to exemptions to be set in the Regulations."',
            source: 'Greenberg Traurig on Saudi Arabia’s new Sports Law',
            url: 'https://www.gtlaw.com/en/insights/2026/1/saudi-arabias-new-sports-law-key-changes-for-the-sector',
            date: '8 Jan 2026',
          },
        ],
      },

      { type: 'heading', id: 'uae', text: 'The licence in Dubai and Abu Dhabi' },
      {
        type: 'text',
        paras: [
          'In Dubai a gym is a “Physical Fitness Centre”, and it needs two things: a trade licence from the licensing authority and a permit from the Dubai Sports Council. The licence can’t be issued or renewed without the Council’s sign-off, and the permit asks for a business plan, suitable premises, qualified staff, the right equipment and insurance. Coaches go on the Council’s register.',
          'In Abu Dhabi, the Executive Council gave the Abu Dhabi Sports Council the job of licensing sports establishments in September 2026, with the detailed rules still to come.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"A Licensing Authority may not issue or renew the Licence of a Sports Establishment or Sports Event without first obtaining authorisation from the DSC."',
            source: 'Dubai Executive Council Resolution No. (1) of 2020',
            url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2020/Executive%20Council%20Resolution%20No.%20(1)%20of%202020%20Regulating%20Sports%20Establishments%20and%20Sports%20Events%20in%20the%20Emirate%20of%20Dubai.html',
            date: '7 Jan 2020',
          },
          {
            quote:
              '"Abu Dhabi Executive Council has issued a resolution adding new mandates to Abu Dhabi Sports Council , including regulating and licensing sporting establishments and entities…"',
            source: 'Abu Dhabi Media Office',
            url: 'https://www.mediaoffice.abudhabi/en/government-affairs/executive-council-issues-resolution-adding-new-mandates-to-abu-dhabi-sports-council/',
            date: '23 Sep 2026',
          },
        ],
      },

      { type: 'heading', id: 'checklist', text: 'The software checklist for opening day' },
      {
        type: 'list',
        items: [
          'Plans you can sell from day one, with their own hours and branches: off-peak, ladies’ hours, students, PT packs.',
          'A door that checks the plan on every scan, through turnstiles, a phone tap or an iPad at the desk.',
          'Payments that land in your own account: card, Apple Pay and Google Pay, from a link you send on WhatsApp.',
          'A VAT invoice for every sale at your rate, from the first membership.',
          'A member app in Arabic and English, ready when you open the doors.',
          'Staff files, rosters, clock-ins and payslips, for a team you’re hiring now.',
          'A second branch that’s one more setting, not a second system.',
        ],
      },

      { type: 'heading', id: 'plans', text: 'Plans and the door, from the first member' },
      {
        type: 'text',
        paras: [
          'Pre-sale memberships are how most new gyms pay for the fit-out. Sell them before you open with a start date in the future, and the door lets members in from opening day, at the hours and branches their plan allows.',
        ],
      },
      {
        type: 'answer',
        heading: 'Sell before you open',
        points: [
          'Build plans with their own prices, lengths, days, hours and branches, including ladies’ hours.',
          'Sell a plan that starts on opening day, or send a payment link that starts it on a date you choose.',
          'The door checks every plan’s days, hours and branches on every scan, and logs every entry.',
          'Freeze, extend, upgrade or renew in a couple of clicks, and every change is recorded.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'Plans at ABC Gym, each with its own price, days, hours and branches.',
      },

      { type: 'heading', id: 'money', text: 'Getting paid, with VAT done right' },
      {
        type: 'text',
        paras: [
          'In Saudi Arabia VAT is 15% and in the UAE 5%, and you must register once yearly sales pass 375,000 riyals or dirhams. Read [VAT on gym memberships in each GCC country](/blog/gcc-vat-for-gyms/) for the details.',
        ],
      },
      {
        type: 'answer',
        heading: 'Payments and invoices',
        points: [
          'Send a payment link on WhatsApp with a ready message in Arabic or English. Members pay by card, Apple Pay or Google Pay, and the plan starts.',
          'At the desk, record cash or card, and split one sale across methods.',
          'Enter the price the member pays, and every sale gets a numbered VAT invoice at your rate, with your VAT number.',
        ],
        module: 'payments',
      },

      { type: 'heading', id: 'team', text: 'A team and an app from day one' },
      {
        type: 'text',
        paras: [
          'Your coaches need to be registered and rostered, and your members need an app before they ask for one. Both are easier set up before opening than in the first busy month.',
        ],
      },
      {
        type: 'answer',
        heading: 'Staff and members',
        points: [
          'Staff files, a weekly roster per branch, and clock-ins from the staff app, only at the branch.',
          'Salaries and commissions worked out, with payslips on your team’s phones.',
          'A member app in Arabic and English with a check-in code, a Wallet pass, the class timetable and a workout tracker, as your own app in the stores.',
        ],
        module: 'staff-app',
      },

      { type: 'heading', id: 'next', text: 'Set it up before you open' },
      {
        type: 'text',
        paras: [
          '[Start with a free trial](/free-trial/): we set Gym Thing up with your logo, plans and team while you finish the fit-out, train your staff, and you run it free for up to 3 months.',
          'See Gym Thing for [Saudi Arabia](/gym-software/saudi-arabia/) and [the UAE](/gym-software/uae/), or compare [the best gym software in the GCC](/blog/best-gym-software-gcc/). Opening in Bahrain? Read [opening a new gym in Bahrain](/blog/opening-a-new-gym-bahrain/).',
        ],
      },
      {
        type: 'note',
        text: 'Licensing rules and fees change, so check with the Ministry of Sport or the Dubai Sports Council before you apply.',
      },
    ],
  },
  ar: {
    title: 'افتتاح نادٍ رياضي في السعودية أو الإمارات: قائمة البرنامج',
    seoTitle: 'افتتاح نادٍ رياضي في السعودية أو الإمارات: التراخيص وقائمة برنامج الإدارة',
    description:
      'ما يجب معرفته قبل افتتاح نادٍ رياضي في السعودية أو دبي في 2026: التراخيص والسوق، وقائمة البرنامج للباقات والأبواب والمدفوعات والضريبة والموظفين.',
    lede: 'السعودية رخّصت أكثر من 4,000 منشأة رياضية خاصة في سنة وحدة، والسلاسل الكبيرة للحين تفتح فروع في كل الخليج. إذا بتفتح نادي في الرياض أو جدة أو دبي أو أبوظبي، الترخيص أول شي والتجهيز بعده. والبرنامج لازم يكون جاهز قبل لا يدخل أول عضو، مو تختاره على عجل الأسبوع اللي بعده. هني شنو تقول صفحات الترخيص، والقائمة اللي بنستخدمها للنظام اللي يدير النادي.',
    blocks: [
      {
        type: 'note',
        text: 'هذا دليل، مو استشارة قانونية. تأكد من المتطلبات الحالية مع الوزارة أو مجلس دبي الرياضي قبل لا تقدّم.',
      },

      { type: 'heading', id: 'market', text: 'سوق ما يوقف يكبر' },
      {
        type: 'text',
        paras: [
          'الطلب حقيقي. وزارة الرياضة في السعودية تعدّت هدفها في ترخيص المنشآت الرياضية الخاصة في 2025. وليجام، اللي تدير وقت اللياقة، عندها 235 مركز في المملكة و12 في الإمارات، وGymNation تبي توصل لأكثر من 100 فرع في الخليج. وهذا يعني للنادي المستقل أعضاء يعرفون شلون يكون النادي الزين، ويتوقعون إن التطبيق والباب والدفع يشتغلون بدون مشاكل.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«وفي الوقت نفسه، أصدرت وزارة الرياضة 4,228 ترخيص للمنشآت الرياضية الخاصة، متجاوزة هدفها البالغ 4,000.»',
            source: 'الرياض ديلي، عن برنامج جودة الحياة في 2025',
            url: 'https://alriyadhdaily.com/article/c1c8ac19ed6842259516b77c69d99933',
            date: '3 أغسطس 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              '«أكدت GymNation إنها تستهدف أكثر من 100 فرع في الخليج خلال ثلاث سنوات… بناءً على قرابة 50 فرع وأكثر من 200,000 عضو في الإمارات والسعودية والبحرين.»',
            source: 'Athletech News',
            url: 'https://athletechnews.com/gymnation-100-million-private-credit-middle-east-expansion-asia-debut/',
            date: '19 مايو 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'saudi', text: 'الترخيص في السعودية' },
      {
        type: 'text',
        paras: [
          'النوادي الخاصة في السعودية ترخّصها وزارة الرياضة، عن طريق المنصة اللي أطلقتها في 2021 للأندية والأكاديميات والنوادي الخاصة (منصة نافس). ونظام الرياضة الجديد صار ساري في 2026: تشغيل المنشأة الرياضية يحتاج ترخيص من الوزارة، والأعمال المفتوحة من قبل عندها سنة تعدّل أوضاعها.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«…أطلق اليوم، 21 يونيو، منصة «نافس» لترخيص الأندية والأكاديميات والنوادي الرياضية الخاصة لأول مرة في المملكة.»',
            source: 'أرقام',
            url: 'https://www.argaam.com/en/article/articledetail/id/1476244',
            date: '21 يونيو 2021',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              '«المرافق: إنشاء المرافق الرياضية أو تعديلها، وتشغيلها أو إدارتها، يحتاج ترخيص من الوزارة، مع استثناءات تحددها اللائحة.»',
            source: 'Greenberg Traurig عن نظام الرياضة السعودي الجديد',
            url: 'https://www.gtlaw.com/en/insights/2026/1/saudi-arabias-new-sports-law-key-changes-for-the-sector',
            date: '8 يناير 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'uae', text: 'الترخيص في دبي وأبوظبي' },
      {
        type: 'text',
        paras: [
          'في دبي النادي اسمه «مركز لياقة بدنية»، ويحتاج شيئين: رخصة تجارية من جهة الترخيص، وتصريح من مجلس دبي الرياضي. والرخصة ما تنصدر ولا تتجدد بدون موافقة المجلس، والتصريح يطلب خطة عمل، ومكان مناسب، وموظفين مؤهلين، والأجهزة المطلوبة، وتأمين. والمدربين ينسجلون في سجل المجلس.',
          'وفي أبوظبي، المجلس التنفيذي عطى مجلس أبوظبي الرياضي مهمة ترخيص المنشآت الرياضية في سبتمبر 2026، والقواعد التفصيلية للحين ما طلعت.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«لا يجوز لسلطة الترخيص إصدار أو تجديد ترخيص المنشأة الرياضية أو الفعالية الرياضية إلا بعد الحصول على موافقة المجلس.»',
            source: 'قرار المجلس التنفيذي في دبي رقم (1) لسنة 2020',
            url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2020/Executive%20Council%20Resolution%20No.%20(1)%20of%202020%20Regulating%20Sports%20Establishments%20and%20Sports%20Events%20in%20the%20Emirate%20of%20Dubai.html',
            date: '7 يناير 2020',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              '«أصدر المجلس التنفيذي لإمارة أبوظبي قراراً بإضافة اختصاصات جديدة لمجلس أبوظبي الرياضي، منها تنظيم وترخيص المنشآت والجهات الرياضية…»',
            source: 'المكتب الإعلامي لحكومة أبوظبي',
            url: 'https://www.mediaoffice.abudhabi/en/government-affairs/executive-council-issues-resolution-adding-new-mandates-to-abu-dhabi-sports-council/',
            date: '23 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'checklist', text: 'قائمة البرنامج ليوم الافتتاح' },
      {
        type: 'list',
        items: [
          'باقات تقدر تبيعها من أول يوم، لكل وحدة ساعاتها وفروعها: أوقات الهدوء، والساعات النسائية، والطلاب، وباقات التدريب الشخصي.',
          'باب يتأكد من الباقة مع كل دخول، عن طريق البوابات الدوّارة أو لمسة بالتلفون أو iPad في الاستقبال.',
          'مدفوعات توصل حسابك إنت: بطاقة وApple Pay وGoogle Pay، من رابط ترسله على الواتساب.',
          'فاتورة ضريبية لكل بيعة بنسبتك، من أول اشتراك.',
          'تطبيق أعضاء بالعربي والإنجليزي، جاهز لما تفتح الأبواب.',
          'ملفات الموظفين والجداول وتسجيل الحضور وقسائم الرواتب، لفريق قاعد توظفه الحين.',
          'فرع ثاني يكون إعداد زيادة، مو نظام ثاني.',
        ],
      },

      { type: 'heading', id: 'plans', text: 'الباقات والباب، من أول عضو' },
      {
        type: 'text',
        paras: [
          'البيع المسبق للاشتراكات هو الطريقة اللي أغلب النوادي الجديدة تغطي فيها التجهيز. بعها قبل لا تفتح بتاريخ بداية قدام، والباب يدخّل الأعضاء من يوم الافتتاح، في الساعات والفروع اللي تسمح فيها باقتهم.',
        ],
      },
      {
        type: 'answer',
        heading: 'بيع قبل لا تفتح',
        points: [
          'سوّ باقات لكل وحدة سعرها ومدتها وأيامها وساعاتها وفروعها، ومنها الساعات النسائية.',
          'بيع باقة تبدأ يوم الافتتاح، أو ارسل رابط دفع يبدأها في التاريخ اللي تختاره.',
          'الباب يتأكد من أيام وساعات وفروع كل باقة مع كل دخول، ويسجّل كل دخول.',
          'جمّد أو مدّد أو رقّي أو جدد بكم ضغطة، وكل تغيير ينسجل.',
        ],
        module: 'memberships',
      },
      {
        type: 'screen',
        show: 'screen:Memberships',
        caption: 'الباقات في ABC Gym، كل وحدة بسعرها وأيامها وساعاتها وفروعها.',
      },

      { type: 'heading', id: 'money', text: 'الدفع، والضريبة مضبوطة' },
      {
        type: 'text',
        paras: [
          'في السعودية الضريبة 15% وفي الإمارات 5%، ولازم تسجّل أول ما تتعدى المبيعات السنوية 375,000 ريال أو درهم. اقرأ [ضريبة القيمة المضافة على اشتراكات النوادي في كل دولة خليجية](/ar/blog/gcc-vat-for-gyms/) للتفاصيل.',
        ],
      },
      {
        type: 'answer',
        heading: 'المدفوعات والفواتير',
        points: [
          'ارسل رابط دفع على الواتساب مع رسالة جاهزة بالعربي أو الإنجليزي. الأعضاء يدفعون بالبطاقة أو Apple Pay أو Google Pay، والباقة تبدأ.',
          'في الاستقبال، سجّل الكاش أو البطاقة، وقسّم البيعة الوحدة على أكثر من طريقة.',
          'دخّل السعر اللي يدفعه العضو، وكل بيعة لها فاتورة ضريبية مرقّمة بنسبتك، فيها رقمك الضريبي.',
        ],
        module: 'payments',
      },

      { type: 'heading', id: 'team', text: 'فريق وتطبيق من أول يوم' },
      {
        type: 'text',
        paras: [
          'مدربينك لازم ينسجلون وتنحط جداولهم، وأعضاءك يحتاجون تطبيق قبل لا يطلبونه. والاثنين أسهل تجهزهم قبل الافتتاح من أول شهر زحمة.',
        ],
      },
      {
        type: 'answer',
        heading: 'الموظفين والأعضاء',
        points: [
          'ملفات الموظفين، وجدول أسبوعي لكل فرع، وتسجيل حضور من تطبيق الموظفين، وبس في الفرع.',
          'الرواتب والعمولات محسوبة، وقسائم الرواتب على تلفونات فريقك.',
          'تطبيق أعضاء بالعربي والإنجليزي فيه رمز دخول، وبطاقة Wallet، وجدول الحصص، ومتتبع تمارين، كتطبيقك الخاص في المتاجر.',
        ],
        module: 'staff-app',
      },

      { type: 'heading', id: 'next', text: 'جهّزه قبل لا تفتح' },
      {
        type: 'text',
        paras: [
          '[ابدأ بتجربة مجانية](/ar/free-trial/): نجهز Gym Thing بشعارك وباقاتك وفريقك وإنت تخلّص التجهيز، وندرّب موظفينك، وتشغّله ببلاش لين 3 شهور.',
          'شوف Gym Thing لـ[السعودية](/ar/gym-software/saudi-arabia/) و[الإمارات](/ar/gym-software/uae/)، أو قارن [أفضل برامج النوادي في الخليج](/ar/blog/best-gym-software-gcc/). بتفتح في البحرين؟ اقرأ [افتتاح نادي جديد في البحرين](/ar/blog/opening-a-new-gym-bahrain/).',
        ],
      },
      {
        type: 'note',
        text: 'قواعد الترخيص ورسومه تتغير، فتأكد من وزارة الرياضة أو مجلس دبي الرياضي قبل لا تقدّم.',
      },
    ],
  },
}
