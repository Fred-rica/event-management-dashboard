'use client'

import Image from "next/image";
import React from "react";

const EventModal = ({
  isOpen,
  onClose,
  eventData,
  onEdit,
  onDelete,
  onComplete,
}) => {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[440px] relative">
        <section className=" p-7">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-lightModePrimaryText border border-[#E2E8F0] p-2 rounded-full h-7 w-7 flex items-center justify-center"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Event Details */}
          <h2 className="text-lg font-semibold text-lightModePrimaryText">
            {eventData.eventName}
          </h2>
          <p className="text-sm text-gray font-normal mb-8">{eventData.date}</p>
          <p className="text-sm text-lightModePrimaryText font-normal mb-8">
            {eventData.description}
          </p>
          <Image
            src="/assets/Images/icons/speakerProfile.svg"
            alt="speaker profile"
            height={40}
            width={40}
          />

          <p className="text-lightModePrimaryText font-normal text-xs">
            1 Guest Speaker: {eventData.speaker}{" "}
          </p>
          <p className="text-lightModePrimaryText font-normal text-xs">
            {eventData.attendees} Attendees
          </p>
        </section>
        {/* Action Buttons */}
        <div className="mt-6 flex justify-between bg-[#F8FAFC] p-6 gap-4">
          <button
            className="bg-white font-normal text-sm px-4 py-2 rounded-sm border text-lightModePrimaryText border-[#E2E8F0]"
            onClick={onEdit}
          >
            Edit
          </button>
          <section className="flex justify-between gap-2">
            <button
              className="bg-red font-normal text-sm px-4 py-2 rounded-sm text-white"
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              className="bg-primary text-white font-normal text-sm px-4 py-2 rounded-sm"
              onClick={onComplete}
            >
              Mark as Completed
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EventModal;
