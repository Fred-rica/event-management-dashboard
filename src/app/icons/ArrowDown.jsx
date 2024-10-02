import React from "react";
import { cn } from "@/utils/styleUtlies";

const ArrowDownIcon = ({ className, strokeColor, height = 16, width = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M10.1667 7.16666L8 9.5L5.83334 7.16666"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
