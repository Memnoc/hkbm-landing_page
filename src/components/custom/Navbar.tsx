import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Menubar className="fixed top-0 w-full bg-pink-100 border-b border-pink-200 z-10 p-0">
      <Menubar className="fixed top-0 w-full bg-pink-100 border-b border-pink-200">
        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            Gallery
          </MenubarTrigger>
          <MenubarContent className="bg-white/95">
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/gallery/all">All Images</Link>
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/gallery/latest_dolls">Latest Dolls</Link>
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/gallery/customer_photos">Customer Photos</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            Shop
          </MenubarTrigger>
          <MenubarContent className="bg-white/95">
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/shop/orders">Orders </Link>
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/shop/custom_orders">Custom Orders </Link>
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/shop/promotions">Promotions</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            About
          </MenubarTrigger>
          <MenubarContent className="bg-white/95">
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/about/our_story">Our Story</Link>
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/about/process">Process</Link>
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              <Link to="/about/reviews">Reviews</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Menubar>
  );
}
