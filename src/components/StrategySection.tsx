"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { useLanguage } from "@/components/LanguageProvider";
import type { StrategyItem } from "@/lib/i18n/types";
import { fadeUp } from "@/lib/motion";

function StrategyCell({
  item,
  index,
  goalBadge,
}: {
  item: StrategyItem;
  index: number;
  goalBadge: string;
}) {
  const number = String(index + 1).padStart(2, "0");
  const isGoal = index === 5;

  return (
    <motion.article variants={fadeUp} className="strategy-cell group relative h-full">
      <div className="strategy-cell-accent" aria-hidden />

      <div className="relative flex h-full flex-col p-6 sm:p-7 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
          <span className="font-serif text-3xl font-medium leading-none text-gold sm:text-4xl md:text-5xl">
            {number}
          </span>
          {isGoal && (
            <span className="shrink-0 border border-border-gold bg-gold-dim px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold sm:text-[0.625rem]">
              {goalBadge}
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg font-medium leading-snug text-text-heading sm:text-xl md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted sm:mt-3 sm:text-[0.9375rem]">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function StrategySection() {
  const { t } = useLanguage();

  return (
    <Section
      id="strategy"
      label={t.strategy.title}
      heading={t.strategy.heading}
      description={t.strategy.description}
      headerVariant="fadeUp"
      className="strategy-section"
    >
      <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {t.strategy.items.map((item, index) => (
          <StrategyCell
            key={item.title}
            item={item}
            index={index}
            goalBadge={t.strategy.goalBadge}
          />
        ))}
      </StaggerChildren>
    </Section>
  );
}
