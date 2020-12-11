import React from "react";
import Navbar from "../components/Navbar";
import success from "../assets/Correct.png";

const ReportSuccess = () => {

  return (
    <div className="h-screen">
        <Navbar name="ร้องทุกข์" />
        <div className="flex flex-col items-center justify-center" style={{marginTop: "10rem"}}>
          <img className="w-24 h-24" src={success} alt="checking" />
          <div className="mt-8 font-semibold text-xl">รับคำร้องเรียบร้อยแล้ว</div>
        </div>
    </div>
  );
};
export default ReportSuccess;
