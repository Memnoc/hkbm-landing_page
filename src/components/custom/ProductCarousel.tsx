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
          }}
          className="w-full max-w-3xl"
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={item.image}
                        alt={item.name}
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
