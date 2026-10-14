"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { localizedHref } from "@/lib/i18n";
import { tmkImages } from "@/lib/site";

const ruTagOrder = [
  "Строительство",
  "Бурение",
  "Сельское хозяйство",
  "HoReCa",
  "IT-разработка",
  "Инвестиционный фонд",
  "Телекоммуникации",
  "Цифровой маркетинг и продакшн",
];

const DEVELOP_MARKERS: Record<string, string> = {
  ru: "Помимо недвижимости, TMK Limited активно развивает:",
  en: "Beyond real estate, TMK Limited actively develops:",
  kz: "Жылжымайтын мүліктен бөлек, TMK Limited белсенді дамытады:",
};

export function AboutSection() {
  const { locale, t } = useLanguage();
  const developMarker = DEVELOP_MARKERS[locale] ?? DEVELOP_MARKERS.ru;
  const [description, postscript] = t.about.description.split(developMarker);
  const tags = locale === "ru" ? ruTagOrder : t.about.missionTags;

  return (
    <section id="about" className="scroll-mt-[84px] bg-[#ecedf0] pt-[84px] pb-12 lg:pb-16">
      <div className="tilda-container grid min-h-[750px] grid-cols-1 gap-8 lg:grid-cols-[57.6%_42.4%] lg:gap-0">
        <div className="pb-2 lg:pb-0 lg:pr-12">
          <p className="section-label !mb-10">{t.about.label}</p>
          <h2 className="max-w-[650px] text-[2.25rem] font-normal leading-[1.08] text-navy sm:text-[3rem]">
            {locale === "ru" ? (
              <><span className="text-[#737b86]">TMK Limited — это</span><br />диверсифицированный<br />холдинг</>
            ) : locale === "kz" ? (
              <><span className="text-[#737b86]">TMK Limited —</span><br />әртараптандырылған<br />холдинг</>
            ) : (
              t.about.heading
            )}
          </h2>
          <p className="mt-7 max-w-[630px] text-[0.9375rem] font-normal leading-[1.55] text-navy">{description}</p>
          {postscript !== undefined && (
            <p className="mt-7 text-[0.9375rem] font-semibold text-navy">{developMarker}</p>
          )}
          <div className="mt-5 flex max-w-[640px] flex-wrap gap-[10px]">
            {tags.map((tag) => <span key={tag} className="border border-[#d6d8db] bg-white px-[15px] py-[9px] text-[13px] text-navy">{tag}</span>)}
          </div>
          <div className="mt-8 border-l-[3px] border-gold pl-5">
            <p className="text-base font-medium text-gold">{t.about.missionLabel}</p>
            <p className="mt-4 max-w-[500px] text-[0.9375rem] leading-[1.55] text-navy">{t.about.missionText}</p>
          </div>
          <Link href={localizedHref("/about/ru", locale)} className="mt-10 inline-flex h-[60px] items-center border border-gold bg-white pl-6 text-sm text-navy">
            {t.about.readMore}<span className="ml-12 flex h-[58px] w-[58px] items-center justify-center bg-gold text-xl text-white">↗</span>
          </Link>
        </div>
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[750px]">
          <Image src={tmkImages.about} alt={t.about.heading} fill className="object-cover" sizes="(max-width:1200px) 100vw, 43vw" />
          <Image src={tmkImages.aboutBadge} alt="" width={192} height={94} className="absolute left-1/2 top-1/2 w-[170px] -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
