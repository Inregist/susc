import React from "react";
import Navbar from "../components/Navbar";

const SearchResultCase = () => {
  return (
    <div className="min-h-screen">
      <Navbar name="รายการที่ค้นหา" />
      <div className="px-8 py-8 m-6 bg-white rounded-lg">
        <Field name="ชื่อผู้ขาย" value="นางแอบบ์ มีพิรุธ" />
        <Field name="สินค้า" value="กางเกงลายเซ็กซี่" />
        <Field name="แพลตฟอร์ม" value="Lazada" />
        <Field name="ยอดโอน" value="1,500" />
        <Field name="เลขบัญชี" value="2153647xxx" />
        <Field name="วันที่โอนเงิน" value="19-09-2020" />
        <Field name="วันที่ลงประกาศ" value="21-09-2020  13:35" />
        <div className="text-lg text-gray-700 mb-2 font-medium">
          รายละเอียดเพิ่มเติม
        </div>
        <div className="text-sm pl-4 text-gray-700 mb-8">
          สั่งมา 4 ตัว เมื่อโอนเงิน ได้รับเลขพัสดุ ems จริง สามารถตรวจสอบได้
          แต่เมื่อถึงวันส่ง กลับไปส่งอีกที่อยู่นึง หลังจากนั้นโดนบล็อคแชทไลน์
          แล้วหายสาบสูญไป
        </div>
        <img src="https://http.cat/400" alt="" className="rounded-lg" />
      </div>
    </div>
  );
};
export default SearchResultCase;

const Field = ({ name, value }) => {
  return (
    <div className="flex justify-between text-lg text-gray-700 mb-2">
      <div className="font-medium w-2/5">{name}</div>
      <div className="w-4" />
      <div className="w-3/5 text-right">{value}</div>
    </div>
  );
};
