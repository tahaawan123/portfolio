import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Footer Brand Section */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">Muhammad Taha</h1>
          <p className="text-gray-400">Frontend & Backend Developer</p>
        </div>

        {/* Footer Contact Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 hover:text-red-400 transition-colors">
            <HiOutlineMail className="text-2xl" />
            <p>Email: <a href="mailto:tahaawan598@gmail.com" className="underline">tahaawan598@gmail.com</a></p>
          </div>
          <div className="flex items-center space-x-3 hover:text-red-400 transition-colors">
            <FiPhoneForwarded className="text-2xl" />
            <p>Phone: <a href="tel:+923082520161" className="underline">0308-2520161</a></p>
          </div>
        </div>

        {/* Footer Social Section */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <Link href="https://www.linkedin.com/in/muhammad-taha-4735912b6/" target="_blank" className="hover:text-blue-500 transition-transform transform hover:scale-110">
            <CiLinkedin className="text-3xl" />
          </Link>
          <Link href="https://github.com/tahaawan123" target="_blank" className="hover:text-gray-500 transition-transform transform hover:scale-110">
            <FaGithubSquare className="text-3xl" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>All rights reserved © 2024 | Built with ❤️ by Muhammad Taha</p>
      </div>
    </footer>
  );
};

export default Footer;
