"use client";

import { motion } from "framer-motion";
import { StatsGrid } from "@/components/StatsGrid";
import { useLanguage } from "@/components/LanguageProvider";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { fadeUp } from "@/lib/motion";
type DirectionKey =
  | "extraSpace"
  | "development"
  | "technoHorizon"
  | "qaitadan"
  | "itSolutions";

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid min-w-0 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3 text-sm text-text">
          <span className="mt-2 h-1 w-4 shrink-0 bg-gold" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DirectionLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  if (links.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card-flat flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-text hover:text-gold"
        >
          <span className="text-gold">↗</span>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function DirectionCard({
  directionKey,
  index,
}: {
  directionKey: DirectionKey;
  index: number;
}) {
  const { t } = useLanguage();

  const meta = {
    extraSpace: {
      label: t.directions.tabs.extraSpace,
      heading: t.extraSpace.heading,
      description: t.extraSpace.description,
      stats: t.extraSpace.stats,
      features: t.extraSpace.features,
      badges: [] as string[],
      links: [{ href: t.extraSpace.links.extraSpace, label: "extraspace.kz" }],
    },
    development: {
      label: t.directions.tabs.development,
      heading: t.development.heading,
      description: t.development.description,
      stats: [] as typeof t.extraSpace.stats,
      features: t.development.features,
      badges: [] as string[],
      links: [] as { href: string; label: string }[],
    },
    technoHorizon: {
      label: t.directions.tabs.technoHorizon,
      heading: t.technoHorizon.heading,
      description: t.technoHorizon.description,
      stats: [] as typeof t.extraSpace.stats,
      features: t.technoHorizon.products,
      badges: t.technoHorizon.badges,
      links: [
        ...(t.technoHorizon.links.workflow.appStore
          ? [{ href: t.technoHorizon.links.workflow.appStore, label: "Workflow — App Store" }]
          : []),
        { href: t.technoHorizon.links.extraSpace, label: "Extra Space" },
        { href: t.technoHorizon.links.phystech, label: "PhysTech LMS" },
      ],
    },
    qaitadan: {
      label: t.directions.tabs.qaitadan,
      heading: t.qaitadan.heading,
      description: t.qaitadan.description,
      stats: t.qaitadan.stats,
      features: t.qaitadan.services,
      badges: [] as string[],
      links: [] as { href: string; label: string }[],
    },
    itSolutions: {
      label: t.directions.tabs.itSolutions,
      heading: t.itSolutions.heading,
      description: t.itSolutions.description,
      stats: [] as typeof t.extraSpace.stats,
      features: t.itSolutions.services,
      badges: [] as string[],
      links: [] as { href: string; label: string }[],
    },
  }[directionKey];

  return (
    <motion.article
      id={directionKey}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: index * 0.06,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="card scroll-mt-24 overflow-hidden"
    >
      <div className="flex min-w-0 flex-col p-6 md:p-10">
        <div className="mb-6 border-b border-border-gold pb-6">
          <span className="mb-3 block font-serif text-5xl font-medium leading-none text-gold/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mb-2 break-words text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {meta.label}
          </p>
          <h3 className="text-balance break-words font-serif text-2xl font-medium leading-tight text-text md:text-3xl">
            {meta.heading}
          </h3>
        </div>

        <p className="mb-6 break-words text-sm leading-relaxed text-text-muted">
          {meta.description}
        </p>

        {meta.badges.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {meta.badges.map((badge) => (
              <span
                key={badge}
                className="border border-border-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {meta.stats.length > 0 && (
          <StatsGrid items={meta.stats} compact />
        )}

        {meta.features.length > 0 && (
          <div className={meta.stats.length > 0 ? "mt-8" : ""}>
            <FeatureList items={meta.features} />
          </div>
        )}

        <DirectionLinks links={meta.links} />
      </div>
    </motion.article>
  );
}

export function DirectionsTabs() {
  const directions: DirectionKey[] = [
    "extraSpace",
    "development",
    "technoHorizon",
    "qaitadan",
    "itSolutions",
  ];

  return (
    <StaggerChildren className="min-w-0 space-y-8" fast>
      {directions.map((key, index) => (
        <motion.div key={key} variants={fadeUp}>
          <DirectionCard directionKey={key} index={index} />
        </motion.div>
      ))}
    </StaggerChildren>
  );
}
