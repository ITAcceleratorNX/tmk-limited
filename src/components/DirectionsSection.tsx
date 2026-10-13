"use client";

import Image from "next/image";
import Link from "next/link";
import { TildaIn, TildaItem, TildaStagger } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import type { DirectionItem } from "@/lib/i18n/types";

const PANEL_BG: Record<DirectionItem["panelVariant"], string> = {
  white: "bg-white",
  gold: "bg-gold",
  navy: "bg-navy",
};

function BrandLink({
  brand,
  dark,
}: {
  brand: DirectionItem["brands"][number];
  dark: boolean;
}) {
  const className = dark
    ? "inline-flex items-center gap-2 border border-white/40 px-4 py-3 text-sm font-normal text-white transition-opacity hover:opacity-80"
    : "inline-flex items-center gap-3 border border-[#ded9ce] bg-[#f4f1eb] px-4 py-3 text-sm font-normal text-navy transition-opacity hover:opacity-70";

  if (brand.href) {
    const onThisSite = new URL(brand.href, "https://tmk-limited.com").hostname === "tmk-limited.com";
    const href = onThisSite ? new URL(brand.href, "https://tmk-limited.com").pathname : brand.href;
    return (
      <Link href={href} target={onThisSite ? undefined : "_blank"} rel={onThisSite ? undefined : "noopener noreferrer"} className={className}>
        {brand.name}
        <span aria-hidden className={dark ? "text-white/70" : "text-gold"}>↗</span>
      </Link>
    );
  }

  return (
    <span
      className={
        dark
          ? "inline-flex border border-white/35 px-4 py-3 text-sm font-normal text-white"
          : "inline-flex border border-[#ded9ce] bg-[#f4f1eb] px-4 py-3 text-sm font-normal text-navy-muted"
      }
    >
      {brand.name}
    </span>
  );
}

function DirectionCard({
  item,
  index,
  isLast,
}: {
  item: DirectionItem;
  index: number;
  isLast: boolean;
}) {
  const panelLeft = item.panelSide === "left";
  const dark = item.panelVariant !== "white";

  return (
    <article
      className={`relative bg-bg-muted ${isLast ? "" : "sticky top-0"}`}
      style={{ zIndex: index }}
    >
      {/* Desktop: Tilda artboard 1440×691 — image 1282×595, panel 509×557 */}
      <div className="relative hidden h-[691px] w-full lg:block">
        <TildaIn
          style="zoomin"
          delay={index * 0.05}
          className="absolute top-[13.75%] left-[5.49%] h-[86.06%] w-[89.03%] overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="90vw"
          />
        </TildaIn>

        <TildaIn
          style="zoomin"
          delay={0.1 + index * 0.05}
          className={`absolute top-[16.5%] flex h-[80.61%] w-[35.35%] flex-col p-[42px] ${PANEL_BG[item.panelVariant]} ${
            panelLeft ? "left-[6.81%]" : "left-[57.85%]"
          }`}
        >
          <h3
            className={`text-[2.125rem] font-medium leading-[1.2] ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {item.title}
          </h3>
          <ul className="mt-6 space-y-3.5">
            {item.bullets.map((bullet) => (
              <li
                key={bullet}
                className={`flex gap-3 text-base font-normal leading-[1.55] ${
                  dark ? "text-white/95" : "text-navy-muted"
                }`}
              >
                <span
                  className={`mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full ${
                    dark ? "bg-white" : "bg-navy"
                  }`}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {item.brands.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {item.brands.map((brand) => (
                <BrandLink key={brand.name} brand={brand} dark={dark} />
              ))}
            </div>
          )}
        </TildaIn>
      </div>

      {/* Tablet / mobile */}
      <div className="lg:hidden">
        <TildaIn style="zoomin" className="relative aspect-[300/171] w-full overflow-hidden sm:aspect-[580/420]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </TildaIn>
        <div className={`px-6 py-8 sm:px-10 sm:py-10 ${PANEL_BG[item.panelVariant]}`}>
          <TildaIn style="fadeindown" speed="title">
            <h3
              className={`text-2xl font-semibold sm:text-[1.625rem] ${
                dark ? "text-white" : "text-navy"
              }`}
            >
              {item.title}
            </h3>
          </TildaIn>
          <ul className="mt-5 space-y-3.5">
            {item.bullets.map((bullet, bulletIndex) => (
              <TildaIn key={bullet} style="zoomin" speed="item" delay={0.1 + bulletIndex * 0.1}>
                <li
                  className={`flex gap-3 text-[0.9375rem] font-normal leading-[1.6] sm:text-base ${
                    dark ? "text-white/95" : "text-navy-muted"
                  }`}
                >
                  <span
                    className={`mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full ${
                      dark ? "bg-white" : "bg-gold"
                    }`}
                  />
                  <span>{bullet}</span>
                </li>
              </TildaIn>
            ))}
          </ul>
          {item.brands.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {item.brands.map((brand, brandIndex) => (
                <TildaIn
                  key={brand.name}
                  style="zoomin"
                  speed="item"
                  delay={0.1 + (item.bullets.length + brandIndex) * 0.1}
                >
                  <BrandLink brand={brand} dark={dark} />
                </TildaIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function DirectionsSection() {
  const { t } = useLanguage();

  return (
    <section id="uslugi" className="scroll-mt-[84px] bg-bg">
      <div className="tilda-container pt-14 pb-2 md:pt-16 lg:pt-[72px]">
        <TildaStagger className="mb-10 max-w-3xl lg:mb-8">
          <TildaItem style="fadeindown" speed="text">
            <p className="section-label !mb-0">{t.directions.label}</p>
          </TildaItem>
          <TildaItem style="fadeindown" speed="title">
            <h2 className="section-title mt-6 max-w-[650px] lg:mt-7">{t.directions.heading}</h2>
          </TildaItem>
        </TildaStagger>
      </div>

      <div className="relative">
        {t.directions.items.map((item, index) => (
          <DirectionCard
            key={item.id}
            item={item}
            index={index}
            isLast={index === t.directions.items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
