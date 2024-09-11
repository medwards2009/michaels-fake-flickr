"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex border-b w-full justify-between p-4">
      <div className="flex gap-4">
        <Link
          href={"/"}
          className={`link ${pathname === "/" ? "text-red-500" : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/mypics"}
          className={`link ${pathname === "/mypics" ? "text-red-500" : ""}`}
        >
          My Pics
        </Link>
        <Link
          href={"/waittimes"}
          className={`link ${pathname === "/waittimes" ? "text-red-500" : ""}`}
        >
          Wait times
        </Link>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </nav>
  );
}

export default TopNav;
