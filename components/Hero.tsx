"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFileDownload,
} from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5,  }
    }
  };

  

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <motion.div 
          className="max-w-2xl text-center md:text-left mb-16 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl font-mono text-red-500 mb-2">
              Hello, I&apos;m
            </p>
          </motion.div>
          
          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-purple-500 to-pink-500"
            variants={itemVariants}
          >
            Muhammad Taha
          </motion.h1>
          
          {/* Title */}
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 inline-block relative">
              <span className="relative z-10">Frontend Developer</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-600 z-0"></span>
            </h2>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-xl"
            variants={itemVariants}
          >
            I craft intuitive, responsive web experiences with modern technologies.
            Passionate about creating seamless user interfaces and engaging interactions.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
            variants={containerVariants}
          >
            <Link
              href="/Cv/Taha Cv.pdf"
              target='_blank'
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 text-white py-3 px-6 rounded-full font-medium shadow-lg"
            >
              <FaFileDownload className="text-xl" /> Download CV
            </Link>
            
            <Link
              href="https://github.com/tahaawan123"
              target='_blank'

              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-full font-medium shadow-lg"
            >
              <FaGithub className="text-xl" /> GitHub
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/muhammad-taha-4735912b6/"
              target='_blank'
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium shadow-lg"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-8 mt-6"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-red-500">10+</div>
              <div className="text-gray-400">Projects</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-purple-500">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-pink-500">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/img.jpg"
                alt="Muhammad Taha - Frontend Developer"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Decorative elements around image */}
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-red-500 mix-blend-soft-light filter blur-xl animate-ping-slow"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-purple-500 mix-blend-soft-light filter blur-xl animate-ping-slow animation-delay-2000"></div>
        </motion.div>
      </div>
      
     
      
     
    </div>
  );
};

export default Hero;