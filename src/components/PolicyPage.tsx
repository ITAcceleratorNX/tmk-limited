"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { privacyEn, privacyRu } from "@/lib/i18n/privacy";

export function PolicyPage() {
  const { locale, t } = useLanguage();
  const content = locale === "ru" ? privacyRu : privacyEn;

  return (
    <div className="min-h-screen bg-bg">
      <header
        className="border-b border-border px-6 py-5 md:px-10"
        style={{ background: "var(--header-bg)" }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="font-serif text-xl font-medium text-text-heading">
            TMK Holding
          </Link>
          <Link
            href="/"
            className="text-sm text-text-muted transition-colors hover:text-gold"
          >
            {t.footer.backHome}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="gold-line mb-8" />
        <h1 className="font-serif text-4xl font-medium text-text-heading md:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 text-sm text-text-muted">{content.updated}</p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-text-heading">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
