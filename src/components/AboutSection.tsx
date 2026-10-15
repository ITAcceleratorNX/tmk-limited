"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { localizedHref } from "@/lib/i18n";
import { tmkImages } from "@/lib/site";

const ruTagOrder = [
  "Строительство",
  "Бурение",
  "IT-разработка",
  "Инвестиционный фонд",
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
    <section id="about" className="scroll-mt-[84px] bg-[#ecedf0] pt-[72px] pb-10 sm:pt-[84px] sm:pb-12 lg:pb-16">
      <div className="tilda-container grid grid-cols-1 gap-8 lg:min-h-[750px] lg:grid-cols-[57.6%_42.4%] lg:gap-0">
        <div className="pb-2 lg:pb-0 lg:pr-12">
          <p className="section-label !mb-6 sm:!mb-10">{t.about.label}</p>
          <h2 className="max-w-[650px] text-[1.75rem] font-normal leading-[1.12] text-navy min-[400px]:text-[2.25rem] min-[400px]:leading-[1.08] sm:text-[3rem]">
            {locale === "ru" ? (
              <><span className="text-[#737b86]">TMK Limited — это</span><br />диверсифицированный<br />холдинг</>
            ) : locale === "kz" ? (
              <><span className="text-[#737b86]">TMK Limited —</span><br />әртараптандырылған<br />холдинг</>
            ) : (
              t.about.heading
            )}
          </h2>
          <p className="mt-5 max-w-[630px] text-[0.875rem] font-normal leading-[1.55] text-navy min-[400px]:mt-7 min-[400px]:text-[0.9375rem]">{description}</p>
          {postscript !== undefined && (
            <p className="mt-5 text-[0.875rem] font-semibold text-navy min-[400px]:mt-7 min-[400px]:text-[0.9375rem]">{developMarker}</p>
          )}
          <div className="mt-4 flex max-w-[640px] flex-wrap gap-2 min-[400px]:mt-5 min-[400px]:gap-[10px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#d6d8db] bg-white px-3 py-2 text-[12px] text-navy min-[400px]:px-[15px] min-[400px]:py-[9px] min-[400px]:text-[13px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 border-l-[3px] border-gold pl-4 min-[400px]:pl-5">
            <p className="text-base font-medium text-gold">{t.about.missionLabel}</p>
            <p className="mt-4 max-w-[500px] text-[0.875rem] leading-[1.55] text-navy min-[400px]:text-[0.9375rem]">{t.about.missionText}</p>
          </div>
          <Link
            href={localizedHref("/about/ru", locale)}
            className="mt-8 inline-flex h-[52px] max-w-full items-center border border-gold bg-white pl-4 text-[13px] text-navy min-[400px]:mt-10 min-[400px]:h-[60px] min-[400px]:pl-6 min-[400px]:text-sm"
          >
            <span className="min-w-0 pr-3">{t.about.readMore}</span>
            <span className="ml-auto flex h-full w-[52px] shrink-0 items-center justify-center bg-gold text-xl text-white min-[400px]:w-[58px]">
              ↗
            </span>
          </Link>
        </div>
        <div className="relative min-h-[280px] overflow-hidden min-[400px]:min-h-[360px] sm:min-h-[520px] lg:min-h-[750px]">
          <Image src={tmkImages.about} alt={t.about.heading} fill className="object-cover" sizes="(max-width:1200px) 100vw, 43vw" />
          <Image
            src={tmkImages.aboutBadge}
            alt=""
            width={192}
            height={94}
            className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 min-[400px]:w-[150px] sm:w-[170px]"
          />
        </div>
      </div>
    </section>
  );
}
