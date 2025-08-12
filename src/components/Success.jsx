import React from "react";

const stories = [
  {
    image: "/src/assets/bkg1.png", // Replace with your actual image path
    title:
      "Our LLM-Powered Sales Agent Boosted Revenue by 32% for India's Biggest Offline Insurance Aggregator",
    description: `Sales agents at a leading insurance aggregator struggled with policy clarification delays, slowing customer interactions and reducing efficiency.

We built an AI-powered chatbot that delivered instant, accurate responses, allowing agents to respond faster, handle more customers, and drive higher conversions at scale.`,
  },
  {
    image: "/src/assets/bkg2.png", // Replace with your actual image path
    title: `95% Accurate Investment Advice - Our AI Chatbot Outperformed Brokers at a Top Firm`,
    description: `A stock broking firm struggled to provide personalized service while handling a growing number of investors. High-value clients received priority, while smaller investors faced delays.

We introduced an AI-powered chatbot that automated responses and delivered tailored investment recommendations—boosting engagement, efficiency, and scalability.`,
  },
];

const SuccessStories = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#003366]">
        Our Top Success Stories
      </h2>
      <p className="text-center text-sm mt-2 text-gray-500 max-w-xl mx-auto">
        McKinsey says 80% of AI projects NEVER meet their goals. The rest 20% is
        done by us.
      </p>

      <div className="mt-14 space-y-20">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <img
              src={story.image}
              alt="story visual"
              className="w-1/3"
            />
            <div className="w-full md:w-2/3 align-middle">
              <h3 className="text-lg md:text-xl font-semibold text-[#1A1A1A] leading-snug">
                {story.title}
              </h3>
              <p className="text-sm text-gray-600 mt-3 whitespace-pre-line">
                {story.description}
              </p>
              <div className="mt-5 flex gap-3">
                <button className="px-4 py-2 border border-[#003366] text-[#003366] text-sm font-medium rounded">
                  Read Full Story
                </button>
                <button className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded">
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
