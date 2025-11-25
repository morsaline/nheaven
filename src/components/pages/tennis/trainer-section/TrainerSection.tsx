/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TrainerCard from "../TrainerCard";
import trainer from "@/assets/Tennis/trainer.png";
// Import the card component

const TrainersSection: React.FC = () => {
  // data.ts (or inside your component file)
  const trainersData = [
    {
      name: "Paul Goode",
      role: "Director of Tennis",
      description:
        "Play year-round on our climate-controlled indoor courts. Ideal for consistent training, all-weather practice, and players who want maximum comfort and reliable conditions.",
      image: trainer, // Replace with actual image paths
      link: "/trainer/paul-goode",
    },
    {
      name: "Andrea Terrill",
      role: "Director of Tennis",
      description:
        "Play year-round on our climate-controlled indoor courts. Ideal for consistent training, all-weather practice, and players who want maximum comfort and reliable conditions.",
      image: trainer, // Replace with actual image paths
      link: "/trainer/andrea-terrill",
    },
  ];

  return (
    <section className="max-w-[90rem] mx-auto   my-10 rounded-xl">
      <div className="bg-[#ebf1a2] py-16 px-6 md:px-16">
        {" "}
        <div className="flex flex-wrap gap-6 justify-between">
          {trainersData.map((trainer: any, index: number) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              role={trainer.role}
              description={trainer.description}
              image={trainer.image}
              link={trainer.link}
            />
          ))}
        </div>
        <button className="border-2 border-dashed border-green-500 text-green-500 font-semibold px-6 py-2 rounded-lg hover:bg-green-500 hover:text-white mt-5 transition duration-300">
          See all our pro stuff
        </button>
      </div>
    </section>
  );
};

export default TrainersSection;
