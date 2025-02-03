// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { GalleryItem } from "@/types/Gallery";
// import { Badge } from "@/components/ui/badge";
// import ShopButton from "./ShopButton";
//
// interface ProductModalProps {
//   item: GalleryItem;
//   isOpen: boolean;
//   onClose: () => void;
// }
//
// export default function ProductModal({
//   item,
//   isOpen,
//   onClose,
// }: ProductModalProps) {
//   // Filter out duplicates from relatedImages array
//   const uniqueImages = Array.from(
//     new Set([item.image, ...(item.relatedImages || [])]),
//   );
//
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-4xl bg-white">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-purple-700">
//             {item.name}
//           </DialogTitle>
//         </DialogHeader>
//
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Image Carousel */}
//           <div>
//             <Carousel
//               opts={{
//                 align: "start",
//                 loop: true,
//               }}
//               className="w-full"
//             >
//               <CarouselContent>
//                 {uniqueImages.map((imgUrl, index) => (
//                   <CarouselItem key={index}>
//                     <div className="p-1">
//                       <img
//                         src={imgUrl}
//                         alt={`${item.name} - View ${index + 1}`}
//                         className="w-full aspect-square object-cover rounded-lg"
//                       />
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               {uniqueImages.length > 1 && (
//                 <>
//                   <CarouselPrevious className="ml-20" />
//                   <CarouselNext className="mr-20" />
//                 </>
//               )}
//             </Carousel>
//           </div>
//
//           {/* Product Details */}
//           <div className="space-y-2">
//             {/* Price and Availability */}
//             <div className="flex items-center justify-between">
//               <p className="text-2xl font-bold text-pink-600">{item.price}</p>
//               <Badge
//                 variant={item.available ? "default" : "secondary"}
//                 className={
//                   item.available
//                     ? "bg-green-500 rounded-full"
//                     : "bg-gray-500 rounded-full"
//                 }
//               >
//                 {item.available ? "In Stock" : "Out of Stock"}
//               </Badge>
//             </div>
//
//             {/* Description */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Description
//               </h3>
//               <p className="mt-2 text-gray-600">{item.description}</p>
//             </div>
//
//             {/* Materials */}
//             {item.materials && item.materials.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Materials
//                 </h3>
//                 <ul className="mt-2 list-disc list-inside text-gray-600">
//                   {item.materials.map((material, index) => (
//                     <li key={index}>{material}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//
//             {/* Category Info */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">Details</h3>
//               <dl className="mt-2 space-y-2">
//                 <div className="flex justify-between">
//                   <dt className="text-gray-600">Category</dt>
//                   <dd className="text-gray-900 capitalize">{item.category}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="text-gray-600">Collection</dt>
//                   <dd className="text-gray-900 capitalize">
//                     {item.collection}
//                   </dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="text-gray-600">Type</dt>
//                   <dd className="text-gray-900 capitalize">
//                     {item.subCollection.replace(/_/g, " ")}
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         </div>
//         <ShopButton />
//       </DialogContent>
//     </Dialog>
//   );
// }
