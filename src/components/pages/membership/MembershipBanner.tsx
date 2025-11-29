export default function MembershipBanner() {
    
  return (
    <div
      className="relative bg-cover bg-center min-h-[0vh]"
      style={{
        backgroundImage: "url('/membershipbg.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for contrast */}
      <div className="relative z-10 text-center text-white py-32">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Membership</h1>
        <p className="text-xl sm:text-2xl font-light">More than a club.</p>
        <p className="text-lg sm:text-xl font-light mt-2">
          A community where tennis, fitness, and social life come together.
        </p>
      </div>
    </div>
  );
}
