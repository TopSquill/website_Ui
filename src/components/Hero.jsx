import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGxhbXAlMjBtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjE2NDMxOA&ixlib=rb-1.2.1&w=1500",
    "https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2876&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full ">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image}
            alt=""
          />
        ))}
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 relative z-10 ">
          <div className="lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-blue-900 md:text-4xl lg:text-6xl">
              Let's keep things organized
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="rounded-md bg-blue-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                I Want a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
