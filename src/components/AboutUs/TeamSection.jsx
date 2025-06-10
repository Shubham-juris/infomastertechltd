// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import Img from "../../assets/Home/profile1.png";
// import Ceo from "../../assets/Home/profile2.png";

// export default function TeamSection() {
//   const team = [
//     {
//       name: "Preeti Sharma",
//       title: "Director – Global Recruitment",
//       img: Img,
//     },
//     {
//       name: "Rahul Verma",
//       title: "Founder & CEO",
//       img: Ceo,
//     },
//   ];

//   return (
//     <section className="bg-black text-white px-6 py-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

//         <div>
//           <button className="border border-white rounded-full px-4 py-1 text-sm mb-4">
//             Meet Our Team
//           </button>
//           <h2 className="text-4xl font-semibold mb-4 leading-snug">
//             Professionals Behind <br /> Your Career Success
//           </h2>
//           <p className="text-gray-300 mb-6">
//             Our experienced team is dedicated to guiding individuals and organizations toward better opportunities, growth, and success in the competitive job market.
//           </p>
//           <button className="bg-fuchsia-600 hover:bg-fuchsia-700 px-6 py-3 rounded-full font-semibold">
//             View All Members
//           </button>
//         </div>

//         {team.map((member, index) => (
//           <div
//             key={index}
//             className="bg-white/5 rounded-xl overflow-hidden shadow-lg text-left"
//           >
//             <div className="relative h-[360px]">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 w-full bg-fuchsia-700 text-white px-6 py-4 rounded-t-2xl">
//                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                 <p className="text-sm text-gray-200 mb-3">{member.title}</p>
//                 <div className="flex space-x-4 text-xl">
//                   <FaFacebookF className="cursor-pointer hover:text-white/80" />
//                   <FaTwitter className="cursor-pointer hover:text-white/80" />
//                   <FaInstagram className="cursor-pointer hover:text-white/80" />
//                   <FaYoutube className="cursor-pointer hover:text-white/80" />
//                 </div>
//               </div>
//             </div>
