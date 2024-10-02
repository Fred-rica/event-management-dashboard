"use client";
import { useState } from "react";
import { tableData } from "@/hooks/tableData";
import FilterButton from "./common/FilterButtons";
import Pagination from "./common/Pagination";
import EventModal from "./EventModal";
import EventsTable from "./EventsTable";
import Elipsis from "@/app/icons/ElipsisIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import SearchIcon from "@/app/icons/SearchIcon";

const EventTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [filterBy, setFilterBy] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRowClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEditEvent = () => {
    console.log("Edit event:", selectedEvent);
  };

  const handleDeleteEvent = () => {
    console.log("Delete event:", selectedEvent);
  };

  const handleCompleteEvent = () => {
    console.log("Mark event as completed:", selectedEvent);
  };
  const filteredData = tableData
    .filter((event) => {
      if (filterBy === "eventName") {
        return event.eventName.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (filterBy === "status") {
        return event.status.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (filterBy === "date") {
        return event.date.includes(searchTerm);
      }
      return true;
    })
    .sort((a, b) =>
      sortBy === "Most Recent"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date),
    );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <section className="py-6">
      <p className="font-medium text-lg text-black dark:text-white">
        Events History
      </p>
      {/* Section to Sort, Search and Filter */}
      <section className="flex flex-col lg:flex-row mt-3 lg:mt-0 lg:items-center lg:justify-between gap-4 mb-4">
        <section className="flex  flex-col lg:flex-row w-full lg:w-[60%] lg:justify-between lg:items-center gap-2 lg:gap-0">
          <div className="relative w-full lg:w-[28%]">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#E2E8F0] p-2 rounded w-full pl-10 dark:bg-primaryDark dark:border-primaryDark placeholder-[#CBD5E1] font-normal text-sm outline-none dark:text-[#CBD5E1]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon
                width={20}
                height={20}
                className={"dark:stroke-[#94A3B8] stroke-[#94A3B8]"}
              />
            </div>
          </div>
          <FilterButton
            text="Date"
            isSelected={filterBy === "date"}
            onClick={() => setFilterBy("date")}
          />
          <FilterButton
            text="Status"
            isSelected={filterBy === "status"}
            onClick={() => setFilterBy("status")}
          />
          <FilterButton
            text="Name"
            isSelected={filterBy === "eventName"}
            onClick={() => setFilterBy("eventName")}
          />

          <p className="text-lightModePrimaryText dark:text-white text-sm font-semibold">
            Displaying {rowsPerPage} results
          </p>
        </section>
        <section className="flex flex-col lg:flex-row w-full lg:w-[33%] gap-4  lg:items-center">
          <div className="flex justify-between gap-0 lg:gap-4 items-center">
            <p className="text-lightModePrimaryText dark:text-[#FCF7FF] normal text-sm">
              Sort:
            </p>
            <select
              className="outline-none flex  dark:bg-primaryDark dark:border-primaryDark cursor-pointer items-center px-4 py-2 rounded border-[#E2E8F0] border text-lightModePrimaryText dark:text-[#FCF7FF] font-normal text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option
                className="text-lightModePrimaryText dark:text-[#FCF7FF]"
                value="Most Recent"
              >
                Most Recent
              </option>
              <option
                className="text-lightModePrimaryText dark:text-[#FCF7FF]"
                value="Oldest First"
              >
                Oldest First
              </option>
            </select>
          </div>
          <div className="flex justify-between gap-0 lg:gap-4 items-center">
            <div className="flex  cursor-pointer items-center px-3 py-2 rounded border border-[#E2E8F0] text-lightModePrimaryText dark:text-[#FCF7FF] dark:bg-primaryDark dark:border-primaryDark font-normal">
              <Elipsis
                className="dark:stroke-[#FCF7FF] stroke-[#334155]"
                height={20}
                width={20}
              />
            </div>

            <div className="flex  cursor-pointer items-center px-4 py-2 gap-4 rounded border border-[#E2E8F0] text-lightModePrimaryText dark:text-[#FCF7FF] font-normal text-sm dark:bg-primaryDark dark:border-primaryDark">
              <DownloadIcon
                className="dark:stroke-[#FCF7FF] stroke-[#334155]"
                height={16}
                width={16}
              />
              <p className="text-lightModePrimaryText dark:text-[#FCF7FF] ">
                Export
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Table */}
      <EventsTable
        paginatedData={paginatedData}
        handleRowClick={handleRowClick}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
      {/* Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        eventData={selectedEvent}
        onEdit={handleEditEvent}
        onDelete={handleDeleteEvent}
        onComplete={handleCompleteEvent}
      />
    </section>
  );
};

export default EventTable;
