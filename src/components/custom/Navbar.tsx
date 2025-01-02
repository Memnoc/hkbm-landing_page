import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import logo from "../../assets/hkbm-assets/svg/logo-no-background.svg";
import { Wave } from "./Weave";

export default function Navbar() {
  return (
    <>
      <Menubar className="flex justify-end right-4 top-0 w-full bg-white pt-2">
        <div className="flex justify-start">
          <p className="font-puff text-2xl absolute left-36 z-10 pt-2">
            Hooked By Mei
          </p>
          <img
            src={logo}
            alt="Company logo"
            className="h-16 w-auto absolute left-12 z-10 pb-2"
          />
        </div>
        <MenubarMenu>
          <MenubarTrigger className="text-[#c92c78] hover:text-[#a02360]">
            <Link className="font-puff" to="/">
              Home
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-[#c92c78] hover:text-[#a02360]">
            <Link className="font-puff" to="/about">
              About
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-[#c92c78] hover:text-[#a02360]">
            <Link className="font-puff" to="/shop">
              Shop
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-[#c92c78] hover:text-[#a02360]">
            <Link className="font-puff" to="/contact">
              Contact
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white bg-purple-400 hover:bg-purple-800 rounded-full">
            <Link className="font-bold text-gray-100" to="/gallery/all">
              Explore
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Wave color="#fff" />
    </>
  );
}
