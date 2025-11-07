import React from "react";

const stats = [
  { icon: null, label: "Accelerating Digital Transformation", desc: "Enabling organizations to adopt AI, automation, and data-driven strategies faster across industries." },
  { icon: "🧠", label: "Delivering Intelligent Solutions", desc: "From ML models to automation bots — we build technology that learns and adapts." },
  { icon: "💡", label: "Empowering Business Teams", desc: "Helping non-technical teams leverage data for smarter decisions and strategies." },
];

export default function StatsSection() {
  const inlineIcons = ["🚀", "🤖", "👥"]; // new minimalist inline icons
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* soft gradient glows for a modern look */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          {/* <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] sm:text-xs font-medium text-gray-300 tracking-wide">
            What We Do
          </span> */}
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold ">
            What We Do
          </h2>
          {/* <p className="mt-2 text-sm text-gray-400">desc</p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group h-full rounded-lg border border-white/10 bg-transparent p-6 sm:p-8 transition-colors duration-200 hover:border-white/20 hover:bg-white/5"
            >
              <div className="text-lg font-semibold text-white flex items-center gap-2">
                <span aria-hidden className="text-base leading-none select-none"></span>
                <span>{stat.label}</span>
              </div>
              <div className="mt-3 sm:mt-4 text-sm text-gray-300 leading-relaxed">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
