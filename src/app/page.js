"use client";
import EventTable from "@/components/EventsHistoryTable";
import EventSlider from "@/components/EventSlider";
import SummaryCards from "@/components/SummaryCards";
import { cardItems } from "@/hooks/carditems";
import React, { Suspense, lazy } from "react";
import { useAppContext } from "./context/AppContext";
const EventBarChart = lazy(() => import("../components/EventBarChart"));

const Home = () => {
  const { isCollapsed } = useAppContext();

  return (
    <section
      className={` ${
        isCollapsed
          ? "xl:ml-[40px] lg:ml-[40px]"
          : "xl:ml-[210px] lg:ml-[210px]"
      }`}
    >
      <p className="font-normal text-[1.063rem] lg:text-[1.375rem] leading[1.25rem] text-black dark:text-white mb-6">
        Welcome! here’s your summary
      </p>
      <section className="flex flex-col lg:flex-row gap-3 mb-6">
        {cardItems.map((card, index) => (
          <SummaryCards
            key={index}
            title={card.title}
            currentValue={card.currentValue}
            percentageChange={card.percentageChange}
            icon={card.icon}
            change={card.change}
          />
        ))}
      </section>
      <p className="font-medium text-[1.063rem] leading-[0.75rem] lg:text-lg text-black dark:text-white mb-4">
        Event Registrations per month
      </p>
      <section className="flex flex-col lg:flex-row  w-full lg:h-[320px] gap-4 lg:mb-6">
        <Suspense fallback={<div>Loading...</div>}>
          <EventBarChart />
        </Suspense>
        <EventSlider />
      </section>
      <EventTable />
    </section>
  );
};
export default Home;
