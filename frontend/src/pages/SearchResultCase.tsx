import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { DataContext } from "../DataContext";
import { CaseType } from "../components/CaseType";

const SearchResultCase = () => {
  const history = useHistory();
  const { result, input, setCaseDetail } = useContext(DataContext);

  return (
    <div className="min-h-screen">
      <title>ค้นหา</title>
      <Navbar name="รายการคดี" />
      <div className="p-8">
        <div className="px-4 py-4 mb-8 w-full rounded-lg shadow-md bg-white">
          <div className="text-base font-medium text-gray-700">
            {input.name}
          </div>
          <div
            className={`text-xl font-medium text-center ${
              result
                .filter((res) => res.suspect.name === input.name)
                .reduce(
                  (b, res: CaseType) => b || res.result === "ฉ้อโกง",
                  false
                )
                ? "text-red-600"
                : " text-orange-600"
            }`}
          >
            {result
              .filter((res) => res.suspect.name === input.name)
              .reduce((b, res: CaseType) => b || res.result === "ฉ้อโกง", false)
              ? "พบประวัติการโกง"
              : "พบประวัติการแจ้ง"}
          </div>
        </div>

        <div className="p-2">
          {result
            .filter((res) => res.suspect.name === input.name)
            .map((res: CaseType, i) => (
              <div
                key={i}
                className="px-4 py-3 mb-3 rounded-lg shadow-md bg-white text-sm text-gray-700"
              >
                <div className="text-base font-bold mb-1">
                  {res.suspect.name}
                </div>
                <div className="">สินค้า: {res.goods}</div>
                <div className="">แพลตฟอร์ม: {res.platform}</div>
                <div className="flex justify-between mt-2">
                  <div>
                    สถานะ:{" "}
                    <span
                      className={`${
                        res.result === "กำลังดำเนินการ"
                          ? "text-orange-600"
                          : " text-red-600"
                      }`}
                    >
                      {res.result}
                    </span>
                  </div>
                  <div
                    className="underline cursor-pointer"
                    onClick={() => {
                      setCaseDetail(res);
                      history.push("/search-detail");
                    }}
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
