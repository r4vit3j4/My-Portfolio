import React from "react";
import Left from "./Left";
import Right from "./Right";
import arrow from "../../Assets/base/arrow-compressed.webp";
import Image from "next/image";

function Main() {
  const handleClick = () => {
    document.getElementById("skills").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#f0f0f0]">
      <div>
        <div className="grid relative grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
          <Left />
          <Right />
          <div className="absolute h-8 lg:h-14 w-8 lg:w-14 bottom-7 lg:bottom-4 right-7 lg:left-[41vw]">
            <div className="relative h-8 w-8 lg:w-10 lg:h-10">
              <Image
                onClick={() => handleClick()}
                className="cursor-pointer"
                src={arrow}
                layout="fill"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
