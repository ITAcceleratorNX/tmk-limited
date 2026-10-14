"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const values = [
  {
    ru: "Эффективность",
    en: "Efficiency",
    kz: "Тиімділік",
    ruText: "Упрощаем процессы, повышаем результат.",
    enText: "We simplify processes and improve results.",
    kzText: "Процестерді жеңілдетіп, нәтижені арттырамыз.",
    icon: "/images/tmk/about/value-efficiency.svg",
  },
  {
    ru: "Инновации",
    en: "Innovation",
    kz: "Инновация",
    ruText: "Внедряем технологии в каждый проект.",
    enText: "We bring technology into every project.",
    kzText: "Әр жобаға технологияларды енгіземіз.",
    icon: "/images/tmk/about/value-innovation.svg",
  },
  {
    ru: "Клиенто-ориентированность",
    en: "Customer focus",
    kz: "Клиентке бағдар",
    ruText: "Создаём комфорт и надёжность для партнёров.",
    enText: "We create comfort and reliability for partners.",
    kzText: "Серіктестерге жайлылық пен сенімділік жасаймыз.",
    icon: "/images/tmk/about/value-customer-focus.svg",
  },
  {
    ru: "Ответственность",
    en: "Responsibility",
    kz: "Жауапкершілік",
    ruText: "Действуем прозрачно и устойчиво.",
    enText: "We act transparently and sustainably.",
    kzText: "Ашық және тұрақты әрекет етеміз.",
    icon: "/images/tmk/about/value-responsibility.svg",
  },
  {
    ru: "Гибкость",
    en: "Flexibility",
    kz: "Икемділік",
    ruText: "Быстро адаптируемся под задачи и рынок.",
    enText: "We adapt quickly to tasks and the market.",
    kzText: "Міндеттер мен нарыққа тез бейімделеміз.",
    icon: "/images/tmk/about/value-flexibility.svg",
  },
  {
    ru: "Команда",
    en: "Team",
    kz: "Команда",
    ruText: "Объединяем опыт и амбиции для общего роста.",
    enText: "We unite experience and ambition for shared growth.",
    kzText: "Ортақ өсу үшін тәжірибе мен амбицияны біріктіреміз.",
    icon: "/images/tmk/about/value-team.svg",
  },
];

function pick(locale: Locale, ru: string, en: string, kz: string) {
  if (locale === "kz") return kz;
  if (locale === "en") return en;
  return ru;
}

function AboutContent() {
  const { locale, t } = useLanguage();

  return (
    <ContactPopupProvider>
      <Header />
      <main>
        <section className="relative flex min-h-[600px] items-end overflow-hidden pb-[80px] text-white">
          <Image src="/images/tmk/about/billboards.png" alt="" fill priority className="object-cover" style={{ objectPosition: "center 20%" }} sizes="100vw" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="tilda-container relative grid items-end gap-10 lg:grid-cols-[1fr_257px]">
            <div>
              <p className="mb-11 text-sm text-white/60"><Link href={`/${locale}`}>{t.nav.home}</Link><span className="mx-5">/</span>{t.nav.about}</p>
              <h1 className="text-[3rem] font-normal leading-[1.12] sm:text-[3.75rem] lg:-translate-y-[10px]">
                {locale === "ru" ? <>О компании<br />TMK Limited LLP</> : locale === "kz" ? <>TMK Limited LLP<br />жайлы</> : <>About<br />TMK Limited LLP</>}
              </h1>
            </div>
            <div className="pb-1">
              <span className="text-5xl leading-none text-gold">❞</span>
              <h2 className="mt-6 text-2xl font-medium">{t.about.missionLabel}</h2>
              <p className="mt-8 text-base leading-[1.25]">
                {pick(
                  locale,
                  "Строим будущее, инвестируя в идеи, людей и компании, растущие вместе с нами",
                  "We build the future by investing in ideas, people and companies that grow with us",
                  "Бізбен бірге өсетін идеяларға, адамдарға және компанияларға инвестициялап, болашақты құрамыз",
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="tilda-container pb-[53px] pt-[60px] lg:pt-[84px]">
          <div className="mb-[52px]">
            <p className="section-label !mb-[39px]">{pick(locale, "Ценности", "Values", "Құндылықтар")}</p>
            <h2 className="section-title">{pick(locale, "Ценности нашей компании", "Our company values", "Біздің құндылықтарымыз")}</h2>
          </div>
          <div className="grid gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.ru} className={`flex min-h-[305px] flex-col items-center justify-between p-8 text-center ${index === 3 ? "bg-gold text-white" : index === 2 ? "border border-gold bg-white text-navy" : "bg-[#ecedf0] text-navy"}`}>
                <Image src={value.icon} alt="" width={54} height={54} className="h-[54px] w-[54px]" />
                <div>
                  <h3 className="text-[26px] font-normal leading-tight">{pick(locale, value.ru, value.en, value.kz)}</h3>
                  <p className="mx-auto mt-3 max-w-[230px] text-[15px] leading-[1.45]">{pick(locale, value.ruText, value.enText, value.kzText)}</p>
                </div>
                <p className={`text-xs ${index === 3 ? "text-white/75" : "text-gold"}`}>{String(index + 1).padStart(2, "0")} - {pick(locale, "Ценность", "Value", "Құндылық")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tilda-container pb-20 pt-12">
          <div className="grid gap-8 bg-navy px-10 pb-14 pt-7 text-white lg:grid-cols-[20.5%_1fr] lg:px-12">
            <p className="section-label !text-white/60">{pick(locale, "Наша философия", "Our philosophy", "Біздің философиямыз")}</p>
            <div className="lg:pt-7">
              <h2 className="max-w-[780px] text-[2.5rem] leading-[1.15] font-normal sm:text-[3rem]">
                {locale === "ru" ? (
                  <>Мы строим партнёрство, основанное на <span className="text-gold">доверии, честности</span> и стремлении к общему росту.</>
                ) : locale === "kz" ? (
                  <>Біз <span className="text-gold">сенім мен адалдыққа</span>, ортақ өсуге негізделген әріптестік құрамыз.</>
                ) : (
                  <>We build partnerships based on <span className="text-gold">trust, honesty</span> and shared growth.</>
                )}
              </h2>
              <p className="mt-10 max-w-[790px] text-base leading-[1.6] text-white/85">
                {pick(
                  locale,
                  "Каждый проект для нас — это не просто задача, а возможность совместно создать ценность, которая выдержит испытание временем. Мы глубоко погружаемся в цели клиента, становясь не подрядчиком, а союзником. Открытость, стратегическое мышление и ориентация на результат — вот как мы строим путь вперёд.",
                  "Every project is an opportunity to create lasting value together. We immerse ourselves in our clients' goals and build a path forward through openness, strategic thinking and results.",
                  "Әр жоба біз үшін жай міндет емес — уақыт сынынан өтетін құнды бірге жасау мүмкіндігі. Клиент мақсатына терең үңіліп, мердігер емес, одақтас боламыз. Ашықтық, стратегия және нәтиже — біздің жолымыз.",
                )}
              </p>
              <p className="mt-8 text-gold">{pick(locale, "С уважением,", "With respect,", "Құрметпен,")}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ContactPopupProvider>
  );
}

export default function AboutPage() {
  return <LanguageProvider><AboutContent /></LanguageProvider>;
}
