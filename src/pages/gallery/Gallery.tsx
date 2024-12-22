import BackButton from "@/components/custom/BackButton";

export default function Gallery() {
  return (
    <div className="pt-16 animate-fade-in">
      <div className="gallery-container animate-fade-in transition-all duration-500 ease-in-out mx-auto px-8">
        <BackButton />
        <h1 className="text-3xl font-bold text-purple-700 mb-6">All Images</h1>
      </div>
    </div>
  );
}
