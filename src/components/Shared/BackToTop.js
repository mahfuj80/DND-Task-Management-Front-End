"use client";
import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  useEffect(() => {
    const myButton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="hidden fixed bottom-5 right-7 z-50 text-lg border-none outline-none bg-gradient-to-b from-[#747272] to-[#5b665d] text-white cursor-pointer p-4 rounded-full hover:bg-gray-700 animate-bounce"
      onClick={topFunction}
      id="myBtn"
      title="Go to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
