import Image from "next/image";
import orangeball from "@/assets/junior/OragneBall.png";
import Link from "next/link";

// Sample Data for Green Ball
const greenBallData = {
  title: "Green Ball",
  schedule: "Monday-Friday, 4:30 PM - 6:00 PM",
  description: [
    "Players will learn correct rally, basic patterns of match play, and advanced skills such as timing to hit a full stroke.",
    "They will also gain a better understanding of court positioning and patterns of play within match conditions.",
    "The training program will focus on mastering match play strategies and the physical demands of consistent tennis.",
  ],
  image: orangeball, // Replace with actual image path
  contactEmail: "karen@rrctennis.com", // Replace with actual email
};

export default function GreenBall() {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="text-center">
        <p className="text-base sm:text-lg text-gray-700 ">
          Members may register online through the member portal. Non-members can
          register online by following the instructions on page 2 of the
          informational flyer, email{" "}
          <Link
            href="mailto:MattT@rrctennis.com"
            className="text-blue-500 hover:underline"
          >
            Matt Tomayko
          </Link>{" "}
          at{" "}
          <Link
            href="mailto:MattT@rrctennis.com"
            className="text-blue-500 hover:underline"
          >
            MattT@rrctennis.com
          </Link>
          , or stop by the RRC front desk with payment.
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-4">
          For help choosing a class or questions about{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            clinics
          </Link>
          , please email{" "}
          <Link
            href="mailto:MattT@rrctennis.com"
            className="text-blue-500 hover:underline"
          >
            Matt
          </Link>{" "}
          at{" "}
          <Link
            href="mailto:MattT@rrctennis.com"
            className="text-blue-500 hover:underline"
          >
            MattT@rrctennis.com
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-4 sm:px-6 md:px-8 py-8 sm:py-10 bg-white mb-12 rounded-lg">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={greenBallData.image} // Dynamically load the Green Ball image
            alt="Green Ball Player"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            {greenBallData.title}
          </h3>
          <p className="text-lg text-gray-600 mb-4">{greenBallData.schedule}</p>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            {greenBallData.description.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <p className="text-sm sm:text-base text-gray-600">
            For help or questions, please email{" "}
            <a
              href={`mailto:${greenBallData.contactEmail}`}
              className="text-blue-500"
            >
              {greenBallData.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-6 text-center max-w-7xl">
        Members may register online through the member portal. Non-members can
        register online by following the instructions on page 2 of the
        informational flyer. For more details, contact Matt Tompkins at{" "}
        <span className="font-bold">matt@rrctennis.com</span>.
      </p>
    </div>
  );
}
