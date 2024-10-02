import React from "react";
import { cn } from "@/utils/styleUtlies";

const SearchIcon = ({ className, strokeColor, height = 20, width = 20 }) => {
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
        d="M16.0417 16.0417L12.9167 12.9167M3.95833 9.16667C3.95833 6.29019 6.29018 3.95834 9.16666 3.95834C12.0431 3.95834 14.375 6.29019 14.375 9.16667C14.375 12.0432 12.0431 14.375 9.16666 14.375C6.29018 14.375 3.95833 12.0432 3.95833 9.16667Z"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
