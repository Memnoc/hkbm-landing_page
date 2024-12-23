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
        className="fixed top-20 right-4 bg-purple-100 hover:bg-purple-200 text-purple-700 transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back Home
      </Button>
    </div>
  );
}
