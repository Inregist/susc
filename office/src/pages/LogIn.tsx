import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const password = e.target[1].value;
    if (user === "admin" && password === "root") window.location.replace("/");
  };

  return (
    <div style={{ background: "#072A4B" }} className="h-screen">
      <div className="h-full w-full leading-loose flex justify-center items-center">
        <form
          method="post"
          style={{ background: "#fbfbfb", width: "24rem" }}
          className=" m-4 p-10 rounded-lg shadow-md"
          onSubmit={onSubmit}
        >
          <label
            className="font-semibold flex justify-center mb-8"
            style={{ fontSize: "25px" }}
          >
            กรุณาเข้าสู่ระบบ
          </label>
          <div>
            <label
              className="font-medium flex mb-2"
              style={{ fontSize: "17px" }}
            >
              หมายเลขพนักงาน
            </label>
            <input
              className="w-full px-3 py-1 text-gray-700 bg-gray-200 rounded-lg focus:border-black"
              name="id"
              placeholder="หมายเลขพนักงาน"
              required
            />
          </div>
          <div>
            <label
              className="font-medium flex mt-4 mb-2"
              style={{ fontSize: "17px" }}
            >
              รหัสผ่าน
            </label>
            <input
              className="w-full px-3 py-1 text-gray-700 bg-gray-200 rounded-lg focus:border-black "
              name="password"
              placeholder="******************"
              type="password"
              required
            />
            <div className="flex justify-center">
              <Link to="/">
                <button
                  className="mt-10 px-4 py-2 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded-lg"
                  style={{ backgroundColor: "#0E4171" }}
                  type="submit"
                >
                  เข้าสู่ระบบ
                </button>
              </Link>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
