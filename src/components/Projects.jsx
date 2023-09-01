import React from "react";
import SectionHeading from "./SectionHeading";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";

const Projects = () => {
  const slides = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      demoLink: "https://example.com/demo1",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      demoLink: "https://example.com/demo2",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      demoLink: "https://example.com/demo3",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      demoLink: "https://example.com/demo4",
    },
  ];

  return (
    <div className="px-2 py-2 md:px-6 md:py-10 relative isolate  lg:px-8">
      <div className="container mx-auto">
        <LeftBgImage />
        <SectionHeading title="Projects" subtitle="Check Out Our Projects" />

        <div className="grid grid-cols-1 gap-10 m-10 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
      <RightBgImage />
    </div>
  );
};

export default Projects;
