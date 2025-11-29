const HeroSection = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero_banner.png')", // Path to the public image
        backgroundSize: "100% 100%", // Ensures the image covers the area
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex justify-start items-center text-white px-6 sm:px-10 lg:px-72 py-16 sm:py-32 md:py-60">
        <div className="max-w-lg px-4 md:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
            Join the Club. <br /> Elevate Your Game.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8">Sub test here</p>
          <div className="flex gap-5 flex-col sm:flex-row">
            <button className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-300 transition w-full sm:w-auto mb-4 sm:mb-0">
              Give us a try
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition w-full sm:w-auto">
              Explore Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
