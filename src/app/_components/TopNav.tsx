import Link from "next/link";

export function TopNav() {
  return (
    <nav className="flex border-b w-full justify-between p-4">
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/mypics"}>My Pics</Link>
        <Link href={"/waittimes"}>Wait times</Link>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </nav>
  );
}

export default TopNav;
