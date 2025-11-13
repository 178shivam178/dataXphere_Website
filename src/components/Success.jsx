import React, { useState } from "react";
import { Link } from "react-router-dom";
import storyImg1 from "../assets/story1.png";
import storyImg2 from "../assets/story2.png";
import storyImg3 from "../assets/story3.png";
import storyImg4 from "../assets/story4.png";

const stories = [
  {
    image: storyImg1,
    title: "Intelligent Spend Data Analysis for a Global Retail Chain",
    summary:
      "We helped a leading retail chain gain actionable insights from their spend data across 15 regions by implementing an AI-powered analytics dashboard.",
    keyResults: [
      "35% reduction in manual spend categorization effort",
      "20% improvement in procurement efficiency",
      "Integrated over 5 million transactions from multiple ERP systems",
    ],
    readMore:
      "Our data science team designed a custom spend analytics solution using Python, Power BI, and Azure Synapse. Automated classification models categorized supplier spend by type and business unit, improving visibility into maverick spend. With real-time dashboards, business leaders could monitor cost trends and savings opportunities, resulting in a measurable boost in operational efficiency.",
  },
  {
    image: storyImg2,
    title: "Generative AI Data Assistant – Fetching Data with Natural Language",
    summary:
      "We built a GenAI-powered data assistant that allows business users to query complex datasets using simple English prompts, eliminating the need to write SQL.",
    keyResults: [
      "Reduced report generation time by 90%",
      "Supported over 25 data sources via secure APIs",
      "Improved user adoption by 3x among non-technical teams",
    ],
    readMore:
      "Using OpenAI’s API, LangChain, and a React + FastAPI stack, our solution connects to internal databases and APIs, interprets natural language queries, and fetches structured data in seconds. The system also generates data visualizations on the fly, making insights accessible to finance, sales, and operations users—no coding needed.",
  },
  {
    image: storyImg3,
    title: "Automated Data Ingestion and Validation Framework in Databricks",
    summary:
      "We implemented an automated ingestion and validation framework for a large enterprise’s Databricks environment, ensuring data quality and pipeline reliability.",
    keyResults: [
      "Automated 250+ data pipelines",
      "Reduced data errors by 40%",
      "Saved 300+ man-hours/month on manual monitoring",
    ],
    readMore:
      "Our data engineering team designed an orchestration layer using Azure Data Factory, Databricks, and Delta Live Tables. It automatically detects schema drift, runs data validation tests, and generates daily validation reports. We also implemented housekeeping workflows that clean unused tables and logs, ensuring an optimized, cost-effective environment.",
  },
  {
    image: storyImg4,
    title: "Full-Stack Customer Insights Portal",
    summary:
      "Developed a scalable, full-stack web portal for a financial services client to centralize customer data, insights, and predictive analytics.",
    keyResults: [
      "Increased customer engagement by 50%",
      "Supported 10K+ daily active users",
      "Reduced report access time from hours to minutes",
    ],
    readMore:
      "Built using React, Node.js, and PostgreSQL, the portal integrates machine learning models (deployed via FastAPI) that predict customer churn and lifetime value. Secure authentication and role-based dashboards allow teams to view personalized insights, driving faster and more data-driven business decisions.",
  },
];

const SuccessStories = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#003366]">
        Our Top Success Stories
      </h2>
      <p className="text-center text-sm mt-2 text-gray-500 max-w-xl mx-auto">
        McKinsey says 80% of AI projects NEVER meet their goals. The rest 20% is done by us.
      </p>

      <div className="mt-14 space-y-20">
        {stories.map((story, index) => {
          const isExpanded = expanded === index;
          return (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-8 md:gap-12`}
            >
              {story.image ? (
                <img
                  src={story.image}
                  alt="story visual"
                  className="w-full md:w-1/3 rounded-lg shadow-sm object-cover aspect-[4/3]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}
              <div className="w-full md:w-2/3 bg-[#F8FBFF] border border-[#E6F0FA] rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] leading-snug">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mt-3">
                  {story.summary}
                </p>
                {story.keyResults?.length ? (
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-[#003366] font-medium">Key Results</p>
                    <ul className="mt-2 list-disc pl-5 text-sm md:text-base text-gray-700 space-y-1">
                      {story.keyResults.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {isExpanded ? (
                  <div className="mt-4 bg-white border border-[#E6F0FA] rounded p-4 text-sm md:text-base text-gray-700">
                    {story.readMore}
                  </div>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="px-4 py-2 border border-[#003366] text-[#003366] text-sm font-medium rounded hover:bg-[#003366] hover:text-white transition"
                  >
                    {isExpanded ? "Hide Details" : "Read Full Story"}
                  </button>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded hover:bg-cyan-600 transition"
                  >
                    Let’s Talk
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuccessStories;
