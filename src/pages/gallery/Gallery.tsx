import BackButton from "@/components/custom/BackButton";
import { galleryItems } from "@/data/gallery-data";
import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  return (
    <div className="pt-16">
      <div className="gallery-container animate-fade-in mx-auto px-8">
        <BackButton />
        <h1 className="text-3xl font-bold text-purple-700 mb-8">All Dolls</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-purple-700">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <p className="text-pink-600 font-medium mt-2">{item.price}</p>
                {!item.available && (
                  <span className="text-xs text-white bg-pink-500 px-2 rounded mt-2 inline-block">
                    Sold out
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
