"use client";

import React from "react";

interface StatsCardProps {
  title: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <article className="flex justify-between items-center p-4 rounded-xl bg-[linear-gradient(127deg,#9CAD88_28.26%,#FFFDEE_91.2%)]">
      <div>
        <h3 className="mb-1.5 text-xs font-semibold text-stone-600">{title}</h3>
        <div className="text-xs font-semibold">{value}</div>
      </div>
      <div className="flex justify-center items-center h-8 rounded-xl bg-stone-600 w-[29px]">
        {icon}
      </div>
    </article>
  );
};
