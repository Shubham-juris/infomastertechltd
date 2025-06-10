import React from 'react';

function OurServices() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="mb-4 px-4 py-2 text-xl">
          Our Services
        </h1>
        <h1 className="text-5xl font-bold mb-2">Connecting Talent to Global Opportunities</h1>
        <p className="text-lg">
          We provide comprehensive placement solutions designed to help candidates achieve career success and assist organizations in sourcing top-tier talent worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {/* International Job Placement */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">International Job Placement</h2>
          <p className="text-gray-400">
            Explore overseas opportunities with personalized support, documentation guidance, and trusted employer connections across the globe.
          </p>
        </div>

        {/* Career Counseling & Guidance */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Career Counseling & Guidance</h2>
          <p className="text-gray-300">
            Get expert advice on career planning, resume building, and interview preparation to align your skills with the right job opportunities.
          </p>
        </div>

        {/* Employer Recruitment Services */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Employer Recruitment Services</h2>
          <p className="text-gray-400">
            We partner with companies to identify, screen, and place qualified candidates that match organizational needs and culture.
          </p>
        </div>

        {/* Student Placement Programs */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Student Placement Programs</h2>
          <p className="text-gray-400">
            Supporting freshers and final-year students with internships and entry-level job placements through campus drives and training.
          </p>
        </div>

        {/* Document & Visa Assistance */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Document & Visa Assistance</h2>
          <p className="text-gray-400">
            Simplifying the process of visa applications, offer letters, and other required documentation for international placements.
          </p>
        </div>

        {/* Skill Development & Training */}
        <div className="bg-gray-900 p-6 rounded-lg border-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Skill Development & Training</h2>
          <p className="text-gray-400">
            Enhance employability through customized training modules, soft skills development, and technical workshops.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
