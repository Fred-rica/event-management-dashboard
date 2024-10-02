import React from "react";
import { cn } from "@/utils/styleUtlies";

const NextArrow = ({ className, strokeColor, height = 12, width = 12 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M5.375 4.375L7.125 6L5.375 7.625"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NextArrow;
