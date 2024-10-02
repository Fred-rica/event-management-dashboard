"use client";

import ArrowDownIcon from "@/app/icons/ArrowDown";
import NextArrow from "@/app/icons/NextArrow";
import Image from "next/image";
import React, { useState } from "react";

const EventsTable = ({ paginatedData, handleRowClick }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to handle toggling the expanded state of rows on small screens
  const handleToggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr className="bg-[#F1F5F9] dark:bg-[#6A6676] dark:text-white text-gray font-semibold text-xs">
            <th className="p-4 text-start ">Event Name</th>
            <th className="p-4 py-2 text-start hidden lg:table-cell ">Date</th>
            <th className="p-4 text-start hidden lg:table-cell">Speaker</th>
            <th className="p-4 text-start">Status</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((event, index) => (
            <React.Fragment key={index}>
              <tr
                key={index}
                className={`hover:bg-[#F1F5F9] dark:hover:bg-[#6A6676] dark:bg-primaryDark cursor-pointer text-lightModePrimaryText dark:text-lightPurple font-normal text-sm ${
                  expandedRow === index ? "bg-[#F1F5F9] dark:bg-[#514E5D]" : " "
                }`}
                onClick={() => handleRowClick(event)}
              >
                <td className="py-4 px-0 lg:px-4 flex items-center gap-1">
                  <button
                    type="button"
                    className="focus:outline-none inline-block lg:hidden"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering row modal on expand
                      handleToggleExpand(index);
                    }}
                  >
                    {expandedRow === index ? (
                      <ArrowDownIcon
                        className="dark:stroke-[#FCF7FF] stroke-[#334155]"
                        height={20}
                        width={20}
                      />
                    ) : (
                      <NextArrow
                        width={20}
                        height={20}
                        className={
                          "dark:stroke-lightPurple stroke-[#334155] dark:hover:stroke-[#334155]"
                        }
                      />
                    )}
                  </button>
                  {event.eventName}
                </td>
                <td className=" p-4 hidden lg:table-cell ">{event.date}</td>
                <td className="p-4 hidden lg:table-cell ">{event.speaker}</td>
                <td className="">
                  <div
                    className={`py-1 px-3 rounded-full inline-flex gap-2 items-center border  ${
                      event.status === "Completed"
                        ? "bg-green text-white border-green lg:bg-[#D1FAE5] dark:lg:bg-inherit dark:lg:text-[#65DDB5] lg:text-green"
                        : " bg-[#3B82F6] border-[#3B82F6] lg:border-[#77B1FF] text-white lg:bg-[#DBEAFE] dark:lg:bg-inherit lg:text-[#3B82F6] dark:lg:text-[#77B1FF]"
                    }`}
                  >
                    <div
                      className={`hidden lg:block w-1.5 h-1.5 rounded-full ${
                        event.status === "Completed"
                          ? "bg-green dark:bg-[#65DDB5]"
                          : "bg-[#3B82F6] dark:bg-[#77B1FF]"
                      }`}
                    ></div>
                    {event.status}
                  </div>
                </td>
              </tr>
              {/* Expanded row for additional details (only shown when the arrow is clicked on small screen) */}
              {expandedRow === index && (
                <tr className="bg-lightPurple dark:bg-[#ADA9BB] dark:text-lightPurple text-lightModePrimaryText font-normal text-sm">
                  <td className="p-4" colSpan="3">
                    <div className="flex items-center justify-between">
                      <p>{event.speaker}</p>
                      <p>{event.date}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
