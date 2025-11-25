import Image from "next/image";
import dining1 from "@/assets/dining/dining1.png";
import dining2 from "@/assets/dining/dining2.png";
import dining3 from "@/assets/dining/dining3.png";
import dining4 from "@/assets/dining/dining4.png";

const Dining = () => {
  return (
    <section className="flex flex-col md:flex-row gap-7 py-16 px-6 md:px-16 bg-white max-w-[90rem] mx-auto">
      {/* Left Column: Text and Highlights */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-extrabold">Dining</h2>
        <p className="text-lg text-gray-700">
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
          Explore all ➔
        </button>
      </div>

      {/* Right Column: Images */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        <div className="w-full">
          <Image
            src={dining1}
            alt="Dining Image 1"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <Image
            src={dining2}
            alt="Dining Image 2"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <Image
            src={dining3}
            alt="Dining Image 3"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <Image
            src={dining4}
            alt="Dining Image 4"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Dining;
