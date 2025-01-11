import { Link } from "@/i18n/routing";
import {
  HandCoins,
  Headphones,
  MapPinHouseIcon,
  Truck,
  UsersRoundIcon,
} from "lucide-react";
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
          <li className="cursor-pointer hover:bg-secondary transition-colors text- p-2.5 rounded-2xl flex gap-x-1 text-[15px] items-center">
            <HandCoins className="size-4 text-primary" /> Services
          </li>
          <li className="cursor-pointer hover:bg-secondary transition-colors text- p-2.5 rounded-2xl flex gap-x-1 text-[15px] items-center">
            <MapPinHouseIcon className="size-4 text-primary" /> Locations
          </li>
          <li className="cursor-pointer hover:bg-secondary transition-colors text- p-2.5 rounded-2xl flex gap-x-1 text-[15px] items-center">
            <Truck className="size-4 text-primary" />
            <Link href={"/"}>Pickup Trucks</Link>
          </li>
          <li className="cursor-pointer hover:bg-secondary transition-colors text- p-2.5 rounded-2xl flex gap-x-1 text-[15px] items-center">
            <UsersRoundIcon className="size-4 text-primary" />
            <Link href={"/"}>About Us</Link>
          </li>
          <li className="cursor-pointer hover:bg-secondary transition-colors text- p-2.5 rounded-2xl flex gap-x-1 text-[15px] items-center">
            <Headphones className="size-4 text-primary" />
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DesktopNavbar;
