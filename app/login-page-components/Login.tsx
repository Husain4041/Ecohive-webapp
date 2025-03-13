"use client";
import * as React from "react";
import { HeroBanner } from "./HeroBanner";
import { LoginForm } from "./LoginForm";

function Login() {
  return (
    <main className="flex overflow-hidden flex-col pt-6 pr-9 pb-16 pl-20 bg-amber-50 max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e97f4b049aa04c0fb59c904d1d337327/f2ddeb628276e91b7c8d99e500f2d36074dccbaaf7d56da5022c6e52f89c53f9?placeholderIfAbsent=true"
        alt="Logo"
        className="object-contain self-end w-10 aspect-square"
      />
      <div className="self-center ml-4 w-full max-w-[1201px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="w-6/12 max-md:ml-0 max-md:w-full">
            <HeroBanner />
          </section>
          <section className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <LoginForm />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;