import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "@/assets/dolls/IMG_8230.jpeg";

export default function ProductCarousel() {
  return (
    <div className="mt-16">
      {" "}
      {/* Container for both header and carousel */}
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-8">
        Best Sellers
      </h2>
      <div className="w-full flex justify-center items-center">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-3xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={Image}
                        alt="Cute plush doll"
                        className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl filter brightness-105 hover:brightness-110 w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
