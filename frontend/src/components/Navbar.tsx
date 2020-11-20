import React from "react";
import home_bt from "../assets/home.png";
import back_prev from "../assets/left-arrow.png";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <>
      <div>
<<<<<<< HEAD
        <div className="w-full bg-blue-900 text-white text-xl h-16 flex items-center justify-between p-4">
          <a href="/Home">
            <img src={back_prev} alt="back" className="mt-1 w-6 h-6" />
          </a>
          {name}
          <a href="/Home">
            <img src={home_bt} alt="home" className="w-8 h-8" />
          </a>
=======
        <div className="w-full bg-blue-900 text-white text-xl h-16 flex items-center justify-between p-6">
          <Link to="/">
            <img
              src={back_prev}
              alt="back"
              style={{ width: "25px", height: "23px" }}
            />
          </Link>
          {name}
          <Link to="/">
            <img
              src={home_bt}
              alt="home"
              style={{ width: "28px", height: "28px" }}
            />
          </Link>
>>>>>>> cf75c2f41e1e1bd11bb3825e5169e4470b4349e5
        </div>
      </div>
      <div className="h-4" />
    </>
  );
};

export default Navbar;
