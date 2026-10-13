import { en } from "./en";
import { kk } from "./kk";
import { ru } from "./ru";
import type { Locale, Translations } from "./types";

const dictionaries: Record<Locale, Translations> = { ru, en, kk };

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}

export {
  locales,
  localeFromPathname,
  localizedHref,
  localeSwitchHref,
} from "./locale";
export type { Locale, Translations } from "./types";
