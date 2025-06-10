import React from "react";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700/80 to-purple-700/80 mix-blend-multiply" />

      <div className="relative z-10 text-white px-6 max-w-3xl">
        <h1 className="text-white px-4 py-1 rounded-full text-xl mb-4">
          Start Your Global Journey
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Explore Career Opportunities Worldwide
        </h2>
        <p className="text-gray-200 mb-6">
          Whether you're a fresh graduate or an experienced professional, 
          Worldwide Placement Services connects you with the right employers globally. 
          Let us guide your career toward new horizons with our trusted recruitment expertise.
        </p>
        <Link to="/contact">
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
