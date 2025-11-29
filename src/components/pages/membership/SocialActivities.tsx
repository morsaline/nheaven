import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Icon for check marks
import socialimg from "@/assets/junior/membersocial.png";

const activities = [
  {
    title: "Monthly Adult Mixers and Special Events",
    description:
      "Network and connect with fellow members in relaxed atmosphere.",
  },
  {
    title: "Social Events Year-Round",
    description:
      "From themed parties to casual get-togethers, there’s always something happening.",
  },
  {
    title: "Holiday Play Days and Parties",
    description:
      "Celebrate the season with festive parties and special gatherings for the whole family.",
  },
  {
    title: "Music Events on the Patio",
    description:
      "Enjoy evenings filled with great music and entertainment on the patio.",
  },
];

export default function SocialActivities() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Social Activities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            A vibrant calendar of events that brings our community together.
          </p>

          {/* List of Activities */}
          <ul className="space-y-4 text-gray-600">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={socialimg} // Replace with the actual image path
            alt="Social Activities"
            width={600} // Adjust based on the image size you need
            height={400} // Adjust based on the image size you need
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
