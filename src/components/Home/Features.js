import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity,MdSupportAgent,MdAutoAwesome  } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { FaAssistiveListeningSystems, FaBatteryFull  } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import Title from "../Shared/Title";
import Description from "../Shared/Description";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Customization",
      description:
        "Tailor our product to suit your needs Expand your reach with our global network.",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      title: "Security",
      description: "Your data is protected by the latest security measures.",
      icon: <MdOutlineSecurity />,
    },
    {
      id: 3,
      title: "Support",
      description:
        "Tailor our product to suit your needs 24/7 customer support for all your inquiries.",
      icon: <MdSupportAgent />,
    },
    {
      id: 4,
      title: "Performance",
      description: "Experience blazing-fast performance with our product.",
      icon: <CgPerformance />,
    },
    {
      id: 5,
      title: "Global Reach",
      description:
        "Tailor our product to suit your needs Expand your reach with our global network.",
      icon: <GrDocumentPerformance />,
    },
    {
      id: 6,
      title: "Automation",
      description:
        "Automated processes to streamline tasks and reduce manual intervention for greater efficiency.",
      icon: <MdAutoAwesome />,
    },
    {
      id: 7,
      title: "Innovation",
      description:
        "Cutting-edge technology and creative solutions that keep you ahead of the competition.",
      icon: <TbBrandNeteaseMusic />,
    },
    {
      id: 8,
      title: "Efficiency",
      description:
        "Streamlined processes that maximize productivity and minimize resource waste.",
      icon: <FaBatteryFull />,
    },
    {
      id: 9,
      title: "Reliability",
      description:
        "Dependable systems that ensure continuous availability and minimize downtime for uninterrupted service.",
      icon: <FaAssistiveListeningSystems />,
    },
  ];

  return (
    <div className="bg-[#010101] px-4 py-12 font-[sans-serif]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Title className={"text-center mb-8"}>
          Discover Our Exclusive Features
        </Title>
        <Description className={"text-center md:px-32 px-4  md:mb-16 mb-8"}>
          Explore the standout features that set our service apart. Designed
          with your needs in mind, these features provide exceptional value and
          enhance your experience. Each feature has been meticulously crafted to
          offer you the best in functionality, performance, and user
          satisfaction.
        </Description>

        {/* Cards */}
        <div className="grid gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex gap-6 p-6 transition-all bg-[#181818] rounded-lg shadow-md hover:shadow-none shadow-white"
            >
              <div className="w-12 h-12 p-3 text-2xl text-black bg-gray-100 rounded-md shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
