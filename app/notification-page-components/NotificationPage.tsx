"use client";
import React from "react";
import { Sidebar } from "../Sidebar";
import { NotificationItem } from "./NotificationItem";

export default function Notifications() {
  return (
    <main className="overflow-hidden px-20 py-16 rounded-xl bg-[#EEECDE] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="w-[19%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </aside>

        <section className="ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-2xl font-semibold text-black">
              Notifications
            </h1>

            <div className="mt-6 space-y-10">
              <NotificationItem
                icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/79a32f81ccfaeac65577e07d152b018f695f0eac8173fa091bdd86569ba004c4?placeholderIfAbsent=true"
                title="Device Status Update"
                time="4:35 AM"
                message="Living Room AC Turned ON"
                date="February 8, 2025"
                isNew
              />

              <NotificationItem
                icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/1b638c9d69eb9005cb21f9a78b9fdba7ff8378e0bbeb8fece430450978afaa0d?placeholderIfAbsent=true"
                title="Energy Consumption Alert"
                time="9:00 AM"
                message="Your home consumed 18.5 kWh of electricity yesterday."
                date="February 8, 2025"
                isNew
              />

              <NotificationItem
                icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/ee5722962f23df85818765cd6ee237317f325cc58b0df703d98dca33dde1277f?placeholderIfAbsent=true"
                title="User Activity"
                time="9:05 AM"
                message="Annie Adjusted the Thermostat"
                date="February 8, 2025"
              />

              <NotificationItem
                icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/41dcb21093a3be296c272ffab586f182540c975b11d39bdd78aeb1766137f889?placeholderIfAbsent=true"
                title="Energy Consumption Alert"
                time="4:00PM"
                message="Weekly Energy Usage Summary"
                date="February 8, 2025"
              />

              <NotificationItem
                icon="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/2bc386a5cdb835102ec825a2d94d91fbb489983f7442389721fda3cb2b77e6b3?placeholderIfAbsent=true"
                title="Device Status Update"
                time="7:22 PM"
                message="Living Room Lights Turned OFF"
                date="February 8, 2025"
              />
            </div>

            <button className="self-center px-16 py-6 mt-20 max-w-full text-xl font-semibold text-black rounded-xl border border-solid bg-opacity-50 border-stone-600 w-[319px] max-md:px-5 max-md:mt-10"
                    style={{ backgroundColor: "rgba(217, 217, 217, 0.45)" }}>
              Load More
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}