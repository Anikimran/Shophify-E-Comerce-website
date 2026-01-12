"use client";
import React from "react";
import Container from "./Container";
import { navigation } from "@/constance";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomHeader = () => {
  const pathname = usePathname();
  return (
    <div className="border-b border-bg-gray400 hidden md:block">
      <Container className="flex items-center justify-between py-2">
        <div className="flex items-center md:gap-5 gap-2 capitalize py-3 font-semibold ">
          {navigation?.map((item, index) => (
            <Link
              key={index}
              href={item?.href}
              className={`${pathname === item.href ? "text-red-500" : ""}`}
            >
              <p>{item?.tittle}</p>
            </Link>
          ))}
          <Link
            href="/signin"
            className={pathname === "/signin" ? "text-red-500" : ""}
          >
            {" "}
            signin
          </Link>
        </div>
        <div>
          <p className="font-medium text-gray-400">
            Hotline:<span className="text-black">+8821312171995</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
