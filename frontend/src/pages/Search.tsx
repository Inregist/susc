import { Input, Button } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchSub from "../assets/Search-sub.png";

const Search = () => {
  const [state, setState] = useState(false);

  const click = () => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  };

  return (
    <div>
      <Navbar name="Search" />
      <div className="p-8">
        <div className="m-16 flex justify-center">
          <img src={SearchSub} alt="checking" />
        </div>
        <p className="text-center">เลือกกรอกอย่างน้อย 1 ช่อง</p>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="ชื่อ" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="เลขบัญชี" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="เบอร์โทร" />
        </div>
        <div className="flex items-center h-24">
          <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2"></div>
          <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
            <Button type="primary">ค้นหา</Button>
          </div>
          <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
