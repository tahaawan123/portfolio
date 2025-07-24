"use client";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/muhammad-taha-4735912b6/",
      icon: <CiLinkedin className="text-2xl" />,
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      href: "https://github.com/tahaawan123",
      icon: <FaGithubSquare className="text-2xl" />,
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      href: "https://twitter.com/",
      icon: <FaTwitter className="text-2xl" />,
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      href: "https://instagram.com/",
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        {/* Top wave divider */}
        <div className="w-full h-16 md:h-24 -mt-1" style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23111' fill-opacity='1' d='M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,101.3C672,128,768,160,864,154.7C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center top / cover" 
        }}></div>
        
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand Section */}
            <div className="md:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-500">
                  Muhammad Taha
                </h1>
                <p className="text-gray-400 mt-2 mb-4 max-w-md">
                  Front-end Developer creating modern, responsive web applications with cutting-edge technologies.
                </p>
                
                <div className="flex items-center space-x-4 mt-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gray-800 ${link.color} transition-all duration-300 hover:bg-gray-700`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Contact Section */}
            <div className="md:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 border-l-4 border-red-500 pl-3">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-red-500">
                      <HiOutlineMail className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <div className="flex items-center group">
                        <a 
                          href="mailto:tahaawan598@gmail.com" 
                          className="text-white hover:text-red-400 transition-colors"
                        >
                          tahaawan598@gmail.com
                        </a>
                        <button 
                          onClick={() => copyToClipboard('tahaawan598@gmail.com', 'email')}
                          className="ml-2 relative"
                          aria-label="Copy email"
                        >
                          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 rounded">
                            Copy
                          </span>
                        </button>
                      </div>
                      {emailCopied && (
                        <motion.span 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-400 text-sm"
                        >
                          Copied to clipboard!
                        </motion.span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-red-500">
                      <FiPhoneForwarded className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <div className="flex items-center group">
                        <a 
                          href="tel:+923082520161" 
                          className="text-white hover:text-red-400 transition-colors"
                        >
                          +92 308 2520161
                        </a>
                        <button 
                          onClick={() => copyToClipboard('+923082520161', 'phone')}
                          className="ml-2 relative"
                          aria-label="Copy phone number"
                        >
                          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 rounded">
                            Copy
                          </span>
                        </button>
                      </div>
                      {phoneCopied && (
                        <motion.span 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-400 text-sm"
                        >
                          Copied to clipboard!
                        </motion.span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 border-l-4 border-red-500 pl-3">Quick Links</h3>
                
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="flex items-center text-gray-300 hover:text-red-400 transition-colors py-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/About" className="flex items-center text-gray-300 hover:text-red-400 transition-colors py-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link href="/Projects" className="flex items-center text-gray-300 hover:text-red-400 transition-colors py-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="flex items-center text-gray-300 hover:text-red-400 transition-colors py-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to my newsletter to receive updates on my latest projects and articles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Muhammad Taha. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex items-center">
                <span className="text-gray-500 mr-2">Made with</span>
                <span className="text-red-500 mx-1">❤️</span>
                <span className="text-gray-500 ml-2">in Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;