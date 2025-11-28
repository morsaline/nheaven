import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import junior1 from "@/assets/junior/junior1.png";
import junior2 from "@/assets/junior/junior2.png";
import junior3 from "@/assets/junior/junior3.png";
import InbeTweenClinic from "./inbeTweenClinic";

function BeginnerTennis() {
  return (
    <div>
      <ReusableBanner
        title="beginner tennis"
        img1={junior1}
        img2={junior2}
        img3={junior3}
      ></ReusableBanner>
      <InbeTweenClinic />
    </div>
  );
}

export default BeginnerTennis;
