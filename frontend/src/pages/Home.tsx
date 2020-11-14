import React from "react";
import Navbar from "../components/MainNavbar";
import Search from "../assets/Search.png";
import Report from "../assets/Report.png";
import Statistic from "../assets/Statistic.png";
import CheckCase from "../assets/CheckCase.png";

const Home = () => {
  return (
    <div>
      <Navbar/>

      <div className="bg-gray-300 p-2 h-screen">
        <a href="./search/" className="mb-2 flex justify-center">
          {/* <div className="absolute bottom-0 w-full flex justify-center pb-12">
            <div className="w-2/3 h-8 bg-white flex items-center">
              <div className="bg-blue-900 h-full px-2 text-white leading-8 rounded-l-md truncate">
                ค้นหา
              </div>
              <input className="" type="text" />
            </div>
          </div> */}
          <img src={Search} alt="checking" />
        </a>

        <a href="./report-case/" className="flex justify-center mb-2">
          <img src={Report} alt="report-case" />
        </a>

        <div className="flex justify-center">
          <a href="./statistic/">
            <img src={Statistic} alt="statistic" />
          </a>
          <a href="./check-case/">
            <img src={CheckCase} alt="check-case" />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
