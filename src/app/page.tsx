"use client";

import { useEffect } from "react";
import { Analytics } from "@/components/Analytics";
import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LandingSections } from "@/components/LandingSections";
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
  }, [locale, t]);

  return null;
}

function PageContent() {
  return (
    <ContactPopupProvider>
      <MetaUpdater />
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <LandingSections />
      </main>
      <Footer />
      <Analytics />
    </ContactPopupProvider>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
