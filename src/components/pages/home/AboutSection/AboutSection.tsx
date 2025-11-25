import Image from "next/image";
import aboutImg from "@/assets/about/aboturrcimg.png";

import MyButton from "@/components/ui/MyButton/MyButton";

const AboutSection = () => {
  return (
    <section className="flex  justify-between  py-16 px-6 md:px-16 bg-white max-w-[90rem] mx-auto">
      {/* Text Section */}
      <div className="max-w-lg ">
        <h2 className="text-3xl font-extrabold">About RRC</h2>
        <p className="text-lg text-gray-700">
          At Raleigh Racquet Club, we’re more than just tennis. Founded to bring
          together players of every level, our club offers world-class
          facilities, expert coaching, and a welcoming community. Whether you’re
          here to hit a few sets, train seriously, or share a meal with friends
          — we’ve got you covered.
        </p>
        <h3 className="text-xl font-semibold">Key Highlights:</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>31 tennis courts (indoor and outdoor)</li>
          <li>Pro shop with the latest gear</li>
          <li>Fully equipped fitness center</li>
          <li>MatchPoint Grill Restaurant</li>
          <li>Social events & community gatherings</li>
        </ul>

        <MyButton text=" Learn more"></MyButton>

        {/* <button className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-400 transition">
          Learn more ➔
        </button> */}
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <Image
          src={aboutImg} // Path to your image inside the public folder
          alt="Tennis action"
          width={500} // Adjust width according to your needs
          height={300} // Adjust height according to your needs
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
