import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Placement",
      price: "₹5,000",
      features: [
        "Job interview scheduling",
        "Resume submission to recruiters",
        "Email & phone support",
        "Guidance for job selection",
        "Pre-screening assistance",
      ],
    },
    {
      name: "Premium Placement",
      price: "₹9,999",
      popular: true,
      features: [
        "All Basic features included",
        "Direct company referrals",
        "Visa application support",
        "Document verification",
        "Personalized consultation",
      ],
    },
    {
      name: "Professional Abroad Package",
      price: "₹14,999",
      features: [
        "End-to-end overseas placement",
        "Embassy documentation assistance",
        "One-on-one career coaching",
        "Post-arrival guidance",
        "24/7 candidate support",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="text-center mb-10">
        <h1 className="mb-4">Pricing Plans</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Affordable & Transparent Career Services
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Choose the best plan suited for your career goals — whether local or international.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border-2 shadow-md transition duration-300 ${
              plan.popular
                ? "border-purple-500 bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-zinc-900"
                : "border-gray-700 bg-zinc-900"
            }`}
          >
            {plan.popular && (
              <div className="text-xs bg-purple-600 text-white inline-block px-3 py-1 rounded-full mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.name}</h3>
            <div className="text-3xl sm:text-4xl font-extrabold mb-5">
              {plan.price}
              <span className="text-sm sm:text-base font-medium text-gray-400">/one-time</span>
            </div>
            <ul className="text-left space-y-3 text-sm sm:text-base mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <FaCheckCircle className="text-purple-500 text-base" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-sm sm:text-base">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
