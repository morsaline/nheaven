import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import resturant1 from "@/assets/resturant/resturant1.png";
import resturant2 from "@/assets/resturant/resturant2.png";
import resturant3 from "@/assets/resturant/resturant3.png";
import FeaturesSection from "./features-secttion/FeaturesSection";
import MenuSection from "./menu-section/MenuSection";
import ChefProfile from "./chef-profile/ChefProfile";

function Resturant() {
  return (
    <div>
      <ReusableBanner
        img1={resturant1}
        img2={resturant2}
        img3={resturant3}
        title="resturant"
      />
      <div className="max-w-[90rem] mx-auto px-16 ">
        {" "}
        <h2 className="text-3xl font-semibold mb-6">Restaurant at RRC</h2>
        <p className="text-lg text-gray-700 mb-6">
          Raleigh Racquet Club is a tennis-first club offering unmatched
          facilities and programs for players of every level — from recreational
          games to competitive training.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Lunch</h3>
            <p className="text-gray-600">Monday-Friday: 11am-2pm</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Breakfast/Lunch
            </h3>
            <p className="text-gray-600">Saturday: 9am-2pm</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Dinner</h3>
            <p className="text-gray-600">Monday/Thursday: 5:30pm-9:30pm</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Friday</h3>
            <p className="text-gray-600">
              Specialty Dinner, Reservation Typically Required
            </p>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <div>
        <MenuSection />
      </div>
      <ChefProfile />
    </div>
  );
}

export default Resturant;
