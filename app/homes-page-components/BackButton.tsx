"use client";
import * as React from "react";
import { useRouter } from "next/navigation"; // Import the router

interface BackButtonProps {
  imageUrl: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ imageUrl }) => {

  const router = useRouter(); // Initialize the router

  // function to handle back button click
  const handleBack = () => {
    router.push("/login-page-components"); // Redirect to the login page
  };

  return (
    <button
      className="absolute left-5 top-[27px] max-sm:left-[15px] max-sm:top-[15px] cursor-pointer"
      onClick={handleBack}
      aria-label="Go back"
    >
      <img src={imageUrl} alt="Back" className="h-[70%] w-[70%]" />
    </button>
  );
};
