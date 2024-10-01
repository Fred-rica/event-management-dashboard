'use client'

import Image from 'next/image';
import React, { useState } from 'react'

const EventsTable = ({ paginatedData, handleRowClick }) => {
   const [expandedRow, setExpandedRow] = useState(null);

   // Function to handle toggling the expanded state of rows
   const handleToggleExpand = (index) => {
     setExpandedRow(expandedRow === index ? null : index); // If clicked again, collapse the row
   };
  
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr className="bg-[#F1F5F9] text-gray font-semibold text-xs">
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
                className={`hover:bg-[#F1F5F9] cursor-pointer text-lightModePrimaryText font-normal text-sm ${
                  expandedRow === index ? "bg-[#F1F5F9]" : " "
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
                      <Image
                        src="/assets/Images/icons/arrowDown.svg"
                        alt="downarrow"
                        height={20}
                        width={20}
                      />
                    ) : (
                      <Image
                        src="/assets/Images/icons/nextArrow.svg"
                        alt="next arrow"
                        height={20}
                        width={20}
                      />
                    )}
                  </button>
                  {event.eventName}
                </td>
                <td className=" p-4 hidden lg:table-cell ">{event.date}</td>
                <td className="p-4 hidden lg:table-cell ">{event.speaker}</td>
                <td className="">
                  <div
                    className={`px-2 py-1 rounded-full flex gap-2 items-center w-full  lg:w-[60%] ${
                      event.status === "Completed"
                        ? "bg-[#D1FAE5] text-green"
                        : "bg-[#DBEAFE] text-[#3B82F6]"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        event.status === "Completed"
                          ? "bg-green"
                          : "bg-[#3B82F6]"
                      }`}
                    ></div>
                    <p className="">{event.status}</p>
                  </div>
                </td>
              </tr>
              {/* Expanded row for additional details (only shown when the arrow is clicked) */}
              {expandedRow === index && (
                <tr className="bg-[#FCF7FF] text-lightModePrimaryText font-normal text-sm">
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

export default EventsTable