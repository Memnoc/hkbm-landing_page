import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import logo from "../../assets/hkbm-assets/svg/logo-no-background.svg";

export default function Navbar() {
  return (
    <Menubar className="flex justify-end right-4 top-0 w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 z-10">
      <img
        src={logo}
        alt="Company logo"
        className="h-6 md:h lg:h w-auto fixed left-4"
      />
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
  );
}
