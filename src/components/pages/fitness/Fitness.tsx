import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import gym1 from "@/assets/gym/gym1.png";
import gym2 from "@/assets/gym/gym2.png";
import gym3 from "@/assets/gym/gym3.png";
import GymFacilitiesSection from "./gym-facility-section/GymFacilitiesSection";
import WhyMembersLove from "./why-members-love/WhyMembersLove";

function Fitness() {
  return (
    <div>
      <ReusableBanner
        title="fitness"
        img1={gym1}
        img2={gym2}
        img3={gym3}
      ></ReusableBanner>
      <GymFacilitiesSection />
      <WhyMembersLove/>
    </div>
  );
}

export default Fitness;
