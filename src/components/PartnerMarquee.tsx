"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { useLanguage } from "@/components/LanguageProvider";
import { getPartnerLogo } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

function PartnerCard({ name }: { name: string }) {
  const logo = getPartnerLogo(name);

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -2, borderColor: "var(--border-gold)" }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className="partner-card flex h-full min-h-[5.5rem] flex-col items-center justify-center gap-3 border border-border bg-bg-surface px-4 py-5 sm:min-h-[6rem] sm:px-5"
    >
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={140}
          height={32}
          className="partner-logo h-6 w-auto max-w-[7.5rem] sm:h-7 sm:max-w-[8.5rem]"
        />
      ) : null}
      <span className="text-center text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.12em] text-text-heading sm:text-xs">
        {name}
      </span>
    </motion.div>
  );
}

export function PartnerMarquee() {
  const { t } = useLanguage();

  return (
    <StaggerChildren className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
      {t.trust.partners.map((partner) => (
        <PartnerCard key={partner.name} name={partner.name} />
      ))}
    </StaggerChildren>
  );
}
