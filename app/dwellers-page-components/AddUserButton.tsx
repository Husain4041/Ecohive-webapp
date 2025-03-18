"use client";

import React, { useState } from 'react';
import { User } from '../types/user';
import { users } from '../data/users';

export const AddUserButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState<Partial<User>>({
    image: "https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/141d624aa64764dbd3b4950c64b8a5532929dede97a67787f0eb1b370f9b25c8",
    role: "dweller",
    energySaved: "0KW"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!newUser.name || !newUser.email) {
      setError('Please fill in all required fields');
      return;
    }
    
    const userToAdd: User = {
      id: (users.length + 1).toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role || "dweller",
      image: "https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/141d624aa64764dbd3b4950c64b8a5532929dede97a67787f0eb1b370f9b25c8",
      energySaved: "0KW"
    };

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToAdd),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add user');
      }

      // Update local users array and close modal
      users.push(userToAdd);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error adding user:', error);
      setError(error instanceof Error ? error.message : 'Failed to add user');
    }
  };


  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-[#9CAD88] text-white rounded-xl hover:bg-[#8b9b78] transition-colors"
      >
        <span>Add User</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-xl font-bold text-stone-600 mb-4">Add New User</h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-600">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-600">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-600">Role</label>
                <select
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as "Home Manager" | "dweller" })}
                  defaultValue="dweller"
                >
                  <option value="dweller">Dweller</option>
                  <option value="Home Manager">Home Manager</option>
                </select>
              </div>

              <div className="flex gap-2 justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#9CAD88] text-white rounded-md hover:bg-[#8b9b78] transition-colors"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};