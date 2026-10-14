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
  updated: "Последнее обновление: 18 июня 2025 г.",
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
      title: "4. Передача данных третьим лицам",
      paragraphs: [
        "Мы не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан, или когда это необходимо для обработки вашего запроса (например, почтовый сервис для отправки уведомлений).",
      ],
    },
    {
      title: "5. Хранение и защита данных",
      paragraphs: [
        "Мы принимаем необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",
        "Данные хранятся не дольше, чем это необходимо для достижения целей обработки.",
      ],
    },
    {
      title: "6. Ваши права",
      paragraphs: [
        "Вы имеете право запросить доступ, исправление или удаление ваших персональных данных, а также отозвать согласие на их обработку.",
        "Для этого направьте запрос на email: tokpanov.k@tmk-limited.com.",
      ],
    },
    {
      title: "7. Контакты",
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
  updated: "Last updated: June 18, 2025",
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
      title: "4. Third-party disclosure",
      paragraphs: [
        "We do not share personal data with third parties except as required by the laws of the Republic of Kazakhstan or when necessary to process your request (for example, email delivery services).",
      ],
    },
    {
      title: "5. Storage and security",
      paragraphs: [
        "We implement appropriate organizational and technical measures to protect personal data from unauthorized access, alteration, disclosure, or destruction.",
        "Data is retained only as long as necessary to fulfill the purposes of processing.",
      ],
    },
    {
      title: "6. Your rights",
      paragraphs: [
        "You have the right to request access, correction, or deletion of your personal data, and to withdraw consent for processing.",
        "To exercise these rights, contact us at tokpanov.k@tmk-limited.com.",
      ],
    },
    {
      title: "7. Contact",
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
  updated: "Соңғы жаңарту: 2025 жылғы 18 маусым",
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
      title: "4. Үшінші тұлғаларға беру",
      paragraphs: [
        "Біз дербес деректерді Қазақстан Республикасының заңнамасында көзделген жағдайларды немесе сіздің сұранысыңызды өңдеу үшін қажеттілікті (мысалы, хабарлама жіберуге арналған пошта сервисі) қоспағанда, үшінші тұлғаларға бермейміз.",
      ],
    },
    {
      title: "5. Сақтау және қорғау",
      paragraphs: [
        "Біз дербес деректерді рұқсатсыз қол жеткізуден, өзгертуден, жария етуден немесе жоюдан қорғау үшін қажетті ұйымдастырушылық және техникалық шараларды қабылдаймыз.",
        "Деректер өңдеу мақсаттарына жету үшін қажетті мерзімнен ұзақ сақталмайды.",
      ],
    },
    {
      title: "6. Сіздің құқықтарыңыз",
      paragraphs: [
        "Сіз өз дербес деректеріңізге қол жеткізуді, түзетуді немесе жоюды сұрауға, сондай-ақ оларды өңдеуге берілген келісімді қайтарып алуға құқылысыз.",
        "Ол үшін tokpanov.k@tmk-limited.com электрондық поштасына сұраныс жіберіңіз.",
      ],
    },
    {
      title: "7. Байланыс",
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
