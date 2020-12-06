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
      <title>หน้าแรก</title>
      <Navbar name="Home" />
      <div className="p-4">
        <Link to="search" className="mb-2 flex justify-center">
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
