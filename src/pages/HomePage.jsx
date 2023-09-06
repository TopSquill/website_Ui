import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      {/* <div className="relative w-full">
    <Navbar />
    <Hero />
  </div> */}
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Projects />

      <Testimonial />
      <Clients />
      <Faq />
      <Blogs />
    </>
  );
};

export default HomePage;
