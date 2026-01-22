"use client";
import { stateType } from "@/index";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { useSelector } from "react-redux";

const HeaderIcon = () => {
  const { cart, favorite } = useSelector((state: stateType) => state.shopy);

  return (
    <div className="pl-5 flex items-center gap-5">
      <Link href="/favorite">
        <div className="relative inline-block">
          <GrFavorite className="text-2xl" />
          <span className="absolute text-[10px] font-medium -top-2 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            {favorite?.length > 0 ? favorite?.length : 0}
          </span>
        </div>
      </Link>

      <Link href="/cart">
        <div className="relative inline-block">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute text-[10px] font-medium -top-2 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            {cart?.length > 0 ? cart?.length : 0}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderIcon;
