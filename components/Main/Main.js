import React from "react";
import Left from "./Left";
import Right from "./Right";

function Main() {
  return (
    <div className="bg-[#f0f0f0]">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
          <Left />
          {/* <Right /> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
