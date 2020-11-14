import React from "react";
import home_bt from "../assets/home.png";
import back_prev from "../assets/left-arrow.png";

const MainNavbar = () => {
  return (
    <div className="w-full bg-blue-900 text-white text-xl h-12 flex justify-between p-2">
        <a href="http://localhost:3000">
            <img src={back_prev} alt="back" className="mt-1" />
        </a>
        <a href="http://localhost:3000">
            <img src={home_bt} alt="home" className="h-8" />
        </a>
    </div>
  );
};

export default MainNavbar;
