"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");
  const path = useParams();

  const navLinks = (
    <>
      <li>
        <Link
          href={"/"}
          className="relative inline-block px-2 py-1 text-gray-300 transition-all duration-300 group"
        >
          Home
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
              currentPath === "/" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </li>

      <li>
        <Link
          href={"/dashboard"}
          className="relative inline-block px-2 py-1 text-gray-300 transition-all duration-300 group"
        >
          Dashboard
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
              currentPath === "/dashboard" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </li>

      <li>
        <Link
          href={"/sign-up"}
          className="relative inline-block px-2 py-1 text-gray-300 transition-all duration-300 group"
        >
          Sign Up
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
              currentPath === "/sign-up" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </li>

      <li>
        <Link
          href={"/sign-in"}
          className="relative inline-block px-2 py-1 text-gray-300 transition-all duration-300 group"
        >
          Sign In
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
              currentPath === "/sign-in" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </li>
    </>
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    }
  }, [path]);

  return (
    <header className=" min-h-[60px] bg-black">
      <div className="container flex flex-wrap items-center justify-between px-4 py-3 mx-auto sm:px-10">
        <Link href={"/"}>
          <Image
            className="w-auto h-auto md:hidden"
            width={100}
            height={100}
            src="/logo.png"
            alt="logo"
          />
          <Image
            className="hidden w-auto h-auto md:block"
            width={200}
            height={200}
            src="/logo.png"
            alt="logo"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden gap-8 md:flex">{navLinks}</ul>

        {/* Mobile Nav Links */}
        <ul
          className={`absolute right-0  flex-col items-center justify-start w-10/12 h-full gap-8 md:hidden bg-black/90 top-16 ${
            collapse ? "hidden" : "flex"
          }`}
        >
          {navLinks}
        </ul>

        {/* Menu Button */}
        <button
          onClick={() => setCollapse(!collapse)}
          className="relative flex flex-col items-center justify-between w-10 h-6"
        >
          <span
            className={`block w-10 h-[2px] bg-white transition-transform duration-300 ease-in-out ${
              !collapse
                ? "transform rotate-45 translate-y-[13px] translate-x-2"
                : ""
            }`}
          ></span>
          <span
            className={`block w-10 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              !collapse ? "translate-x-6 opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-10 h-[2px] bg-white transition-transform duration-300 ease-in-out ${
              !collapse
                ? "transform -rotate-45 -translate-y-2 translate-x-2"
                : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
