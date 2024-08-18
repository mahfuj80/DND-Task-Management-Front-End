import Image from "next/image";
import React from "react";
import Description from "../Shared/Description";
import Title from "../Shared/Title";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <div className="bg-gray-800 font-sans min-h-[350px] relative  rounded overflow-hidden">
      <div className="absolute inset-0 grid w-full h-full lg:grid-cols-2">
        <div className="p-4 max-lg:hidden">
          <Image
            width={700}
            height={400}
            src="/home/banner/banner.png"
            className="object-cover w-full h-full"
            alt="img"
          />
        </div>

        <div className="flex flex-col items-end justify-center text-right px-8 relative bg-[#0b0a20] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:bg-[#14172b] before:w-2/3 before:rounded-bl-[206px] before:-z-10">
          <Title>Unlock Your Potential</Title>

          <Description>
            Unlock your potential with our innovative solutions. We are
            committed to delivering exceptional design, development, and
            marketing services that drive success and growth.
          </Description>

          <Button className={"mt-4"}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
