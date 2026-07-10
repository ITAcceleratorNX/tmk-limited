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
      streetAddress: siteConfig.address[locale],
    },
    description:
      locale === "ru"
        ? "TMK Limited объединяет ключевые отрасли — от недвижимости до агротехнологий."
        : "TMK Limited unites key industries — from real estate to agrotech.",
    areaServed: ["KZ", "International"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
