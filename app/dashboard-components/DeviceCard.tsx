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
    <article className="flex flex-col items-start px-3.5 pt-3.5 pb-1 w-full tracking-tight text-black bg-amber-50 rounded-xl border border-solid border-black border-opacity-10">
      <img
        src={icon}
        className="object-contain w-6 aspect-[0.96]"
        alt={`${title} icon`}
      />
      <h3 className="mt-3.5 text-xl font-semibold leading-none">{title}</h3>
      <div className="flex gap-2 items-start self-stretch">
        <img
          src={usageIcon}
          className="object-contain shrink-0 aspect-square w-[35px]"
          alt="Usage indicator"
        />
        <div className="flex flex-col mt-2">
          <h4 className="text-lg font-semibold leading-none">Used Saved</h4>
          <p className="self-start mt-2 text-sm leading-loose">
            <span className="font-bold">{used} </span>
            <span className="text-xs">kWh </span>
            <span className="font-bold">{saved} </span>
            <span className="text-xs">kWh</span>
          </p>
        </div>
      </div>
    </article>
  );
};