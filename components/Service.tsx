import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-24 px-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center mb-12">
        My Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Web Development */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <FaCode className="text-5xl text-indigo-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
          <p className="text-gray-400">Building responsive and modern web applications using HTML, CSS, JavaScript, Next.js, and Tailwind CSS.</p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <FaPaintBrush className="text-5xl text-pink-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">UI/UX Design</h2>
          <p className="text-gray-400">Creating intuitive and visually appealing interfaces with custom CSS and modern design principles.</p>
        </div>

        {/* Mobile Responsive Design */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <FaMobileAlt className="text-5xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Responsive Design</h2>
          <p className="text-gray-400">Ensuring seamless experiences across devices with mobile-first and adaptive design techniques.</p>
        </div>

        {/* Backend Integration */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <FaServer className="text-5xl text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Backend Integration</h2>
          <p className="text-gray-400">Connecting frontend with backend services using Sanity, APIs, and TypeScript for smooth functionality.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;
