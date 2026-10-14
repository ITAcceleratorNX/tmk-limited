import type { Locale } from "./types";

export const locales: Locale[] = ["en", "ru", "kz"];

export function localeFromPathname(pathname: string): Locale {
  if (
    pathname === "/kz" ||
    pathname.endsWith("/kz") ||
    pathname.includes("/kz/")
  ) {
    return "kz";
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
    return href.replace(/\/(ru|kz)$/, "");
  }

  if (locale === "kz") {
    return href.replace(/\/ru$/, "/kz").replace(/\/en$/, "/kz");
  }

  return href.replace(/\/kz$/, "/ru").replace(/\/en$/, "/ru");
}

/** Switch locale while staying on the same page. */
export function localeSwitchHref(pathname: string, target: Locale): string {
  if (
    pathname === "/" ||
    pathname === "/ru" ||
    pathname === "/en" ||
    pathname === "/kz"
  ) {
    return `/${target}`;
  }

  // Paths with an explicit locale suffix: /about/ru, /streamline-logistics/kz, …
  if (/\/(ru|en|kz)$/.test(pathname)) {
    return pathname.replace(/\/(ru|en|kz)$/, `/${target}`);
  }

  // EN pages often omit the suffix: /about, /projects, /contacts, /policy
  return localizedHref(`${pathname}/ru`, target);
}
