import { Check, ShoppingCart, CreditCard, Package, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  step: number;
  currentStep: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem = ({
  step,
  currentStep,
  title,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) => {
  const isCompleted = step < currentStep;
  const isCurrent = step === currentStep;

  return (
    <div className="flex items-start relative">
      {/* Connector Line */}
      {!isLast && (
        <div
          className={cn(
            "absolute left-5 top-8 h-full w-0.5",
            isCompleted ? "bg-purple-500" : "bg-gray-200",
          )}
        />
      )}

      {/* Icon & Content */}
      <div className="flex flex-col items-center mr-4 z-10">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border-2",
            isCompleted
              ? "bg-purple-500 border-purple-500"
              : isCurrent
                ? "bg-white border-purple-500"
                : "bg-white border-gray-200",
          )}
        >
          {isCompleted ? (
            <Check className="w-5 h-5 text-white" />
          ) : (
            <div
              className={cn(
                "w-5 h-5",
                isCurrent ? "text-purple-500" : "text-gray-400",
              )}
            >
              {icon}
            </div>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 pb-8">
        <h3
          className={cn(
            "text-lg font-semibold",
            isCurrent ? "text-purple-500" : "text-gray-900",
          )}
        >
          {title}
        </h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

interface PurchaseTimelineProps {
  currentStep: number;
}

export default function PurchaseTimeline({
  currentStep,
}: PurchaseTimelineProps) {
  const steps = [
    {
      title: "Browse Items",
      description: "Explore our collection of handcrafted dolls and plushies",
      icon: <Heart />,
    },
    {
      title: "Add to Cart",
      description:
        "Select your favorite items and add them to your shopping cart",
      icon: <ShoppingCart />,
    },
    {
      title: "Checkout",
      description: "Complete your purchase with our secure payment system",
      icon: <CreditCard />,
    },
    {
      title: "Order Processing",
      description: "We'll carefully prepare and pack your items",
      icon: <Package />,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {steps.map((step, index) => (
        <TimelineItem
          key={index}
          step={index + 1}
          currentStep={currentStep}
          title={step.title}
          description={step.description}
          icon={step.icon}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
