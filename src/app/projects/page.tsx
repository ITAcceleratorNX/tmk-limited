"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { TildaIn, TildaItem, TildaStagger } from "@/components/motion/TildaIn";

function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <ContactPopupProvider>
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="section-pad bg-bg">
          <div className="tilda-container">
            <TildaStagger className="mb-10 md:mb-14">
              <TildaItem style="fadeindown" speed="text">
                <p className="section-label">{t.completedProjects.label}</p>
              </TildaItem>
              <TildaItem style="fadeindown" speed="title">
                <h1 className="section-title">{t.completedProjects.heading}</h1>
              </TildaItem>
            </TildaStagger>

            <div className="grid gap-8 md:grid-cols-2">
              {t.completedProjects.items.map((project, index) => (
                <TildaIn key={project.id} style="zoomin" delay={index * 0.1}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="direction-card group block overflow-hidden shadow-sm"
                  >
                    <div className="relative h-64 overflow-hidden md:h-72">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="text-xl font-semibold text-navy md:text-2xl">
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm font-light leading-relaxed text-text-muted">
                        {project.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                        {t.completedProjects.viewMore}
                        <span aria-hidden>→</span>
                      </span>
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
