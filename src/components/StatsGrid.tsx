"use client";

import { motion } from "framer-motion";
import type { StatItem } from "@/lib/i18n";
import { fadeUp, scaleUp } from "@/lib/motion";

function StatCell({
  value,
  label,
  index,
  band = false,
}: StatItem & { index: number; band?: boolean }) {
  return (
    <motion.div
      variants={band ? fadeUp : scaleUp}
      className={`text-center ${band ? "" : "card-flat bg-bg-surface p-8 md:p-10"}`}
    >
      <motion.p
        className={`font-serif font-medium leading-none tracking-tight ${
          band
            ? "stat-value text-4xl md:text-5xl lg:text-6xl"
            : "text-gold text-3xl md:text-4xl"
        }`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
      >
        {value}
      </motion.p>
      <motion.p
        className={`mt-3 text-xs font-semibold uppercase tracking-[0.18em] ${
          band ? "stat-label" : "text-text-muted"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.4 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

interface StatsGridProps {
  items: StatItem[];
  columns?: 3 | 4 | 6;
  band?: boolean;
}

export function StatsGrid({ items, columns = 3, band = false }: StatsGridProps) {
  const gridClass =
    columns === 6
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      : columns === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-3";

  if (band) {
    return (
      <motion.div
        className={`grid gap-8 md:gap-4 ${gridClass}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {items.map((item, i) => (
          <StatCell key={item.label} {...item} index={i} band />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`grid gap-px bg-border ${gridClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {items.map((item, i) => (
        <StatCell key={item.label} {...item} index={i} />
      ))}
    </motion.div>
  );
}
