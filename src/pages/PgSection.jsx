import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import backgroundImage from "../assets/pages/img.png";

const plans = [
  {
    name: "Starter",
    price: "$120",
    popular: false,
    features: [
      "Standard feature set",
      "Access to helpdesk",
      "Regular updates",
      "Basic support",
      "Cloud hosting",
    ],
  },
  {
    name: "Professional",
    price: "$120",
    popular: true,
    features: [
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access",
      "Cloud + On-Premise",
    ],
  },
  {
    name: "Standard",
    price: "$150",
    popular: false,
    features: [
      "Unlimited projects",
      "All professional features",
      "Extended SLA",
      "Team collaboration",
      "24/7 Support",
    ],
  },
];

const PgSection = () => {
  return (
    <div className="text-white bg-black">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Pages</h1>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="text-center py-12 sm:py-16 px-4 sm:px-6">
        <button className="border border-white text-sm px-4 py-1 rounded-full mb-4">
          Pricing Plans
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Securing Your Digital Future
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
          Explore our flexible plans designed to scale with your needs and budget.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-zinc-900 p-4 sm:p-6 rounded-xl border-2 ${
                plan.popular ? "border-purple-500" : "border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="text-xs bg-purple-600 text-white inline-block px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl sm:text-4xl font-extrabold mb-6">
                {plan.price}
                <span className="text-sm sm:text-base font-medium">/Month</span>
              </div>
              <ul className="text-left space-y-2 text-gray-300 mb-6 text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 break-words">
                    <FaCheckCircle className="text-purple-500 mt-1" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full text-sm sm:text-base w-full sm:w-auto">
                View All
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gradient-to-r from-purple-800/50 to-fuchsia-600/70">
        <button className="border border-white text-sm px-4 py-1 rounded-full mb-4">
          IT Services
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Drive Innovation With Our IT Services
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Leverage our advanced IT solutions to digitally transform and scale your business with smarter tools.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-sm sm:text-base">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PgSection;
