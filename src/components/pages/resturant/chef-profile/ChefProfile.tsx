import React from "react";
import Image from "next/image";
import Link from "next/link"; // To create navigational links
import image from "@/assets/resturant/chef.png"; // Update with actual image path

const ChefProfile: React.FC = () => {
  const name = "Jason Carte";
  const role = "Café Manager";
  const description =
    "Play year-round on our climate-controlled indoor courts. Ideal for consistent training, all-weather practice, and players who want maximum comfort and reliable conditions.";
  const emailLink = "mailto:jason.carte@example.com"; // Replace with actual email

  return (
    <section className="max-w-[90rem] mx-auto py-16 px-6 md:px-16">
      <div className="w-full  bg-yellow-100 p-8 rounded-lg shadow-lg flex items-center gap-8 mx-auto">
        {/* Image Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-xl text-gray-600 mb-4">{role}</p>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <Link href={emailLink}>
            <p className="text-green-500 font-semibold hover:underline flex items-center gap-3">
              Send email <span>&rarr;</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChefProfile;
