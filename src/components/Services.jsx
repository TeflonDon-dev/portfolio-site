import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className=" h-full flex flex-col justify-between gap-10 pt-5 pb-10"
      variants={variants}
      // animate="animate"
      // whileInView="animate"
      animate={isInView && "animate"}
      initial="initial"
      style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
    >
      <motion.div
        className="basis-1/4 self-end flex items-center gap-5 "
        variants={variants}
      >
        <p className=" font-medium text-gray-500">
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className="hidden lg:inline-flex lg:w-96  lg:border-t-4 lg:border-gray-700" />
      </motion.div>
      <motion.div
        className=" basis-2/4 flex flex-col items-center gap-5"
        variants={variants}
      >
        <div className=" flex items-center gap-5">
          <img
            src="/people.webp"
            alt=""
            className=" w-64 h-16 rounded-full object-cover"
          />
          <h1 className=" lg:text-6xl">
            <motion.span
              whileHover={{ color: "orange" }}
              className=" font-bold"
            >
              Unique
            </motion.span>{" "}
            Ideas
          </h1>
        </div>
        <div className=" flex items-center gap-5">
          <h1 className=" lg:text-6xl">
            <motion.span
              className=" font-bold"
              whileHover={{ color: "orange" }}
            >
              For your
            </motion.span>{" "}
            business.
          </h1>
          <button className=" font-medium px-7 py-3 text-black rounded-3xl bg-orange-400 border-none cursor-pointer text-lg">
            what we do
          </button>
        </div>
      </motion.div>
      <motion.div
        className=" basis-2/4 flex flex-col lg:flex-row items-center max-w-4xl m-auto "
        variants={variants}
      >
        <motion.div
          className=" p-5 border border-gray-400 flex flex-col items-center gap-2"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, atque.
          </p>
          <button>go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className=" p-5 border border-gray-400 flex flex-col items-center gap-2"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, atque.
          </p>
          <button>go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className=" p-5 border border-gray-400 flex flex-col items-center gap-2"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, atque.
          </p>
          <button>go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className=" p-5 border border-gray-400 flex flex-col items-center gap-2"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, atque.
          </p>
          <button>go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
