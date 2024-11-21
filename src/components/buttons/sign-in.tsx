import React from "react";
import { Inter } from "next/font/google";

interface SignInButtonProps {
  onClick?: () => void;
  className?: string;
}

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SignInButton: React.FC<SignInButtonProps> = ({ onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-8
        text-[#661ED3] 
        cursor-pointer 
        inline-block 
        transition-all 
        duration-300 
        hover:underline 
        hover:underline-offset-4
        ${inter.className}
        ${className || ""}
      `}
    >
      Sign In
    </div>
  );
};

export default SignInButton;
