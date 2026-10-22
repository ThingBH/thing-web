import type { Post } from '../posts'

// Sources: docs/research/2026-10-gcc-gym-software/whatsapp.md. Every quote was read on its page on 22 Oct 2026.
// Gym Thing points use modules.ts and the-gym-thing (lib/contact/whatsapp.ts, payment-link-share-dialog.tsx,
// pos receipt-dialog.tsx): WhatsApp is a one-tap chat with a ready message. Automations send email only.
export const post: Post = {
  slug: 'running-a-gym-on-whatsapp',
  date: '2026-10-22',
  checked: '2026-10-22',
  tags: ['running-the-gym', 'gulf'],
  en: {
    title: 'Running a gym on WhatsApp in the Gulf',
    seoTitle: 'WhatsApp for gyms in the Gulf: payments, renewals and the rules',
    description:
      'Members in the Gulf message their gym on WhatsApp first. How to take payments, send receipts and answer renewals there, and the Meta rules gyms should know.',
    lede: 'In the Gulf, a member who wants to renew, freeze or cancel doesn’t open your app or write an email. They message you on WhatsApp. That can be the fastest way to get paid, or the place where members wait for a reply that never comes. Here’s what the numbers say, where gyms get it wrong, the rules Meta sets, and how to run the desk on WhatsApp without losing track.',
    blocks: [
      {
        type: 'note',
        text: 'The complaints here are quoted from member reviews, each one person’s experience, without their name.',
      },

      { type: 'heading', id: 'members', text: 'Your members already live on WhatsApp' },
      {
        type: 'text',
        paras: [
          'Saudi Arabia’s Communications, Space and Technology Commission puts WhatsApp at the top of its 2025 internet report: 92.7% of internet users in the Kingdom use it, ahead of Snapchat and TikTok. Use is highest among people aged 30 to 59, which is most of a gym’s paying members.',
          'Other Gulf countries publish fewer figures, but the habit is the same. Members send a voice note to the front desk before they think of the app.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"WhatsApp remained the most widely used social media platform, with a usage rate of 92.7 percent, followed by Snapchat at 83.6 percent and TikTok at 77 percent."',
            source: 'Arab News on the CST Saudi Internet Report 2025',
            url: 'https://www.arabnews.com/saudi-arabia/saudi-arabia-ranks-among-top-g20-performers-in-mobile-internet-speeds-report-finds-2652325',
            date: '26 Jul 2026',
          },
          {
            quote: '"Most internet users in Qatar use WhatsApp (93%)"',
            source: 'Northwestern University in Qatar, Media Use in the Middle East',
            url: 'https://mideastmedia.org/survey/2017/chapter/focus-on-qatar/',
            date: '2017',
          },
        ],
      },

      { type: 'heading', id: 'unanswered', text: 'Where it goes wrong: the WhatsApp nobody answers' },
      {
        type: 'text',
        paras: [
          'The complaints we found weren’t about WhatsApp itself. They were about gyms that put a number on the wall and then didn’t answer it, usually at the moment money was involved: a renewal, a sign-up, a cancellation.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"…complaints don’t work, and neither does the WhatsApp…"',
            source: 'App Store review of a gym app in Saudi Arabia',
            date: '11 Jun 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"…I message you on WhatsApp and you don’t reply, ridiculous."',
            source: 'App Store review of a gym app in Saudi Arabia',
            date: '30 Mar 2026',
            note: 'translated from Arabic',
          },
          {
            quote: '"They don’t respond on whatsapp when you ask for cancellation."',
            source: 'App Store review of a gym app in the UAE',
            date: '22 Sep 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'The fix is less about answering faster and more about the desk being able to act inside the chat: see the member’s plan, send the payment, send the receipt.',
        ],
      },
      {
        type: 'answer',
        heading: 'Every member one tap from a chat',
        points: [
          'Open a WhatsApp chat with any member straight from their profile or the members list.',
          'Their plan, days left, visits and payments are on the same page, so the answer is right there.',
          'Each chat opens on your own WhatsApp, and a person on your team presses send.',
        ],
        module: 'members',
      },

      { type: 'heading', id: 'pay', text: 'Send the payment, not just a reminder' },
      {
        type: 'text',
        paras: [
          'A reminder that says “please come to the desk to renew” is a job for later. A message with the payment in it is done in a minute. The member taps, pays by card, Apple Pay or Google Pay, and the plan is renewed before they put the phone down.',
        ],
      },
      {
        type: 'answer',
        heading: 'Payment links on WhatsApp',
        points: [
          'Send a payment link with a ready message in Arabic or English: name, plan, amount and expiry filled in.',
          'The link shows your logo and the plan in the chat, and the pay page opens in Arabic or English.',
          'Members pay by card, Apple Pay or Google Pay, and in Bahrain BenefitPay. The membership starts and the sale is recorded once they pay.',
          'Every link sits in one list as open, paid, expired or cancelled, so nothing is chased twice.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks+screen:PayPage',
        caption:
          'Payment links at ABC Gym, and the page a member opens from WhatsApp. Switch the page to Arabic at the top.',
      },

      { type: 'heading', id: 'receipts', text: 'Receipts and reminders' },
      {
        type: 'text',
        paras: [
          'After a sale at the desk, the receipt can go to the member’s WhatsApp instead of the bin. Renewal, birthday and win-back reminders can go out by email on their own, and the desk follows up on WhatsApp when a member needs a nudge.',
        ],
      },
      {
        type: 'answer',
        heading: 'From the till to the chat',
        points: [
          'One button after a sale opens the member’s WhatsApp with the receipt filled in, or you print it.',
          'Automations email members before a plan ends, on their birthday or when they stop coming.',
        ],
        module: 'point-of-sale',
      },

      { type: 'heading', id: 'rules', text: 'The rules Meta sets for businesses' },
      {
        type: 'text',
        paras: [
          'WhatsApp is free to chat on, but businesses have rules. The most important for a gym: members must agree to hear from you, and they can stop you at any time. Ask for that consent on the sign-up form, and keep promotions for the members who said yes.',
          'If you use the WhatsApp Business Platform to send messages in bulk, Meta also limits what you can send outside a reply window, and charges per message.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"You may only contact people on WhatsApp if: (a) they have given you their mobile phone number or username; and (b) you have received opt-in permission from the recipient confirming that they wish to receive subsequent messages or calls from you."',
            source: 'WhatsApp Business Messaging Policy',
            url: 'https://whatsappbusiness.com/policy/',
            date: 'updated 23 Sep 2026',
          },
          {
            quote:
              '"You may reply to a user message without use of a Message Template as long as it’s within the 24-hour customer service window, which opens and resets with each user message."',
            source: 'WhatsApp Business Messaging Policy',
            url: 'https://whatsappbusiness.com/policy/',
            date: 'updated 23 Sep 2026',
          },
        ],
      },

      { type: 'heading', id: 'checklist', text: 'A WhatsApp checklist for the front desk' },
      {
        type: 'list',
        items: [
          'One gym number, on the wall, the app and the website, answered every day you’re open.',
          'Consent to messages asked for at sign-up, and a way to say stop.',
          'Payment links instead of “come to the desk”, in the member’s language.',
          'Receipts sent to the chat, so nobody asks for one twice.',
          'The member’s plan on screen before you reply, so the answer is right the first time.',
        ],
      },

      { type: 'heading', id: 'next', text: 'See it on your own members' },
      {
        type: 'text',
        paras: [
          '[Start with a free trial](/free-trial/): we set Gym Thing up with your plans and members, and your desk can send its first payment link the same day. Run it free for up to 3 months.',
          'Gym Thing for [Saudi Arabia](/gym-software/saudi-arabia/), [the UAE](/gym-software/uae/), [Qatar](/gym-software/qatar/), [Kuwait](/gym-software/kuwait/), [Oman](/gym-software/oman/) and [Bahrain](/gym-software/bahrain/). Read more on [billing that charges the right member](/blog/billing-that-charges-right/) and [the best gym software in the GCC](/blog/best-gym-software-gcc/).',
        ],
      },
      {
        type: 'note',
        text: 'Meta’s WhatsApp Business rules change, so check the current policy before you build on them.',
      },
    ],
  },
  ar: {
    title: 'إدارة النادي الرياضي عبر واتساب في الخليج',
    seoTitle: 'واتساب للنوادي الرياضية في الخليج: المدفوعات والتجديدات والقواعد',
    description:
      'يراسل الأعضاء في الخليج ناديهم عبر واتساب أولاً. كيف تستلم المدفوعات وترسل الإيصالات وترد على التجديدات عبره، وما قواعد Meta التي يجب أن يعرفها كل نادٍ.',
    lede: 'في الخليج، العضو اللي يبي يجدد أو يجمّد أو يلغي ما يفتح تطبيقك ولا يكتب إيميل. يراسلك على الواتساب. وهذا ممكن يكون أسرع طريق توصلك فيه الفلوس، أو المكان اللي ينتظر فيه العضو رد ما يجي. هني شنو تقول الأرقام، ووين تغلط النوادي، والقواعد اللي تحطها Meta، وشلون تدير الاستقبال على الواتساب بدون ما يضيع شي.',
    blocks: [
      {
        type: 'note',
        text: 'الشكاوى هني مقتبسة من مراجعات الأعضاء، كل وحدة تجربة شخص واحد، وبدون اسمه.',
      },

      { type: 'heading', id: 'members', text: 'أعضاءك أصلاً عايشين على الواتساب' },
      {
        type: 'text',
        paras: [
          'هيئة الاتصالات والفضاء والتقنية في السعودية تحط الواتساب في أول القائمة في تقرير الإنترنت لعام 2025: 92.7% من مستخدمي الإنترنت في المملكة يستخدمونه، قبل سناب شات وتيك توك. والاستخدام أعلى شي بين اللي أعمارهم من 30 لين 59، يعني أغلب الأعضاء اللي يدفعون.',
          'باقي دول الخليج تنشر أرقام أقل، بس العادة نفسها. العضو يرسل فويس للاستقبال قبل لا يفكر في التطبيق.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«ظل الواتساب أكثر منصة تواصل اجتماعي استخداماً، بنسبة 92.7 بالمئة، يليه سناب شات بـ 83.6 بالمئة وتيك توك بـ 77 بالمئة.»',
            source: 'عرب نيوز عن تقرير الإنترنت السعودي 2025 من هيئة الاتصالات',
            url: 'https://www.arabnews.com/saudi-arabia/saudi-arabia-ranks-among-top-g20-performers-in-mobile-internet-speeds-report-finds-2652325',
            date: '26 يوليو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«أغلب مستخدمي الإنترنت في قطر يستخدمون الواتساب (93%)»',
            source: 'جامعة نورثويسترن في قطر، استخدام الإعلام في الشرق الأوسط',
            url: 'https://mideastmedia.org/survey/2017/chapter/focus-on-qatar/',
            date: '2017',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'unanswered', text: 'وين تخرب: الواتساب اللي محد يرد عليه' },
      {
        type: 'text',
        paras: [
          'الشكاوى اللي لقيناها ما كانت عن الواتساب نفسه. كانت عن نوادي تحط رقم على الجدار وبعدين ما ترد عليه، وأغلب الأحيان في اللحظة اللي فيها فلوس: تجديد، أو تسجيل، أو إلغاء.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«…والشكاوي لا تعمل ولا الواتساب يعمل…»',
            source: 'مراجعة على App Store لـأحد تطبيقات النوادي في السعودية',
            date: '11 يونيو 2026',
          },
          {
            quote: '«…واراسلكم واتس ماتردون استهبال»',
            source: 'مراجعة على App Store لـأحد تطبيقات النوادي في السعودية',
            date: '30 مارس 2026',
          },
          {
            quote: '«ما يردون على الواتساب لما تطلب الإلغاء.»',
            source: 'مراجعة على App Store لـأحد تطبيقات النوادي في الإمارات',
            date: '22 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'الحل مو بس إنك ترد أسرع، الحل إن الاستقبال يقدر يسوي الشغل من داخل المحادثة: يشوف باقة العضو، ويرسل الدفع، ويرسل الإيصال.',
        ],
      },
      {
        type: 'answer',
        heading: 'كل عضو على بعد لمسة من محادثة',
        points: [
          'افتح محادثة واتساب مع أي عضو على طول من ملفه أو من قائمة الأعضاء.',
          'باقته والأيام الباقية وزياراته ومدفوعاته في نفس الصفحة، فالجواب قدامك.',
          'كل محادثة تنفتح على واتساب ناديك، وشخص من فريقك يضغط إرسال.',
        ],
        module: 'members',
      },

      { type: 'heading', id: 'pay', text: 'ارسل الدفع، مو بس تذكير' },
      {
        type: 'text',
        paras: [
          'التذكير اللي يقول «تفضل الاستقبال عشان تجدد» شغلة لبعدين. والرسالة اللي فيها الدفع تخلص في دقيقة. العضو يضغط، ويدفع بالبطاقة أو Apple Pay أو Google Pay، والباقة تتجدد قبل لا يحط التلفون.',
        ],
      },
      {
        type: 'answer',
        heading: 'روابط الدفع على الواتساب',
        points: [
          'ارسل رابط دفع مع رسالة جاهزة بالعربي أو الإنجليزي: الاسم والباقة والمبلغ وتاريخ الانتهاء معبّية.',
          'الرابط يطلع بشعارك والباقة في المحادثة، وصفحة الدفع تنفتح بالعربي أو الإنجليزي.',
          'الأعضاء يدفعون بالبطاقة أو Apple Pay أو Google Pay، وفي البحرين BenefitPay. والاشتراك يبدأ والبيعة تنسجل أول ما يدفعون.',
          'كل الروابط في قائمة وحدة: مفتوح، أو مدفوع، أو منتهي، أو ملغي، فما تلاحق شي مرتين.',
        ],
        module: 'payments',
      },
      {
        type: 'screen',
        show: 'screen:PayLinks+screen:PayPage',
        caption: 'روابط الدفع في ABC Gym، والصفحة اللي يفتحها العضو من الواتساب. حوّل الصفحة للعربي من فوق.',
      },

      { type: 'heading', id: 'receipts', text: 'الإيصالات والتذكيرات' },
      {
        type: 'text',
        paras: [
          'بعد البيعة في الاستقبال، الإيصال يقدر يروح لواتساب العضو بدل الزبالة. وتذكيرات التجديد وأعياد الميلاد واللي غابوا تطلع بالإيميل بروحها، والاستقبال يتابع على الواتساب لما العضو يحتاج دفّة.',
        ],
      },
      {
        type: 'answer',
        heading: 'من الكاشير للمحادثة',
        points: [
          'زر واحد بعد البيعة يفتح واتساب العضو والإيصال معبّى، أو تطبعه.',
          'الأتمتة ترسل إيميل للأعضاء قبل لا تخلص الباقة، وفي يوم ميلادهم، ولما يوقفون يجون.',
        ],
        module: 'point-of-sale',
      },

      { type: 'heading', id: 'rules', text: 'القواعد اللي تحطها Meta للأعمال' },
      {
        type: 'text',
        paras: [
          'المحادثة على الواتساب ببلاش، بس للأعمال قواعد. أهمها للنادي: الأعضاء لازم يوافقون إنهم يسمعون منك، ويقدرون يوقفونك أي وقت. اطلب هالموافقة في استمارة التسجيل، وخل العروض للأعضاء اللي قالوا نعم.',
          'ولو تستخدم منصة WhatsApp Business عشان ترسل رسائل بالجملة، Meta تحدد بعد شنو تقدر ترسل برا نافذة الرد، وتحاسب على كل رسالة.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«ما يحق لك تتواصل مع الناس على الواتساب إلا إذا: (أ) عطوك رقم تلفونهم أو اسم المستخدم؛ و(ب) حصلت على موافقة من المستلم تأكد إنه يبي يستقبل رسائل أو مكالمات منك بعدين.»',
            source: 'سياسة رسائل WhatsApp Business',
            url: 'https://whatsappbusiness.com/policy/',
            date: 'محدّثة في 23 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              '«تقدر ترد على رسالة المستخدم بدون قالب رسالة ما دام الرد داخل نافذة خدمة العملاء اللي مدتها 24 ساعة، واللي تنفتح وتبدأ من جديد مع كل رسالة من المستخدم.»',
            source: 'سياسة رسائل WhatsApp Business',
            url: 'https://whatsappbusiness.com/policy/',
            date: 'محدّثة في 23 سبتمبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },

      { type: 'heading', id: 'checklist', text: 'قائمة الواتساب للاستقبال' },
      {
        type: 'list',
        items: [
          'رقم واحد للنادي، على الجدار وفي التطبيق والموقع، ويرد عليه كل يوم تفتحون فيه.',
          'موافقة على الرسائل تنطلب في التسجيل، وطريقة يقول فيها العضو وقف.',
          'روابط دفع بدل «تعال الاستقبال»، بلغة العضو.',
          'الإيصالات تنرسل للمحادثة، فمحد يطلبها مرتين.',
          'باقة العضو قدامك قبل لا ترد، عشان يكون الجواب صح من أول مرة.',
        ],
      },

      { type: 'heading', id: 'next', text: 'شوفه على أعضاءك' },
      {
        type: 'text',
        paras: [
          '[ابدأ بتجربة مجانية](/ar/free-trial/): نجهز Gym Thing بباقاتك وأعضاءك، والاستقبال يقدر يرسل أول رابط دفع في نفس اليوم. وشغّله ببلاش لين 3 شهور.',
          'Gym Thing لـ[السعودية](/ar/gym-software/saudi-arabia/) و[الإمارات](/ar/gym-software/uae/) و[قطر](/ar/gym-software/qatar/) و[الكويت](/ar/gym-software/kuwait/) و[عُمان](/ar/gym-software/oman/) و[البحرين](/ar/gym-software/bahrain/). واقرأ أكثر عن [الدفع اللي يوصل من العضو الصح](/ar/blog/billing-that-charges-right/) و[أفضل برامج النوادي في الخليج](/ar/blog/best-gym-software-gcc/).',
        ],
      },
      {
        type: 'note',
        text: 'قواعد واتساب للأعمال من Meta تتغير، فتأكد من السياسة الحالية قبل لا تبني عليها.',
      },
    ],
  },
}
