import React from "react";
import Header from "../Header/Header";
import Welcome from "./Welcome";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <div>
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
              delay: 0.4,
              duration: 0.4,
            },
          },
        }}
      >
        <Header />
        <Welcome />
      </motion.div>
    </div>
  );
};

export default Left;
