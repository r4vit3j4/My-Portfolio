import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Right() {
  return (
    <motion.div
      className="hidden lg:block relative h-full shadow-sm"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.6,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.6,
          },
        },
      }}
    >
      <div className="relative h-full">
        <Image
          priority={true}
          className="h-full w-full object-cover"
          src={"https://i.ibb.co/B29BF00/Whangaehu.png"}
          layout="fill"
        />
      </div>
      {/* <motion.div
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
              delay: 0.6,
              duration: 0.5,
            },
          },
        }}
        className="absolute top-72 left-64"
      >
        <div className="relative h-50 w-50">
          <Image
            className="z-50 object-contain"
            src={"https://i.ibb.co/TBzR5S0/avatar.png"}
            width={200}
            height={200}
          />
        </div>
      </motion.div> */}
    </motion.div>
  );
}
// https://i.ibb.co/0Z6Bf6m/Inn.png
export default Right;
