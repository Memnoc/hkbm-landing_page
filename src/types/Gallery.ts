// INFO: define TS interfaces
export type MainCollection = "animals" | "dolls";
export type SubCollection =
  | "bunnies"
  | "cats"
  | "chickens"
  | "fish"
  | "pigs"
  | "pokemons"
  | "genshin"
  | "kimono"
  | "peacock"
  | "rainbow"
  | "winter";

export interface GalleryMetadata {
  name: string;
  price: string;
  description: string;
  category: "new" | "bestseller" | "custom";
  available: boolean;
  materials: string[];
}

export interface GalleryItem extends GalleryMetadata {
  id: number;
  image: string;
  collection: MainCollection;
  subCollection: SubCollection;
}

export interface GalleryData {
  [collection: string]: {
    [subCollection: string]: {
      [fileName: string]: GalleryMetadata;
    };
  };
}
