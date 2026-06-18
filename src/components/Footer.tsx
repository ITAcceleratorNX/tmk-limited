"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-bg-elevated py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-medium text-text-heading">
              TMK Holding
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {t.hero.subtitle}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              {t.contact.title}
            </p>
            <div className="space-y-2 text-sm text-text-muted">
              <a
                href={`mailto:${t.contact.email}`}
                className="block transition-colors hover:text-gold"
              >
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="block transition-colors hover:text-gold"
              >
                {t.contact.phone}
              </a>
              <p>{t.contact.address}</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              Menu
            </p>
            <nav className="flex flex-col gap-2 text-sm text-text-muted">
              <a href="#about" className="transition-colors hover:text-gold">
                {t.nav.about}
              </a>
              <a href="#directions" className="transition-colors hover:text-gold">
                {t.nav.directions}
              </a>
              <a href="#contacts" className="transition-colors hover:text-gold">
                {t.nav.contacts}
              </a>
              <Link href="/policy" className="transition-colors hover:text-gold">
                {t.footer.privacy}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <Link href="/policy" className="transition-colors hover:text-gold">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
