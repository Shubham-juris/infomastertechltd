import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 bg-gradient-to-br from-purple-900 to-purple-700 p-4 md:p-8 rounded-xl">
          <div className="lg:w-1/2 bg-gradient-to-br from-purple-900 to-purple-600 p-8 rounded-xl border-4 border-purple-600 shadow-2xl transform hover:scale-105 transition-all duration-500 space-y-1">
            <h2 className="text-5xl font-extrabold text-white animate__animated animate__fadeIn animate__delay-1s">
              Get In Touch
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              We are ready to hear from you and help with your queries.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white text-lg rounded-full border-2 border-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>

            <div className="space-y-1">
              {[
                { label: "Phone Number", value: "+1 514-710-7804" },
                { label: "Email", value: "wwplservices@gmail.com" },
                {
                  label: "Location",
                  value: "32 Westwinds Crescent NE, Calgary, AB T3J 5H2",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 hover:bg-purple-700 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="w-4 h-4 mt-1 bg-purple-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-900 p-8 rounded-xl border-4 border-purple-600 shadow-2xl transform hover:scale-105 transition-all duration-500 space-y-8">
            <h2 className="text-5xl font-extrabold text-white mb-6 animate__animated animate__fadeIn animate__delay-3s">
              Have Any Question?
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-4 h-36 bg-gray-800 border-2 border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-purple-600 text-white text-xl rounded-full hover:bg-purple-700 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 📍 Correct Map Section with updated address */}
      <section className="w-full px-4 py-12 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Worldwide Placement Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.357982354446!2d-113.96323332339241!3d51.1043429431154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371658df58fc7c7%3A0xfedfe0416dbf5ab7!2s32%20Westwinds%20Crescent%20NE%2C%20Calgary%2C%20AB%20T3J%205H2%2C%20Canada!5e0!3m2!1sen!2sin!4v1717998436211!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
