"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useLanguage } from "@/components/LanguageProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { Locale } from "@/lib/i18n";

const navItems = [
  { key: "about" as const, href: "#about", id: "about" },
  { key: "directions" as const, href: "#directions", id: "directions" },
  { key: "projects" as const, href: "#projects", id: "projects" },
  { key: "results" as const, href: "#results", id: "results" },
  { key: "strategy" as const, href: "#strategy", id: "strategy" },
  { key: "contacts" as const, href: "#contacts", id: "contacts" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Header() {
  const { locale, t, setLocale } = useLanguage();
  const { setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const onHero = !scrolled;

  const navColor = onHero
    ? "text-white/70 hover:text-white"
    : "text-text-muted hover:text-text-heading";

  const navActiveColor = onHero ? "text-gold" : "text-gold";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "var(--header-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--header-border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#" className="relative z-50">
            <Image
              src="/images/logo.svg"
              alt="TMK Holding"
              width={110}
              height={28}
              className="h-7 w-auto"
              style={{
                filter: onHero ? "brightness(0) invert(1)" : "var(--logo-filter)",
              }}
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`relative text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 ${
                  activeId === item.id ? navActiveColor : navColor
                }`}
              >
                {t.nav[item.key]}
                {activeId === item.id && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                type="button"
                aria-label={t.nav.theme}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`flex h-9 w-9 items-center justify-center transition-colors ${
                  onHero
                    ? "text-white/70 hover:text-white"
                    : "text-text-muted hover:text-text-heading"
                }`}
                style={{
                  border: onHero
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "1px solid var(--border)",
                }}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
            )}

            <div
              className="hidden items-center sm:flex"
              style={{
                border: onHero
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid var(--border)",
              }}
            >
              {(["ru", "en"] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    locale === lang
                      ? "bg-gold text-navy-deep"
                      : onHero
                        ? "text-white/60 hover:text-white"
                        : "text-text-muted hover:text-text-heading"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Button href="#contacts" className="hidden sm:inline-flex !py-2.5 !px-5 !text-xs">
              {t.nav.cta}
            </Button>

            <button
              type="button"
              aria-label={open ? t.nav.close : t.nav.menu}
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className="block h-px w-full transition-all duration-300"
                  style={{
                    background: onHero && !open ? "#ffffff" : "var(--text-heading)",
                    transform: open ? "rotate(45deg) translateY(5px)" : "none",
                  }}
                />
                <span
                  className="block h-px w-full transition-all duration-300"
                  style={{
                    background: onHero && !open ? "#ffffff" : "var(--text-heading)",
                    opacity: open ? 0 : 1,
                  }}
                />
                <span
                  className="block h-px w-full transition-all duration-300"
                  style={{
                    background: onHero && !open ? "#ffffff" : "var(--text-heading)",
                    transform: open ? "rotate(-45deg) translateY(-5px)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-40 flex h-full w-[min(100%,300px)] flex-col bg-bg-surface lg:hidden"
            style={{ borderLeft: "1px solid var(--border)" }}
          >
            <div className="flex flex-1 flex-col px-6 pb-8 pt-24">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 text-base font-medium text-text-heading"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </nav>

              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="mt-6 flex items-center gap-2 border border-border px-4 py-3 text-sm font-medium text-text-heading"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                  {isDark ? "Light mode" : "Dark mode"}
                </button>
              )}

              <div className="mt-4 flex border border-border">
                {(["ru", "en"] as Locale[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLocale(lang)}
                    className={`flex-1 py-2.5 text-xs font-semibold uppercase ${
                      locale === lang ? "bg-gold text-navy-deep" : "text-text-muted"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <Button href="#contacts" className="mt-6 w-full" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
