import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 p-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-10 md:mb-0 transition-transform duration-500">
        <Link href="mailto:tahaawan598@gmail.com" className="bg-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 w-60 flex flex-col items-center justify-center text-white border border-gray-700 hover:bg-gray-800">
          <HiOutlineMail className="text-5xl text-cyan-400 hover:text-cyan-300 transition duration-300" />
          <p className="underline mt-4">Email</p>
        </Link>

        <Link href="tel:03082520161" className="bg-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 w-60 flex flex-col items-center justify-center text-white border border-gray-700 hover:bg-gray-800">
          <FiPhoneForwarded className="text-5xl text-cyan-400 hover:text-cyan-300 transition duration-300" />
          <p className="underline mt-4">Phone Number</p>
        </Link>

        <Link href="https://www.google.com/maps/search/?api=1&query=Karachi" target="_blank" rel="noopener noreferrer" className="bg-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 w-60 flex flex-col items-center justify-center text-white border border-gray-700 hover:bg-gray-800">
          <CiLocationOn className="text-5xl text-cyan-400 hover:text-cyan-300 transition duration-300" />
          <p className="underline mt-4">Location</p>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md hover:shadow-2xl transition-shadow duration-300 mt-10 md:mt-16">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form action="/contact" className="space-y-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Enter Your Valid Email Address"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="Message"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full h-12 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
