"use client";
import Image from "next/image";

const FilterButton = ({ onClick, isSelected, text, className = "" }) => {
  return (
    <button
      className={`border flex gap-2 items-center justify-center lg:justify-start px-4 py-2 rounded border-[#E2E8F0] text-lightModePrimaryText font-normal text-sm ${
        isSelected ? "bg-primary border border-primary " : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
      <Image
        src="/assets/Images/icons/arrowDown.svg"
        alt="downarrow"
        height={16}
        width={16}
      />
    </button>
  );
};

export default FilterButton;
