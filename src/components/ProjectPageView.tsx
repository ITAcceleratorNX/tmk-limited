"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useContactPopup } from "@/components/ContactPopupProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TildaIn, TildaItem, TildaStagger } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import type { ProjectPageContent } from "@/lib/i18n/types";

interface ProjectPageProps {
  content: ProjectPageContent;
  image: string;
}

export function ProjectPageView({ content, image }: ProjectPageProps) {
  const { t } = useLanguage();
  const { openContactPopup } = useContactPopup();

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[50vh] overflow-hidden">
          <TildaIn style="zoomin" mode="load" className="absolute inset-0">
            <Image src={image} alt={content.heroTitle} fill className="object-cover" priority />
          </TildaIn>
          <div className="absolute inset-0 bg-navy/70" />
          <div className="tilda-container relative flex min-h-[50vh] flex-col justify-end pb-12 pt-32 md:pb-16">
            <TildaIn style="fadeindown" speed="text" mode="load" delay={0.15}>
              <p className="mb-4 text-sm text-white/70">
                <Link href="/" className="hover:text-gold">
                  {t.footer.backHome}
                </Link>
                <span className="mx-2">/</span>
                {t.completedProjects.heading}
                <span className="mx-2">/</span>
                {content.heroTitle}
              </p>
            </TildaIn>
            <TildaIn style="fadeindown" speed="title" mode="load" delay={0.22}>
              <h1 className="text-3xl font-semibold text-white md:text-5xl">
                {content.heroTitle}
              </h1>
            </TildaIn>
          </div>
        </section>

        <section className="section-pad bg-bg">
          <div className="tilda-container">
            <div className="grid gap-12 lg:grid-cols-2">
              <TildaStagger>
                <TildaItem style="fadeindown" speed="text">
                  <p className="section-label">{content.label}</p>
                </TildaItem>
                <TildaItem style="fadeindown" speed="title">
                  <h2 className="section-title">{content.heading}</h2>
                </TildaItem>
                {content.description.map((paragraph) => (
                  <TildaItem key={paragraph} style="zoomin" speed="text">
                    <p className="mt-4 text-base font-light leading-[1.55] text-text-muted">
                      {paragraph}
                    </p>
                  </TildaItem>
                ))}
                <TildaItem style="zoomin" speed="text">
                  <p className="mt-8 text-sm font-semibold text-navy">{content.missionLabel}</p>
                  <p className="mt-3 text-base font-light text-text-muted">{content.mission}</p>
                </TildaItem>
              </TildaStagger>

              <TildaStagger className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {content.stats.map((stat) => (
                  <TildaItem key={stat.label} style="zoomin" speed="item">
                    <div className="border border-border bg-bg-muted p-6 text-center lg:text-left">
                      <p className="text-3xl font-semibold text-gold md:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                        {stat.label}
                      </p>
                    </div>
                  </TildaItem>
                ))}
              </TildaStagger>
            </div>
          </div>
        </section>

        <section className="section-pad bg-bg-muted">
          <div className="tilda-container">
            <TildaStagger>
              <TildaItem style="fadeindown" speed="text">
                <p className="section-label">{content.servicesLabel}</p>
              </TildaItem>
              <TildaItem style="fadeindown" speed="title">
                <h2 className="section-title">{content.servicesHeading}</h2>
              </TildaItem>
            </TildaStagger>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {content.services.map((service, index) => (
                <TildaIn key={service} style="zoomin" speed="item" delay={index * 0.08}>
                  <div className="flex gap-4 border border-border bg-white p-6">
                    <span className="text-2xl font-semibold text-gold/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-light leading-relaxed text-text-muted">
                      {service}
                    </span>
                  </div>
                </TildaIn>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold"
              >
                ← {t.footer.backHome}
              </Link>
              <Button onClick={openContactPopup}>{t.hero.cta}</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
