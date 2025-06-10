import React from "react";
import Profile1 from "../../assets/Home/profile1.png";
import Profile2 from "../../assets/Home/profile2.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Expert = () => {
  const teamMembers = [
    {
      name: "Anita Verma",
      position: "Head of International Recruitment",
      image: Profile1,
    },
    {
      name: "Rajiv Malhotra",
      position: "Founder & Managing Director",
      image: Profile2,
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <button className="border border-white text-white py-1 px-4 rounded-full mb-4 text-sm sm:text-base">
          Our Experts
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Meet the Professionals Behind Your Global Career Success
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
          Our experienced team is dedicated to guiding you at every step—
          from job search and training to visa support and global placement.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full mt-5 text-sm sm:text-base transition">
          View All Team
        </button>
      </div>

      {/* Team Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr w-[100%] md:w-[50%] xl:w-[20%] from-purple-700 to-fuchsia-600 text-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
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
