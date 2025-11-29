export default function JoinMemberBanner() {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] rounded-lg max-w-[90rem] mx-auto mb-10"
      style={{ backgroundImage: "url('/memberbg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Overlay for contrast */}
      <div className="relative z-10 text-center  text-white py-52">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          We Would Love to Have You as a Member
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Join a community committed to tennis, fitness, and lifelong
          friendships.
        </p>
        <button className="bg-[#d6e242] text-black text-lg font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-200">
          Join Now
        </button>
      </div>
    </div>
  );
}
