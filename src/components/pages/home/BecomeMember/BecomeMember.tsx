// Replace with your image path

const BecomeMember = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center my-5"
      style={{
        backgroundImage: "url('/memberbg.png')", // Path to the public image
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }} // Apply the background image dynamically
    >
      <div className="relative  text-white space-y-6 px-56 py-56  max-w-[90rem]">
        <h1 className="text-6xl  font-extrabold">Become a Member</h1>
        <p className="text-lg md:text-2xl">
          Join a thriving community of tennis lovers, fitness enthusiasts, and
          social families. Our membership packages are designed to suit your
          lifestyle — from full membership to casual play.
        </p>
        <div className="flex  gap-6">
          <button className="px-8 py-5 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-400 transition">
            Apply Now
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Learn more ➔
          </button>
        </div>
      </div>
    
    </section>
  );
};

export default BecomeMember;
