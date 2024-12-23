import { Button } from "@/components/ui/button";
import Image from "@/assets/dolls/IMG_8230.jpeg";
import ProductCarousel from "./ProductCarousel";

export default function Hero() {
  return (
    <>
      {/* Content */}
      <div className="content_container mx-auto px-8 pt-24">
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
            {/* Buttons */}
            <div className="flex gap-4">
              <Button className="bg-purple-400 hover:bg-purple-500 text-white rounded w-32">
                Users feedback
              </Button>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded w-32">
                Get your doll
              </Button>
            </div>
          </div>

          {/* First page doll */}
          <div className="image_container p-4">
            <img
              src={Image}
              alt="Cute plush doll"
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl filter brightness-105 hover:brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <ProductCarousel />
    </>
  );
}
