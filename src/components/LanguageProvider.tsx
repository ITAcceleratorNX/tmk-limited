"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";
import {
  getTranslations,
  localeFromPathname,
  type Locale,
  type Translations,
} from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle("locale-kk", locale === "kk");
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      t: getTranslations(locale),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
