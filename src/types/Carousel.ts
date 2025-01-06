export interface CarouselItem {
  id: number;
  name: string;
  image: string;
  images?: string[];
  price: string;
  description: string;
  fullDescription?: string;
  dimensions?: string;
  material?: string;
}
