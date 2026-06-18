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
        ? "TMK Holding — экосистема роста для вашего бизнеса. Инвестиции, недвижимость, маркетинг, технологии."
        : "TMK Holding — a growth ecosystem for your business. Investments, real estate, marketing, technology.",
    foundingDate: "2017",
    areaServed: ["KZ", "International"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
