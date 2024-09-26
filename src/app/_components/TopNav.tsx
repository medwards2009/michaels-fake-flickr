import Link from "next/link";
import { Button } from "@mui/material";

export function TopNav() {
  return (
    <nav className="flex border-b-2 w-full justify-between p-4">
      <div className="flex gap-2">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Link href={"/mypics"}>
          <Button>My pics</Button>
        </Link>
        <Link href={"/waittimes/mk"}>
          <Button>Wait times</Button>
        </Link>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}

export default TopNav;
