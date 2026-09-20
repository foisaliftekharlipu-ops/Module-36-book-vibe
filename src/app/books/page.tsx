import { IBook } from "@/src/types/books.type";
import booksData from "../../data/booksData.json";
import BookCarts from "@/src/components/shared/BookCarts";


const Books = () => {
  return (
    <section className="container mx-auto my-10 max-w-6xl px-4">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Books
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Explore All Books
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {booksData.map((book) => (
          <BookCarts
            key={book.bookId}
            book={{ ...book, title: book.bookName } as IBook}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;