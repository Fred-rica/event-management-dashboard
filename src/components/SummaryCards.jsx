'use client'

import { cn } from '@/utils/styleUtlies';
import Image from 'next/image';
import React from 'react'

const SummaryCards = ({
  title,
  currentValue,
  percentageChange,
  icon,
  change
}) => {
   const percentageChangeColor =
     change === "positive" ? "text-green" : "text-red";
  return (
    <section className="w-full lg:w-72 rounded-sm border border-[#F2F2F7] bg-white p-4">
      <div className="flex gap-1 items-center">
        <p className="font-semibold text-base text-gray">{title}</p>
        <Image
          src="/assets/Images/icons/informationIcon.svg"
          alt="logo"
          height={16}
          width={16}
        />
      </div>
      <div className="flex gap-1 items-center">
        <p className="font-semibold text-xl text-lightModePrimaryText">
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

export default SummaryCards