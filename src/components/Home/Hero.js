import Image from "next/image";
import React from "react";
import Description from "../Shared/Description";
import Title from "../Shared/Title";
import Link from "next/link";
import Button from "../Shared/Button";

const Hero = () => {
  return (
    <div className="px-6 py-12 overflow-hidden  bg-[#161616c7]">
      <div className="mx-auto max-w-7xl max-md:max-w-md">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Title>All your business finances in one app.</Title>
            <Description>
              Explore a curated collection of ready-to-use components and design
              blocks, empowering you to create stunning, responsive interfaces
              with ease. Streamline your workflow, amplify your creativity, and
              discover the future of web development, all at your fingertips.
            </Description>
            <div className="mt-12">
              <Button className={"bg-white text-black hover:text-white"}>
                Getting Started
              </Button>
              <Link
                href="#"
                className="text-sm font-bold text-white underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap"
              >
                API Documentation
              </Link>
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
