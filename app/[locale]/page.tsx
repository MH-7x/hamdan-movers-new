import ContactFormSection from "@/components/base/ContactFormSection";
import HeroSection from "@/components/base/HeroSection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");

  return (
    <>
      <HeroSection
        points={[
          { num: t("box21"), text: t("box22") },
          { num: t("box11"), text: t("box12") },
        ]}
        title={t("headingTitle")}
        subTitle={t("SubTitle")}
        desciptions={t("description")}
        buttonOne={{
          name: b("quote"),
          link: "/contact-us",
        }}
        buttonTwo={{
          name: b("Our Services"),
          link: "#services",
        }}
      />
      <ContactFormSection />
      <div className="h-screen" />
    </>
  );
}
