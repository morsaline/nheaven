import React from "react";
import Image from "next/image";
import Link from "next/link"; // To create navigational links
import MenuImg from "@/assets/resturant/Menu.png";

const menuData = [
  {
    name: "Chicken bowl",
    image: MenuImg, // Replace with actual image paths
  },
  {
    name: "Chicken bowl",
    image: MenuImg, // Replace with actual image paths
  },
  {
    name: "Chicken bowl",
    image: MenuImg, // Replace with actual image paths
  },
  {
    name: "Chicken bowl",
    image: MenuImg, // Replace with actual image paths
  },
  {
    name: "Chicken bowl",
    image: MenuImg, // Replace with actual image paths
  },
];

const MenuSection: React.FC = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-8">Menu</h2>
      <div className="flex flex-wrap gap-6 justify-between">
        {menuData.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[18%] p-4 bg-white rounded-lg "
          >
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Text Section */}
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/menu">
          <p className="text-green-500 font-semibold hover:underline">
            See all menu
          </p>
        </Link>
      </div>
    </section>
  );
};

export default MenuSection;
