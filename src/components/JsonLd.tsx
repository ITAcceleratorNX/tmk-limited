"use client";

import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";

export function JsonLd() {
  const { locale } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Almaty",
      addressCountry: "KZ",
      streetAddress: locale === "ru" ? "ул. Елебекова 10/1" : "10/1 Elebekov St.",
    },
    description:
      locale === "ru"
        ? "TMK Holding — инвестиционный холдинг полного цикла. Инвестиции, коммерческая недвижимость (Extra Space), маркетинг (Qaitadan), цифровые технологии (Techno Horizon). Резидент МФЦА, работаем с 2017 года."
        : "TMK Holding — a full-cycle investment holding. Investments, commercial real estate (Extra Space), marketing (Qaitadan), digital technology (Techno Horizon). AIFC resident, operating since 2017.",
    foundingDate: "2017",
    areaServed: ["KZ", "International"],
    sameAs: ["https://extraspace.kz/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
