"use client";
import ArrowDownIcon from "@/app/icons/ArrowDown";
import Image from "next/image";

const FilterButton = ({ onClick, isSelected, text, className = "" }) => {
  return (
    <button
      className={`border flex gap-2 items-center justify-center lg:justify-start px-4 py-2 rounded border-[#E2E8F0] dark:bg-primaryDark dark:border-primaryDark dark:text-[#FCF7FF] text-lightModePrimaryText font-normal text-sm ${
        isSelected
          ? "bg-primary dark:bg-green dark:bg-green  border border-primary "
          : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
      <ArrowDownIcon
        className="dark:stroke-[#FCF7FF] stroke-[#334155]"
        height={20}
        width={20}
      />
    </button>
  );
};

export default FilterButton;
