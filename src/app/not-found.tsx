import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto bg-base-200/50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
        {/* বড় 404 হেডার */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#23BE0A] tracking-widest font-serif drop-shadow-sm">
          404
        </h1>

        <div className="bg-[#23BE0A] px-3 py-1 text-xs text-white uppercase font-bold tracking-wider rounded-md inline-block mt-4">
          Page Not Found
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-6 font-serif">
          Oops! The book or page is missing.
        </h2>

        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* ব্যাক টু হোম বাটন */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn bg-[#23BE0A] hover:bg-emerald-600 text-white border-none rounded-xl px-7 text-sm font-semibold normal-case shadow-md transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/listed-books"
            className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:text-black rounded-xl px-7 text-sm font-semibold normal-case"
          >
            View Listed Books
          </Link>
        </div>
      </div>
    </div>
  );
}