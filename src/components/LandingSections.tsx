"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { DirectionsTabs } from "@/components/DirectionsTabs";
import { AboutVisual, MobileCta } from "@/components/MobileCta";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { Section } from "@/components/Section";
import { StatsGrid } from "@/components/StatsGrid";
import { StrategySection } from "@/components/StrategySection";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjectImage } from "@/lib/site";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  scaleUp,
  blurIn,
  rotateIn,
} from "@/lib/motion";

export function LandingSections() {
  const { t } = useLanguage();

  return (
    <>
      <Section
        id="about"
        label={t.about.title}
        heading={t.about.heading}
        headerVariant="slideInLeft"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateIn variant="slideInLeft">
            <p className="text-lg leading-[1.8] text-text-muted">
              {t.about.description}
            </p>
            <ul className="mt-10 space-y-4">
              {t.about.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.55 }}
                  className="flex items-start gap-4 text-sm text-text"
                >
                  <span className="mt-0.5 font-serif text-lg text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn variant="rotateIn" delay={0.15}>
            <AboutVisual />
          </AnimateIn>
        </div>
      </Section>

      <section id="stats" className="stat-band section-pad scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <AnimateIn variant="blurIn" className="mb-14 text-center md:mb-20">
            <motion.div
              className="gold-line mx-auto mb-6 origin-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {t.stats.title}
            </p>
            <h2 className="font-serif text-3xl font-medium text-white md:text-5xl">
              {t.stats.heading}
            </h2>
          </AnimateIn>
          <StatsGrid items={t.stats.items} columns={6} band />
        </div>
      </section>

      <Section
        id="trust"
        label={t.trust.title}
        heading={t.trust.heading}
        dark
        headerVariant="fadeDown"
      >
        <PartnerMarquee />
      </Section>

      <Section
        id="projects"
        label={t.realEstate.title}
        heading={t.realEstate.heading}
        description={t.realEstate.description}
        headerVariant="scaleUp"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {t.realEstate.projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 48, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group card overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden md:h-64">
                <Image
                  src={getProjectImage(project.name)}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--overlay-gradient)" }}
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  {project.metric && (
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-gold">
                      {project.metric}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {project.name}
                  </h3>
                </div>
                {project.highlight && (
                  <span className="absolute right-4 top-4 border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.highlight}
                  </span>
                )}
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="directions"
        label={t.directions.title}
        heading={t.directions.heading}
        description={t.directions.description}
        dark
        headerVariant="slideInRight"
      >
        <AnimateIn variant="blurIn" delay={0.1}>
          <DirectionsTabs />
        </AnimateIn>
      </Section>

      <Section
        id="results"
        label={t.marketingResults.title}
        heading={t.marketingResults.heading}
        headerVariant="fadeUp"
      >
        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {t.marketingResults.cases.map((item, i) => (
            <motion.article
              key={item.name}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card p-8 md:p-10"
            >
              {item.metric && (
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {item.metric}
                </span>
              )}
              <h3 className="font-serif text-2xl font-medium text-text-heading">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
              {item.result && (
                <motion.p
                  className="mt-6 border-t border-border pt-5 text-sm font-medium text-gold"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {item.result}
                </motion.p>
              )}
            </motion.article>
          ))}
        </StaggerChildren>
      </Section>

      <StrategySection />

      <section className="cta-section relative section-pad overflow-hidden scroll-mt-20">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--gold) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <AnimateIn variant="scaleUp">
            <motion.div
              className="gold-line mx-auto mb-8 origin-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <h2 className="font-serif text-3xl font-medium text-white md:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              {t.finalCta.description}
            </p>
            <motion.div
              className="mt-10"
              whileInView={{ scale: [0.92, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button href="#contacts" size="lg">
                {t.finalCta.cta}
              </Button>
            </motion.div>
          </AnimateIn>
          <motion.div
            className="mt-16 border-t border-white/10 pt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <StatsGrid items={t.stats.items.slice(0, 3)} columns={3} band />
          </motion.div>
        </div>
      </section>

      <Section
        id="contacts"
        label={t.contact.title}
        heading={t.contact.title}
        description={t.contact.description}
        headerVariant="blurIn"
      >
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            {[
              {
                label: t.contact.labels.email,
                value: t.contact.email,
                href: `mailto:${t.contact.email}`,
              },
              {
                label: t.contact.labels.phone,
                value: t.contact.phone,
                href: `tel:${t.contact.phone.replace(/\s/g, "")}`,
              },
              { label: t.contact.hours, value: t.contact.hoursValue },
              { label: t.contact.labels.address, value: t.contact.address },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-base text-text-heading transition-colors hover:text-gold"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base text-text">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
          <AnimateIn className="lg:col-span-3" variant="slideInRight" delay={0.15}>
            <ContactForm />
          </AnimateIn>
        </div>
      </Section>

      <MobileCta />
    </>
  );
}
