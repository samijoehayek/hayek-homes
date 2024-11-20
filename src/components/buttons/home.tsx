import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const HomeButton = () => {
  return (
    <Link
      href="/"
      className={`text-2xl font-bold hover:text-gray-700 transition-colors duration-200 ${inter.className}`}
    >
      Hayek Homes
    </Link>
  );
};

export default HomeButton;
