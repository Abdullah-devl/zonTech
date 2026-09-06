const fs = require('fs');

const data = {
  "site": {
    "title": "قالب Cosmix HTML5 متجاوب | Template Stock",
    "logo": "images/Logo/01.png"
  },
  "slider": [
    {
      "bgImage": "images/Slider/01.jpg",
      "heading": "نحن Cosmix",
      "subheading": "قوالب إبداعية",
      "description": "Cosmix – قالب من صفحة واحدة، HTML5 ومتجاوب، مناسب لأي وكالة أعمال إبداعية. يتضمن هذا القالب صفحات متعددة مع الكثير من حركات CSS و JQuery."
    },
    {
      "bgImage": "images/Slider/02.jpg",
      "heading": "نحن Cosmix",
      "subheading": "قوالب إبداعية",
      "description": "Cosmix – قالب من صفحة واحدة، HTML5 ومتجاوب، مناسب لأي وكالة أعمال إبداعية. يتضمن هذا القالب صفحات متعددة مع الكثير من حركات CSS و JQuery."
    },
    {
      "bgImage": "images/Slider/03.jpg",
      "heading": "نحن Cosmix",
      "subheading": "قوالب إبداعية",
      "description": "Cosmix – قالب من صفحة واحدة، HTML5 ومتجاوب، مناسب لأي وكالة أعمال إبداعية. يتضمن هذا القالب صفحات متعددة مع الكثير من حركات CSS و JQuery."
    }
  ],
  "about": {
    "sectionTitle": "من <span>نحن</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "subheading": "<span>ن</span>حن مبدعون ورائعون",
    "text": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
    "image": "images/Aboutus/01.jpg"
  },
  "promo": {
    "title": "قالب صفحة واحدة مجاني بجودة عالية",
    "subtitle": "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    "buttonText": "تحميل",
    "buttonLink": "#"
  },
  "services": {
    "sectionTitle": "خدمات<span>نا</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "items": [
      {
        "icon": "fa-line-chart",
        "title": "تصميم تجربة المستخدم (UX)",
        "description": "مدعوم من بعض أكبر الأسماء في الصناعة، Firefox OS هو منصة مفتوحة تعزز بشكل أكبر"
      },
      {
        "icon": "fa-cubes",
        "title": "تصميم واجهة المستخدم (UI)",
        "description": "مدعوم من بعض أكبر الأسماء في الصناعة، Firefox OS هو منصة مفتوحة تعزز بشكل أكبر"
      },
      {
        "icon": "fa-pie-chart",
        "title": "التسويق",
        "description": "مدعوم من بعض أكبر الأسماء في الصناعة، Firefox OS هو منصة مفتوحة تعزز بشكل أكبر"
      },
      {
        "icon": "fa-bar-chart",
        "title": "خدمات تحسين محركات البحث (SEO)",
        "description": "مدعوم من بعض أكبر الأسماء في الصناعة، Firefox OS هو منصة مفتوحة تعزز بشكل أكبر"
      },
      {
        "icon": "fa-language",
        "title": "تطبيقات الأندرويد",
        "description": "مدعوم من بعض أكبر الأسماء في الصناعة، Firefox OS هو منصة مفتوحة تعزز بشكل أكبر"
      },
      {
        "icon": "fa-bullseye",
        "title": "كود نظيف",
        "description": "مدعوم من بعض أكبر الأسماء في الصناعة، Firefox OS هو منصة مفتوحة تعزز بشكل أكبر"
      }
    ],
    "skills": [
      {"name": "تجارب المستخدم", "percent": 95},
      {"name": "تصميم الويب", "percent": 80},
      {"name": "البرمجة", "percent": 60},
      {"name": "الترفيه", "percent": 70}
    ],
    "image": "images/Service/01.png"
  },
  "features": {
    "sectionTitle": "ميزات رائ<span>عة</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "items": [
      {
        "icon": "fa-paper-plane",
        "title": "تصميم الويب",
        "text1": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الشكلي القياسي في الصناعة منذ القرن الخامس عشر الميلادي، عندما أخذت مطبعة مجهولة مجموعة من الحروف وشوشتها لصنع كتاب عينة.<br>",
        "text2": "لقد صمد ليس فقط لخمسة قرون، بل قفز أيضًا إلى التنضيد الإلكتروني، وظل كما هو دون تغيير أساسي. تم نشره في الستينيات مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخرًا مع برامج النشر المكتبي.",
        "image": "images/Features/01.jpg"
      },
      {
        "icon": "fa-laptop",
        "title": "تصميم الجرافيك",
        "text1": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الشكلي القياسي في الصناعة منذ القرن الخامس عشر الميلادي، عندما أخذت مطبعة مجهولة مجموعة من الحروف وشوشتها لصنع كتاب عينة.<br>",
        "text2": "لقد صمد ليس فقط لخمسة قرون، بل قفز أيضًا إلى التنضيد الإلكتروني، وظل كما هو دون تغيير أساسي. تم نشره في الستينيات مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخرًا مع برامج النشر المكتبي.",
        "image": "images/Features/02.jpg"
      },
      {
        "icon": "fa-code",
        "title": "تطوير الويب",
        "text1": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الشكلي القياسي في الصناعة منذ القرن الخامس عشر الميلادي، عندما أخذت مطبعة مجهولة مجموعة من الحروف وشوشتها لصنع كتاب عينة.<br>",
        "text2": "لقد صمد ليس فقط لخمسة قرون، بل قفز أيضًا إلى التنضيد الإلكتروني، وظل كما هو دون تغيير أساسي. تم نشره في الستينيات مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخرًا مع برامج النشر المكتبي.",
        "image": "images/Features/03.jpg"
      },
      {
        "icon": "fa-th-large",
        "title": "تصميم متجاوب",
        "text1": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الشكلي القياسي في الصناعة منذ القرن الخامس عشر الميلادي، عندما أخذت مطبعة مجهولة مجموعة من الحروف وشوشتها لصنع كتاب عينة.<br>",
        "text2": "لقد صمد ليس فقط لخمسة قرون، بل قفز أيضًا إلى التنضيد الإلكتروني، وظل كما هو دون تغيير أساسي. تم نشره في الستينيات مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخرًا مع برامج النشر المكتبي.",
        "image": "images/Features/04.jpg"
      },
      {
        "icon": "fa-file-image-o",
        "title": "معرض إبداعي",
        "text1": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الشكلي القياسي في الصناعة منذ القرن الخامس عشر الميلادي، عندما أخذت مطبعة مجهولة مجموعة من الحروف وشوشتها لصنع كتاب عينة.<br>",
        "text2": "لقد صمد ليس فقط لخمسة قرون، بل قفز أيضًا إلى التنضيد الإلكتروني، وظل كما هو دون تغيير أساسي. تم نشره في الستينيات مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخرًا مع برامج النشر المكتبي.",
        "image": "images/Features/05.jpg"
      }
    ]
  },
  "portfolio": {
    "sectionTitle": "أعمالنا ال<span>سابقة</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "filters": [
      {"name": "جميع الأعمال", "filter": "*", "active": true},
      {"name": "إبداعي", "filter": ".creative", "active": false},
      {"name": "شركات", "filter": ".corporate", "active": false},
      {"name": "معرض", "filter": ".portfolio", "active": false}
    ],
    "items": [
      {"category": "creative", "image": "images/Portfolio/01.jpg", "title": "العنصر-1", "subtitle": "لوريم إيبسوم"},
      {"category": "corporate portfolio", "image": "images/Portfolio/02.jpg", "title": "العنصر-2", "subtitle": "لوريم إيبسوم"},
      {"category": "creative", "image": "images/Portfolio/03.jpg", "title": "العنصر-3", "subtitle": "لوريم إيبسوم"},
      {"category": "corporate", "image": "images/Portfolio/04.jpg", "title": "العنصر-4", "subtitle": "لوريم إيبسوم"},
      {"category": "creative portfolio", "image": "images/Portfolio/05.jpg", "title": "العنصر-5", "subtitle": "لوريم إيبسوم"},
      {"category": "corporate", "image": "images/Portfolio/06.jpg", "title": "العنصر-6", "subtitle": "لوريم إيبسوم"}
    ]
  },
  "pricing": {
    "sectionTitle": "باقات الأس<span>عار</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "packages": [
      {
        "name": "الابتدائية", "price": "$39", "duration": "شهريا", "features": ["<strong>1</strong> نطاق", "<strong>100GB</strong> مساحة التخزين", "<strong>غير محدود</strong> نقل البيانات", "شهادة SSL مشتركة", "<strong>10</strong> عناوين بريد إلكتروني", "<strong>24/7</strong> دعم فني"], "link": "#"
      },
      {
        "name": "الأعمال", "price": "$69", "duration": "شهريا", "features": ["<strong>3</strong> نطاقات", "<strong>300GB</strong> مساحة التخزين", "<strong>غير محدود</strong> نقل البيانات", "شهادة SSL مشتركة", "<strong>30</strong> عنوان بريد إلكتروني", "<strong>24/7</strong> دعم فني"], "link": "#"
      },
      {
        "name": "الاحترافية", "price": "$99", "duration": "شهريا", "features": ["<strong>5</strong> نطاقات", "<strong>500GB</strong> مساحة التخزين", "<strong>غير محدود</strong> نقل البيانات", "شهادة SSL مشتركة", "<strong>50</strong> عنوان بريد إلكتروني", "<strong>24/7</strong> دعم فني"], "link": "#"
      },
      {
        "name": "المطلقة", "price": "$199", "duration": "شهريا", "features": ["<strong>10</strong> نطاقات", "<strong>1000GB</strong> مساحة التخزين", "<strong>غير محدود</strong> نقل البيانات", "شهادة SSL مشتركة", "<strong>100</strong> عنوان بريد إلكتروني", "<strong>24/7</strong> دعم فني"], "link": "#"
      }
    ]
  },
  "team": {
    "sectionTitle": "فريق<span>نا</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "members": [
      {
        "image": "images/Team/01.jpg", "name": "جوليا أماندا", "role": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة",
        "social": {"facebook": "#", "twitter": "#", "pinterest": "#", "instagram": "#", "google-plus": "#"}
      },
      {
        "image": "images/Team/02.jpg", "name": "ماري لويس", "role": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة",
        "social": {"facebook": "#", "twitter": "#", "pinterest": "#", "instagram": "#", "google-plus": "#"}
      },
      {
        "image": "images/Team/03.jpg", "name": "بول أستين", "role": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة",
        "social": {"facebook": "#", "twitter": "#", "pinterest": "#", "instagram": "#", "google-plus": "#"}
      },
      {
        "image": "images/Team/04.jpg", "name": "جانيا سوريا", "role": "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة",
        "social": {"facebook": "#", "twitter": "#", "pinterest": "#", "instagram": "#", "google-plus": "#"}
      }
    ]
  },
  "testimonials": [
    {
      "image": "images/Testimonials/02.jpg",
      "text": "لا يوجد شخص يحب الألم بحد ذاته، يسعى إليه أو يود الحصول عليه، ببساطة لأنه ألم.",
      "name": "إيما جونسون", "role": "مطورة ويب"
    },
    {
      "image": "images/Testimonials/03.jpg",
      "text": "لكن في بعض الأحيان تحدث ظروف تجعل الكدح والألم يجلبان له متعة كبيرة.",
      "name": "سام دين", "role": "مصمم ويب"
    },
    {
      "image": "images/Testimonials/04.jpg",
      "text": "لكي أقدم لك مثالاً بسيطاً، من منا يقوم بجهد بدني متعب إلا للحصول على بعض الفائدة منه؟",
      "name": "جون دو", "role": "المدير التنفيذي"
    }
  ],
  "funFacts": [
    {"icon": "fa-thumbs-o-up", "number": "365", "title": "عميل سعيد"},
    {"icon": "fa-briefcase fa-6", "number": "73987", "title": "مشروع مكتمل"},
    {"icon": "fa-coffee", "number": "297345", "title": "كوب قهوة"},
    {"icon": "fa-code", "number": "9823686", "title": "سطر برمجي"}
  ],
  "blog": {
    "sectionTitle": "أحدث التدوين<span>ات</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "posts": [
      {
        "image": "images/Blog/1.jpg", "month": "يناير", "day": "10", "year": "2016", "title": "يجب أن أشرح لك كيف ولدت هذه الفكرة", "link": "#", "author": "جون", "comments": "13", "excerpt": "في الحقيقة، لا أحد يرفض أو يكره أو يتجنب المتعة نفسها، بل لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة بشكل عقلاني يواجهون عواقب وخيمة."
      },
      {
        "image": "images/Blog/2.jpg", "month": "يناير", "day": "20", "year": "2016", "title": "يجب أن أشرح لك كيف ولدت هذه الفكرة", "link": "#", "author": "ماريا", "comments": "04", "excerpt": "في الحقيقة، لا أحد يرفض أو يكره أو يتجنب المتعة نفسها، بل لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة بشكل عقلاني يواجهون عواقب وخيمة."
      },
      {
        "image": "images/Blog/3.jpg", "month": "يناير", "day": "31", "year": "2016", "title": "يجب أن أشرح لك كيف ولدت هذه الفكرة", "link": "#", "author": "بير", "comments": "05", "excerpt": "في الحقيقة، لا أحد يرفض أو يكره أو يتجنب المتعة نفسها، بل لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة بشكل عقلاني يواجهون عواقب وخيمة."
      }
    ]
  },
  "clients": [
    {"image": "images/clients/1.png", "link": "#"},
    {"image": "images/clients/2.png", "link": "#"},
    {"image": "images/clients/3.png", "link": "#"},
    {"image": "images/clients/4.png", "link": "#"},
    {"image": "images/clients/5.png", "link": "#"},
    {"image": "images/clients/6.png", "link": "#"},
    {"image": "images/clients/7.png", "link": "#"}
  ],
  "contact": {
    "sectionTitle": "اتصل <span>بنا</span>",
    "sectionDescription": "<span><strong>ه</strong></span>ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
    "infoTitle": "معلومات الات<span>صال</span>",
    "address": "رقم 123 ، شارع وول ستريت ، الهند",
    "email": "Info@yourdomain.com",
    "phone": "+91 123-456-7890",
    "website": "www.Cosmix.com"
  },
  "footer": {
    "heading1": "نتطلع <strong>للاستماع </strong>إليك!",
    "heading2": "تابعنا على",
    "social": [
      {"icon": "fa-facebook-f", "link": "#", "class": "facebook"},
      {"icon": "fa-twitter", "link": "#", "class": "twitter"},
      {"icon": "fa-linkedin", "link": "#", "class": "linkedin"},
      {"icon": "fa-google-plus", "link": "#", "class": "google-plus"},
      {"icon": "fa-youtube", "link": "#", "class": "youtube"},
      {"icon": "fa-instagram", "link": "#", "class": "instagram"},
      {"icon": "fa-behance", "link": "#", "class": "behance"}
    ],
    "copyright": "&copy; حقوق الطبع والنشر 2016 Cosmix - تم الإنشاء بواسطة: <a href=\"http://templatestock.co\" target=\"_blank\">Template Stock</a>"
  }
};

fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully written data.json!');
