
'use client'
import { useState } from "react";
import { tableData } from "@/hooks/tableData";
import Image from "next/image";
import FilterButton from "./common/FilterButtons";
import Pagination from "./common/Pagination";
import EventModal from "./EventModal";

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
    // Implement edit logic here
  };

  const handleDeleteEvent = () => {
    console.log("Delete event:", selectedEvent);
    // Implement delete logic here
  };

  const handleCompleteEvent = () => {
    console.log("Mark event as completed:", selectedEvent);
    // Implement mark as completed logic here
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
        : new Date(a.date) - new Date(b.date)
    );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <section className="py-6">
      <p className="font-medium text-lg text-black ">Events History</p>
      {/* Section to Sort, Search and Filter */}
      <section className="flex items-center justify-between gap-4 mb-4">
        <section className="flex w-[60%] justify-between items-center">
          <div className="relative w-[28%]">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#E2E8F0] p-2 rounded w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image
                src="/assets/Images/icons/search.svg"
                alt="search"
                width={20}
                height={20}
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

          <p className="text-lightModePrimaryText text-sm font-semibold">
            Displaying {rowsPerPage} results
          </p>
        </section>
        <section className="flex w-[33%] gap-4  items-center">
          <div className="flex gap-4 items-center">
            <p className="text-lightModePrimaryText normal text-sm">Sort:</p>
            <select
              className=" flex  items-center px-4 py-2 rounded border-[#E2E8F0] border text-lightModePrimaryText font-normal text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option className="text-lightModePrimaryText" value="Most Recent">
                Most Recent
              </option>
              <option
                className="text-lightModePrimaryText"
                value="Oldest First"
              >
                Oldest First
              </option>
            </select>
          </div>
          <div className="flex  items-center px-3 py-2 rounded border border-[#E2E8F0] text-lightModePrimaryText font-normal">
            <Image
              src="/assets/Images/icons/elipsis.svg"
              alt="elipsis"
              height={20}
              width={20}
            />
          </div>
          <div className="flex  items-center px-4 py-2 gap-4 rounded border border-[#E2E8F0] text-lightModePrimaryText font-normal text-sm">
            <Image
              src="/assets/Images/icons/download.svg"
              alt="download"
              height={16}
              width={16}
            />
            <p className="text-lightModePrimaryText">Export</p>
          </div>
        </section>
      </section>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse ">
          <thead>
            <tr className="bg-[#F1F5F9] text-gray font-semibold text-xs ">
              <th className=" p-4 text-start">Event Name</th>
              <th className=" p-4 py-2 text-start">Date</th>
              <th className=" p-4 text-start">Speaker</th>
              <th className="p-4 text-start">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((event, index) => (
              <tr
                key={index}
                className="hover:bg-[#F1F5F9] cursor-pointer text-lightModePrimaryText font-normal text-sm"
                onClick={() => handleRowClick(event)}
              >
                <td className=" p-4">{event.eventName}</td>
                <td className=" p-4 ">{event.date}</td>
                <td className="p-4 ">{event.speaker}</td>
                <td className="">
                  <div
                    className={`px-2 py-1 rounded-full flex gap-2 items-center w-[60%] ${
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
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
