import type { Post } from '../posts'

// Sources: docs/research/2026-10-gcc-gym-software/vat-and-licences.md (part A). Every quote was read on its page on
// 22 Oct 2026. Gym Thing points use modules.ts (invoicing) and the-gym-thing organization.vat_rate_bps: each gym sets
// its own rate or 0 for off, and the rate is stored on every sale.
export const post: Post = {
  slug: 'gcc-vat-for-gyms',
  date: '2026-10-22',
  checked: '2026-10-22',
  tags: ['payments', 'gulf'],
  en: {
    title: 'VAT on gym memberships in each GCC country',
    seoTitle: 'VAT on gym memberships in the GCC (2026): rates and thresholds',
    description:
      'VAT for gyms in Saudi Arabia, the UAE, Bahrain, Oman, Qatar and Kuwait in 2026: the rate, when you must register, and what each membership invoice should show.',
    lede: 'Open a gym in Riyadh and you charge 15%. In Dubai or Muscat it’s 5%, in Manama 10%, and in Doha or Kuwait City there’s no VAT at all. Here are the rates and registration thresholds for each GCC country, read on the tax authorities’ own pages, and what they mean for the price on your plans and the invoice every member gets.',
    blocks: [
      {
        type: 'note',
        text: 'This is a guide, not tax advice. None of the official tax pages we read names gym memberships as zero-rated or exempt, so the standard rate is the starting point. Confirm with your tax adviser.',
      },

      { type: 'heading', id: 'rates', text: 'GCC VAT rates and thresholds in 2026' },
      {
        type: 'list',
        items: [
          'Saudi Arabia: 15%. Register when yearly revenue passes SAR 375,000; optional from SAR 187,500 ([ZATCA](https://zatca.gov.sa/en/eServices/Pages/eServices-002.aspx)).',
          'Bahrain: 10%. Register when yearly supplies pass BHD 37,500; optional from BHD 18,750 ([PwC Tax Summaries](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)).',
          'UAE: 5%. Register when taxable supplies pass AED 375,000; optional from AED 187,500 ([Federal Tax Authority](https://tax.gov.ae/en/taxes/Vat/Vat.Topics/registration.for.vat.aspx)).',
          'Oman: 5%. Register at OMR 38,500 a year; optional from OMR 19,250 ([Oman Tax Authority](https://tms.taxoman.gov.om/portal/web/taxportal/registration)).',
          'Qatar: no VAT today. A 5% rate is expected under the GCC framework, with no date set.',
          'Kuwait: no VAT. The GCC framework is still under discussion in Parliament.',
        ],
      },

      { type: 'heading', id: 'with-vat', text: 'Saudi Arabia, the UAE, Bahrain and Oman' },
      {
        type: 'text',
        paras: [
          'Four GCC countries charge VAT, at three different rates. The rules work the same way in each: once your yearly sales pass the mandatory threshold you must register, collect VAT on every membership, PT pack and bottle of water, and show it on the invoice.',
          'A small gym can stay under the threshold for a while. In Saudi Arabia and the UAE that is 375,000 a year, about 250 members paying 1,500 a year. Most gyms pass it sooner than they expect, and registering voluntarily from half that lets you reclaim the VAT on your equipment and fit-out.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"…from 1 July 2020, the decision to raise the VAT rate to 15% was applied to all goods and services subject to it…"',
            source: 'ZATCA, About VAT',
            url: 'https://zatca.gov.sa/ar/RulesRegulations/VAT/Pages/About-Vat.aspx',
            date: 'updated 2 Jun 2026',
            note: 'translated from Arabic',
          },
          {
            quote:
              '"The general VAT rate is 5% and applies to most goods and services, with some goods and services subject to a 0% rate or an exemption from VAT"',
            source: 'PwC Tax Summaries, United Arab Emirates',
            url: 'https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes',
            date: 'reviewed 9 Sep 2026',
          },
          {
            quote: '"The current standard rate of VAT is 10%."',
            source: 'PwC Tax Summaries, Bahrain',
            url: 'https://taxsummaries.pwc.com/bahrain/corporate/other-taxes',
            date: 'reviewed 26 Jul 2026',
          },
          {
            quote:
              '"After registration, the taxpayer is obliged to: Collect VAT at a rate of 5% from customers on taxable supplies"',
            source: 'Oman Tax Authority, Registration',
            url: 'https://tms.taxoman.gov.om/portal/web/taxportal/registration',
            date: 'updated 29 Oct 2025',
          },
        ],
      },

      { type: 'heading', id: 'no-vat', text: 'Qatar and Kuwait' },
      {
        type: 'text',
        paras: [
          'Qatar and Kuwait signed the GCC VAT agreement in 2017 but haven’t brought VAT in. Gyms there charge no VAT today. Qatar is expected to introduce it at 5%, so it is worth having software that can switch it on without rebuilding your plans.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Currently, Qatar imposes no VAT or sales tax on operations in Qatar. However, the introduction of VAT in Qatar under a common GCC framework is expected to be introduced in the near future. The anticipated tax rate is 5%."',
            source: 'PwC Tax Summaries, Qatar',
            url: 'https://taxsummaries.pwc.com/qatar/corporate/other-taxes',
            date: 'reviewed 17 Sep 2026',
          },
          {
            quote:
              '"In Kuwait, the GCC framework agreement is currently under discussion in the Parliament while the draft Law is under preparation by the government."',
            source: 'PwC Tax Summaries, Kuwait',
            url: 'https://taxsummaries.pwc.com/kuwait/corporate/other-taxes',
            date: 'reviewed 22 Jul 2026',
          },
        ],
      },

      { type: 'heading', id: 'desk', text: 'What VAT means at the front desk' },
      {
        type: 'text',
        paras: [
          'Members think in the price they pay, so plans are easiest to sell VAT-inclusive: 1,150 riyals, not 1,000 plus VAT. The system then has to split out the VAT correctly on every sale, number every invoice in order, and put your VAT number on it. At the end of the quarter your accountant needs net, VAT and gross for the period, not a pile of receipts.',
        ],
      },
      {
        type: 'answer',
        heading: 'VAT at your rate, or none',
        points: [
          'Set your country’s rate once, 15%, 10% or 5%, or switch VAT off in Qatar and Kuwait.',
          'Enter the price the member pays, and the VAT split is worked out on every membership, PT pack and till sale.',
          'Every sale gets an invoice numbered in order, with your logo, legal name, CR and VAT number.',
          'Run the sales report for any dates: net, VAT and gross by method, as a PDF or spreadsheet.',
          'If your rate changes, new sales use the new rate and past invoices keep the one they were sold at.',
        ],
        module: 'invoicing',
      },
      {
        type: 'screen',
        show: 'screen:Accounting',
        caption: 'The accounting page at ABC Gym in Bahrain, with revenue and VAT collected for the period.',
      },

      { type: 'heading', id: 'checklist', text: 'A VAT checklist for gym owners' },
      {
        type: 'list',
        items: [
          'Know your threshold, and register before you pass it, not after.',
          'Price every plan VAT-inclusive, so the price on the wall is the price at the desk.',
          'Put your VAT number on every invoice, with invoices numbered in order and no gaps.',
          'Charge VAT on the till too: drinks, supplements and towels.',
          'Pull net, VAT and gross for each quarter in one report.',
          'In Qatar or Kuwait, check your software can switch VAT on with one setting.',
        ],
      },

      { type: 'heading', id: 'next', text: 'Get the invoices right from the first sale' },
      {
        type: 'text',
        paras: [
          '[Start with a free trial](/free-trial/): we set Gym Thing up with your plans, prices and VAT details, and you can run it free for up to 3 months.',
          'See Gym Thing for [Saudi Arabia](/gym-software/saudi-arabia/), [the UAE](/gym-software/uae/), [Bahrain](/gym-software/bahrain/), [Oman](/gym-software/oman/), [Qatar](/gym-software/qatar/) and [Kuwait](/gym-software/kuwait/), or read [opening a gym in Saudi Arabia or the UAE](/blog/opening-a-gym-saudi-uae/).',
        ],
      },
      {
        type: 'note',
        text: 'Tax rules change, so check the current rates before you file.',
      },
    ],
  },
  ar: {
    title: 'ضريبة القيمة المضافة على اشتراكات النوادي الرياضية في كل دولة خليجية',
    seoTitle: 'ضريبة القيمة المضافة على اشتراكات النوادي الرياضية في الخليج (2026): النسب وحدود التسجيل',
    description:
      'ضريبة القيمة المضافة للنوادي في السعودية والإمارات والبحرين وعُمان وقطر والكويت لعام 2026: النسبة، ومتى يجب التسجيل، وما الذي يجب أن تتضمنه فاتورة الاشتراك.',
    lede: 'افتح نادي في الرياض وبتحاسب 15%. في دبي أو مسقط 5%، وفي المنامة 10%، وفي الدوحة أو الكويت ما في ضريبة أبداً. هذي النسب وحدود التسجيل لكل دولة خليجية، قريناها في صفحات الجهات الضريبية نفسها، وشنو تعني لسعر باقاتك وللفاتورة اللي ياخذها كل عضو.',
    blocks: [
      {
        type: 'note',
        text: 'هذا دليل، مو استشارة ضريبية. وما في صفحة رسمية قريناها تذكر اشتراكات النوادي كخاضعة لنسبة صفر أو معفية، فالنسبة الأساسية هي نقطة البداية. تأكد من مستشارك الضريبي.',
      },

      { type: 'heading', id: 'rates', text: 'نسب ضريبة القيمة المضافة وحدود التسجيل في الخليج لعام 2026' },
      {
        type: 'list',
        items: [
          'السعودية: 15%. التسجيل إلزامي لما تتعدى الإيرادات السنوية 375,000 ريال، واختياري من 187,500 ([هيئة الزكاة والضريبة والجمارك](https://zatca.gov.sa/en/eServices/Pages/eServices-002.aspx)).',
          'البحرين: 10%. التسجيل إلزامي لما تتعدى التوريدات السنوية 37,500 دينار، واختياري من 18,750 ([ملخصات PwC الضريبية](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)).',
          'الإمارات: 5%. التسجيل إلزامي لما تتعدى التوريدات الخاضعة 375,000 درهم، واختياري من 187,500 ([الهيئة الاتحادية للضرائب](https://tax.gov.ae/en/taxes/Vat/Vat.Topics/registration.for.vat.aspx)).',
          'عُمان: 5%. التسجيل إلزامي عند 38,500 ريال عُماني في السنة، واختياري من 19,250 ([جهاز الضرائب](https://tms.taxoman.gov.om/portal/web/taxportal/registration)).',
          'قطر: ما في ضريبة اليوم. ومتوقع تطبيق 5% ضمن الإطار الخليجي، بدون موعد محدد.',
          'الكويت: ما في ضريبة. والاتفاقية الخليجية للحين تحت النقاش في مجلس الأمة.',
        ],
      },

      { type: 'heading', id: 'with-vat', text: 'السعودية والإمارات والبحرين وعُمان' },
      {
        type: 'text',
        paras: [
          'أربع دول خليجية تطبّق الضريبة، بثلاث نسب مختلفة. والقواعد تمشي بنفس الطريقة في كل وحدة: أول ما تتعدى مبيعاتك السنوية الحد الإلزامي لازم تسجّل، وتحصّل الضريبة على كل اشتراك وباقة تدريب شخصي وعلبة ماي، وتبينها في الفاتورة.',
          'النادي الصغير يقدر يظل تحت الحد شوي. في السعودية والإمارات الحد 375,000 في السنة، يعني تقريباً 250 عضو يدفعون 1,500 في السنة. وأغلب النوادي تتعداه أسرع مما يتوقعون، والتسجيل الاختياري من نص المبلغ يخليك تسترد الضريبة على الأجهزة والتجهيز.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«…وخلال الأول من يوليو 2020م، تم تطبيق قرار رفع نسبة ضريبة القيمة المضافة إلى 15% على جميع السلع والخدمات الخاضعة لها…»',
            source: 'هيئة الزكاة والضريبة والجمارك، عن ضريبة القيمة المضافة',
            url: 'https://zatca.gov.sa/ar/RulesRegulations/VAT/Pages/About-Vat.aspx',
            date: 'آخر تحديث 2 يونيو 2026',
          },
          {
            quote:
              '«النسبة العامة لضريبة القيمة المضافة 5% وتنطبق على أغلب السلع والخدمات، مع بعض السلع والخدمات الخاضعة لنسبة صفر أو المعفاة من الضريبة»',
            source: 'ملخصات PwC الضريبية، الإمارات',
            url: 'https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes',
            date: 'رُوجعت في 9 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«النسبة الأساسية الحالية لضريبة القيمة المضافة 10%.»',
            source: 'ملخصات PwC الضريبية، البحرين',
            url: 'https://taxsummaries.pwc.com/bahrain/corporate/other-taxes',
            date: 'رُوجعت في 26 يوليو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              '«بعد التسجيل، يلتزم المكلف بتحصيل ضريبة القيمة المضافة بنسبة 5% من العملاء على التوريدات الخاضعة للضريبة»',
            source: 'جهاز الضرائب في عُمان، التسجيل',
            url: 'https://tms.taxoman.gov.om/portal/web/taxportal/registration',
            date: 'آخر تحديث 29 أكتوبر 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'no-vat', text: 'قطر والكويت' },
      {
        type: 'text',
        paras: [
          'قطر والكويت وقّعوا الاتفاقية الخليجية للضريبة في 2017، بس ما طبقوها. النوادي هناك ما تحصّل ضريبة اليوم. ومتوقع إن قطر تطبقها بنسبة 5%، فيستاهل يكون عندك برنامج يقدر يشغّلها بدون ما تعيد بناء باقاتك.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«حالياً، ما تفرض قطر أي ضريبة قيمة مضافة أو ضريبة مبيعات على الأعمال في قطر. بس متوقع تطبيق ضريبة القيمة المضافة في قطر ضمن الإطار الخليجي المشترك في المستقبل القريب. والنسبة المتوقعة 5%.»',
            source: 'ملخصات PwC الضريبية، قطر',
            url: 'https://taxsummaries.pwc.com/qatar/corporate/other-taxes',
            date: 'رُوجعت في 17 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«في الكويت، الاتفاقية الخليجية حالياً تحت النقاش في مجلس الأمة، والحكومة تجهّز مسودة القانون.»',
            source: 'ملخصات PwC الضريبية، الكويت',
            url: 'https://taxsummaries.pwc.com/kuwait/corporate/other-taxes',
            date: 'رُوجعت في 22 يوليو 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'desk', text: 'شنو تعني الضريبة في الاستقبال' },
      {
        type: 'text',
        paras: [
          'الأعضاء يفكرون في السعر اللي يدفعونه، فالأسهل تبيع الباقات والضريبة داخلة فيها: 1,150 ريال، مو 1,000 زائد الضريبة. وبعدها النظام لازم يفصل الضريبة صح في كل بيعة، ويرقّم كل فاتورة بالترتيب، ويحط رقمك الضريبي فيها. وفي آخر الربع محاسبك يحتاج المبلغ قبل الضريبة والضريبة والإجمالي للفترة، مو كومة إيصالات.',
        ],
      },
      {
        type: 'answer',
        heading: 'الضريبة بنسبتك، أو بدونها',
        points: [
          'حط نسبة بلدك مرة وحدة، 15% أو 10% أو 5%، أو طفّ الضريبة في قطر والكويت.',
          'دخّل السعر اللي يدفعه العضو، والضريبة تنحسب في كل اشتراك وباقة تدريب وبيعة من الكاشير.',
          'كل بيعة لها فاتورة مرقّمة بالترتيب، فيها شعارك واسمك القانوني والسجل التجاري والرقم الضريبي.',
          'طلّع تقرير المبيعات لأي فترة: قبل الضريبة والضريبة والإجمالي حسب طريقة الدفع، PDF أو إكسل.',
          'لو تغيرت النسبة، البيعات الجديدة تمشي على النسبة الجديدة، والفواتير القديمة تظل على نسبتها.',
        ],
        module: 'invoicing',
      },
      {
        type: 'screen',
        show: 'screen:Accounting',
        caption: 'صفحة المحاسبة في ABC Gym في البحرين، مع الإيرادات والضريبة المحصّلة للفترة.',
      },

      { type: 'heading', id: 'checklist', text: 'قائمة الضريبة لأصحاب النوادي' },
      {
        type: 'list',
        items: [
          'اعرف حد التسجيل عندك، وسجّل قبل لا تتعداه، مو بعده.',
          'سعّر كل باقة والضريبة داخلة، عشان السعر على الجدار يكون نفس السعر في الاستقبال.',
          'حط رقمك الضريبي في كل فاتورة، والفواتير مرقّمة بالترتيب بدون فراغات.',
          'حصّل الضريبة على الكاشير بعد: المشروبات والمكملات والفوط.',
          'طلّع قبل الضريبة والضريبة والإجمالي لكل ربع في تقرير واحد.',
          'في قطر أو الكويت، تأكد إن برنامجك يقدر يشغّل الضريبة بإعداد واحد.',
        ],
      },

      { type: 'heading', id: 'next', text: 'خل الفواتير مضبوطة من أول بيعة' },
      {
        type: 'text',
        paras: [
          '[ابدأ بتجربة مجانية](/ar/free-trial/): نجهز Gym Thing بباقاتك وأسعارك وبياناتك الضريبية، وتقدر تشغّله ببلاش لين 3 شهور.',
          'شوف Gym Thing لـ[السعودية](/ar/gym-software/saudi-arabia/) و[الإمارات](/ar/gym-software/uae/) و[البحرين](/ar/gym-software/bahrain/) و[عُمان](/ar/gym-software/oman/) و[قطر](/ar/gym-software/qatar/) و[الكويت](/ar/gym-software/kuwait/)، أو اقرأ [فتح نادي في السعودية أو الإمارات](/ar/blog/opening-a-gym-saudi-uae/).',
        ],
      },
      {
        type: 'note',
        text: 'القواعد الضريبية تتغير، فتأكد من النسب الحالية قبل لا تقدّم.',
      },
    ],
  },
}
