import React from "react";
import img from "../../assets/Home/img.webp";

const Whychoose = () => {
  return (
    <>
      <div>
        {/* Why Choose Us Section */}
        <div className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto justify-center">
          <button className="border border-white text-white py-1 px-4 rounded-full mb-4 text-sm sm:text-base">
            Why Choose Us
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Magic Behind Our IT Solutions
          </h2>
          <p className="text-gray-400  mb-4">
            We begin by conducting a comprehensive needs assessment to understand your specific requirements, challenges, and goals.
          </p>

          {/* Grid of Benefits with Image in the Center */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Column */}
            <div className="space-y-6 text-left">
              <div className="p-6 border border-purple-600 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">
                  Technical Expertise
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  A reputable IT company should possess a high level of technical expertise.
                </p>
              </div>
              <div className="p-6 border border-purple-600 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">
                  Innovation & Adaptability
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  A reputable IT company should possess a high level of technical expertise.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <img
              src={img}
              alt="Why Choose Us"
              className="w-full rounded-lg object-cover max-h-[280px] sm:max-h-[320px] md:max-h-[400px]"
            />

            {/* Right Column */}
            <div className="space-y-6 text-left">
              <div className="p-6 border border-purple-600 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">
                  Effective Communication
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  A reputable IT company should possess a high level of technical expertise.
                </p>
              </div>
              <div className="p-6 border border-purple-600 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">
                  Security And Compliance
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  A reputable IT company should prioritize data security and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-800 to-fuchsia-600 text-white py-8 sm:py-10 text-center rounded-t-2xl">
          <div className="flex justify-center flex-wrap gap-6 sm:gap-10 text-base sm:text-lg font-semibold">
            <div>
              <span className="text-xl sm:text-2xl font-bold">15+</span>
              <br />
              Years Experience
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold">120+</span>
              <br />
              Expert Team
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold">1.5K+</span>
              <br />
              Clients
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold">20+</span>
              <br />
              Branch Offices
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
