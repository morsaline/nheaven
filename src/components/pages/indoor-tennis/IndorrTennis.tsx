import React from "react";
import Image from "next/image";

import indoor1 from "@/assets/indoor/indoor1.png";
import indoor2 from "@/assets/indoor/indoor2.png";
import indoor3 from "@/assets/indoor/indoor3.png";
import indoor4 from "@/assets/indoor/indoor4.png";
import ReusableBanner from "../tennis/ReusableBanner";
import PerfectSurfaceSection from "./PerfectSurfaceSection";
import ComfortInEveryMatch from "./ComfortInEveryMatch";
// Replace with actual image path

const IndoorTennis = () => {
  return (
    <div>
      <ReusableBanner
        title="Indoor tennis"
        img1={indoor1}
        img2={indoor2}
        img3={indoor3}
      />
      <div className="py-10 px-16 max-w-[90rem] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">
            No matter the weather...
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            When the weather outside won’t cooperate, bring your game inside to
            our indoor Tennis courts. Our indoor facilities have 10 permanent
            indoor courts, 8 hard and 2 clay courts so you can improve your game
            no matter the season. 6 of the courts are climate-controlled for an
            incredible playing experience on those hot summer days.
          </p>
        </div>

        <div className="relative w-full h-96 mt-8">
          <Image
            src={indoor4}
            alt="Indoor Tennis Court"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div>
        <PerfectSurfaceSection />
      </div>
      <div>
        <ComfortInEveryMatch />
      </div>
    </div>
  );
};

export default IndoorTennis;
