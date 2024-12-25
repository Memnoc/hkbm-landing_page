import { CarouselItem } from "./Carousel";

export interface GalleryItem extends CarouselItem {
  category: "new" | "bestseller" | "custom";
  available: boolean;
  dimensions?: string;
  materials?: string[];
}
