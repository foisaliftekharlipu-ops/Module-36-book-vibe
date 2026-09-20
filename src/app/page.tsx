import React from "react";
import Banner from "@/src/components/homepage/Banner";
import Books from "@/src/components/homepage/Books";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl space-y-16">
      {/* ব্যানার সেকশন */}
      <Banner />

      {/* বইয়ের কার্ড সেকশন */}
      <Books />
    </div>
  );
}