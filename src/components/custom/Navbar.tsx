import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <Menubar className="fixed top-0 w-full bg-pink-100 backdrop-blur-sm border-b border-pink-200 z-10">
      <Menubar className="fixed top-0 w-full bg-pink-100 backdrop-blur-sm border-b border-pink-200">
        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            Gallery
          </MenubarTrigger>
          <MenubarContent className="bg-white/95">
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Latest Dolls
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Custom Orders
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Customer Photos
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            Shop
          </MenubarTrigger>
          <MenubarContent className="bg-white/95">
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Ready to Ship
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Custom Order
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Gift Cards
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="text-purple-600 hover:text-purple-800">
            About
          </MenubarTrigger>
          <MenubarContent className="bg-white/95">
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Our Story
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Process
            </MenubarItem>
            <MenubarItem className="text-purple-600 hover:bg-pink-50">
              Reviews
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Menubar>
  );
}
