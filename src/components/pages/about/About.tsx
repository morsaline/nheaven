import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import contact1 from "@/assets/join/contact1.png";
import contact2 from "@/assets/join/contact2.png";
import contact3 from "@/assets/join/contact3.png";
import OurStory from "./our-story/OurStory";
import TeamSection from "./team-section/TeamSection";

function About() {
  return (
    <div>
      <ReusableBanner
        title="About"
        img1={contact1}
        img2={contact2}
        img3={contact3}
      ></ReusableBanner>
      <OurStory />
      <TeamSection />
    </div>
  );
}

export default About;
