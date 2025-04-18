import React from 'react';
import { CheckCircle } from 'lucide-react';
import Img from "../../assets/Home/profile1.png";
import Ceo from "../../assets/Home/Profile2.png";
export default function AboutSection() {
  const features = [
    'Sed vitae quam porttitor, mattis lorem nec, aliquet sapien.',
    'Nulla molestie libero sit amet luctus mollis.',
    'Aenean placerat lorem ac sem vehicula semper eu nec mi venenatis nibh luctus id.',
    'Aliquam sit amet dolor quis lorem dapibus aliquam.',
  ];

  return (
    <section className="bg-black text-white px-6 py-16 lg:flex lg:items-center lg:justify-between">
   
      <div className="lg:w-1/2 space-y-6">
        <button className="border border-white px-4 py-1 rounded-full text-sm">
          About Us
        </button>
        <h2 className="text-4xl font-bold leading-tight">
          Enhancing Operations With <br className="hidden sm:block" />
          Advanced Technology
        </h2>
        <p className="text-gray-300">
          We strive to leverage the latest advancements in IT to create sustainable value for our clients,
          enabling them to achieve their strategic objectives and stay ahead in an increasingly competitive landscape.
        </p>
        <ul className="space-y-3">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-fuchsia-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-4 mt-6 flex-wrap">
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
            Get Started
          </button>
          <button className="border border-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-800/20">
            Our Services
          </button>
        </div>
      </div>

  
      <div className="lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center">
        <div className="relative">
          <img
            src={Img} 
            alt="Person working"
            className="rounded-xl max-w-md shadow-lg"
          />
          <div className="absolute -bottom-12 left-0 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white rounded-xl p-5 w-[90%] shadow-xl flex items-start gap-4">
            <img
              src={Ceo} 
              alt="CEO"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-sm italic">
              "The technology you use impresses no one.
              The experience you create with it is everything."
              <br />– <span className="not-italic font-medium">CEO Portal</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
