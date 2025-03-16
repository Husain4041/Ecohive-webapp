"use client";

import React from "react";

interface TimeToggleButtonsProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export const TimeToggleButtons: React.FC<TimeToggleButtonsProps> = ({
  selectedPeriod,
  onPeriodChange,
}) => {
  const periods = ["Day", "Week", "Month", "Year"];

  return (
    <div className="flex gap-4 mb-5">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => onPeriodChange(period)}
          className={`font-bold rounded-3xl h-[31px] w-[69px] ${
            selectedPeriod === period
              ? "text-white bg-neutral-600"
              : "text-gray-400 border-gray-300 border-[3px]"
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  );
};
