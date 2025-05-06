import React from 'react';

export default function CtaServices() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700/80 to-purple-700/80 mix-blend-multiply" />

      <div className="relative z-10 text-white px-6 max-w-3xl">
        <button className="bg-black text-white px-4 py-1 rounded-full text-sm mb-4">
          Unlock Efficiency
        </button>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Accelerate Growth with Trusted IT Services
        </h2>
        <p className="text-gray-200 mb-6">
          From strategic consulting to advanced infrastructure and cybersecurity solutions, 
          our team empowers businesses to innovate, scale, and stay ahead in today’s digital economy.
        </p>
        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
          Contact Us
        </button>
      </div>
    </section>
  );
}
