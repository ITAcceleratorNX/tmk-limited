"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { getPrivacy } from "@/lib/i18n/privacy";
import { locales, localeSwitchHref } from "@/lib/i18n";

export function PolicyPage() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const content = getPrivacy(locale);

  return (
    <div className="min-h-screen bg-bg">
      <header
        className="border-b border-border px-6 py-5 md:px-10"
        style={{ background: "var(--header-bg)" }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-xl font-semibold text-text-heading">
            TMK Limited
          </Link>
          <div className="flex items-center gap-5">
            <div className="flex gap-3 text-sm font-medium uppercase">
              {locales.map((lang) => (
                <Link
                  key={lang}
                  href={localeSwitchHref(
                    pathname === "/policy" ? "/policy/ru" : pathname,
                    lang,
                  )}
                  className={
                    locale === lang ? "text-gold" : "text-text-muted hover:text-navy"
                  }
                >
                  {lang}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}`}
              className="text-sm text-text-muted transition-colors hover:text-gold"
            >
              {t.footer.backHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="gold-line mb-8" />
        <h1 className="text-4xl font-semibold text-text-heading md:text-5xl">
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
