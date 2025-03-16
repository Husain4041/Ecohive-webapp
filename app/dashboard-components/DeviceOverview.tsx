"use client";

import React from "react";
import { DeviceCard } from "./DeviceCard";

export const DeviceOverview: React.FC = () => {
  return (
    <section className="flex flex-col mt-1.5 w-full">
      <div className="flex relative flex-col pt-3.5 pr-20 pb-10 pl-8 w-full rounded-xl min-h-[215px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/5c45d3575949aaa633bbee6af3db1e649f809588c4c9a34c46315cf3b5cdbf39?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full rounded-xl"
          alt="Background"
        />
        <div className="flex relative flex-col self-center max-w-full text-center text-stone-600 w-[234px]">
          <h2 className="text-xl font-bold">Greenwood Residence</h2>
          <p className="self-start mt-2.5 text-base font-medium">
            123 Eco Street, London, UK
          </p>
        </div>

        <div className="flex relative gap-5 justify-between mt-6 max-w-full text-xs text-black w-[382px]">
          <div className="flex flex-col items-start self-start">
            <h3 className="text-sm font-medium">Dwellers:</h3>
            <ul className="mt-3 space-y-2">
              <li>Lelah Nickols (Home Manager)</li>
              <li>Nicolas Jackson (Resident)</li>
              <li>Robert b. lewis (Guest)</li>
              <li className="font-thin">more ...</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-medium">Devices:</h3>
            <ul className="mt-3 space-y-2">
              <li>Living Room Lights</li>
              <li>Kitchen AC</li>
              <li>Smart Thermostat</li>
              <li>Living Room Ceiling Fan</li>
              <li className="font-thin">more ...</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="self-start mt-6 text-2xl font-bold leading-snug text-stone-600">
        Device Overview
      </h2>

      <div className="grid grid-cols-3 gap-5 mt-7">
        <DeviceCard
          icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/aebb2b2f56b616a1b636df1c57a8d0e4b83b9fa94b12fc0b5bf4a040069f5443?placeholderIfAbsent=true"
          title="Thermostat"
          usageIcon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/eea7b5baaa5a2f5d79d18d810809b33c96ece9abc27597a319a858e1a27f5402?placeholderIfAbsent=true"
          used={8}
          saved={1}
        />
        <DeviceCard
          icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/9a4d218c5001a8b4866f3b6f7619b410389e6b0ec714e8670414b71d0786ac98?placeholderIfAbsent=true"
          title="Speakers"
          usageIcon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/3def9583e3e1b4e10273ef88f6c31f25e87025d3e19c8c0650ac72c8df36607a?placeholderIfAbsent=true"
          used={7}
          saved={1}
        />
        <DeviceCard
          icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/a85f4efd9d2bbb19bebc75eb3fbe503aa64304298620977d9098b49544298507?placeholderIfAbsent=true"
          title="TV"
          usageIcon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/edcedf26d9d29520df76e00147acc079aa12127d070790cc6c44bf6c68c58d60?placeholderIfAbsent=true"
          used={7}
          saved={1}
        />
      </div>

      <div className="grid grid-cols-2 gap-5 mt-7 max-w-[502px]">
        <DeviceCard
          icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/054858d91004c5b39aa9cea54841dc769832629038d1c513467adb5d0d3ed372?placeholderIfAbsent=true"
          title="Spotlights"
          usageIcon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/6fa66841a362a355b8b74a2b34f2ecbf7ea83275279ba5de60a708c16b066385?placeholderIfAbsent=true"
          used={7}
          saved={1}
        />
        <DeviceCard
          icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/041ec748cea2043bb3bd980d8595d2d4f0f61403330683fb97ffc5b2f8378836?placeholderIfAbsent=true"
          title="Camera"
          usageIcon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/3def9583e3e1b4e10273ef88f6c31f25e87025d3e19c8c0650ac72c8df36607a?placeholderIfAbsent=true"
          used={7}
          saved={1}
        />
      </div>
    </section>
  );
};