"use client"

import { useState } from "react"
import { Eye, EyeOff, Globe } from "lucide-react"
import Image from "next/image"

export default function EcoHiveLogin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex h-screen w-full bg-[#fffdee] items-center justify-center relative">
      {/* Globe icon in top right corner of screen */}
      <div className="absolute flex top-9 right-35">
        <Globe className="h-6 w-6 text-gray-700" />
      </div>

      <div className="flex w-[70%] max-w-5xl h-[90%] overflow-hidden">
        {/* Left Panel - Green with Illustration */}
        <div className="w-1/2 bg-[#9cad88] flex flex-col items-center justify-center p-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Person working at desk"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-20 text-center">
            <h1 className="text-[#fffdee] text-6xl font-bold tracking-wide">Eco Hive</h1>
            <p className="text-[#fffdee]/80 text-xl mt-4 italic">
              Your Home, Smarter. Your Life, <br />
              Simpler. Step into the Future Today!
            </p>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-1/2 bg-[#fffdee] flex flex-col items-center justify-center p-6 relative">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <div className="bg-teal-600 w-16 h-16 flex items-center justify-center rounded-hexagon">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
                  <path d="M12,2L4,7v10l8,5l8-5V7L12,2z M12,6.5l3,1.5l-3,1.5L9,8L12,6.5z M7,10.5l3,1.5v3L7,13.5V10.5z M13,15v-3l3-1.5v3L13,15z" />
                  <path d="M12,10.5l2-1l-2-1l-2,1L12,10.5z M11,12v2l-2-1v-2L11,12z M13,12l2-1v2l-2,1V12z" />
                </svg>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full max-w-[90%] mx-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9cad88] bg-[#fffdee]"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full max-w-[90%] mx-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9cad88] bg-[#fffdee]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#635959]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="text-left">
                <a href="#" className="text-[#000000] text-sm font-medium hover:underline">
                  Forgot Password
                </a>
              </div>
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="w-[50%] py-3 bg-[#9cad88] text-white rounded-md hover:bg-[#9cad88]/90 transition-colors"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-4 text-[#635959]">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google Sign In */}
            <button className="w-full max-w-[90%] mx-auto flex items-center justify-center gap-3 py-3 rounded-md hover:bg-gray-50 transition-colors bg-[#fffdee]">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-[#000000] font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



