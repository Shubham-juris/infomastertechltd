import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl space-x-8 bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-xl">
        
        {/* Left Side - Get In Touch */}
        <div className="lg:w-1/2 bg-gradient-to-br from-purple-900 to-purple-600 p-8 rounded-xl border-4 border-purple-600 shadow-2xl transform hover:scale-105 transition-all duration-500 space-y-1">
          <h2 className="text-5xl font-extrabold text-white animate__animated animate__fadeIn animate__delay-1s">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
            Nulla viverra libero id ante finibus pulvinar. Nunc ultricies aliquam enim sed sodales. 
            We are ready to hear from you and help with your queries.
          </p>
          <button className="px-1 py-1 bg-purple-600 text-white text-xl rounded-full border-2 border-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
            Contact Us
          </button>

          {/* Contact Information */}
          <div className="space-y-1">
            {[ 
              { label: 'Phone Number', value: '0761-8523-398' },
              { label: 'Email', value: 'hello@domainsite.com' },
              { label: 'Website', value: 'www.domainsite.com' },
              { label: 'Location', value: 'KLLG St. No.99, Pku City, ID 28289' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 hover:bg-purple-700 p-4 rounded-lg transition-all duration-300">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 bg-gray-900 p-8 rounded-xl border-4 border-purple-600 shadow-2xl transform hover:scale-105 transition-all duration-500 space-y-8">
          <h2 className="text-5xl font-extrabold text-white mb-6 animate__animated animate__fadeIn animate__delay-3s">
            Have Any Question?
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 h-36 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white text-xl rounded-full hover:bg-purple-700 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="mt-6 text-center">
            <p className="text-white mb-4 text-xl font-semibold">Follow Us On:</p>
            <div className="flex justify-center space-x-6">
              <span className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                <FaFacebookF />
              </span>
              <span className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                <FaTwitter />
              </span>
              <span className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                <FaInstagram />
              </span>
              <span className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
