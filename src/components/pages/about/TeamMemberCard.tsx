import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// Define the type for the props
interface TeamMemberCardProps {
  image: string | StaticImageData; // The image URL (string or StaticImageData)
  name: string; // The name of the team member (string)
  title: string; // The title of the team member (string)
  description: string; // The description of the team member (string)
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  title,
  description,
}) => (
  <div className=" rounded-lg overflow-hidden shadow-lg mb-6 p-4">
    <div className="relative w-full h-48 mb-4">
      <Image
        className="object-cover"
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-2">{title}</p>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <button className="flex gap-4 items-center text-green-500 py-2 px-4 rounded-md hover:text-green-600">
      Learn more <ChevronRight></ChevronRight>
    </button>
  </div>
);

export default TeamMemberCard;
