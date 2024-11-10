import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex  space-x-6 mr-10 ">
        <div className="bg-transparent rounded shadow-md shadow-slate-900 w-48 ml-20 h-64  flex flex-col items-center justify-center">
          <HiOutlineMail className="text-4xl" />

          <p className="underline">Email</p>
          <p>tahaawan598@gmail.com</p>
        </div>

        <div className="bg-transparent rounded shadow-md shadow-slate-900 w-48 ml-6 h-64  flex flex-col items-center justify-center">
          <FiPhoneForwarded className="text-4xl" />

          <p className="underline">Phone Number</p>
          <p>03082520161</p>
        </div>

        <div className="bg-transparent rounded shadow-md shadow-slate-900 w-48 ml-6 h-64  flex flex-col items-center justify-center">
          <CiLocationOn className="text-4xl" />

          <p className="underline">Location</p>
          <p>Karachi</p>
        </div>
      </div>

      <div className="w-[500px]   bg-cyan-700 p-12">
        <h2 className="text-center text-4xl font-bold mb-10 ">Contact me</h2>
        <form action="/contact">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-96 h-16"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Your valid Email address"
            className="w-96 h-16"
          />
          <br />
          <br />
          <textarea
            name="Message"
            className="w-96 h-32"
            placeholder="Enter Your Message"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
