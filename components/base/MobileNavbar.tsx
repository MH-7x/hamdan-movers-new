import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import { ChevronDown, Headphones, Languages, LucideMenu } from "lucide-react";
function MobileNavbar() {
  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50 ">
      <nav className="w-full bg-white h-16 shadow-lg shadow-black/5 flex justify-between items-center px-2">
        <Link aria-label="Hamdan Movers" href={"/"}>
          <Image
            src={logo}
            alt="Hamdan Movers Logo Mob Screen"
            width={120}
            height={120}
            loading="eager"
            priority
          />
        </Link>
        <div className="flex items-center gap-x-2">
          <Button className="rounded-full" variant={"secondary"}>
            <Headphones /> <ChevronDown />
          </Button>
          <Button size={"icon"} className="rounded-full" variant={"secondary"}>
            <Languages />
          </Button>
          <Button size={"icon"} className="rounded-full bg-grayish">
            <LucideMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default MobileNavbar;
