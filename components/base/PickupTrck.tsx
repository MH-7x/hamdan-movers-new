import Image from "next/image";
import truck from "../../public/images/commercial-delivery-trucks-hamdan.png";
import { Button } from "../ui/button";

const PickupTruck = () => {
  return (
    <section className="con md:px-10 py-8 md:mt-40 mt-10">
      <div className="flex justify-between md:items-center md:flex-row flex-col mb-6 md:gap-0 gap-5">
        <h2>Our Pickup Trucks For Rent Services In UAE</h2>
        <Button>Call Now : +971 55 888 8888</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-10 gap-y-6 md:mt-16 mt-10">
        {/* Featured Story */}
        <div className="col-span-3">
          <div className="bg-white relative rounded-lg md:h-80 h-72 mb-4">
            <Image
              src={truck}
              fill
              alt="pickup trucks rental services in dubai hamdan movers"
              className="absolute object-contain"
            />
          </div>
          <div className="md:mt-5 mt-10">
            <h3 className="text-xl font-semibold">
              Fast, Flexible, And Convenient Pickup Trucks For Rental Service In
              UAE
            </h3>

            <p className="text-gray-700 mt-2">
              Need a pickup truck to rent in the UAE? We have many different
              sizes to choose from. We&apos;ll make sure you have a great
              experience. Whether you&apos;re moving things or carrying stuff,
              we&apos;re ready to help.
            </p>
          </div>
        </div>

        {/* Smaller Stories */}
        <div className="space-y-4 col-span-2">
          <div className="grid grid-cols-4 items-center md:gap-0 gap-x-3">
            <div className="md:w-24 w-20 flex items-center justify-center h-20 bg-white rounded-lg mr-4 relative">
              <Image
                src={"/images/cities.png"}
                alt="pickups rentals in dubai, sharjah and ajman"
                width={60}
                height={60}
              />
            </div>
            <div className="col-span-3">
              <h4 className="font-semibold text-sm">
                Affordable Pickup Truck Rental Services in Dubai, Sharjah, and
                Ajman
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center md:gap-0 gap-x-3">
            <div className="md:w-24 w-20 flex items-center justify-center h-20 bg-white rounded-lg mr-4 relative">
              <Image
                src={"/images/cheap-prices.png"}
                alt="cheap prices on pickup trucks"
                width={60}
                height={60}
              />
            </div>
            <div className="col-span-3">
              <h4 className="font-semibold text-sm">
                Cost-effective truck rental solutions tailored to fit your
                budget.
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center md:gap-0 gap-x-3">
            <div className="md:w-24 w-20 flex items-center justify-center h-20 bg-white rounded-lg mr-4 relative">
              <Image
                src={"/images/trucks.png"}
                alt="trucks size from 1.5 to 3 ton"
                width={60}
                height={60}
              />
            </div>
            <div className="col-span-3">
              <h4 className="font-semibold text-sm">
                Available in various sizes, from 1.5 tons to 3 tons, to meet
                your specific requirements.
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center md:gap-0 gap-x-3">
            <div className="md:w-24 w-20 flex items-center justify-center h-20 bg-white rounded-lg mr-4 relative">
              <Image
                src={"/images/24-hours.png"}
                alt="24/7 pickup rental services"
                width={60}
                height={60}
              />
            </div>
            <div className="col-span-3">
              <h4 className="font-semibold text-sm">
                24/7 Pickup Rental Services So You Can Book Your Truck Anytime
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupTruck;
