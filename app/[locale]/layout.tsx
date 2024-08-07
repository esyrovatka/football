import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React, { FC, PropsWithChildren } from "react";
import { Lato } from "next/font/google";
import { Head, SupportedLocales } from "@/core";

import "@/core/styles/main.scss";
import { Header } from "@/widgets";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next App",
    description: "Site for testing next and react",
  };
}

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// @ts-ignore
const RootLayout: FC<PropsWithChildren> = ({ params: { locale }, children }) => {
  const messages = useMessages();

  return (
    <html lang={locale} className={lato.className}>
      <Head locale={locale || SupportedLocales.EN} />
      <body>
        {/* <StoreProvider> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="main">{children}</main>
        </NextIntlClientProvider>
        {/* </StoreProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
