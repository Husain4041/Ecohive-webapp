import * as React from "react";

interface DeviceTableRowProps {
  name: string;
  type: string;
  status: "ON" | "OFF";
}

export const DeviceTableRow: React.FC<DeviceTableRowProps> = ({
  name,
  type,
  status,
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between px-20 py-5 mt-2 max-w-full text-xl text-black w-[1003px] max-md:px-5 max-md:mr-1" style={{ backgroundColor: "rgba(217, 217, 217, 0.23)" }}>
        <div className="flex gap-10">
          <div className="basis-auto">{name}</div>
          <div>{type}</div>
        </div>
        <div>{status}</div>
      </div>
      <div className="shrink-0 mt-1.5 max-w-full h-px border border-black border-solid w-[1010px] max-md:mr-1" />
    </>
  );
};
