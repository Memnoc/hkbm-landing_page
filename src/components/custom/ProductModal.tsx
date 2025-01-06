import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryItem } from "@/types/Gallery";
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
  const images = item.images || [item.image];

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
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={img}
                        alt={`${item.name} - View ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="text-lg font-semibold text-purple-800" />
                  <CarouselNext className="text-lg font-semibold text-purple-800" />
                </>
              )}
            </Carousel>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <Card key={index}>
                    <CardContent className="p-2">
                      <img
                        src={img}
                        alt={`${item.name} thumbnail ${index + 1}`}
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
