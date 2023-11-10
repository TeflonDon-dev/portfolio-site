import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const items = [
    {
      id: 1,
      title: "e-pharmacy website",
      img: "/x-log.png",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi, dolor, eveniet reiciendis natus eos quos delectus nihil dignissimos odit fugiat, corrupti sed. Sed recusandae ex doloremque commodi, perspiciatis veniam?",
    },
    {
      id: 2,
      title: "OPay clone",
      img: "/OPay.png",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi, dolor, eveniet reiciendis natus eos quos delectus nihil dignissimos odit fugiat, corrupti sed. Sed recusandae ex doloremque commodi, perspiciatis veniam?",
    },
    {
      id: 3,
      title: "getLinked web app",
      img: "/getLinked.png",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi, dolor, eveniet reiciendis natus eos quos delectus nihil dignissimos odit fugiat, corrupti sed. Sed recusandae ex doloremque commodi, perspiciatis veniam?",
    },
  ];
  const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 200]);
    return (
      <section>
        <div className=" flex items-center justify-center w-full h-full overflow-hidden">
          <div className=" max-w-5xl  md:h-full mx-auto flex flex-col md:flex-row gap-32 md:gap-10 items-center justify-center">
            <div className="flex-1 h-1/2" ref={ref}>
              <img
                src={item.img}
                alt=""
                className=" object-cover w-full h-full"
              />
            </div>

            <motion.div className=" flex-1 flex flex-col gap-5" style={{ y }}>
              <h2 className=" text-xl">{item.title}</h2>
              <p className=" text-lg text-gray-500">{item.description}</p>
              <button className=" bg-orange-500 border-none rounded-md cursor-pointer px-4 py-2 w-2/5 text-black">
                See Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <div className=" relative -z-10" ref={ref}>
      <div className=" sticky top-0 left-0 pt-12 text-center text-orange-500 text-3xl">
        <h1>Featured works</h1>
        <motion.div
          className=" h-3 bg-white"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
