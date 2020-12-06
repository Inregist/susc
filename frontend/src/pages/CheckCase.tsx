import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Input } from "antd";

const CheckCase = () => {
  const [citizenID, setCitizenID] = useState("");

  const formatInput = (e, format) => {
    const formatArray = format.split("-").map((s) => s.length);
    const formatLen = formatArray.reduce((acc, i) => acc + i);
    const input = e.target.value.replaceAll("-", "");
    const regex = RegExp(`^${formatArray.map((f) => `(\\d{${f}})?`).join("")}`);
    const splited = input.split(regex).filter((i) => i);
    const newValue = splited.join("-");
    return newValue.length >= formatLen
      ? newValue.slice(0, formatLen + formatArray.length - 1)
      : newValue;
  };

  return (
    <div className="bg-gray-300 h-screen">
      <title>ติดตามคดี</title>
      <Navbar name="ตรวจสอบ" />
      CheckCase Page
      <div className="mt-32 mb-8 flex justify-center text-xl">
        กรอกเลขบัตรประจำตัวประชาชนของคุณ
      </div>
      <div className="mb-56 flex justify-center">
        <Input
          size="large"
          placeholder="เลขบัตรประจำตัวประชาชน"
          allowClear
          value={citizenID}
          onChange={(e) => setCitizenID(formatInput(e, "x-xxxx-xxxxx-xx-x"))}
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
