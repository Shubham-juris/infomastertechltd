import { Link } from "react-router-dom";
import img from "../../assets/Home/img.webp";
import { FaCheckCircle } from "react-icons/fa";

const Abosection = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
            Empowering Careers Through <br className="hidden sm:block" />{" "}
            Global Opportunities
          </h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            At Worldwide Placement Services, we bridge the gap between ambition
            and opportunity. Our commitment is to guide individuals toward
            successful global careers through trusted placement solutions,
            training, and personalized support.
          </p>

          <ul className="space-y-3 mb-8 text-sm sm:text-base">
            {[
              "Global job placement tailored to your career goals.",
              "Certified training programs to boost your employability.",
              "Expert counselling for international migration & study abroad.",
              "Reliable support from application to arrival.",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-purple-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="border border-purple-600 hover:bg-purple-600 hover:text-white text-white font-semibold py-2 px-6 rounded-full transition text-sm sm:text-base text-center"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full">
          <img
            src={img}
            alt="Global placement"
            className="rounded-xl w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-purple-600 text-white p-4 sm:p-5 md:p-6 rounded-xl max-w-[85%] sm:max-w-xs shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src={img}
                alt="WPS Team"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <p className="text-xs sm:text-sm italic">
                "Your passport to a brighter future starts with the right
                placement partner."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abosection;
