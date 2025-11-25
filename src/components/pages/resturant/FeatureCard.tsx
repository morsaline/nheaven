import React from "react";
import Image, { StaticImageData } from "next/image";
// To create navigational links

interface FeatureCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-full md:w-[45%]  p-6 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-72 mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-lg text-gray-600 mb-4">{description}</p>
      {/* <Link href={link}>
        <p className="text-green-500 font-semibold hover:underline">
          Learn more
        </p>
      </Link> */}
    </div>
  );
};

export default FeatureCard;
