import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryItem } from "@/types/Gallery";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductModalProps {
  item: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  item,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-700">
            {item.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img
              src={item.images?.[selectedImage] || item.image}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-xl"
            />

            {item.images && item.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {item.images.map((img, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer ${
                      selectedImage === index ? "ring-2 ring-purple-500" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <CardContent className="p-2">
                      <img
                        src={img}
                        alt={`${item.name} view ${index + 1}`}
                        className="w-full aspect-square object-cover rounded"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Description
              </h3>
              <p className="mt-2 text-gray-600">
                {item.fullDescription || item.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Details</h3>
              <dl className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Price</dt>
                  <dd className="text-pink-600 font-medium">${item.price}</dd>
                </div>
                {item.dimensions && (
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Dimensions</dt>
                    <dd className="text-gray-900">{item.dimensions}</dd>
                  </div>
                )}
                {item.material && (
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Material</dt>
                    <dd className="text-gray-900">{item.material}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
