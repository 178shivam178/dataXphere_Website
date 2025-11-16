import React from "react";

export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050814] via-[#080f21] to-[#0b1730] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center space-y-4 bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl">
        <p className="text-xs tracking-[0.4em] uppercase text-blue-300">
          Careers
        </p>
        <h1 className="text-3xl font-semibold">No openings right now</h1>
        <p className="text-base text-gray-300 leading-relaxed">
          We scale hiring in focused waves and the current cycle is paused. If
          you would still like to share your portfolio or collaborate on guest
          posts, send us a note at{" "}
          <a className="text-blue-300 underline" href="mailto:hello@DataXphere.com">
            hello@DataXphere.com
          </a>{" "}
          and we will keep your info on file for the next cohort.
        </p>
      </div>
    </main>
  );
}

