import React from "react";
import { Link } from "react-router-dom";

export default function CtaServices() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700/80 to-purple-700/80 mix-blend-multiply" />

      <div className="relative z-10 text-white px-6 max-w-3xl">
        <h1 className="text-white px-4 py-1 text-xl mb-4">
          Build Your Future
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Empowering Careers, Connecting Talent Globally
        </h2>
        <p className="text-gray-200 mb-6">
          At Worldwide Placement Services, we specialize in bridging the gap between talented professionals and top global employers. Whether you're seeking your dream job or the right candidate, our recruitment expertise ensures successful placements every time.
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
