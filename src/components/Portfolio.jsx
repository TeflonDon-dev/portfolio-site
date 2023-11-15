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
        "This is an e-pharmacy outlet that offers quick and effective purchase of essential medications. Stack used include: HTML5, CSS3, tailwind CSS, react, mongoDB, Redux toolkit",
      link: "https://x-log-frontend.vercel.app",
    },
    {
      id: 2,
      title: "OPay clone",
      img: "/OPay.png",
      description:
        "An OPay business clone built using HTML5, CSS3, tailwind CSS, react, framer-motion, Redux toolkit",
      link: "https://o-pay-business-clone.vercel.app/",
    },
    {
      id: 3,
      title: "getLinked web app",
      img: "/getLinked.png",
      description:
        " A hackathon challenge I participated in. Stack used include: HTML5, CSS3, tailwind CSS, react, Redux toolkit ",
      link: "https://mern-5-get-linked.vercel.app",
    },
  ];
  const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-150, 200]);
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

            <motion.div
              className=" flex-1 flex flex-col gap-5 p-5"
              style={{ y }}
            >
              <h2 className=" text-xl">{item.title}</h2>
              <p className=" text-lg text-gray-500">{item.description}</p>
              <button className=" bg-orange-500 border-none rounded-md cursor-pointer px-4 py-2 w-2/5 text-black">
                <a href={item.link}> See Demo</a>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <div className=" relative z-10" ref={ref}>
      <div className=" sticky top-0 left-0 pt-12 text-center text-orange-500 text-xl md:text-4xl font-bold">
        <h1>Featured works</h1>
        <motion.div
          className=" h-2 bg-white"
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
