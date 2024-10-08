"use client";
import useAuth from "@/Hooks/Auth/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");
  const path = useParams();
  const { user, logOut } = useAuth();

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
      {user?.email ? (
        <li>
          <Link
            href="/dashboard"
            className="relative inline-block px-2 py-1 text-gray-300 transition-all duration-300 group"
          >
            Dashboard
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                currentPath === "/dashboard"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </li>
      ) : (
        ""
      )}

      {user?.email ? (
        ""
      ) : (
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
      )}

      {user?.email ? (
        ""
      ) : (
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
      )}

      {user?.email ? (
        <li>
          <button
            onClick={logOut}
            className="relative inline-block px-2 py-1 text-gray-300 transition-all duration-300 group"
          >
            Log Out{" "}
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                currentPath === "/sign-in" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        </li>
      ) : (
        ""
      )}
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
            width={200}
            height={200}
            priority
            src="/logo.png"
            alt="logo"
          />
          <Image
            className="hidden w-auto h-auto md:block"
            width={200}
            height={200}
            priority
            src="/logo.png"
            alt="logo"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden gap-8 md:flex md:items-center">
          {navLinks}
          {user?.email && (
            <Image
              className="hidden rounded-full md:block size-12"
              width={100}
              height={100}
              priority
              src={user?.photoURL}
              alt="logo"
            />
          )}
        </ul>

        {/* Mobile Nav Links */}

        <ul
          className={`absolute right-0  flex-col items-center justify-start w-10/12 h-full gap-8 md:hidden bg-black/90 top-16 z-50 ${
            collapse ? "hidden" : "flex"
          }`}
        >
          {navLinks}
          {user?.email && (
            <Image
              className="rounded-full md:block size-12"
              width={100}
              height={100}
              priority
              src={user?.photoURL}
              alt="logo"
            />
          )}
        </ul>

        {/* Menu Button */}
        <button
          onClick={() => setCollapse(!collapse)}
          className="relative flex flex-col items-center justify-between w-10 h-6 md:hidden"
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
