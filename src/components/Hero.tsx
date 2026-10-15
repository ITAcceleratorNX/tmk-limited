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
  const { locale, t } = useLanguage();
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
            initial={{ opacity: 0, scale: 1.25 }}
            animate={{ opacity: 1, scale: 1.3 }}
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
        className="hero-content tilda-container relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 min-[400px]:pb-[56px] min-[400px]:pt-36"
        style={{ y: contentY, opacity }}
      >
        <TildaIn style="fadeindown" speed="title" delay={0.2} mode="load">
          <h1 className="hero-title max-w-[850px] text-[1.625rem] font-medium uppercase leading-[1.15] text-white min-[400px]:text-[2rem] min-[400px]:leading-[35.2px] sm:text-[2.5rem] lg:font-normal lg:leading-[1.1]">
            {locale === "ru" ? (
              <>Создаём ценность<br />в ключевых отраслях:<br />от недвижимости<span className="hidden sm:inline"> </span><br className="sm:hidden" />до IT</>
            ) : locale === "kz" ? (
              <>Негізгі салаларда<br />құн жасаймыз:<br />мүліктен IT-ге дейін</>
            ) : (
              <>{titleLead}{titleRest ? <><br />{titleRest}</> : null}</>
            )}
          </h1>
        </TildaIn>
        <TildaIn style="zoomin" speed="text" delay={0.35} mode="load" className="hero-subtitle-wrap mt-4 max-w-[550px] min-[400px]:mt-[22px] sm:mt-8">
          <p className="hero-subtitle text-[0.9375rem] font-normal leading-[1.45] text-white/95 min-[400px]:text-base">
            {t.hero.subtitle}
          </p>
        </TildaIn>
        <TildaIn style="zoomin" delay={0.5} mode="load" className="hero-cta-wrap mt-8 min-[400px]:mt-10 sm:mt-16">
          <Button size="lg" className="hero-cta-button max-sm:w-full max-sm:!font-medium" onClick={openContactPopup}>
            {t.hero.cta}
          </Button>
        </TildaIn>
      </motion.div>
      <div aria-hidden className="hero-scroll-indicator absolute bottom-[96px] right-[5.5%] hidden h-[42px] w-[23px] rounded-full border border-white/80 lg:block">
        <span className="absolute left-1/2 top-2 h-2 w-[1px] -translate-x-1/2 bg-white/80" />
      </div>
    </section>
  );
}
