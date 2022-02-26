import Image from "next/image";
import React from "react";
import logo from "../../Assets/base/logo.png";

const scroll = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
};

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between pt-5 px-3 md:px-10">
        <div className="relative h-16 w-16 object-contain flex-shrink-0">
          <Image
            className="object-contain"
            src={logo}
            alt="logo"
            layout="fill"
          />
        </div>
        <div className="items-center flex">
          <ul className="flex items-center space-x-3 sm:space-x-9 font-semibold text-xs sm:text-base tracking-widest text-gray-600 z-20">
            <li
              onClick={() => scroll("skills")}
              className="cursor-pointer hover:bg-gray-600 p-2 rounded-md hover:text-white hover:shadow-lg"
            >
              Skills
            </li>
            <li
              onClick={() => scroll("projects")}
              className="cursor-pointer hover:bg-gray-600 p-2 rounded-md hover:text-white hover:shadow-lg"
            >
              Projects
            </li>
            <li
              onClick={() => scroll("contact")}
              className="cursor-pointer hover:bg-gray-600 p-2 rounded-md hover:text-white hover:shadow-lg"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
