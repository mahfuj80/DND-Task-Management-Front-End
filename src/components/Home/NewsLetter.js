import Image from "next/image";
import React from "react";
import Description from "../Shared/Description";
import Button from "../Shared/Button";
import Title from "../Shared/Title";

const NewsLetter = () => {
  return (
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 ">
      <Image
        width={100}
        height={100}
        src="/home/news-letter/background.png"
        alt="Banner Image"
        className="absolute inset-0 object-cover object-bottom w-full h-full"
      />
      <div className="min-h-[400px] relative  h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <Title>Subscribe To Our NewsLetter</Title>
          <Description>
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </Description>

          <div className="flex max-w-lg p-1 mx-auto mt-12 text-left bg-gray-100 border rounded-full focus-within:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm text-gray-800 bg-transparent outline-none"
            />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
