"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useLanguage } from "@/components/LanguageProvider";

export function MobileCta() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(
        window.scrollY > 600 &&
          window.scrollY < document.body.scrollHeight - 900,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: visible ? 0 : 80 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="fixed bottom-0 inset-x-0 z-40 p-4 sm:hidden"
      style={{
        background: "var(--header-bg)",
        borderTop: "1px solid var(--header-border)",
        backdropFilter: "blur(16px)",
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
      }}
    >
      <Button href="#contacts" className="w-full">
        {t.nav.cta}
      </Button>
    </motion.div>
  );
}

export function AboutVisual() {
  const { t } = useLanguage();
  const pillars = [
    { label: t.about.ecosystem.investments, pos: "top-0 left-1/2 -translate-x-1/2" },
    { label: t.about.ecosystem.realEstate, pos: "right-0 top-1/2 -translate-y-1/2" },
    { label: t.about.ecosystem.marketing, pos: "bottom-0 left-1/2 -translate-x-1/2" },
    { label: t.about.ecosystem.technology, pos: "left-0 top-1/2 -translate-y-1/2" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm px-4 sm:px-0">
      <motion.div
        className="absolute inset-8 border border-border"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      />
      <div className="absolute inset-16 border border-border-gold" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center border border-gold bg-bg-surface">
          <span className="font-serif text-lg font-medium text-gold">TMK</span>
        </div>
      </div>
      {pillars.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className={`absolute ${p.pos} max-w-[46%] text-center border border-border bg-bg-surface px-2 py-1.5 text-[0.625rem] font-semibold uppercase tracking-wider text-text-muted sm:max-w-none sm:px-3 sm:py-2 sm:text-[0.6875rem]`}
        >
          {p.label}
        </motion.div>
      ))}
    </div>
  );
}
