"use client";

import React from "react";

export const RunningDevicesWidget: React.FC = () => {
  return (
    <section className="flex grow leading-snug text-stone-600">
      <div className="flex shrink-0 my-auto bg-stone-200 h-[87px] w-[37px]" />
      <article className="flex overflow-hidden flex-col grow shrink-0 px-6 pt-4 pb-9 basis-0 rounded-[30px] shadow-[0px_4px_120px_rgba(0,0,0,0.25)] w-fit">
        <h2 className="text-2xl font-bold">Devices currently running</h2>
        <div className="flex gap-10 items-start self-start mt-8 text-3xl font-semibold whitespace-nowrap">
          <p className="mt-6">100%</p>
          <div className="flex flex-col self-stretch text-4xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/dfbb4a651d7219ee9ca54f9c5a5fec287126a155158bfbec3a19af2c0fffd05b?placeholderIfAbsent=true"
              className="object-contain rounded-full aspect-[1.01] w-[91px]"
              alt="Device status"
            />
            <p className="self-start mt-4 ml-3.5">57%</p>
          </div>
          <p className="mt-6">0%</p>
        </div>
      </article>
    </section>
  );
};