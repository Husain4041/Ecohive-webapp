"use client";
import React, { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { Divider } from "./Divider";
import { GoogleSignIn } from "./GoogleSignIn";
import { useRouter } from "next/navigation"; // Import the router

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error messages
  const router = useRouter(); // Initialize the router

  // List of allowed domains
  const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "hw.ac.uk"];

  // Function to validate email format
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      return false;
    }

    // Extract the domain part of the email
    const domain = email.split("@")[1];

    // Check if the domain is in the allowed list
    return allowedDomains.includes(domain);
  };

  // Function to validate password length
  const validatePassword = (password: string) => {
    return password.length >= 8; // Example: Minimum 8 characters
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      // Simulate a successful login for now
      console.log("Login successful!");
      
      // Redirect to the HomeSelection page by going into page.tsx in that folder and returning that page
      router.push("/homes-page-components");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-20 py-44 mx-auto w-full text-base font-semibold text-black bg-amber-50 rounded-xl max-md:px-5 max-md:py-24 max-md:max-w-full"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/f1efaed77249ff9f91e62b82f8efe9f3ca6902a3accdf6a3ce66efc8c3f3b23e?placeholderIfAbsent=true"
        alt="Login Icon"
        className="object-contain self-center aspect-[0.95] w-[89px]"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3.5 py-3.5 mt-16 bg-amber-50 rounded-xl border border-solid border-black border-opacity-0.7 max-md:pr-5 max-md:mt-10 max-md:max-w-full"
        required
      />

      <PasswordInput
        value={password}
        onChange={(value) => setPassword(value)}
      />

      {/* Display error message if validation fails */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        type="button"
        className="self-start mt-3.5 text-sm underline max-md:ml-2.5 cursor-pointer"
      >
        Forgot Password
      </button>

    
        
<button
            type="submit"  onClick={() => router.push('../homes-page-components')}
              className="self-center px-16 py-5 mt-7 max-w-full text-amber-50 rounded-xl w-[238px] max-md:px-5 bg-[#9CAD88] cursor-pointer"
            >
        Sign In
      </button>

      <Divider />

      <GoogleSignIn />
    </form>
  );
};


// "use client";
// import React, { useState } from "react";
// import { PasswordInput } from "./PasswordInput";
// import { Divider } from "./Divider";
// import { GoogleSignIn } from "./GoogleSignIn";

// export const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // New state for error messages

//   // Function to validate email format
//   const validateEmail = (email: string) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   // Function to validate password length
//   const validatePassword = (password: string) => {
//     return password.length >= 8; // Example: Minimum 8 characters
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate email
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Validate password
//     if (!validatePassword(password)) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }

//     setError(""); // Clear any previous errors

//     // TODO: Send login request to the backend
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col px-20 py-44 mx-auto w-full text-base font-semibold text-black bg-amber-50 rounded-xl max-md:px-5 max-md:py-24 max-md:max-w-full"
//     >
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/f1efaed77249ff9f91e62b82f8efe9f3ca6902a3accdf6a3ce66efc8c3f3b23e?placeholderIfAbsent=true"
//         alt="Login Icon"
//         className="object-contain self-center aspect-[0.95] w-[89px]"
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="px-3.5 py-3.5 mt-16 bg-amber-50 rounded-xl border border-solid border-black border-opacity-0.7 max-md:pr-5 max-md:mt-10 max-md:max-w-full"
//         required
//       />

//       <PasswordInput
//         value={password}
//         onChange={(value) => setPassword(value)}
//       />

//       {/* Display error message if validation fails */}
//       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

//       <button
//         type="button"
//         className="self-start mt-3.5 text-sm underline max-md:ml-2.5"
//       >
//         Forgot Password
//       </button>

//       <button
//         type="submit"
//         className="self-center px-16 py-5 mt-7 max-w-full text-amber-50 rounded-xl w-[238px] max-md:px-5 bg-[#9CAD88]"
//       >
//         Sign In
//       </button>

//       <Divider />

//       <GoogleSignIn />
//     </form>
//   );
// };