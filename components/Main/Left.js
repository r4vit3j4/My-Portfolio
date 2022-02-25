import React from "react";
import Header from "../Header/Header";
import Welcome from "./Welcome";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: 125,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            duration: 0.4,
          },
        },
      }}
    >
      <Header />
      <Welcome />
    </motion.div>
  );
};

export default Left;
