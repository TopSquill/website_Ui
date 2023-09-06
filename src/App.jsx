import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceDetails from "./pages/ServiceDatails";

function App() {
  return (
    <>
      {/* <HomePage />
      <BlogPage /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
