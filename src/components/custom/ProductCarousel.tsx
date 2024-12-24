import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem as ICarouselItem } from "@/types/Carousel";
import { carouselItems } from "@/data/carousel-data";

export default function ProductCarousel() {
  const items: ICarouselItem[] = carouselItems;
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
            loop: true,
          }}
          className="w-full max-w-5xl px-4"
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 h-full">
                      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-3xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 shadow-lg"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-purple-700">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        <p className="text-lg font-semibold text-pink-600 mt-2">
                          {item.price}
                        </p>
                      </div>
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
