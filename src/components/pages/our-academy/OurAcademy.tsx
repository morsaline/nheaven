import Image from "next/image";
import Link from "next/link";
import ReusableBanner from "../tennis/ReusableBanner";
import academy1 from "@/assets/academy/academy1.png";
import academy2 from "@/assets/academy/academy2.png";
import academy3 from "@/assets/academy/academy3.png";
import academy4 from "@/assets/academy/academy4.png";

export default function OurAcademy() {
  return (
    <div className="">
      <ReusableBanner
        title="Our Academy"
        img1={academy1}
        img2={academy2}
        img3={academy3}
      />
      <div className="max-w-[90rem] mx-auto px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Online Academy
          </h2>
          <p className="text-lg text-gray-600  ">
            Tennis is a sport that requires dedication and discipline both on
            the court and in the classroom. RRC highly values your student’s
            education, which is why we work with their educational path.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 px-4 sm:px-6 md:px-8 py-8 sm:py-10 bg-white mb-12 rounded-lg">
          {/* Left Section: Text Content */}
          <div className="flex flex-col justify-start items-start text-gray-800 w-full lg:w-1/2">
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Drilling Fitness
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Monday-Friday:{" "}
                <span className="font-bold">9:00 AM - 11:00 AM</span>
              </p>

              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Matchplay
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Monday-Thursday:{" "}
                <span className="font-bold">12:30 PM - 3:30 PM</span>
                <br />
                Must have approval from Academy Director to enroll in the
                program.
              </p>

              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Program Focus
              </h2>
              <ul className="list-disc pl-5 text-base sm:text-lg">
                <li>Refining Proper Technique</li>
                <li>Improving Footwork and Agility</li>
                <li>Having solid game plans and match routines</li>
                <li>Learning to manage emotions and maintain composure</li>
                <li>Setting clear goals</li>
                <li>College recruitment counseling</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={academy4} // Replace with your image path
              alt="Tennis player"
              width={800}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <p className="text-center mb-5">
          <Link href="#" className="text-blue-500">
            Click here
          </Link>{" "}
          for more information on the Online Academy. Please{" "}
          <Link href="#" className="text-blue-500">
            click here
          </Link>{" "}
          for information on the Pre-Online Academy Program. For approval or
          questions about the Online Academy, please email
          <Link href="mailto:jonny@rrctennis.com" className="text-blue-500">
            Jonny Rigby
          </Link>{" "}
          at <span className="font-bold">jonny@rrctennis.com</span>.
        </p>
      </div>
    </div>
  );
}
