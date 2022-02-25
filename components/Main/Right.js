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
            duration: 0.5,
          },
        },
      }}
    >
      <div className="relative h-full">
        <Image
          alt=""
          className="h-full w-full object-cover"
          src={"https://i.ibb.co/PTtFrXB/Whangaehu.png"}
          layout="fill"
        />
      </div>
    </motion.div>
  );
}
export default Right;
