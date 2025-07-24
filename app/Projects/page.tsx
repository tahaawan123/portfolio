"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gym Website",
    imageSrc: "/gym.png",
    projectLink: "https://gym-website-flax-three.vercel.app/",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    title: "Pakistan Travel Places",
    imageSrc: "/pakistanTravel.png",
    projectLink: "https://pakistan-travel-places.vercel.app/",
    gradient: "from-emerald-500 to-cyan-600"
  },
  {
    title: "Ecommerce Shopping Store",
    imageSrc: "/EcommerceStore.png",
    projectLink: "https://dynamic-ecommerce-seven.vercel.app/",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "Comforty Furniture Store",
    imageSrc: "/ComfortyWeb.png",
    projectLink: "https://taha-api-integration-and-data-migration.vercel.app/",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    title: "Fast Food",
    imageSrc: "/FastFoodWeb.png",
    projectLink: "https://second-hackathon-liard.vercel.app/",
    gradient: "from-lime-500 to-green-600"
  },
  {
    title: "Dynamic Resume Builder",
    imageSrc: "/resume.png",
    projectLink: "https://hackathon-milestone.vercel.app/",
    gradient: "from-violet-500 to-blue-600"
  },
  {
    title: "Server & Client Side Data Fetching",
    imageSrc: "/DataFetching.png",
    projectLink: "https://dynamic-data-fetching.vercel.app/",
    gradient: "from-sky-500 to-teal-600"
  },
  {
    title: "Mock Api Integrating Sanity with Next.js",
    imageSrc: "/MockApi.png",
    projectLink: "https://mock-api-integrating-with-sanity.vercel.app/",
    gradient: "from-fuchsia-500 to-purple-600"
  },
  {
    title: "Blog of Pakistan Journey",
    imageSrc: "/BlogWeb.png",
    projectLink: "https://blog-website-three-omega.vercel.app/",
    gradient: "from-amber-500 to-red-600"
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        stiffness: 120 
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde] to-[#fc00ff] animate-text">
            PROJECTS
          </span>
          <div className="mt-3 w-32 h-1.5 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] mx-auto rounded-full"></div>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <Link href={project.projectLink} target="_blank" className="block h-full">
                <div className="h-full flex flex-col bg-gradient-to-b from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(0,219,222,0.3)] hover:border-[#00dbde]">
                  {/* Image container with gradient overlay */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    <div className="aspect-video relative">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Card footer */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00dbde] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-gray-700">
                      <button className="w-full py-3 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 hover:shadow-lg hover:shadow-[#00dbde]/30">
                        View Project
                        <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating gradient border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00dbde] transition-all duration-500 pointer-events-none z-10"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-2xl"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;