"use client";
import defaultAPI from "@/app/axiosIstance";
import { ACCESS_TOKEN } from "@/app/constants/Constants";
import Link from "next/link";
import Cookies from "js-cookie";
export default function NavBar() {
  return (
    <nav
      className="flex items-center bg-white justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link
          href="/home"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Rest
        </Link>

        <Link
          href="/orders/details"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Orders
        </Link>
        <button
          onClick={() => {
            defaultAPI.post("auth/logout").then(() => {
              Cookies.remove(ACCESS_TOKEN);
              window.location.href = "/auth/login";
            });
          }}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          logout
        </button>
      </div>
    </nav>
  );
}
