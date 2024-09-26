import Link from "next/link";
import { Button } from "@mui/material";

const SideNav = () => {
  return (
    <nav className="border-r-2 h-full w-80 flex flex-col gap-8 p-4">
      <Link href="/waittimes/mk">
        <Button>Magic Kingdom</Button>
      </Link>
      <Link href="/waittimes/hs">
        <Button>Holywood Studios</Button>
      </Link>
      <Link href="/waittimes/epcot">
        <Button>Epcot</Button>
      </Link>
      <Link href="/waittimes/ak">
        <Button>Animal Kingdom</Button>
      </Link>
    </nav>
  );
};

export default SideNav;
