import React from "react";
import Title from "../Shared/Title";
import Description from "../Shared/Description";
import Button from "../Shared/Button";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="font-[sans-serif]">
      <div className="max-w-5xl mx-auto max-lg:max-w-3xl">
        <div className="mb-8 text-center md:mb-12">
          <Title>Choose a Subscription</Title>

          <Description>Change your plant according your needs</Description>
        </div>

        <div className="grid gap-6 mt-6 lg:grid-cols-3 sm:grid-cols-2 max-sm:max-w-sm max-sm:mx-auto">
          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="h-32 p-4 text-center bg-gray-700">
              <h3 className="mb-1 text-2xl text-white">Starter</h3>
              <p className="text-xs text-white">1 Month</p>
            </div>

            <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <h3 className="text-2xl">$10</h3>
            </div>

            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  50 Page Unlock
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  10 GB Storage
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />6
                  Team Members
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited Book Mark
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited basic feature
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited updates
                </li>
              </ul>
              <Button className={"w-full mt-8 px-5 py-2.5"}>Get Started</Button>
            </div>
          </div>

          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 relative">
            <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">
              Most popular
            </span>
            <div className="h-32 p-4 text-center bg-blue-600">
              <h3 className="mb-1 text-2xl text-white">Professional</h3>
              <p className="text-xs text-white">2 Months</p>
            </div>

            <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <p className="text-[10px] font-bold">Save 29%</p>
              <h3 className="text-2xl">$70</h3>
            </div>

            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  500 Page Unlock
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  100 GB Storage
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  15 Team Members
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited Book Mark
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited basic feature
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited updates
                </li>
              </ul>

              <Button
                className={
                  "w-full mt-8 px-5 py-2.5 bg-blue-600 hover:bg-blue-700"
                }
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="h-32 p-4 text-center bg-pink-700">
              <h3 className="mb-1 text-2xl text-white">Business</h3>
              <p className="text-xs text-white">3 Month</p>
            </div>

            <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-pink-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <p className="text-[10px] font-bold">Save 33%</p>
              <h3 className="text-2xl">$99</h3>
            </div>

            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  800 Page Unlock
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  300 GB Storage
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  50 Team Members
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited Book Mark
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited basic feature
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="mr-2 text-lg text-green-400" />
                  Unlimited updates
                </li>
              </ul>

              <Button
                className={
                  "w-full mt-8 px-5 py-2.5 bg-pink-700 hover:bg-pink-800"
                }
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
