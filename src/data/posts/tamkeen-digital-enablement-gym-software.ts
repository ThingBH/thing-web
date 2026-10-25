import type { Post } from '../posts'

// Sources: docs/research/2026-10-tamkeen-digital-enablement. Every quote was read on its source page on 25 Oct 2026.
// Gym Thing lines use only features described in src/data/modules.ts. Framing: the program helps owners afford the
// switch. No claim that Gym Thing is an approved Tamkeen supplier.
export const post: Post = {
  slug: 'tamkeen-digital-enablement-gym-software',
  date: '2026-10-25',
  checked: '2026-10-25',
  tags: ['running-the-gym', 'gym-software'],
  en: {
    title: 'Your gym software, part-funded by Tamkeen',
    seoTitle: 'Tamkeen Digital Enablement: funding gym software in Bahrain',
    description:
      "Tamkeen's Digital Enablement and AI Program can cover up to 50% of software costs for Bahraini gyms. What it covers, who qualifies, and how it fits Gym Thing.",
    lede: "New gym software reads like a cost you carry alone. For a Bahraini gym it often isn't: Tamkeen's Digital Enablement and AI Program was built to pay for part of exactly this kind of switch. Here's what the program covers, whether your gym fits, and what you'd be putting the funding toward with Gym Thing.",
    blocks: [
      {
        type: 'note',
        text: 'This post is about paying for the switch, not making it. For the problems a switch solves, see [What gym owners are fed up with in their software](/blog/gym-software-problems/).',
      },

      { type: 'heading', id: 'what-it-covers', text: 'What the Digital Enablement Program covers' },
      {
        type: 'text',
        paras: [
          "Tamkeen, Bahrain's Labour Fund, runs a Digital Enablement and AI Program to help Bahraini businesses pay for digital tools. It is aimed at micro, small and medium enterprises, and it covers software and the services around it, not just the licence.",
          'The headline is simple: a share of your software bill comes back to you.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Under the program, eligible companies can receive financial assistance covering up to 50 percent of costs related to software solutions and associated services."',
            source: "GCC Business News on Tamkeen's Digital Enablement and AI Program",
            url: 'https://www.gccbusinessnews.com/bahrain-tamkeen-launch-digital-ai-program/',
            date: '1 Oct 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          '"Software solutions and associated services" is the part that matters for a gym. It is meant to cover the system itself and the work of getting it running: the subscription, the setup, moving your data across, and training your team. Adopting a gym management system is squarely the kind of project the program was built for.',
        ],
      },

      { type: 'heading', id: 'qualify', text: 'Does your gym qualify?' },
      {
        type: 'text',
        paras: [
          'The program is for Bahraini micro, small and medium enterprises, and most independent gyms sit squarely inside that. It covers up to 50% of what you spend on software and the services around it, so switching systems costs a gym about half of what the price says.',
        ],
      },

      { type: 'heading', id: 'what-you-fund', text: "What you'd put the funding toward" },
      {
        type: 'text',
        paras: [
          "A gym isn't a shop with a till. The software has to run the front door, memberships, classes, payments, payroll and the owner's view of all of it. That breadth is usually why owners put off switching: it reads like a big, risky spend.",
          'The program changes the maths. If Tamkeen covers a share of the subscription and setup, the question stops being "can we afford to switch?" and becomes "what do we want the software to do?" Here is what one yearly subscription would be paying for.',
        ],
      },
      {
        type: 'answer',
        heading: 'One subscription, the whole gym',
        points: [
          'The front door: members check in by QR code, an Apple or Google Wallet pass, or a tap of their phone, and only a valid plan gets in.',
          'Memberships and payments: sell any plan at your price and hours, send a payment link on WhatsApp, and take card, Apple Pay, Google Pay or BenefitPay.',
          "Classes and PT: your timetable and PT packs, booked from the member's phone.",
          'Staff and payroll: rosters, clock-ins and leave, with GOSI worked out and the WPS salary file at month end.',
          "One owner's view: revenue, members, renewals and churn on one dashboard, on the web and on your phone.",
        ],
        module: 'reports',
      },

      { type: 'heading', id: 'checklist', text: 'Before you apply' },
      {
        type: 'list',
        items: [
          'Check your gym is eligible and apply on the [official Tamkeen page](https://tamkeen.bh/en/programs/digital-enablement-program/).',
          'Decide what the software must do for your gym before you shop, not after.',
          'Pick the system, then try it with your own members before you commit a fil.',
          'Get a written quote for the subscription and setup, so you have a software cost to put forward.',
        ],
      },
      {
        type: 'answer',
        heading: 'Pick the system, then line up the funding',
        points: [
          'Gym Thing is one yearly price by gym size, with everything above included, so the cost you put forward is a single clear number.',
          'Try it at your own gym with your real members, free for up to 3 months, before you pay anything.',
          'Support is on WhatsApp, phone and email, 7 days a week, with same-day replies, through the setup and after it.',
          'Start with the system, line up the funding second. [Start with a free trial](/free-trial/).',
        ],
        module: 'reports',
      },
      {
        type: 'text',
        paras: [
          'New to choosing a system? Start with [what owners keep reporting about their software](/blog/gym-software-problems/), then read why Gym Thing is [built for the Gulf](/blog/built-for-the-gulf/) and how it handles [VAT for gyms](/blog/gcc-vat-for-gyms/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'Sources' },
      {
        type: 'note',
        text: 'Program details are from [GCC Business News](https://www.gccbusinessnews.com/bahrain-tamkeen-launch-digital-ai-program/) (1 Oct 2026), read on the page on 25 Oct 2026. Apply on the [official Tamkeen page](https://tamkeen.bh/en/programs/digital-enablement-program/). Collected in docs/research/2026-10-tamkeen-digital-enablement.',
      },
    ],
  },
  ar: {
    title: 'برنامج النادي الخاص بك، بتمويل جزئي من تمكين',
    seoTitle: 'التمكين الرقمي من تمكين: تمويل برامج النوادي الرياضية في البحرين',
    description:
      'برنامج التمكين الرقمي والذكاء الاصطناعي من تمكين قد يغطي حتى 50٪ من تكاليف البرامج للنوادي البحرينية. ما الذي يغطيه، ومن يستحقه، وكيف ينطبق على Gym Thing.',
    lede: 'برنامج النادي الجديد يبين لك كأنه تكلفة تتحملها بروحك. بس للنادي البحريني، غالباً مو جي: برنامج التمكين الرقمي والذكاء الاصطناعي من تمكين انعمل عشان يدفع جزء من هالنقلة بالضبط. هني شنو يغطي البرنامج، وهل ناديك ينطبق عليه، وشنو بتحط الدعم عليه مع Gym Thing.',
    blocks: [
      {
        type: 'note',
        text: 'هالمقال عن دفع تكلفة النقلة، مو عن النقلة نفسها. وعشان المشاكل اللي تحلها النقلة، شوف [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/).',
      },

      { type: 'heading', id: 'what-it-covers', text: 'شنو يغطي برنامج التمكين الرقمي' },
      {
        type: 'text',
        paras: [
          'تمكين، صندوق العمل في البحرين، عندها برنامج التمكين الرقمي والذكاء الاصطناعي عشان يساعد الشركات البحرينية تدفع تكاليف الأدوات الرقمية. البرنامج موجّه للمؤسسات الصغيرة والمتوسطة والمتناهية الصغر، ويغطي البرامج والخدمات اللي حولها، مو بس الاشتراك.',
          'والفكرة بسيطة: جزء من فاتورة برنامجك يرجع لك.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«ضمن البرنامج، تحصل الشركات المؤهلة على دعم مالي يغطي حتى 50 بالمئة من التكاليف المتعلقة بالحلول البرمجية والخدمات المرتبطة بها.»',
            source: 'GCC Business News عن برنامج التمكين الرقمي والذكاء الاصطناعي من تمكين',
            url: 'https://www.gccbusinessnews.com/bahrain-tamkeen-launch-digital-ai-program/',
            date: '1 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          '«الحلول البرمجية والخدمات المرتبطة بها» هو الجزء اللي يهم النادي. المقصود منه يغطي النظام نفسه والشغل اللي يخليه شغّال: الاشتراك، والتجهيز، ونقل بياناتك، وتدريب فريقك. والانتقال لنظام إدارة نادي هو بالضبط نوع المشروع اللي انعمل له البرنامج.',
        ],
      },

      { type: 'heading', id: 'qualify', text: 'هل ناديك مؤهل؟' },
      {
        type: 'text',
        paras: [
          'البرنامج للمؤسسات البحرينية الصغيرة والمتوسطة والمتناهية الصغر، وأغلب النوادي المستقلة تدخل في هالتصنيف. ويغطي حتى 50٪ من اللي تصرفه على البرامج والخدمات اللي حولها، يعني نقلة النظام تكلّف النادي تقريباً نص اللي مكتوب.',
        ],
      },

      { type: 'heading', id: 'what-you-fund', text: 'شنو بتحط الدعم عليه' },
      {
        type: 'text',
        paras: [
          'النادي مو دكان فيه كاشير. البرنامج لازم يدير الباب، والاشتراكات، والحصص، والمدفوعات، والرواتب، ونظرة صاحب النادي على كل هذا. وهالاتساع عادة هو السبب اللي يخلي الأصحاب يأجلون النقلة: تبين صرفة كبيرة وفيها مخاطرة.',
          'والبرنامج يغيّر الحساب. لو تمكين غطّت جزء من الاشتراك والتجهيز، السؤال ما عاد «نقدر ندفع عشان ننقل؟» صار «شنو نبي البرنامج يسوي؟» وهذا اللي بيدفع له اشتراك سنوي واحد.',
        ],
      },
      {
        type: 'answer',
        heading: 'اشتراك واحد، النادي كله',
        points: [
          'الباب: الأعضاء يدخلون برمز QR، أو ببطاقة في Apple Wallet أو Google Wallet، أو بلمسة بالتلفون، وما يدخل إلا اللي باقته صالحة.',
          'الاشتراكات والمدفوعات: بيع أي باقة بسعرك وساعاتك، أرسل رابط دفع على واتساب، واقبل بطاقة أو Apple Pay أو Google Pay أو BenefitPay.',
          'الحصص والتدريب الشخصي: جدولك وباقات التدريب، تنحجز من تلفون العضو.',
          'الموظفين والرواتب: الجداول والحضور والإجازات، مع احتساب GOSI وملف رواتب WPS في آخر الشهر.',
          'نظرة صاحب النادي: الإيرادات والأعضاء والتجديدات ومعدل التسرب في لوحة وحدة، على الويب وعلى تلفونك.',
        ],
        module: 'reports',
      },

      { type: 'heading', id: 'checklist', text: 'قبل لا تقدّم' },
      {
        type: 'list',
        items: [
          'تأكد إن ناديك مؤهل وقدّم عبر [صفحة تمكين الرسمية](https://tamkeen.bh/ar/programs/digital-enablement-program/).',
          'قرّر شنو لازم يسوي البرنامج لناديك قبل لا تشتري، مو بعدين.',
          'اختار النظام، وبعدين جرّبه مع أعضاءك قبل لا تلتزم بفلس.',
          'خذ عرض سعر مكتوب للاشتراك والتجهيز، عشان يكون عندك تكلفة برنامج تقدّمها.',
        ],
      },
      {
        type: 'answer',
        heading: 'اختار النظام، وبعدين رتّب الدعم',
        points: [
          'Gym Thing بسعر سنوي واحد حسب حجم النادي، وكل اللي فوق داخل فيه، فالتكلفة اللي تقدّمها رقم واحد واضح.',
          'جرّبه في ناديك ومع أعضاءك الحقيقيين، مجاناً لين 3 شهور، قبل لا تدفع شي.',
          'الدعم على واتساب وتلفون وإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم، خلال التجهيز وبعده.',
          'ابدأ بالنظام، ورتّب الدعم ثاني شي. [ابدأ بتجربة مجانية](/ar/free-trial/).',
        ],
        module: 'reports',
      },
      {
        type: 'text',
        paras: [
          'لسه في بداية اختيار نظام؟ ابدأ بـ[المشاكل اللي يشتكي منها أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/)، وبعدين اقرأ ليش Gym Thing [مصمّم للخليج](/ar/blog/built-for-the-gulf/) وشلون يتعامل مع [ضريبة القيمة المضافة للنوادي](/ar/blog/gcc-vat-for-gyms/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'المصادر' },
      {
        type: 'note',
        text: 'تفاصيل البرنامج من [GCC Business News](https://www.gccbusinessnews.com/bahrain-tamkeen-launch-digital-ai-program/) (1 أكتوبر 2026)، مقروءة على الصفحة في 25 أكتوبر 2026. قدّم عبر [صفحة تمكين الرسمية](https://tamkeen.bh/ar/programs/digital-enablement-program/). جُمعت في docs/research/2026-10-tamkeen-digital-enablement.',
      },
    ],
  },
}
