import { useState } from "react";
import PurchaseTimeline from "@/components/custom/Timeline";
import BackButton from "@/components/custom/BackButton";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Shop() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="title-container flex flex-col mt-28 pb-16 text-center">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">Shop</h1>
          <p className="text-gray-600">
            Follow these steps to complete your purchase
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <PurchaseTimeline currentStep={currentStep} />
        </div>

        {/* Content Section - Changes based on current step */}
        <div className="mb-16">
          {currentStep === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Browse Our Collection
              </h2>
              <p className="text-gray-600 mb-8">
                Discover our handcrafted dolls and plushies, each made with love
                and attention to detail.
              </p>
              <Button
                className="text-white bg-purple-400 hover:bg-purple-600 text-[#240b36] rounded-full"
                onClick={() => setCurrentStep(2)}
              >
                <ShoppingCart className="mr-2 h-4 w-4 bg-purple-400 hover:bg-purple-600 rounded-full" />
                Start Shopping
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Shopping Cart
              </h2>
              <p className="text-gray-600 mb-8">
                Add items to your cart and proceed to checkout when you're
                ready.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Continue Shopping
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setCurrentStep(3)}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Checkout
              </h2>
              <p className="text-gray-600 mb-8">
                Complete your purchase securely with our payment system.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Back to Cart
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setCurrentStep(4)}
                >
                  Place Order
                </Button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Order Processing
              </h2>
              <p className="text-gray-600 mb-8">
                Thank you for your order! We'll start preparing your items right
                away.
              </p>
              <Button variant="outline" onClick={() => setCurrentStep(1)}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="pb-16">
          <BackButton />
        </div>
      </div>
    </div>
  );
}
