import React from "react";
import { motion } from "framer-motion";
import { MdDownloadForOffline, MdOutlineEmail } from "react-icons/md";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center gap-10 justify-center h-[calc(100vh-50px)] mt-20 lg:mt-0 -z-20 max-w-4xl m-auto"
      style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
    >
      <motion.div
        className=" basis-1/2 self-center"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className=" lg:text-3xl text-lg text-purple-800"
          variants={textVariants}
        >
          JOSHUA OKORIE
        </motion.h2>
        <motion.h2
          className=" text-3xl lg:text-7xl my-5"
          variants={textVariants}
        >
          MERN DEVELOPER
        </motion.h2>
        <div className=" mb-5">
          <motion.button
            className=" p-2 lg:p-3 border border-white bg-transparent text-white mr-5 cursor-pointer font-medium rounded-md"
            variants={textVariants}
          >
            <p className=" flex items-center gap-2">
              <span>
                <MdDownloadForOffline className=" w-5 h-5" />
              </span>{" "}
              Resume
            </p>
          </motion.button>
          <motion.button
            className=" p-2 lg:p-3 border border-white bg-transparent text-white mr-5 cursor-pointer font-medium rounded-md"
            variants={textVariants}
          >
            <p className=" flex items-center gap-2">
              <span>
                <MdOutlineEmail className=" w-5 h-5" />
              </span>{" "}
              contact me
            </p>
          </motion.button>
        </div>
        <motion.img
          src="/scroll.png"
          alt=""
          animate="scrollButton"
          variants={textVariants}
        />
      </motion.div>
      <motion.div
        className=" absolute text-[50vh] -bottom-[100px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        web developer public health advocate pharmacist
      </motion.div>
      <div className=" basis-1/2 h-full w-full flex justify-center pb-16">
        <img src="/joshua.jpg" alt="" className=" w-96 rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
