"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { useLanguage } from "@/components/LanguageProvider";
import { heroStagger, fadeUp, blurIn } from "@/lib/motion";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-section relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          className="relative h-[120%] w-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero/main.jpg"
            alt="TMK Holding — commercial real estate and business infrastructure"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40"
        style={{ y: contentY, opacity }}
      >
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-8"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="gold-line mb-8 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            />

            <motion.p
              variants={blurIn}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--hero-muted)" }}
            >
              {t.hero.brand}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-[2.5rem] font-medium leading-[1.08] md:text-6xl lg:text-[4.5rem]"
              style={{ color: "var(--hero-text)" }}
            >
              {t.hero.tagline}
              <br />
              <span className="text-gold">{t.hero.taglineAccent}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-relaxed md:text-xl"
              style={{ color: "var(--hero-muted)" }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button href="#contacts" size="lg">
                {t.hero.cta}
              </Button>
              <Button href="#about" variant="outline" size="lg">
                {t.nav.about}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-3 gap-px bg-white/10 backdrop-blur-sm lg:grid-cols-1">
              {t.hero.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.14, duration: 0.6 }}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                  className="bg-black/30 px-5 py-6 backdrop-blur-md transition-colors lg:px-8 lg:py-7"
                >
                  <p className="font-serif text-2xl font-medium text-gold md:text-3xl">
                    {stat.value}
                  </p>
                  <p
                    className="mt-1.5 text-xs uppercase tracking-wider"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
