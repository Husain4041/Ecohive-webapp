"use client";
import * as React from "react";
import { Sidebar } from "../Sidebar";

export default function Settings() {
  return (
    <div className="h-screen overflow-hidden px-12 pt-6 pb-4 rounded-xl bg-[#EEECDE]">
      <div className="flex gap-3 h-full">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <main className="w-[82%] flex flex-col h-full">
          <div className="flex-1 overflow-auto">
            <div className="h-full flex items-center justify-center">
              <h1 className="text-4xl font-semibold text-black">COMING SOON</h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}