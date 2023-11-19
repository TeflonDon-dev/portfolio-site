import React, { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./togglebutton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white text-black "
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-5/6 lg:w-96 bg-white z-50"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
