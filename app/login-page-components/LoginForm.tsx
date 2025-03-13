"use client";
import React, { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { Divider } from "./Divider";
import { GoogleSignIn } from "./GoogleSignIn";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
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

      <button
        type="button"
        className="self-start mt-3.5 text-sm underline max-md:ml-2.5"
      >
        Forgot Password
      </button>

      <button
        type="submit"
        className="self-center px-16 py-5 mt-7 max-w-full text-amber-50 rounded-xl w-[238px] max-md:px-5 bg-[#9CAD88]"
      >
        Sign In
      </button>

      <Divider />

      <GoogleSignIn />
    </form>
  );
};