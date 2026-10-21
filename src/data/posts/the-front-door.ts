import type { Post } from '../posts'

// Sources: docs/research/2026-10-gym-software-complaints (report.html), plus App Store and Trustpilot pages read
// on 21 Oct 2026. Every quote was read on its source page. Gym Thing answers only use what the report claims.
export const post: Post = {
  slug: 'the-front-door',
  date: '2026-10-21',
  checked: '2026-10-21',
  tags: ['front-door', 'gym-software'],
  en: {
    title: 'The front door: why gym check-ins fail, and what a good setup needs',
    seoTitle: 'Gym check-in problems: why the door fails and how to fix it',
    description:
      'QR codes that fail, doors that want your face, refusals with no reason and members who leave for 24/7 access. Why gym check-ins break, and what to ask for.',
    lede: "The door is the one part of your software every member touches on every visit. It's also where a small software fault turns into a queue, an angry member and a front desk letting people in by hand. We read what members and owners wrote about getting into the gym, from 2023 to October 2026. The same few failures came up again and again. Here's why they happen, what to ask before you sign, and how Gym Thing handles the door.",
    blocks: [
      {
        type: 'note',
        text: "This post goes deeper on one of the twelve problems in [What gym owners are fed up with in their software](/blog/gym-software-problems/). Every quote links to the page we read it on, with its date. A review is one person's experience, not proof of how every gym gets on with a product.",
      },

      { type: 'heading', id: 'qr-fails', text: 'When the app is the only key' },
      {
        type: 'text',
        paras: [
          "FLYBY is club software from Senkron Tech in Istanbul. Clubs that use it get a member app in their own name, and the app's QR code is how members get through the door. Its member reviews in Turkey keep coming back to that code.",
          'The reason is a chain. The code needs the app, the app needs a login, the login needs the latest update, and in these reviews the app also needs the phone to be registered for QR. When one link breaks, the member is standing at the turnstile with a paid membership and nothing to scan.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              "\"It gives the error 'This device is not registered for QR'. It hasn't generated a QR code for a month.\"",
            source: 'Google Play review of Club Sporium',
            url: 'https://play.google.com/store/apps/details?id=net.senkron.lapis.clubsporium',
            date: '18 Jun 2026',
            note: 'translated from Turkish',
          },
          {
            quote: '"It gives the warning \'This device is not registered for QR\'."',
            source: 'App Store review of Shape Club',
            url: 'https://apps.apple.com/tr/app/id6737225089?see-all=reviews',
            date: '20 Apr 2026',
            note: 'translated from Turkish',
          },
          {
            quote:
              '"The barcode I used to get in has been deleted, and it doesn\'t come by the app any more. Not a barcode, more like an ex… Nobody calls, nobody asks :)"',
            source: 'App Store review of AKRA FIT',
            url: 'https://apps.apple.com/tr/app/id6743120234?see-all=reviews',
            date: '17 Jun 2025',
            note: 'translated from Turkish',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          "Now the front desk has two bad choices. Let the member in by hand, and nobody checks the plan. Send them home, and you've turned away someone who paid. Do the first often enough and the door stops protecting your income at all.",
        ],
      },
      {
        type: 'answer',
        heading: 'More than one key to the same door',
        points: [
          'Members get in with a QR code in the app, a pass in Apple or Google Wallet, or a tap of their phone on a reader.',
          "A wallet pass opens straight from the lock screen. There's no app to open, log in to or update at the door.",
          'The app code refreshes itself every few seconds, so a screenshot passed to a friend is turned away.',
          "If a member really can't scan, staff record the visit by hand, so it still shows in the check-ins log.",
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:MemberApp',
        caption:
          'The member app: the check-in QR code with plan status and days left, and the pass for the phone wallet.',
      },

      { type: 'heading', id: 'face', text: 'When the door wants your face' },
      {
        type: 'text',
        paras: [
          'Gymnago, from Pixel Mind IT Solutions W.L.L. in Bahrain, publishes a branded app for each gym it serves. A member of one of those gyms, Gym 650, wrote that the app switched off code entry and asks for their face instead.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"Is not activating the bar Code entry feature, instead it uses Face Id … Which has personal data risk. Other Gyms uses QR code in the App."',
            source: 'App Store review of Gym 650',
            url: 'https://apps.apple.com/sa/app/id6741509582',
            date: '3 Aug 2025',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          "That member isn't being difficult. A face is personal data that can't be changed like a password, and some members won't hand it over to get into a gym. When the door offers only one way in, every member who says no to it is a member at the front desk, or at another gym.",
        ],
      },
      {
        type: 'answer',
        heading: 'A code, a pass or a tap, on the hardware you choose',
        points: [
          "Gym Thing doesn't scan faces. Members show a code or a wallet pass, or tap their phone.",
          "The reception iPad shows the member's photo with every welcome, so staff can see it's really them.",
          'Use Gantner turnstile readers, phone-tap readers, or just an iPad at reception with no turnstile at all.',
        ],
        module: 'access-control',
      },

      { type: 'heading', id: 'reasons', text: 'When the door says no, and nobody knows why' },
      {
        type: 'text',
        paras: [
          "Most doors only know two answers: green or red. An expired plan, a frozen plan, the wrong branch, the wrong hour and a broken code all look the same from the outside. The member doesn't know what to fix, and neither does your team.",
          'These two reviews are from members of PureGym, a large UK gym chain, not about a software vendor. They show what a refusal with no reason costs, whoever made the door.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '"I planned my morning around the gym and yet again can’t in- no email, no reason, membership paid, tried QR code, tried pin. I get let in the pod then let straight back out the way I came."',
            source: 'Trustpilot review of PureGym UK',
            url: 'https://www.trustpilot.com/reviews/6a368cac6c6ee27ee8590fd8',
            date: '20 Jun 2026',
          },
          {
            quote:
              '"The gym id amazing and the staff there are very kind and friendly thankfully they let me in after waiting an 1h-30 minutes of waiting outside because the subscription wasnt working"',
            source: 'Trustpilot review of PureGym UK',
            url: 'https://www.trustpilot.com/reviews/6ac42ac40243da732fc69f42',
            date: '6 Oct 2026',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'An hour and a half outside is an hour and a half of a paying member deciding whether to come back. With a reason on the screen, most of those cases take a minute: renew the plan, unfreeze it, or point the member to the right branch.',
        ],
      },
      {
        type: 'answer',
        heading: 'Every refusal comes with its reason',
        points: [
          'Every scan is logged with the member, the reader, the result and the reason.',
          'Reasons are plain: membership expired, frozen or not started, outside access hours, not allowed at this branch, no visit days left, code expired.',
          'Staff see the real reason. The member sees a polite version, and a flagged member is asked to see staff.',
          'The reception iPad says the reason out loud, so nobody has to guess.',
          "Each reader shows whether it's online and when it last made contact, so a dead reader isn't a mystery.",
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns+flow:access',
        caption: 'Every door scan in Gym Thing, with the reason for each refusal, and every way members get in.',
      },

      { type: 'heading', id: 'open-gym', text: 'When members want the gym outside class times' },
      {
        type: 'text',
        paras: [
          "Some members don't want more classes. They want more hours. If your door can't tell a class member from an open-gym member, the only safe choice is to keep it shut outside staffed hours, and those members go somewhere that opens earlier.",
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '"If my box offered out of hours access or an open gym only membership I would have never left."',
            source: 'Comment in r/crossfit with 32 upvotes',
            url: 'https://reddit.com/r/crossfit/comments/1x735pn/comment/ph2dgow/',
            date: 'Oct 2026',
          },
          {
            quote: '"I actually left a gym because they didn\'t have sufficient open gym times or 24/7 access."',
            source: 'Comment in r/crossfit',
            url: 'https://www.reddit.com/r/crossfit/comments/1x735pn/gym_owners/',
            date: 'Oct 2026',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'Plans with their own door hours',
        points: [
          "Sell open gym, off-peak, ladies' hours or 10-visit passes, each with its own days, hours and branches. A plan can also stay open 24/7.",
          'The door checks those rules on every scan. An off-peak member at 7pm is refused with "Outside access hours".',
          "On a visit pass, the first entry of the day uses a visit, and coming back later that day doesn't.",
          'Each plan shows its rules in one line, like weekdays, 6am to 10pm, all branches.',
        ],
        module: 'memberships',
      },

      { type: 'heading', id: 'checklist', text: 'Questions to ask before you sign' },
      {
        type: 'text',
        paras: [
          "Ask these in the demo, and then check them at your own door with your own members. A vendor's slides won't tell you what happens at 6am on a Friday.",
        ],
      },
      {
        type: 'list',
        items: [
          "How many ways can a member get in? Ask for at least two that don't depend on the same app loading.",
          "What happens when a phone is dead or the code won't show? There should be a way to record the visit by hand, so it still counts.",
          'What does the member see when the door says no? Ask to see the refusal for an expired plan, a frozen plan and the wrong hour.',
          'Where does my team see why someone was refused? It should be in a log, by name, within seconds.',
          'Can each plan have its own days, hours and branches, and does the door enforce them? Set up an off-peak plan in front of the vendor and try to get in outside its hours.',
          'Does it work with the hardware I already have, and do I need turnstiles at all?',
          'Does the door need a face, a fingerprint or anything else members might not want to give?',
          'When a reader stops working, how will I know, and who answers the phone on a weekend?',
        ],
      },
      {
        type: 'answer',
        heading: 'How Gym Thing answers that list',
        points: [
          'QR code, Apple or Google Wallet pass, phone tap, Gantner turnstiles or an iPad at reception. Pick what suits your gym.',
          'Only members with a valid plan get in, and every refusal shows the reason.',
          'Support on WhatsApp, phone and email, 7 days a week, with same-day replies.',
          'Try it at your own door with your real members, free for up to 3 months, before you pay. [Start with a free trial](/free-trial/).',
        ],
        module: 'access-control',
      },
      {
        type: 'text',
        paras: [
          'Comparing systems? See how the door works in [Gym Thing and FLYBY](/compare/flyby/) and [Gym Thing and Gymnago](/compare/gymnago/), or read the full list of [problems owners keep reporting](/blog/gym-software-problems/).',
          'If your members get in with an app, read [Why gym member apps break, and what to ask before you pick one](/blog/member-apps-that-work/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'About the sources' },
      {
        type: 'note',
        text: "English quotes are copied exactly as written, including the reviewers' spelling. Quotes from Turkish reviews are our own translations. We left out reviewers' names. Dates are when the review was posted. FLYBY and Gymnago are linked to these apps through the publisher account and app package names. We checked every source on 21 Oct 2026.",
      },
    ],
  },
  ar: {
    title: 'باب النادي: لماذا يتعطل تسجيل الدخول، وما الذي يحتاجه نظام دخول جيد',
    seoTitle: 'مشاكل تسجيل الدخول في النوادي الرياضية: لماذا يتعطل الباب وكيف تتجنبها',
    description:
      'رموز QR تتعطل، وأبواب تطلب بصمة الوجه، ورفض بلا سبب، وأعضاء يغادرون بحثاً عن دخول على مدار الساعة. لماذا يتعطل تسجيل الدخول في النوادي، وما الذي ينبغي أن تطلبه.',
    lede: 'الباب هو الجزء الوحيد من البرنامج اللي كل عضو يلمسه في كل زيارة. وهو بعد المكان اللي فيه أي خلل صغير في البرنامج يصير طابور، وعضو زعلان، واستقبال يدخّل الناس بيده. قرينا شنو كتبوا الأعضاء وأصحاب النوادي عن الدخول للنادي، من 2023 لين أكتوبر 2026. ونفس المشاكل تكررت وايد. هني ليش تصير، وشنو تسأل قبل لا توقّع، وشلون يتعامل Gym Thing مع الباب.',
    blocks: [
      {
        type: 'note',
        text: 'هالمقال يتعمق في وحدة من الـ 12 مشكلة اللي في [شنو اللي مضايق أصحاب النوادي في برامجهم](/ar/blog/gym-software-problems/). كل اقتباس مربوط بالصفحة اللي قريناه فيها، مع تاريخه. والمراجعة تجربة شخص واحد، مو دليل على تجربة كل نادي مع البرنامج.',
      },

      { type: 'heading', id: 'qr-fails', text: 'لما يكون التطبيق هو المفتاح الوحيد' },
      {
        type: 'text',
        paras: [
          'FLYBY برنامج للأندية من Senkron Tech في إسطنبول. الأندية اللي تستخدمه ياخذون تطبيق للأعضاء باسمهم، ورمز QR في التطبيق هو طريقة الأعضاء للدخول من الباب. ومراجعات الأعضاء في تركيا ترجع لهالرمز كل شوي.',
          'السبب سلسلة. الرمز يحتاج التطبيق، والتطبيق يحتاج تسجيل دخول، وتسجيل الدخول يحتاج آخر تحديث، وفي هالمراجعات التطبيق يحتاج بعد إن التلفون يكون مسجّل لرمز QR. ولما تنقطع حلقة وحدة، العضو يوقف عند البوابة واشتراكه مدفوع وما عنده شي يمسحه.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«يطلع خطأ "هذا الجهاز غير مسجّل لرمز QR". وصار له شهر ما يطلّع رمز QR.»',
            source: 'مراجعة على Google Play لتطبيق Club Sporium',
            url: 'https://play.google.com/store/apps/details?id=net.senkron.lapis.clubsporium',
            date: '18 يونيو 2026',
            note: 'مترجم من التركية',
          },
          {
            quote: '«يطلع تنبيه "هذا الجهاز غير مسجّل لرمز QR".»',
            source: 'مراجعة على App Store لتطبيق Shape Club',
            url: 'https://apps.apple.com/tr/app/id6737225089?see-all=reviews',
            date: '20 أبريل 2026',
            note: 'مترجم من التركية',
          },
          {
            quote:
              '«الباركود اللي كنت أدخل فيه انمسح، وما عاد يمر على التطبيق أبد. مو باركود، كأنه حبيب سابق… لا أحد يتصل ولا أحد يسأل :)»',
            source: 'مراجعة على App Store لتطبيق AKRA FIT',
            url: 'https://apps.apple.com/tr/app/id6743120234?see-all=reviews',
            date: '17 يونيو 2025',
            note: 'مترجم من التركية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'الحين الاستقبال عنده خيارين، وثنينهم شينين. يدخّل العضو بيده، وما أحد يتأكد من الباقة. أو يرجّعه البيت، وتكون رديت واحد دافع. ولو صار الخيار الأول وايد، الباب ما عاد يحمي دخلك أبد.',
        ],
      },
      {
        type: 'answer',
        heading: 'أكثر من مفتاح لنفس الباب',
        points: [
          'الأعضاء يدخلون برمز QR في التطبيق، أو ببطاقة في Apple Wallet أو Google Wallet، أو بلمسة بالتلفون على القارئ.',
          'البطاقة في المحفظة تنفتح على طول من شاشة القفل. ما في تطبيق تفتحه ولا تسجّل دخول فيه ولا تحدّثه عند الباب.',
          'رمز التطبيق يتجدد بروحه كل كم ثانية، فلو أحد عطى صديقه صورة شاشة، الباب يرفضها.',
          'ولو العضو صج ما قدر يمسح، الموظف يسجّل الزيارة بيده، فتبين في سجل الدخول.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:MemberApp',
        caption: 'تطبيق الأعضاء: رمز QR للدخول مع حالة الباقة والأيام الباقية، والبطاقة لمحفظة التلفون.',
      },

      { type: 'heading', id: 'face', text: 'لما الباب يبي وجهك' },
      {
        type: 'text',
        paras: [
          'Gymnago من Pixel Mind IT Solutions W.L.L. في البحرين، تنشر تطبيق باسم كل نادي تخدمه. وعضو في وحدة من هالنوادي، Gym 650، كتب إن التطبيق وقّف الدخول بالرمز وصار يطلب وجهه بداله.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«ما يفعّل خاصية الدخول بالباركود، وبدالها يستخدم Face ID… وهذا فيه خطر على البيانات الشخصية. النوادي الثانية تستخدم رمز QR في التطبيق.»',
            source: 'مراجعة على App Store لتطبيق Gym 650',
            url: 'https://apps.apple.com/sa/app/id6741509582',
            date: '3 أغسطس 2025',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'هالعضو مو قاعد يعاند. الوجه بيانات شخصية ما تقدر تغيّرها مثل كلمة السر، وفي أعضاء ما يبون يعطونه عشان يدخلون نادي. ولما الباب ما فيه إلا طريقة وحدة للدخول، كل عضو يرفضها يصير عضو واقف عند الاستقبال، أو في نادي ثاني.',
        ],
      },
      {
        type: 'answer',
        heading: 'رمز، أو بطاقة، أو لمسة، على الأجهزة اللي تختارها',
        points: [
          'Gym Thing ما يمسح الوجوه. الأعضاء يطلّعون رمز أو بطاقة في المحفظة، أو يلمسون بالتلفون.',
          'الـ iPad في الاستقبال يطلّع صورة العضو مع كل ترحيب، عشان الموظف يشوف إنه هو نفسه.',
          'استخدم قارئات بوابات Gantner الدوّارة، أو قارئات اللمس بالتلفون، أو بس iPad في الاستقبال بدون أي بوابة.',
        ],
        module: 'access-control',
      },

      { type: 'heading', id: 'reasons', text: 'لما الباب يقول لا، وما أحد يعرف ليش' },
      {
        type: 'text',
        paras: [
          'أغلب الأبواب ما تعرف إلا جوابين: أخضر أو أحمر. باقة منتهية، أو باقة مجمّدة، أو فرع غلط، أو وقت غلط، أو رمز خربان، كلها تبين نفس الشي من برّا. العضو ما يعرف شنو يصلّح، ولا فريقك يعرف.',
          'هالمراجعتين من أعضاء في PureGym، سلسلة نوادي كبيرة في بريطانيا، مو عن شركة برامج. بس تبين شكثر يكلّف الرفض بدون سبب، أياً كان اللي مسوي الباب.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote:
              '«رتبت صباحي على النادي ومرة ثانية ما قدرت أدخل، لا إيميل، ولا سبب، والاشتراك مدفوع، جربت رمز QR، وجربت الرقم السري. تدخّلني كبينة الدخول وبعدين ترجّعني برّا على طول من نفس المكان اللي جيت منه.»',
            source: 'مراجعة على Trustpilot لـ PureGym UK',
            url: 'https://www.trustpilot.com/reviews/6a368cac6c6ee27ee8590fd8',
            date: '20 يونيو 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote:
              '«النادي رهيب والموظفين وايد لطيفين وودودين، والحمد لله دخّلوني بعد ما انتظرت ساعة ونص برّا لأن الاشتراك ما كان يشتغل»',
            source: 'مراجعة على Trustpilot لـ PureGym UK',
            url: 'https://www.trustpilot.com/reviews/6ac42ac40243da732fc69f42',
            date: '6 أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'text',
        paras: [
          'ساعة ونص برّا يعني ساعة ونص والعضو اللي دافع يفكّر إذا بيرجع ولا لا. ولو السبب طالع على الشاشة، أغلب هالحالات تنحل في دقيقة: جدّد الباقة، أو فك التجميد، أو وجّه العضو للفرع الصح.',
        ],
      },
      {
        type: 'answer',
        heading: 'كل رفض يجي معاه السبب',
        points: [
          'كل مسح ينحفظ في السجل مع العضو، والقارئ، والنتيجة، والسبب.',
          'الأسباب واضحة: الاشتراك منتهي أو مجمّد أو ما بدا، برّا ساعات الدخول، غير مسموح في هالفرع، ما بقى أيام زيارة، الرمز منتهي.',
          'الموظف يشوف السبب الحقيقي، والعضو يشوف صيغة مهذبة، والعضو المؤشَّر عليه ينطلب منه يراجع الموظفين.',
          'الـ iPad في الاستقبال يقول السبب بصوت، عشان ما أحد يخمّن.',
          'كل قارئ يبين إذا هو شغّال ومتى آخر مرة تواصل، فالقارئ الواقف ما يصير لغز.',
        ],
        module: 'access-control',
      },
      {
        type: 'screen',
        show: 'screen:CheckIns+flow:access',
        caption: 'كل عملية دخول في Gym Thing مع سبب كل رفض، وكل الطرق اللي يدخل فيها الأعضاء.',
      },

      { type: 'heading', id: 'open-gym', text: 'لما الأعضاء يبون النادي برّا أوقات الحصص' },
      {
        type: 'text',
        paras: [
          'في أعضاء ما يبون حصص زيادة. يبون ساعات أكثر. ولو بابك ما يفرّق بين عضو الحصص وعضو الصالة المفتوحة، الخيار الآمن الوحيد إنك تسكره برّا ساعات الدوام، وهالأعضاء يروحون لمكان يفتح أبكر.',
        ],
      },
      {
        type: 'quotes',
        items: [
          {
            quote: '«لو النادي حقي كان فيه دخول برّا الأوقات أو اشتراك للصالة المفتوحة بس، ما كان تركته أبداً.»',
            source: 'تعليق في r/crossfit عليه 32 تصويت',
            url: 'https://reddit.com/r/crossfit/comments/1x735pn/comment/ph2dgow/',
            date: 'أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
          {
            quote: '«صراحة تركت نادي لأنه ما كان فيه أوقات كافية للصالة المفتوحة أو دخول 24/7.»',
            source: 'تعليق في r/crossfit',
            url: 'https://www.reddit.com/r/crossfit/comments/1x735pn/gym_owners/',
            date: 'أكتوبر 2026',
            note: 'مترجم من الإنجليزية',
          },
        ],
      },
      {
        type: 'answer',
        heading: 'باقات لها ساعات دخول خاصة فيها',
        points: [
          'بيع باقات الصالة المفتوحة، أو أوقات خارج الذروة، أو ساعات السيدات، أو باقة 10 زيارات، وكل وحدة لها أيامها وساعاتها وفروعها. والباقة تقدر بعد تكون مفتوحة 24/7.',
          'الباب يتأكد من هالقواعد مع كل مسح. عضو باقة خارج الذروة لو جا الساعة 7 بالليل، ينرفض والسبب «برّا ساعات الدخول».',
          'في باقة الزيارات، أول دخول في اليوم ياخذ زيارة، ولو رجع بعدين في نفس اليوم ما تنحسب.',
          'كل باقة تبين قواعدها في سطر واحد، مثل: أيام الأسبوع، من 6 الصبح لين 10 بالليل، كل الفروع.',
        ],
        module: 'memberships',
      },

      { type: 'heading', id: 'checklist', text: 'أسئلة تسألها قبل لا توقّع' },
      {
        type: 'text',
        paras: [
          'اسأل هالأسئلة في العرض التجريبي، وبعدين جرّبها على بابك ومع أعضاءك. عروض الشركة ما بتقول لك شنو يصير الساعة 6 الصبح يوم الجمعة.',
        ],
      },
      {
        type: 'list',
        items: [
          'كم طريقة عند العضو عشان يدخل؟ اطلب طريقتين على الأقل ما يعتمدون على نفس التطبيق إنه يشتغل.',
          'شنو يصير لما التلفون طافي أو الرمز ما يطلع؟ لازم يكون في طريقة تسجّل فيها الزيارة باليد، عشان تنحسب.',
          'شنو يشوف العضو لما الباب يقول لا؟ اطلب تشوف الرفض لباقة منتهية، وباقة مجمّدة، ووقت غلط.',
          'وين يشوف فريقك ليش انرفض العضو؟ لازم يكون في سجل، بالاسم، خلال ثواني.',
          'كل باقة تقدر يكون لها أيامها وساعاتها وفروعها، والباب يطبّقها؟ سوّ باقة خارج الذروة قدام الشركة وجرّب تدخل فيها برّا ساعاتها.',
          'يشتغل مع الأجهزة اللي عندك؟ وتحتاج بوابات دوّارة أصلاً؟',
          'الباب يحتاج وجه، أو بصمة، أو أي شي ثاني يمكن الأعضاء ما يبون يعطونه؟',
          'لما قارئ يوقف، شلون بتعرف؟ ومنو يرد على التلفون في الويكند؟',
        ],
      },
      {
        type: 'answer',
        heading: 'شلون يجاوب Gym Thing على هالقائمة',
        points: [
          'رمز QR، أو بطاقة في Apple Wallet أو Google Wallet، أو لمسة بالتلفون، أو بوابات Gantner الدوّارة، أو iPad في الاستقبال. اختار اللي يناسب ناديك.',
          'ما يدخل إلا العضو اللي باقته صالحة، وكل رفض يبين السبب.',
          'دعم على واتساب وتلفون وإيميل، 7 أيام في الأسبوع، والرد في نفس اليوم.',
          'جرّبه على بابك ومع أعضاءك الحقيقيين، مجاناً لين 3 شهور، قبل لا تدفع. [ابدأ بتجربة مجانية](/ar/free-trial/).',
        ],
        module: 'access-control',
      },
      {
        type: 'text',
        paras: [
          'تقارن بين الأنظمة؟ شوف شلون يشتغل الباب في [Gym Thing مقابل FLYBY](/ar/compare/flyby/) و[Gym Thing مقابل Gymnago](/ar/compare/gymnago/)، أو اقرأ القائمة كاملة عن [المشاكل اللي يشتكي منها أصحاب النوادي](/ar/blog/gym-software-problems/).',
          'وإذا أعضاءك يدخلون بالتطبيق، اقرأ [لماذا تتعطّل تطبيقات أعضاء النوادي الرياضية، وما الذي ينبغي أن تسأل عنه قبل الاختيار](/ar/blog/member-apps-that-work/).',
        ],
      },

      { type: 'heading', id: 'sources', text: 'عن المصادر' },
      {
        type: 'note',
        text: 'الاقتباسات من مراجعات بالإنجليزي والتركي ترجمتنا إحنا. ما ذكرنا أسماء المراجعين. والتواريخ هي تاريخ نشر المراجعة. ربطنا FLYBY وGymnago بهالتطبيقات عن طريق حساب الناشر وأسماء حزم التطبيقات. وتأكدنا من كل المصادر في 21 أكتوبر 2026.',
      },
    ],
  },
}
