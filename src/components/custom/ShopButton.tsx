import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* HEADER:
 *
 * Shop button inside the Product Carousel
 *
 * */
export default function ShopButton() {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleBack = () => {
    setIsLeaving(true);
  };

  return (
    <div
      className={`transition-opacity duration-300 ${isLeaving ? "opacity-0" : "opacity-100"}`}
      onTransitionEnd={() => {
        if (isLeaving) {
          navigate("/shop");
        }
      }}
    >
      <Button
        onClick={handleBack}
        className="absolute w-fit top-40 right-4 bg-purple-400 hover:bg-purple-600 rounded-full font-bold text-[#240b36]"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Shop Item
      </Button>
    </div>
  );
}
