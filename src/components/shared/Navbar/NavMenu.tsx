"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const NavMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const [showTennisDropdown, setShowTennisDropdown] = useState(false);
  const [showJuniorTennisDropdown, setShowJuniorTennisDropdown] =
    useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false); // ✅ new state

  return (
    <div className={cn("flex gap-6 font-normal ps-3", className)}>
      {/* Home */}
      <Link href="/">
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:!text-tomato transition duration-200",
            pathname === "/" && "text-tomato font-semibold"
          )}
        >
          Home
        </div>
      </Link>

      {/* Tennis Menu with Nested Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setShowTennisDropdown(true)}
        onMouseLeave={() => {
          setShowTennisDropdown(false);
          setShowJuniorTennisDropdown(false); // ✅ hide junior when leaving tennis
        }}
      >
        <Link href="/tennis" passHref>
          <div
            className={cn(
              "cursor-pointer hover:underline flex gap-1 items-center text-md text-black hover:text-tomato transition duration-200",
              pathname === "/tennis" && "text-tomato font-semibold"
            )}
          >
            Tennis <ChevronDown />
          </div>
        </Link>

        {showTennisDropdown && (
          <div className="absolute left-0 mt-0 bg-white shadow-lg rounded-md p-2 space-y-2 w-48 z-10">
            {/* Junior Tennis with nested dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowJuniorTennisDropdown(true)}
              onMouseLeave={() => setShowJuniorTennisDropdown(false)}
            >
              <Link href="/junior-tennis" passHref>
                <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                  Junior Tennis
                </p>
              </Link>

              {showJuniorTennisDropdown && (
                <div className="absolute left-full top-0 mt-0 ml-0 bg-white shadow-lg rounded-md p-2 space-y-2 w-48 z-20">
                  <Link href="/red-orange-green-ball" passHref>
                    <p className="cursor-pointer hover:bg-gray-100  hover:text-tomato px-2 py-1">
                      Red, Orange & Green Ball
                    </p>
                  </Link>
                  <Link href="/beginner-teens" passHref>
                    <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                      Beginner Teens
                    </p>
                  </Link>
                  <Link href="/tournament-group" passHref>
                    <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                      Tournament Group
                    </p>
                  </Link>
                  <Link href="/academy-programs" passHref>
                    <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                      Academy Programs
                    </p>
                  </Link>
                  <Link href="/online-academy" passHref>
                    <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                      Online Academy
                    </p>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/adult-tennis" passHref>
              <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                Adult Tennis
              </p>
            </Link>
            <Link href="/indoor-tennis" passHref>
              <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                Indoor Tennis
              </p>
            </Link>
          </div>
        )}
      </div>

      {/* Other Menu Items */}
      <Link href="/restaurant" passHref>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/restaurant" && "text-tomato font-semibold"
          )}
        >
          Restaurant
        </div>
      </Link>
      <Link href="/fitness" passHref>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/fitness" && "text-tomato font-semibold"
          )}
        >
          Fitness
        </div>
      </Link>
      <Link href="/proshop" passHref>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/proshop" && "text-tomato font-semibold"
          )}
        >
          Proshop
        </div>
      </Link>
      <Link href="/joinus" passHref>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/joinus" && "text-tomato font-semibold"
          )}
        >
          Join Us
        </div>
      </Link>
      <Link href="/contact" passHref>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/contact" && "text-tomato font-semibold"
          )}
        >
          Contact
        </div>
      </Link>

      {/* About Menu with Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setShowAboutDropdown(true)} // ✅ correct state
        onMouseLeave={() => setShowAboutDropdown(false)}
      >
        <Link href="/about" passHref>
          <div
            className={cn(
              "cursor-pointer hover:underline flex gap-1 items-center text-md text-black hover:text-tomato transition duration-200",
              pathname === "/about" && "text-tomato font-semibold"
            )}
          >
            About <ChevronDown />
          </div>
        </Link>

        {showAboutDropdown && ( // ❌ Typo — should be showAboutDropdown
          <div className="absolute left-0 mt-0 bg-white shadow-lg rounded-md p-2 space-y-2 w-48 z-10">
            <Link href="/ourstaff" passHref>
              <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                Our Staff
              </p>
            </Link>
            <Link href="/calendar" passHref>
              <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                Calendar
              </p>
            </Link>
            <Link href="/privacy-policy" passHref>
              <p className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                Privacy Policy
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
