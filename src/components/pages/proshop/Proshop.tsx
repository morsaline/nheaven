import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";

import proshop1 from "@/assets/proshop/proshop1.png";
import proshop2 from "@/assets/proshop/proshop2.png";
import proshop3 from "@/assets/proshop/proshop3.png";
import StringingService from "./stringing-service/StringingService";

function Proshop() {
  return (
    <div>
      <ReusableBanner
        title="proshop"
        img1={proshop1}
        img2={proshop2}
        img3={proshop3}
      ></ReusableBanner>
      <div className="bg-white rounded-lg  px-16 max-w-[90rem]  mx-auto">
        <h3 className="text-[24px] font-semibold text-gray-900 mb-4">
          Proshop
        </h3>
        <p className="text-[16px] leading-relaxed text-gray-700">
          Our experienced staff is ready to outfit you for all your tennis
          needs. We have the best stringing staff in the Triangle and we
          guarantee 48-hour racquet turnaround. Members also enjoy our exclusive
          partnership with Bryan’s Tennis. Bryan’s Tennis is Raleigh’s best
          tennis retail store with a full line of racquets, shoes, clothing and
          accessories. Bryan’s Tennis keeps the RRC Proshop constantly changing
          with all the latest gear. If you can’t find it at RRC we’ll work with
          Bryan’s to get what you’re looking for.
        </p>
      </div>
      <StringingService />
    </div>
  );
}

export default Proshop;
