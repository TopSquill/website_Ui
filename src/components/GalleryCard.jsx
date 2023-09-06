import React from "react";
import PropTypes from "prop-types";

const GalleryCard = (props) => {
  return (
    <div
      className={`relative ${props.rootClassName} rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:bg-black-70 cursor-pointer`}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 opacity-70 hover:opacity-100"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-end from-opacity-0 to-opacity-90 opacity-0 transition duration-300 hover:opacity-100 p-4">
        <h1 className="text-white text-xl font-semibold mb-2">{props.title}</h1>
        <span className="text-white ">{props.subtitle}</span>
      </div>
    </div>
  );
};

export default GalleryCard;
