import { headers } from "next/headers";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
async function Navbar() {
  const Headers = await headers();
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
    Headers.get("user-agent") || ""
  );
  if (isMobile) {
    return <MobileNavbar />;
  } else {
    return <DesktopNavbar />;
  }
}

export default Navbar;
