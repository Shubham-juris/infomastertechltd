import React from 'react';

function OurServices() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <button className="mb-4 px-4 py-2 bg-gray-800 rounded-full border border-purple-600">
          Our Services
        </button>
        <h1 className="text-5xl font-bold mb-2">Advanced And Highly Reliable Performance</h1>
        <p className="text-lg">
          We deliver innovative IT solutions that empower businesses to operate smarter, faster, and more securely — creating lasting impact across industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {/* Cybersecurity Solutions */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Cybersecurity Solutions</h2>
          <p className="text-gray-400">
            Safeguard your digital infrastructure with advanced threat detection, compliance frameworks, and 24/7 security monitoring.
          </p>
          <a href="/" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* Network Infrastructure Design */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Network Infrastructure Design</h2>
          <p className="text-gray-300">
            Design and deploy high-performance network systems tailored for speed, security, and scalability.
          </p>
          <a href="/" className="mt-4 inline-block text-purple-300 hover:underline">Learn More &gt;</a>
        </div>

        {/* IT Consulting And Strategy */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">IT Consulting And Strategy</h2>
          <p className="text-gray-400">
            Align your technology with business goals through strategic planning, architecture consulting, and digital transformation roadmaps.
          </p>
          <a href="/" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* Data Backup & Disaster Recovery */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Data Backup & Disaster Recovery</h2>
          <p className="text-gray-400">
            Ensure business continuity with automated backups, fast recovery solutions, and secure off-site storage.
          </p>
          <a href="/" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* Remote IT Support */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Remote IT Support</h2>
          <p className="text-gray-400">
            Get fast and efficient support from certified technicians to resolve issues and minimize downtime, wherever you are.
          </p>
          <a href="/" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>

        {/* IT Audit And Assessment */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">IT Audit And Assessment</h2>
          <p className="text-gray-400">
            Evaluate the effectiveness of your existing IT infrastructure and identify opportunities for optimization and risk mitigation.
          </p>
          <a href="/" className="mt-4 inline-block text-purple-600 hover:underline">Learn More &gt;</a>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
