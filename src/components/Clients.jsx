import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clients.css"; // Import your custom CSS file here
import SectionHeading from "./SectionHeading";

const images = [
  "https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg",
  "https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg",
  "https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg",
  "https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg",
  "https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg",
];

console.log(images);

const Clients = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the speed (e.g., 3000 milliseconds)
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 4,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" md:px-6 md:py-10 e lg:px-8">
      <div className="container mx-auto">
        <SectionHeading title="Our Clients" subtitle="We've Worked With" />
        {/* Add the SectionHeading */}
        <Slider {...settings} className="w-full mt-16 d">
          {images.map((imgSrc, index) => (
            <div key={index} className="px-4 py-4">
              {/* Added padding */}
              <img
                src={imgSrc}
                alt={`Image ${index}`}
                className="h-auto mx-auto lg:w-30 lg:h-12"
              />{" "}
              {/* Smaller icon */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
