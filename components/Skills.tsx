import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity, SiShadcnui } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-24 px-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center mb-12">
        My Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

        {/* HTML */}
        <div className="flex flex-col items-center group">
          <FaHtml5 className="text-6xl text-orange-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">HTML5</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center group">
          <FaCss3Alt className="text-6xl text-blue-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">CSS3</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center group">
          <FaJsSquare className="text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">JavaScript</p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center group">
          <FaReact className="text-6xl text-cyan-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">React</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center group">
          <SiNextdotjs className="text-6xl text-white group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">Next.js</p>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center group">
          <SiTailwindcss className="text-6xl text-teal-400 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">Tailwind CSS</p>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center group">
          <SiTypescript className="text-6xl text-blue-600 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">TypeScript</p>
        </div>

        {/* Sanity */}
        <div className="flex flex-col items-center group">
          <SiSanity className="text-6xl text-red-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">Sanity</p>
        </div>

        {/* ShadCN */}
        <div className="flex flex-col items-center group">
          <SiShadcnui className="text-6xl text-purple-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">ShadCN</p>
        </div>

        {/* Node.js (for backend basics) */}
        <div className="flex flex-col items-center group">
          <FaNodeJs className="text-6xl text-green-500 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-lg">Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
