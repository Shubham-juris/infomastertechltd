import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start  md:items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold">Info</span>
            <span className="text-sm ml-2">Masteech</span>
          </div>
          <p className="text-sm max-w-xs">
            We have rapidly grown into a trusted partner for organizations seeking digital transformation, enhanced operational efficiency.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">QUICK LINK</h3>
          <ul className="space-y-2 text-sm">
            
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Pricing Plan</li>
            <li>Contact Us</li>
          </ul>
        </div>


        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <div className="space-y-2 text-sm">
            <p>PHONE</p>
            <p>0761-8523-398</p>
            <p className="mt-4">Address</p>
            
            <p>6-4526 49 AVE ,OLDS Alberta</p>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">SUBSCRIBE OUR NEWSLETTER</h3>
          <div className="flex items-center bg-gray-800 rounded-full p-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1 px-4"
            />
            <button className="bg-pink-500 text-white rounded-full px-4 py-2">
              Subscribe
            </button>
          </div>
        
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-pink-500 rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
               
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="bg-pink-500 rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.425.722-.666 1.561-.666 2.475 0 1.708.869 3.213 2.188 4.096-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="bg-pink-500 rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
               
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.043.523-4.188 1.668-1.145 1.145-1.595 2.561-1.668 4.188-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.523 3.043 1.668 4.188 1.145 1.145 2.561 1.595 4.188 1.668 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.043-.523 4.188-1.668 1.145-1.145 1.595-2.561 1.668-4.188.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.523-3.043-1.668-4.188-1.145-1.145-2.561-1.595-4.188-1.668-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 9.834c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.709-9.541c-.776 0-1.405-.629-1.405-1.405s.629-1.405 1.405-1.405 1.405.629 1.405 1.405-.629 1.405-1.405 1.405z" />
              </svg>
            </a>
            <a href="#" className="bg-pink-500 rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
             
                <path d="M23.498 6.186c-.276-1.038-1.088-1.85-2.126-2.126C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.372.515c-1.038.276-1.85 1.088-2 12 12 0 0 0 6.828 2.488v-.828h-6.828c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6 6-2.687 6-6zm-4.586 3.414l-5.656-5.657c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l4.243 4.243h-10.243c-.552 0-1 .448-1 1s.448 1 1 1h10.243l-4.243 4.243c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l5.656-5.657c.391-.391.391-1.023 0-1.414z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

   
      <div className="border-t border-pink-500 mt-8 pt-4 text-center text-sm">
        COPYRIGHT © 2023 Infotech. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
