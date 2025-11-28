import React from "react";
import Image from "next/image";
import ReusableBanner from "../tennis/ReusableBanner";

import junior1 from "@/assets/junior/junior1.png";
import junior2 from "@/assets/junior/junior2.png";
import junior3 from "@/assets/junior/junior3.png";
import junior4 from "@/assets/junior/junior4.png";

// Sample data for cards
const cards = [
  {
    title: "Red 1 (8&U)",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: junior4, // Replace with actual image path
    imgAlt: "Red 1 (8&U) Tennis", // Replace with actual alt text
  },
  {
    title: "Orange II (10&U)",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: junior4, // Replace with actual image path
    imgAlt: "Orange II (10&U) Tennis", // Replace with actual alt text
  },
  {
    title: "Orange I (10&U)",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: junior4, // Replace with actual image path
    imgAlt: "Orange I (10&U) Tennis", // Replace with actual alt text
  },
  {
    title: "Junior Green Ball, Intermediate",
    description:
      "Demonstrates the ability to... (more details about the program)",
    imgSrc: junior4, // Replace with actual image path
    imgAlt: "Junior Green Ball Intermediate Tennis", // Replace with actual alt text
  },
];

const JuniorTennis = () => {
  return (
    <div>
      <ReusableBanner
        title="junior tennis"
        img1={junior1}
        img2={junior2}
        img3={junior3}
      ></ReusableBanner>
      <div className=" px-16 py-10 max-w-[90rem] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Simply the Best
          </h2>
          <p className="text-lg text-gray-600 text-center mx-auto px-6 py-4">
            Our philosophy is to give each student the opportunity to become the
            best player he/she can be by giving them the proper foundation to
            grow their skills. Our programs provide a learning atmosphere to
            help students develop the physical, mental, technical, tactical, and
            strategic components of tennis.
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

export default JuniorTennis;
