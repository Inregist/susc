import { Tabs } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
import searchButton from "../assets/Vector.png";

const Main = () => {
  const operations = (
    <form className="mr-24 flex justify-start items-center">
      <span className="absolute flex justify-center items-center">
        <button
          style={{ height: "36px", width: "48px" }}
          className="flex justify-center items-center focus:outline-none"
          type="submit"
        >
          <img src={searchButton} alt="s_button" />
        </button>
      </span>
      <input
        name="searchCase"
        type="search"
        style={{ height: "36px", width: "15rem", paddingLeft: "52px" }}
        className="bg-gray-200 rounded-md"
        placeholder="ค้นหา"
      />
      <select>
        <option>Case ID</option>
        <option></option>
      </select>
    </form>
  );

  return (
    <div style={{ background: "#ffffff" }} className="h-screen">
      <Navbar />
      <div style={{ padding: "32px", marginLeft: "56px", marginRight: "56px" }}>
        <Tabs size={"large"} tabBarExtraContent={operations}>
          <Tabs.TabPane
            tab={<div className="mx-3">คดีของฉัน</div>}
            key="1"
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab={<div className="mx-3">คดีทั้งหมด</div>}
            key="2"
          ></Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Main;
