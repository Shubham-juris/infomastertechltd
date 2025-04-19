import React from 'react';
import { CheckCircle } from 'lucide-react';
import Img from "../../assets/Home/profile1.png";
import Ceo from "../../assets/Home/Profile2.png";

export default function AboutSection() {
  const features = [
    'Sed vitae quam porttitor, mattis lorem nec, aliquet sapien.',
    'Nulla molestie libero sit amet luctus mollis.',
    'Aenean placerat lorem ac sem vehicula semper.',
    'Aliquam sit amet dolor quis lorem dapibus aliquam.',
  ];

  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section - Text */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <button className="border border-white px-4 py-1 rounded-full text-sm">
            About Us
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Enhancing Operations With <br className="hidden sm:block" />
            Advanced Technology
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            We strive to leverage the latest advancements in IT to create sustainable value for our clients,
            enabling them to achieve their strategic objectives and stay ahead in an increasingly competitive landscape.
          </p>
          <ul className="space-y-3 text-left">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-fuchsia-500 mt-1" />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
              Get Started
            </button>
            <button className="border border-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-800/20">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative max-w-sm w-full">
            <img
              src={Img}
              alt="Person working"
              className="rounded-xl w-full shadow-lg"
            />
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white rounded-xl p-4 sm:p-5 w-[95%] shadow-xl flex items-start gap-3 sm:gap-4">
              <img
                src={Ceo}
                alt="CEO"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <p className="text-xs sm:text-sm italic">
                "The technology you use impresses no one. The experience you create with it is everything."
                <br />
                – <span className="not-italic font-medium">CEO Portal</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
