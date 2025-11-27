"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({
  className,
}: {
  className?: string;
  isShowBorder?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className={cn("flex  gap-6  font-normal ps-3", className)}>
      <Link href={"/"}>
        <div
          className={cn(
            "cursor-pointer  hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/" && "text-tomato font-semibold"
          )}
        >
          Home
        </div>
      </Link>
      <Link href={"/tennis"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/tennis" && "text-tomato font-semibold"
          )}
        >
          Tennis
        </div>
      </Link>
      <Link href={"/resturant"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/resturant" && "text-tomato font-semibold"
          )}
        >
          Resturant
        </div>
      </Link>
      <Link href={"/fitness"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/fitness" && "text-tomato font-semibold"
          )}
        >
          Fitness
        </div>
      </Link>
      <Link href={"/proshop"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/proshop" && "text-tomato font-semibold"
          )}
        >
          Proshop
        </div>
      </Link>
      <Link href={"/calendar"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/calendar" && "text-tomato font-semibold"
          )}
        >
          Calendar
        </div>
      </Link>
      <Link href={"/joinus"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/joinus" && "text-tomato font-semibold"
          )}
        >
          Join Us
        </div>
      </Link>
      <Link href={"/ourstaff"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/ourstaff" && "text-tomato font-semibold"
          )}
        >
          Our Staff
        </div>
      </Link>
      <Link href={"/about"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/about" && "text-tomato font-semibold"
          )}
        >
          About
        </div>
      </Link>
      <Link href={"/contact"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/contact" && "text-tomato font-semibold"
          )}
        >
          Contact
        </div>
      </Link>
      <Link href={"/termsandcondition"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-white hover:text-tomato transition duration-200",
            pathname === "/termsandcondition" && "text-tomato font-semibold"
          )}
        >
          TermsandCondtion
        </div>
      </Link>
    </div>
  );
};

export default NavMenu;
