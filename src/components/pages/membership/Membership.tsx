import React from "react";
import MembershipBanner from "./MembershipBanner";
import TennisProgrammingBanner from "./TennisProgrammingBanner";
import TennisFeatures from "./TennisFeatures";
import WorldClassAmenities from "./WorldClassAmenities";
import SocialActivities from "./SocialActivities";
import JoinMemberBanner from "./JoinMemberBanner";

function Membership() {
  return (
    <div>
      <div className="mt-20">
        <MembershipBanner />
        <TennisProgrammingBanner />
        <TennisFeatures />
        <WorldClassAmenities />
        <SocialActivities />
        <JoinMemberBanner />
      </div>
    </div>
  );
}

export default Membership;
