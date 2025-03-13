import React from "react";

export const Divider: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between items-center mt-16 text-sm max-md:mt-10">
      <div className="shrink-0 self-stretch my-auto h-0.5 border border-black border-solid w-[186px]" />
      <span className="self-stretch">OR</span>
      <div className="shrink-0 self-stretch my-auto h-0.5 border border-black border-solid w-[186px]" />
    </div>
  );
};