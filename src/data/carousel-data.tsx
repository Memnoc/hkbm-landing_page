import { CarouselItem } from "@/types/Carousel";
import CloudGirl from "@/assets/dolls/Crochet/dolls/weather_doll/Doll_Cloud_Girl_Front.jpg";
import SunnyGirl from "@/assets/dolls/Crochet/dolls/weather_doll/Doll_Sunny_Girl_Front.jpg";
import GenshinGroup from "@/assets/dolls/Crochet/dolls/genshin/Genshin_Group.jpg";
import Nahida from "@/assets/dolls/Crochet/dolls/genshin/Genshin_Nahida_Front.jpg";

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    name: "CloudGirl",
    image: CloudGirl,
    price: "$29.99",
    description:
      "Sweet doll with cozy cloud hat, perfect for dreamy adventures",
  },

  {
    id: 2,
    name: "SunnyGirl,",
    image: SunnyGirl,
    price: "$34.99",
    description: "Happy doll full of all the colors of the rainbow",
  },
  {
    id: 3,
    name: "GenshinGroup",
    image: GenshinGroup,
    price: "$34.99",
    description: "Genshin dolls in group",
  },
  {
    id: 4,
    name: "Nahida",
    image: Nahida,
    price: "$34.99",
    description: "Genshin doll Nahida",
  },
];
