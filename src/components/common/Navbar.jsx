import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white font-sans">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <div className="text-purple-500 text-3xl">📡</div>
          <div>
            <span className="text-white">PORTAL</span>
            <div className="text-xs text-purple-500 -mt-1">IT COMPANY</div>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">&#9776;</span> 
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-purple-500">Home</Link>
          <Link to="/about" className="hover:text-purple-500">About Us</Link>
          <Link to="#services" className="hover:text-purple-500">Services</Link>
          <Link to="#pages" className="hover:text-purple-500">Pages</Link>
          <Link to="#blog" className="hover:text-purple-500">Blog</Link>
          <Link to="#contact" className="hover:text-purple-500">Contact Us</Link>
        </nav>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 text-sm font-medium">
          <Link to="/" className="hover:text-purple-500">Home</Link>
          <Link to="/about" className="hover:text-purple-500">About Us</Link>
          <Link to="#services" className="hover:text-purple-500">Services</Link>
          <Link to="#pages" className="hover:text-purple-500">Pages</Link>
          <Link to="#blog" className="hover:text-purple-500">Blog</Link>
          <Link to="#contact" className="hover:text-purple-500">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
