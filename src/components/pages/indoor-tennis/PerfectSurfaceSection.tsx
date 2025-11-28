import React from "react";
import { FaTableTennis } from "react-icons/fa"; // Import icons from react-icons

const courts = [
  {
    title: "8 Red Clay-Court",
    description:
      "Smooth, European-style clay that supports longer rallies, controlled movement, and reduced impact on joints. Ideal for players who enjoy well-paced games and strategic play.",
    icon: <FaTableTennis className="text-3xl text-blue-600" />, // Tennis ball icon
  },
  {
    title: "2 Indoor Hard Courts",
    description:
      "High-performance hard courts that deliver speed, precision, and consistent bounce – perfect for training, competitive players, and fast-paced sessions.",
    icon: <FaTableTennis className="text-3xl text-blue-600" />, // Grid/Hard court icon
  },
];

const PerfectSurfaceSection = () => {
  return (
    <div className="py-10 px-16 max-w-[90rem] mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Find your perfect surface
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courts.map((court, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300"
          >
            <div className="mr-6 mb-2">{court.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {court.title}
              </h3>
              <p className="text-gray-600 mt-4">{court.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfectSurfaceSection;
