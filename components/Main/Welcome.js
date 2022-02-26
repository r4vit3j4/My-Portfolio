import Image from "next/image";
import React, { useState } from "react";
import arrow from "../../Assets/base/arrow-compressed.webp";

const Welcome = () => {
  // const [isShown, SetIsShown] = useState(false);

  return (
    <div className="p-10 mt-7 xl:mt-24 relative">
      <div>
        <p className="text-5xl text-gray-500">Hi,</p>
        <h1 className="text-7xl text-gray-500 font-semibold">
          This is{" "}
          <span
            // onMouseOver={() => handleToolTip()}
            id="name"
            className="text-gray-900 inline-block underline z-50"
          >
            Ravi Teja
          </span>
        </h1>
      </div>
      <div className="mt-14">
        <p className="text-lg">
          A <span className="underline font-semibold">Software Developer</span>{" "}
          and a <span className="underline font-semibold">Tech Enthusiast</span>{" "}
          with a keen interest in building web and mobile applications
        </p>
      </div>
      <div className="mt-7">
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/1uLaPPJBCkH-T_RmtgV75j3PLhr5b02ze/view?usp=sharing"
          target={"_blank"}
          className="px-3 py-2 font-bold bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md"
        >
          See My Resume
        </a>
      </div>
      <div className="mt-10">
        <p className="font-bold text-xl text-gray-700">About Me</p>
        <p className="text-lg mt-2">
          I&apos;m an undergraduate student from Indian Institute of Information
          Technology, Kottayam, pursuing Bachelor&apos;s degree in computer
          science and engineering
        </p>
      </div>
      <div className="absolute h-8 w-8 bottom-11 right-3 sm:bottom-1 sm:right-10">
        <div className="relative h-8 w-8">
          <Image className="" src={arrow} layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
