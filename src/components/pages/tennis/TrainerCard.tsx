import React from "react";
import Image from "next/image";
import Link from "next/link"; // To create navigational links
import { ChevronRight } from "lucide-react";

interface TrainerCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  link: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({
  name,
  role,
  description,
  image,
  link,
}) => {
  return (
    <div className="w-full md:w-[45%]   rounded-lg  ">
      {/* Image Section */}
      <div className="relative w-full h-72">
        {" "}
        {/* Define width and height */}
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover" // Ensures the image covers the parent div's area
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 my-2">{name}</h3>
        <p className="text-xl text-gray-600 mb-4">{role}</p>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <Link href={link}>
          <p className="text-green-500 font-semibold hover:underline flex gap-3">
            Learn more <ChevronRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
