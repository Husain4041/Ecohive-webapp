"use client";

import React from "react";

interface DeviceCardProps {
  icon: string;
  title: string;
  usageIcon: string;
  used: number;
  saved: number;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({
  icon,
  title,
  usageIcon,
  used,
  saved,
}) => {
  return (
    <article className="flex flex-col items-start px-3 pt-2.5 pb-1 w-full max-h-[100px] min-h-[80px] tracking-tight text-black bg-amber-50 rounded-xl border border-solid border-black border-opacity-10">
      <img
        src={icon}
        className="object-contain w-5 aspect-[0.96]"
        alt={`${title} icon`}
      />
      <h3 className="mt-2 text-base font-semibold leading-none">{title}</h3>
      <div className="flex gap-2 items-start self-stretch">
        <img
          src={usageIcon}
          className="object-contain shrink-0 aspect-square w-[30px]"
          alt="Usage indicator"
        />
        <div className="flex flex-col mt-1.5">
          <h4 className="text-sm font-semibold leading-none">Used Saved</h4>
          <p className="self-start mt-1.5 text-xs leading-loose">
            <span className="font-bold">{used} </span>
            <span className="text-[10px]">kWh </span>
            <span className="font-bold">{saved} </span>
            <span className="text-[10px]">kWh</span>
          </p>
        </div>
      </div>
    </article>
  );
};