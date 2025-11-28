import React from "react";
import Image from "next/image";
import ReusableBanner from "../tennis/ReusableBanner";

import adult1 from "@/assets/adult/adult1.png";
import adult2 from "@/assets/adult/adult2.png";
import adult3 from "@/assets/adult/adult3.png";
import adult4 from "@/assets/adult/adult4.png";

// Sample data for cards
const cards = [
  {
    title: "Red 1 (8&U)",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: adult4, // Replace with actual image path
    imgAlt: "Red 1 (8&U) Tennis", // Replace with actual alt text
  },
  {
    title: "Orange II (10&U)",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: adult4, // Replace with actual image path
    imgAlt: "Orange II (10&U) Tennis", // Replace with actual alt text
  },
  {
    title: "Orange I (10&U)",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: adult4, // Replace with actual image path
    imgAlt: "Orange I (10&U) Tennis", // Replace with actual alt text
  },
  {
    title: "Junior Green Ball, Intermediate",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: adult4, // Replace with actual image path
    imgAlt: "Junior Green Ball Intermediate Tennis", // Replace with actual alt text
  },
];

const AdultTennis = () => {
  return (
    <div>
      <ReusableBanner
        title="Adult tennis"
        img1={adult1}
        img2={adult2}
        img3={adult3}
      ></ReusableBanner>
      <div className="px-16 py-10 max-w-[90rem] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Memorable Cummunity
          </h2>
          <p className="text-lg text-gray-600 text-center mx-auto px-6 py-4">
            At Raleigh Racquet Club we provide our members with high-quality
            programming, instruction, and memorable social events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdultTennis;
