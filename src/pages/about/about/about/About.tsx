import BackButton from "@/components/custom/BackButton";

export default function About() {
  return (
    <div className="pt-16 animate-fade-in">
      <div className="title-container flex flex-col mt-32 pb-16 text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">About</h1>
        <p className="text-gray-600">Our story</p>
      </div>
      <div className="our-story-container animate-fade-in transition-all duration-500 ease-in-out mx-auto px-8">
        <BackButton />
      </div>
    </div>
  );
}
