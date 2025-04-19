import React from "react";
import Profile1 from "../../assets/Home/profile1.png";
import Profile2 from "../../assets/Home/Profile2.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Expert = () => {
  const teamMembers = [
    {
      name: "Christ Matthew",
      position: "Chief Technology Officer",
      image: Profile1,
    },
    {
      name: "Benjamin Foster",
      position: "CEO Portal",
      image: Profile2,
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <button className="border border-white text-white py-1 px-4 rounded-full mb-4 text-sm sm:text-base">
          Expert Team
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Get To Know Our IT Professionals Team
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
          Our success lies in our dedicated team who help make society a
          better place.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full mt-5 text-sm sm:text-base transition">
          View All
        </button>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-700 to-fuchsia-600 text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.position}</p>
              <div className="flex gap-4 mt-3 text-white/80 text-base">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expert;
