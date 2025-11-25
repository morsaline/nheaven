/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// Import the data
import TennisCard from "../TennisCard";
import tennisPlayer from "@/assets/Tennis/tennisplayer.png";
// Import the card component

const TennisSection: React.FC = () => {
  // data.ts (or inside your component file)
  const tennisData = [
    {
      title: "Indoor Tennis",
      description:
        "Play year-round on our climate-controlled indoor courts. Ideal for consistent training, all-weather practice, and players who want maximum comfort and reliable conditions.",
      image: tennisPlayer, // Replace with actual image paths
      link: "/indoor-tennis",
    },
    {
      title: "Junior Tennis",
      description:
        "Play year-round on our climate-controlled indoor courts. Ideal for consistent training, all-weather practice, and players who want maximum comfort and reliable conditions.",
      image: tennisPlayer, // Replace with actual image paths
      link: "/junior-tennis",
    },
    {
      title: "Adult Tennis",
      description:
        "Play year-round on our climate-controlled indoor courts. Ideal for consistent training, all-weather practice, and players who want maximum comfort and reliable conditions.",
      image: tennisPlayer, // Replace with actual image paths
      link: "/adult-tennis",
    },
  ];

  return (
    <section className="max-w-[90rem] mx-auto  px-6 md:px-16">
      <div className="flex flex-wrap gap-6 justify-between">
        {tennisData.map((card: any, index: number) => (
          <TennisCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default TennisSection;
