import { en } from "./en";
import { ru } from "./ru";
import type { Locale, Translations } from "./types";

export const dictionaries: Record<Locale, Translations> = { ru, en };

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}

export type { Locale, Translations, InterestOption, StatItem } from "./types";
