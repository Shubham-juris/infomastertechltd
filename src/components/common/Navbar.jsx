import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logooo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full bg-black text-white font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} className="w-20 h-20 mt-2 mr-5" alt="Logo" />
          <div>
            <span className="text-white leading-tight block">WORLDWIDE</span>
            <span className="text-purple-600 text-sm tracking-widest block">PLACEMENT SERVICES</span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-purple-500">Home</Link>
          <Link to="/about" className="hover:text-purple-500">About Us</Link>
          <Link to="/services" className="hover:text-purple-500">Services</Link>
          <Link to="/pages" className="hover:text-purple-500">Pages</Link>
          <Link to="/contact" className="hover:text-purple-500">Contact Us</Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 text-sm font-medium">
          <Link to="/" onClick={handleLinkClick} className="hover:text-purple-500">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-purple-500">About Us</Link>
          <Link to="/services" onClick={handleLinkClick} className="hover:text-purple-500">Services</Link>
          <Link to="/pages" onClick={handleLinkClick} className="hover:text-purple-500">Pages</Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-purple-500">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
