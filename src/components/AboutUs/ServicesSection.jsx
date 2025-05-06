import { FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <button className="mb-4 px-4 py-1 border border-white rounded-full text-sm">
          Our Services
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Empowering Your Business with <br className="hidden md:block" />
          Reliable Technology Solutions
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We deliver high-performance, secure, and scalable IT services that help businesses
          operate more efficiently, innovate faster, and achieve sustainable growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cybersecurity Solutions */}
          <div className="border border-fuchsia-600 rounded-lg p-6 hover:bg-fuchsia-950 transition">
            <h3 className="text-xl font-semibold mb-4">Cybersecurity Solutions</h3>
            <p className="text-gray-300 text-sm mb-6">
              Protect your digital assets with advanced threat detection, risk assessment,
              and real-time monitoring tailored to your infrastructure.
            </p>
            <hr className="border-gray-600 mb-4" />
            <a href="/" className="text-white font-medium flex items-center gap-2 hover:underline">
              Learn More <FaArrowRight className="text-sm" />
            </a>
          </div>

          {/* Network Infrastructure Design */}
          <div className="rounded-lg p-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-opacity-20 border border-transparent hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-white">Network Infrastructure Design</h3>
            <p className="text-white text-sm mb-6">
              Build a reliable and scalable network foundation with our customized infrastructure
              solutions, designed for performance and security.
            </p>
            <hr className="border-white mb-4" />
            <a href="/" className="text-white font-medium flex items-center gap-2 hover:underline">
              Learn More <FaArrowRight className="text-sm" />
            </a>
          </div>

          {/* IT Consulting and Strategy */}
          <div className="border border-fuchsia-600 rounded-lg p-6 hover:bg-fuchsia-950 transition">
            <h3 className="text-xl font-semibold mb-4">IT Consulting & Strategy</h3>
            <p className="text-gray-300 text-sm mb-6">
              Align your IT investments with business goals through expert advice, technology roadmaps,
              and strategic planning services.
            </p>
            <hr className="border-gray-600 mb-4" />
            <a href="/" className="text-white font-medium flex items-center gap-2 hover:underline">
              Learn More <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold">
            All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
