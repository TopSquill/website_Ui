import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "./SectionHeading";
import LeftBgImage from "./LeftBgImage";
import RightBgImage from "./RightBgImage";

const dummyCards = [
  {
    id: 1,
    title: "About Macbook",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 2,
    title: "Another Blog Post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 3,
    title: "Exploring Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 4,
    title: "Future of Computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 5,
    title: "Future of Computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 6,
    title: "Future of Computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 7,
    title: "Future of Computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
  {
    id: 8,
    title: "Future of Computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  },
];

const Blogs = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    arrows: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-2 py-2 md:px-6 md:py-10 relative isolate lg:px-8">
      <div className="container mx-auto">
        <SectionHeading title="Blogs" subtitle="Explore Our Blog Posts" />

        <div className="mt-8">
          <Slider {...settings} className="w-full">
            {dummyCards.map((card) => (
              <div key={card.id} className="px-4 py-4">
                <div className="bg-white md:pb-10 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg relative text-center cursor-pointer group hover:bg-E3F2FC">
                  <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                  />
                  <h1 className="text-xl font-semibold capitalize text-gray-700 mt-6 group-hover:text-indigo-700">
                    {card.title}
                  </h1>
                  <p className="text-sm text-gray-500 mt-2 group-hover:text-black">
                    {card.description}
                  </p>
                  <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* <LeftBgImage />
      <RightBgImage /> */}
    </section>
  );
};

export default Blogs;
