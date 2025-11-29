import React from "react";
import Image from "next/image";

import clinicImage from "@/assets/junior/BeginerTennis.png"; // Replace with actual image path
import Link from "next/link";

const InbeTweenClinic = () => {
  return (
    <div className="py-10 px-16 max-w-[90rem] mx-auto">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          InbeTween Clinic
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The InbeTween group is made up of similar-aged and similar skilled
          beginner/emerging tennis players (ages 11+) who are looking to learn
          proper technique and competitive footwork to help get their tennis
          game up and running!
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-96 mt-8">
        <Image
          src={clinicImage}
          alt="InbeTween Clinic"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Link and Contact Info */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-600 mb-4">Begin your tennis journey</p>
        <Link
          href="https://example.com" // Replace with actual link
          className="text-blue-500 hover:underline"
        >
          Click here to register for the InbeTween clinic.
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          Members may register for clinics through their member portal.
          Non-members can mail or drop off a completed form to 5516 Falls of
          Neuse Road, Raleigh, NC 27609, email to Jack Erdman at{" "}
          <a
            href="mailto:jack@rrctennis.com"
            className="text-blue-500 hover:underline"
          >
            jack@rrctennis.com
          </a>
          , or dropped off at the RRC Pro Shop with payment.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Please email any questions about this program to Andrea Terrill at{" "}
          <Link
            href="mailto:andrea@rrctennis.com"
            className="text-blue-500 hover:underline"
          >
            andrea@rrctennis.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InbeTweenClinic;
