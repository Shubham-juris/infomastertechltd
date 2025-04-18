import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-[#0e031c] to-[#1c0230] text-white pt-16 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10 mb-10">

        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-purple-500">Info</span>Master Tech
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            We have rapidly grown into a trusted partner for organizations seeking digital transformation,
            enhanced operational efficiency.
          </p>   
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-purple-400">Home</a></li>
            <li><a href="#" className="hover:text-purple-400">About Us</a></li>
            <li><a href="#" className="hover:text-purple-400">Services</a></li>
            <li><a href="#" className="hover:text-purple-400">Pricing Plan</a></li>
            <li><a href="#" className="hover:text-purple-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Phone</span><br />
            0761-8523-398
          </p>
          <p className="text-sm text-gray-300 mt-4">
            <span className="font-semibold text-white">Email</span><br />
            hello@domainsite.com
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Our Newsletter</h3>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-l-full bg-[#1a0535] text-white focus:outline-none border border-purple-600"
            />
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 px-5 py-2 rounded-r-full text-white">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 text-xl text-fuchsia-400">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-fuchsia-700 pt-6 pb-4 text-center text-sm text-purple-300">
        Copyright © 2024 Rometheme. All Rights Reserved.
      </div>
    </footer> 
    </>
  )
}

export default Footer
