import { MainCollection, SubCollection } from "@/types/Gallery";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterControlsProps {
  activeCollection: MainCollection | "all";
  activeSubCollection: SubCollection | "all";
  onCollectionChange: (value: MainCollection | "all") => void;
  onSubCollectionChange: (value: SubCollection | "all") => void;
}

export default function FilterControls({
  activeCollection,
  activeSubCollection,
  onCollectionChange,
  onSubCollectionChange,
}: FilterControlsProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 w-1/6 max-w-xl">
      <div className="flex-1">
        <Select value={activeCollection} onValueChange={onCollectionChange}>
          <SelectTrigger className="w-full bg-purple-100 border-pink-200 hover:bg-pink-50 text-purple-700 rounded">
            <SelectValue placeholder="Browse Collection" />
          </SelectTrigger>
          <SelectContent className="bg-purple-50 border-pink-200">
            <SelectItem
              value="all"
              className="text-purple-700 hover:bg-pink-50"
            >
              All Collections
            </SelectItem>
            <SelectItem
              value="animals"
              className="text-purple-700 hover:bg-pink-50"
            >
              Animals
            </SelectItem>
            <SelectItem
              value="dolls"
              className="text-purple-700 hover:bg-pink-50"
            >
              Dolls
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {activeCollection !== "all" && (
        <div className="flex-1">
          <Select
            value={activeSubCollection}
            onValueChange={onSubCollectionChange}
          >
            <SelectTrigger className="w-full bg-purple-100 border-pink-200 hover:bg-pink-50 text-purple-700 rounded">
              <SelectValue placeholder="Choose Category" />
            </SelectTrigger>
            <SelectContent className="bg-purple-50 border-pink-200">
              <SelectItem
                value="all"
                className="text-purple-700 hover:bg-pink-50"
              >
                All Categories
              </SelectItem>
              {activeCollection === "animals" ? (
                <>
                  <SelectItem
                    value="bunnies"
                    className="text-purple-700 hover:bg-pink-50"
                  >
                    Bunnies
                  </SelectItem>
                  <SelectItem
                    value="cats"
                    className="text-purple-700 hover:bg-pink-50"
                  >
                    Cats
                  </SelectItem>
                  <SelectItem
                    value="fish"
                    className="text-purple-700 hover:bg-pink-50"
                  >
                    Fish
                  </SelectItem>
                </>
              ) : (
                <>
                  <SelectItem
                    value="genshin"
                    className="text-purple-700 hover:bg-pink-50"
                  >
                    Genshin
                  </SelectItem>
                  <SelectItem
                    value="kimono"
                    className="text-purple-700 hover:bg-pink-50"
                  >
                    Kimono
                  </SelectItem>
                  <SelectItem
                    value="winter"
                    className="text-purple-700 hover:bg-pink-50"
                  >
                    Winter
                  </SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
