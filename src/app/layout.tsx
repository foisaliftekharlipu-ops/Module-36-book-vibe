import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"; // Toastify-এর স্টাইলশিট
import { ToastContainer } from "react-toastify";
import Navbar from "@/src/components/shared/Navbar";
import BooksContextProvider from "@/src/context/BooksContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Books to freshen up your bookshelf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <BooksContextProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <h2 className="bg-amber-400 text-center py-4 font-semibold">footer</h2>
        </BooksContextProvider>

        {/* গ্লোবাল ToastContainer */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}