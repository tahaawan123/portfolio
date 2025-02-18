import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'; // Added LinkedIn Icon

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b-4 border-red-400 py-24 px-6 md:px-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black animate-fadeIn transition-all duration-500 shadow-xl hover:shadow-2xl">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 hover:animate-bounce transition duration-300">
          Hi, I&#39;m Muhammad Taha
        </h1>
        <p className="text-lg md:text-xl mt-6 font-serif text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
          Welcome to my portfolio! I am a dedicated frontend developer with a passion for crafting intuitive,
          visually appealing, and responsive web experiences. Explore my work, built using the latest technologies like Next.js, HTML, CSS, and JavaScript.
        </p>

        <div className="flex justify-center md:justify-start mt-8 gap-4">
          <Link
            href="https://github.com/tahaawan123"
            target="_blank"
            className="flex items-center gap-2 bg-black hover:bg-gray-700 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-taha-4735912b6/" 
            target="_blank"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaLinkedin /> LinkedIn
          </Link>
        </div>

        <div className="flex justify-center md:justify-start mt-4">
          <a
            href="/Cv/TahaCv.pdf"
            download
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaFileDownload /> Download CV
          </a>
        </div>
      </div>

      <div className="transition-transform transform hover:scale-110 mt-6 md:mt-0">
        <Image
          src="/img.jpg"
          alt="Profile-Pic"
          width={300}
          height={200}
          className="rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
