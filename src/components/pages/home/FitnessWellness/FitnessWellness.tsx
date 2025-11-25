import Image from "next/image";
import fitness1 from "@/assets/fitness/fitness1.png";
import fitness2 from "@/assets/fitness/fitness2.png";
import fitness3 from "@/assets/fitness/fitness3.png";
import fitness4 from "@/assets/fitness/fitness4.png";

const FitnessWellness = () => {
  return (
    <section className="flex flex-col md:flex-row gap-7 py-16 px-6 md:px-16 bg-white max-w-[90rem] mx-auto">
      {/* Left Column: Images */}
      <div className="flex flex-wrap gap-5 w-full md:w-1/2">
        <div className="flex gap-2">
          {" "}
          <div className="w-full md:w-1/2">
            <Image
              src={fitness1}
              alt="Fitness Image 1"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={fitness2}
              alt="Fitness Image 2"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-2">
          {" "}
          <div className="w-full md:w-1/2 mt-4">
            <Image
              src={fitness3}
              alt="Fitness Image 3"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4">
            <Image
              src={fitness4}
              alt="Fitness Image 4"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Text and Highlights */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-extrabold">Fitness & Wellness</h2>
        <p className="text-lg text-gray-700">
          Fit On and Off the Court
          <br />
          Tennis is only part of the story. Our fitness center is stocked with
          strength and cardio equipment, and our wellness programs help you
          build endurance, strength, and agility for both on-court performance
          and daily life.
        </p>
        <h3 className="text-xl font-semibold">Key Highlights:</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Strength training</li>
          <li>Cardio machines</li>
          <li>Personal training</li>
          <li>Stretching / recovery area</li>
        </ul>
        <button className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-400 transition">
          Explore it
        </button>
      </div>
    </section>
  );
};

export default FitnessWellness;
