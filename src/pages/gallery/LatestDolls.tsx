import BackButton from "@/components/custom/BackButton";

export default function LatestDolls() {
  return (
    <div className="pt-16 animate-fade-in">
      <div className="latest-photos-container animate-fade-in transition-all duration-500 ease-in-out mx-auto px-8">
        <BackButton />
        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          Latest Dolls
        </h1>
      </div>
    </div>
  );
}
