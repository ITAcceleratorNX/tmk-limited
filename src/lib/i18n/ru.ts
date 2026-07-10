import type { Translations } from "./types";
import { tmkImages } from "../site";

export const ru: Translations = {
  meta: {
    title: "TMK Limited — создаём ценность в ключевых отраслях",
    description:
      "TMK Limited объединяет ключевые отрасли — от недвижимости до агротехнологий — создавая интегрированные бизнес-решения.",
  },
  nav: {
    home: "Главная",
    about: "О нас",
    projects: "Проекты",
    services: "Услуги",
    partners: "Партнеры",
    contacts: "Контакты",
    contactUs: "Связаться",
    menu: "Меню",
    close: "Закрыть",
  },
  hero: {
    title: "Создаём ценность в ключевых отраслях: от недвижимости до IT",
    subtitle:
      "TMK Limited объединяет ключевые отрасли — от недвижимости до агротехнологий — создавая интегрированные бизнес-решения.",
    cta: "Оставить заявку",
  },
  about: {
    label: "Немного о нас",
    heading: "TMK Limited — это диверсифицированный холдинг",
    description:
      "Ведущий деятельность в различных отраслях экономики. Одним из ключевых направлений является коммерческая недвижимость, в рамках которого мы занимаемся арендой и управлением офисными и складскими площадями, обеспечивая клиентов высококачественными инфраструктурными решениями. Помимо недвижимости, TMK Limited активно развивает:",
    missionLabel: "Наша миссия",
    missionText:
      "Мы создаем интегрированные решения, направленные на экономический рост, технологическое развитие и внедрение инноваций, реализуя стратегические проекты в соответствии с международными бизнес-стандартами.",
    missionTags: [
      "Строительство",
      "Бурение",
      "Сельское хозяйство",
      "HoReCa",
      "IT-разработка",
      "Инвестиционный фонд",
      "Телекоммуникации",
      "Цифровой маркетинг и продакшн",
    ],
    readMore: "Читать больше",
  },
  directions: {
    label: "Наши услуги",
    heading: "Наши ключевые направления деятельности:",
    items: [
      {
        id: "real-estate",
        title: "Коммерческая недвижимость",
        bullets: [
          "Аренда и управление современными офисными пространствами с полной инфраструктурой и сервисной поддержкой",
          "Разработка и оптимизация объектов недвижимости для повышения их эффективности и прибыльности",
          "Складские решения для логистики, e-commerce и промышленности",
        ],
        brands: [
          { name: "Valar Group", href: "https://tmk-limited.com/valar-group/ru" },
          { name: "Workflow", href: "https://tmk-limited.com/workflow/ru" },
        ],
        image: tmkImages.directions.realEstate,
        panelSide: "left",
        panelVariant: "white",
      },
      {
        id: "agriculture",
        title: "Сельское хозяйство",
        bullets: [
          "Инвестирование в современные агротехнологии для повышения урожайности и устойчивого производства",
          "Развитие инновационных агробизнес-решений, способствующих продовольственной безопасности и экспорту",
        ],
        brands: [
          {
            name: "KazAgris Ventures",
            href: "https://tmk-limited.com/kazagris-ventures/ru",
          },
        ],
        image: tmkImages.directions.agriculture,
        panelSide: "right",
        panelVariant: "gold",
      },
      {
        id: "construction",
        title: "Строительство и бурение",
        bullets: [
          "Реализация высококачественных проектов с применением передовых инженерных решений",
          "Внедрение устойчивых и экономически эффективных стратегий развития",
        ],
        brands: [
          { name: "Kazakhstan Grand Constructions LLP" },
          { name: "Kaz innotech" },
          { name: "Tm-3Ki", href: "https://tmk-limited.com/tm-3ki-drilling-llp/ru" },
        ],
        image: tmkImages.directions.construction,
        panelSide: "left",
        panelVariant: "navy",
      },
      {
        id: "telecom",
        title: "Телекоммуникации и IT",
        bullets: [
          "Развитие цифровой инфраструктуры для улучшения связи и цифровой трансформации бизнеса",
          "Интеграция умных технологий для повышения продуктивности и операционной эффективности",
        ],
        brands: [
          {
            name: "QazConnect Telecom",
            href: "https://tmk-limited.com/qazconnect-telecom/ru",
          },
          {
            name: "TMK TechnoHorizon LLP",
            href: "https://tmk-limited.com/tmk-technohorizon-llp/ru",
          },
        ],
        image: tmkImages.directions.telecom,
        panelSide: "right",
        panelVariant: "white",
      },
      {
        id: "marketing",
        title: "Цифровой маркетинг и производство контента",
        bullets: [
          "Полноцикловое digital-агентство с профессиональной продакшн-студией",
          "Ведение соцсетей, создание коммерческого контента и рекламных кампаний",
          "Производство фильмов, рекламных роликов и корпоративного видео",
        ],
        brands: [
          {
            name: "Qaitadan Creative Partners",
            href: "https://tmk-limited.com/qaitadan-creative-partners/ru",
          },
        ],
        image: tmkImages.directions.marketing,
        panelSide: "left",
        panelVariant: "gold",
      },
      {
        id: "horeca",
        title: "HoReCa",
        bullets: [
          "Сеть кофеен в бизнес-центрах и профессиональный кейтеринг для деловых встреч, съёмок и частных событий",
          "Гастрономический проект, специализирующийся на корпоративном питании и обслуживании мероприятий",
          "Стабильное качество продукции, выверенная логистика и высокий уровень сервиса",
        ],
        brands: [
          { name: "Table 61", href: "https://tmk-limited.com/table61/ru" },
        ],
        image: tmkImages.directions.horeca,
        panelSide: "left",
        panelVariant: "white",
      },
    ],
  },
  partners: {
    label: "Партнеры",
    heading: "Наши партнеры",
    hint: "Наведите, чтобы остановить",
    items: [
      { name: "Yandex", logo: "/images/tmk/partners/yandex.png" },
      { name: "Bosch", logo: "/images/tmk/partners/bosch.svg" },
      { name: "Chevron", logo: "/images/tmk/partners/chevron.svg" },
      { name: "PUBG Mobile", logo: "/images/tmk/partners/pubg.png" },
      { name: "Highland Gold", logo: "/images/tmk/partners/highland-gold.png" },
      { name: "Bonduelle", logo: "/images/tmk/partners/bonduelle.png" },
      { name: "Magnum Cash&Carry", logo: "/images/tmk/partners/magnum.png" },
      { name: "Coca-Cola", logo: "/images/tmk/partners/coca-cola.png" },
      { name: "Kcell", logo: "/images/tmk/partners/kcell.png" },
    ],
  },
  completedProjects: {
    label: "Завершённые проекты",
    heading: "Завершённые проекты",
    viewMore: "Подробнее",
    items: [
      {
        id: "horeca",
        slug: "horeca",
        title: "Table 61 Catering",
        excerpt:
          "Гастрономический проект: сеть кофеен в бизнес-центрах и кейтеринг для корпоративных мероприятий.",
        image: tmkImages.projects.horeca,
      },
      {
        id: "kazagris",
        slug: "kazagris",
        title: "KazAgris Ventures",
        excerpt:
          "Современная ферма мясного скота и производство премиального мяса с замкнутым циклом от пастбищ до dry-aged стейков.",
        image: tmkImages.projects.kazagris,
      },
    ],
  },
  contact: {
    title: "Оставьте заявку",
    description:
      "Заполните свои данные и мы свяжемся с Вами для уточнения всех деталей.",
    addressLabel: "Адрес",
    addressLine1: "Казахстан, г. Алматы,",
    addressLine2: "ул. Елебекова 10/1",
    hoursTime: "9:00 – 18:00",
    hoursDays: "Будние (Пн–Пт)",
    footerContact: "Свяжитесь с нами",
    form: {
      name: "Ваше имя",
      phone: "Телефон",
      email: "Введите E-mail",
      message: "Опишите свой запрос",
      submit: "Отправить",
      privacyPrefix: "Я согласен с условиями",
      privacyLink: "Политики Конфиденциальности",
      success: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      error: "Не удалось отправить заявку. Попробуйте позже.",
    },
  },
  footer: {
    copyright: "Copyright © 2024",
    privacy: "Privacy Policy",
    backHome: "На главную",
    hoursLabel: "Рабочие часы",
  },
  projectPages: {
    kazagris: {
      heroTitle: "KazAgris Ventures",
      label: "Немного о нас",
      heading: "KazAgris Ventures",
      description: [
        "Это современная ферма, специализирующаяся на разведении крупного рогатого скота мясных пород и производстве премиального мяса.",
        "Мы создаём замкнутый цикл: от экологически чистых пастбищ до готовых dry-aged стейков ресторанного уровня.",
      ],
      missionLabel: "Наша миссия",
      mission:
        "Вернуть вкус настоящего мяса на казахстанский рынок и показать, что локальный продукт может соответствовать мировым стандартам.",
      stats: [
        { value: "3000", label: "Общее поголовье скота" },
        { value: "20 000", label: "Гектаров пастбищных угодий" },
        { value: "150 000", label: "Килограммов Black Angus ежегодно" },
      ],
      servicesLabel: "Наши услуги",
      servicesHeading: "Что мы предлагаем:",
      services: [
        "Натуральное мясо без гормонов и антибиотиков",
        "Стейки выдержки dry-aged 21–45 дней",
        "Контроль качества на каждом этапе — от поля до упаковки",
        "Продукция для HoReCa и гурманов",
      ],
    },
    horeca: {
      heroTitle: "Table 61 Catering",
      label: "Немного о нас",
      heading: "Table 61 Catering",
      description: [
        "Гастрономический проект, объединяющий сеть кофеен в бизнес-центрах и услуги кейтеринга для мероприятий.",
        "Первая точка была открыта в офисе компании Яндекс. Table 61 — это про продуманный подход, внимание к деталям и профессионализм в сфере гастрономии.",
      ],
      missionLabel: "Наша миссия",
      mission:
        "Кофейни + кейтеринг для офисов, мероприятий и бизнесов с гибкими решениями и премиальным качеством.",
      stats: [
        { value: "10+", label: "Планируемых объектов к 2025" },
        { value: "1", label: "Кофейня в офисе Яндекс" },
        { value: "24/7", label: "Гибкий кейтеринг для событий" },
      ],
      servicesLabel: "Наши услуги",
      servicesHeading: "Наши услуги",
      services: [
        "Кофе, свежая выпечка, лёгкие завтраки и обеды в бизнес-центрах",
        "Кейтеринг для корпоративных мероприятий и съёмочных площадок",
        "Индивидуальные заказы и брендинг упаковки под мероприятие",
        "Доставка по городу по предварительной договорённости",
      ],
    },
  },
};
