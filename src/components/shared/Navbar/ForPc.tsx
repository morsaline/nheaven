"use client";
import logo from "@/assets/logo/logo.png";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import NavMenu from "./NavMenu";

const ForPc = () => {
  return (
    <div className="bg-white">
      <div className="container hidden lg:flex  items-center justify-between py-5 ">
        <Link href={"/"}>
          <div className="flex items-center gap-2 h-full -ml-4 w-32">
            <Image
              src={logo}
              alt="Nheaven"
              width={200}
              height={200}
              className="rounded object-contain"
            />
          </div>
        </Link>
        <div className="flex  items-center gap-5 text-base text-[#808080]">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          <FaCalendarAlt className="mr-2" />
          {/* Member Login Button */}
          <button className="flex items-center bg-transparent text-black border-2 border-[#d6e242] py-2 px-4 rounded-md hover:bg-[#d6e242] hover:text-white transition duration-300">
            Member Login
          </button>

          {/* Give Us a Try Button */}
          <button className="bg-[#d6e242] text-black py-3 hover:text-white px-8 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
            Give us a try
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForPc;
