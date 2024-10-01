'use client'

import Image from "next/image";
import React from "react";
import { useState } from "react";

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
          className="p-2 border border-[#E2E8F0] rounded cursor-pointer hover:bg-[#E2E8F0]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Image
            src="/assets/Images/icons/previousArrow.svg"
            alt="previous arrow"
            height={20}
            width={20}
          />
        </button>

        {/* Page Number Buttons */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-full mx-1 ${
              currentPage === page ? "bg-primary text-white" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className=" p-2 border border-[#E2E8F0] rounded cursor-pointer hover:bg-[#E2E8F0]"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Image
            src="/assets/Images/icons/nextArrow.svg"
            alt="next arrow"
            height={20}
            width={20}
          />
        </button>
      </div>

      {/* Rows Per Page */}
      <div>
        <span className="hidden lg:inline-block pr-0 lg:pr-3 ">Show: </span>
        <select
          className="border p-2 border-[#E2E8F0] rounded"
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
