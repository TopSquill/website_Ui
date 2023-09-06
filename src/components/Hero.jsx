// "use client";

// import React from "react";
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// const menuItems = [
//   {
//     name: "Home",
//     href: "#",
//   },
//   {
//     name: "About",
//     href: "#",
//   },
//   {
//     name: "Contact",
//     href: "#",
//   },
// ];

// const Hero = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
//       <div className="relative mx-auto max-w-2xl py-24">
//         <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
//           <svg
//             className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
//             viewBox="0 0 1155 678"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
//               fillOpacity=".3"
//               d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
//             />
//             <defs>
//               <linearGradient
//                 id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
//                 x1="1155.49"
//                 x2="-78.208"
//                 y1=".177"
//                 y2="474.645"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#9089FC" />
//                 <stop offset={1} stopColor="#FF80B5" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//         <div className="text-center">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//             Lorem ipsum dolor sit amet consectetur dicta.
//           </h1>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//             lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//             fugiat aliqua.
//           </p>
//           <div className="mt-10 flex items-center justify-center gap-x-2">
//             <button
//               type="button"
//               className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//               View Docs
//             </button>
//             <button
//               type="button"
//               className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      startColor: "#9089FC",
      stopColor: "#FF80B5",
      title: "Page 1 Title",
      description: "Page 1 Description",
    },
    {
      startColor: "#5fcb6a",
      stopColor: "#b127aa",
      title: "Page 2 Title",
      description: "Page 2 Description",
    },
    {
      startColor: "#44a833",
      stopColor: "#1859c1",
      title: "Page 3 Title",
      description: "Page 3 Description",
    },
    // Add more slides as needed
  ];

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
    // <>
    //   <div className="relative isolate px-6 lg:px-8">
    //     <LeftBgImage />
    //     {/* <CustomBgImage position="left" /> */}
    //     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-40">
    //       <div className="hidden sm:mb-8 sm:flex sm:justify-center">
    //         <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    //           Announcing our next round of funding.
    //           <a href="#" className="font-semibold text-indigo-600">
    //             <span className="absolute inset-0" aria-hidden="true" />
    //             Read more <span aria-hidden="true">&rarr;</span>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="text-center">
    //         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    //           Data to enrich your online business
    //         </h1>
    //         <p className="mt-6 text-lg leading-8 text-gray-600">
    //           Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    //           lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    //           fugiat aliqua.
    //         </p>
    //         <div className="mt-10 flex items-center justify-center gap-x-6">
    //           <a
    //             href="#"
    //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Get started
    //           </a>
    //           <a
    //             href="#"
    //             className="text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Learn more <span aria-hidden="true">→</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <RightBgImage />
    //   </div>
    // </>
    <>
      <div className="relative w-full ">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGxhbXAlMjBtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjE2NDMxOA&ixlib=rb-1.2.1&w=1500"
          alt=""
        />
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 relative z-10 ">
          <div className="lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-blue-900 md:text-4xl lg:text-6xl">
              Let's keep things organised
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
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
