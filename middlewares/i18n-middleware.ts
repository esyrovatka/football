import createIntlMiddleware from "next-intl/middleware";

import { SupportedLocales } from "@/core";

const locales = Object.values(SupportedLocales);

export const I18NMiddleware = createIntlMiddleware({
  locales,
  localeDetection: true,
  defaultLocale: SupportedLocales.EN,
});
