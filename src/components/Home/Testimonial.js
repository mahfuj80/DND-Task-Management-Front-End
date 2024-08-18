import Image from "next/image";
import React from "react";
import Description from "../Shared/Description";
import Title from "../Shared/Title";
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="bg-[#000000ee] pt-12 pb-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Title> What our happy client say</Title>
        <Description>
          Discover why our clients love working with us. Our dedication to
          excellence and commitment to delivering outstanding results have
          earned us glowing reviews. Here are some of the things our clients
          have to say about their experience.
        </Description>
      </div>

      <div className="grid gap-12 mx-auto mt-16 text-center md:grid-cols-3 max-md:gap-12 max-md:justify-center max-md:max-w-lg">
        {/* Person 1 */}
        <div className="rounded-md">
          <div className="flex flex-col items-center ">
            <Image
              width={400}
              alt="image"
              height={400}
              src="/home/testimonial/person1.png"
              className="w-24 h-24 border-2 border-white rounded-full shadow-xl"
            />
            <div className="mt-4">
              <h4 className="text-sm font-extrabold ">John Doe</h4>
              <p className="mt-1 text-xs font-bold text-blue-600">
                CEO, Company
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Description className={"md:px-8"}>
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </Description>
          </div>

          <div className="flex justify-center mt-4 space-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>

        {/* Person 2 */}
        <div className="rounded-md">
          <div className="flex flex-col items-center">
            <Image
              height={400}
              width={400}
              alt="image"
              src="/home/testimonial/person2.png"
              className="w-24 h-24 border-2 border-white rounded-full shadow-xl"
            />
            <div className="mt-4">
              <h4 className="text-sm font-extrabold ">Mark Adair</h4>
              <p className="mt-1 text-xs font-bold text-blue-600">
                CEO, Company
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Description className={"md:px-8"}>
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </Description>
          </div>

          <div className="flex justify-center mt-4 space-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        {/* Person 3 */}
        <div className="rounded-md">
          <div className="flex flex-col items-center">
            <Image
              width={400}
              height={400}
              alt="Image"
              src="/home/testimonial/person3.png"
              className="w-24 h-24 border-2 border-white rounded-full shadow-xl"
            />
            <div className="mt-4">
              <h4 className="text-sm font-extrabold ">Simon Konecki</h4>
              <p className="mt-1 text-xs font-bold text-blue-600">
                CEO, Company
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Description className={"md:px-8"}>
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </Description>
          </div>

          <div className="flex justify-center mt-4 space-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
