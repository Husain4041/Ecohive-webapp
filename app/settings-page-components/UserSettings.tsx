"use client";

import React, { useState } from "react";

interface UserSettingsProps {
  initialData: {
    name: string;
    email: string;
    profilePicture: string;
  };
}

export const UserSettings: React.FC<UserSettingsProps> = ({ initialData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialData);

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  const handleDeleteAccount = () => {
    // Add delete account logic here
    console.log("Deleting account...");
  };

  return (
    <section className="mt-8 p-6 bg-amber-50 rounded-xl">
      <h2 className="text-xl font-semibold text-black mb-6">User Settings</h2>
      
      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-4">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <button className="px-4 py-2 text-xs font-medium text-black rounded-lg border border-black hover:bg-black hover:text-amber-50 transition-colors">
            Change Picture
          </button>
        </div>

        {/* Name & Email */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-black">Name</p>
              {isEditing ? (
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="mt-1 px-3 py-2 text-sm border border-black rounded-lg focus:outline-none focus:border-black"
                />
              ) : (
                <p className="mt-1 text-sm text-stone-600">{userData.name}</p>
              )}
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs text-black hover:text-gray-800"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-black">Email</p>
              <p className="mt-1 text-sm text-stone-600">{userData.email}</p>
            </div>
            <button className="text-xs text-black hover:text-gray-800">
              Change
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="pt-6 space-y-3 ">
          <button
            onClick={handleDeleteAccount}
            className="w-full px-4 py-2 text-xs font-medium text-red-600 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white transition-colors"
          >
            Delete Account
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-xs font-medium text-black rounded-lg border border-black hover:bg-black hover:text-amber-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};