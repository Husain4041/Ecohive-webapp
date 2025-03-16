"use client";

import React from "react";
import { Sidebar } from "../Sidebar";
import { SearchBar } from "./SearchBar";
import { UserCard } from "./UserCard";
import { AddUserButton } from "./AddUserButton";

export default function Dwellers() {
  return (
    <main className="overflow-hidden py-16 pr-6 pl-16 rounded-xl bg-[#EEECDE] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="w-[18%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </aside>

        <section className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-9 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-stretch pr-14 pl-3.5 w-full max-md:pr-5 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between w-full font-semibold max-md:max-w-full">
                <h1 className="my-auto text-2xl text-black">Users</h1>
                <SearchBar />
              </div>

              <h2 className="self-start mt-12 text-2xl font-bold leading-snug text-stone-600 max-md:mt-10">
                Home Mangers
              </h2>
            </div>

            <div className="mt-7 max-w-full w-[712px]">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <UserCard
                    image="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/91179ffc28a9b1b7e73338673acf1bbdcbffdb8c00713ba4715181f93568ab29?placeholderIfAbsent=true"
                    name="Lelah Nickols"
                    email="l.nickols@hw.ac.uk"
                    role="Home Manager"
                    energySaved="50KW"
                  />
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <UserCard
                    image="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/7d238d1903c3b336c92576d7d2ff71d97ff62aee253482bde77906c94bd73b77?placeholderIfAbsent=true"
                    name="Anne Hathaway"
                    email="a.hathaway@hw.ac.uk"
                    role="Home Manager"
                    energySaved="30KW"
                  />
                </div>
              </div>
            </div>

            <h2 className="ml-3.5 text-2xl font-bold leading-snug text-stone-600 max-md:ml-2.5">
              Residents
            </h2>

            <div className="self-stretch mt-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[33%] max-md:ml-0 max-md:w-full">
                  <UserCard
                    image="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/b4dc4de4aebe2ece8971db6298365d78a16596004bd63dce524d64c3998fea7b?placeholderIfAbsent=true"
                    name="Selma bacha"
                    email="s.bacha@hw.ac.uk"
                    role="Resident"
                    energySaved="10KW"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <UserCard
                    image="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/15e8539d391bd50843eebbdd3575bffc0da7004db6d1fb1dd20388100a50604d?placeholderIfAbsent=true"
                    name="Muhammad Sumbul"
                    email="m.sumbul@hw.ac.uk"
                    role="Resident"
                    energySaved="50KW"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <UserCard
                    image="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/4a8ee7943da59ef9df1435af0dd01141e7c2767bdc76092df1007044098c0175?placeholderIfAbsent=true"
                    name="Robert b. lewis"
                    email="r.lewis@hw.ac.uk"
                    role="Guest"
                    energySaved="60KW"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-between items-start mt-8 w-full max-w-[1016px] max-md:max-w-full">
              <UserCard
                image="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/1fedfc26be055f207594cbfd69e9666f5ca881c50a4d75f9a263650fa0ad99b3?placeholderIfAbsent=true"
                name="Nicolas Jackson"
                email="n.jackson@hw.ac.uk"
                role="Resident"
                energySaved="70KW"
              />
              <AddUserButton />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}