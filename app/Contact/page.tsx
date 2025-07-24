"use client"
import React, { useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        
        stiffness: 100,
        damping: 15
      }
    }
  };

  const formAnimation = {
    hidden: { scale: 0.95, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
      
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8"
    >
      <motion.div 
        className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mb-10 md:mb-0"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Email Card */}
        <motion.div variants={item}>
          <Link 
            href="mailto:tahaawan598@gmail.com" 
            className="group relative bg-gradient-to-br from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-72 flex flex-col items-center justify-center text-white border border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,219,222,0.3)] hover:border-[#00dbde]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-full mb-6">
                <HiOutlineMail className="text-4xl text-white" />
              </div>
              <p className="text-xl font-semibold mt-4 group-hover:text-[#00dbde] transition-colors duration-300">Email</p>
              <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors duration-300">tahaawan598@gmail.com</p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-2xl"></div>
          </Link>
        </motion.div>

        {/* Phone Card */}
        <motion.div variants={item}>
          <Link 
            href="tel:03082520161" 
            className="group relative bg-gradient-to-br from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-72 flex flex-col items-center justify-center text-white border border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,219,222,0.3)] hover:border-[#00dbde]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-full mb-6">
                <FiPhoneForwarded className="text-4xl text-white" />
              </div>
              <p className="text-xl font-semibold mt-4 group-hover:text-[#00dbde] transition-colors duration-300">Phone</p>
              <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors duration-300">0308 2520161</p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-2xl"></div>
          </Link>
        </motion.div>

        {/* Location Card */}
        <motion.div variants={item}>
          <Link 
            href="https://www.google.com/maps/search/?api=1&query=Karachi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-72 flex flex-col items-center justify-center text-white border border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,219,222,0.3)] hover:border-[#00dbde]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-full mb-6">
                <CiLocationOn className="text-4xl text-white" />
              </div>
              <p className="text-xl font-semibold mt-4 group-hover:text-[#00dbde] transition-colors duration-300">Location</p>
              <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors duration-300">Karachi, Pakistan</p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-2xl"></div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        className="relative bg-gradient-to-br from-[#0f0c29]/80 to-[#24243e]/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 mt-12"
        variants={formAnimation}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 hover:opacity-10 blur-xl transition-all duration-500 rounded-2xl"></div>
        
        <h2 className="text-center text-3xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde] to-[#fc00ff]">
            Contact Me
          </span>
        </h2>
        
        <form action="/contact" className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full h-14 px-5 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00dbde] text-white placeholder-gray-400 transition-all duration-300"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </div>
          
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your Valid Email Address"
              className="w-full h-14 px-5 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00dbde] text-white placeholder-gray-400 transition-all duration-300"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </div>
          
          <div className="relative">
            <textarea
              name="Message"
              className="w-full min-h-[120px] p-5 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00dbde] text-white placeholder-gray-400 resize-none transition-all duration-300"
              placeholder="Enter Your Message"
            ></textarea>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </div>
          
          <motion.button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a8de] to-[#d400ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;