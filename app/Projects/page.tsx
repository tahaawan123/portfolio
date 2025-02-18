import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Gym Website",
    imageSrc: "/gym.png",
    projectLink: "https://gym-website-custom-css.vercel.app/",
  },
  {
    title: "Pakistan Travel Places",
    imageSrc: "/pakistanTravel.png",
    projectLink: "https://pakistan-travel-places.vercel.app/",
  },
  {
    title: "Ecommerce Shopping Store",
    imageSrc: "/EcommerceStore.png",
    projectLink: "https://dynamic-ecommerce-seven.vercel.app/",
  },
  {
    title: "Comforty Furniture Store",
    imageSrc: "/ComfortyWeb.png",
    projectLink: "https://taha-api-integration-and-data-migration.vercel.app/",
  },
  {
    title: "Fast Food",
    imageSrc: "/FastFoodWeb.png",
    projectLink: "https://second-hackathon-liard.vercel.app/",
  },
  {
    title: "Dynamic Resume Builder",
    imageSrc: "/resume.png",
    projectLink: "https://hackathon-milestone.vercel.app/",
  },

  {
    title: "Server & Client Side Data Fetching",
    imageSrc: "/DataFetching.png",
    projectLink: "https://dynamic-data-fetching.vercel.app/",
  },
  {
    title: "Mock Api Integrating Sanity with Next.js",
    imageSrc: "/MockApi.png",
    projectLink: "https://mock-api-integrating-with-sanity.vercel.app/",
  },
  {
    title: "Blog of Pakistan Journey",
    imageSrc: "/BlogWeb.png",
    projectLink: "https://blog-website-three-omega.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center mb-12 hover:from-pink-500 hover:to-indigo-500 transition-all duration-500">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-indigo-500"
          >
            <Link href={project.projectLink} target="_blank">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            
            <div className="relative overflow-hidden rounded-xl">

              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-xl transform transition-all duration-500 group-hover:scale-105"
              />
            </div>
            
            <h3 className="text-xl font-semibold mt-4 text-white/90 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            
            <div className="mt-4 flex justify-between items-center">
                <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover:gap-3 ring-2 ring-transparent hover:ring-pink-500/30">
                  View Project
                  <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </Link>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Projects;