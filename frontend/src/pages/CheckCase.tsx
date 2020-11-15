import React from "react";
import Navbar from "../components/Navbar";
import { Button, Input } from "antd";

const CheckCase = () => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-gray-300 h-screen">
      
      <Navbar name="ตรวจสอบ"/>CheckCase Page

      <div className="mt-32 mb-8 flex justify-center text-xl">
        กรอกเลขบัตรประจำตัวประชาชนของคุณ
      </div>
      <div className="mb-56 flex justify-center">
        <Input
          size="large"
          placeholder="เลขบัตรประจำตัวประชาชน"
          allowClear
          onChange={onChange}
          style={{ width: "340px" }}
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="primary"
          size="large"
          style={{
            background: "#072A4B",
            borderColor: "#072A4B",
            width: "180px",
            height: "56px",
            borderRadius: "8px",
          }}
        >
          ยืนยัน
        </Button>
      </div>
    </div>
  );
};

export default CheckCase;
