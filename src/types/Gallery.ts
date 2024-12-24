import { CarouselItem } from "./Carousel";

export interface GalleryItem extends CarouselItem {
  category: "new" | "bestseller" | "custom";
  availble: boolean;
  dimensions?: string;
  materials?: string[];
}
