import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/src/types/books.type";

interface BookCardProps {
  book: IBook;
}

const BookCarts: React.FC<BookCardProps> = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link
      href={`/books/${bookId}`}
      className="border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer"
    >
      {/* ইমেজ কন্টেইনার */}
      <div className="bg-gray-100/80 rounded-2xl py-8 flex items-center justify-center relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={bookName}
          width={130}
          height={170}
          unoptimized
          className="object-contain max-h-44 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />
      </div>

      {/* ট্যাগসমূহ */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-emerald-50 text-emerald-600 px-3.5 py-1 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* বইয়ের নাম ও লেখক */}
      <div className="mt-4 flex-1">
        <h3 className="text-xl font-bold font-serif text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {bookName}
        </h3>
        <p className="text-sm font-medium text-gray-500 mt-2">By : {author}</p>
      </div>

      {/* ক্যাটাগরি ও রেটিং */}
      <div className="mt-5 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-sm text-gray-600 font-medium">
        <span>{category}</span>
        <div className="flex items-center gap-1.5">
          <span>{rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-amber-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BookCarts;