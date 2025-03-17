"use client";
import * as React from "react";
import { Sidebar } from "../Sidebar";
import { HomeManagement } from "./HomeManagement";
import { UserSettings } from "./UserSettings";

export default function Settings() {
  const userInitialData = {
    name: "Lelah Nichols",
    email: "l.nichols@hw.ac.uk",
    profilePicture: "https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/141d624aa64764dbd3b4950c64b8a5532929dede97a67787f0eb1b370f9b25c8",
  };

  return (
    <div className="h-screen overflow-hidden px-12 pt-6 pb-4 rounded-xl bg-[#EEECDE]">
      <div className="flex gap-3 h-full">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <main className="w-[82%] flex flex-col h-full">
          <h1 className="text-xl font-semibold text-black mb-4">Settings</h1>
          <div className="flex-1 overflow-auto">
            <div className="space-y-4">
              <UserSettings initialData={userInitialData} />
              <HomeManagement />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}