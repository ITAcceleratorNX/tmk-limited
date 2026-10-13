"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { localizedProjectsIndex } from "@/lib/project-paths";
import { tmkImages } from "@/lib/site";

type ProjectDetails = {
  hero: string;
  photo: string;
  intro: string;
  paragraphs: string[];
  stats?: { value: string; label: string }[];
  sectionTitle: string;
  features: { title: string; text: string }[];
};

const projectDetails: Record<string, ProjectDetails> = {
  streamline: {
    hero: "/images/tmk/projects/streamline-hero.png",
    photo: "/images/tmk/projects/streamline-body.jpg",
    intro: "Streamline Logistics — это логистическая компания, специализирующаяся на грузоперевозках, складской логистике и управлении цепочками поставок.",
    paragraphs: [
      "Мы обеспечиваем доставку по Казахстану и за рубеж с полным сопровождением: от оформления до отслеживания.",
      "Наши сильные стороны — точность, прозрачность, индивидуальный подход и IT-интеграция. Доверяют более 100 корпоративных клиентов.",
    ],
    stats: [
      { value: "600 000", label: "Ежегодные грузоперевозки" },
      { value: "> 10 000", label: "Тонн грузов каждый год" },
      { value: "> 500 000$", label: "Ежегодный оборот" },
    ],
    sectionTitle: "Наши услуги",
    features: [
      { title: "Международные перевозки:", text: "Авто, авиа, ж/д доставка с полным сопровождением и таможенным оформлением." },
      { title: "Грузоперевозки по Казахстану:", text: "Быстрая и надёжная доставка по всей стране. Онлайн-отслеживание." },
      { title: "Индивидуальные решения:", text: "Подбор оптимальных маршрутов и схем поставок под ваш бизнес." },
      { title: "3PL-обслуживание:", text: "Полный аутсорс логистики — от приема товара до доставки клиенту." },
      { title: "\"Последняя миля\":", text: "Доставка до двери. Идеально для e-commerce и B2B." },
    ],
  },
  qaitadan: {
    hero: "/images/tmk/projects/qaitadan-hero.png",
    photo: "/images/tmk/projects/qaitadan-body.jpg",
    intro: "Полный цикл креативных решений: от разработки идеи и визуальной концепции до продакшна, digital-коммуникаций и маркетинга.",
    paragraphs: [
      "Команда стратегов, креаторов и цифровых специалистов, создающая сильные коммуникации и яркие визуальные решения.",
      "Мы разрабатываем креативные концепции, продумываем стратегии, пишем сценарии, создаём визуальные и цифровые продукты, которые работают на бизнес и влюбляют в бренд.",
    ],
    stats: [
      { value: "более 100", label: "Клиентов за 5 лет работы" },
      { value: "> 1.000.000", label: "Эффективно распределённые рекламные бюджеты" },
      { value: "5 филиалов", label: "Астана, Алматы, Ташкент, Душанбе, Стамбул" },
      { value: "около 100", label: "Специалисты с опытом более 5 лет" },
    ],
    sectionTitle: "Наши услуги",
    features: [
      { title: "Полный цикл", text: "От разработки идеи и визуальной концепции до продакшна, digital-коммуникаций и маркетинга." },
      { title: "Разработка", text: "Создаём креативные концепции, стратегические коммуникации, сценарии, визуальные и цифровые продукты." },
      { title: "Поддержка", text: "После завершения проекта оперативно реагируем на новые задачи клиента и готовы масштабировать проект." },
    ],
  },
  valar: {
    hero: "/images/tmk/projects/valar-hero.jpg",
    photo: "/images/tmk/projects/valar-body.jpg",
    intro: "Cкладские решения нового поколения.",
    paragraphs: [
      "Складские решения нового поколения.",
      "Мы предоставляем в аренду классические сторедж-румы для физических и юридических лиц, а также облачное хранение с удалённым управлением и доставкой «по запросу».",
    ],
    stats: [
      { value: "Лидеры:", label: "в сфере самообслуживания хранения" },
      { value: "3PL", label: "оператор 3PL логистики" },
      { value: "150.000", label: "кв. метров складских помещений" },
    ],
    sectionTitle: "Наши услуги",
    features: [
      { title: "Индивидуальные решения", text: "Храните вещи удобно, безопасно и с умом — вместе с Valar Group.." },
      { title: "Гибкие тарифы", text: "Помещения от 1 м² до 100+ м²" },
      { title: "Безопасность 24/7", text: "Климат-контроль и круглосуточный доступ к вашим вещам." },
    ],
  },
  tm3ki: {
    hero: "/images/tmk/hero/slides/10184_1.jpg",
    photo: "/images/tmk/projects/tm3ki-body.png",
    intro: "TM-3KI Drilling LLP — казахстанская компания, специализирующаяся на буровых работах на твердых полезных ископаемых. Мы работаем по всему Казахстану, предоставляя услуги высокой точности и качества, опираясь на многолетний опыт и современные технологии.",
    paragraphs: [
      "TM-3KI Drilling LLP — казахстанская компания, специализирующаяся на буровых работах на твердых полезных ископаемых. Мы работаем по всему Казахстану, предоставляя услуги высокой точности и качества, опираясь на многолетний опыт и современные технологии.",
      "Наши достижения:",
    ],
    stats: [
      { value: "20,000+ метров", label: "совокупная глубина буров" },
      { value: "400,000 тонн", label: "общий объем извлеченных пород" },
      { value: "6+ месторождений", label: "активная работа в различных регионах РК" },
    ],
    sectionTitle: "Почему выбирают нас?",
    features: [
      { title: "Современное буровое оборудование", text: "" },
      { title: "Квалифицированная команда инженеров и геологов", text: "" },
      { title: "Безопасность и соблюдение экологических стандартов", text: "" },
      { title: "Индивидуальный подход к каждому проекту", text: "" },
    ],
  },
  qazconnect: {
    hero: "/images/tmk/projects/qazconnect-hero.jpg",
    photo: "/images/tmk/projects/qazconnect-body.jpg",
    intro: "Телекоммуникационная компания, предоставляющая современные решения в сфере интернета и цифровой связи для частных и корпоративных клиентов по всей территории Республики Казахстан.",
    paragraphs: [
      "Qazconnect Telecom - высокоскоростной интернет и надежные телеком-решения по всему Казахстану.",
      "Мы строим инфраструктуру будущего — от городов-миллионников до отдалённых населённых пунктов, обеспечивая наших клиентов стабильным, высокоскоростным интернетом с минимальной задержкой.",
    ],
    sectionTitle: "Что мы предлагаем:",
    features: [
      { title: "Надежная и масштабируемая сеть", text: "Современная инфраструктура с резервированием каналов и узлов связи гарантирует бесперебойную работу даже при пиковых нагрузках или аварийных ситуациях." },
      { title: "География покрытия", text: "Мы охватываем крупнейшие города Казахстана и продолжаем расширяться, прокладывая линии и локальные сети в новых регионах." },
      { title: "Поддержка 24/7", text: "Мы всегда на связи. Гибкие тарифные планы для любых задач." },
    ],
  },
  technohorizon: {
    hero: "/images/tmk/projects/technohorizon-hero.jpg",
    photo: "/images/tmk/projects/technohorizon-body.jpg",
    intro: "Компания-резидент Международного финансового центра «Астана» (МФЦА), специализирующаяся на разработке IT-решений для складской, логистической и офисной инфраструктуры.",
    paragraphs: [
      "Мы создаём технологичные продукты, направленные на автоматизацию процессов, повышение операционной эффективности и прозрачность управления. Наши решения адаптированы под потребности современного бизнеса и интегрируются в существующие экосистемы предприятий.",
      "Фокус Technohorizon LLP — на практичных, масштабируемых и гибких IT-проектах, которые упрощают управление пространством, ресурсами и логистическими потоками.",
    ],
    sectionTitle: "Наши преимущества",
    features: [
      { title: "Инновации", text: "Умные IT решения для вашего офиса и склада." },
      { title: "Уникальность", text: "Программное обеспечение для управления вашим офисом и складом." },
      { title: "Участники МФЦА", text: "Компания является участником Международного финансового центра Астана." },
    ],
  },
  workflow: {
    hero: "/images/tmk/projects/workflow.jpg",
    photo: "/images/tmk/projects/workflow-body.jpg",
    intro: "Мы предлагаем полностью готовые к работе пространства: от индивидуальных кабинетов до смарт-офисов, адаптированных под нужды малого и среднего бизнеса.",
    paragraphs: [
      "Workflow — компания, предоставляющая сервисные офисы нового поколения.",
      "В стоимость аренды включены все основные услуги: круглосуточная охрана, профессиональная уборка, техническое обслуживание (сантехника и электрика), а также доступ к полностью оборудованной кухне с кофе и чаем.",
      "Workflow — это про комфорт, гибкость и эффективную рабочую среду без лишних затрат.",
    ],
    sectionTitle: "Наши услуги",
    features: [
      { title: "Smart Office в аренду", text: "Арендуйте полностью готовое рабочее пространство с возможностью заезда в тот же день." },
      { title: "Технологичное оснащение", text: "Смарт-замки с удалённым доступом, регулируемое освещение, современная мебель и комфортный микроклимат." },
    ],
  },
};

