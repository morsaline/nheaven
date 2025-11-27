import React from "react";
import Link from "next/link";

const MapSection = () => {
  return (
    <section className="max-w-[90rem] mx-auto px-16 py-8 bg-yellow-100 rounded-lg my-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        See it for yourself
      </h2>
      <p className="text-center text-lg text-gray-600 mb-6">
        Whether you need a court, have membership questions, looking for a
        lesson, or just want to chat, our staff is ready and waiting to assist
        you!
      </p>

      <div className="relative mb-8">
        {/* Google Maps iframe without API key */}
        <iframe
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps?q=35.8689,-78.5891&z=14&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          Address: 5516 Falls of Neuse Rd. Raleigh, NC 27609
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Call: Main: (919) 876-0565 | Pool: (919) 522-5914
        </p>

        {/* Using next/link for client-side navigation */}
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=35.8689,-78.5891"
          passHref
        >
          <p className="inline-block bg-green-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-green-600">
            Get Directions
          </p>
        </Link>
      </div>
    </section>
  );
};

export default MapSection;
