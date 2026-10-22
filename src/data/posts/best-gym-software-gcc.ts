import type { Post } from '../posts'

// Sources: docs/research/2026-10-gcc-gym-software/listicle.md. Every vendor line was read on the vendor's own site on
// 22 Oct 2026. Gym Thing points only use features in modules.ts; WhatsApp is a one-tap chat with a ready message.
export const post: Post = {
  slug: 'best-gym-software-gcc',
  date: '2026-10-22',
  checked: '2026-10-22',
  tags: ['gym-software', 'gulf'],
  en: {
    title: 'The best gym management software in the GCC in 2026',
    seoTitle: 'Best gym management software in the GCC (2026): 10 options compared',
    description:
      'Ten gym management systems sold in Bahrain, Saudi Arabia, the UAE, Qatar, Kuwait and Oman, in their own words: who each suits, what it costs and what to check.',
    lede: 'Search for gym software in Riyadh, Dubai or Manama and you get the same handful of names, plus a lot of pages that say little. We read each vendor’s own website and wrote down what it says about the things a Gulf gym needs: Arabic, local payments, VAT, the front door, the member app and the price. Here are ten options, who each one suits, and what to ask before you sign.',
    blocks: [
      {
        type: 'note',
        text: 'We make Gym Thing, so it comes first. Everything about the others is in their own words, from their own pages. Where a page didn’t mention something, we say so — that doesn’t mean the product lacks it. Vendors change their pages, so check before you decide.',
      },

      { type: 'heading', id: 'checklist', text: 'What to check before you shortlist' },
      {
        type: 'list',
        items: [
          'Is the member app in Arabic, and does the payment page your members open speak Arabic too?',
          'Can members pay the way people pay in your country, and does the money land in your own account?',
          'Does every sale get a VAT invoice at your country’s rate, or no VAT where there is none?',
          'Does the door check the plan, its hours and its branch on every scan?',
          'Can the front desk reach a member on WhatsApp in one tap, with a payment link ready?',
          'Who answers on a Friday, in which language, and how fast?',
          'Is the price on the page, or can you at least try it on your own gym first?',
        ],
      },

      { type: 'heading', id: 'gym-thing', text: '1. Gym Thing (Bahrain)' },
      {
        type: 'text',
        paras: [
          'Gym Thing is built by Thing W.L.L. in Seef, Bahrain, for gyms across the Gulf. It runs memberships, the front door, payments, VAT invoices, classes, the till, payroll and a member app in one system, and every gym gets every module for one yearly price by gym size.',
          'It suits gyms and small chains that want one system for the desk, the door and payday, with a team in the Gulf to call. See it for [Saudi Arabia](/gym-software/saudi-arabia/), [the UAE](/gym-software/uae/), [Qatar](/gym-software/qatar/), [Kuwait](/gym-software/kuwait/), [Oman](/gym-software/oman/) or [Bahrain](/gym-software/bahrain/).',
        ],
      },
      {
        type: 'answer',
        heading: 'What you get',
        points: [
          'A member app in Arabic and English, as your own app in the stores or inside ours.',
          'Payment links on WhatsApp, paid by card, Apple Pay or Google Pay, and in Bahrain BenefitPay. The plan starts the moment it is paid.',
          'A numbered VAT invoice for every sale at your rate, or VAT switched off.',
          'Doors that check every plan’s days, hours and branches: turnstiles, phone tap, a Wallet pass or an iPad.',
          'Support on WhatsApp, phone or email, 7 days a week, with same-day replies. [Start with a free trial](/free-trial/) of up to 3 months.',
        ],
        module: 'memberships',
      },

      { type: 'heading', id: 'tamarran', text: '2. Tamarran (Bahrain)' },
      {
        type: 'text',
        paras: [
          'Tamarran is a Bahraini sports booking app with management software for the venues on it. It suits clubs, academies and activity venues that want to be found by people booking on the Tamarran app.',
          'Check: its business page lists door access, a branded app and card billing under “Upcoming Features”. No prices are published. See [Gym Thing vs Tamarran](/compare/tamarran/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Manage your business and go virtual with the fastest trending home-grown Sport Management Software in the GCC."',
            source: 'Tamarran for business',
            url: 'https://tamarran.com/en/business',
            date: 'read 22 Oct 2026',
          },
          {
            quote: '"Integrate Tammaran\'s Management Software with access control system at your gym"',
            source: 'Tamarran for business, under "Upcoming Features"',
            url: 'https://tamarran.com/en/business',
            date: 'read 22 Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'gymnago', text: '3. Gymnago (Bahrain, UAE, Saudi Arabia, Kuwait)' },
      {
        type: 'text',
        paras: [
          'Gymnago lists offices in Bahrain, Dubai, Riyadh, Kuwait City and Bangalore, and names more Gulf payment methods than most: KNET, OmanNet and Qatar Pay. It suits gyms that want a branded member app and those payment options.',
          'Check: BenefitPay and mada are not on its integrations page, its site is English only, and prices are by demo. See [Gym Thing vs Gymnago](/compare/gymnago/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"Integrate Knet as a payment option to cater to your customers in Kuwait."',
            source: 'Gymnago integrations',
            url: 'https://gymnago.com/features/integrations',
            date: 'read 22 Oct 2026',
          },
          {
            quote: '"The Ultimate All-in-One Software for Fitness and Wellness Businesses"',
            source: 'Gymnago homepage',
            url: 'https://gymnago.com/',
            date: '© 2026',
          },
        ],
      },

      { type: 'heading', id: 'rekaz', text: '4. Rekaz (Saudi Arabia)' },
      {
        type: 'text',
        paras: [
          'Rekaz is a Riyadh booking and subscriptions platform for many kinds of service business, with a page for gyms. It suits Saudi gyms that want an Arabic-first system with prices in riyals on the page.',
          'Check: the fingerprint door connection starts on the 5,999-riyal yearly plan, and the iOS app is an add-on at 9,200 riyals a year.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"Rekaz is your club’s operating system, not just a fingerprint program."',
            source: 'Rekaz gym page',
            url: 'https://rekaz.io/home/gym-management/',
            date: '© 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"Advanced … 2999 / yearly", "Premium … 5999 / yearly", "Business … 14999 / yearly"',
            source: 'Rekaz pricing',
            url: 'https://rekaz.io/home/pricing/',
            date: 'read 22 Oct 2026',
            note: 'translated from Arabic',
          },
        ],
      },

      { type: 'heading', id: 'daftra', text: '5. Daftra (Saudi Arabia agents, Egypt and USA offices)' },
      {
        type: 'text',
        paras: [
          'Daftra is an Arabic accounting and ERP suite with a gym package: memberships, attendance, invoices and stock. It suits a gym whose first need is the books, in Arabic, at a low monthly price.',
          'Check: its gym pages don’t mention door access, a member app or WhatsApp.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Streamline your gym, fitness, or health club with Daftra. Manage memberships, issue recurring invoices, track product and service sales, and monitor member engagement."',
            source: 'Daftra gym page',
            url: 'https://www.daftra.com/en/gym-fitness-club/',
            date: 'read 22 Oct 2026',
          },
          {
            quote: '"Basic 20.00 $ /mo Billed $ 240 per year"',
            source: 'Daftra gym page',
            url: 'https://www.daftra.com/en/gym-fitness-club/',
            date: 'read 22 Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'easy-gym', text: '6. Easy Gym Software (India)' },
      {
        type: 'text',
        paras: [
          'Easy Gym Software is based in Ludhiana, India, and runs a page for each Gulf country. It suits gyms that want WhatsApp-heavy messaging and biometric entry from a vendor with a long track record in India.',
          'Check: its Gulf pages say “GCC-ready gateways” without naming BenefitPay, mada or KNET, and its homepage FAQ says it “requires no member app” while its UAE page describes one. Prices start in rupees, then by quote.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Yes, Easy Gym Software offers bilingual capabilities, allowing gyms to operate in both English and Arabic."',
            source: 'Easy Gym Software UAE page',
            url: 'https://easygymsoftware.com/uae',
            date: 'read 22 Oct 2026',
          },
          {
            quote: '"Starting at just ₹799"',
            source: 'Easy Gym Software homepage',
            url: 'https://easygymsoftware.com/',
            date: '© 2026',
          },
        ],
      },

      { type: 'heading', id: 'mindbody', text: '7. Mindbody (USA)' },
      {
        type: 'text',
        paras: [
          'Mindbody is a Californian booking platform with a large consumer app. It suits studios that want to be found on that app and take payments where Mindbody Payments works.',
          'Check: the published starting price is for North America and Asia, and door access comes through partner integrations. See [Gym Thing vs Mindbody](/compare/mindbody/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"Starting at $79 USD/month (North America and Asia)"',
            source: 'Mindbody pricing',
            url: 'https://www.mindbodyonline.com/business/pricing',
            date: '© 2026',
          },
          {
            quote: '"Not all features are available in all regions or on all tiers."',
            source: 'Mindbody pricing',
            url: 'https://www.mindbodyonline.com/business/pricing',
            date: '© 2026',
          },
        ],
      },

      { type: 'heading', id: 'glofox', text: '8. ABC Glofox (ABC Fitness)' },
      {
        type: 'text',
        paras: [
          'Glofox is part of ABC Fitness and sells to gyms and studios in more than 80 countries, with class booking, a member app and automated billing. It suits studios that run on classes and want a branded app.',
          'Check: its gym page doesn’t mention Arabic, VAT or a Gulf payment method, and prices are by quote. See [Gym Thing vs Glofox](/compare/glofox/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"Join 30,000+ gyms & studios running their business on ABC Glofox"',
            source: 'ABC Glofox gym page',
            url: 'https://www.glofox.com/business-types/gym-management-software/',
            date: '© 2026',
          },
        ],
      },

      { type: 'heading', id: 'perfectgym', text: '9. PerfectGym (Poland)' },
      {
        type: 'text',
        paras: [
          'PerfectGym is Warsaw software built for fitness chains, with RFID and QR entry, many languages and many currencies. It suits large multi-club operators with their own IT team.',
          'Check: its site names no Gulf payment method and doesn’t list Arabic among its languages. Prices are by demo. See [Gym Thing vs Perfect Gym](/compare/perfect-gym/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"PerfectGym is a versatile solution designed to meet the needs of mid-sized and enterprise-level fitness businesses."',
            source: 'PerfectGym homepage',
            url: 'https://www.perfectgym.com/en',
            date: 'read 22 Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'flyby', text: '10. FLYBY (Türkiye)' },
      {
        type: 'text',
        paras: [
          'FLYBY is club software from Senkron Tech in Istanbul, covering fitness, spa, golf and hotels, with a member app in the club’s own name. It suits hotel and resort clubs that run several kinds of facility.',
          'Check: its site is in English, Turkish and German, and prices depend on modules and branches. See [Gym Thing vs FLYBY](/compare/flyby/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"FLYBY responds to very specific needs of businesses that provide a wide range of services, varying from fitness to SPA, F&B and golf."',
            source: 'FLYBY homepage',
            url: 'https://www.flybyglobal.com/',
            date: 'read 22 Oct 2026',
          },
        ],
      },

      { type: 'heading', id: 'next', text: 'Try the shortlist on your own gym' },
      {
        type: 'text',
        paras: [
          'A demo shows the best day. A month on your own members shows the rest: the renewals, the door at 6am, the invoices and payday. [Start with a free trial](/free-trial/): we set Gym Thing up with your logo, plans and members, and you can run it for up to 3 months before paying.',
          'Read more on [what owners are fed up with in their gym software](/blog/gym-software-problems/), [gym software built for somewhere else](/blog/built-for-the-gulf/) and [VAT on gym memberships in each GCC country](/blog/gcc-vat-for-gyms/).',
        ],
      },
      {
        type: 'note',
        text: 'Everything here about other vendors comes from their own public pages, which change — check the current version before you decide.',
      },
    ],
  },
  ar: {
    title: 'أفضل برامج إدارة النوادي الرياضية في دول الخليج لعام 2026',
    seoTitle: 'أفضل برنامج لإدارة النوادي الرياضية في الخليج (2026): مقارنة بين 10 أنظمة',
    description:
      'عشرة أنظمة لإدارة النوادي الرياضية في البحرين والسعودية والإمارات وقطر والكويت وعُمان، بكلام أصحابها: لمن يناسب كل نظام، وكم يكلّف، وما الذي يجب التحقق منه.',
    lede: 'دوّر على برنامج نادي في الرياض أو دبي أو المنامة، وبتطلع لك نفس الأسماء، مع صفحات وايد ما تقول شي. قرينا موقع كل شركة بنفسنا، وكتبنا شنو يقول عن الأشياء اللي يحتاجها نادي في الخليج: العربي، والدفع المحلي، والضريبة، والباب، وتطبيق الأعضاء، والسعر. هذي عشرة خيارات، ولمن يناسب كل واحد، وشنو تسأل قبل لا توقّع.',
    blocks: [
      {
        type: 'note',
        text: 'إحنا اللي نسوي Gym Thing، فهو أول واحد في القائمة. وكل شي عن الباقين بكلامهم، من صفحاتهم. ولما الصفحة ما تذكر شي، نقول هالشي، وهذا ما يعني إن النظام ما فيه. والشركات تغيّر صفحاتها، فتأكد قبل لا تقرر.',
      },

      { type: 'heading', id: 'checklist', text: 'شنو تتأكد منه قبل لا تختار' },
      {
        type: 'list',
        items: [
          'تطبيق الأعضاء بالعربي؟ وصفحة الدفع اللي يفتحها العضو بالعربي بعد؟',
          'الأعضاء يقدرون يدفعون بالطرق اللي يدفع فيها الناس في بلدك؟ والفلوس توصل حسابك إنت؟',
          'كل بيعة لها فاتورة ضريبية بنسبة بلدك، أو بدون ضريبة وين ما في ضريبة؟',
          'الباب يتأكد من الباقة وساعاتها وفرعها مع كل دخول؟',
          'الاستقبال يقدر يوصل للعضو على الواتساب بلمسة وحدة، مع رابط دفع جاهز؟',
          'منو يرد عليك يوم الجمعة، وبأي لغة، وبأي سرعة؟',
          'السعر مكتوب في الصفحة؟ أو على الأقل تقدر تجربه على ناديك قبل؟',
        ],
      },

      { type: 'heading', id: 'gym-thing', text: '1. Gym Thing (البحرين)' },
      {
        type: 'text',
        paras: [
          'Gym Thing تسويه Thing W.L.L. في السيف بالبحرين، للنوادي في كل الخليج. يدير الاشتراكات والباب والمدفوعات والفواتير الضريبية والحصص والكاشير والرواتب وتطبيق الأعضاء في نظام واحد، وكل نادي ياخذ كل الأقسام بسعر سنوي واحد حسب حجمه.',
          'يناسب النوادي والسلاسل الصغيرة اللي تبي نظام واحد للاستقبال والباب ويوم الراتب، وفريق في الخليج تكلمه. شوفه لـ[السعودية](/ar/gym-software/saudi-arabia/) و[الإمارات](/ar/gym-software/uae/) و[قطر](/ar/gym-software/qatar/) و[الكويت](/ar/gym-software/kuwait/) و[عُمان](/ar/gym-software/oman/) و[البحرين](/ar/gym-software/bahrain/).',
        ],
      },
      {
        type: 'answer',
        heading: 'شنو تاخذ',
        points: [
          'تطبيق أعضاء بالعربي والإنجليزي، كتطبيقك الخاص في المتاجر أو داخل تطبيقنا.',
          'روابط دفع على الواتساب، تندفع بالبطاقة أو Apple Pay أو Google Pay، وفي البحرين BenefitPay. والباقة تبدأ أول ما تندفع.',
          'فاتورة ضريبية مرقّمة لكل بيعة بنسبتك، أو الضريبة طافية.',
          'أبواب تتأكد من أيام وساعات وفروع كل باقة: بوابات دوّارة، أو لمسة بالتلفون، أو بطاقة Wallet، أو iPad.',
          'دعم على الواتساب أو التلفون أو الإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم. [ابدأ بتجربة مجانية](/ar/free-trial/) لين 3 شهور.',
        ],
        module: 'memberships',
      },

      { type: 'heading', id: 'tamarran', text: '2. Tamarran (البحرين)' },
      {
        type: 'text',
        paras: [
          'Tamarran تطبيق بحريني لحجز الأنشطة الرياضية، ومعاه برنامج إدارة للأماكن اللي عليه. يناسب الأندية والأكاديميات وأماكن الأنشطة اللي تبي الناس يلقونها وهم يحجزون من تطبيق Tamarran.',
          'تأكد: صفحة الأعمال عندهم تحط التحكم بالدخول والتطبيق بهوية النادي والخصم من البطاقة تحت «Upcoming Features». والأسعار مو منشورة. شوف [Gym Thing مقابل Tamarran](/ar/compare/tamarran/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«أدر عملك وانتقل للعالم الرقمي مع أسرع برنامج محلي لإدارة الرياضة انتشاراً في الخليج.»',
            source: 'صفحة Tamarran للأعمال',
            url: 'https://tamarran.com/en/business',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«اربط برنامج Tammaran للإدارة بنظام التحكم بالدخول في ناديك»',
            source: 'صفحة Tamarran للأعمال، تحت «Upcoming Features»',
            url: 'https://tamarran.com/en/business',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'gymnago', text: '3. Gymnago (البحرين والإمارات والسعودية والكويت)' },
      {
        type: 'text',
        paras: [
          'Gymnago يذكر مكاتب في البحرين ودبي والرياض ومدينة الكويت وبنغالور، ويسمّي طرق دفع خليجية أكثر من غيره: KNET وOmanNet وQatar Pay. يناسب النوادي اللي تبي تطبيق أعضاء بهويتها وهذي الطرق.',
          'تأكد: BenefitPay ومدى مو موجودين في صفحة التكاملات، وموقعه بالإنجليزي بس، والأسعار بعد عرض تجريبي. شوف [Gym Thing مقابل Gymnago](/ar/compare/gymnago/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«اربط Knet كطريقة دفع لخدمة عملائك في الكويت.»',
            source: 'صفحة التكاملات في Gymnago',
            url: 'https://gymnago.com/features/integrations',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«البرنامج المتكامل الأمثل لأعمال اللياقة والعافية»',
            source: 'الصفحة الرئيسية لـ Gymnago',
            url: 'https://gymnago.com/',
            date: '© 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'rekaz', text: '4. ركاز (السعودية)' },
      {
        type: 'text',
        paras: [
          'ركاز منصة من الرياض للحجوزات والاشتراكات لأنواع وايد من أعمال الخدمات، وعندها صفحة للنوادي. يناسب النوادي السعودية اللي تبي نظام عربي من الأساس وأسعاره بالريال مكتوبة في الصفحة.',
          'تأكد: ربط جهاز البصمة يبدأ من الباقة السنوية بـ 5,999 ريال، وتطبيق iOS إضافة بـ 9,200 ريال في السنة.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«ركاز هو نظام تشغيل ناديك، مو مجرد برنامج بصمة»',
            source: 'صفحة ركاز للنوادي',
            url: 'https://rekaz.io/home/gym-management/',
            date: '© 2026',
          },
          {
            quote: '«المتقدمة … 2999 / سنويًا»، «المميزة … 5999 / سنويًا»، «الأعمال … 14999 / سنويًا»',
            source: 'أسعار ركاز',
            url: 'https://rekaz.io/home/pricing/',
            date: 'قُرئت في 22 أكتوبر 2026',
          },
        ],
      },

      { type: 'heading', id: 'daftra', text: '5. دفترة (وكلاء في السعودية، ومكاتب في مصر وأمريكا)' },
      {
        type: 'text',
        paras: [
          'دفترة نظام محاسبة وERP عربي، وعنده باقة للنوادي: الاشتراكات والحضور والفواتير والمخزون. يناسب النادي اللي أول همه الحسابات، بالعربي، وبسعر شهري قليل.',
          'تأكد: صفحات النوادي عندهم ما تذكر التحكم بالدخول ولا تطبيق أعضاء ولا الواتساب.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«نظّم ناديك الرياضي أو مركز اللياقة مع دفترة. أدر العضويات، وأصدر فواتير متكررة، وتابع مبيعات المنتجات والخدمات، وراقب تفاعل الأعضاء.»',
            source: 'صفحة دفترة للنوادي',
            url: 'https://www.daftra.com/en/gym-fitness-club/',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«الأساسية 20.00 دولار شهرياً، تُدفع 240 دولار سنوياً»',
            source: 'صفحة دفترة للنوادي',
            url: 'https://www.daftra.com/en/gym-fitness-club/',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'easy-gym', text: '6. Easy Gym Software (الهند)' },
      {
        type: 'text',
        paras: [
          'Easy Gym Software مقرها في لوديانا بالهند، وعندها صفحة لكل دولة خليجية. يناسب النوادي اللي تبي رسائل واتساب كثيرة ودخول بالبصمة من شركة لها تاريخ طويل في الهند.',
          'تأكد: صفحاتهم للخليج تقول «GCC-ready gateways» بدون ما تسمّي BenefitPay أو مدى أو KNET، وأسئلة صفحتهم الرئيسية تقول إنه «ما يحتاج تطبيق أعضاء» وصفحة الإمارات توصف تطبيق. والأسعار تبدأ بالروبية، وبعدها بعرض سعر.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«نعم، Easy Gym Software يقدّم إمكانيات بلغتين، فتقدر النوادي تشتغل بالإنجليزي والعربي.»',
            source: 'صفحة Easy Gym Software للإمارات',
            url: 'https://easygymsoftware.com/uae',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«يبدأ من ₹799 بس»',
            source: 'الصفحة الرئيسية لـ Easy Gym Software',
            url: 'https://easygymsoftware.com/',
            date: '© 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'mindbody', text: '7. Mindbody (أمريكا)' },
      {
        type: 'text',
        paras: [
          'Mindbody منصة حجوزات من كاليفورنيا عندها تطبيق كبير للجمهور. يناسب الاستوديوهات اللي تبي الناس يلقونها في هالتطبيق، وتستلم الدفع وين ما تشتغل Mindbody Payments.',
          'تأكد: السعر المنشور لأمريكا الشمالية وآسيا، والتحكم بالدخول عن طريق تكاملات مع شركاء. شوف [Gym Thing مقابل Mindbody](/ar/compare/mindbody/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«يبدأ من 79 دولار أمريكي في الشهر (أمريكا الشمالية وآسيا)»',
            source: 'أسعار Mindbody',
            url: 'https://www.mindbodyonline.com/business/pricing',
            date: '© 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«مو كل الخصائص متوفرة في كل المناطق أو في كل الباقات.»',
            source: 'أسعار Mindbody',
            url: 'https://www.mindbodyonline.com/business/pricing',
            date: '© 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'glofox', text: '8. ABC Glofox (ABC Fitness)' },
      {
        type: 'text',
        paras: [
          'Glofox جزء من ABC Fitness، ويبيع لنوادي واستوديوهات في أكثر من 80 دولة، مع حجز الحصص وتطبيق أعضاء ودفع تلقائي. يناسب الاستوديوهات اللي شغلها حصص وتبي تطبيق بهويتها.',
          'تأكد: صفحة النوادي عندهم ما تذكر العربي ولا الضريبة ولا طريقة دفع خليجية، والأسعار بعرض سعر. شوف [Gym Thing مقابل Glofox](/ar/compare/glofox/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«انضم لأكثر من 30,000 نادي واستوديو يديرون أعمالهم على ABC Glofox»',
            source: 'صفحة ABC Glofox للنوادي',
            url: 'https://www.glofox.com/business-types/gym-management-software/',
            date: '© 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'perfectgym', text: '9. PerfectGym (بولندا)' },
      {
        type: 'text',
        paras: [
          'PerfectGym برنامج من وارسو مبني لسلاسل النوادي، فيه دخول بـ RFID وQR، ولغات وعملات وايد. يناسب السلاسل الكبيرة اللي عندها فريق تقنية خاص فيها.',
          'تأكد: موقعهم ما يسمّي أي طريقة دفع خليجية، والعربي مو بين لغاته. والأسعار بعد عرض تجريبي. شوف [Gym Thing مقابل Perfect Gym](/ar/compare/perfect-gym/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«PerfectGym حل مرن مصمم لاحتياجات أعمال اللياقة المتوسطة والكبيرة.»',
            source: 'الصفحة الرئيسية لـ PerfectGym',
            url: 'https://www.perfectgym.com/en',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'flyby', text: '10. FLYBY (تركيا)' },
      {
        type: 'text',
        paras: [
          'FLYBY برنامج أندية من Senkron Tech في إسطنبول، يغطي اللياقة والسبا والغولف والفنادق، مع تطبيق أعضاء باسم النادي. يناسب أندية الفنادق والمنتجعات اللي فيها أكثر من نوع مرافق.',
          'تأكد: موقعهم بالإنجليزي والتركي والألماني، والأسعار حسب الأقسام وعدد الفروع. شوف [Gym Thing مقابل FLYBY](/ar/compare/flyby/).',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«FLYBY يلبّي احتياجات محددة جداً للأعمال اللي تقدّم خدمات متنوعة، من اللياقة للسبا والمطاعم والغولف.»',
            source: 'الصفحة الرئيسية لـ FLYBY',
            url: 'https://www.flybyglobal.com/',
            date: 'قُرئت في 22 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'next', text: 'جرّب القائمة على ناديك' },
      {
        type: 'text',
        paras: [
          'العرض التجريبي يوريك أحسن يوم. وشهر على أعضاءك يوريك الباقي: التجديدات، والباب الساعة 6 الصبح، والفواتير، ويوم الراتب. [ابدأ بتجربة مجانية](/ar/free-trial/): نجهز Gym Thing بشعارك وباقاتك وأعضاءك، وتقدر تشغّله لين 3 شهور قبل لا تدفع.',
          'اقرأ أكثر عن [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/)، و[برامج النوادي المصممة لأسواق ثانية](/ar/blog/built-for-the-gulf/)، و[ضريبة القيمة المضافة على اشتراكات النوادي في كل دولة خليجية](/ar/blog/gcc-vat-for-gyms/).',
        ],
      },
      {
        type: 'note',
        text: 'كل شي هني عن الشركات الثانية من صفحاتهم العامة، وهي تتغير — تأكد من النسخة الحالية قبل لا تقرر.',
      },
    ],
  },
}
