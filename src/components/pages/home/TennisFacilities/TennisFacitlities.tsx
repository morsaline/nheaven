import Image from "next/image";
import tennis1 from "@/assets/Tennis/tennis1.png";
import tennis2 from "@/assets/Tennis/tennis2.png";
import tennis3 from "@/assets/Tennis/tennis3.png";

const TennisFacilities = () => {
  return (
    <section className="flex flex-col md:flex-row gap-7 py-16 px-6 md:px-16 bg-white max-w-[90rem] mx-auto">
      {/* Left Column: Images */}
      <div className="flex space-x-4 mb-6 md:mb-0 w-full">
        {/* First, larger image */}
        <div className="w-full  h-[500px]">
          <Image
            src={tennis1} // Replace with actual image path
            alt="Tennis Court 1"
            width={600}
            height={520}
            className="object-cover rounded-lg h-full"
          />
        </div>

        {/* Second and third, smaller images */}
        <div className="w-full  flex flex-col gap-4">
          <div className="h-[240px]">
            <Image
              src={tennis2} // Replace with actual image path
              alt="Tennis Court 2"
              width={400}
              height={200}
              className="object-cover rounded-lg h-full"
            />
          </div>
          <div className="h-[240px]">
            <Image
              src={tennis3} // Replace with actual image path
              alt="Tennis Court 3"
              width={400}
              height={200}
              className="object-cover rounded-lg h-full"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Text and Highlights */}
      <div className="w-full space-y-6">
        <h2 className="text-3xl font-extrabold">Tennis Facilities</h2>
        <p className="text-lg text-gray-700">
          Play Your Best Game
          <br />
          Our tennis facilities are second to none – 31 courts across clay and
          hard surfaces, both indoor and outdoor. From casual matches to
          advanced training, RRC supports every type of player.
        </p>
        <h3 className="text-xl font-semibold">Key Highlights:</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Indoor Courts: Year-round play</li>
          <li>Outdoor Courts: Upgraded for evening matches</li>
          <li>Leagues & Tournaments: Competitive and social play</li>
          <li>Junior Programs: Clinics, camps, and development</li>
        </ul>
        <button className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-400 transition">
          Explore it
        </button>
      </div>
    </section>
  );
};

export default TennisFacilities;
