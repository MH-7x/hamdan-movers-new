"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/components/style.css";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "./ui/button";
import { Link } from "@/i18n/routing";

interface ServicesSliderProps {
  title: string;
  desc: string;
  services: Array<{ name: string; img: string; link: string; desc: string }>;
}

const ServicesSlider = ({ title, desc, services }: ServicesSliderProps) => {
  return (
    <section className="mt-40 con">
      <h2>{title}</h2>
      <p className="max-w-4xl md:text-xl/6 text-lg/6 mt-5 text-gray-600">
        {desc}
      </p>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 cursor-grab"
      >
        {services.map((service, i) => (
          <SwiperSlide key={i}>
            <Image
              alt={service.name}
              fill
              className="absolute object-cover"
              loading="lazy"
              src={service.img}
            />
            <div className="absolute inset-0 text-white bg-gradient-to-t from-black/90 to-black/5 w-full h-full z-10 md:p-5 p-3 flex justify-end flex-col items-start">
              <Link href={service.link}>
                <h3 className="drop-shadow-md font-bold text-white tracking-wide">
                  {service.name}
                </h3>
              </Link>
              <p className="text-start md:text-base text-base/5 text-accent md:mt-3 mt-2">
                {service.desc}
              </p>
              <Link className="mb-4" href={service.link}>
                <Button variant={"link"}>Service Details</Button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSlider;
