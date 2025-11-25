import React from "react";
import ReusableBanner from "./ReusableBanner";
import about1 from "@/assets/Tennis/tennisAbout1.png";
import about2 from "@/assets/Tennis/tennisAbout2.png";
import about3 from "@/assets/Tennis/tennisAbout3.png";
import TennisAboutRRC from "./tennis-about-rrc/TennisAboutRRC";
import TennisSection from "./tennis-section/TennisSection";
import TrainersSection from "./trainer-section/TrainerSection";

function Tennis() {
  return (
    <div>
      <ReusableBanner
        title="Tennis"
        img1={about1}
        img2={about2}
        img3={about3}
      />
      <TennisAboutRRC />
      <TennisSection />
      <TrainersSection />
    </div>
  );
}

export default Tennis;
