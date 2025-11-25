import Image from "next/image";
import stringingImg from "@/assets/proshop/Rectangle 18.png"; // Replace with your actual image path

const StringingService: React.FC = () => {
  return (
    <section className="max-w-[90rem] mx-auto px-4 md:px-0 py-12">
        
      <div className="bg-[#F3F89E] rounded-[24px] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
        {/* Image Section */}
        <div className="w-full md:w-[50%]">
          <div className="relative w-full h-[220px] md:h-[400px] rounded-[18px] overflow-hidden">
            <Image
              src={stringingImg}
              alt="Stringing service"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text + Button Section */}
        <div className="flex-1 flex flex-col justify-between w-full h-full">
          <div>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111827] mb-3">
              Stringing
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
        </div>
      </div>
    </section>
  );
};

export default StringingService;
