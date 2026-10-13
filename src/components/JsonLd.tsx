"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const { locale, t } = useLanguage();

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
    description: t.meta.description,
    areaServed: ["KZ", "International"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
