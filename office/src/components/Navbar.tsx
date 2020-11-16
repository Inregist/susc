import React from "react";

const Navbar = ({ title, name }) => {
  return (
    <div className="w-full bg-blue-900 text-white text-xl h-16 flex items-center justify-between p-4">
      <div className="ml-5">{title}</div>
      <div className="mr-10 ">{name}</div>
    </div>
  );
};

export default Navbar;
