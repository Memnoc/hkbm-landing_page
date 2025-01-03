import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function BackButton() {
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
          navigate("/");
        }
      }}
    >
      <Button
        onClick={handleBack}
        className="absolute top-40 right-4 bg-white font-bold hover:bg-purple-400 text-[#240b36] transition-all duration-300 ease-in-out rounded-full"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back Home
      </Button>
    </div>
  );
}
