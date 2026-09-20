import React from "react";
import booksData from "@/src/data/booksData.json";
import { IBook } from "@/src/types/books.type";
import BookCarts from "@/src/components/shared/BookCarts";

const Books = () => {
  const books: IBook[] = booksData as IBook[];

  return (
    <section id="books-section" className="my-12 scroll-mt-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
          Books
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCarts key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

// এই লাইনটি থাকা নিশ্চিত করুন:
export default Books;