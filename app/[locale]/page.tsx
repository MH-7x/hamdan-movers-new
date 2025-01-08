import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="min-h-screen gr-bg px-20">
      <h1 className="text-6xl max-w-4xl font-bold pt-32 mb-10  tracking-wide">
        {t("title")}
      </h1>
      <h2 className="text-primary text-3xl">
        UAE&lsquo;s Best Moving and Packing Company
      </h2>
      <p className="text-lg max-w-2xl mt-3">
        Hamdan Movers and Packers is serving you with the top quality of moving
        solutions for the 6 years in UAE.
      </p>
    </div>
  );
}
