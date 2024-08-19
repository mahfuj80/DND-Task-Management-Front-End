// components/Sidebar.js
"use client";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        className={`fixed py-4 px-1  text-black font-bold text-2xl rounded-full -left-2 bg-white md:hidden ${
          isOpen ? "hidden" : "md:hidden"
        }`}
        onClick={toggleSidebar}
      >
        {isOpen ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
      </button>

      {/* Sidebar */}
      <aside
        className={`md:relative absolute md:top-0  top-16 left-0 z-30 h-screen bg-black text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-96"
        } md:translate-x-0 md:relative w-64`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-bold">Sidebar</h2>
            <button
              className="block px-1 py-4 -mr-4 text-2xl text-black bg-white rounded-full md:hidden"
              onClick={toggleSidebar}
            >
              {isOpen ? <MdArrowBackIosNew /> : "Menu"}
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <Link
                  href="/home"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  About
                </Link>
              </li>
              {/* Add more links here */}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
