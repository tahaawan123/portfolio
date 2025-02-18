import React from 'react';
import Image from 'next/image';
import { FaUser, FaRoute, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-24 px-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center mb-12">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">

        {/* Left Side: Image */}
        <div className="w-full md:w-1/3 text-center">
          <Image
            src="/img.jpg"
            alt="Muhammad Taha"
            width={300}
            height={300}
            className="rounded-full shadow-lg animate__animated animate__fadeIn animate__delay-1s"
          />
        </div>

        {/* Right Side: Sections */}
        <div className="w-full md:w-2/3 space-y-8 relative">

          {/* Introduction Section */}
          <div className="relative flex items-start">
            <FaUser className="text-white text-4xl absolute -left-4 top-0 transform transition-transform duration-300 hover:scale-110" />
            <div className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold text-pink-500">Introduction</h2>
              <p className="text-lg text-slate-300 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
                Hello, I am Muhammad Taha, a Frontend Web Developer with a solid foundation in HTML, Custom CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, and ShadCN. I have a basic understanding of backend development, including working with Sanity and creating efficient APIs. I enjoy building dynamic and responsive web applications, providing seamless user experiences, and continuously learning new technologies to stay updated with modern web development trends.
              </p>
            </div>
          </div>

          {/* My Journey Section */}
          <div className="relative flex items-start">
            <FaRoute className="text-white text-4xl absolute -left-4 top-0 transform transition-transform duration-300 hover:scale-110" />
            <div className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold text-pink-500">My Journey</h2>
              <p className="text-lg text-slate-300 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
                My journey in web development began with a curiosity to build something interactive on the web. Over the years, I&#39;ve learned to create efficient and scalable applications, using modern frameworks like Next.js. My goal is to build user-friendly applications while staying updated with the latest technologies and trends.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="relative flex items-start">
            <FaGraduationCap className="text-white text-4xl absolute -left-4 top-0 transform transition-transform duration-300 hover:scale-110" />
            <div className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold text-pink-500">Education</h2>
              <p className="text-lg text-slate-300 leading-relaxed animate__animated animate__fadeIn animate__delay-4s">
                I completed my Matriculation in 2016 and Intermediate in 2018 from Ali Public Higher Secondary School, Bhiria Road, Sindh. I recently completed my BSc in 2024 from Khairpur University. Currently, I am preparing to study Agentic AI to deepen my knowledge in artificial intelligence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
