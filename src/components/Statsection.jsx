import React from "react";

const stats = [
  {
    number: "50+",
    label: "Clients Across Industries",
  },
  {
    number: "14",
    label: "Projects Delivered with Databricks",
  },
  {
    number: "10+",
    label: "Inhouse AI/ML Accelerators",
  },
];

console.log("State")

const StatsSection = () => {
  return (
    <div className="flex justify-center gap-16 py-12 bg-white">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center px-48 py-24 border border-gray-200 rounded-lg shadow-sm flex justify-evenly flex-col"
        >
          <div className="text-4xl font-semibold text-[#003366]">
            {stat.number}
          </div>
          <div className="text-sm mt-1 text-gray-700">{stat.label}</div>
          <div className="h-2 w-40 bg-cyan-300 mt-3 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
