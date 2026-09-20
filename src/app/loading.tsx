import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      {/* DaisyUI Loading Bars Animation */}
      <span className="loading loading-bars loading-lg text-[#23BE0A]"></span>
      <p className="text-gray-500 font-medium text-sm animate-pulse">
        Loading books...
      </p>
    </div>
  );
}