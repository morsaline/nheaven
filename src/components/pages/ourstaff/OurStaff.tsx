import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import contact1 from "@/assets/join/contact1.png";
import contact2 from "@/assets/join/contact2.png";
import contact3 from "@/assets/join/contact3.png";
import TeamMembers from "./team-members/TeamMembers";

function OurStaff() {
  return (
    <div>
      <ReusableBanner
        title="Our Staff"
        img1={contact1}
        img2={contact2}
        img3={contact3}
      ></ReusableBanner>
      <TeamMembers />
    </div>
  );
}

export default OurStaff;
