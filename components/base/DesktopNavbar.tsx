"use client";
import { Link } from "@/i18n/routing";
import {
  HandCoins,
  Headphones,
  MapPinHouseIcon,
  Truck,
  UsersRoundIcon,
} from "lucide-react";

const List = [
  {
    name: "Services",
    icon: <HandCoins className="size-4 text-primary" />,
    link: null,
    dropdown: [
      { name: "Residential Moving", link: "/residential-moving" },
      { name: "Commercial Moving", link: "/commercial-moving" },
      { name: "Packing Services", link: "/packing-services" },
    ],
  },
  {
    name: "Locations",
    icon: <MapPinHouseIcon className="size-4 text-primary" />,
    link: null,
    dropdown: [
      { name: "Dubai", link: "/locations/dubai" },
      { name: "Sharjah", link: "/locations/sharjah" },
      { name: "Ajman", link: "/locations/ajman" },
    ],
  },
  {
    name: "Pickup Trucks",
    icon: <Truck className="size-4 text-primary" />,
    link: null,
    dropdown: [
      { name: "Pickup truck", link: "/locations/dubai" },
      { name: "Pickup Sharjah", link: "/locations/sharjah" },
      { name: "Pickup Ajman", link: "/locations/ajman" },
    ],
  },
  {
    name: "About Us",
    icon: <UsersRoundIcon className="size-4 text-primary" />,
    link: "/about-us",
  },
  {
    name: "Contact Us",
    icon: <Headphones className="size-4 text-primary" />,
    link: "/contact-us",
  },
];

function DesktopNavbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 pt-4">
      <nav className="w-full md:w-11/12 mx-auto bg-background/80 backdrop-blur-lg h-[74px] rounded-3xl flex items-center justify-between px-10">
        <Link href={"/"}>
          <img
            loading="eager"
            alt="Hamdan Movers Logo"
            src={"/images/logo.png"}
          />
        </Link>
        <ul className="flex gap-x-3">
          {List.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer hover:bg-secondary transition-colors p-2.5 rounded-2xl text-[15px] items-center group"
            >
              {item.link ? (
                <Link href={item.link}>
                  <div className="flex items-center gap-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ) : (
                <>
                  <div className="flex items-center gap-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {/* Dropdown */}
                  {item.dropdown && (
                    <ul className="absolute w-72 minh-52 left-0 hidden group-hover:block mt-2 bg-white shadow-2xl shadow-black/10 rounded-lg p-3 transition-all duration-300 ease-in-out">
                      {item.dropdown.map((dropdownItem) => (
                        <li
                          key={dropdownItem.name}
                          className="hover:bg-secondary p-3 rounded-md"
                        >
                          <Link href={dropdownItem.link}>
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default DesktopNavbar;
