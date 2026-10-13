"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { TildaIn, TildaItem, TildaStagger } from "@/components/motion/TildaIn";
import {
  projectHref,
  projectOrder,
  projectThumbnails,
} from "@/lib/project-paths";

function ProjectsContent() {
  const { locale, t } = useLanguage();

  const items = [...t.completedProjects.items].sort(
    (a, b) => projectOrder.indexOf(a.id as (typeof projectOrder)[number]) - projectOrder.indexOf(b.id as (typeof projectOrder)[number]),
  );

  return (
    <ContactPopupProvider>
      <Header />
      <main className="pt-[90px] lg:pt-[84px]">
        <section className="bg-bg pb-24 pt-[68px] lg:pt-[84px]">
          <div className="tilda-container">
            <TildaStagger>
              <TildaItem style="fadeindown" speed="text">
                <p className="text-sm text-[#a99a81] lg:text-center">
                  <Link href={`/${locale}`} className="text-text-muted">
                    {t.nav.home}
                  </Link>
                  <span className="mx-5">/</span>
                  {t.completedProjects.label}
                </p>
              </TildaItem>
              <TildaItem style="fadeindown" speed="title">
                <h1 className="mt-4 text-center text-[2.25rem] font-normal uppercase leading-[1.1] text-navy lg:mt-5 lg:text-[3.75rem]">
                  {t.completedProjects.heading}
                </h1>
              </TildaItem>
            </TildaStagger>

            <div className="project-grid mt-[35px] grid gap-x-[22px] gap-y-[46px] md:grid-cols-2 lg:mt-[60px] lg:gap-y-[68px]">
              {items.map((project, index) => (
                <TildaIn key={project.id} style="zoomin" delay={index * 0.05}>
                  <Link href={projectHref(project.id, locale)} className="group block">
                    <div className="relative aspect-[343/239] overflow-hidden lg:aspect-[412/252]">
                      <Image
                        src={projectThumbnails[project.id]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="pt-[13px] lg:pt-[22px]">
                      <h2 className="text-[28.5px] font-medium leading-[44px] text-navy lg:text-[1.875rem] lg:leading-[1.2]">
                        {project.title}
                      </h2>
                      <p className="mt-[14px] max-w-[315px] text-[14px] font-medium leading-[18px] text-navy lg:mt-[27px] lg:max-w-[360px] lg:text-[12px] lg:leading-[16px]">
                        {project.excerpt}
                      </p>
                    </div>
                  </Link>
                </TildaIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ContactPopupProvider>
  );
}

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
}
