import React from "react";

const Latesnews = () => {
  return (
    <section className="bg-black text-white text-center py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button className="border border-white px-4 py-1 text-sm sm:text-base rounded-full mb-4 hover:bg-white hover:text-black transition">
          Latest News
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Checkout Our Latest Blog Posts
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Stay updated with industry trends, company insights, and expert tips.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-sm sm:text-base transition">
          Explore Blog
        </button>
      </div>
    </section>
  );
};

export default Latesnews;
