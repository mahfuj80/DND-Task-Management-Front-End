import React from "react";
import Title from "../Shared/Title";
import Description from "../Shared/Description";

const Stats = () => {
  return (
    <div className="bg-black px-8 py-14 font-[sans-serif] text-gray-300">
      <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
        <div>
          <Title>Success By Numbers</Title>
          <Description>
            Discover the numbers that drive our success. Our key metrics
            highlight the impact of our efforts and showcase the significant
            milestones we&apos;ve achieved. From customer satisfaction to
            project completion rates, these statistics provide a transparent
            view of our performance and commitment to excellence.
          </Description>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-[#272727] flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 className="text-3xl font-extrabold text-white lg:text-5xl">
              5.4
            </h3>
            <div className="mt-4">
              <p className="text-sm">Total Users</p>
            </div>
          </div>
          <div className="bg-[#272727] flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 className="text-3xl font-extrabold text-white lg:text-5xl">
              $80K
            </h3>
            <div className="mt-4">
              <p className="text-sm">Revenue</p>
            </div>
          </div>
          <div className="bg-[#272727] flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 className="text-3xl font-extrabold text-white lg:text-5xl">
              100K
            </h3>
            <div className="mt-4">
              <p className="text-sm">Engagement</p>
            </div>
          </div>
          <div className="bg-[#272727] flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 className="text-3xl font-extrabold text-white lg:text-5xl">
              99.9%
            </h3>
            <div className="mt-4">
              <p className="text-sm">Server Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
