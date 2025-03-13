"use client";
import React, { useState } from "react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex gap-5 justify-between px-3.5 py-3.5 mt-2.5 bg-amber-50 rounded-xl border border-solid border-black border-opacity-10 max-md:max-w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-none outline-none w-full"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/2d6ead22941b8cc9eb9946c6bedc35ddeb7c7c139b333d2614e769b94e221f2b?placeholderIfAbsent=true"
          alt=""
          className="object-contain shrink-0 aspect-square w-[25px]"
        />
      </button>
    </div>
  );
};