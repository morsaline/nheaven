import React from "react";
import ReusableBanner from "../tennis/ReusableBanner";
import calender1 from "@/assets/calendar/calendar1.png";
import calender2 from "@/assets/calendar/calendar2.png";
import calender3 from "@/assets/calendar/calendar3.png";
import MyCalendar from "./MyCalendar/MyCalendar";

function CalendarPage() {
  return (
    <div>
      <ReusableBanner
        title="calender"
        img1={calender1}
        img2={calender2}
        img3={calender3}
      ></ReusableBanner>
      <MyCalendar></MyCalendar>
    </div>
  );
}

export default CalendarPage;
