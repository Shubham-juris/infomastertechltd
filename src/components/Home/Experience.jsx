import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "What Services Does Portal Offer?",
    "How Long Does Portal Take to Implement?",
    "What Industries Does Portal Serve?",
    "Does Portal Provide Tech Consulting Services?",
    "Does Portal Offer On-Demand Training Services?",
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
          alt="Support"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 bg-purple-700 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium shadow-md">
          15+ Years Experience
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-purple-600 rounded-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-sm sm:text-base font-medium"
              >
                {faq}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-300 text-sm">
                  This is a placeholder answer. You can customize the response here
                  to provide more specific information about each question.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
