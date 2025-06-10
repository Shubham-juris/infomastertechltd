import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Worldwide Placement Services offer?",
      answer:
        "We provide international job placements, immigration assistance, career counseling, and skill development training to help candidates secure employment abroad.",
    },
    {
      question: "Which countries do you provide job placement for?",
      answer:
        "We assist candidates in securing opportunities across countries like Canada, the UK, Australia, Gulf countries, and several parts of Europe and Asia, depending on their skill set and profile.",
    },
    {
      question: "Do you offer training or certification programs?",
      answer:
        "Yes, we offer pre-departure training, language coaching (such as IELTS or PTE), and industry-specific skill certifications to ensure candidates are job-ready.",
    },
    {
      question: "Is visa and documentation support available?",
      answer:
        "Absolutely. Our expert team guides you through visa application, document verification, interview preparation, and compliance with immigration requirements.",
    },
    {
      question: "How can I start the application process with WPS?",
      answer:
        "You can begin by contacting us through our website or visiting our office. Our counselors will guide you through job options, required documents, and next steps.",
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 lg:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
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

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h1>

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
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-300 text-sm">
                  {faq.answer}
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
