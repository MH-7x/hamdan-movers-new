import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LanguageFormatContainer from "@/components/base/LanguageFormatContainer";
import "../globals.css";
import local from "next/font/local";
import Navbar from "@/components/base/Navbar";

const customFont = local({
  src: "../../public/madefor-display.var.original.ttf",
  weight: "400",
  variable: "--font-madefor",
  fallback: ["system-ui", "sans-serif"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={customFont.className}>
        <div
          aria-hidden
          className="gr-bg fixed top-0 left-0 w-full h-full -z-10"
        />
        <Navbar />
        <NextIntlClientProvider messages={messages}>
          <LanguageFormatContainer>{children}</LanguageFormatContainer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
