import React from "react";
import home_bt from "../assets/home.png";
import back_prev from "../assets/left-arrow.png";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ name }) => {
  const history = useHistory();
  return (
    <>
      <div>
        <div className="w-full bg-blue-900 text-white text-xl h-16 flex items-center justify-between p-6 cursor-pointer">
          <div onClick={() => history.goBack()}>
            <img
              src={back_prev}
              alt="back"
              style={{ width: "25px", height: "23px" }}
            />
          </div>
          {name}
          <Link to="/">
            <img
              src={home_bt}
              alt="home"
              style={{ width: "28px", height: "28px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
