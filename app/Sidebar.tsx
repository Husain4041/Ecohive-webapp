"use client";

import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col py-14 pr-2 pl-5 mx-auto mt-2 w-full text-xl font-bold text-gray-100 bg-[#9CAD88] rounded-[36px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/f1efaed77249ff9f91e62b82f8efe9f3ca6902a3accdf6a3ce66efc8c3f3b23e?placeholderIfAbsent=true"
        className="object-contain self-center aspect-[0.95] w-[89px]"
        alt="Logo"
      />

      <div className="flex gap-5 self-start px-4 py-5 mt-32 text-black whitespace-nowrap rounded-2xl bg-stone-200">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/d41784b79e7ec73bc5778380ee492ce9ec450d557085e658eb4c6ca352f95747?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-11 aspect-[1.29]"
          alt="Dashboard icon"
        />
        <span className="my-auto">Dashboard</span>
      </div>

      <div className="flex gap-5 self-center mt-5 max-w-full whitespace-nowrap w-[143px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/2c7541631d065854511c3a6bfe1d2270a755e61b8e8718bfd56f86e199441f65?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-[1.1] w-[45px]"
          alt="Devices icon"
        />
        <span className="my-auto">Devices</span>
      </div>

      <div className="flex gap-5 self-start mt-8 ml-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/c5884c6b2cbe81931ed2268cdd982770a65d1bfefa2a667e000b3ff1b1507845?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-11 aspect-[1.47]"
          alt="Users icon"
        />
        <span className="my-auto">Users</span>
      </div>

      <div className="flex gap-4 self-center mt-9 max-w-full w-[171px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/87c3745440a29a2520438413124fd0cb8e5dd81b94f5d6ba7d2cd2759c263ca2?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start aspect-[1.1] w-[42px]"
          alt="Energy monitoring icon"
        />
        <span>Energy Monitoring</span>
      </div>

      <div className="flex gap-5 self-start mt-9 ml-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/f9835c6e57f79a07df6e18bdc14a7b1910a250a28737364b4a84f1bcf69919b1?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-[1.03] w-[38px]"
          alt="Notifications icon"
        />
        <span className="my-auto">Notifications</span>
      </div>

      <div className="flex gap-4 self-start py-1.5 pr-px pl-3 mt-6 ml-5 font-medium rounded-xl bg-[#9CAD88] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-stone-600">
        <span>Greenwood Residence</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/14a29b276f9fa7247203d23e3c249148349565fd41cf0e78a817dca439ea1f7a?placeholderIfAbsent=true"
          className="object-contain shrink-0 my-auto aspect-[1.09] w-[35px]"
          alt="Location icon"
        />
      </div>

      <div className="flex gap-5 justify-between self-center mt-5 max-w-full w-[140px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/3353ecd67f6d996bea70e27d460b6654b11ff3a34d80dcf8ca0969bf1cb06c88?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-[1.11] w-[31px]"
          alt="Settings icon"
        />
        <span>Settings</span>
      </div>
    </nav>
  );
};