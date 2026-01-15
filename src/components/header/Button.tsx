import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href }: ButtonProps) => {
  return (
    <div>
      {href && (
        <Link href={href}>
          <button
            className={twMerge(
              "bg-[#0C55AA] text-white py-2 px-4 hover:bg-blue-800 cursor-pointer duration-300 rounded-md mt-5",
              className
            )}
          >
            {children}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Button;
