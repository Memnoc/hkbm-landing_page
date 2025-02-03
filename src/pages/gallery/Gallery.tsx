// import { useEffect, useState } from "react";
// import { GalleryItem, MainCollection, SubCollection } from "@/types/Gallery";
// import BackButton from "@/components/custom/BackButton";
// import {
//   getGalleryItems,
//   filterByCollection,
//   filterBySubCollection,
// } from "@/utils/gallery";
// import GalleryGrid from "@/pages/gallery/GalleryGrid";
// import FilterControls from "@/pages/gallery/FilterControl";
//
// export default function Gallery() {
//   const [items, setItems] = useState<GalleryItem[]>([]);
//   const [activeCollection, setActiveCollection] = useState<
//     MainCollection | "all"
//   >("all");
//   console.log(activeCollection);
//   const [activeSubCollection, setActiveSubCollection] = useState<
//     SubCollection | "all"
//   >("all");
//   const [loading, setLoading] = useState(true);
//
//   // WARN: Load gallery items with hook
//   // We also filter the collections at this level
//   useEffect(() => {
//     const loadGallery = async () => {
//       const allItems = await getGalleryItems(); // Gets combined image + metadata
//       let filtered = filterByCollection(allItems, activeCollection);
//       filtered = filterBySubCollection(filtered, activeSubCollection);
//       setItems(filtered);
//       setLoading(false);
//     };
//
//     loadGallery();
//   }, [activeCollection, activeSubCollection]);
//
//   if (loading) return <div>Loading...</div>;
//
//   // INFO: We render the control filter here
//   return (
//     <div className="pt-16">
//       <div className="gallery-container animate-fade-in mx-auto px-8">
//         <div className="title-container flex flex-col mt-28 pb-28 text-center">
//           <h1 className="text-3xl font-bold text-purple-700 mb-4">Gallery</h1>
//           <p>Our full collection of furry friends!</p>
//         </div>
//
//         <FilterControls
//           activeCollection={activeCollection}
//           activeSubCollection={activeSubCollection}
//           onCollectionChange={setActiveCollection}
//           onSubCollectionChange={setActiveSubCollection}
//         />
//
//         <GalleryGrid items={items} />
//         <BackButton />
//       </div>
//     </div>
//   );
// }
