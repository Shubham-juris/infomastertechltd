import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0e031c] to-[#1c0230] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-purple-500">Worldwide</span> Placement Services
            </h2>
            <p className="text-sm text-gray-300">
              We have rapidly grown into a trusted partner for organizations
              seeking talent solutions, workforce optimization, and strategic staffing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">QUICK LINK</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-purple-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-purple-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-600 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-sm text-gray-300 space-y-4">
              <div>
                <span className="font-semibold text-white">Phone</span>
                <br />
                +1 514-710-7804
              </div>
              <div>
                <span className="font-semibold text-white">Email</span>
                <br />
                wwplservices@gmail.com
              </div>
            </div>
          </div>

          {/* Newsletter + Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe Our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-grow p-2 rounded-full sm:rounded-l-full sm:rounded-r-none bg-[#1a0535] text-white border border-purple-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 px-5 py-2 rounded-full sm:rounded-r-full sm:rounded-l-none text-white"
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 text-xl text-fuchsia-400 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100094103187320"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-fuchsia-700 pt-6 pb-4 text-center text-sm text-purple-300">
          © 2023 Worldwide Placement Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
