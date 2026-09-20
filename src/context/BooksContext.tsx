"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { IBook } from "@/src/types/books.type";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
  addToReadList: (book: IBook) => { success: boolean; message: string; type: "success" | "warning" };
  addToWishlist: (book: IBook) => { success: boolean; message: string; type: "success" | "warning" | "error" };
}

export const BooksContext = createContext<BooksContextType | null>(null);

const BooksContextProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ১. অ্যাপ প্রথমবার মাউন্ট হলে localStorage থেকে ডেটা রিড করা
  useEffect(() => {
    try {
      const storedRead = localStorage.getItem("read-books");
      const storedWishlist = localStorage.getItem("wishlist-books");

      if (storedRead) {
        setReadBooks(JSON.parse(storedRead));
      }
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    } catch (error) {
      console.error("Failed to load books from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // ২. readBooks স্টেট আপডেট হলে localStorage-এ সেভ করা
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("read-books", JSON.stringify(readBooks));
    }
  }, [readBooks, isLoaded]);

  // ৩. wishlist স্টেট আপডেট হলে localStorage-এ সেভ করা
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("wishlist-books", JSON.stringify(wishlist));
    }
  }, [wishlist, isLoaded]);

  // Read লিস্টে যোগ করার লজিক
  const addToReadList = (book: IBook) => {
    const isExist = readBooks.some((b) => b.bookId === book.bookId);

    if (isExist) {
      return {
        success: false,
        message: "You have already marked this book as Read!",
        type: "warning" as const,
      };
    }

    setReadBooks((prev) => [...prev, book]);

    // পড়া হয়ে গেলে উইশলিস্ট থেকে স্বয়ংক্রিয়ভাবে মুছে ফেলা
    setWishlist((prev) => prev.filter((b) => b.bookId !== book.bookId));

    return {
      success: true,
      message: `"${book.bookName}" added to Read list!`,
      type: "success" as const,
    };
  };

  // Wishlist-এ যোগ করার লজিক
  const addToWishlist = (book: IBook) => {
    const isAlreadyRead = readBooks.some((b) => b.bookId === book.bookId);
    const isAlreadyWishlist = wishlist.some((b) => b.bookId === book.bookId);

    if (isAlreadyRead) {
      return {
        success: false,
        message: "You have already read this book, cannot add to Wishlist!",
        type: "error" as const,
      };
    }

    if (isAlreadyWishlist) {
      return {
        success: false,
        message: "This book is already in your Wishlist!",
        type: "warning" as const,
      };
    }

    setWishlist((prev) => [...prev, book]);

    return {
      success: true,
      message: `"${book.bookName}" added to Wishlist!`,
      type: "success" as const,
    };
  };

  const shareData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
    addToReadList,
    addToWishlist,
  };

  return (
    <BooksContext.Provider value={shareData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;