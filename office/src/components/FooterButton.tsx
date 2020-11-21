import React from "react";

const FooterButton = ({ children, onClick = () => {} }: any) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#072A4B",
      }}
      className="px-3 py-2 text-white rounded"
    >
      {children}
    </button>
  );
};

export default FooterButton;
