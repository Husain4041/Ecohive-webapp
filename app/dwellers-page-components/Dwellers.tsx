"use client";

import React, { useEffect, useState } from "react";
import { Sidebar } from "../Sidebar";

import { UserCard } from "./UserCard";
import { AddUserButton } from "./AddUserButton";
import { User } from "../types/user";
import { users } from "../data/users";

export default function Dwellers() {
  const [dwellers, setDwellers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDwellers(users);
    setIsLoading(false);
  }, []);

  const homeManagers = dwellers.filter(user => user.role === "Home Manager");
  const residents = dwellers.filter(user => user.role !== "Home Manager");

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="h-screen overflow-hidden px-12 pt-6 pb-4 rounded-xl bg-[#EEECDE]">
      <div className="flex gap-3 h-full">
        <aside className="w-[18%]">
          <Sidebar />
        </aside>

        <section className="w-[82%] flex flex-col h-full">
        <div className="flex justify-between w-full mb-6 mt-4">
                      <h1 className="text-2xl font-semibold text-black">Users</h1>
          
          </div>

          {/* Top Section - Home Managers */}
          <section className="flex-shrink-0">
            <h2 className="text-xl font-bold text-stone-600 mb-4">
              Home Managers
            </h2>
            <div className="grid grid-cols-2 gap-4 w-full">
              {homeManagers.map(user => (
                <UserCard key={user.id} {...user} />
              ))}
            </div>
          </section>

          {/* Bottom Section - Residents */}
          <section className="flex-1 mt-6">
            <h2 className="text-xl font-bold text-stone-600 mb-4">
              Residents
            </h2>
            <div className="grid grid-cols-3 gap-4 w-full">
              {residents.map(user => (
                <UserCard key={user.id} {...user} />
              ))}
            </div>
          </section>

          <div className="flex justify-end mt-auto pb-4">
            <AddUserButton />
          </div>
        </section>
      </div>
    </main>
  );
}