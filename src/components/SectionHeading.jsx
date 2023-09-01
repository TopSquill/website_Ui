import React from "react";
import { SvgDash } from "../icons/SVGIcons";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl flex items-center ">
        {title} <SvgDash className="blue-icon ml-2 mt-2" />
      </h1>
      <p className="my-2 text-left text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
