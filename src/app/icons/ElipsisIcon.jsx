import React from "react";
import { cn } from "@/utils/styleUtlies";

const Elipsis = ({ className, strokeColor, height = 20, width = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M10.4166 5.83333C10.4166 6.06345 10.2301 6.25 9.99998 6.25C9.76986 6.25 9.58331 6.06345 9.58331 5.83333C9.58331 5.60321 9.76986 5.41666 9.99998 5.41666C10.2301 5.41666 10.4166 5.60321 10.4166 5.83333Z"
        stroke={strokeColor}
      />
      <path
        d="M10.4166 10C10.4166 10.2301 10.2301 10.4167 9.99998 10.4167C9.76986 10.4167 9.58331 10.2301 9.58331 10C9.58331 9.76988 9.76986 9.58333 9.99998 9.58333C10.2301 9.58333 10.4166 9.76988 10.4166 10Z"
        stroke={strokeColor}
      />
      <path
        d="M10.4166 14.1667C10.4166 14.3968 10.2301 14.5833 9.99998 14.5833C9.76986 14.5833 9.58331 14.3968 9.58331 14.1667C9.58331 13.9365 9.76986 13.75 9.99998 13.75C10.2301 13.75 10.4166 13.9365 10.4166 14.1667Z"
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Elipsis;
