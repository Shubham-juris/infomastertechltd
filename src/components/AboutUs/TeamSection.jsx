import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      name: "Christ Matthew",
      title: "Chief Technology Officer",
      img: "/team1.jpg", // replace with actual image paths
    },
    {
      name: "Benjamin Foster",
      title: "CEO Portal",
      img: "/team2.jpg",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        {/* Left Content */}
        <div>
          <button className="border border-white rounded-full px-4 py-1 text-sm mb-4">
            Expert Team
          </button>
          <h2 className="text-4xl font-semibold mb-4 leading-snug">
            Get To Know Our IT <br /> Professionals Team
          </h2>
          <p className="text-gray-300 mb-6">
            Our success is our success and together we help our society to become a better place
            to live and work.
          </p>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 px-6 py-3 rounded-full font-semibold">
            View All
          </button>
        </div>

        {/* Team Cards */}
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl overflow-hidden shadow-lg text-left"
          >
            <div className="relative h-[360px]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-fuchsia-700 text-white px-6 py-4 rounded-t-2xl">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-200 mb-3">{member.title}</p>
                <div className="flex space-x-4 text-xl">
                  <FaFacebookF className="cursor-pointer hover:text-white/80" />
                  <FaTwitter className="cursor-pointer hover:text-white/80" />
                  <FaInstagram className="cursor-pointer hover:text-white/80" />
                  <FaYoutube className="cursor-pointer hover:text-white/80" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
