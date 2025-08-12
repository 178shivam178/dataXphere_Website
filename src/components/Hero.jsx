// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex  text-white font-sans bg-[url(/src/assets/bkg.png)] bg-repeat-x ">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-24 py-12">
        <span className="text-md text-2xl px-12  py-6 bg-white text-black w-max rounded-full">
          Delivering AI Success Since 2018
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight my-4">
          We Build AI that Grows <br /> Your Business
        </h1>
        <p className="text-2xl text-gray-300 my-2">
          Shipped 300+ Custom AI Solutions. 92% are ROI Positive.
        </p>
        <button className="bg-[#1fb6ff] hover:bg-[#0ea5e9] text-white font-semibold px-16 py-4 my-4 rounded-full w-max">
          LET'S TALK
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
