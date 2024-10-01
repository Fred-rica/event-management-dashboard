'use client'
import React from 'react'

const Close = ({ onClose }) => {
  return (
    <button
      className="absolute top-4 right-4 text-lightModePrimaryText border border-[#E2E8F0] p-2 rounded-full h-7 w-7 flex items-center justify-center"
      onClick={onClose}
    >
      &times;
    </button>
  );
};

export default Close