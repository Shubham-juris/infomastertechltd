import React from 'react';
import backgroundImage from "../assets/Img.jpg"; 

const Home = () => {
  return (
    <div className="font-sans">
      <section
        className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          <button className="px-4 py-1 border border-white rounded-full mb-4 text-sm hover:bg-white hover:text-black transition">
            IT Evolution
          </button>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Reliable IT Support for <br /> Your Business
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            We specialize in delivering cutting-edge IT solutions tailored to meet the unique needs of modern businesses.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-medium transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
