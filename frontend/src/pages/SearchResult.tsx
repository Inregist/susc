import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { DataContext } from "../DataContext";

const SearchResult = () => {
  const history = useHistory();
  const { result, setInput } = useContext(DataContext);

  return (
    <div className="min-h-screen">
      <title>ค้นหา</title>
      <Navbar name="รายการที่ค้นหา" />
      <div className="p-8">
        <div className="px-4 py-2 mb-8 w-full rounded-lg shadow-md">
          <div className="">ผลการค้นหา</div>
          <div className="text-xl font-medium text-center text-gray-700">
            แอบ
          </div>
        </div>

        <div className="p-2">
          <div className="py-3 mb-3 rounded-t-lg bg-gray-300 shadow-md text-base text-center">
            รายชื่อผู้มีประวัติการถูกแจ้ง
          </div>
          {result
            .reduce((acc, res) => {
              return acc.includes(res.suspect.name)
                ? acc
                : [...acc, res.suspect.name];
            }, [])
            .map((name) => (
              <div
                key={name}
                className="px-4 py-5 mb-3 text-xl rounded-lg shadow-md font-medium text-gray-700 bg-white cursor-pointer"
                onClick={() => {
                  setInput((cur) => ({ ...cur, name }));
                  history.push("/search-case");
                }}
              >
                {name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
