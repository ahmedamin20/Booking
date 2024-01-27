"use client";
import defaultAPI from "@/app/axiosIstance";
import React, { useRef } from "react";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "@/app/constants/Constants";
import Link from "next/link";

const Login = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if formRef.current is not null before using it
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      try {
        // Await the API call to complete
        const res = await defaultAPI.post("auth/login/dashboard", formData);
        Cookies.set(ACCESS_TOKEN, res.data.data.token);

        // Redirect after successful login
        // router.replace("/home");
        window.location.replace("/");
      } catch (error) {
        // Handle errors here, e.g., show an error message to the user
        console.error("Login failed:", error);
      }
    }
  };
  return (
    <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          تسجيل دخول
        </h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              الحساب{" "}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value="client@admin.com"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                كلمة المرور
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value="client"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full my-4 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              تسجيل دخول
            </button>
          </div>
        </div>
      </form>

      <button
        // href="signup"
        onClick={() => window.location.replace("signup")}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        <p className="mt-10 text-center text-sm text-gray-500">انشاء حساب</p>
      </button>
    </section>
  );
};

export default Login;
