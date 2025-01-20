import dubai from "../../public/images/movers-in-dubai.png";
import sharjah from "../../public/images/movers-in-sharjah.png";
import ajman from "../../public/images/movers-in-ajman.png";
import Image from "next/image";
import { Button } from "../ui/button";
const Locations = () => {
  return (
    <section className="mt-36 con">
      <h2 className="text-center">We Serve Major Areas in UAE</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-10 mt-10">
        <div className=" bg-gradient-to-t from-primary/10 to-white rounded-3xl p-3">
          <div className="overflow-hidden w-full md:h-64 h-56 bg-white rounded-3xl relative">
            <div className="absolute flex items-center justify-center bottom-12 rounded-s-3xl right-0 w-40 h-12 bg-primary/90 z-10">
              <p className=" text-white text-xl">Dubai</p>
            </div>
            <Image
              src={dubai}
              alt="movers and packers in dubai image from hamdan movers"
              fill
              className="absolute object-cover"
              placeholder="blur"
            />
          </div>
          <h2 className="text-xl mt-3 font-normal">Movers And Packers Dubai</h2>
          <p className="mt-2 text-[15px]/5 text-gray-600">
            Reliable moving services in Dubai for residential and commercial
            relocations, including packing, unpacking, and transportation. We
            ensure smooth, stress-free moves. Contact us today!
          </p>
          <Button variant={"link"} size={"sm"} className="float-right">
            View More..
          </Button>
          <Button variant={"link"} size={"sm"} className="float-right">
            Call To Us
          </Button>
        </div>
        <div className=" bg-gradient-to-t from-primary/10 to-white rounded-3xl p-3">
          <div className="overflow-hidden w-full md:h-64 h-56 bg-white rounded-3xl relative">
            <div className="absolute flex items-center justify-center bottom-12 rounded-s-3xl right-0 w-40 h-12 bg-primary/90 z-10">
              <p className=" text-white text-xl">Sharjah</p>
            </div>
            <Image
              src={sharjah}
              alt="movers and packers in sharjah image from hamdan movers"
              fill
              className="absolute object-cover"
              placeholder="blur"
            />
          </div>
          <h2 className="text-xl mt-3 font-normal">
            Movers And Packers Sharjah
          </h2>
          <p className="mt-2 text-[15px]/5 text-gray-600">
            Reliable moving services in Dubai for residential and commercial
            relocations, including packing, unpacking, and transportation. We
            ensure smooth, stress-free moves. Contact us today!
          </p>
          <Button variant={"link"} size={"sm"} className="float-right">
            View More..
          </Button>
          <Button variant={"link"} size={"sm"} className="float-right">
            Call To Us
          </Button>
        </div>
        <div className=" bg-gradient-to-t from-primary/10 to-white rounded-3xl p-3">
          <div className="overflow-hidden w-full md:h-64 h-56 bg-white rounded-3xl relative">
            <div className="absolute flex items-center justify-center bottom-12 rounded-s-3xl right-0 w-40 h-12 bg-primary/90 z-10">
              <p className=" text-white text-xl">Ajman</p>
            </div>
            <Image
              src={ajman}
              alt="movers and packers in ajman image from hamdan movers"
              fill
              className="absolute object-cover"
              placeholder="blur"
            />
          </div>
          <h2 className="text-xl mt-3 font-normal">Movers And Packers Ajman</h2>
          <p className="mt-2 text-[15px]/5 text-gray-600">
            Reliable moving services in Dubai for residential and commercial
            relocations, including packing, unpacking, and transportation. We
            ensure smooth, stress-free moves. Contact us today!
          </p>
          <Button variant={"link"} size={"sm"} className="float-right">
            View More..
          </Button>
          <Button variant={"link"} size={"sm"} className="float-right">
            Call To Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Locations;
