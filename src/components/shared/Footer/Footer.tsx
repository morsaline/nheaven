import Link from "next/link"; // Import Link from Next.js
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#d6e242] text-black p-8">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {/* Left Section: Logo, Address, Contact Information */}
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-4">RRC</h1>
          <p className="text-lg font-semibold mb-2">Raleigh Racquet Club</p>
          <p className="text-base mb-2">
            5516 Falls of Neuse Rd. Raleigh, NC 27609
          </p>
          <p className="text-base mb-2">
            Phone: Main: (919) 876-0565 | Pool: (919) 871-9997
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" passHref>
              <p className="text-xl cursor-pointer">
                <FaFacebook />
              </p>
            </Link>
            <Link href="https://instagram.com" passHref>
              <p className="text-xl cursor-pointer">
                <FaInstagram />
              </p>
            </Link>
            <Link href="https://twitter.com" passHref>
              <p className="text-xl cursor-pointer">
                <FaTwitter />
              </p>
            </Link>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="w-full">
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/junior-tennis" passHref>
                <p className="hover:underline cursor-pointer">Junior Tennis</p>
              </Link>
            </li>
            <li>
              <Link href="/adult-tennis" passHref>
                <p className="hover:underline cursor-pointer">Adult Tennis</p>
              </Link>
            </li>
            <li>
              <Link href="/indoor-tennis" passHref>
                <p className="hover:underline cursor-pointer">Indoor Tennis</p>
              </Link>
            </li>
            <li>
              <Link href="/pro-stuff" passHref>
                <p className="hover:underline cursor-pointer">Pro Stuff</p>
              </Link>
            </li>
            <li>
              <Link href="/restaurant" passHref>
                <p className="hover:underline cursor-pointer">Restaurant</p>
              </Link>
            </li>
            <li>
              <Link href="/proshop" passHref>
                <p className="hover:underline cursor-pointer">Proshop</p>
              </Link>
            </li>
            <li>
              <Link href="/fitness" passHref>
                <p className="hover:underline cursor-pointer">Fitness</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* New Section: About */}
        <div className="w-full">
          <h2 className="font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/staff" passHref>
                <p className="hover:underline cursor-pointer">Our Staff</p>
              </Link>
            </li>
            <li>
              <Link href="/calendar" passHref>
                <p className="hover:underline cursor-pointer">Calendar</p>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" passHref>
                <p className="hover:underline cursor-pointer">Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" passHref>
                <p className="hover:underline cursor-pointer">
                  Terms & Conditions
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Membership CTA */}
        <div className="w-full text-center mt-8 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">Be a member today!</h2>
          <button className="bg-white text-yellow-500 py-2 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Join Us
          </button>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center mt-8 text-sm">
        <p>© 2025 Raleigh Racquet Club | All rights reserved</p>
      </div>
    </div>
  );
}
