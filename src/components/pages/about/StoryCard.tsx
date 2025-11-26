import Image, { StaticImageData } from "next/image";

// Define the types for the props
interface StoryCardProps {
  image: string | StaticImageData; // The image URL (string or StaticImageData)
  title: string; // The title of the card (string)
  description: string; // The description of the card (string)
}

const StoryCard: React.FC<StoryCardProps> = ({ image, title, description }) => (
  <div className="  rounded-lg overflow-hidden shadow-lg mb-6">
    <div className="relative w-full h-72">
      <Image
        className="object-cover"
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default StoryCard;