function ProjectContent({ slug }: { slug: string }) {
  const { locale, t } = useLanguage();
  const project = t.completedProjects.items.find((item) => item.id === slug);
  const details = projectDetails[slug];
  if (!project || !details) return null;

  const titleWords = project.title.split(" ");
  const isRu = locale === "ru";
  const projectsHref = localizedProjectsIndex(locale);

  return (
    <ContactPopupProvider>
      <Header />
      <main>
        <section className="relative flex min-h-[744px] items-end overflow-hidden pb-[80px] text-white">
          <Image src={details.hero} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="tilda-container relative grid items-end gap-10 lg:grid-cols-[1fr_250px]">
            <div>
              <p className="mb-[49px] text-sm text-white/70"><Link href={`/${locale}`}>{t.nav.home}</Link><span className="mx-5">/</span><Link href={projectsHref}>{t.nav.projects}</Link><span className="mx-5">/</span><span className="text-gold">{project.title}</span></p>
              <h1 className={`${slug === "streamline" ? "max-w-[600px]" : "max-w-[850px]"} text-[3rem] font-normal uppercase leading-[1.1] sm:text-[3.75rem]`}>{project.title}</h1>
              <p className="mt-[27px] max-w-[660px] text-[17px] leading-[1.45]">{isRu ? details.intro : project.excerpt}</p>
            </div>
            {slug === "streamline" && (
              <div className="border border-gold px-8 py-7">
                <p className="text-[3.75rem] leading-none">100+</p>
                <p className="mt-6 text-base">
                  {locale === "kk" ? "Корпоративтік клиент" : isRu ? "Корпоративных клиентов" : "Corporate clients"}
                </p>
              </div>
            )}
          </div>
        </section>
        <section className="bg-white">
          <div className="tilda-container grid gap-12 pb-[88px] pt-[84px] lg:grid-cols-[minmax(0,1fr)_544px] lg:gap-14">
            <div className="flex max-w-[545px] flex-col">
              <p className="section-label">{locale === "kk" ? "Біз туралы" : isRu ? "Немного о нас" : "About us"}</p>
              <h2 className="section-title mt-5"><span className="text-gold">{titleWords[0]}</span>{titleWords.length > 1 ? ` ${titleWords.slice(1).join(" ")}` : ""}</h2>
              <div className="mt-9 space-y-6 text-[16px] leading-[1.55] text-navy">
                {(isRu ? details.paragraphs : [project.excerpt]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {details.stats && <div className={`mt-auto grid gap-5 pt-14 ${details.stats.length === 4 ? "grid-cols-2" : "grid-cols-3"}`}>
                {details.stats.map((stat) => <div key={stat.value} className="text-center lg:text-left"><div className="whitespace-nowrap text-[22px] text-gold lg:text-[26px]">{stat.value}</div><p className="mt-3 text-[14px] leading-[1.5] text-navy">{stat.label}</p></div>)}
              </div>}
            </div>
            <div className="relative min-h-[500px]"><Image src={details.photo} alt={project.title} fill className="object-cover" sizes="(max-width:1200px) 100vw, 544px" />{slug === "streamline" && <Image src={tmkImages.footerLogo} alt="" width={110} height={58} className="absolute bottom-10 right-9 w-[110px]" />}</div>
          </div>
        </section>
        <section className="bg-[#ecedf0] pb-[72px] pt-[80px]">
          <div className="tilda-container">
            <p className="section-label">{isRu ? details.sectionTitle : "Our services"}</p>
            <h2 className="section-title mt-7 lg:mt-[37px] lg:!text-[40px] lg:!leading-[1.5]">{isRu ? details.sectionTitle : "Our services"}</h2>
            <div className="project-feature-grid mt-9 grid gap-4 md:grid-cols-2 lg:mt-[9px]">
              {details.features.map((feature, index) => <div key={feature.title} className="min-h-[185px] bg-white p-7 lg:min-h-[285px] lg:p-10"><span className="text-[20px] text-gold">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 text-[18px] text-navy lg:mt-[60px]">{feature.title}</h3>{feature.text && <p className="mt-3 text-sm leading-[1.5] text-navy">{feature.text}</p>}</div>)}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </ContactPopupProvider>
  );
}

export function GenericProjectPage({ slug }: { slug: string }) {
  return <LanguageProvider><ProjectContent slug={slug} /></LanguageProvider>;
}
