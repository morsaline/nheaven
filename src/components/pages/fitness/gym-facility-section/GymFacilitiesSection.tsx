import Image from "next/image";
import facilitiesImg from "@/assets/gym/facility1.png";
import trainingImg from "@/assets/gym/facility2.png";

const GymFacilitiesSection = () => {
  return (
    <section className="max-w-[90rem] mx-auto px-4 md:px-16  py-0">
      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-bold">Fitness Center</h3>
        <p>
          Enjoy 365/7 access at the Fitness Center with a full line of cardio,
          strength, and functional fitness equipment. We also have a group
          fitness studio for yoga, stretching, and group exercise programs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Our Facilities */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-[260px] md:h-[280px]">
            <Image
              src={facilitiesImg}
              alt="Our Facilities"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
              Our Facilities
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-[14px] leading-relaxed text-gray-700">
              <li>Strength training equipment</li>
              <li>Cardio machines</li>
              <li>Functional training space</li>
              <li>Stretching and recovery area</li>
            </ul>
          </div>
        </div>

        {/* Personal Training */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-[260px] md:h-[280px]">
            <Image
              src={trainingImg}
              alt="Personal Training"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
              Personal Training
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-[14px] leading-relaxed text-gray-700">
              <li>
                Work with certified trainers for personalized programs tailored
                to your goals — from athletic performance to overall fitness.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymFacilitiesSection;
