import { CarouselItem } from "@/types/Carousel";
import CloudGirl from "@/assets/dolls/Crochet/dolls/weather_doll/Doll_Sunny_Girl_Front-blue-bg.png";
import SunnyGirl from "@/assets/dolls/Crochet/dolls/weather_doll/Doll_Lady_Peacock_Pose04-orange-bg.png";
import GenshinGroup from "@/assets/dolls/Crochet/dolls/genshin/Genshin_Nahida_Front-green-bg.png";
import Nahida from "@/assets/dolls/Crochet/dolls/genshin/Genshin_Nahida_Front-green-bg.png";

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    name: "Cloud Girl",
    image: CloudGirl,
    images: [CloudGirl, SunnyGirl, GenshinGroup],
    price: "29.99",
    description: "Sweet doll with cozy cloud hat",
    fullDescription: `Our Cloud Girl doll is a handcrafted masterpiece that brings whimsy and comfort together. 
    Each doll is carefully crocheted using premium cotton yarn, featuring:
    
    • A removable cloud-shaped hat with delicate embroidered details
    • Soft, huggable body perfect for cuddles
    • Hand-stitched facial features for a unique expression
    • Durable construction for long-lasting play
    
    The perfect companion for bedtime stories and imaginative play!`,
    dimensions: "8 inches tall",
    material: "Premium cotton yarn, polyester filling",
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
