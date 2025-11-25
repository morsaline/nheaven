interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  comment,
}) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Rating */}
      <div className="flex">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="text-yellow-400">★</span>
        ))}
        {Array.from({ length: 5 - rating }, (_, index) => (
          <span key={index} className="text-gray-300">★</span>
        ))}
      </div>
      {/* Comment */}
      <p className="text-gray-700">{comment}</p>
      {/* Name and Location */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-300"></div> {/* Placeholder for profile image */}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
