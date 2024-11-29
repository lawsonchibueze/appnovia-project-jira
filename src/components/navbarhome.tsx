import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenBox } from "lucide-react";
import { Handshake } from "lucide-react";

const NavbarHome = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image src="/logo5.webp" alt="logo" width={152} height={56} />
      <div className="flex justify-end">
        <Link href="https://novia-teams.vercel.app">
          <Button className="flex items-center gap-2 border-solid border-2 border-white bg-black text-white hover:text-black ">
            <Handshake size={18} />
            <span className="hidden md:inline">noviaTeams</span>
          </Button>
        </Link>
        <Link href="https://project-mgnt-j-25rf.vercel.app/">
          <Button className="flex items-center gap-2">
            <PenBox size={18} />
            <span className="hidden md:inline">noviaPlanner</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarHome;
