import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className=" h-24">
      {/* sidebar */}
      <Sidebar />
      <div className=" max-w-7xl m-auto flex items-center justify-between px-10 lg:px-24 h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" hidden lg:inline-flex font-bold"
        >
          Teflon Dev
        </motion.span>
        <div className="flex gap-5 ml-auto lg:ml-0">
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <BsGithub />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
