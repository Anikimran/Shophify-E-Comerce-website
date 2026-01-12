import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

const HeaderIcon = () => {
  return (
    <div className="pl-5">
      <Link href="/favorite">
        <div className="relative inline-block">
          <GrFavorite className="text-2xl" />
          <span className="absolute text-[10px] font-medium -top-2 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </Link>
      <Link href="/cart" className="pl-5">
        <div className="relative inline-block">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute text-[10px] font-medium -top-2 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderIcon;
