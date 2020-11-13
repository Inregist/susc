import React from "react";

import main_bg from "../assets/main-bg.png";

const Home = () => {
  return (
    <div>
      <div className="w-full bg-blue-900 text-white text-xl h-12 flex justify-center items-center">
        <div>Navbar</div>
      </div>
      <div className="bg-gray-300 p-4">
        <div className="relative mb-4 flex justify-center">
          <div className="absolute bottom-0 w-full flex justify-center pb-12">
            <div className="w-2/3 h-8 bg-white flex items-center">
              <div className="bg-blue-900 h-full px-2 text-white leading-8 rounded-l-md truncate">
                ค้นหา
              </div>
              <input className="" type="text" />
            </div>
          </div>
          <img src={main_bg} alt="" />
        </div>
        <div className="bg-white mb-4">report</div>
        <div className="flex">
          <div className="bg-white w-1/2 mr-4">stats</div>
          <div className="bg-white w-1/2 ">check case</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
