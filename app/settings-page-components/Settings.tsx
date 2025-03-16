"use client";
import * as React from "react";
import { Sidebar } from "../Sidebar";
import { HomeManagement } from "./HomeManagement";
import { RoomManagement } from "./RoomManagement";

export default function Settings() {
  return (
    <div className="overflow-hidden px-16 py-16 rounded-xl bg-[#EEECDE] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[22%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </div>
        <main className="ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-9 text-black max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-2xl font-semibold">Settings</h1>
            <HomeManagement />
            <RoomManagement />
          </div>
        </main>
      </div>
    </div>
  );
}