import type { Locale } from "@/i18n/routing";

export type LocalizedString = Record<Locale, string>;

export function pickLocalized(locale: string, value: LocalizedString): string {
  if (locale === "en") return value.en;
  return value.es;
}
