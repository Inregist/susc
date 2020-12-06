import React from "react";
import logout from "../assets/logout.png"
import { Link } from "react-router-dom";

const Navbar = () => {

  const data = {name: "นายทำงาน หนักมาก"};

  return (
    <div className="w-full bg-blue-900 text-white text-xl h-16 flex justify-between p-4">
      <div className="mx-5">ระบบจัดการฐานข้อมูล</div>
      <div className="mr-5 inline-flex items-center">
        {data.name}
        <Link to="/login">
          <img
            src={logout}
            alt="logout"
            style={{marginLeft: "2rem", width: "20px", height: "20px" }}
          />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
