import React from "react";
import { FaWind, FaTemperatureHigh, FaSnowflake } from "react-icons/fa"; // Import icons from react-icons

const comfortFeatures = [
  {
    title: "Perfect Cooling",
    icon: <FaSnowflake className="text-4xl text-yellow-400" />,
  },
  {
    title: "Fresh Airflow",
    icon: <FaWind className="text-4xl text-yellow-400" />,
  },
  {
    title: "Optimal Heating",
    icon: <FaTemperatureHigh className="text-4xl text-yellow-400" />,
  },
];

const ComfortInEveryMatch = () => {
  return (
    <div className="py-10 px-16 max-w-[90rem] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">
          Comfort in Every Match
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          When the weather outside won’t cooperate, bring your game inside to
          our indoor Tennis courts. Our indoor facilities have 10 permanent
          indoor courts, 8 red clay and 2 hard courts so you can improve your
          game no matter the season. 6 of the courts are climate-controlled for
          an incredible playing experience on those hot summer days.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {comfortFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComfortInEveryMatch;
