"use client";

import Image from "next/image";
import { TildaItem, TildaStagger } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";

function PartnerCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="partner-card flex h-[5.5rem] w-44 shrink-0 items-center justify-center px-6 md:h-24 md:w-52">
      <Image
        src={logo}
        alt={name}
        width={130}
        height={44}
        className="partner-logo h-8 w-auto max-w-[7.5rem] md:h-10"
        draggable={false}
      />
    </div>
  );
}

export function PartnerMarquee() {
  const { t } = useLanguage();
  const loopItems = [...t.partners.items, ...t.partners.items];

  return (
    <section id="partners" className="section-pad scroll-mt-24 overflow-hidden bg-bg-cream">
      <div className="tilda-container">
        <TildaStagger className="mb-10 md:mb-12">
          <TildaItem style="fadeindown" speed="text">
            <p className="section-label">{t.partners.label}</p>
          </TildaItem>
          <TildaItem style="fadeindown" speed="title">
            <h2 className="section-title">{t.partners.heading}</h2>
          </TildaItem>
          <TildaItem style="fadeindown" speed="text">
            <p className="mt-2 text-sm font-light text-text-muted">{t.partners.hint}</p>
          </TildaItem>
        </TildaStagger>
      </div>

      <div className="relative mt-2 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20"
          style={{ background: "linear-gradient(90deg, var(--bg-cream) 15%, transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20"
          style={{ background: "linear-gradient(270deg, var(--bg-cream) 15%, transparent 100%)" }}
        />

        <div className="partners-marquee-viewport">
          <div className="partners-marquee-track" aria-label={t.partners.heading}>
            {loopItems.map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} name={partner.name} logo={partner.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
