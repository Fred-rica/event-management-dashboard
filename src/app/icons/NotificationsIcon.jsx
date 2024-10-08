import React from "react";
import { cn } from "@/utils/styleUtlies";

const NotificationsIcon = ({
  className,
  strokeColor,
  height = 20,
  width = 20,
}) => {
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
        d="M7.50001 13.9583C7.50001 13.9583 7.50001 16.0417 10 16.0417C12.5 16.0417 12.5 13.9583 12.5 13.9583M14.375 8.33333V9.99999L16.0417 13.5417H3.95834L5.62501 9.99999V8.33333C5.62501 5.91708 7.58376 3.95833 10 3.95833C12.4163 3.95833 14.375 5.91708 14.375 8.33333Z"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NotificationsIcon;
