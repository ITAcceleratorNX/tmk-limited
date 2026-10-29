import type { Locale } from "./types";
import { projectHref, projectPaths } from "@/lib/project-paths";

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

  // Project public paths always keep an explicit locale segment (/workflow/en, not /workflow)
  const projectId = Object.entries(projectPaths).find(([, path]) => {
    const base = path.replace(/\/ru$/, "");
    return href === path || href === `${base}/kz` || href === `${base}/en` || href === base;
  })?.[0];
  if (projectId) {
    return projectHref(projectId, locale);
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

  // Internal App Router paths: /projects/workflow → public /workflow/{locale}
  const internalProject = pathname.match(/^\/projects\/([^/]+)(?:\/(ru|en|kz))?$/);
  if (internalProject && projectPaths[internalProject[1]]) {
    return projectHref(internalProject[1], target);
  }

  // Public project paths: /workflow/ru, /valar-group, …
  const publicProject = Object.entries(projectPaths).find(([, path]) => {
    const base = path.replace(/\/ru$/, "");
    return (
      pathname === path ||
      pathname === `${base}/kz` ||
      pathname === `${base}/en` ||
      pathname === base
    );
  });
  if (publicProject) {
    return projectHref(publicProject[0], target);
  }

  // Paths with an explicit locale suffix: /about/ru, …
  if (/\/(ru|en|kz)$/.test(pathname)) {
    return pathname.replace(/\/(ru|en|kz)$/, `/${target}`);
  }

  // EN pages often omit the suffix: /about, /projects, /contacts, /policy
  return localizedHref(`${pathname}/ru`, target);
}
