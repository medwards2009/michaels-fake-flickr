import Link from "next/link";
const SideNav = () => {
  return (
    <nav className="border-r h-full w-70 flex flex-col gap-4 p-4">
      <Link href="/waittimes/mk">Magic Kingdom</Link>
      <Link href="/waittimes/hs">Hollywook Studios</Link>
      <Link href="/waittimes/epcot">Epcot</Link>
      <Link href="/waittimes/ak">Animal Kingdom</Link>
    </nav>
  );
};

export default SideNav;
