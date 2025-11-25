import React from "react";
import Image from "next/image";

// Import your image here (replace with actual import path)
import tennisImage from "@/assets/Tennis/tennisrrc.png"; // Replace with your image path

const TennisAboutRRC: React.FC = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-16 px-6 md:px-16">
      <div className="text-center px-10 mb-10">
        {" "}
        <h2 className="text-3xl font-semibold mb-4">Tennis at RRC</h2>
        <p className="text-lg text-gray-700 mb-4">
          Raleigh Racquet Club is a tennis-first club offering unmatched
          facilities and programs for players of every level — from recreational
          games to competitive training.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="md:w-[60%]">
          <h3 className="text-2xl font-semibold mb-2">Outdoor Tennis</h3>
          <p className="text-lg text-gray-700 mb-6">
            Enjoy spacious outdoor courts designed for all playing styles.
            Perfect for daily matches, leagues, and social play, with evening
            lighting for extended hours.
          </p>

          <div className=" text-lg text-gray-700">
            <p className="font-semibold">15 lighted Har-tru clay courts</p>
            <p className="font-semibold">6 lighted hard courts</p>
            <p className="font-semibold">Dedicated ball machine court</p>
            <p className="font-semibold">2 Red Cali-Clay Hitting Walls</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[40%] h-[400px] relative">
          <Image
            src={tennisImage}
            alt="Outdoor Tennis"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TennisAboutRRC;
