import React from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

const SearchResultCase = () => {
  const history = useHistory();
  const status = "พบประวัติการแจ้ง";
  return (
    <div className="min-h-screen">
      <title>ค้นหา</title>
      <Navbar name="รายการคดี" />
      <div className="p-8">
        <div className="px-4 py-4 mb-8 w-full rounded-lg shadow-md bg-white">
          <div className="text-base font-medium text-gray-700">แอบ มีพิรุธ</div>
          <div
            className={`text-xl font-medium text-center ${
              status === "พบประวัติการแจ้ง"
                ? "text-orange-600"
                : " text-red-600"
            }`}
          >
            พบประวัติการแจ้ง
          </div>
        </div>

        <div className="p-2">
          {["แอบโกง ในหลืบ", "แอบบ์ มีพิรุธ"].map((name) => (
            <div
              key={name}
              className="px-4 py-3 mb-3 rounded-lg shadow-md bg-white text-sm text-gray-700"
            >
              <div className="text-base font-bold mb-1">นางแอบ มีพิรุธ</div>
              <div className="">สินค้า: กางเกงในชายลายเซ็กซี่</div>
              <div className="">แพลตฟอร์ม: Lazada</div>
              <div className="flex justify-between mt-2">
                <div>
                  สถานะ:{" "}
                  <span
                    className={`${
                      status === "พบประวัติการแจ้ง"
                        ? "text-orange-600"
                        : " text-red-600"
                    }`}
                  >
                    กำลังตรวจสอบ
                  </span>
                </div>
                <div
                  className="underline cursor-pointer"
                  onClick={() => history.push("/search-detail")}
                >
                  ดูรายละเอียดเพิ่มเติม
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchResultCase;
