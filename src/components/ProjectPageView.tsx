"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import type { ProjectPageContent } from "@/lib/i18n/types";
import { localizedProjectsIndex } from "@/lib/project-paths";
import { tmkImages } from "@/lib/site";

interface ProjectPageProps {
  content: ProjectPageContent;
  image: string;
  heroImage?: string;
}

export function ProjectPageView({ content, image, heroImage }: ProjectPageProps) {
  const { locale, t } = useLanguage();
  const [firstWord, ...rest] = content.heading.split(" ");

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[744px] items-end overflow-hidden pb-[74px] text-white">
          <Image src={heroImage ?? image} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="tilda-container relative">
            <p className="mb-[49px] text-sm text-white/70">
              <Link href={`/${locale}`}>{t.nav.home}</Link><span className="mx-5">/</span>
              <Link href={localizedProjectsIndex(locale)}>{t.nav.projects}</Link><span className="mx-5">/</span>
              <span className="text-gold">{content.heroTitle}</span>
            </p>
            <h1 className="text-[3rem] font-normal uppercase leading-[1.1] sm:text-[3.75rem]">{content.heroTitle}</h1>
            <p className="mt-[27px] max-w-[660px] text-[17px] leading-[1.45]">{content.description[0]}</p>
          </div>
        </section>

        <section className="bg-white">
          <div className="tilda-container grid gap-12 pb-[96px] pt-[84px] lg:grid-cols-[minmax(0,1fr)_544px] lg:gap-14">
            <div className="flex min-h-[564px] max-w-[580px] flex-col">
              <p className="section-label">{content.label}</p>
              <h2 className="section-title mt-5"><span className="text-gold">{firstWord}</span>{rest.length > 0 ? ` ${rest.join(" ")}` : ""}</h2>
              <div className="mt-9 space-y-6 text-base leading-[1.55] text-navy">
                {content.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-auto grid grid-cols-3 gap-5 pt-8">
                {content.stats.map((stat) => <div key={stat.label}><p className="text-[26px] text-gold">{stat.value}</p><p className="mt-3 text-[15px] leading-[1.55] text-navy">{stat.label}</p></div>)}
              </div>
              <div className="mt-[45px] border-l-[3px] border-gold bg-[#f4f1eb] px-5 py-5">
                <p className="text-[15px] text-gold">{content.missionLabel}</p>
                <p className="mt-4 text-[15px] leading-[1.5] text-navy">{content.mission}</p>
              </div>
            </div>
            <div className="relative min-h-[564px] overflow-hidden">
              <Image src={image} alt={content.heroTitle} fill className="object-cover" sizes="(max-width:1200px) 100vw, 544px" />
              <Image src={tmkImages.footerLogo} alt="" width={110} height={58} className="absolute bottom-10 right-9 w-[110px]" />
            </div>
          </div>
        </section>

        <section className="bg-[#ecedf0] pb-[72px] pt-[80px]">
          <div className="tilda-container">
            <p className="section-label">{content.servicesLabel}</p>
            <h2 className="section-title mt-7 lg:mt-[37px] lg:!text-[40px] lg:!leading-[1.5]">{content.servicesHeading}</h2>
            <div className="project-page-services-grid mt-9 grid gap-3 sm:grid-cols-2 lg:mt-[9px]">
              {content.services.map((service, index) => (
                <div key={service} className="min-h-[185px] bg-white p-7 lg:min-h-[285px] lg:p-8">
                  <span className="text-[26px] text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-14 text-[17px] leading-[1.4] text-navy">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
