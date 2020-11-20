import React from "react";
import { Link } from "react-router-dom";

import Search from "../assets/Search.png";
import Report from "../assets/Report.png";
import Statistic from "../assets/Statistic.png";
import CheckCase from "../assets/CheckCase.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar name="Home" />
      <div className="p-4">
        <Link to="search" className="mb-2 flex justify-center">
          {/* <div className="absolute bottom-0 w-full flex justify-center pb-12">
            <div className="w-2/3 h-8 bg-white flex items-center">
            <div className="bg-blue-900 h-full px-2 text-white leading-8 rounded-l-md truncate">
            ค้นหา
            </div>
            <input className="" type="text" />
            </div>
          </div> */}
          <img src={Search} alt="checking" />
        </Link>

        <Link to="report-case" className="flex justify-center mb-2">
          <img src={Report} alt="report-case" />
        </Link>

        <div className="flex justify-center">
          <Link to="statistic">
            <img src={Statistic} alt="statistic" />
          </Link>
          <Link to="check-case">
            <img src={CheckCase} alt="check-case" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
