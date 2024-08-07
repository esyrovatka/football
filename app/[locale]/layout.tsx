import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React, { FC, PropsWithChildren } from "react";

import { Head, SupportedLocales } from "@/core";

import "@/core/styles/main.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next App",
  };
}

// @ts-ignore
const RootLayout: FC<PropsWithChildren> = ({ params: { locale }, children }) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <Head locale={locale || SupportedLocales.EN} />
      <body>
        {/* <StoreProvider> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="main">{children}</main>
        </NextIntlClientProvider>
        {/* </StoreProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
