import React, { useEffect } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { RockOn } from "akar-icons";

const Footer = () => {
  useEffect(() => {
    const btn = document.querySelector("#btn");
    const tooltip = document.querySelector("#tooltip");

    btn.addEventListener("mouseenter", () => {
      tooltip.classList.remove("hidden");
    });
    btn.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });
  }, []);

  return (
    <div className="relative bg-[#f0f0f0]">
      <div className="text-center relative mb-4 text-lg">
        <p className="relative w-fit mx-auto">
          Designed and Created by{" "}
          <span
            id="btn"
            aria-describedby="tooltip"
            className="underline font-semibold"
          >
            Ravi Teja
            <span
              id="tooltip"
              role="tooltip"
              className="text-base hidden absolute right-7 bottom-7"
            >
              <RockOn className="h-6 w-6 text-gray-800" />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
