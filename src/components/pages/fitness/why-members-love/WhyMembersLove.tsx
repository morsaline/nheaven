import Image from "next/image";
// replace with your real asset
import fitnessImg from "@/assets/gym/facility3.png";

const WhyMembersLove: React.FC = () => {
  return (
    <section className="max-w-[90rem] mx-auto px-4 md:px-0 py-12">
      <div className="bg-[#F3F89E] rounded-[24px]  px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
        {/* Image */}
        <div className="w-1/2">
          {" "}
          <div className="relative  h-[220px] md:h-[400px] rounded-[18px] overflow-hidden">
            <Image
              src={fitnessImg}
              alt="Man lifting weights in gym"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text + button */}
        <div className="flex-1 flex flex-col justify-between w-full h-full">
          <div>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111827] mb-3">
              Why Members Love Our Fitness Center
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[14px] leading-relaxed text-[#111827]">
              <li>Professional guidance available</li>
              <li>Easy access before or after your match</li>
              <li>Modern, well-maintained equipment</li>
              <li>Great for warm-ups and cooldowns</li>
              <li>Helps improve strength, agility, and endurance</li>
              <li>Open to both casual and dedicated athletes</li>
              <li>Safe, welcoming atmosphere</li>
              <li>Convenient location inside the club</li>
              <li>Perfect for individual or partner workouts</li>
            </ul>
          </div>

          <button
            type="button"
            className="mt-5 max-w-40 inline-flex items-center justify-center rounded-md bg-[#7A8F24] px-8 py-2.5 text-[14px] font-medium text-white"
          >
            Join the club
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyMembersLove;
