"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import { PolicyPage } from "@/components/PolicyPage";

export default function Policy() {
  return (
    <LanguageProvider>
      <PolicyPage />
    </LanguageProvider>
  );
}
