import React from "react";

const Navbar = () => {

  const data = {name: "นายทำงาน หนักมาก"};

  return (
    <div className="w-full bg-blue-900 text-white text-xl h-16 flex items-center justify-between p-4">
      <div className="ml-5">ระบบจัดการฐานข้อมูล</div>
      <div className="mr-10 ">{data.name}</div>
    </div>
  );
};

export default Navbar;
