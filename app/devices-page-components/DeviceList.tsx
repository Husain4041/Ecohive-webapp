"use client";
import * as React from "react";
import { DeviceTableHeader } from "./DeviceTableHeader";
import { DeviceTableRow } from "./DeviceTableRow";

export const DeviceList: React.FC = () => {
  return (
    <main className="ml-5 w-[81%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-9 w-full max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full font-semibold max-md:max-w-full">
          <h1 className="my-auto text-2xl text-black">My Devices</h1>
          <div className="flex flex-wrap gap-10 py-3 pr-4 pl-20 text-xl text-black rounded-3xl bg-white bg-opacity-60 max-md:pl-5 max-md:max-w-full">
            <input
              type="text"
              placeholder="Search for devices"
              className="my-auto bg-transparent outline-none"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/29551108171387b2e4304d35741259b4fe1dcd8754496b1ee06181904b89c2ec?placeholderIfAbsent=true"
              alt="Search"
              className="object-contain shrink-0 aspect-square w-[35px]"
            />
          </div>
        </header>

        <h2 className="self-start mt-11 text-xl font-medium text-black max-md:mt-10">
          All
        </h2>

        <div className="flex flex-col items-start mt-2.5 rounded-xl bg-white bg-opacity-50 max-md:pr-5 max-md:mr-1 max-md:max-w-full">
          <div className="flex shrink-0 w-12 rounded-xl bg-[#9CAD88] h-[9px]" />
        </div>

        <DeviceTableHeader />

        <DeviceTableRow
          name="Living Room Chandelier"
          type="Lights"
          status="ON"
        />
        <DeviceTableRow
          name="Dining Room Fan"
          type="Ceiling Fan"
          status="OFF"
        />
        <DeviceTableRow name="Bedroom Speakers" type="Speakers" status="OFF" />
        <DeviceTableRow
          name="Front Door Camera"
          type="Security Camera"
          status="ON"
        />
        <DeviceTableRow name="Room Thermostat" type="Thermostat" status="ON" />
        <DeviceTableRow
          name="Living room Speakers"
          type="Speakers"
          status="ON"
        />
      </div>
    </main>
  );
};
