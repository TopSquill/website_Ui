import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaBullhorn,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import SectionHeading from "./SectionHeading";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";

const Services = () => {
  const dummyServiceEntries = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create stunning and responsive websites tailored to your needs.",
      link: "#",
      icon: (
        <FaCode
          size={20}
          className="text-indigo-600 group-hover:text-gray-200"
        />
      ),
    },
    {
      id: 2,
      title: "Graphic Design",
      description:
        "Our skilled designers bring your ideas to life through captivating visuals.",
      link: "#",
      icon: (
        <FaPaintBrush
          size={20}
          className="text-indigo-600 group-hover:text-gray-200"
        />
      ),
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Crafting mobile apps that offer seamless experiences and powerful functionalities.",
      link: "#",
      icon: (
        <FaMobileAlt
          size={20}
          className="text-indigo-600 group-hover:text-gray-200"
        />
      ),
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Boost your online presence and reach your target audience effectively.",
      link: "#",
      icon: (
        <FaBullhorn
          size={20}
          className="text-indigo-600 group-hover:text-gray-200"
        />
      ),
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description:
        "We provide comprehensive e-commerce solutions for your online business.",
      link: "#",
      icon: (
        <FaShoppingCart
          size={20}
          className="text-indigo-600 group-hover:text-gray-200"
        />
      ),
    },
    {
      id: 6,
      title: "SEO Services",
      description:
        "Increase your website's visibility and rankings on search engines.",
      link: "#",
      icon: (
        <FaSearch
          size={20}
          className="text-indigo-600 group-hover:text-gray-200"
        />
      ),
    },
  ];

  return (
    <div className="px-2 py-2 md:px-6 md:py-10 relative isolate lg:px-8">
      <div className="container mx-auto">
        <SectionHeading title="Services" subtitle="Check Our Services" />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-10 m-20">
          {dummyServiceEntries.map((service, i) => (
            <div
              key={service.id}
              className="bg-white p-4 md:p-10 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg relative text-center cursor-pointer group hover:bg-blue-200"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 p-3 rounded-full group-hover:bg-indigo-600">
                {service.icon}
              </div>
              <h1 className="text-xl font-semibold capitalize text-gray-700 mt-6 group-hover:text-indigo-700">
                {service.title}
              </h1>
              <p className="text-sm text-gray-500 mt-2 group-hover:text-black">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-2 text-sm font-semibold capitalize text-blue-500 transition-colors duration-300 group-hover:text-blue-700"
              >
                <span className="mr-1">read more</span>
                <AiOutlineArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <LeftBgImage />
      <RightBgImage />
    </div>
  );
};

export default Services;
