import { FaDumbbell, FaSwimmingPool, FaCoffee } from "react-icons/fa"; // React Icons for the amenities

const amenities = [
  {
    icon: <FaDumbbell />,
    title: "Fitness Center",
    description:
      "Modern equipment for strength, cardio, and tennis-focused training.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Aquatics",
    description: "Zero-depth entry pool with lap lanes for all ages.",
  },
  {
    icon: <FaCoffee />,
    title: "Cafe & Social Areas",
    description:
      "Comfortable cafe and gathering spaces for members and guests.",
  },
];

export default function WorldClassAmenities() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          World-Class Amenities
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Discover the premier facilities that make our club more than just a
          place to play tennis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start text-start"
          >
            <div className="text-4xl text-[#b9e85f] mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {amenity.title}
            </h3>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
