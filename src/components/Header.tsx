"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useContactPopup } from "@/components/ContactPopupProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig, tmkImages } from "@/lib/site";
import { projectPaths } from "@/lib/project-paths";
import { locales, localizedHref, localeSwitchHref } from "@/lib/i18n";

const navItems = [
  { key: "home" as const, href: "/#top", id: "top" },
  { key: "about" as const, href: "/about/ru", id: "about" },
  { key: "projects" as const, href: "/projects/ru", id: "projects" },
  { key: "services" as const, href: "/#uslugi", id: "uslugi" },
  { key: "partners" as const, href: "/#partners", id: "partners" },
  { key: "contacts" as const, href: "/contacts/ru", id: "contacts" },
];

export function Header() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const { openContactPopup } = useContactPopup();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(true);

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

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const hasHero = ["/", "/ru", "/en", "/kz", "/about", "/about/ru", "/about/en", "/about/kz"].includes(pathname) ||
    (pathname.startsWith("/projects/") && pathname !== "/projects/ru" && pathname !== "/projects/en" && pathname !== "/projects/kz") ||
    Object.values(projectPaths).some((path) =>
      pathname === path ||
      pathname === path.replace(/\/ru$/, "/en") ||
      pathname === path.replace(/\/ru$/, "/kz"),
    );
  const lightHeader = !hasHero || scrolled || !onHero;

  const linkClass = () =>
    `text-[14.4px] font-medium leading-[23px] transition-colors ${
      lightHeader
        ? "text-navy hover:text-gold"
        : "text-white hover:text-gold"
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
      <div className={`header-shell tilda-container flex h-[72px] translate-y-[2px] items-center justify-between gap-2 min-[400px]:h-[84px] min-[400px]:gap-3 sm:h-[90px] sm:gap-4 ${lightHeader ? "header-shell-light" : "header-shell-hero"}`}>
        <Link href={`/${locale}`} className="header-logo relative z-10 flex min-w-0 shrink-0 items-center gap-3">
          <Image
            src={tmkImages.logo}
            alt={siteConfig.name}
            width={123}
            height={60}
            priority
            className={`h-[28px] w-auto transition-[filter] duration-300 min-[400px]:h-[33px] ${lightHeader ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <nav className="header-nav hidden items-center lg:flex">
          {navItems.map((item) => (
            <a key={item.key} href={localizedHref(item.href, locale)} className={linkClass()}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="header-controls hidden shrink-0 items-center lg:flex">
          <div
            className="header-languages flex border-r text-sm font-medium"
            style={{ borderColor: lightHeader ? "#c7cbd0" : "#ffffff66" }}
          >
            {locales.map((lang) => (
              <Link
                key={lang}
                href={localeSwitchHref(pathname, lang)}
                className={`uppercase outline-none transition-colors ${
                  locale === lang
                    ? "text-gold"
                    : lightHeader
                      ? "text-navy/60 hover:text-navy"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {lang}
              </Link>
            ))}
          </div>
          <div className={`header-contact hidden flex-col xl:flex ${lightHeader ? "mr-[42px] w-[184px]" : "mr-[6px] w-[208px]"}`}>
            <a href={`tel:${siteConfig.phone}`} className={`header-phone whitespace-nowrap font-medium ${lightHeader ? "text-[22px] leading-[28px] text-navy" : "text-[24px] leading-[37px] text-white"}`}>
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className={`header-email whitespace-nowrap font-medium leading-[23px] ${lightHeader ? "text-[13.5px] text-text-muted" : "text-[14px] text-white/75"}`}>
              {siteConfig.email}
            </a>
          </div>
          <Button size="sm" className="header-cta !bg-navy !font-medium hover:!bg-navy-muted" onClick={openContactPopup}>
            {t.nav.contactUs}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 min-[400px]:gap-3 lg:hidden">
          {locales.map((lang) => (
            <Link
              key={lang}
              href={localeSwitchHref(pathname, lang)}
              className={`text-xs uppercase min-[400px]:text-sm ${locale === lang ? "text-gold" : lightHeader ? "text-navy/60" : "text-white/70"}`}
            >
              {lang}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center bg-navy min-[400px]:h-[48px] min-[400px]:w-[48px] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t.nav.close : t.nav.menu}
        >
          <span className={`absolute left-1/2 h-0.5 w-5 -translate-x-1/2 bg-white transition-all ${open ? "top-[23px] rotate-45" : "top-[19px]"}`} />
          <span className={`absolute left-1/2 h-0.5 w-5 -translate-x-1/2 bg-white transition-all ${open ? "top-[23px] -rotate-45" : "top-[27px]"}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 h-dvh bg-black/80 lg:hidden"
          >
            <button type="button" className="absolute inset-0 w-full" aria-label={t.nav.close} onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 w-[300px] max-w-[calc(100vw-40px)] bg-white px-[25px]"
            >
              <button
                type="button"
                aria-label={t.nav.close}
                onClick={() => setOpen(false)}
                className="absolute right-0 top-0 flex h-[48px] w-[48px] items-center justify-center text-navy"
              >
                <span className="absolute h-[2px] w-[25px] rotate-45 bg-navy" />
                <span className="absolute h-[2px] w-[25px] -rotate-45 bg-navy" />
              </button>
              <Link href={`/${locale}`} onClick={() => setOpen(false)} className="mt-[40px] block w-fit">
                <Image src={tmkImages.logo} alt={siteConfig.name} width={123} height={60} className="h-[60px] w-auto" />
              </Link>
              <nav className="mt-[25px] flex flex-col gap-[14px]">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={localizedHref(item.href, locale)}
                    onClick={() => setOpen(false)}
                    className="text-[18px] font-medium leading-[23px] text-navy"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
