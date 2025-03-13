"use client";

import * as React from "react";

interface BackButtonProps {
  imageUrl: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ imageUrl }) => {
  return (
    <button
      className="absolute left-5 top-[27px] max-sm:left-[15px] max-sm:top-[15px]"
      onClick={() => window.history.back()}
      aria-label="Go back"
    >
      <img src={imageUrl} alt="Back" className="h-[70%] w-[70%]" />
    </button>
  );
};
