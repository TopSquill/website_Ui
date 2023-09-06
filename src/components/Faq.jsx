import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Close the currently expanded FAQ
    } else {
      setExpandedIndex(index); // Expand the clicked FAQ
    }
  };
  return (
    <div className="px-2 py-2 md:px-6 md:py-10 relative isolate  lg:px-8">
      <div className="container mx-auto">
        <SectionHeading title="Faq" subtitle="Frequently Asked Questions" />
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200 bg-E3F2FC"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                {expandedIndex === i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {expandedIndex === i && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat aliquam adipisci iusto aperiam? Sint asperiores
                    sequi nobis inventore ratione deleniti?
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="#"
            title=""
            className="font-semibold text-black hover:text-blue-500"
          >
            Contact our support
          </a>
        </p>
      </div>
      {/* <LeftBgImage />
      <RightBgImage /> */}
    </div>
  );
};
export default Faq;
