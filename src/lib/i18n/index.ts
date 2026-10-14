import { en } from "./en";
import { kz } from "./kz";
import { ru } from "./ru";
import type { Locale, Translations } from "./types";

const dictionaries: Record<Locale, Translations> = { ru, en, kz };

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
