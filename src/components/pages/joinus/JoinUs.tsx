import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import contact1 from "@/assets/join/contact1.png";
import contact2 from "@/assets/join/contact2.png";
import contact3 from "@/assets/join/contact3.png";

import FormPage from "./Form/Form";

function JoinUs() {
  return (
    <div>
      <ReusableBanner
        title="Join us"
        img1={contact1}
        img2={contact2}
        img3={contact3}
      ></ReusableBanner>
      <FormPage />
    </div>
  );
}

export default JoinUs;
