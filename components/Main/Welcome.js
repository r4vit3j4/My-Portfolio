import { DesktopComputerIcon } from "@heroicons/react/outline";
import { Devices } from "akar-icons";
import Image from "next/image";
import React, { useState } from "react";

const Welcome = () => {
  return (
    <div className="flex-1 flex flex-col justify-center p-10 mt-5">
      <div>
        <p className="text-5xl text-gray-500">Hi,</p>
        <h1 className="text-7xl text-gray-500 font-semibold">
          This is{" "}
          <span id="name" className="text-gray-900 inline-block underline z-50">
            Ravi Teja
          </span>
        </h1>
      </div>
      <div className="mt-14">
        <p className="text-lg">
          A{" "}
          <span
            id="sd"
            className="underline relative font-semibold"
            onMouseEnter={() => {
              document.querySelector("#sdicon").classList.remove("hidden");
            }}
            onMouseLeave={() => {
              document.querySelector("#sdicon").classList.add("hidden");
            }}
          >
            Software Developer
            <span>
              {
                <DesktopComputerIcon
                  id="sdicon"
                  className="h-7 w-7 hidden absolute bottom-7 left-[50%] -translate-x-[50%]"
                />
              }
            </span>
          </span>{" "}
          and a{" "}
          <span
            onMouseEnter={() => {
              document.querySelector("#devices").classList.remove("hidden");
            }}
            onMouseLeave={() => {
              document.querySelector("#devices").classList.add("hidden");
            }}
            className="underline relative font-semibold"
          >
            Tech Enthusiast{" "}
            <span>
              {
                <Devices
                  id="devices"
                  className="h-7 w-7 hidden absolute bottom-7 left-[50%] -translate-x-[50%]"
                />
              }
            </span>
          </span>{" "}
          with a keen interest in building web and mobile applications
        </p>
      </div>
      <div className="sm:my-14 my-8">
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/11IRqoT8y_aRfBr9lQiw7fdxO43AxKQwA/view?usp=sharing"
          target={"_blank"}
          className="px-3 py-2 font-bold bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md"
        >
          See My Resume
        </a>
      </div>
      <div className="mt-0">
        <p className="font-bold text-xl text-gray-700">About Me</p>
        <p className="text-lg mt-2">
          I&apos;m an undergraduate student from Indian Institute of Information
          Technology, Kottayam, pursuing Bachelor&apos;s degree in computer
          science and engineering
        </p>
      </div>
    </div>
  );
};

export default Welcome;
