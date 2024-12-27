import galleryMetadata from "@/data/gallery-metadata.json";
import {
  GalleryItem,
  MainCollection,
  SubCollection,
  GalleryData,
} from "@/types/Gallery";
import { formatItemName } from "./formatItemNames";

// INFO: Dinamically laod JPEGS
const images = import.meta.glob("/src/assets/dolls/Crochet/**/**/**/*.*", {
  eager: true,
  as: "url",
}) as Record<string, string>;

// WARN: Not sure 'unkown here is good'
const typedMetadata = galleryMetadata as unknown as GalleryData;

// NOTE: map image paths to urls
// Extract collections and sub-collections
export const getGalleryItems = async (): Promise<GalleryItem[]> => {
  return Object.entries(images).map(([path, url], index) => {
    const pathParts = path.split("/");
    const collectionIndex = pathParts.indexOf("Crochet") + 1;
    const collection = pathParts[collectionIndex];
    const subCollection = pathParts[collectionIndex + 1];
    const fileName =
      path
        .split("/")
        .pop()
        ?.replace(/\.(jpg|jpeg)$/, "") || "";

    // Add debug logging
    console.log("Processing file:", {
      fullPath: path,
      pathParts,
      collection,
      subCollection,
      fileName,
    });

    if (!isMainCollection(collection) || !isSubCollection(subCollection)) {
      console.warn(
        `Invalid collection or subcollection: ${collection}/${subCollection}`,
      );
      return createDefaultItem(index, fileName, url, "animals", "bunnies");
    }

    try {
      // Log the metadata path we're trying to access
      console.log("Looking for metadata at:", {
        collection,
        subCollection,
        fileName,
        hasMetadata: !!typedMetadata[collection]?.[subCollection]?.[fileName],
        availableCollections: Object.keys(typedMetadata),
        availableSubCollections: collection
          ? Object.keys(typedMetadata[collection] || {})
          : [],
      });

      const metadata = typedMetadata[collection]?.[subCollection]?.[fileName];

      if (!metadata) {
        console.warn(
          `No metadata found for ${fileName} in ${collection}/${subCollection}`,
        );
        return createDefaultItem(
          index,
          fileName,
          url,
          collection,
          subCollection,
        );
      }

      // Log the found metadata
      console.log("Found metadata:", metadata);

      return {
        ...createDefaultItem(index, fileName, url, collection, subCollection), // Base defaults
        ...metadata, // Override with actual metadata
        id: index + 1,
        image: url,
        collection,
        subCollection,
      } as GalleryItem;
    } catch (error) {
      console.error(`Error accessing metadata for ${fileName}:`, error);
      return createDefaultItem(index, fileName, url, collection, subCollection);
    }
  });
};

//NOTE: Type guard functions
function isMainCollection(value: string): value is MainCollection {
  return ["animals", "dolls"].includes(value);
}

function isSubCollection(value: string): value is SubCollection {
  return [
    "animal_misc",
    "bunnies",
    "cats",
    "chickens",
    "fish",
    "pigs",
    "pokemons",
    "genshin",
    "kimono",
    "lady_unicorn",
    "peacock",
    "weather_doll",
  ].includes(value);
}

// WARN: This is a fallback when data is not found
function createDefaultItem(
  index: number,
  fileName: string,
  url: string,
  collection: MainCollection,
  subCollection: SubCollection,
): GalleryItem {
  return {
    id: index + 1,
    name: formatItemName(fileName) || "Unnamed Item",
    price: "TBD",
    description: "Description pending",
    category: "new",
    available: false,
    materials: [],
    image: url,
    collection,
    subCollection,
  };
}

// NOTE:: filtering logic
export const filterByCollection = (
  items: GalleryItem[],
  collection: MainCollection | "all",
): GalleryItem[] => {
  if (collection === "all") return items;
  return items.filter((item) => item.collection === collection);
};

export const filterBySubCollection = (
  items: GalleryItem[],
  subCollection: SubCollection | "all",
): GalleryItem[] => {
  if (subCollection === "all") return items;
  return items.filter((item) => item.subCollection === subCollection);
};
