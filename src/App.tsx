import "./App.css";
import { Button } from "@/components/ui/button";
import Image from "./assets/dolls/IMG_8230.jpeg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen">
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

        <div className="container mx-auto px-8 pt-24">
          {" "}
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Left column - content */}
            <div className="flex flex-col">
              <p className="text-lg text-pink-600 font-semibold mb-4">
                100+ happy users
              </p>
              <h2 className="text-4xl text-purple-700 font-bold mb-6">
                Join the army of furry and fluffy friends
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Submit your request and design and we will turn into{" "}
                <span className="font-bold text-pink-600">a doll for you</span>
              </p>
              <div className="flex gap-4">
                <Button className="bg-purple-400 hover:bg-purple-500 text-white rounded">
                  Users feedback
                </Button>
                <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded">
                  Get your doll
                </Button>
              </div>
            </div>

            {/* Right column - image */}
            <div className="p-4">
              <img
                src={Image}
                alt="Cute plush toy"
                className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl filter brightness-105 hover:brightness-110"
              />
            </div>
          </div>
          {/* Increased pt for menu */}
          {/* Your existing grid content */}
        </div>
      </div>
    </>
  );
}

export default App;
