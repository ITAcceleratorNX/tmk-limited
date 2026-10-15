"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const partnerLogos = [
  { name: "Chevron", logo: "/images/tmk/partners/chevron.svg", width: "w-[80px]" },
  { name: "BAZIS", logo: "/images/tmk/partners/bazis.webp", width: "w-[135px]" },
  { name: "Yandex", logo: "/images/tmk/partners/yandex.png", width: "w-[130px]" },
  { name: "TELE2", logo: "/images/tmk/partners/tele2.webp", width: "w-[135px]" },
  { name: "Samsung", logo: "/images/tmk/partners/samsung.webp", width: "w-[180px]" },
  { name: "Chanel", logo: "/images/tmk/partners/chanel.webp", width: "w-[135px]" },
  { name: "Bosch", logo: "/images/tmk/partners/bosch.svg", width: "w-[135px]" },
  { name: "PUBG Mobile", logo: "/images/tmk/partners/pubg.png", width: "w-[135px]" },
  { name: "Highland Gold", logo: "/images/tmk/partners/highland-gold.png", width: "w-[135px]" },
  { name: "Bonduelle", logo: "/images/tmk/partners/bonduelle.png", width: "w-[135px]" },
  { name: "Magnum", logo: "/images/tmk/partners/magnum.png", width: "w-[135px]" },
  { name: "Coca-Cola", logo: "/images/tmk/partners/coca-cola.png", width: "w-[135px]" },
  { name: "Kcell", logo: "/images/tmk/partners/kcell.png", width: "w-[135px]" },
];

function PartnerCard({
  partner,
  duplicate,
}: {
  partner: (typeof partnerLogos)[number];
  duplicate?: boolean;
}) {
  return (
    <div
      className="flex h-[100px] w-[168px] shrink-0 items-center justify-center bg-white px-4 min-[400px]:h-[120px] min-[400px]:w-[200px] sm:h-[134px] sm:w-[228px] sm:px-6"
      aria-hidden={duplicate || undefined}
    >
      <Image
        src={partner.logo}
        alt={duplicate ? "" : partner.name}
        width={180}
        height={90}
        className={`h-[64px] object-contain min-[400px]:h-[78px] sm:h-[90px] ${partner.width}`}
      />
    </div>
  );
}

export function PartnerMarquee() {
  const { t } = useLanguage();
  const loop = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="scroll-mt-[84px] overflow-hidden bg-[#ecedf0] pb-[42px]">
      <div className="tilda-container">
        <p className="section-label !mb-[45px]">{t.partners.label}</p>
        <h2 className="section-title">{t.partners.heading}</h2>
      </div>

      <div className="group mt-8 overflow-hidden pl-4 min-[400px]:mt-[43px] min-[400px]:pl-5 sm:pl-[5.5%]">
        <div className="partners-marquee-track flex w-max gap-2.5 min-[400px]:gap-[15px]">
          {loop.map((partner, index) => (
            <PartnerCard
              key={`${partner.name}-${index}`}
              partner={partner}
              duplicate={index >= partnerLogos.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
