import React, { useState } from 'react';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: 'Michael Keth',
      designation: 'Designation',
      quote: "Their commitment to understanding our business needs and delivering customized solutions sets them apart. We're delighted with the results and look forward to continuing our partnership, thank you Portal!",
      rating: 5,
    },
    {
      name: 'Brian Manuel',
      designation: 'Designation',
      quote: "The team's dedication and proactive approach ensured a smooth transition, and their ongoing support has been invaluable. I highly recommend Portal for anyone looking to leverage technology.",
      rating: 5,
    },
    // Add more testimonials here if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-8">
          <span className="bg-pink-500 text-sm font-semibold px-4 py-1 rounded-full mr-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-bold">OUR CLIENTS' EXPERIENCE</h2>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-800 border border-pink-500 rounded-lg p-6"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.364 2.448a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118l-3.364-2.448a1 1 0 00-1.176 0l-3.364 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.098 9.397c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm mb-6">"{testimonial.quote}"</p>
                {/* Profile */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;