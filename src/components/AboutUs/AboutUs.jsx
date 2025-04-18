import React from 'react';
import backgroundImage from "../../assets/Home/bgimg.webp";

const AboutUs = () => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
   

     
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg">Home / About Us</p>
      </div>
    </section>
  );
};

export default AboutUs;
