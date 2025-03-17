"use client";

import * as React from "react";
import { BackButton } from "./BackButton";
import { HomeCard } from "./HomeCard";
import { AddHomeButton } from "./AddHomeButton";

const HomeSelection: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,800&display=swap"
        rel="stylesheet"
      />
      <main className="relative min-h-screen bg-amber-50 md:overflow-hidden md:px-20 max-md:h-full max-md:overflow-auto]">
        <BackButton imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ba1c679bc4893fa5d27e1c2276cde3abfbf2d424" />
        <section className="flex flex-col items-center justify-center w-full h-[95vh] bg-[#9CAD88] py-16 px-8 mt-5">
          <header className="mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6daff7273a7a6570ce15f7b54d4b9205df11006b"
              alt="Logo"
              className="w-[80px]"
            />
          </header>
          <h1 className="mb-11 text-5xl italic font-extrabold text-amber-50 max-sm:text-4xl max-sm:text-center">
            Select Home
          </h1>
          <div className="flex gap-14 items-center justify-center max-md:flex-col">
            <HomeCard
              name="Greenwood Residence"
              address="123 Eco Street, London, UK"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e0350ad3069d29e5a4cb291bd992d95ce5c43388"
            />
            <AddHomeButton imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/1190f2a15586055b8e7cb4114aaf34e4f9920377" />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeSelection;