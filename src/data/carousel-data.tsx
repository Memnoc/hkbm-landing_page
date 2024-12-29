import { CarouselItem } from "@/types/Carousel";
import CloudGirl from "@/assets/dolls/Crochet/dolls/weather_doll/Doll_Cloud_Girl_Front.jpg";
import SunnyGirl from "@/assets/dolls/Crochet/dolls/weather_doll/Doll_Sunny_Girl_Front.jpg";

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    name: "Girl doll with cloud hat",
    image: CloudGirl,
    price: "$29.99",
    description:
      "Sweet doll with cozy cloud hat, perfect for dreamy adventures",
  },

  {
    id: 2,
    name: "Girl doll with colorful dress",
    image: SunnyGirl,
    price: "$34.99",
    description: "Happy doll full of all the colors of the rainbow",
  },
];
