"use client";

import Image from "next/image";
import { TildaIn, TildaItem, TildaParallaxShape, TildaStagger } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import { tmkImages } from "@/lib/site";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad scroll-mt-24 bg-bg">
      <div className="tilda-container grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <TildaIn style="zoomin" className="relative">
          <TildaParallaxShape className="absolute -right-4 top-3 -z-10 hidden h-[95%] w-[88%] sm:block">
            <div className="h-full w-full bg-[linear-gradient(160deg,#c4cdd3_0%,#8e9da4_100%)]" />
          </TildaParallaxShape>
          <div className="relative aspect-[512/628] overflow-hidden">
            <Image
              src={tmkImages.about}
              alt={t.about.heading}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <Image
              src={tmkImages.aboutBadge}
              alt=""
              width={192}
              height={94}
              aria-hidden
              className="absolute left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 opacity-90"
            />
          </div>
        </TildaIn>

        <TildaStagger>
          <TildaItem style="fadeindown" speed="text">
            <p className="section-label">{t.about.label}</p>
          </TildaItem>
          <TildaItem style="fadeindown" speed="title">
            <h2 className="section-title max-w-[445px] text-[2rem] md:text-[2.5rem]">
              {t.about.heading}
            </h2>
          </TildaItem>
          <TildaItem style="zoomin" speed="text">
            <p className="mt-6 max-w-[516px] text-[0.9375rem] font-light leading-[1.55] text-text-muted">
              {t.about.description}
            </p>
          </TildaItem>
          <TildaItem style="zoomin" speed="item">
            <div className="mt-6 flex flex-wrap gap-2">
              {t.about.missionTags.map((tag) => (
                <span key={tag} className="mission-tag">
                  {tag}
                </span>
              ))}
            </div>
          </TildaItem>
          <TildaItem style="zoomin" speed="text">
            <div className="mt-8 flex gap-4 border-l-2 border-gold pl-4">
              <div>
                <p className="text-sm font-semibold text-navy">{t.about.missionLabel}</p>
                <p className="mt-3 max-w-[446px] text-[0.9375rem] font-light leading-[1.55] text-text-muted">
                  {t.about.missionText}
                </p>
              </div>
            </div>
          </TildaItem>
          <TildaItem style="fadeinright">
            <a
              href="#uslugi"
              className="mt-10 inline-flex h-[50px] w-[260px] items-center justify-between border border-border px-6 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
            >
              {t.about.readMore}
              <span aria-hidden>→</span>
            </a>
          </TildaItem>
        </TildaStagger>
      </div>
    </section>
  );
}
