import React from "react";
import Image from "next/image";
import Link from "next/link"; // To create navigational links
import { ChevronRight } from "lucide-react";

interface TennisCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const TennisCard: React.FC<TennisCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="w-full md:w-[30%] bg-white rounded-lg  overflow-hidden">
      <div className="relative h-40 w-40">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="py-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={link}>
          <p className="text-green-500 font-semibold hover:underline flex gap-3">
            Explore {title.toLowerCase()} <ChevronRight></ChevronRight>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TennisCard;
