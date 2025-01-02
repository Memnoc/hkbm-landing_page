import { Button } from "@/components/ui/button";
import Image from "@/assets/dolls/front-page-doll.jpeg";
import ProductCarousel from "./ProductCarousel";
import sneezing from "@/assets/hkbm-assets/doodles/sneezing-no-bg.png";
import bathing from "@/assets/hkbm-assets/doodles/bath-no-bg.png";
import animals from "@/assets/hkbm-assets/doodles/animals-no-bg.png";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        {/* Hero section */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - content */}
            <div className="flex flex-col space-y-6">
              <h1 className="font-puff text-8xl md:text-6xl text-black font-bold">
                Join the army of furry and fluffy friends
              </h1>
              <p className="text-lg text-gray-400">
                Immerse yourself in the world of handcrafted crochet dolls,
                animals and amigurumi. Explore our collection and submit your
                request or design and we will turn into{" "}
                <span className="font-puff font-bold text-[#c92c78]">
                  a doll for you
                </span>
              </p>
              {/* Buttons */}
              <div className="flex gap-4">
                <Button className="bg-purple-400 hover:bg-purple-500 text-gray-100  font-bold rounded-full w-32">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Right-Image column */}
            <div className="flex justify-center lg:justify-end my-16">
              <div className="w-full max-w-md lg:max-w-lg">
                <img
                  src={Image}
                  alt="Cute plush doll"
                  className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl filter brightness-105 hover:brightness-110 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Carousel section */}
        <div>
          {/* First carousel with doodle */}
          <div className="relative">
            <img
              src={sneezing}
              alt="doodle_sneezing"
              className="absolute -top-[3vw] left-[1vw] w-[20vw] max-w-[220px] z-20 opacity-90"
            />
            <div className="relative z-10">
              <ProductCarousel
                title="Discover The Magic"
                subtitle="About Our Crochet Creation"
              />
            </div>
          </div>
          {/* Other carousels */}
          <div className="relative">
            <img
              src={bathing}
              alt="doodle_bathing"
              className="absolute -top-[4vw] right-[5vw] w-[20vw] max-w-[280px] z-20 opacity-90"
            />
            <div className="relative z-10">
              <ProductCarousel
                title="Crochet Charm"
                subtitle="Amigurumi Artistry"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={animals}
              alt="doodle_sneezing"
              className="absolute -top-[1vw] left-[2vw] w-[20vw] max-w-[280px] z-20 opacity-90"
            />
            <div className="relative z-10">
              <ProductCarousel
                title="Handmade Heirlooms"
                subtitle="Crochet Creation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
