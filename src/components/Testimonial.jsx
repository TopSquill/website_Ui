import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import SectionHeading from "./SectionHeading";
import { AiFillAliwangwang } from "react-icons/ai";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";

const Testimonial = () => {
  const slides = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      name: "John Doe",
      role: "Frontend Developer at DevUI",
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      name: "John Doe",
      role: "Backend Developer at DevUI",
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      name: "John Doe",
      role: "FullStack Developer at DevUI",
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”",
    },
    // Add more testimonial slides here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="px-2 py-10 md:px-0 relative isolate  lg:px-8 cursor-pointer">
      <div className="container mx-auto ">
        <SectionHeading title="Testimonial" subtitle="What Our Clients Say" />

        <div className="mx-auto relative group">
          <div className="mx-auto max-w-4xl my-10 ">
            <div className="md:flex md:items-center md:justify-center md:space-x-14">
              <div className="relative h-48 w-48 flex-shrink-0">
                <img
                  className="relative h-48 w-48 rounded-full object-cover"
                  src={slides[currentIndex].url}
                  alt=""
                />
              </div>

              <div className="mt-10 md:mt-0 text-justify">
                <blockquote>
                  <p className="text-xl text-black">
                    {slides[currentIndex].quote}
                  </p>
                </blockquote>
                <p className="mt-7 text-lg font-semibold text-black">
                  {slides[currentIndex].name}
                </p>
                <p className="mt-1 text-base text-gray-600">
                  {slides[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  currentIndex === slideIndex ? "text-black" : "text-gray-400"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
      <LeftBgImage />
      <RightBgImage />
    </section>
  );
};

export default Testimonial;
