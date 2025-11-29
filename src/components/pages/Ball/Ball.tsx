import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import junior1 from "@/assets/junior/junior1.png";
import junior2 from "@/assets/junior/junior2.png";
import junior3 from "@/assets/junior/junior3.png";
import RedAndOrangeBall from "./RedAndOrangeBall";
import GreenBall from "./GreenBall";
function Ball() {
  return (
    <div>
      <ReusableBanner
        title="RedAndOrangeBall"
        img1={junior1}
        img2={junior2}
        img3={junior3}
      />
      <RedAndOrangeBall />
      <GreenBall />
    </div>
  );
}

export default Ball;
