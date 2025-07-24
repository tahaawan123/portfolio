"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPaintBrush, 
  FaMobileAlt, 
  FaServer,
  FaRocket,
  FaChartLine
} from 'react-icons/fa';

const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    rotate: 1,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3 }
  };

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      description: "Building responsive web apps using HTML, CSS, JavaScript, Next.js, and Tailwind CSS.",
      gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with custom CSS and modern design principles.",
      gradient: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)"
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Responsive Design",
      description: "Ensuring seamless experiences across all devices with adaptive techniques.",
      gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Backend Integration",
      description: "Connecting frontend with backend services using APIs and TypeScript.",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Performance Optimization",
      description: "Enhancing website speed through advanced optimization techniques.",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "SEO & Analytics",
      description: "Improving visibility with SEO best practices and analytics integration.",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)"
    }
  ];

  return (
    <div className="relative overflow-hidden py-24 px-4" style={{ 
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" 
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ 
          background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)" 
        }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full" style={{ 
          background: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)" 
        }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full" style={{ 
          background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)" 
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-bold mb-2" style={{ 
            background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            PREMIUM SERVICES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span style={{ 
              background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Professional</span> Solutions
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ 
            background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)"
          }}></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative group"
              whileHover={hoverEffect}
            >
              {/* Card */}
              <div 
                className="h-full p-8 rounded-2xl flex flex-col relative overflow-hidden"
                style={{ 
                  background: "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl p-0.5 z-[-1]" style={{ 
                  background: service.gradient 
                }}>
                  <div className="w-full h-full rounded-2xl bg-slate-900"></div>
                </div>
                
                {/* Icon */}
                <div 
                  className="mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: service.gradient }}
                >
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h2 
                  className="text-2xl font-bold mb-4 text-white"
                >
                  {service.title}
                </h2>
                <p className="text-slate-300 mb-6 flex-grow">{service.description}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center text-sm font-medium" style={{ 
                    background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    <span>Learn more</span>
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 rounded-3xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 z-[-1]" style={{ 
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 30%, #EC4899 100%)" 
          }}></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 z-[-1] opacity-20" style={{ 
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let&apos;s create something amazing together for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)"
                }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full shadow-lg"
              >
                View My Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;