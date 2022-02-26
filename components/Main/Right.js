import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import bg from "../../Assets/background/Whangaehu.png";

function Right() {
  return (
    <div className="hidden lg:inline-grid min-h-screen w-full relative h-full shadow-sm">
      <motion.div
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
              duration: 0.3,
            },
          },
        }}
        className="relative h-full w-full"
      >
        <Image
          alt=""
          className="h-full max-h-100vh w-full object-cover"
          // src={
          //   "https://lh3.googleusercontent.com/pw/AM-JKLXqNw1BLe3A7Rfpp1EcjySqBCgGdXv4Sv3b5rWj6CZjqmdjqzutgYMD-mOeyWWc85fx0nflyFSzn1FKAb4pyiKRtNOjgVCJF9gcLbdS_ICDXhpkVHjLMgXsi33J4LKaWEFjowGYOzaLVVEIeyUKoQ5v=w1173-h879-no"
          // }
          src={bg}
          priority={true}
          layout="fill"
        />
      </motion.div>
    </div>
  );
}
export default Right;
