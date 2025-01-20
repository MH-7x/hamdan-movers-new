import { Button } from "../ui/button";
import oneFiveTon from "../../public/images/1.5-ton-truck.jpg";
import threeTon from "../../public/images/3-tom.jpg";
import Image from "next/image";
const TrucksSizes = () => {
  return (
    <section className="mt-36 con">
      <h2 className="capitalize text-center max-w-4xl mx-auto">
        We offer a range of pickup truck sizes designed to perfectly
        <span className="text-primary"> suit your needs.</span>
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center con md:gap-10 gap-7 mt-16">
        <div className=" md:h-96 h-72 rounded-3xl relative overflow-hidden">
          <Image
            src={oneFiveTon}
            fill
            alt="1.5 Ton Pickup Truck For Rent"
            className="absolute object-cover"
            placeholder="blur"
          />
        </div>
        <div className="">
          <h3 className="md:text-3xl font-bold">
            1.5 Ton Pickup Truck For Rent{" "}
            <span className="md:block">in UAE</span>
          </h3>
          <p className="md:text-lg/6 md:mt-5 mt-3">
            Looking to move your home, office, or belongings in the UAE? Our
            1.5-ton pickup trucks are ideal for safe and easy transportation. We
            provide competitive rates and excellent service, ensuring a
            hassle-free moving experience. Trust us to handle your move with
            care!
          </p>
          <Button className="mt-5 md:w-72" size={"lg"}>
            +971 545019655
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center con md:gap-10 gap-7 mt-16">
        <div className="md:order-2 order-1 md:h-96 h-72 rounded-3xl relative overflow-hidden">
          <Image
            src={threeTon}
            fill
            alt="3 ton pickup truck for rent"
            className="absolute object-cover"
            placeholder="blur"
          />
        </div>
        <div className="order-2 md:order-1">
          <h3 className="md:text-3xl font-bold">
            3 Ton Pickup Truck For Rent <span className="md:block">in UAE</span>
          </h3>
          <p className="md:text-lg/6 md:mt-5 mt-3">
            Need to move heavy cargo, relocate your home, or move your office in
            the UAE Our 3-ton pickup trucks are the perfect solution. We offer a
            complete moving service, including loading and unloading, so you can
            relax and let us handle everything. Your belongings will arrive
            safely and on time.
          </p>
          <Button className="mt-5 md:w-72" size={"lg"}>
            +971 503626685
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrucksSizes;
