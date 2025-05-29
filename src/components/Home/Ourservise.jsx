import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Ourservise = () => {
  const services = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your digital assets with our advanced cybersecurity strategies and proactive threat management.",
      gradient: "border-purple-600",
      bg: "bg-transparent",
    },
    {
      title: "Network Infrastructure Design",
      description:
        "Streamline your business connectivity with robust, scalable, and secure network architecture solutions.",
      gradient: "border-purple-600",
      bg: "bg-gradient-to-br from-purple-700 via-purple-500 to-fuchsia-500 text-white",
    },
    {
      title: "IT Consulting And Strategy",
      description:
        "Transform your IT landscape with tailored consulting services and future-focused tech strategy.",
      gradient: "border-purple-600",
      bg: "bg-transparent",
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className=" text-white py-1 px-4  mb-4">
          Our Services
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Advanced And Highly Reliable <br /> Performance
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Our innovative solutions empower your business, helping it grow faster
          and smarter in today’s digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-5 sm:p-6 rounded-xl border ${service.gradient} ${service.bg} hover:shadow-lg transition`}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              {service.description}
            </p>
           
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/services">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold transition">
            All Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Ourservise;
