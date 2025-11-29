import {
  FaShopify,
  FaUserAlt,
  FaBullseye,
  FaGraduationCap,
  FaCogs,
  FaFutbol,
  FaPlayCircle,
  FaTableTennis,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTableTennis />,
    title: "31 Total Courts",
    description: "Play day or night on our expansive, well-maintained courts.",
  },
  {
    icon: <FaFutbol />,
    title: "15 Outdoor Clay",
    description: "Enjoy the classic game on our beautiful outdoor clay courts.",
  },
  {
    icon: <FaShopify />,
    title: "Pro Shop",
    description:
      "Get the latest gear and stringing services from our on-site experts.",
  },
  {
    icon: <FaUserAlt />,
    title: "20+ Professionals",
    description:
      "Learn from the best with our team of certified professionals.",
  },
  {
    icon: <FaCogs />,
    title: "League Play",
    description:
      "Compete in USTA, ALTA, and Triangle leagues throughout the year.",
  },
  {
    icon: <FaBullseye />,
    title: "Tournaments",
    description:
      "Challenge yourself in our competitive year-round tournaments.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Clinics & Lessons",
    description:
      "Adult and junior programs available for all ages and skill levels.",
  },
  {
    icon: <FaPlayCircle />,
    title: "8 Hard Courts",
    description:
      "A fast-paced game on our professional-grade courts (6 outdoor, 2 indoor).",
  },
];

export default function TennisFeatures() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="text-4xl text-[#b9e85f] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
