"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { toast } from "react-toastify";
import booksData from "@/src/data/booksData.json";
import { IBook } from "@/src/types/books.type";
import { BooksContext } from "@/src/context/BooksContext";

const BookDetailsPage = () => {
  const params = useParams();
  const bookId = params?.bookId as string;

  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("BooksContext must be used within BooksContextProvider");
  }

  const { addToReadList, addToWishlist } = context;

  // bookId অনুযায়ী নির্দিষ্ট বইটি বের করা
  const book = (booksData as IBook[]).find(
    (item) => item.bookId === parseInt(bookId)
  );

  // বইটি পাওয়া না গেলে সরাসরি not-found.tsx পেজ দেখাবে
  if (!book) {
    notFound();
  }

  // Read বাটন হ্যান্ডলার (Context এর মাধ্যমে সেন্ট্রালাইজড হ্যান্ডলিং ও লোকাল স্টোরেজ সিঙ্ক)
  const handleRead = () => {
    const result = addToReadList(book);
    if (result.type === "success") {
      toast.success(result.message);
    } else if (result.type === "warning") {
      toast.warning(result.message);
    }
  };

  // Wishlist বাটন হ্যান্ডলার
  const handleWishlist = () => {
    const result = addToWishlist(book);
    if (result.type === "success") {
      toast.success(result.message);
    } else if (result.type === "warning") {
      toast.warning(result.message);
    } else if (result.type === "error") {
      toast.error(result.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Side: Book Image Box */}
        <div className="lg:col-span-6 bg-gray-100/90 rounded-3xl p-8 sm:p-12 flex items-center justify-center h-full min-h-[550px]">
          <div className="relative w-full max-w-[340px] h-[460px] flex items-center justify-center">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              unoptimized
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Book Details */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 leading-tight">
              {book.bookName}
            </h1>
            <p className="mt-2 text-base text-gray-600 font-medium">
              By : <span className="text-gray-800">{book.author}</span>
            </p>

            <div className="divider my-3"></div>

            <p className="text-gray-700 font-medium text-base">{book.category}</p>

            <div className="divider my-3"></div>

            <p className="text-sm leading-relaxed text-gray-600 text-justify">
              <span className="font-bold text-gray-900">Review : </span>
              {book.review}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-bold text-gray-900 text-sm">Tag</span>
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="divider my-4"></div>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-center">
                <span className="w-36 text-gray-500">Number of Pages:</span>
                <span className="font-bold text-gray-900">{book.totalPages}</span>
              </div>
              <div className="flex items-center">
                <span className="w-36 text-gray-500">Publisher:</span>
                <span className="font-bold text-gray-900">{book.publisher}</span>
              </div>
              <div className="flex items-center">
                <span className="w-36 text-gray-500">Year of Publishing:</span>
                <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
              </div>
              <div className="flex items-center">
                <span className="w-36 text-gray-500">Rating:</span>
                <span className="font-bold text-gray-900">{book.rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handleRead}
              className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:text-black rounded-xl px-7 font-semibold text-sm normal-case"
            >
              Read
            </button>
            <button
              onClick={handleWishlist}
              className="btn bg-[#50B1C9] hover:bg-[#3ea0b8] text-white border-none rounded-xl px-7 font-semibold text-sm normal-case shadow-sm"
            >
              Wishlist
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BookDetailsPage;