"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoIcon from "../../assets/book.ico";

const Navbar = () => {
  const pathname = usePathname();

  // মেনু আইটেমগুলো যাতে সহজেই মেইনটেইন করা যায়
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Listed Books", path: "/listed-books" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];

  const renderLinks = (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.path;
        return (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                isActive
                  ? "border border-emerald-500 font-semibold text-emerald-600 bg-emerald-50/50"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      {/* ব্যানারের সাথে হুবহু সমান উইথ ও অ্যালাইনমেন্ট: max-w-6xl */}
      <div className="container mx-auto max-w-6xl px-4">
        {/* px-0 যোগ করে ডানে-বামের বাড়তি প্যাডিং রিসেট করা হয়েছে */}
        <div className="navbar py-3 px-0">
          {/* Navbar Start: মোবাইল ড্রপডাউন ও লোগো */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-2 text-gray-700"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              {/* মোবাইল ড্রপডাউন মেনু */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-52 p-3 shadow-xl border border-base-200 gap-1"
              >
                {renderLinks}
                <div className="divider my-2 lg:hidden"></div>
                <div className="flex flex-col gap-2 sm:hidden">
                  <button className="btn btn-sm btn-success text-white rounded-lg">
                    Sign In
                  </button>
                  <button className="btn btn-sm btn-info text-white rounded-lg">
                    Sign Up
                  </button>
                </div>
              </ul>
            </div>

            {/* লোগো এবং আইকন */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoIcon}
                alt="Book Vibe Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Book <span className="text-emerald-600">Vibe</span>
              </span>
            </Link>
          </div>

          {/* Navbar Center: ডেস্কটপ মেনু */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{renderLinks}</ul>
          </div>

          {/* Navbar End: অ্যাকশন বাটনসমূহ */}
          <div className="navbar-end gap-3">
            <button className="btn btn-success text-white rounded-xl px-5 normal-case font-medium hover:bg-emerald-600 transition-all duration-200 hidden sm:inline-flex">
              Sign In
            </button>
            <button className="btn btn-info text-white rounded-xl px-5 normal-case font-medium hover:bg-sky-500 transition-all duration-200 hidden sm:inline-flex">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;