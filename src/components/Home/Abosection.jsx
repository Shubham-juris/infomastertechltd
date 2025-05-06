import img from "../../assets/Home/img.webp";
import { FaCheckCircle } from "react-icons/fa";

const Abosection = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <button className="border border-white text-white py-1 px-4 rounded-full mb-4 text-sm sm:text-base hover:bg-white hover:text-black transition">
            About Us
          </button>

          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
            Enhancing Operations With <br className="hidden sm:block" /> Advanced Technology
          </h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            We strive to leverage the latest advancements in IT to create sustainable value
            for our clients, enabling them to achieve their strategic objectives and stay
            ahead in an increasingly competitive landscape.
          </p>

          <ul className="space-y-3 mb-8 text-sm sm:text-base">
            {[
  "Tailored IT solutions designed to meet your business objectives.",
  "Innovative technologies that enhance operational efficiency.",
  "Scalable and secure systems for future-ready growth.",
  "Expert guidance backed by industry knowledge and technical skill.",
].map((item, index) => (
  <li key={index} className="flex items-start space-x-2">
    <FaCheckCircle className="text-purple-500 mt-1" />
    <span>{item}</span>
  </li>
))}

          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition text-sm sm:text-base">
              Get Started
            </button>
            <button className="border border-purple-600 hover:bg-purple-600 hover:text-white text-white font-semibold py-2 px-6 rounded-full transition text-sm sm:text-base">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full">
          <img
            src={img}
            alt="Developer working"
            className="rounded-xl w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-purple-600 text-white p-4 sm:p-5 md:p-6 rounded-xl max-w-[85%] sm:max-w-xs shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src={img}
                alt="CEO"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <p className="text-xs sm:text-sm italic">
                "The technology you use impresses no one. The experience you create with it is everything."
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abosection;
