import Image, { StaticImageData } from "next/image";

// Define the type for the props
interface TeamCardProps {
  image: string | StaticImageData; // The image URL (string)
  name: string; // The name of the team member (string)
  title: string; // The title of the team member (string)
  experience: string; // Description of the team member's experience (string)
  hometown: string; // The hometown of the team member (string)
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  title,
  experience,
  hometown,
}) => (
  <div className=" mx-auto bg-white rounded-lg overflow-hidden  shadow-lg mb-6">
    <div className="relative w-full h-48">
      <Image
        className="object-cover"
        src={image} // Use the image source passed via props
        alt="Person's photo"
        layout="fill" // Ensures the image fills the container's width and height
        objectFit="cover" // Maintains aspect ratio while covering the container
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="text-sm text-gray-500 my-4">{experience}</p>
      <p className="text-sm text-gray-400 mb-4">Hometown: {hometown}</p>
      <button className="p-5 bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600">
        Send email
      </button>
    </div>
  </div>
);

export default TeamCard;
