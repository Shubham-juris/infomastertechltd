import React from 'react';
import backgroundImage from "../../assets/service/img.jpg";
const Services = () => {
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
        <h1 className="text-5xl font-bold mb-4">Services</h1>
      </div>
    </section>
  );
};

export default Services;
