import { useLocale } from "next-intl";
import React from "react";

const LanguageFormatContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const locale = useLocale();
  return <main dir={locale === "ar" ? "rtl" : "ltr"}>{children}</main>;
};

export default LanguageFormatContainer;
