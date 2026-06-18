"use client";

import { useEffect } from "react";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LandingSections } from "@/components/LandingSections";
import { TrustBadges } from "@/components/TrustBadges";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";

function MetaUpdater() {
  const { locale, t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", t.meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", t.meta.description);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", locale === "ru" ? "ru_KZ" : "en_US");
    }
  }, [locale, t]);

  return null;
}

function PageContent() {
  return (
    <>
      <MetaUpdater />
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <LandingSections />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
