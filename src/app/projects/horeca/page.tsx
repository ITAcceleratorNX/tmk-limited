"use client";

import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { ProjectPageView } from "@/components/ProjectPageView";
import { tmkImages } from "@/lib/site";

function HorecaContent() {
  const { t } = useLanguage();
  return (
    <ContactPopupProvider>
      <ProjectPageView content={t.projectPages.horeca} image={tmkImages.projects.horeca} />
    </ContactPopupProvider>
  );
}

export default function HorecaPage() {
  return (
    <LanguageProvider>
      <HorecaContent />
    </LanguageProvider>
  );
}
