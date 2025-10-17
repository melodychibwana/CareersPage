// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-brand-blue text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-0 fade-up">
        {/* Left side text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Pushing IT Consulting to the Limit
          </h1>
          <p className="text-lg md:text-xl">
            We are driven to create exceptional experiences within client ecosystems through close collaboration.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-white text-brand-blue px-6 py-3 rounded font-medium hover:bg-gray-100 transition">
              Explore Clients
            </button>
            <button className="bg-white text-brand-blue px-6 py-3 rounded font-medium hover:bg-gray-100 transition">
              Open Positions
            </button>
          </div>
        </div>

        {/* Right side image placeholder */}
        <div className="md:w-1/2 mt-8 md:mt-0 h-64 bg-gray-300 rounded fade-up">
          {/* Placeholder for image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
