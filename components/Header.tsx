"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/About", label: "About Me", icon: <FaUser /> },
    { href: "/Projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "/Contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-xl py-2'
        : 'bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4'
    }`}>
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.h1 
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500"
                whileHover={{ scale: 1.05 }}
              >
                Taha Awan
              </motion.h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul 
            className="hidden md:flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-white bg-gradient-to-r from-red-500 to-purple-600 shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-2 text-sm">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Navigation Trigger */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <FaTimes className="text-xl" />
                  ) : (
                    <FaBars className="text-xl" />
                  )}
                </motion.button>
              </SheetTrigger>
              
              {/* Mobile Navigation Content */}
              <AnimatePresence>
                {isMenuOpen && (
                  <SheetContent 
                    side="left" 
                    className="bg-gradient-to-b from-gray-900 to-black text-white w-full max-w-xs"
                    onInteractOutside={(e) => e.preventDefault()}
                  >
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="h-full flex flex-col pt-16"
                    >
                      <ul className="space-y-6">
                        {navLinks.map((link) => (
                          <motion.li 
                            key={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`flex items-center px-4 py-3 rounded-r-full text-lg transition-all ${
                                isActive(link.href)
                                  ? 'text-white bg-gradient-to-r from-red-500 to-purple-600 font-medium'
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                              }`}
                            >
                              <span className="mr-3 text-red-500">{link.icon}</span>
                              {link.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto pb-8 px-4">
                        <div className="border-t border-gray-700 pt-4">
                          <p className="text-gray-400 text-sm">
                            Front-End Developer & UI/UX Enthusiast
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </SheetContent>
                )}
              </AnimatePresence>
            </Sheet>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;