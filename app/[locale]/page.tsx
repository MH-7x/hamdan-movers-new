import ContactFormSection from "@/components/base/ContactFormSection";
import Features from "@/components/base/Features";
import HeroSection from "@/components/base/HeroSection";
import ServicesSlider from "@/components/ServicesSlider";
import {
  CalendarClock,
  HeartHandshakeIcon,
  LucideMedal,
  LucideTruck,
  SearchX,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
export default function HomePage() {
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");
  const f = useTranslations("BrandingContent");
  const s = useTranslations("services");
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
      <Features
        contactBtn={b("Contact Us")}
        title={f("title")}
        desc={f("description")}
        items={[
          {
            heading: f("one"),
            icon: <LucideTruck className="text-primary" strokeWidth={1.3} />,
          },
          {
            heading: f("two"),
            icon: <SearchX className="text-primary" strokeWidth={1.3} />,
          },
          {
            heading: f("three"),
            icon: <LucideMedal className="text-primary" strokeWidth={1.3} />,
          },
          {
            heading: f("four"),
            icon: <CalendarClock className="text-primary" strokeWidth={1.3} />,
          },
          {
            heading: f("five"),
            icon: <Users className="text-primary" strokeWidth={1.3} />,
          },
          {
            heading: f("six"),
            icon: (
              <HeartHandshakeIcon className="text-primary" strokeWidth={1.3} />
            ),
          },
        ]}
      />
      <ServicesSlider
        services={[
          {
            name: s("local.title"),
            desc: s("local.desc"),
            img: "/images/Local-Moving-Hamdan-Movers.jpeg",
            link: "/local-moving",
          },
          {
            name: s("commercial.title"),
            desc: s("commercial.desc"),
            img: "/images/Office-Moving-Hamdan-Movers.jpg",
            link: "/office-moving",
          },
          {
            name: s("packing.title"),
            desc: s("packing.desc"),
            img: "/images/packing-unpacking-hamdan-movers.jpg",
            link: "/packing-unpacking",
          },
          {
            name: s("storage.title"),
            desc: s("storage.desc"),
            img: "/images/storage-services.jpg",
            link: "/storage-services",
          },
          {
            name: s("specialty.title"),
            desc: s("specialty.desc"),
            img: "/images/specialty-moving-uae.jpg",
            link: "/specialty-moving",
          },
          {
            name: s("international.title"),
            desc: s("international.desc"),
            img: "/images/international-moving.jpg",
            link: "/international-moving",
          },
        ]}
        title={s("title")}
        desc={s("description")}
      />
      <div className="h-screen" />
    </>
  );
}
