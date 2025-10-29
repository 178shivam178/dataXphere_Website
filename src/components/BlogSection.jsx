import React from "react";

const blogs = [
  {
    title: "Still Not Using Databricks for ETL? Here’s Why You Should",
    image: "/src/assets/images1.png",
  },
  {
    title: "Model Context Protocol 101: What is it and Why it’s Important?",
    image: "/src/assets/images2.png",
  },
  {
    title:
      "Are You Doomed if You’re a GPT Wrapper? Here are 3 Wrappers Who Are Killing it",
    image: "/src/assets/images3.png",
  },
  {
    title:
      "Feeling Left Out of the AI Agents Hype? Here’s a No-Jargon Explainer",
    image: "/src/assets/images4.png",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#ffffff] bg-gray-900 w-full md:w-full py-6">
        Explore AI Trends, Insights, and Strategies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 place-items-center">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm w-full max-w-sm p-4 flex flex-col items-center text-center"
          >
            <h3 className="text-sm font-semibold mb-4">{blog.title}</h3>
            <img
              src={blog.image}
              alt={blog.title}
              className="h-36 w-full object-cover rounded"
            />
            <button className="mt-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 text-center inline-flex items-center dark:focus:ring-gray-500 rounded">
              READ MORE
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            EXPLORE MORE BLOGS
          </span>
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
