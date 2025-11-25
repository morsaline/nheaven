import React from "react";
import FeatureCard from "../FeatureCard";
import featurImg from "@/assets/resturant/feature1.png";

const featuresData = [
  {
    title: "Catering",
    description:
      "Hosting an event? Chef Jason will work with you to plan the perfect menu. From hors d’oeuvres and buffets to five-course plated dinners, we can’t wait for the opportunity to wow you and your guests.",
    image: featurImg, // Replace with actual image paths
    link: "/catering",
  },
  {
    title: "Patio dining",
    description:
      "Whether you’re watching a match or just enjoying the weather, the outdoor dining area is the place to be. Covered tables, rocking chairs, and a cozy fireplace ensures you’ll enjoy, no matter the season.",
    image: featurImg, // Replace with actual image paths
    link: "/patio-dining",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="max-w-[90rem] bg-[#ebf1a2] mx-auto py-16 px-6 md:px-16 my-10">
      <div className="flex flex-wrap gap-6 justify-center">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            link={feature.link}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
