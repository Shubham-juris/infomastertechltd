import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$120",
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
      features: [
        "Unlimited projects",
        "All professional features",
        "Extended SLA",
        "Team collaboration",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="text-center mb-10">
        <button className="border border-white text-sm px-4 py-1 rounded-full mb-4">
          Pricing Plans
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Securing Your Digital Future
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Explore our flexible plans designed to scale with your needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <span className="text-sm sm:text-base font-medium text-gray-400">/Month</span>
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
              View All
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
