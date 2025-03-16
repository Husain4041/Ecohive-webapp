"use client";
import * as React from "react";
import { HeroBanner } from "./HeroBanner";
import { LoginForm } from "./LoginForm";

function Login() {
  return (
    <main className="flex overflow-hidden flex-col pt-6 pr-9 pb-16 pl-20 bg-amber-50 max-md:px-5">
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