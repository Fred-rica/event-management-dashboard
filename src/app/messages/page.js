"use client";
import React from "react";
import { useAppContext } from "../context/AppContext";

const Page = () => {
  const { isCollapsed } = useAppContext();

  return (
    <section
      className={`${
        isCollapsed
          ? "xl:ml-[40px] lg:ml-[40px]"
          : "xl:ml-[210px] lg:ml-[210px]"
      } flex items-center justify-center h-screen bg-gradient-to-b from-[#f3f2ff] to-[#8576FF] dark:bg-gradient-to-b from-[#484554] to-[#8576FF]`}
    >
      <div className="text-center px-5">
        <h1 className="font-bold text-3xl lg:text-5xl text-[#1F2937] dark:text-white">
          Coming Soon
        </h1>
        <p className="mt-4 text-base lg:text-lg text-[#D1D5DB]  text-center">
          We `&apos;`re working on something exciting. Stay tuned for updates!
        </p>
      </div>
    </section>
  );
};

export default Page;
