import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import logo from "../../assets/hkbm-assets/svg/logo-no-background.svg";
import { Wave } from "./Weave";

export default function Navbar() {
  return (
    <>
      <Menubar className="flex justify-end right-4 top-0 w-full bg-white pt-2 z-10">
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
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            <Link to="/">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            <Link to="/about">About</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            <Link to="/shop">Shop</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            <Link to="/contact">Contact</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white bg-pink-400 rounded-full">
            <Link to="/gallery/all">Explore</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Wave color="white" className="fill-${color}" />
    </>
  );
}
