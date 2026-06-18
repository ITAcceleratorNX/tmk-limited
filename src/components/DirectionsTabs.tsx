"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StatsGrid } from "@/components/StatsGrid";
import { useLanguage } from "@/components/LanguageProvider";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { fadeUp } from "@/lib/motion";

type TabKey =
  | "extraSpace"
  | "development"
  | "technoHorizon"
  | "qaitadan"
  | "itSolutions";

function FeatureList({ items }: { items: string[] }) {
  return (
    <StaggerChildren className="grid gap-3 sm:grid-cols-2" fast>
      {items.map((item, i) => (
        <motion.li
          key={item}
          variants={fadeUp}
          whileHover={{ x: 6, borderColor: "var(--border-gold)" }}
          className="card-flat flex list-none items-center gap-3 px-5 py-4 text-sm text-text"
        >
          <motion.span
            className="h-1 w-4 shrink-0 bg-gold"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          />
          {item}
        </motion.li>
      ))}
    </StaggerChildren>
  );
}

export function DirectionsTabs() {
  const { t } = useLanguage();
  const tabs: { key: TabKey; label: string }[] = [
    { key: "extraSpace", label: t.directions.tabs.extraSpace },
    { key: "development", label: t.directions.tabs.development },
    { key: "technoHorizon", label: t.directions.tabs.technoHorizon },
    { key: "qaitadan", label: t.directions.tabs.qaitadan },
    { key: "itSolutions", label: t.directions.tabs.itSolutions },
  ];

  const [active, setActive] = useState<TabKey>("extraSpace");
  const [direction, setDirection] = useState(1);

  function switchTab(key: TabKey) {
    const currentIndex = tabs.findIndex((t) => t.key === active);
    const newIndex = tabs.findIndex((t) => t.key === key);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActive(key);
  }

  return (
    <div className="card-flat p-6 md:p-10">
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => switchTab(tab.key)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`tab-pill shrink-0 ${active === tab.key ? "tab-pill-active" : ""}`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={{
            hidden: (d: number) => ({
              opacity: 0,
              x: d * 40,
              filter: "blur(6px)",
            }),
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
            exit: (d: number) => ({
              opacity: 0,
              x: d * -40,
              filter: "blur(6px)",
              transition: { duration: 0.28 },
            }),
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {active === "extraSpace" && (
            <>
              <StatsGrid items={t.extraSpace.stats} columns={4} />
              <div className="mt-8">
                <FeatureList items={t.extraSpace.features} />
              </div>
            </>
          )}
          {active === "development" && (
            <FeatureList items={t.development.features} />
          )}
          {active === "technoHorizon" && (
            <>
              <div className="mb-6 flex flex-wrap gap-2">
                {t.technoHorizon.badges.map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.04 }}
                    className="border border-border-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
              <FeatureList items={t.technoHorizon.products} />
            </>
          )}
          {active === "qaitadan" && (
            <>
              <StatsGrid items={t.qaitadan.stats} columns={4} />
              <div className="mt-8">
                <FeatureList items={t.qaitadan.services} />
              </div>
            </>
          )}
          {active === "itSolutions" && (
            <FeatureList items={t.itSolutions.services} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
