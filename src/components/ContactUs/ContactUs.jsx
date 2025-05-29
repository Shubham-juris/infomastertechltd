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
              Nulla viverra libero id ante finibus pulvinar. Nunc ultricies
              aliquam enim sed sodales. We are ready to hear from you and help
              with your queries.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white text-lg rounded-full border-2 border-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>

            <div className="space-y-1">
              {[
                { label: "Phone Number", value: "14034156711" },
                { label: "Email", value: "infomastertech123@gmail.com" },
                { label: "Website", value: "www.infomastertech.com" },
                {
                  label: "Location",
                  value: "6-4526 49 AVE ,OLDS ,ALBERTA AB T4H1A4",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 hover:bg-purple-700 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="w-4 h-4 mt-1 bg-purple-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    {item.label === "Website" ? (
                      <a
                        href={`https://${item.value}`}
                        className="text-gray-300 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
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

            <div className="mt-6 text-center">
              <p className="text-white mb-4 text-xl font-semibold">
                Follow Us On:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <a
                    href="https://www.facebook.com/profile.php?id=100094103187320"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-4 py-12 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Our Canadian Office
          </h2>
          <p className="text-gray-300 mb-8">
            6-4526 49 AVE, Olds, Alberta, AB T4H1A4
          </p>
          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Olds Alberta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.9816981120923!2d-114.10394582339105!3d51.79477667187686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537500a395fd66ed%3A0x2b7e3cbcb5c3f927!2s4526%2049%20Ave%2C%20Olds%2C%20AB%20T4H%201A4%2C%20Canada!5e0!3m2!1sen!2sin!4v1715073924083!5m2!1sen!2sin"
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
