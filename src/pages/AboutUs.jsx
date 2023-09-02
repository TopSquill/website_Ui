import React from "react";
import {
  BsAward,
  BsClock,
  BsEmojiSmile,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import SectionHeading from "../components/SectionHeading";

const AboutUs = () => {
  const countData = [
    {
      icon: <BsEmojiSmile />,
      count: 65,
      text: "consequuntur voluptasnostrum aliquid ipsam architecto ut.",
    },
    {
      icon: <BsJournalBookmarkFill />,
      count: 85,
      text: "consequuntur voluptasnostrum aliquid ipsam architecto ut.",
    },
    {
      icon: <BsClock />,
      count: 35,
      text: "consequuntur voluptasnostrum aliquid ipsam architecto ut.",
    },
    {
      icon: <BsAward />,
      count: 20,
      text: "consequuntur voluptasnostrum aliquid ipsam architecto ut.",
    },
  ];

  return (
    <section id="why-choose" className="p-10">
      <div className="container mx-auto m-10">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-7/12 lg:pr-10 flex flex-col justify-center ">
            <div className="p-5">
              <h2 className="text-2xl font-bold text-center">
                Why Choose TOPSQILL?
              </h2>
              <p className="mt-4 text-center">
                TOPSQILL simplifies governance, risk, and compliance management
                across various verticals. We offer solutions for governance,
                risk mitigation, audits, information security, and regulatory
                compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4">
              {countData.map((data, index) => (
                <div
                  key={index}
                  className="bg-blue-200 rounded-lg p-4 flex flex-col items-center "
                >
                  {/* Center elements */}
                  <div className="text-4xl text-blue-500">{data.icon}</div>
                  <p className="text-lg font-semibold mt-4 text-center">
                    <strong>Happy Clients</strong> {data.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12 md:w-full flex items-center p-4 sm:p-4">
            <div className="">
              <img
                src="https://64f27a657a778c22a19903be--topsqill.netlify.app/assets/img/counts-img.jpg"
                alt="Why Choose Us"
                className="w-full h-3/4 object-cover rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
