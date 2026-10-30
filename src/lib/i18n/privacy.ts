import type { Locale } from "./types";

export interface PrivacySection {
  title: string;
  paragraphs: string[];
}

export interface PrivacyContent {
  title: string;
  updated: string;
  sections: PrivacySection[];
}

export const privacyRu: PrivacyContent = {
  title: "Политика конфиденциальности",
  updated: "Последнее обновление: 30 октября 2026 г.",
  sections: [
    {
      title: "1. Общие положения",
      paragraphs: [
        "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта TMK Limited (далее — «Сайт»).",
        "Используя Сайт и отправляя заявку через форму обратной связи, вы соглашаетесь с условиями настоящей Политики.",
      ],
    },
    {
      title: "2. Какие данные мы собираем",
      paragraphs: [
        "При заполнении формы заявки мы можем получать: имя, номер телефона, адрес электронной почты и текст сообщения.",
        "Технические данные (IP-адрес, тип браузера, cookies) могут собираться автоматически для обеспечения работоспособности и аналитики Сайта.",
      ],
    },
    {
      title: "3. Цели обработки данных",
      paragraphs: [
        "Персональные данные обрабатываются для связи с вами по вашему запросу, предоставления информации об услугах TMK Limited и улучшения качества работы Сайта.",
        "Мы не используем ваши данные для рассылки без вашего согласия.",
      ],
    },
    {
      title: "4. Веб-аналитика",
      paragraphs: [
        "Сайт использует сервисы веб-аналитики Google Analytics и Яндекс Метрика. С помощью файлов cookie они собирают обезличенные данные о посещениях: какие страницы просмотрены, с какого устройства и откуда пришёл посетитель. Эти данные нужны только для анализа и улучшения работы сайта и не используются, чтобы установить личность посетителя. Отключить cookie можно в настройках браузера.",
        "Яндекс Метрика также использует технологию Вебвизор: она в обезличенном виде записывает действия посетителей на сайте (переходы, клики, прокрутку, движения мыши). Содержимое полей ввода не записывается.",
      ],
    },
    {
      title: "5. Передача данных третьим лицам",
      paragraphs: [
        "Мы не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан, или когда это необходимо для обработки вашего запроса (например, почтовый сервис для отправки уведомлений).",
      ],
    },
    {
      title: "6. Хранение и защита данных",
      paragraphs: [
        "Мы принимаем необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",
        "Данные хранятся не дольше, чем это необходимо для достижения целей обработки.",
      ],
    },
    {
      title: "7. Ваши права",
      paragraphs: [
        "Вы имеете право запросить доступ, исправление или удаление ваших персональных данных, а также отозвать согласие на их обработку.",
        "Для этого направьте запрос на email: tokpanov.k@tmk-limited.com.",
      ],
    },
    {
      title: "8. Контакты",
      paragraphs: [
        "TMK Limited",
        "Адрес: Казахстан, г. Алматы, ул. Елебекова 10/1",
        "Email: tokpanov.k@tmk-limited.com",
        "Телефон: +7 (701) 777-18-81",
      ],
    },
  ],
};

export const privacyEn: PrivacyContent = {
  title: "Privacy Policy",
  updated: "Last updated: October 30, 2026",
  sections: [
    {
      title: "1. General",
      paragraphs: [
        "This Privacy Policy describes how TMK Limited (the \"Site\") collects, uses, and protects personal data of Site users.",
        "By using the Site and submitting a request form, you agree to the terms of this Policy.",
      ],
    },
    {
      title: "2. Data we collect",
      paragraphs: [
        "When you submit a request form, we may collect: name, phone number, email address, and message text.",
        "Technical data (IP address, browser type, cookies) may be collected automatically to ensure Site functionality and analytics.",
      ],
    },
    {
      title: "3. Purpose of processing",
      paragraphs: [
        "Personal data is processed to respond to your inquiry, provide information about TMK Limited services, and improve the Site.",
        "We do not use your data for marketing communications without your consent.",
      ],
    },
    {
      title: "4. Web analytics",
      paragraphs: [
        "The Site uses Google Analytics and Yandex Metrica web analytics services. Through cookies, they collect anonymized visit data: which pages were viewed, device type, and referral source. This data is used only to analyze and improve the Site and is not used to identify visitors. You can disable cookies in your browser settings.",
        "Yandex Metrica also uses Session Replay (Webvisor): it anonymously records visitor actions on the Site (page views, clicks, scrolling, mouse movements). Input field contents are not recorded.",
      ],
    },
    {
      title: "5. Third-party disclosure",
      paragraphs: [
        "We do not share personal data with third parties except as required by the laws of the Republic of Kazakhstan or when necessary to process your request (for example, email delivery services).",
      ],
    },
    {
      title: "6. Storage and security",
      paragraphs: [
        "We implement appropriate organizational and technical measures to protect personal data from unauthorized access, alteration, disclosure, or destruction.",
        "Data is retained only as long as necessary to fulfill the purposes of processing.",
      ],
    },
    {
      title: "7. Your rights",
      paragraphs: [
        "You have the right to request access, correction, or deletion of your personal data, and to withdraw consent for processing.",
        "To exercise these rights, contact us at tokpanov.k@tmk-limited.com.",
      ],
    },
    {
      title: "8. Contact",
      paragraphs: [
        "TMK Limited",
        "Address: 10/1 Elebekov St., Almaty, Kazakhstan",
        "Email: tokpanov.k@tmk-limited.com",
        "Phone: +7 (701) 777-18-81",
      ],
    },
  ],
};

