import Image from "next/image";
import coaching1 from "@/assets/coaching/coaching1.png";
import coaching2 from "@/assets/coaching/coaching2.png";
import coaching3 from "@/assets/coaching/coaching3.png";

const CoachingTraining = () => {
  return (
    <section className="flex flex-col md:flex-row gap-7 py-16 px-6 md:px-16 bg-white max-w-[90rem] mx-auto">
      {/* Left Column: Text (mirrors TennisFacilities' right column) */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-extrabold">Coaching & Training</h2>
        <p className="text-lg text-gray-700">
          Learn, Train & Grow
          <br />
          Our certified pros provide personalized coaching and structured
          programs for all ages. Whether you’re a beginner looking to learn the
          basics or an advanced player sharpening your skills, we have a plan
          for you.
        </p>
        <h3 className="text-xl font-semibold">Key Highlights:</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Private lessons</li>
          <li>Group clinics</li>
          <li>Custom fitness routines</li>
          <li>Junior development (camps & year-round training)</li>
        </ul>
        <button className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-400 transition">
          Explore it
        </button>
      </div>

      {/* Right Column: Images — EXACT same structure as TennisFacilities' left column */}
      <div className="flex space-x-4 w-full md:w-1/2">
        {/* First column: two stacked small images (like tennis2 + tennis3) */}
        <div className="w-full flex flex-col gap-4">
          <div className="h-[240px] md:h-[240px]">
            <Image
              src={coaching1}
              alt="Coaching 1"
              width={400}
              height={240}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[240px] md:h-[240px]">
            <Image
              src={coaching2}
              alt="Coaching 2"
              width={400}
              height={240}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second column: one large image (like tennis1) */}
        <div className="w-full h-[500px]">
          <Image
            src={coaching3}
            alt="Coaching 3"
            width={400}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CoachingTraining;
