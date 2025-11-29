import Image from "next/image";
import aboutImg from "@/assets/about/aboturrcimg.png";
import MyButton from "@/components/ui/MyButton/MyButton";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start py-12 px-4 sm:px-6 md:px-16 bg-white max-w-[90rem] mx-auto gap-8 md:gap-10">
      {/* Text Section */}
      <div className="w-full md:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">About RRC</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          At Raleigh Racquet Club, we’re more than just tennis. Founded to bring
          together players of every level, our club offers world-class
          facilities, expert coaching, and a welcoming community. Whether you’re
          here to hit a few sets, train seriously, or share a meal with friends
          — we’ve got you covered.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Key Highlights:
        </h3>
        <ul className="list-disc pl-5 text-base sm:text-lg text-gray-700 space-y-2 mb-6">
          <li>31 tennis courts (indoor and outdoor)</li>
          <li>Pro shop with the latest gear</li>
          <li>Fully equipped fitness center</li>
          <li>MatchPoint Grill Restaurant</li>
          <li>Social events & community gatherings</li>
        </ul>

        <MyButton text="Learn more" />
      </div>

      {/* Image Section — Responsive with Aspect Ratio */}
      <div className="hidden md:block w-full md:w-[45%] lg:w-1/2 flex-shrink-0">
        {/* Aspect ratio container: 3:2 (adjust as needed) */}
        <div className="aspect-[3/3] w-full relative rounded-lg overflow-hidden">
          <Image
            src={aboutImg}
            alt="Raleigh Racquet Club"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
