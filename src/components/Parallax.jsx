import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      className=" w-full h-full relative flex items-center justify-center -z-10 overflow-hidden"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 className=" text-2xl lg:text-6xl" style={{ y: yText }}>
        {type === "services" ? "what we do?" : "what we did?"}
      </motion.h1>
      <motion.div className=" bg-[url('/mountains.png')] bg-cover bg-bottom absolute w-full h-full z-30"></motion.div>
      <motion.div
        className=" bg-[url('/planets.png')] bg-cover bg-bottom absolute w-full h-full z-2 z-20"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className=" bg-[url('/stars.png')] bg-cover bg-bottom absolute w-full h-full  z-10"
        style={{ x: yBg }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
