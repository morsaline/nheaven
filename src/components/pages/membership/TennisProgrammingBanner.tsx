import Image from "next/image";
import ground from "@/assets/junior/tennisGround.png";

export default function TennisProgrammingBanner() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-16 max-w-[90rem] mx-auto">
      {/* Left Section: Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Tennis & Programming
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Year-round tennis on 31 courts with adult and junior programs for
          every level.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src={ground} // Replace with actual image path
          alt="Tennis Courts"
          width={800} // Adjust based on your image's size
          height={400} // Adjust based on your image's size
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
