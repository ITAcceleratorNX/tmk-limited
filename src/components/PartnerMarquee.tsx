"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const partnerLogos = [
  { name: "Chevron", logo: "/images/tmk/partners/chevron.svg" },
  { name: "BAZIS", logo: "/images/tmk/partners/bazis.webp" },
  { name: "Yandex", logo: "/images/tmk/partners/yandex.png" },
  { name: "TELE2", logo: "/images/tmk/partners/tele2.webp" },
  { name: "Samsung", logo: "/images/tmk/partners/samsung.webp" },
  { name: "Chanel", logo: "/images/tmk/partners/chanel.webp" },
  { name: "Bosch", logo: "/images/tmk/partners/bosch.svg" },
  { name: "PUBG Mobile", logo: "/images/tmk/partners/pubg.png" },
  { name: "Highland Gold", logo: "/images/tmk/partners/highland-gold.png" },
  { name: "Bonduelle", logo: "/images/tmk/partners/bonduelle.png" },
  { name: "Magnum", logo: "/images/tmk/partners/magnum.png" },
  { name: "Coca-Cola", logo: "/images/tmk/partners/coca-cola.png" },
  { name: "Kcell", logo: "/images/tmk/partners/kcell.png" },
];

export function PartnerMarquee() {
  const { t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    track.current?.scrollBy({ left: direction * 486, behavior: "smooth" });
  };

  return (
    <section id="partners" className="scroll-mt-[84px] overflow-hidden bg-[#ecedf0] pb-[42px]">
      <div className="tilda-container">
        <p className="section-label !mb-[45px]">{t.partners.label}</p>
        <div className="flex items-center justify-between gap-8">
          <h2 className="section-title">{t.partners.heading}</h2>
          <div className="hidden items-center gap-3 lg:flex">
            <p className="mr-2 max-w-[110px] text-sm leading-tight text-[#6e7783]">{t.partners.hint}</p>
            <svg aria-hidden className="mr-6 h-9 w-9 text-[#6e7783]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 31c-6-4-9-9-10-13-.4-2 2-3 3.3-1.4l3.2 3.6V6.5a2.5 2.5 0 0 1 5 0V16c.8-2.2 3.8-1.8 4.3.2 1-1.9 3.9-1.2 4.1.9 1.5-1.3 3.9-.2 3.9 1.8 0 5.6-3.1 9.6-7.1 12.1z"/><path d="M11 6c-1.5 1-2.5 2.5-2.5 4.5M22 6c1.5 1 2.5 2.5 2.5 4.5"/></svg>
            <button type="button" onClick={() => move(-1)} aria-label="Previous partners" className="flex h-12 w-12 items-center justify-center border border-navy text-2xl text-navy">‹</button>
            <button type="button" onClick={() => move(1)} aria-label="Next partners" className="flex h-12 w-12 items-center justify-center border border-navy text-2xl text-navy">›</button>
          </div>
        </div>
      </div>

      <div ref={track} className="mt-[43px] flex gap-[15px] overflow-x-auto scroll-smooth pl-[5.5%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {partnerLogos.map((partner) => (
          <div key={partner.name} className="flex h-[134px] w-[228px] shrink-0 items-center justify-center bg-white px-6">
            <Image src={partner.logo} alt={partner.name} width={180} height={90} className={`h-[90px] object-contain ${partner.name === "Chevron" ? "w-[80px]" : partner.name === "Yandex" ? "w-[130px]" : partner.name === "TELE2" ? "w-[135px]" : partner.name === "Samsung" ? "w-[180px]" : "w-[135px]"}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
