import React from "react";
import Image from "next/image";

import tournamentImage from "@/assets/junior/tournamentimg.png"; // Replace with actual image path
import ReusableBanner from "../tennis/ReusableBanner";
import junior1 from "@/assets/junior/junior1.png";
import junior2 from "@/assets/junior/junior2.png";
import junior3 from "@/assets/junior/junior3.png";

const TournamentGroup = () => {
  return (
    <div>
      <ReusableBanner
        title="tournament group"
        img1={junior1}
        img2={junior2}
        img3={junior3}
      />
      <div className="py-10 px-16 max-w-[90rem] mx-auto">
        {/* Tournament Group Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Tournament Group
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Players will develop and build on technical, tactical, physical, and
            mental skills to adequately prepare and play in tournaments and
            matches. Your child will receive attention from multiple of our
            Tennis Professionals to better improve and further prepare for
            tournaments. Raleigh Racquet Club offers several options for
            children to learn this training. Our traditional options are weekly
            and weekend offerings.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-96 mt-8">
          <Image
            src={tournamentImage}
            alt="Tournament Training"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Tournament Training Information Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Tournament Training Information
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Members may register online through their member portal. Non-members
            can mail or drop off a completed form to 5516 Falls of Neuse Road,
            Raleigh, NC 27609, email to Kaushal Maljan at{" "}
            <a
              href="mailto:kaushal@rrctennis.com"
              className="text-blue-500 hover:underline"
            >
              kaushal@rrctennis.com
            </a>
            , or dropped off at the RRC Pro Shop with payment.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            For help choosing a class or questions about clinics, please email
            Kaushal Maljan at{" "}
            <a
              href="mailto:kaushal@rrctennis.com"
              className="text-blue-500 hover:underline"
            >
              kaushal@rrctennis.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TournamentGroup;
