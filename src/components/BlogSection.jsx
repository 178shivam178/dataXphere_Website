import React from "react";
import img1 from "../assets/images1.png";
import img2 from "../assets/images2.png";
import img3 from "../assets/images3.png";
import img4 from "../assets/images4.png";

const blogs = [
  {
    title: "Still Not Using Databricks for ETL? Here’s Why You Should",
    image: img1,
  },
  {
    title: "Model Context Protocol 101: What is it and Why it’s Important?",
    image: img2,
  },
  {
    title:
      "Are You Doomed if You’re a GPT Wrapper? Here are 3 Wrappers Who Are Killing it",
    image: img3,
  },
  {
    title:
      "Feeling Left Out of the AI Agents Hype? Here’s a No-Jargon Explainer",
    image: img4,
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#003366]">
        Explore AI Trends, Insights, and Strategies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white overflow-hidden"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-50">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-base font-semibold text-[#1A1A1A] line-clamp-2 min-h-[3.25rem]">
                {blog.title}
              </h3>
              <button className="self-start px-3 py-2 text-xs md:text-sm border border-[#003366] text-[#003366] rounded hover:bg-[#003366] hover:text-white transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
            EXPLORE MORE BLOGS
          </span>
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
