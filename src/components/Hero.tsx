"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { useContactPopup } from "@/components/ContactPopupProvider";
import { TildaIn } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import { tmkImages } from "@/lib/site";

const SLIDE_DURATION = 6000;

export function Hero() {
  const { t } = useLanguage();
  const { openContactPopup } = useContactPopup();
  const ref = useRef<HTMLElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = tmkImages.heroSlides;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const [titleLead, titleRest] = (() => {
    const idx = t.hero.title.indexOf(":");
    if (idx === -1) return [t.hero.title, ""];
    return [t.hero.title.slice(0, idx + 1).trim(), t.hero.title.slice(idx + 1).trim()];
  })();

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slideIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000, ease: "linear" },
            }}
          >
            <Image
              src={slides[slideIndex]}
              alt=""
              fill
              priority={slideIndex === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <motion.div
        className="tilda-container relative flex min-h-[100svh] flex-col justify-end pb-20 pt-36 md:pb-24 lg:pb-16"
        style={{ y: contentY, opacity }}
      >
        <TildaIn style="fadeindown" speed="title" delay={0.2} mode="load">
          <h1 className="max-w-4xl text-[2rem] font-semibold leading-[1.12] text-white md:text-[3.125rem] lg:text-[3.25rem]">
            {titleLead}
            {titleRest ? (
              <>
                <br />
                <span className="font-semibold">{titleRest}</span>
              </>
            ) : null}
          </h1>
        </TildaIn>
        <TildaIn style="zoomin" speed="text" delay={0.35} mode="load" className="mt-9 max-w-2xl lg:max-w-[689px]">
          <p className="text-base font-light leading-relaxed text-white/80 md:text-lg">
            {t.hero.subtitle}
          </p>
        </TildaIn>
        <TildaIn style="zoomin" delay={0.5} mode="load" className="mt-8">
          <Button size="lg" onClick={openContactPopup}>
            {t.hero.cta}
          </Button>
        </TildaIn>
      </motion.div>
    </section>
  );
}
