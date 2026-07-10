"use client";

import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { ProjectPageView } from "@/components/ProjectPageView";
import { tmkImages } from "@/lib/site";

function KazagrisContent() {
  const { t } = useLanguage();
  return (
    <ContactPopupProvider>
      <ProjectPageView content={t.projectPages.kazagris} image={tmkImages.projects.kazagris} />
    </ContactPopupProvider>
  );
}

export default function KazagrisPage() {
  return (
    <LanguageProvider>
      <KazagrisContent />
    </LanguageProvider>
  );
}
