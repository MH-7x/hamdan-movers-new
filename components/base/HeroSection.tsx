import React from "react";
import imageSrc from "../../public/images/hamdan-movers.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { HandCoinsIcon, Headphones } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subTitle: string;
  desciptions: string;
  points: Array<{ num: string; text: string }>;
  buttonOne: {
    name: string;
    link: string;
  };
  buttonTwo: {
    name: string;
    link: string;
  };
}

function HeroSection({
  buttonOne,
  buttonTwo,
  desciptions,
  subTitle,
  title,
  points,
}: HeroSectionProps) {
  return (
    <>
      <section className="md:mt-36 mt-28 con">
        <h1 className="max-w-3xl md:text-6xl uppercase md:pl-10">
          <span className="text-primary">{title.substring(0, 6)}</span>{" "}
          {title.substring(6, title.length)}
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:mt-16 mt-7 gap-10 md:pl-10">
          <div>
            <h2 className="font-normal md:text-3xl">{subTitle}</h2>
            <p className="text-lg mt-5 text-gray-700">{desciptions}</p>
            <div className="md:mt-10 mt-5 flex gap-x-5">
              <Link href={buttonOne.link}>
                <Button className="md:w-56 md:py-6">
                  <Headphones /> {buttonOne.name}
                </Button>
              </Link>
              <Link href={buttonTwo.link}>
                <Button className="bg-grayish md:w-56 md:py-6">
                  <HandCoinsIcon /> {buttonTwo.name}
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-red-200 rounded-3xl md:h-[400px] h-96 md:w-[550px] w-full relative overflow-hidden md:-mt-16">
            <Image
              src={imageSrc}
              alt="Hamdan Movers UAE"
              fill
              loading="eager"
              priority
              className="absolute object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full grid grid-cols-2 md:px-7 px-4 md:gap-x-8 gap-x-4">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="md:h-28 h-20 flex-col flex items-center justify-center bg-black/45 rounded-3xl"
                >
                  <p className="text-primary md:text-3xl text-xl font-bold">
                    {point.num}
                  </p>
                  <p className="md:text-lg text-base text-white">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
