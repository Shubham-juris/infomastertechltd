import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full bg-black text-white font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <div className="text-purple-500 text-3xl">📡</div>
          <div>
            <span className="text-white">Info</span>
            <div className="text-xs text-purple-500 -mt-1">Master Tech</div>
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
