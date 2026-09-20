"use client";

import React, { useContext } from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BooksContext } from "@/src/context/BooksContext";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#4338ca",
  "#059669",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToReadPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("BooksContext must be used within BooksContextProvider");
  }

  const { readBooks } = context;

  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-base-200/50 rounded-3xl p-6 sm:p-10 border border-gray-100 flex flex-col items-center justify-center min-h-137.5">
        {chartData.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No books read yet!
            </h3>
            <p className="text-gray-500 mb-6">
              Read books to see your reading progress visualization here.
            </p>
            <Link
              href="/"
              className="btn bg-[#23BE0A] hover:bg-emerald-600 text-white rounded-xl px-6 border-none normal-case"
            >
              Browse Books
            </Link>
          </div>
        ) : (
          <div className="w-full h-112.5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 10,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                />
                <YAxis
                  tick={{ fill: "#6b7280", fontSize: 13 }}
                  label={{
                    value: "Pages",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#6b7280",
                    fontSize: 14,
                  }}
                />
                <Tooltip
                  formatter={(value) => [`${value ?? 0} Pages`, "Total Pages"]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar
                  dataKey="pages"
                  shape={<TriangleBar />}
                  label={{ position: "top", fill: "#374151", fontSize: 12 }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesToReadPage;