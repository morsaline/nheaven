// components/MyCalendar.tsx
import React from "react";

const MyCalendar = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mb-10">
      {/* Replace this iframe src with YOUR embed URL from Google */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=morsaline.coding%40group.calendar.google.com&ctz=Asia%2FDhaka"
        style={{ border: "1px solid #ccc" }}
        width="100%"
        height="600"
        frameBorder="0"
        // scrolling="no"
        title="Morsaline Coding Calendar"
      ></iframe>
    </div>
  );
};

export default MyCalendar;
