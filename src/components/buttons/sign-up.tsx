import React from "react";
import { Inter } from "next/font/google";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SignUpButton: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 
        py-2 
        bg-[#661ED3] 
        text-white 
        rounded-full 
        font-medium 
        transition-all 
        duration-300 
        hover:shadow-lg 
        hover:shadow-[#661ED3]/50 
        hover:scale-105
        ${inter.className}
        ${className || ""}
      `}
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
