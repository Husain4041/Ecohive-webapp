import * as React from "react";

export const DeviceTableHeader: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between items-center py-2.5 pr-8 pl-20 mt-9 max-w-full text-xl font-medium text-black whitespace-nowrap rounded-xl w-[1010px] max-md:px-5 max-md:mr-1" style={{ backgroundColor: "rgba(217, 217, 217, 0.36)" }}>
        <div className="self-stretch my-auto">Name</div>
        <div className="self-stretch my-auto">Type</div>
        <div className="self-stretch my-auto">Status</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/67b3449170de35beea46958436b488dfed86894f34f86059b0926c933b938627?placeholderIfAbsent=true"
          alt="Sort"
          className="object-contain shrink-0 self-stretch aspect-square w-[30px]"
        />
      </div>
      <div className="shrink-0 mt-3.5 max-w-full h-px border border-black border-solid w-[1010px] max-md:mr-1" />
    </>
  );
};