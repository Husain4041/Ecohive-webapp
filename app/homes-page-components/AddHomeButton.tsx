"use client";

import * as React from "react";

interface AddHomeButtonProps {
  imageUrl: string;
}

export const AddHomeButton: React.FC<AddHomeButtonProps> = ({ imageUrl }) => {
  const handleAddHome = () => {
    // Handle add home functionality
    console.log("Add home clicked");
  };

  return (
    <button
      className="flex justify-center items-center bg-amber-50 h-[90px] rounded-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[90px]"
      onClick={handleAddHome}
      aria-label="Add new home"
    >
      <img src={imageUrl} alt="Add" className="h-[50px] w-[50px]" />
    </button>
  );
};