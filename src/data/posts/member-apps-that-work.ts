import type { Post } from '../posts'

// Gym Thing answers only use what is supported by our research; keep each quote's date. Members sign in with email (no phone-number login).
export const post: Post = {
  slug: 'member-apps-that-work',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['member-app', 'gym-software'],
  en: {
    title: 'Why gym member apps break, and what to ask before you pick one',
    seoTitle: 'Gym member app problems: failed logins, broken updates, late branded apps',
    description:
      "Gym member apps that won't log in, break after updates, or never arrive as promised. Why it happens, what to ask before you sign, and how Gym Thing does it.",
    lede: "When a gym's app won't log in, members don't blame the software company. They blame the gym. We read member-app reviews of several gym software vendors, and of the gym apps published by systems sold in the Gulf. Three failures keep coming back: branded apps that never arrive, logins that fail, and updates that break what used to work. Here is why each one happens, what to ask a vendor before you sign, and how Gym Thing handles it.",
    blocks: [
      { type: 'heading', id: 'app-is-the-gym', text: 'To your members, the app is the gym' },
      {
        type: 'text',
        paras: [
          "Most of the reviews below weren't written by gym owners. They were written by members, about an app with their gym's name on it. Several systems each publish a branded app for every gym they serve. So a one-star review of one gym's app is a member's verdict on the gym, not on the company that built the app. Most members never learn that company's name.",
          "That's the trap. The app carries your name, but you don't decide when it gets fixed. When it breaks, your front desk turns into app support: walking members through reinstalling, booking classes by hand, letting in people who can't open their code. We touched on this in [What gym owners are fed up with in their software](/blog/gym-software-problems/#apps). This post goes deeper.",
        ],
      },

      { type: 'heading', id: 'branded-app', text: 'The branded app that never arrives' },
      {
        type: 'text',
        paras: [
          "A branded app sounds like a design job: your logo, your colours. It's really a release job. Each gym's app is its own listing in the App Store and Google Play, with its own build, its own store review and its own updates. A vendor that sells branded apps on the sales call but builds them one at a time ends up with a queue. The gyms at the back of the queue wait, and keep paying while they do.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"I signed up to a gym software company after being promised during the sales call that my package would include a branded app."',
            source: 'A review of a gym software vendor',
            date: '5 Jun 2026',
          },
          {
            quote: '"Have waited months for "branded app" only to be told there is a technical issue"',
            source: 'A review of a gym software vendor',
            date: 'Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'logins', text: 'Logins that fail' },
      {
        type: 'text',
        paras: [
          "Signing in looks simple and breaks in many ways. The app has to match the person to the right member record in the right gym. A password reset has to actually arrive. A saved session has to survive an update. Each of these ends the same way: a member at your door who can't show their code.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"The password is correct but it always says there\'s an error."',
            source: 'A review of a gym app in Saudi Arabia',
            date: '27 Sep 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"I can\'t log in, the app freezes every time, very bad."',
            source: 'A review of a gym app in Saudi Arabia',
            date: '19 Aug 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"The application isn\'t working and i cant sign up"',
            source: 'A review of a gym app',
            date: '20 Nov 2025',
          },
          {
            quote: '"There\'s no option to log in to my account with my phone number."',
            source: 'A review of a gym app',
            date: '3 Sep 2026',
            note: 'translated from Arabic',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'Whoever built the app, the problem reaches the gym the same way: the member is standing at your door. The last review is a reminder that members arrive expecting a way of signing in. Whatever the method, try it yourself before launch, and ask what happens when it fails.',
        ],
      },

      { type: 'heading', id: 'updates', text: 'Updates that break what used to work' },
      {
        type: 'text',
        paras: [
          "A vendor's update goes to every gym's app at once. If it isn't tested on older phones, thousands of members find out on the same morning. A fix then waits for store review before it can reach anyone. And when a vendor replaces its app with a new one, members often lose what they had built up: history, measurements, saved workouts.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"We have to constantly ask members to delete and re-download the app"',
            source: 'A review of a gym software vendor',
            date: '24 Apr 2025',
          },
          {
            quote: '"The first app was excellent, and now it\'s like begging."',
            source: 'A review of a gym app in Saudi Arabia',
            date: '10 Jul 2026',
            note: 'translated from Arabic',
          },
          {
            quote:
              '"Every time a new update is released I have to go through hell to get the app to work properly. I\'ve been locked out of my account for a week"',
            source: 'A review of a gym app',
            date: '3 Nov 2024',
          },
          {
            quote: '"The white-screen bug from the last update still isn\'t fixed. It\'s been 2 months."',
            source: 'A review of a gym app',
            date: '12 Dec 2023',
            note: 'translated from Turkish',
          },
          {
            quote: '"Data from the old app wasn\'t carried over to the new one. My old measurements are lost."',
            source: 'A review of a gym app',
            date: '19 Jan 2024',
            note: 'translated from Turkish',
          },
          {
            quote: '"I can almost never find my lifting history without substantial digging"',
            source: 'A review of a gym app',
            date: '12 Nov 2025',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'Some gym apps are published by one company on behalf of many gyms. On the reviews we read for one such system, we found no reply from the developer. Who answers reviews, if anyone, tells you who will help your members when this happens to your gym. We compare Gym Thing with the main systems on our [comparison pages](/compare/).',
        ],
      },

      { type: 'heading', id: 'questions', text: 'Questions to ask before you sign' },
      {
        type: 'text',
        paras: ['Ask these on the sales call, and ask for the answers in writing.'],
      },
      {
        type: 'list',
        items: [
          "Whose name is on the app in the App Store and Google Play? Yours, the vendor's, or a marketplace that lists other gyms next to yours?",
          'When will my branded app be live, and is it in the price? Ask for a date. If the answer is "later", treat it as not included.',
          'How do members sign in, and how do they reset a forgotten password without calling the desk? Try it yourself on a test account.',
          'Is every screen in Arabic as well as English, laid out right to left? Ask to see the Arabic app, not a promise of it.',
          "What can members do without the app? Can they get through the door, renew and pay when the app won't open?",
          'How do fixes reach members? Does every fix wait for store review, or can some reach phones without a new download?',
          'If you move members to a new version of the app, what happens to their history?',
          "When a member's app breaks on a Friday, who do I message, and how fast do they reply?",
          "Which gyms' apps have you already published? Search the stores for them and read the one-star reviews. That is what your members will be writing next year.",
        ],
      },

      { type: 'heading', id: 'gym-thing', text: 'How Gym Thing handles the member app' },
      {
        type: 'text',
        paras: [
          "We won't promise that our app never breaks. Every app does, sometimes. What matters is how much of your gym depends on it, and how fast someone fixes it when it does.",
        ],
      },
      {
        type: 'answer',
        heading: "An app in your gym's name, built by us",
        points: [
          "We build your member app and put it in the App Store and Google Play under your gym's name, with your icon, logo and colour. Train Fitness members, for example, download an app called Train Fitness.",
          'Rather not have your own listing? Members can use the Gym Thing app instead. It shows only the gyms they belong to, with your logo.',
          'Every screen is in Arabic and English, laid out right to left in Arabic. Members switch language from their profile.',
          'Members see their plan, days left and expiry date, book and cancel classes, check their PT credits and log workouts set by set.',
          'Members reset their own password with a 6-digit code sent by email.',
          'Workouts save on the phone first and back up when the phone is online.',
          "Many fixes reach members' phones on their own, without waiting for a new store download.",
        ],
        module: 'member-app',
      },
      {
        type: 'screen',
        show: 'screen:MemberApp',
        caption: "The member app: a check-in code that refreshes itself, the member's plan, and classes to book.",
      },

      { type: 'heading', id: 'without-the-app', text: 'Nobody needs the app to get in' },
      {
        type: 'text',
        paras: [
          "The front door is where a broken app hurts most, so the door doesn't depend on it. Members get in with a pass in Apple or Google Wallet, by tapping their phone on a reader, with the QR code in the app, or at an iPad at reception. If the app won't open, the Wallet pass still works. Read more on [access control](/modules/access-control/).",
          "Renewing doesn't need the app either. One tap on the member's page opens WhatsApp with a payment link ready to send, and the member pays in the browser with BenefitPay, Apple Pay, Google Pay or a card.",
        ],
      },
      {
        type: 'screen',
        show: 'screen:CheckIns',
        caption:
          'Check-ins at two branches, from turnstiles, doors and the reception iPad, with the reason for every refusal.',
      },
      {
        type: 'answer',
        heading: 'Your name on everything members see',
        points: [
          'Upload your logo once. It shows in the app, on invoices and on emails.',
          "The Wallet pass carries your logo, your colours and the member's details, and keeps itself up to date.",
          'Pick your brand colour with a live preview and a readability check.',
          'Payment pages and emails can run on your own web address, like app.yourgym.com, so members see your gym, not ours.',
        ],
        module: 'branches',
      },

      { type: 'heading', id: 'when-it-breaks', text: 'When something does break' },
      {
        type: 'text',
        paras: [
          'Members can call your reception from the app in one tap. Your team can reach us on WhatsApp at [+973 3330 9918](https://wa.me/97333309918), by phone or at [support@thing.bh](mailto:support@thing.bh), 7 days a week, and gets a reply the same day, in Arabic or English. Gyms are open on Fridays, so we are too.',
          'The best test of a member app is your own members using it. [Start with a free trial](/free-trial/): we set it up, move your members over, and you can run it for up to 3 months before you pay.',
          'The app is only one way in. For the door itself, read [The front door: why gym check-ins fail, and what a good setup needs](/blog/the-front-door/).',
        ],
      },
    ],
  },
  ar: {
    title: 'لماذا تتعطّل تطبيقات أعضاء النوادي الرياضية، وما الذي ينبغي أن تسأل عنه قبل الاختيار',
    seoTitle: 'مشكلات تطبيقات أعضاء النوادي الرياضية: تسجيل الدخول والتحديثات والتطبيق بهوية النادي',
    description:
      'تطبيقات أعضاء لا تقبل تسجيل الدخول، وتتعطل بعد التحديثات، وتطبيقات بهوية النادي لا تصل. لماذا يحدث ذلك، وما الأسئلة قبل التعاقد، وكيف يتعامل معها Gym Thing.',
    lede: 'لما تطبيق النادي ما يقبل تسجيل الدخول، الأعضاء ما يلومون شركة البرنامج. يلومون النادي. قرينا مراجعات تطبيقات الأعضاء لعدة شركات برامج نوادي، وتطبيقات النوادي اللي تنشرها أنظمة تنباع في الخليج. ثلاث مشاكل تتكرر: تطبيقات بهوية النادي ما توصل، وتسجيل دخول ما يزبط، وتحديثات تخرّب اللي كان شغّال. هني ليش تصير كل وحدة، وشنو تسأل الشركة قبل لا توقّع، وشلون يتعامل معها Gym Thing.',
    blocks: [
      { type: 'heading', id: 'app-is-the-gym', text: 'عند أعضاءك، التطبيق هو النادي' },
      {
        type: 'text',
        paras: [
          'أغلب المراجعات اللي تحت ما كتبها أصحاب نوادي. كتبها أعضاء، عن تطبيق عليه اسم ناديهم. كم نظام ينشر تطبيق بهوية كل نادي يخدمه. يعني لما عضو يعطي نجمة وحدة لتطبيق أحد النوادي، هذا حكمه على النادي، مو على الشركة اللي سوّت التطبيق. وأغلب الأعضاء ما يعرفون اسم هالشركة أصلاً.',
          'وهني المشكلة. التطبيق عليه اسمك، بس مو إنت اللي تقرر متى ينصلح. ولما يخرب، الاستقبال يتحول لدعم فني: يمشّي الأعضاء خطوة خطوة عشان ينزلون التطبيق من جديد، ويحجز الحصص بيده، ويدخّل اللي ما يقدرون يفتحون رمزهم. تكلمنا عن هالشي باختصار في [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/#apps). هني ندخل في التفاصيل.',
        ],
      },

      { type: 'heading', id: 'branded-app', text: 'التطبيق بهوية النادي اللي ما يوصل أبداً' },
      {
        type: 'text',
        paras: [
          'التطبيق بهوية النادي يبين كأنه شغل تصميم: شعارك وألوانك. بس هو فعلياً شغل إصدار. تطبيق كل نادي له صفحته الخاصة في App Store وGoogle Play، ونسخته الخاصة، ومراجعة المتجر الخاصة فيه، وتحديثاته الخاصة. والشركة اللي تبيع التطبيقات بهوية النادي في مكالمة المبيعات، وبعدين تبنيها وحدة وحدة، يصير عندها طابور. والنوادي اللي في آخر الطابور تنتظر، وهي تدفع طول ما هي تنتظر.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«اشتركت في إحدى شركات برامج النوادي بعد ما وعدوني في مكالمة المبيعات إن باقتي بتشمل تطبيق بهوية النادي.»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '5 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«انتظرت شهور على "التطبيق بهويتنا" وفي الأخير قالوا لي فيه مشكلة تقنية»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: 'أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'logins', text: 'تسجيل دخول ما يزبط' },
      {
        type: 'text',
        paras: [
          'تسجيل الدخول يبين بسيط، بس يخرب بطرق وايد. التطبيق لازم يربط الشخص بسجل العضو الصح في النادي الصح. ورسالة تغيير كلمة السر لازم توصل فعلاً. والجلسة المحفوظة لازم تبقى بعد التحديث. وكلها تنتهي نفس النهاية: عضو واقف على بابك وما يقدر يطلّع رمزه.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«الرقم السري صحيح ولكن يكتب يوجد خطأ دائما»',
            source: 'مراجعة لأحد تطبيقات النوادي في السعودية',
            date: '27 سبتمبر 2026',
          },
          {
            quote: '«ما اقدر اسجل دخول التطبيق يعلق كل مره سيء جداااا»',
            source: 'مراجعة لأحد تطبيقات النوادي في السعودية',
            date: '19 أغسطس 2026',
          },
          {
            quote: '«التطبيق ما يشتغل وما أقدر أسجل»',
            source: 'مراجعة لأحد تطبيقات النوادي',
            date: '20 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«لايوجد خيار لتسجيل الدخول بحسابي برقم الهاتف»',
            source: 'مراجعة لأحد تطبيقات النوادي',
            date: '3 سبتمبر 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'مهما كانت الشركة اللي سوّت التطبيق، المشكلة توصل للنادي بنفس الطريقة: العضو واقف على بابك إنت. وآخر مراجعة تذكّرك إن الأعضاء يجون وفي بالهم طريقة معينة لتسجيل الدخول. مهما كانت الطريقة، جرّبها بنفسك قبل الإطلاق، واسأل شنو يصير لما تفشل.',
        ],
      },

      { type: 'heading', id: 'updates', text: 'تحديثات تخرّب اللي كان شغّال' },
      {
        type: 'text',
        paras: [
          'تحديث الشركة يوصل لتطبيقات كل النوادي في نفس الوقت. وإذا ما انجرّب على التلفونات القديمة، آلاف الأعضاء يكتشفون المشكلة في نفس الصبح. وبعدين الإصلاح ينتظر مراجعة المتجر قبل لا يوصل لأي أحد. ولما الشركة تبدّل تطبيقها بتطبيق جديد، الأعضاء وايد مرات يخسرون اللي جمعوه: تاريخهم، وقياساتهم، وتمارينهم المحفوظة.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«لازم كل شوي نطلب من الأعضاء يحذفون التطبيق وينزلونه من جديد»',
            source: 'مراجعة لإحدى شركات برامج النوادي',
            date: '24 أبريل 2025',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«الله يرحم اول تطبيق ممتاز والان كانك تشحت»',
            source: 'مراجعة لأحد تطبيقات النوادي في السعودية',
            date: '10 يوليو 2026',
          },
          {
            quote:
              '«كل ما نزل تحديث جديد لازم أمر بجحيم عشان أخلي التطبيق يشتغل عدل. وصار لي أسبوع ما أقدر أدخل حسابي»',
            source: 'مراجعة لأحد تطبيقات النوادي',
            date: '3 نوفمبر 2024',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«مشكلة الشاشة البيضا من آخر تحديث للحين ما انحلت. صار لها شهرين.»',
            source: 'مراجعة لأحد تطبيقات النوادي',
            date: '12 ديسمبر 2023',
            note: 'مترجم من التركية',
          },
          {
            quote: '«البيانات من التطبيق القديم ما انتقلت للجديد. وقياساتي القديمة راحت.»',
            source: 'مراجعة لأحد تطبيقات النوادي',
            date: '19 يناير 2024',
            note: 'مترجم من التركية',
          },
          {
            quote: '«تقريباً أبداً ما ألقى تاريخ رفعاتي إلا بعد تدوير وايد»',
            source: 'مراجعة لأحد تطبيقات النوادي',
            date: '12 نوفمبر 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'بعض تطبيقات النوادي تنشرها شركة وحدة بالنيابة عن نوادي وايدة. وفي المراجعات اللي قريناها لأحد هالأنظمة، ما لقينا أي رد من المطوّر. ومن يرد على المراجعات، إذا في أحد يرد أصلاً، يقول لك منو بيساعد أعضاءك لما يصير هالشي في ناديك. نقارن Gym Thing مع الأنظمة الرئيسية في [صفحات المقارنة](/ar/compare/).',
        ],
      },

      { type: 'heading', id: 'questions', text: 'أسئلة اسألها قبل لا توقّع' },
      {
        type: 'text',
        paras: ['اسألها في مكالمة المبيعات، واطلب الأجوبة مكتوبة.'],
      },
      {
        type: 'list',
        items: [
          'اسم منو على التطبيق في App Store وGoogle Play؟ اسمك، ولا اسم الشركة، ولا سوق تطبيقات يعرض نوادي ثانية جنب ناديك؟',
          'متى بيكون التطبيق بهوية ناديك جاهز، وهل هو داخل في السعر؟ اطلب تاريخ. وإذا الجواب «بعدين»، اعتبره مو داخل.',
          'شلون الأعضاء يسجلون دخول، وشلون يغيرون كلمة السر إذا نسوها بدون ما يتصلون بالاستقبال؟ جرّبها بنفسك على حساب تجريبي.',
          'كل الشاشات بالعربي مثل الإنجليزي، ومن اليمين لليسار؟ اطلب تشوف التطبيق بالعربي، مو وعد فيه.',
          'شنو يقدر العضو يسوي بدون التطبيق؟ يقدر يدخل من الباب، ويجدد، ويدفع لما التطبيق ما يفتح؟',
          'شلون توصل الإصلاحات للأعضاء؟ كل إصلاح ينتظر مراجعة المتجر، ولا في إصلاحات توصل للتلفونات بدون تنزيل جديد؟',
          'إذا نقلتوا الأعضاء لنسخة جديدة من التطبيق، شنو يصير في تاريخهم؟',
          'لما يخرب تطبيق عضو يوم الجمعة، منو أراسل، وبكم يرد علي؟',
          'تطبيقات أي نوادي نشرتوها قبل؟ دوّر عليها في المتاجر واقرا مراجعات النجمة الوحدة. هذا اللي بيكتبونه أعضاءك السنة الجاية.',
        ],
      },

      { type: 'heading', id: 'gym-thing', text: 'شلون يتعامل Gym Thing مع تطبيق الأعضاء' },
      {
        type: 'text',
        paras: [
          'ما بنوعدك إن تطبيقنا ما يخرب أبداً. كل التطبيقات تخرب أحياناً. المهم كم من ناديك يعتمد عليه، وبكم سرعة أحد يصلحه لما يخرب.',
        ],
      },
      {
        type: 'answer',
        heading: 'تطبيق باسم ناديك، وإحنا نبنيه',
        points: [
          'نبني تطبيق الأعضاء حقك وننزله في App Store وGoogle Play باسم ناديك، بأيقونتك وشعارك ولونك. أعضاء Train Fitness مثلاً ينزلون تطبيق اسمه Train Fitness.',
          'ما تبي صفحة خاصة في المتجر؟ الأعضاء يقدرون يستخدمون تطبيق Gym Thing بداله. ما يبين فيه إلا النوادي اللي هم أعضاء فيها، بشعارك.',
          'كل الشاشات بالعربي والإنجليزي، ومن اليمين لليسار بالعربي. والعضو يغير اللغة من صفحته.',
          'الأعضاء يشوفون باقتهم وكم يوم باقي وتاريخ انتهائها، ويحجزون الحصص ويلغونها، ويشوفون رصيد جلسات التدريب الشخصي، ويسجلون تمارينهم مجموعة مجموعة.',
          'العضو يغير كلمة السر بنفسه برمز من 6 أرقام يوصله على الإيميل.',
          'التمارين تنحفظ في التلفون أول، وتنحفظ نسخة منها لما يكون التلفون متصل بالإنترنت.',
          'إصلاحات وايد توصل لتلفونات الأعضاء بروحها، بدون ما تنتظر تنزيل جديد من المتجر.',
        ],
        module: 'member-app',
      },
      {
        type: 'screen',
        show: 'screen:MemberApp',
        caption: 'تطبيق الأعضاء: رمز دخول يتجدد بروحه، وباقة العضو، وحصص للحجز.',
      },

      { type: 'heading', id: 'without-the-app', text: 'ما أحد يحتاج التطبيق عشان يدخل' },
      {
        type: 'text',
        paras: [
          'الباب هو المكان اللي يعوّر فيه التطبيق الخربان أكثر شي، عشان جذي الباب ما يعتمد عليه. الأعضاء يدخلون ببطاقة في Apple Wallet أو Google Wallet، أو بلمسة التلفون على القارئ، أو برمز QR في التطبيق، أو عند iPad في الاستقبال. وإذا التطبيق ما فتح، بطاقة المحفظة تبقى شغّالة. اقرا أكثر عن [التحكم في الدخول](/ar/modules/access-control/).',
          'والتجديد بعد ما يحتاج التطبيق. ضغطة وحدة في صفحة العضو تفتح واتساب ورابط الدفع جاهز للإرسال، والعضو يدفع من المتصفح بـ BenefitPay أو Apple Pay أو Google Pay أو البطاقة.',
        ],
      },
      {
        type: 'screen',
        show: 'screen:CheckIns',
        caption: 'تسجيلات الدخول في فرعين، من البوابات والأبواب والـ iPad في الاستقبال، مع سبب كل رفض.',
      },
      {
        type: 'answer',
        heading: 'اسمك على كل شي يشوفه العضو',
        points: [
          'ترفع شعارك مرة وحدة، ويطلع في التطبيق وفي الفواتير والإيميلات.',
          'بطاقة المحفظة عليها شعارك وألوانك وبيانات العضو، وتتحدّث بروحها.',
          'تختار لون هويتك وتشوف معاينة مباشرة وفحص لسهولة القراءة.',
          'صفحات الدفع والإيميلات تقدر تشتغل على عنوانك الخاص، مثل app.yourgym.com، عشان الأعضاء يشوفون ناديك، مو إحنا.',
        ],
        module: 'branches',
      },

      { type: 'heading', id: 'when-it-breaks', text: 'لما يخرب شي فعلاً' },
      {
        type: 'text',
        paras: [
          'الأعضاء يقدرون يتصلون بالاستقبال من التطبيق بضغطة وحدة. وفريقك يوصل لنا على واتساب على [+973 3330 9918](https://wa.me/97333309918)، أو بالتلفون، أو على [support@thing.bh](mailto:support@thing.bh)، 7 أيام في الأسبوع، والرد في نفس اليوم، بالعربي أو الإنجليزي. النوادي فاتحة يوم الجمعة، وإحنا بعد.',
          'أحسن اختبار لتطبيق الأعضاء إن أعضاءك هم اللي يستخدمونه. [ابدأ بتجربة مجانية](/ar/free-trial/): إحنا نجهزه، وننقل أعضاءك، وتقدر تشغّله لين 3 شهور قبل لا تدفع.',
          'والتطبيق طريقة وحدة بس للدخول. وعن الباب نفسه، اقرأ [باب النادي: لماذا يتعطل تسجيل الدخول، وما الذي يحتاجه نظام دخول جيد](/ar/blog/the-front-door/).',
        ],
      },
    ],
  },
}
