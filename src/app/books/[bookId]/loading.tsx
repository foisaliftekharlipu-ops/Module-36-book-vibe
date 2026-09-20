import React from "react";

export default function BookDetailsLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch animate-pulse">
        {/* বাম পাশের ইমেজ বক্সের স্কেলিটন */}
        <div className="lg:col-span-6 bg-gray-200 rounded-3xl min-h-125 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-[#23BE0A]"></span>
        </div>

        {/* ডান পাশের কনটেন্টের স্কেলিটন */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 py-4">
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded-xl w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded-lg w-1/3"></div>
            <div className="h-px bg-gray-200 my-4"></div>
            <div className="h-5 bg-gray-200 rounded-lg w-1/4"></div>
            <div className="h-px bg-gray-200 my-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="flex gap-2 pt-4">
              <div className="h-8 bg-gray-200 rounded-full w-20"></div>
              <div className="h-8 bg-gray-200 rounded-full w-20"></div>
            </div>
          </div>

          {/* বাটনের স্কেলিটন */}
          <div className="flex gap-4 pt-8">
            <div className="h-12 bg-gray-200 rounded-xl w-28"></div>
            <div className="h-12 bg-gray-200 rounded-xl w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
}