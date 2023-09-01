import React from "react";

const CustomBgImage = ({ position }) => {
  const isLeftPosition = position === "left";

  const commonStyles = {
    width: "36.125rem",
    transform: "-translate-x-1/2",
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    background: "linear-gradient(to top right, #ff80b5, #9089fc)",
    opacity: 0.3,
  };

  const positionStyles = {
    left: isLeftPosition
      ? {
          top: "-40",
          rotate: "-30deg",
          left: "calc(50%-11rem)",
          smTop: "-80",
          smLeft: "calc(50%-30rem)",
        }
      : {
          top: "calc(100%-13rem)",
          left: "calc(50%+3rem)",
          smTop: "calc(100%-30rem)",
          smLeft: "calc(50%+36rem)",
        },
  };

  const combinedStyles = { ...commonStyles, ...positionStyles[position] };

  return (
    <div
      className={`absolute inset-x-0 ${
        isLeftPosition ? "-z-10" : "z-0"
      } transform-gpu overflow-hidden blur-3xl sm:${
        isLeftPosition ? "-top-80" : "top-[calc(100%-30rem)]"
      }`}
      aria-hidden="true"
    >
      <div
        className={`relative aspect-[1155/678] ${
          isLeftPosition ? "rotate-[30deg]" : ""
        }`}
        style={combinedStyles}
      />
    </div>
  );
};

export default CustomBgImage;
