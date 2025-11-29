import Image from "next/image";
import Link from "next/link";
// Adjust path if needed
import ReusableBanner from "../tennis/ReusableBanner";
import junior1 from "@/assets/junior/junior1.png";
import junior2 from "@/assets/junior/junior2.png";
import junior3 from "@/assets/junior/junior3.png";
import academyImage from "@/assets/junior/academyPrograms.png";

export default function AcademyPrograms() {
  return (
    <div>
      <ReusableBanner
        title="academy programs"
        img1={junior1}
        img2={junior2}
        img3={junior3}
      />
      <div className="max-w-[90rem] mx-auto px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Academy Programs
          </h2>
          <p className="text-lg text-gray-600">
            The RRC Academy Team is directed by former Division 1 College
            Coaches and includes personalized training for every tennis player.
            RRC Academy is recognized as one of the premier training facilities
            in the United States with players that have achieved International,
            National, and Sectional success.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 px-4 sm:px-6 md:px-8 py-8 sm:py-10 bg-white mb-12 rounded-lg">
          {/* Left Section: Content */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={academyImage} // Replace with the correct image path
              alt="Tennis player"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-start items-start text-gray-800 w-full lg:w-1/2">
            <h3 className="text-2xl  font-semibold mb-4">
              The RRC Academy includes:
            </h3>
            <ul className="list-disc pl-5 text-base sm:text-lg mb-8">
              <li>Monthly Tournament Evaluations</li>
              <li>Individualized Fitness Plans</li>
              <li>One-on-One Meeting with Tennis Professionals</li>
              <li>Fitness Conditioning</li>
              <li>Video Analysis</li>
              <li>Team Travel</li>
            </ul>

            <p className="text-base sm:text-lg mb-8">
              Students must have approval from Academy Director and train a
              minimum of 10 hours/week with the program.
            </p>

            <p className="text-center mb-5">
              <Link href="#" className="text-blue-500">
                Click here
              </Link>{" "}
              for more information about RRC&apos;s Academy 1, 2, and 3
              Programs, and here for more information on the Pre-Academy
              Program.
            </p>

            <p className="text-center mb-5">
              For questions about approval and the Academy, please email{" "}
              <Link href="mailto:paul@rrctennis.com" className="text-blue-500">
                Paul Goode
              </Link>{" "}
              at <span className="font-bold">paul@rrctennis.com</span>.
            </p>
          </div>

          {/* Right Section: Image */}
        </div>
      </div>
    </div>
  );
}
