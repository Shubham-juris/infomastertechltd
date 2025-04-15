import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className="font-sans">
      {/* Navbar */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center space-x-2">
            <div className="text-purple-500 text-3xl">📡</div>
            <div>
              <span className="text-white">PORTAL</span>
              <div className="text-xs text-purple-500 -mt-1">IT COMPANY</div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-purple-500">Home</a>
            <a href="#" className="hover:text-purple-500">About Us</a>
            <a href="#" className="hover:text-purple-500">Services</a>
            <a href="#" className="hover:text-purple-500">Pages</a>
            <a href="#" className="hover:text-purple-500">Blog</a>
            <a href="#" className="hover:text-purple-500">Contact Us</a>
          </nav>
        </div>
      </header>

     </div>
    
    </>
  )
}

export default Navbar
