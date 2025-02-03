// import galleryMetadata from "@/data/gallery-metadata.json";
// import {
//   GalleryItem,
//   MainCollection,
//   SubCollection,
//   GalleryData,
//   GalleryMetadata,
// } from "@/types/Gallery";
// import { formatItemName } from "./formatItemNames";
//
// // INFO: Dynamically load JPEGS
// const images = import.meta.glob("/src/assets/dolls/Crochet/**/**/**/*.*", {
//   eager: true,
//   as: "url",
// }) as Record<string, string>;
//
// // WARN: Not sure 'unknown' here is good
// const typedMetadata = galleryMetadata as unknown as GalleryData;
//
// // NOTE: map image paths to urls and group related images
// export const getGalleryItems = async (): Promise<GalleryItem[]> => {
//   // First, group images by their base name
//   const groupedItems = new Map<
//     string,
//     {
//       paths: string[];
//       collection: MainCollection;
//       subCollection: SubCollection;
//       metadata: GalleryMetadata | undefined;
//     }
//   >();
//
//   Object.entries(images).forEach(([path, url]) => {
//     const pathParts = path.split("/");
//     const collectionIndex = pathParts.indexOf("Crochet") + 1;
//     const collection = pathParts[collectionIndex];
//     const subCollection = pathParts[collectionIndex + 1];
//     const fileName =
//       path
//         .split("/")
//         .pop()
//         ?.replace(/\.(jpg|png|jpeg)$/, "") || "";
//
//     // Get base name by removing suffixes - expanded pattern
//     const baseName = fileName.replace(
//       /_(Front|Back|Side|Persp|Pose\d+|Left|Right|Top|Group|Parts).*$/,
//       "",
//     );
//
//     if (!isMainCollection(collection) || !isSubCollection(subCollection)) {
//       console.warn(
//         `Invalid collection or subcollection: ${collection}/${subCollection}`,
//       );
//       return;
//     }
//
//     const metadata = typedMetadata[collection]?.[subCollection]?.[fileName];
//
//     if (!groupedItems.has(baseName)) {
//       groupedItems.set(baseName, {
//         paths: [url],
//         collection: collection as MainCollection,
//         subCollection: subCollection as SubCollection,
//         metadata,
//       });
//     } else {
//       groupedItems.get(baseName)?.paths.push(url);
//     }
//   });
//
//   // Convert grouped items to GalleryItems
//   return Array.from(groupedItems.entries()).map(([baseName, data], index) => {
//     const mainImage = data.paths[0]; // Use first image as main
//
//     try {
//       // Get metadata from the first variant if it exists
//       const metadata =
//         data.metadata ||
//         typedMetadata[data.collection]?.[data.subCollection]?.[baseName];
//
//       if (!metadata) {
//         console.warn(`No metadata found for ${baseName}`);
//         return createDefaultItem(
//           index,
//           baseName,
//           mainImage,
//           data.collection,
//           data.subCollection,
//           data.paths,
//         );
//       }
//
//       return {
//         ...createDefaultItem(
//           index,
//           baseName,
//           mainImage,
//           data.collection,
//           data.subCollection,
//           data.paths,
//         ),
//         ...metadata,
//         id: index + 1,
//         image: mainImage,
//         relatedImages: data.paths,
//         collection: data.collection,
//         subCollection: data.subCollection,
//       } as GalleryItem;
//     } catch (error) {
//       console.error(`Error accessing metadata for ${baseName}:`, error);
//       return createDefaultItem(
//         index,
//         baseName,
//         mainImage,
//         data.collection,
//         data.subCollection,
//         data.paths,
//       );
//     }
//   });
// };
// //NOTE: Type guard functions
// function isMainCollection(value: string): value is MainCollection {
//   return ["animals", "dolls"].includes(value);
// }
//
// function isSubCollection(value: string): value is SubCollection {
//   return [
//     "animal_misc",
//     "bunnies",
//     "cats",
//     "chickens",
//     "fish",
//     "pigs",
//     "pokemons",
//     "genshin",
//     "kimono",
//     "lady_unicorn",
//     "peacock",
//     "weather_doll",
//   ].includes(value);
// }
//
// // WARN: This is a fallback when data is not found
// function createDefaultItem(
//   index: number,
//   fileName: string,
//   url: string,
//   collection: MainCollection,
//   subCollection: SubCollection,
//   relatedImages: string[],
// ): GalleryItem {
//   return {
//     id: index + 1,
//     name: formatItemName(fileName) || "Unnamed Item",
//     price: "TBD",
//     description: "Description pending",
//     category: "new",
//     available: false,
//     materials: [],
//     image: url,
//     collection,
//     subCollection,
//     relatedImages,
//   };
// }
//
// // NOTE: filtering logic
// export const filterByCollection = (
//   items: GalleryItem[],
//   collection: MainCollection | "all",
// ): GalleryItem[] => {
//   if (collection === "all") return items;
//   return items.filter((item) => item.collection === collection);
// };
//
// export const filterBySubCollection = (
//   items: GalleryItem[],
//   subCollection: SubCollection | "all",
// ): GalleryItem[] => {
//   if (subCollection === "all") return items;
//   return items.filter((item) => item.subCollection === subCollection);
// };
