import React, { useState } from "react";
import backgroundImage from "../assets/Img.jpg";
import img from "../assets/Home/img.webp";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Home = () => {
  const services = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Praesent lorem placerat, purus laoreet ultrices volutpat, est lectus dapibus magna, in interdum sem tellus quis sem.",
      gradient: "border-purple-600",
      bg: "bg-transparent",
    },
    {
      title: "Network Infrastructure Design",
      description:
        "Praesent lorem placerat, purus laoreet ultrices volutpat, est lectus dapibus magna, in interdum sem tellus quis sem.",
      gradient: "border-purple-600",
      bg: "bg-gradient-to-br from-purple-700 via-purple-500 to-fuchsia-500 text-white",
    },
    {
      title: "IT Consulting And Strategy",
      description:
        "Praesent lorem placerat, purus laoreet ultrices volutpat, est lectus dapibus magna, in interdum sem tellus quis sem.",
      gradient: "border-purple-600",
      bg: "bg-transparent",
    },
  ];
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
  const faqs = [
    "What Services Does Portal Offer?",
    "How Long Does Portal Take to Implement?",
    "What Industries Does Portal Serve?",
    "Does Portal Provide Tech Consulting Services?",
    "Does Portal Offer On-Demand Training Services?",
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans">
      <section
        className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          <button className="px-4 py-1 border border-white rounded-full mb-4 text-sm hover:bg-white hover:text-black transition">
            IT Evolution
          </button>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Reliable IT Support for <br /> Your Business
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            We specialize in delivering cutting-edge IT solutions tailored to
            meet the unique needs of modern businesses.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-medium transition">
            Get Started
          </button>
        </div>
      </section>
      <section className="bg-black text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <button className="border border-white text-white py-1 px-4 rounded-full mb-4 hover:bg-white hover:text-black transition">
              About Us
            </button>
            <h2 className="text-4xl font-bold leading-snug mb-4">
              Enhancing Operations With <br /> Advanced Technology
            </h2>
            <p className="text-gray-300 mb-6">
              We strive to leverage the latest advancements in IT to create
              sustainable value for our clients, enabling them to achieve their
              strategic objectives and stay ahead in an increasingly competitive
              landscape.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Sed vitae quam porttitor, mattis lorem nec, aliquet sapien.",
                "Nulla molestie libero sit amet luctus mollis.",
                "Aenean placerat lorem ac sem vehicula semper.",
                "Aliquam sit amet dolor quis lorem dapibus aliquam.",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  {/* <FaCheckCircle className="text-purple-500 mt-1" /> */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition">
                Get Started
              </button>
              <button className="border border-purple-600 hover:bg-purple-600 hover:text-white text-white font-semibold py-2 px-6 rounded-full transition">
                Our Services
              </button>
            </div>
          </div>

          {/* Image & Testimonial */}
          <div className="relative">
            <img
              src={img}
              alt="Developer working"
              className="rounded-xl w-full"
            />
            <div className="absolute bottom-6 left-6 bg-purple-600 text-white p-4 md:p-6 rounded-xl max-w-xs shadow-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={img}
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-sm italic">
                  "The technology you use impresses no one. The experience you
                  create with it is everything." – CEO Portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <button className="border border-white text-white py-1 px-4 rounded-full mb-4 hover:bg-white hover:text-black transition">
            Our Services
          </button>
          <h2 className="text-4xl font-bold mb-4">
            Advanced And Highly Reliable <br /> Performance
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our success is our success and together we help our society to
            become a better place to live and work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${service.gradient} ${service.bg} hover:shadow-lg transition`}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex items-center gap-2 border-t border-gray-500 pt-2 text-purple-400 hover:text-purple-200 cursor-pointer w-fit">
                Learn More <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 rounded-full transition">
            All Services
          </button>
        </div>
      </section>
      <div className="bg-black text-white pt-16 px-4 md:px-16">
        <div className="text-center mb-12">
          <button className="border border-white text-white py-1 px-4 rounded-full mb-4">
            Expert Team
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get To Know Our IT Professionals Team
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Our success lies in our dedicated team who help make society a
            better place.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full mt-6">
            View All
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
          {[
            {
              name: "Christ Matthew",
              position: "Chief Technology Officer",
              image: "https://randomuser.me/api/portraits/men/45.jpg",
            },
            {
              name: "Benjamin Foster",
              position: "CEO Portal",
              image: "https://randomuser.me/api/portraits/men/46.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="w-[260px] bg-gradient-to-tr from-purple-700 to-fuchsia-600 text-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
                <div className="flex gap-3 mt-3 text-sm text-white/70">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-black via-purple-950 to-black py-16 px-4 md:px-20 text-center">
          <button className="border border-white text-white py-1 px-4 rounded-full mb-4 text-sm">
            Why Choose Us
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Magic Behind Our IT Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="space-y-6 text-left">
              <div className="p-4 border border-purple-600 rounded-lg">
                <h4 className="font-semibold mb-1">Technical Expertise</h4>
                <p className="text-sm text-gray-400">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
              <div className="p-4 border border-purple-600 rounded-lg">
                <h4 className="font-semibold mb-1">
                  Innovation & Adaptability
                </h4>
                <p className="text-sm text-gray-400">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
            </div>

            <img
              src={img}
              alt="Why Choose Us"
              className="w-full rounded-lg object-cover max-h-[320px]"
            />

            <div className="space-y-6 text-left">
              <div className="p-4 border border-purple-600 rounded-lg">
                <h4 className="font-semibold mb-1">Effective Communication</h4>
                <p className="text-sm text-gray-400">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
              <div className="p-4 border border-purple-600 rounded-lg">
                <h4 className="font-semibold mb-1">Security And Compliance</h4>
                <p className="text-sm text-gray-400">
                  A reputable IT company should prioritize data security and
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-800 to-fuchsia-600 text-white py-10 text-center rounded-t-2xl">
          <div className="flex justify-center flex-wrap gap-10 text-lg font-semibold">
            <div>
              <span className="text-2xl font-bold">15+</span>
              <br />
              Years Experience
            </div>
            <div>
              <span className="text-2xl font-bold">120+</span>
              <br />
              Expert Team
            </div>
            <div>
              <span className="text-2xl font-bold">1.5K+</span>
              <br />
              Clients
            </div>
            <div>
              <span className="text-2xl font-bold">20+</span>
              <br />
              Branch Office
            </div>
          </div>
        </div>
      </div>
      <div className="text-white bg-black">
         <section className="text-center py-16 px-4">
          <button className="border border-white text-sm px-4 py-1 rounded-full mb-4">
            Pricing Plans
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Securing Your Digital Future
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Explore our flexible plans designed to scale with your needs and
            budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6 justify-center">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-zinc-900 p-6 rounded-xl border-2 ${
                  plan.popular ? "border-purple-500" : "border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs bg-purple-600 text-white inline-block px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-6">
                  {plan.price}
                  <span className="text-base font-medium">/Month</span>
                </div>
                <ul className="text-left space-y-2 text-gray-300 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-purple-500" /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full">
                  View All
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 text-center bg-gradient-to-r from-purple-800/50 to-fuchsia-600/70">
          <button className="border border-white text-sm px-4 py-1 rounded-full mb-4">
            IT Services
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Drive Innovation With Our IT Services
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-8">
            Leverage our advanced IT solutions to digitally transform and scale
            your business with smarter tools.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full">
            Contact Us
          </button>
        </section>

        <section className="py-16 px-4 md:px-20 grid md:grid-cols-2 gap-10 items-start">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
              alt="Support"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-purple-700 px-4 py-2 text-white text-sm rounded-full font-medium">
              15+ Years Experience
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-purple-600 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-medium"
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
                      This is a placeholder answer. You can customize the
                      response here.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center py-12">
          <button className="border border-white text-sm px-4 py-1 rounded-full mb-4">
            Latest News
          </button>
          <h2 className="text-3xl font-bold mb-4">
            Checkout Our Latest Blog Posts
          </h2>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full">
            Explore Blog
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
