import React from 'react';
import Image from "../../assets/Img.jpg"; 
import { Target, MessageCircle, Lightbulb, Lock } from 'lucide-react';

const features = [
  {
    icon: <Target className="text-purple-500" size={32} />,
    title: 'Technical Expertise',
    description: 'A reputable IT company should possess a high level of technical expertise.',
  },
  {
    icon: <Lightbulb className="text-purple-500" size={32} />,
    title: 'Innovation & Adaptability',
    description: 'A reputable IT company should possess a high level of technical expertise.',
  },
  {
    icon: <MessageCircle className="text-purple-500" size={32} />,
    title: 'Effective Communication',
    description: 'A reputable IT company should possess a high level of technical expertise.',
  },
  {
    icon: <Lock className="text-purple-500" size={32} />,
    title: 'Security And Compliance',
    description: 'An IT company must prioritize cybersecurity and data protection.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mb-6 px-6 py-2  text-xl">
          Why Choose Us
        </h1>
        <h2 className="text-4xl font-bold mb-4">Magic Behind Our IT Solutions</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-16">
          We begin by conducting a comprehensive needs assessment to understand your specific requirements, challenges, and goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-center">

          <div className="space-y-6">
            {features.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 border border-purple-600 rounded-lg p-5 bg-black/60">
                <div>{item.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

     
          <div className="flex justify-center">
            <img
              src={Image}
              alt="Why Choose Us"
              className="rounded-xl shadow-lg max-h-[400px] object-cover"
            />
          </div>

    
          <div className="space-y-6">
            {features.slice(2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 border border-purple-600 rounded-lg p-5 bg-black/60">
                <div>{item.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
