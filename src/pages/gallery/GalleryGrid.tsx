import { Card, CardContent } from "@/components/ui/card";
import { GalleryItem } from "@/types/Gallery";

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
      {items.map((item) => (
        <Card key={item.id} className="bg-white">
          <CardContent>
            <div className="pt-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-square object-cover rounded-2xl"
              />
              <h2 className="text-lg font-semibold text-purple-700 mt-6">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <p className="text-pink-600 font-medium mt-2">${item.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
