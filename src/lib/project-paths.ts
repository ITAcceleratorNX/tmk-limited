import type { Locale } from "@/lib/i18n/types";

/** Canonical RU public paths (Tilda-style), rewritten in next.config.ts */
export const projectPaths: Record<string, string> = {
  streamline: "/streamline-logistics/ru",
  kazagris: "/kazagris-ventures/ru",
  qaitadan: "/qaitadan-creative-partners/ru",
  valar: "/valar-group/ru",
  tm3ki: "/tm-3ki-drilling-llp/ru",
  qazconnect: "/qazconnect-telecom/ru",
  horeca: "/table61/ru",
  technohorizon: "/tmk-technohorizon-llp/ru",
  workflow: "/workflow/ru",
};

export const projectOrder = [
  "streamline",
  "kazagris",
  "qaitadan",
  "valar",
  "tm3ki",
  "qazconnect",
  "horeca",
  "technohorizon",
  "workflow",
] as const;

/** Thumbnails on /projects grid (override when card art differs from i18n image). */
export const projectThumbnails: Record<string, string> = {
  streamline: "/images/tmk/directions/logistics.png",
  kazagris: "/images/tmk/directions/agriculture.jpg",
  qaitadan: "/images/tmk/directions/marketing.jpg",
  valar: "/images/tmk/projects/valar.png",
  tm3ki: "/images/tmk/projects/tm3ki.png",
  qazconnect: "/images/tmk/projects/qazconnect.png",
  horeca: "/images/tmk/projects/horeca.jpg",
  technohorizon: "/images/tmk/directions/telecom.jpg",
  workflow: "/images/tmk/projects/workflow.jpg",
};

/** Keep /en|/kk|/ru suffix — project rewrites require an explicit locale segment. */
export function projectHref(projectId: string, locale: Locale): string {
  const path = projectPaths[projectId];
  if (!path) return localizedProjectsIndex(locale);
  if (locale === "ru") return path;
  if (locale === "kk") return path.replace(/\/ru$/, "/kk");
  return path.replace(/\/ru$/, "/en");
}

export function localizedProjectsIndex(locale: Locale): string {
  if (locale === "en") return "/projects";
  if (locale === "kk") return "/projects/kk";
  return "/projects/ru";
}
