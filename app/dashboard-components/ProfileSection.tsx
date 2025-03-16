"use client";

import React from "react";

export const ProfileSection: React.FC = () => {
  return (
    <section className="flex flex-col grow items-center px-8 pt-14 pb-5 w-full bg-[#FFFDEE] rounded-[50px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/141d624aa64764dbd3b4950c64b8a5532929dede97a67787f0eb1b370f9b25c8?placeholderIfAbsent=true"
        className="object-contain rounded-full aspect-[1.1] w-[85px]"
        alt="Profile picture"
      />
      <h2 className="mt-6 text-xl font-semibold text-black">Welcome Lelah!</h2>

      <div className="flex flex-col self-stretch px-3.5 py-7 mt-7 bg-[#EEECDE] rounded-[53px]">
        <h3 className="self-start ml-3.5 text-xl font-semibold text-stone-600">
          Energy this week
        </h3>

        <div className="flex overflow-hidden flex-col px-10 pt-10 mt-1.5 w-full bg-[#EEECDE] bg-opacity-70">
          <div className="flex gap-3 items-start text-xs font-bold text-black whitespace-nowrap">
            <div className="flex gap-1.5">
              <div className="flex shrink-0 bg-teal-200 rounded-md h-[15px] w-[15px]" />
              <span>Lights</span>
            </div>
            <div className="flex gap-1.5 leading-tight">
              <div className="flex shrink-0 bg-orange-300 rounded-md h-[15px] w-[15px]" />
              <span>Cooling</span>
            </div>
            <div className="flex gap-1.5">
              <div className="flex shrink-0 bg-indigo-400 rounded-md h-[15px] w-[15px]" />
              <span>Appliances</span>
              <div className="flex shrink-0 bg-green-300 rounded-md h-[15px] w-[15px]" />
              <span>Security</span>
            </div>
          </div>

          <div className="flex self-center mt-16 max-w-full w-[234px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/b597c579158c46db902db5e5df54c1b412b99eee2aa6c0ee073cfed4106a70e5?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-start mt-2 aspect-[0.65] w-[75px]"
              alt="Energy chart"
            />
            <div className="flex flex-col">
              <div className="flex gap-px items-start self-center max-w-full w-[137px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/17a6ad38291da2967ef7f4a30028ca3a247eea0920315c0c6b7f55affa8ef2de?placeholderIfAbsent=true"
                  className="object-contain shrink-0 aspect-[3.42] w-[72px]"
                  alt="Chart detail 1"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/64aacf5873a396d03269014a7f393c6de9d340135f4436aa35356639db08922e?placeholderIfAbsent=true"
                  className="object-contain shrink-0 mt-2 w-16 aspect-[1.18]"
                  alt="Chart detail 2"
                />
              </div>
              <div className="flex z-10 gap-3 font-semibold leading-snug text-zinc-600">
                <div className="flex flex-col items-center self-start mt-2">
                  <p className="self-stretch text-sm">
                    Total usages{" "}
                    <span className="font-extrabold">This Week</span>
                  </p>
                  <p className="text-xl">136.99 kWh</p>
                  <p className="mt-2.5 text-sm text-green-500">Saved 79.38</p>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/8fee39472127cd8b6d0dcf536abe95407531f4fad10d6a25145a55fc3af1524d?placeholderIfAbsent=true"
                  className="object-contain shrink-0 aspect-[0.5] w-[31px]"
                  alt="Energy trend"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};