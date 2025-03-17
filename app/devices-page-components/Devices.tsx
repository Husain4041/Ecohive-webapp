"use client";
import * as React from "react";
import { Sidebar } from "../Sidebar";
import { DeviceList } from "./DeviceList";

export default function Devices() {
  return (
    <main className="h-screen overflow-hidden px-12 pt-6 pb-4 rounded-xl bg-[#EEECDE]">
      <div className="flex gap-3 h-full">
        <aside className="w-[18%]">
          <Sidebar />
        </aside>
        <div className="w-[82%]">
          <DeviceList />
        </div>
      </div>
    </main>
  );
}