"use client";

import React from "react";

export const RunningDevicesWidget: React.FC = () => {
  return (
    <section className="flex grow leading-snug text-stone-600">
      <div className="flex shrink-0 my-auto bg-stone-200 h-[60px] w-[30px]" />
      <article className="flex overflow-hidden flex-col grow shrink-0 px-4 pt-3 pb-6 basis-0 rounded-[30px] shadow-[0px_4px_120px_rgba(0,0,0,0.25)] w-fit">
        <h2 className="text-xl font-bold">Devices currently running</h2>
        <div className="flex gap-8 items-start self-start mt-6 text-2xl font-semibold whitespace-nowrap">
          <p className="mt-4">100%</p>
          <div className="flex flex-col self-stretch text-3xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/dfbb4a651d7219ee9ca54f9c5a5fec287126a155158bfbec3a19af2c0fffd05b?placeholderIfAbsent=true"
              className="object-contain rounded-full aspect-[1.01] w-[70px]"
              alt="Device status"
            />
            <p className="self-start mt-3 ml-2.5">57%</p>
          </div>
          <p className="mt-4">0%</p>
        </div>
      </article>
    </section>
  );
};