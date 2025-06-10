import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import backgroundImage from "../assets/pages/img.png";
import { Link } from "react-router-dom";

const PgSection = () => {
  return (
    <div className="text-white bg-black">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
        </div>
      </section>

      {/* Placement Plans Section */}
      <section className="text-center py-12 sm:py-16 px-4 sm:px-6">
        <h1 className="text-xl px-4 py-1 rounded-full mb-4">
          Placement Plans
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Shaping Careers, Building Futures
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
          Choose from our tailored recruitment and placement plans designed to connect top talent with the right opportunities across industries.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gradient-to-r from-purple-800/50 to-fuchsia-600/70">
        <h1 className="text-xl px-4 py-1 mb-4">
          What We Offer
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Trusted Global Recruitment Solutions
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          From skilled manpower to executive placements, we provide end-to-end staffing solutions with a global reach and local expertise.
        </p>
        <Link to="/contact">
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default PgSection;
