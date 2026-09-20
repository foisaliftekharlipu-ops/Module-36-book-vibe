import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-green-600 to-teal-700 px-6 py-10 md:px-12 md:py-14 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
            {/* Content */}
            <div className="max-w-xl text-center md:text-left">
              <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                ✨ Discover Your Next Favorite Book
              </span>

              <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Fresh Books.
                <br />
                <span className="text-emerald-100">Fresh Ideas.</span>
              </h2>

              <p className="mb-8 max-w-md text-base leading-7 text-emerald-50 md:text-lg">
                Explore our handpicked collection of inspiring books and refresh
                your bookshelf with stories worth reading.
              </p>

              <button>
                <a
                  href="#books-section"
                  className="btn bg-white hover:bg-gray-100 text-emerald-600 font-bold border-none rounded-xl px-7 text-sm normal-case shadow-md transition-all"
                >
                  View The List →
                </a>
              </button>
            </div>

            {/* Image */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-3xl bg-white/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/hero_img.jpg"
                  alt="Books on a bookshelf"
                  width={420}
                  height={320}
                  priority
                  className="h-auto w-70 rounded-xl object-cover transition-transform duration-500 hover:scale-105 md:w-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
