import React from "react";
import logout from "../assets/logout.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const data = { name: "นายทำงาน หนักมาก" };
  const history = useHistory();
  return (
    <div className="w-full bg-blue-900 text-white text-xl h-16 flex justify-between p-4">
      <div className="mx-5">ระบบจัดการฐานข้อมูล</div>
      <div className="mr-5 inline-flex items-center">
        {data.name}
        <div
          onClick={() => {
            localStorage.clear();
            history.push('/login')
          }}
          className="cursor-pointer"
        >
          <img
            src={logout}
            alt="logout"
            style={{ marginLeft: "2rem", width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
