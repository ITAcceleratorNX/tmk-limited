"use client";

import { DirectionCard } from "@/components/DirectionCard";
import { TildaItem, TildaStagger } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import { isCompletedDirection } from "@/lib/completed-directions";

export function DirectionsSection() {
  const { t } = useLanguage();
  const items = t.directions.items.filter((item) => !isCompletedDirection(item.id));

  return (
    <section id="uslugi" className="scroll-mt-[84px] bg-bg">
      <div className="tilda-container pt-10 pb-2 min-[400px]:pt-14 md:pt-16 lg:pt-[72px]">
        <TildaStagger className="mb-8 max-w-3xl min-[400px]:mb-10 lg:mb-8">
          <TildaItem style="fadeindown" speed="text">
            <p className="section-label !mb-0">{t.directions.label}</p>
          </TildaItem>
          <TildaItem style="fadeindown" speed="title">
            <h2 className="section-title mt-4 max-w-[650px] min-[400px]:mt-6 lg:mt-7">{t.directions.heading}</h2>
          </TildaItem>
        </TildaStagger>
      </div>

      <div className="relative">
        {items.map((item, index) => (
          <DirectionCard
            key={item.id}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
