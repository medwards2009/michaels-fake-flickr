import Link from "next/link";
import { Button } from "@mui/material";
import SignInButton from "./SignInButton";

export function TopNav() {
  return (
    <nav className="flex border-b-2 justify-between p-4 white-background top-nav">
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
        <SignInButton />
      </div>
    </nav>
  );
}

export default TopNav;
