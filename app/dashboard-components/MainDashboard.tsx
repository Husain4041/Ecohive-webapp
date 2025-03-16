"use client";

import React from "react";
import { Sidebar } from "../Sidebar";
import { DeviceOverview } from "./DeviceOverview";
import { ProfileSection } from "./ProfileSection";
import { RunningDevicesWidget } from "./RunningDevicesWidget";

export const MainDashboard: React.FC = () => {
  return (
    <main className="overflow-hidden px-16 pt-14 pb-6 rounded-xl bg-[#EEECDE]">
      <div className="flex gap-5">
        <aside className="w-[18%]">
          <Sidebar />
        </aside>

        <div className="ml-5 w-[82%]">
          <div className="w-full">
            <div className="ml-7">
              <div className="flex gap-5">
                <div className="w-[55%]">
                  <DeviceOverview />
                </div>
                <div className="ml-5 w-[45%]">
                  <ProfileSection />
                </div>
              </div>
            </div>

            <div className="mt-7 w-full">
              <div className="flex gap-5">
                <div className="w-[41%]">
                  <RunningDevicesWidget />
                </div>
                <div className="ml-5 w-[59%]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/3ebe16eda52fc7460b12d3d5efdaeda3374b0cbdaf898dc6c1938005f4828814?placeholderIfAbsent=true"
                    className="object-contain w-full aspect-[2.45] rounded-[30px]"
                    alt="Energy usage chart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainDashboard;