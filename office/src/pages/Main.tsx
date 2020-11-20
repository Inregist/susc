import React from "react";
import { formatInput } from "../components/utils";

const Main = () => {
  return (
    <div style={{ background: "#fbfbfb" }} className="h-screen p-24">
      <input
        type="text"
        onChange={(e) => formatInput(e, "xxx-xxx-xxxx")}
        className="border border-black"
      />
    </div>
  );
};

export default Main;
