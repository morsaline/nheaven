import React from "react";
import Image from "next/image";
import prostuff1 from "@/assets/prostuff/prostuff1.png";
import prostuff2 from "@/assets/prostuff/prostuff2.png";
import prostuff3 from "@/assets/prostuff/prostuff3.png";
import prostuff4 from "@/assets/prostuff/prostuff4.png";
import ReusableBanner from "../tennis/ReusableBanner";

// Sample data for cards
const cards = [
  {
    name: "Paul Goode",
    position: "Director of Tennis",
    description:
      "Paul Goode has over 15 years of experience in the tennis world. He has coached various players from beginners to advanced levels.",
    imgSrc: prostuff4, // Replace with actual image path
    imgAlt: "Paul Goode", // Replace with actual alt text
  },
  {
    name: "Paul Goode",
    position: "Director of Tennis",
    description:
      "Paul Goode has over 15 years of experience in the tennis world. He has coached various players from beginners to advanced levels.",
    imgSrc: prostuff4, // Replace with actual image path
    imgAlt: "Paul Goode", // Replace with actual alt text
  },
  {
    name: "Paul Goode",
    position: "Director of Tennis",
    description:
      "Paul Goode has over 15 years of experience in the tennis world. He has coached various players from beginners to advanced levels.",
    imgSrc: prostuff4, // Replace with actual image path
    imgAlt: "Paul Goode", // Replace with actual alt text
  },
  {
    name: "Paul Goode",
    position: "Director of Tennis",
    description:
      "Paul Goode has over 15 years of experience in the tennis world. He has coached various players from beginners to advanced levels.",
    imgSrc: prostuff4, // Replace with actual image path
    imgAlt: "Paul Goode", // Replace with actual alt text
  },
  // Add more card data here
];

const ProStuffTennisSection = () => {
  return (
    <div>
      {" "}
      <ReusableBanner
        title="pro Staff"
        img1={prostuff1}
        img2={prostuff2}
        img3={prostuff3}
      ></ReusableBanner>
      <div className="py-10 max-w-[90rem] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-center mb-6">
            The Best of the Best
          </h2>
          <p className="text-lg text-gray-600 text-center mx-auto px-6 py-4">
            Teachers, coaches and tournament champions, our Tennis Pros bring
            dozens of years of combined experience to the Raleigh Racquet Club.
            Whether you&lsquo;ve just picked up a racquet or you&rsquo;ve been
            playing for years, our pros can help you grow and improve your game.
            They are truly the best of the best. Meet them below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-6">
          {cards.map((card, index) => (
            <div key={index} className="rounded-lg  overflow-hidden bg-white ">
              <div className="relative w-full h-64">
                <Image
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-500">{card.position}</p>
                <p className="text-gray-600 my-4">{card.description}</p>
                <button className="px-4 py-2 bg-[#b9e85f] text-black rounded-lg hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProStuffTennisSection;
