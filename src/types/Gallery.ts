// INFO: define TS interfaces
export type MainCollection = "animals" | "dolls";
export type SubCollection =
  | "bunnies"
  | "cats"
  | "chickens"
  | "fish"
  | "pigs"
  | "pokemons"
  | "animal_misc"
  | "genshin"
  | "kimono"
  | "lady_unicorn"
  | "peacock"
  | "weather_doll";

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
