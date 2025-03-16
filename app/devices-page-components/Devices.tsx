"use client";
import * as React from "react";
import { Sidebar } from "../Sidebar";
import { DeviceList } from "./DeviceList";

export default function Devices() {
  return (
    <div className="overflow-hidden px-16 py-16 rounded-xl bg-[#EEECDE] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <DeviceList />
      </div>
    </div>
  );
}