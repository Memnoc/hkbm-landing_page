import { GalleryItem } from "@/types/Gallery";
import IMG_8216 from "@/assets/dolls/Crochet/animals/bunnies/IMG_8216.jpg";
import IMG_8710 from "@/assets/dolls/Crochet/animals/pigs/IMG_8710.jpeg";

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    name: "Cloud Hat Doll",
    image: IMG_8216,
    price: "$29.99",
    description:
      "Sweet doll with a cozy could hat, perfect for dreamy adventures",
    category: "bestseller",
    available: true,
    materials: ["cotton yarn", "polyester fill"],
  },
  {
    id: 2,
    name: "Blue Dress Doll",
    image: IMG_8710,
    price: "$34.99",
    description:
      "Elegant doll in a navy blue dress with delicate white details",
    category: "bestseller",
    available: true,
    materials: ["cotton yarn", "polyester fill"],
  },
];
