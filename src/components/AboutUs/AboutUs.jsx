import React from "react";
import backgroundImage from "../../assets/about/img1.webp";

const AboutUs = () => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

     
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
      </div>
    </section>
  );
};

export default AboutUs;
