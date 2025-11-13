import React from "react";

const highlights = [
  {
    title: "Editorial + Engineering DNA",
    body:
      "We pair newsroom instincts with data engineering rigor so every story is backed by clean pipelines, quality checks, and thoughtful distribution.",
  },
  {
    title: "Platform Agnostic",
    body:
      "From custom headless stacks to off-the-shelf CMS, we meet audiences where they already read and share, not the other way around.",
  },
  {
    title: "Applied AI Workflows",
    body:
      "Automation assists our writers without replacing their voice—LLMs help summarize research, flag anomalies, and surface insights faster.",
  },
];

const values = [
  "Publish explainers that demystify real-world data problems.",
  "Elevate underrepresented expert voices across industries.",
  "Ship quickly, measure impact, and iterate with readers.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#060b19] via-[#090f21] to-[#0b1730] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-10">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
            About DataXSphere
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Journalism fueled by analytics, delivered like a product.
          </h2>
          <p className="text-base text-gray-300 max-w-3xl">
            DataXSphere started as an internal newsletter for a data consultancy
            and has since grown into a digital magazine that breaks down how AI,
            cloud, and modern engineering change the way teams build and ship.
            We combine editorial craft with platform thinking so every post feels
            like a mini product launch—discoverable, measurable, and evergreen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white/5 p-6 border border-white/10 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-blue-200 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-semibold text-blue-200">
            What readers can expect
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0"
                  aria-hidden
                />
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-300">
            Want to collaborate on a story or syndicate your expertise? Reach
            out via the contact form and we will set up an editorial briefing.
          </p>
        </div>
      </div>
    </section>
  );
}

