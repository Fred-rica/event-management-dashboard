"use client";

import React from "react";

const ToggleButton = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-6 h-4 flex items-center rounded-full p-0.5 cursor-pointer ${
        isOn ? "bg-primary" : "bg-[#E2E8F0]"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-1.5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};
export default ToggleButton;
