import React from "react";
import SectionHeading from "./SectionHeading";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";
import { slides } from "../dymmy/dummyData";
import GalleryCard from "./GalleryCard";

const Projects = () => {
  return (
    <div className="px-2 py-2 md:px-6 md:py-10 relative isolate  lg:px-8">
      <div className="container mx-auto">
        {/* <LeftBgImage /> */}
        <SectionHeading title="Projects" subtitle="Check Out Our Projects" />

        {/* <div className="grid grid-cols-1 gap-10 m-10 md:grid-cols-2 lg:grid-cols-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px] overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="z-0 h-full w-full rounded-md object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 opacity-70 hover:opacity-100"></div>
              <div className="absolute bottom-4 left-4 text-left px-2">
                <h1 className="text-lg font-semibold text-white">
                  {slide.title}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  {slide.description}
                </p>
                <a
                  href={slide.demoLink}
                  className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
                >
                  View Demo &rarr;
                </a>
              </div>
            </div>
          ))}
        </div> */}
        <div className="mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {slides.map((slide) => (
            <GalleryCard
              key={slide.id}
              image_src={slide.url}
              title={slide.title}
              subtitle={slide.description}
              rootClassName="rounded-lg"
            />
          ))}
        </div>
      </div>
      {/* <RightBgImage /> */}
    </div>
  );
};

export default Projects;
