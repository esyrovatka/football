import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { SupportedLocales } from "@/core";

const locales = Object.values(SupportedLocales);

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  const data = (await import(`./locales/${locale}`)).default;
  return {
    messages: data,
  };
});
