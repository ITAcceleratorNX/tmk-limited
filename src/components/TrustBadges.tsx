"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export function TrustBadges() {
  const { t } = useLanguage();
  const items = [...t.hero.trustStrip, ...t.technoHorizon.badges];

  return (
    <div className="border-y border-border bg-bg-elevated py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 md:px-10">
        {items.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
            className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted"
          >
            <motion.span
              className="h-px w-4 bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 + 0.1, duration: 0.4 }}
            />
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
