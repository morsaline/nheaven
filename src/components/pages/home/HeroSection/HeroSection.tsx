const HeroSection = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero_banner.png')", // Path to the public image
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex justify-start   text-white px-72 py-60">
        <div className="max-w-lg px-4 md:px-0">
          <h1 className="text-7xl font-extrabold mb-6">
            Join the Club. <br /> Elevate Your Game.
          </h1>
          <p className="text-3xl mb-8">Sub test here</p>
          <div className=" flex gap-5">
            <button className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-300 transition">
              Give us a try
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition">
              Explore Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
