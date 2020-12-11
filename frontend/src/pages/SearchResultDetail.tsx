import React, { useContext } from "react";
import { CaseType } from "../components/CaseType";
import Navbar from "../components/Navbar";
import { DataContext } from "../DataContext";

const SearchResultCase = () => {
  const { caseDetail } = useContext(DataContext);
  const {
    suspect: { name, bank, phone },
    platform,
    reportDate,
    goods,
  }: CaseType = caseDetail;
  return (
    <div className="min-h-screen">
      <title>ค้นหา</title>
      <Navbar name="รายละเอียดคดี" />
      <div className="px-8 py-8 m-6 bg-white rounded-lg">
        <Field name="ชื่อผู้ขาย" value={name} />
        <Field name="เบอร์โทรศัพท์ผู้ขาย" value={phone} />
        <Field name="สินค้า" value={goods} />
        <Field name="แพลตฟอร์ม" value={platform} />
        <Field name="ยอดโอน" value="1,500" />
        <Field name="เลขบัญชี" value={bank} />
        <Field name="วันที่โอนเงิน" value="19-09-2020" />
        <Field name="วันที่ลงประกาศ" value={reportDate} />
        <div className="text-lg text-gray-700 mb-2 font-medium">
          รายละเอียดเพิ่มเติม
        </div>
        <div className="text-sm pl-4 text-gray-700 mb-8">
          สั่งมา 4 ตัว เมื่อโอนเงิน ได้รับเลขพัสดุ ems จริง สามารถตรวจสอบได้
          แต่เมื่อถึงวันส่ง กลับไปส่งอีกที่อยู่นึง หลังจากนั้นโดนบล็อคแชทไลน์
          แล้วหายสาบสูญไป
        </div>
        <img src="https://http.cat/404" alt="" className="rounded-lg" />
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
