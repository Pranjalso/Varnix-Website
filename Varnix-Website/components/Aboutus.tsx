"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation

const Aboutus = ({ showButton = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay Aboutus animation to appear after hero section
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); // Start after hero animation completes

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`bg-[#1E1E1E] text-white flex flex-col items-center rounded-2xl gap-7  sm:rounded-3xl w-full min-h-[45vh]  px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      aria-label="About Us"
    >
      {/* STATS BAR */}
      <div className="bg-zinc-50 flex flex-col sm:flex-row justify-around items-center text-black w-full max-w-[900px] rounded-b-2xl sm:rounded-b-3xl py-4 gap-4">
        {[
          { value: "150+", label: "project launched" },
          { value: "50+", label: "clients covered" },
          { value: "97%", label: "engage rise" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold">{item.value}</span>
            <span className="text-xs sm:text-sm md:text-base text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="w-full max-w-[1200px]  flex flex-col md:flex-row items-center gap-8 md:gap-16 py-10 px-4 sm:px-6 mt-6">
        
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-4 items-start  w-full aboutus-content-mobile-center">
          <h2 className="text-sm sm:text-base md:text-lg uppercase tracking-wide text-gray-300">
            Brands don&apos;t just happen. We build them
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
            From first impression to lasting impact — we design, scale, and grow
            brands in the digital-first world
          </p>

          {/* Logic: Button only renders if showButton prop is true */}
          {showButton && (
            <Link href="/about-us"> 
              <button className="bg-pink-500 px-5 py-2 text-white text-sm sm:text-base rounded-full mt-4 hover:bg-pink-600 transition">
                View more
              </button>
            </Link>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col gap-4 w-full ">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-pink-500 flex justify-center items-center rounded-full shrink-0" />
            <span className="font-bold text-xl md:text-2xl">4.9</span>
            <span className="text-pink-500 text-xl">★</span>
          </div>

          <span className="text-sm sm:text-base  text-gray-300">
            average rating from 500+ clients
          </span>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
            Varnix is more than a marketing agency—we’re a collective of strategists, creators, and technologists turning brands into cultural forces. In an attention-driven world, we help brands capture interest, sustain relevance, and drive measurable growth through future-ready solutions. We don’t just market products—we build experiences, communities, and lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;