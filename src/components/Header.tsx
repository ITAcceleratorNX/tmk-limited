"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useContactPopup } from "@/components/ContactPopupProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { siteConfig, tmkImages } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const navItems = [
  { key: "home" as const, href: "#top", id: "top" },
  { key: "about" as const, href: "#about", id: "about" },
  { key: "projects" as const, href: "#projects", id: "projects" },
  { key: "services" as const, href: "#uslugi", id: "uslugi" },
  { key: "partners" as const, href: "#partners", id: "partners" },
  { key: "contacts" as const, href: "#contacts", id: "contacts" },
];

export function Header() {
  const { locale, t, setLocale } = useLanguage();
  const { openContactPopup } = useContactPopup();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(true);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setOnHero(y < window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lightHeader = scrolled || !onHero;

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      activeId === id
        ? "text-gold"
        : lightHeader
          ? "text-navy/70 hover:text-navy"
          : "text-white/80 hover:text-white"
    }`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: lightHeader ? "var(--header-bg)" : "transparent",
        borderBottom: lightHeader ? "1px solid var(--header-border)" : "1px solid transparent",
        backdropFilter: lightHeader ? "blur(12px)" : "none",
        boxShadow: lightHeader ? "0 4px 24px rgba(43,63,88,0.06)" : "none",
      }}
    >
      <div className="tilda-container flex items-center justify-between gap-4 py-4 lg:h-[70px] lg:py-0">
        <Link href="/" className="relative z-10 flex shrink-0 items-center gap-3">
          <Image
            src={tmkImages.logo}
            alt={siteConfig.name}
            width={123}
            height={60}
            priority
            className={`h-8 w-auto transition-[filter] duration-300 md:h-9 lg:h-10 ${
              lightHeader ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={linkClass(item.id)}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <div
            className={`flex overflow-hidden text-xs font-semibold ${
              lightHeader ? "border border-border" : "border border-white/25"
            }`}
          >
            {(["en", "ru"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  locale === lang
                    ? "bg-gold text-white"
                    : lightHeader
                      ? "text-navy/70 hover:text-navy"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`hidden text-sm transition-colors 2xl:block ${
              lightHeader ? "text-navy/60 hover:text-gold" : "text-white/70 hover:text-white"
            }`}
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className={`hidden text-sm transition-colors xl:block ${
              lightHeader ? "text-navy/60 hover:text-gold" : "text-white/70 hover:text-white"
            }`}
          >
            {siteConfig.phoneDisplay}
          </a>
          <Button size="sm" onClick={openContactPopup}>
            {t.nav.contactUs}
          </Button>
        </div>

        <button
          type="button"
          className={`relative z-10 flex h-10 w-10 items-center justify-center border lg:hidden ${
            lightHeader ? "border-border" : "border-white/30"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? t.nav.close : t.nav.menu}
        >
          <span
            className={`block h-0.5 w-5 transition-transform ${lightHeader ? "bg-navy" : "bg-white"} ${open ? "translate-y-0 rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`absolute block h-0.5 w-5 transition-opacity ${lightHeader ? "bg-navy" : "bg-white"} ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-5 transition-transform ${lightHeader ? "bg-navy" : "bg-white"} ${open ? "-translate-y-0.5 -rotate-45" : "translate-y-1"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-navy"
                >
                  {t.nav[item.key]}
                </a>
              ))}
              <div className="mt-4 flex gap-2">
                {(["en", "ru"] as Locale[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLocale(lang)}
                    className={`px-4 py-2 text-xs font-semibold uppercase ${
                      locale === lang ? "bg-gold text-white" : "border border-border text-navy"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <Button className="mt-4 w-full" onClick={() => { setOpen(false); openContactPopup(); }}>
                {t.nav.contactUs}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
