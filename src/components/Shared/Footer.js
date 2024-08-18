import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-8 py-12 font-sans tracking-wide bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          <div>
            <Link href={"/"}>
              <Image
                className="w-auto h-auto"
                width={200}
                height={300}
                src="/logo.png"
                alt="logo"
              />
            </Link>

            <ul className="flex mt-10 space-x-5 text-3xl text-white">
              <Link href={"#"}>
                <FaFacebook />
              </Link>

              <Link href={"#"}>
                <FaLinkedin />
              </Link>

              <Link href={"#"}>
                <FaInstagram />
              </Link>
              <li>
                <Link href={"#"}>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="relative text-lg font-semibold text-white max-sm:cursor-pointer">
              Services
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="relative text-lg font-semibold text-white max-sm:cursor-pointer">
              Platforms
            </h4>
            <ul className="mt-6 space-y-5 ">
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Hubspot
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Integration Services
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Marketing Glossar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="relative text-lg font-semibold text-white max-sm:cursor-pointer">
              Company
            </h4>

            <ul className="mt-6 space-y-5 ">
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-400" />

        <div className="flex flex-wrap gap-4 max-md:flex-col">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <Link
                href={"#"}
                className="text-sm text-gray-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-sm text-gray-300 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-sm text-gray-300 hover:text-white"
              >
                Security
              </Link>
            </li>
          </ul>

          <p className="text-sm text-gray-300 md:ml-auto">
            © Task Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
