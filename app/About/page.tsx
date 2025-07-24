import React from 'react';
import { FaUser, FaRoute, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde] to-[#fc00ff] animate-text">
            About Me
          </span>
          <div className="mt-2 w-32 h-1 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] mx-auto rounded-full"></div>
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
         

          {/* Content Sections */}
          <div className="flex-1 space-y-10">
            {/* Introduction Card */}
            <div className="bg-gradient-to-r from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm p-6 rounded-xl border border-[#302b63] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#00dbde] to-[#fc00ff] rounded-full">
                  <FaUser className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde] to-[#fc00ff] mb-2">
                    Introduction
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    Hello, I am Muhammad Taha, a Frontend Web Developer with a solid foundation in HTML, Custom CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, and ShadCN. I have a basic understanding of backend development, including working with Sanity and creating efficient APIs. I enjoy building dynamic and responsive web applications, providing seamless user experiences, and continuously learning new technologies to stay updated with modern web development trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Journey Card */}
            <div className="bg-gradient-to-r from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm p-6 rounded-xl border border-[#302b63] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 delay-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#00dbde] to-[#fc00ff] rounded-full">
                  <FaRoute className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde] to-[#fc00ff] mb-2">
                    My Journey
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    My journey in web development began with a curiosity to build something interactive on the web. Over the years, I&apos;ve learned to create efficient and scalable applications, using modern frameworks like Next.js. My goal is to build user-friendly applications while staying updated with the latest technologies and trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-r from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm p-6 rounded-xl border border-[#302b63] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 delay-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#00dbde] to-[#fc00ff] rounded-full">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde] to-[#fc00ff] mb-2">
                    Education
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    I completed my Matriculation in 2016 and Intermediate in 2018 from Ali Public Higher Secondary School, Bhiria Road, Sindh. I recently completed my BSc in 2024 from Khairpur University. Currently, I am preparing to study Agentic AI to deepen my knowledge in artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;