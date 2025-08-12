import React from "react";
import HiringImg from "../assets/hiringImage.png"; // Adjust path accordingly

const HiringSection = () => {
  return (
    <section className="p-16 m-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={HiringImg} alt="Currently Hiring" className="w-64 h-auto" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-gray-900 text-4xl font-semibold mb-6">
            Currently Hiring:
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-sky-300 hover:bg-sky-400 text-xs font-bold py-2 px-4 rounded">
              DATA ENGINEER 2 & 3
            </button>
            <button className="bg-sky-300 hover:bg-sky-400 text-xs font-bold py-2 px-4 rounded">
              DATA SCIENTIST 2 & 3
            </button>
            <button className="bg-sky-300 hover:bg-sky-400 text-xs font-bold py-2 px-4 rounded">
              JAVA DEVELOPER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