export const privacyKz: PrivacyContent = {
  title: "Құпиялылық саясаты",
  updated: "Соңғы жаңарту: 2026 жылғы 30 қазан",
  sections: [
    {
      title: "1. Жалпы ережелер",
      paragraphs: [
        "Осы Құпиялылық саясаты TMK Limited сайтында (бұдан әрі — «Сайт») пайдаланушылардың дербес деректерін өңдеу және қорғау тәртібін айқындайды.",
        "Сайтты пайдалана отырып және кері байланыс нысаны арқылы өтінім жібере отырып, сіз осы Саясаттың шарттарымен келісесіз.",
      ],
    },
    {
      title: "2. Біз қандай деректер жинаймыз",
      paragraphs: [
        "Өтінім нысанын толтырған кезде біз атыңызды, телефон нөмірін, электрондық пошта мекенжайын және хабарлама мәтінін алуымыз мүмкін.",
        "Техникалық деректер (IP-мекенжай, браузер түрі, cookies) Сайттың жұмысы мен аналитикасы үшін автоматты түрде жиналуы мүмкін.",
      ],
    },
    {
      title: "3. Деректерді өңдеу мақсаттары",
      paragraphs: [
        "Дербес деректер сіздің сұранысыңыз бойынша байланысу, TMK Limited қызметтері туралы ақпарат беру және Сайт сапасын жақсарту үшін өңделеді.",
        "Біз сіздің келісіміңізсіз деректеріңізді жарнамалық жіберілім үшін пайдаланбаймыз.",
      ],
    },
    {
      title: "4. Веб-аналитика",
      paragraphs: [
        "Сайт Google Analytics және Яндекс Метрика веб-аналитика сервистерін пайдаланады. Cookie файлдары арқылы олар келулер туралы деректерді жинайды: қай беттер қаралды, қандай құрылғыдан және қайдан келді. Бұл деректер тек Сайтты талдау және жақсарту үшін керек және келушінің жеке басын анықтау үшін қолданылмайды. Cookie-ді браузер параметрлерінен өшіруге болады.",
        "Яндекс Метрика сонымен қатар Вебвизор технологиясын пайдаланады: ол сайттағы келушілердің әрекеттерін иесіздендірілген түрде жазады (өтулер, басулар, айналдыру, тінтуір қозғалысы). Енгізу өрістерінің мазмұны жазылмайды.",
      ],
    },
    {
      title: "5. Үшінші тұлғаларға беру",
      paragraphs: [
        "Біз дербес деректерді Қазақстан Республикасының заңнамасында көзделген жағдайларды немесе сіздің сұранысыңызды өңдеу үшін қажеттілікті (мысалы, хабарлама жіберуге арналған пошта сервисі) қоспағанда, үшінші тұлғаларға бермейміз.",
      ],
    },
    {
      title: "6. Сақтау және қорғау",
      paragraphs: [
        "Біз дербес деректерді рұқсатсыз қол жеткізуден, өзгертуден, жария етуден немесе жоюдан қорғау үшін қажетті ұйымдастырушылық және техникалық шараларды қабылдаймыз.",
        "Деректер өңдеу мақсаттарына жету үшін қажетті мерзімнен ұзақ сақталмайды.",
      ],
    },
    {
      title: "7. Сіздің құқықтарыңыз",
      paragraphs: [
        "Сіз өз дербес деректеріңізге қол жеткізуді, түзетуді немесе жоюды сұрауға, сондай-ақ оларды өңдеуге берілген келісімді қайтарып алуға құқылысыз.",
        "Ол үшін tokpanov.k@tmk-limited.com электрондық поштасына сұраныс жіберіңіз.",
      ],
    },
    {
      title: "8. Байланыс",
      paragraphs: [
        "TMK Limited",
        "Мекенжай: Қазақстан, Алматы қ., Елебеков көш. 10/1",
        "Email: tokpanov.k@tmk-limited.com",
        "Телефон: +7 (701) 777-18-81",
      ],
    },
  ],
};

export function getPrivacy(locale: Locale): PrivacyContent {
  if (locale === "kz") return privacyKz;
  if (locale === "en") return privacyEn;
  return privacyRu;
}
