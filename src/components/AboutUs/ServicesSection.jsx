import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mb-4 px-4 py-1 text-xl">Our Services</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Building Global Careers with <br className="hidden md:block" />
          Trusted Placement Solutions
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We specialize in connecting talented individuals with the right
          opportunities worldwide. From career guidance to international
          placements, we provide tailored support every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Domestic & International Placement */}
          <div className="border border-fuchsia-600 rounded-lg p-6 hover:bg-fuchsia-950 transition">
            <h3 className="text-xl font-semibold mb-4">
              Domestic & International Placement
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              We place candidates in reputed companies across India and abroad, matching skills with the right career opportunities globally.
            </p>
            <hr className="border-gray-600 mb-4" />
          </div>

          {/* Staffing & Recruitment */}
          <div className="rounded-lg p-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-opacity-20 border border-transparent hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Staffing & Recruitment
            </h3>
            <p className="text-white text-sm mb-6">
              Our expert recruiters identify top talent for businesses of all sizes—ensuring a perfect fit for long-term success.
            </p>
            <hr className="border-white mb-4" />
          </div>

          {/* Career Counselling & Training */}
          <div className="border border-fuchsia-600 rounded-lg p-6 hover:bg-fuchsia-950 transition">
            <h3 className="text-xl font-semibold mb-4">
              Career Counselling & Training
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              We empower job seekers through guidance, interview preparation, and skill development to boost their employability.
            </p>
            <hr className="border-gray-600 mb-4" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link to="/services">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
              Explore All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
