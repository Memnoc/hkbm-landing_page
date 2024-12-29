export interface GalleryMetadata {
  name: string;
  price: string;
  description: string;
  category: "new" | "bestseller" | "custom";
  available: boolean;
  materials: string[];
}
