import { localeFromPathname } from "@/lib/i18n/locale";
import { projectPaths } from "@/lib/project-paths";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-FRMRS7EX1W";
export const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID || 113898105);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

/** Public project slug for events (workflow, valar-group, …) or home. */
export function analyticsProject(pathname: string): string {
  for (const [, path] of Object.entries(projectPaths)) {
    const base = path.replace(/\/ru$/, "");
    if (pathname === path || pathname === base || pathname.startsWith(`${base}/`)) {
      return base.slice(1);
    }
  }

  const match = pathname.match(/^\/projects\/([^/]+)/);
  if (match && !["ru", "en", "kz"].includes(match[1])) {
    const path = projectPaths[match[1]];
    if (path) return path.replace(/^\//, "").replace(/\/ru$/, "");
    return match[1];
  }

  return "home";
}

export function track(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", name === "lead_form" ? "generate_lead" : name, params);
  window.ym?.(YM_ID, "reachGoal", name, params);
}

export function leadFormParams(pathname: string) {
  return {
    page: pathname,
    lang: localeFromPathname(pathname),
    project: analyticsProject(pathname),
  };
}
