import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-6 py-12 overflow-hidden font-sans bg-gray-800">
      <div className="mx-auto max-w-7xl max-md:max-w-md">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">
              All your business finances in one app.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white">
              Explore a curated collection of ready-to-use components and design
              blocks, empowering you to create stunning, responsive interfaces
              with ease. Streamline your workflow, amplify your creativity, and
              discover the future of web development, all at your fingertips.
            </p>
            <div className="mt-12">
              <button
                type="button"
                className="px-5 py-3 text-sm font-bold text-gray-800 transition-all bg-white rounded hover:bg-gray-100"
              >
                Getting Started
              </button>
              <a
                href="javascript:void(0)"
                className="text-sm font-bold text-white underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap"
              >
                API Documentation
              </a>
            </div>
          </div>

          <div>
            <Image
              width={400}
              height={400}
              src="/home/hero/hero.png"
              className="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-md object-contain"
              alt="Image-Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
