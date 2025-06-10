import React from 'react';
import { CheckCircle } from 'lucide-react';
import Img from "../../assets/Home/profile1.png";
import Ceo from "../../assets/Home/profile2.png";

export default function AboutSection() {
  const features = [
    'Personalized career guidance for every candidate.',
    'Access to global job opportunities across industries.',
    'Strategic partnerships with top international employers.',
    'Expert support throughout your recruitment journey.',
  ];

  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <button className="border border-white px-4 py-1 rounded-full text-sm">
            About Us
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Empowering Careers Through <br className="hidden sm:block" />
            Global Placement Solutions
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            At Worldwide Placement Services, we specialize in connecting talent with opportunity.
            Our mission is to help individuals achieve meaningful careers by providing reliable support,
            expert guidance, and a network of international job openings.
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
              Get Placed
            </button>
            <button className="border border-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-800/20">
              Explore Services
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative max-w-sm w-full">
            <img
              src={Img}
              alt="Career growth"
              className="rounded-xl w-full shadow-lg"
            />
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white rounded-xl p-4 sm:p-5 w-[95%] shadow-xl flex items-start gap-3 sm:gap-4">
              <img
                src={Ceo}
                alt="CEO"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <p className="text-xs sm:text-sm italic">
                "Your journey to global success starts with the right opportunity."
                <br />
                – <span className="not-italic font-medium">CEO, Worldwide Placement Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
