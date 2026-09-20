"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BooksContext } from "@/src/context/BooksContext";
import { IBook } from "@/src/types/books.type";

const ListedBooksPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("BooksContext must be used within BooksContextProvider");
  }

  const { readBooks, wishlist } = context;

  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");

  const [sortBy, setSortBy] = useState<string>("");

  const currentBooks = activeTab === "read" ? readBooks : wishlist;

  const sortedBooks = [...currentBooks].sort((a: IBook, b: IBook) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.totalPages - a.totalPages;
    if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Banner */}
      <div className="bg-base-200/60 py-8 rounded-3xl text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Books</h2>
      </div>

      {/* Sort By Dropdown */}
      <div className="flex justify-center mb-10">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#23BE0A] hover:bg-emerald-600 text-white px-8 normal-case text-base font-semibold border-none rounded-xl"
          >
            {sortBy ? `Sort By: ${sortBy}` : "Sort By"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-1 menu p-2 shadow-xl bg-base-100 rounded-xl w-52 mt-2 border border-base-200"
          >
            <li>
              <button onClick={() => setSortBy("rating")} className="font-medium hover:text-[#23BE0A]">
                Rating
              </button>
            </li>
            <li>
              <button onClick={() => setSortBy("pages")} className="font-medium hover:text-[#23BE0A]">
                Number of pages
              </button>
            </li>
            <li>
              <button onClick={() => setSortBy("year")} className="font-medium hover:text-[#23BE0A]">
                Publisher year
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => {
            setActiveTab("read");
            setSortBy("");
          }}
          className={`px-6 py-3 font-medium text-base transition-colors duration-200 border-b-2 -mb-0.5 ${
            activeTab === "read"
              ? "border-[#23BE0A] text-[#23BE0A] font-semibold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Read Books ({readBooks.length})
        </button>
        <button
          onClick={() => {
            setActiveTab("wishlist");
            setSortBy("");
          }}
          className={`px-6 py-3 font-medium text-base transition-colors duration-200 border-b-2 -mb-0.5 ${
            activeTab === "wishlist"
              ? "border-[#23BE0A] text-[#23BE0A] font-semibold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Wishlist Books ({wishlist.length})
        </button>
      </div>

      {/* Horizontal Cards List */}
      <div className="flex flex-col gap-6">
        {sortedBooks.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-lg border-2 border-dashed border-gray-200 rounded-3xl">
            No books found in{" "}
            <span className="font-semibold text-gray-700">
              {activeTab === "read" ? "Read list" : "Wishlist"}
            </span>
            .
          </div>
        ) : (
          sortedBooks.map((book) => (
            <div
              key={book.bookId}
              className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-3xl bg-white hover:shadow-lg transition-all duration-200"
            >
              {/* Image Section */}
              <div className="w-full md:w-56 h-60 bg-gray-100/90 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden p-4">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  unoptimized
                  className="object-contain p-2 drop-shadow-md"
                />
              </div>

              {/* Info Section */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-gray-900">{book.bookName}</h3>
                  <p className="mt-2 text-gray-600 font-medium text-sm">
                    By : <span className="text-gray-800">{book.author}</span>
                  </p>

                  {/* Tags & Year */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-sm">Tag</span>
                      {book.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Year of Publishing: {book.yearOfPublishing}
                    </div>
                  </div>

                  {/* Publisher & Pages */}
                  <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-500 text-sm pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Publisher: {book.publisher}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Page {book.totalPages}
                    </div>
                  </div>
                </div>

                {/* Bottom Badges & Button */}
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <span className="bg-[#328EFF]/15 text-[#328EFF] px-4 py-1.5 rounded-full text-xs font-semibold">
                    Category: {book.category}
                  </span>
                  <span className="bg-[#FFAC33]/15 text-[#FFAC33] px-4 py-1.5 rounded-full text-xs font-semibold">
                    Rating: {book.rating}
                  </span>
                  <Link
                    href={`/books/${book.bookId}`}
                    className="btn bg-[#23BE0A] hover:bg-emerald-600 text-white rounded-full px-6 min-h-0 h-10 font-medium text-xs normal-case border-none ml-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListedBooksPage;