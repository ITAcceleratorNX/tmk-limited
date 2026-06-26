"use client";

import { motion } from "framer-motion";
import type { StatItem } from "@/lib/i18n";
import { fadeUp, scaleUp } from "@/lib/motion";

function StatCell({
  value,
  label,
  index,
  band = false,
  compact = false,
}: StatItem & { index: number; band?: boolean; compact?: boolean }) {
  return (
    <motion.div
      variants={band ? fadeUp : scaleUp}
      className={`min-w-0 text-center ${
        band
          ? ""
          : compact
            ? "card-flat bg-bg-surface p-4 md:p-5"
            : "card-flat bg-bg-surface p-8 md:p-10"
      }`}
    >
      <motion.p
        className={`font-serif font-medium leading-none tracking-tight ${
          band
            ? "stat-value text-4xl md:text-5xl lg:text-6xl"
            : compact
              ? "text-gold text-xl md:text-2xl"
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
        className={`mt-2 break-words leading-snug ${
          compact
            ? "text-[10px] font-semibold uppercase tracking-wide text-text-muted md:text-xs"
            : `mt-3 text-xs font-semibold uppercase tracking-[0.18em] ${
                band ? "stat-label" : "text-text-muted"
              }`
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
  columns?: 2 | 3 | 4 | 6;
  band?: boolean;
  compact?: boolean;
}

export function StatsGrid({
  items,
  columns = 3,
  band = false,
  compact = false,
}: StatsGridProps) {
  const gridClass = compact
    ? "grid-cols-2"
    : columns === 6
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      : columns === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : columns === 2
          ? "grid-cols-2"
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
      className={`grid min-w-0 gap-px overflow-hidden bg-border ${gridClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {items.map((item, i) => (
        <StatCell key={item.label} {...item} index={i} compact={compact} />
      ))}
    </motion.div>
  );
}
