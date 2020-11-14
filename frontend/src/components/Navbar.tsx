import React from "react";
import home_bt from "../assets/home.png";
import back_prev from "../assets/left-arrow.png";

const Navbar = ({ name }) => {
  return (
    <>
      <div>
        <div className="fixed w-full bg-blue-900 text-white text-xl h-16 flex items-center justify-between p-4">
          <a href="http://localhost:3000">
            <img src={back_prev} alt="back" className="mt-1 w-6 h-6" />
          </a>
          {name}
          <a href="http://localhost:3000">
            <img src={home_bt} alt="home" className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
