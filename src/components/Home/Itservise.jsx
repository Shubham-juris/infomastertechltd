import React from "react";

const Itservise = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 text-center bg-gradient-to-r from-purple-800/50 to-fuchsia-600/70">
      <div className="max-w-3xl mx-auto">
        <button className="border border-white text-sm sm:text-base px-4 py-1 rounded-full mb-4 hover:bg-white hover:text-black transition">
          IT Services
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Drive Innovation With Our IT Services
        </h2>
        <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8">
          Leverage our advanced IT solutions to digitally transform and scale
          your business with smarter tools.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full text-sm sm:text-base transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Itservise;
