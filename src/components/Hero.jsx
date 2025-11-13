import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function HeroSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLearnMore = (event) => {
    event.preventDefault();
    const successSection = document.querySelector("#success");

    if (successSection && location.pathname === "/") {
      successSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/#success");
    }
  };

  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Unlock Your Data Universe
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-prose">
              Build, observe, and scale modern data platforms with confidence. From AI success stories to practical solutions — we help you turn data into decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold"
              >
                Get Started
              </Link>
              <a
                href="/#success"
                onClick={handleLearnMore}
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-purple-500/30">
              {/* Decorative pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="#60a5fa"/>
                    <stop offset="1" stopColor="#a78bfa"/>
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#g)" strokeWidth=".5">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <circle key={i} cx="100" cy="100" r={(i + 3) * 5} />
                  ))}
                </g>
              </svg>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_50%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
