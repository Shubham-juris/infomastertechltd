import React from 'react';

function OurServices() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <button className="mb-4 px-4 py-2 bg-gray-800 rounded-full border border-purple-600">
          Our Services
        </button>
        <h1 className="text-5xl font-bold mb-2">Advanced And Highly Reliable Performance</h1>
        <p className="text-lg">Our success is our success and together we help our society to become a better place to live and work.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {/* Cybersecurity Solutions */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Cybersecurity Solutions</h2>
          <p className="text-gray-400">
            Praesent lorem placerat, purus laoreet ultricies voluptat, est lectus dapibus magna, in interdum sem tellus quis sem.
          </p>
          <a href="#" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* Network Infrastructure Design */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Network Infrastructure Design</h2>
          <p className="text-gray-400">
            Praesent lorem placerat, purus laoreet ultricies voluptat, est lectus dapibus magna, in interdum sem tellus quis sem.
          </p>
          <a href="#" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* IT Consulting And Strategy */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">IT Consulting And Strategy</h2>
          <p className="text-gray-400">
            Praesent lorem placerat, purus laoreet ultricies voluptat, est lectus dapibus magna, in interdum sem tellus quis sem.
          </p>
          <a href="#" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* Data Backup Disaster Recovery */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Data Backup Disaster Recovery</h2>
          <p className="text-gray-400">
            Praesent lorem placerat, purus laoreet ultricies voluptat, est lectus dapibus magna, in interdum sem tellus quis sem.
          </p>
          <a href="#" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* Remote IT Support */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Remote IT Support</h2>
          <p className="text-gray-400">
            Praesent lorem placerat, purus laoreet ultricies voluptat, est lectus dapibus magna, in interdum sem tellus quis sem.
          </p>
          <a href="#" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* IT Audit And Assessment */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">IT Audit And Assessment</h2>
          <p className="text-gray-400">
            Praesent lorem placerat, purus laoreet ultricies voluptat, est lectus dapibus magna, in interdum sem tellus quis sem.
          </p>
          <a href="#" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>
      </div>
    </div>
  );
}

export default OurServices;