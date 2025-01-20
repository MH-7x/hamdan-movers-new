import Image from "next/image";
import React from "react";
import imgSrc from "../../public/images/professional-moving-company-hamdan.jpg";
import { Button } from "../ui/button";

interface WhyChooseUsProps {
  sub: string;
  title: string;
  desc: string;
  point1: string;
  point2: string;
  button1: string;
  button2: string;
}
function WhyChooseUs({
  sub,
  button2,
  button1,
  desc,
  point1,
  point2,
  title,
}: WhyChooseUsProps) {
  return (
    <>
      <section className="con md:bg-primary/20 rounded-2xl py-16 mt-32">
        <div className="max-w-5xl bg-white min-h-[500px] rounded-2xl items-center mx-auto grid md:grid-cols-5 grid-cols-1 md:gap-x-4 overflow-hidden">
          <div className="md:col-span-2 w-full md:h-full h-96 relative">
            <Image
              src={imgSrc}
              alt="professional movers in dubai hamdan movers"
              fill
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <div className="col-span-3 p-3 md:mt-0 -mt-10 z-10 bg-white">
            <p className="text-primary uppercase text-sm">{sub}</p>
            <h2 className="mt-4">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{desc}</p>
            <div className="mt-5 flex gap-x-4">
              <Button size={"lg"}>{button1}</Button>
              <Button size={"lg"} className="bg-grayish">
                {button2}
              </Button>
            </div>
            <div className="flex items-center md:gap-x-10 gap-5  justify-center mt-10">
              <h3 className="text-center">
                <span className="block font-bold">6+</span>
                <span className="text-muted-foreground text-lg">{point1}</span>
              </h3>
              <h3 className="text-center">
                <span className="block font-bold">1000+</span>
                <span className="text-muted-foreground text-lg">{point2}</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
