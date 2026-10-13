import type { Locale } from "./types";

export const locales: Locale[] = ["en", "ru", "kk"];

export function localeFromPathname(pathname: string): Locale {
  if (
    pathname === "/kk" ||
    pathname.endsWith("/kk") ||
    pathname.includes("/kk/")
  ) {
    return "kk";
  }

  if (
    pathname === "/en" ||
    pathname.endsWith("/en") ||
    pathname.includes("/en/")
  ) {
    return "en";
  }

  if (
    pathname === "/ru" ||
    pathname.endsWith("/ru") ||
    pathname.includes("/ru/") ||
    pathname === "/"
  ) {
    return "ru";
  }

  // Existing EN pages often omit the locale suffix: /about, /projects, /contacts
  return "en";
}

/** Convert a canonical RU-style href into the active locale. */
export function localizedHref(href: string, locale: Locale): string {
  if (href.startsWith("/#")) {
    return `/${locale}${href.slice(1)}`;
  }

  if (locale === "en") {
    return href.replace(/\/(ru|kk)$/, "");
  }

  if (locale === "kk") {
    return href.replace(/\/ru$/, "/kk").replace(/\/en$/, "/kk");
  }

  return href.replace(/\/kk$/, "/ru").replace(/\/en$/, "/ru");
}

/** Switch locale while staying on the same page. */
export function localeSwitchHref(pathname: string, target: Locale): string {
  if (
    pathname === "/" ||
    pathname === "/ru" ||
    pathname === "/en" ||
    pathname === "/kk"
  ) {
    return `/${target}`;
  }

  // Paths with an explicit locale suffix: /about/ru, /streamline-logistics/kk, …
  if (/\/(ru|en|kk)$/.test(pathname)) {
    return pathname.replace(/\/(ru|en|kk)$/, `/${target}`);
  }

  // EN pages often omit the suffix: /about, /projects, /contacts
  return localizedHref(`${pathname}/ru`, target);
}
