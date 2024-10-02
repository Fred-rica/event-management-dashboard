import React from "react";
import { cn } from "@/utils/styleUtlies";

const MobileNavIcon = ({
  className,
  strokeColor,
  height = 24,
  width = 24,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      onClick={onClick}
    >
      <path
        d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default MobileNavIcon;
