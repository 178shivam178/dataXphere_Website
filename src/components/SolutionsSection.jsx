import React from "react";
// import {
//   SparklesIcon,
//   EyeIcon,
//   MicrophoneIcon,
//   DatabaseIcon,
//   ChipIcon,
//   ChartBarIcon,
//   CogIcon,
//   AdjustmentsIcon,
// } from "@heroi"; // or use @heroicons/react/24/outline if needed

const solutions = [
  { name: "Generative AI" },
  { name: "Computer Vision" },
  { name: "NLP" },
  { name: "Data Engineering" },
  { name: "Machine Learning" },
  { name: "Big Data Solutions" },
  { name: "MLOps" },
  { name: "Business Intelligence" },
];

const SolutionsSection = () => {
  return (
    <section className="bg-[#2d2c3c] text-white py-20 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Full Suite of Solutions
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          End-to-end expertise for AI-driven transformation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-sky-200 text-black rounded-md py-6 px-4 flex items-center justify-center font-semibold text-sm gap-2 hover:bg-sky-300 transition"
          >
            {/* <solution.icon className="w-5 h-5" /> */}
            {solution.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
