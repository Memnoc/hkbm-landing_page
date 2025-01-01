export const Wave = ({ color = "pink-100", className = "" }) => {
  console.log("Wave color prop:", color);
  return (
    <div className={`absolute w-full h-40 overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full pb-18"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          className={`fill-${color}`}
        />
      </svg>
    </div>
  );
};
