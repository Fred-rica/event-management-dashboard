"use client";

import InformationIcon from "@/app/icons/InformationIcon";
import Image from "next/image";
import React from "react";

const SummaryCards = ({
  title,
  currentValue,
  percentageChange,
  icon,
  change,
}) => {
  const percentageChangeColor =
    change === "positive" ? "text-green" : "text-red";

  return (
    <section className="w-full lg:w-72 rounded-sm border border-[#F2F2F7] dark:border-primaryDark bg-white dark:bg-primaryDark p-4">
      <div className="flex gap-1 items-center">
        <p className="font-semibold text-base text-gray dark:text-white">
          {title}
        </p>
        <InformationIcon
          width={16}
          height={16}
          className={"dark:stroke-white stroke-[#64748B]"}
        />
      </div>
      <div className="flex gap-1 items-center">
        <p className="font-semibold text-xl text-lightModePrimaryText dark:text-white">
          {currentValue.toLocaleString()}
        </p>
        <Image
          src={icon}
          alt="percentage change image"
          height={16}
          width={16}
        />
        <p
          className={`font-semibold text-[0.625rem] leading-[0.75rem] ${percentageChangeColor}`}
        >
          {percentageChange}
        </p>
      </div>
    </section>
  );
};

export default SummaryCards;
