"use client";

import NextArrow from "@/app/icons/NextArrow";
import PreviousArrow from "@/app/icons/previousArrow";
import React from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate the range of page numbers to display
  const pageNumbers = [];
  const maxPagesToShow = 3; // Number of page numbers to display at a time
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <button
          className="p-2 border border-[#E2E8F0] rounded cursor-pointer hover:bg-[#E2E8F0] dark:hover:bg-[#E2E8F0] dark:bg-primaryDark dark:border-primaryDark"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PreviousArrow
            width={16}
            height={16}
            className={
              "dark:stroke-lightPurple stroke-[#334155] dark:hover:stroke-[#334155]"
            }
          />
        </button>

        {/* Page Number Buttons */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`w-6 h-6 rounded-full mx-1 dark:text-white ${
              currentPage === page
                ? "bg-primary text-sm text-white dark:text-white"
                : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className=" p-2 border border-[#E2E8F0] rounded cursor-pointer hover:bg-[#E2E8F0] dark:hover:bg-[#E2E8F0] dark:bg-primaryDark dark:border-primaryDark"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <NextArrow
            width={16}
            height={16}
            className={
              "dark:stroke-lightPurple stroke-[#334155] dark:hover:stroke-[#334155]"
            }
          />
        </button>
      </div>

      {/* Rows Per Page */}
      <div>
        <span className="hidden lg:inline-block pr-0 lg:pr-3 dark:text-white text-lightModePrimaryText">
          Show:{" "}
        </span>
        <select
          className="border p-2 border-[#E2E8F0] dark:text-white text-lightModePrimaryText dark:bg-primaryDark dark:border-primaryDark rounded outline-none"
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
        >
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
          <option value={30}>30 rows</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
