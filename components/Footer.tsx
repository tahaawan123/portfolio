import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="h-36 bg-black  text-white ">
      <h2 className="text-center text-white">All rights reserved © 2024 </h2>
        <div className="flex  ">
            <div className="ml-20 mt-14">
          <HiOutlineMail  className="text-4xl"/>
          <p className="underline"> Email:tahaawan598@gmail.com</p>
          </div>

          <div className="ml-40 mt-14">
            <FiPhoneForwarded className="text-4xl"/>
            <p className="underline">Phone Number:03082520161</p>
          </div>

          <div className="ml-40 mt-14">
            <Link href={"https://www.linkedin.com/in/muhammad-taha-4735912b6/"}>
              {" "}
              <CiLinkedin className="text-4xl " /> LinkedIn
            </Link>
          </div>

          <div className="ml-40 mt-14">
            <Link href={"https://github.com/tahaawan123"}>
              {" "}
              <FaGithubSquare className="text-4xl" /> GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
