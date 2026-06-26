"use client";

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
      whileHover={{ y: -2, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className="partner-card flex h-[4.5rem] items-center justify-center rounded-lg border border-white/10 bg-black px-4 py-3 sm:h-24"
    >
      {logo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={logo}
          alt={name}
          className="partner-logo max-h-10 w-auto max-w-full object-contain sm:max-h-12"
        />
      ) : (
        <span className="text-center text-xs font-medium text-white/50">{name}</span>
      )}
    </motion.div>
  );
}

export function PartnerMarquee() {
  const { t } = useLanguage();
  const partners = t.trust.partners;

  const row1 = partners.slice(0, 6);
  const row2 = partners.slice(6, 11);
  const row3 = partners.slice(11, 16);

  return (
    <StaggerChildren className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {row1.map((p) => (
          <PartnerCard key={p.name} name={p.name} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:px-[8.333%]">
        {row2.map((p) => (
          <PartnerCard key={p.name} name={p.name} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:px-[8.333%]">
        {row3.map((p) => (
          <PartnerCard key={p.name} name={p.name} />
        ))}
      </div>
    </StaggerChildren>
  );
}
