import React from "react";
import backgroundImage from "../../assets/Home/Bg1.avif";

const Hero = () => {
  return (
    <>
      <section
        className="relative h-[90vh] sm:h-[80vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Main content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
          <h1 className="px-4 py-1 mb-4 text-sm sm:text-base uppercase tracking-wider">
            Empowering Careers Globally
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Your Global Partner for<br />Jobs, Visas & Career Growth
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            At Worldwide Placement Services, we connect talent with international
            opportunities. From job placements to visa guidance, we help shape
            your global career.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
