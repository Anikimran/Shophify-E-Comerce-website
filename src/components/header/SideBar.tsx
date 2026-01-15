import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { LuEye } from "react-icons/lu";

const SideBar = () => {
  return (
    <div
      className="
        absolute bottom-44 right-2
        flex flex-col text-2xl  p-2 rounded bg-white border border-gray-200      
        translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
        transition-all duration-300 ease-in-out z-40  "
    >
      <button className="p-2 hover:bg-blue-500 hover:text-white rounded-md duration-200 border-b border-gray-100 last:border-none hover:cursor-pointer">
        <FiShoppingCart />
      </button>

      <button className="p-2 hover:bg-blue-500 hover:text-white rounded-md duration-200 border-b border-gray-100 last:border-none hover:cursor-pointer">
        <LuEye />
      </button>

      <button className="p-2 hover:bg-blue-500 hover:text-white rounded-md duration-200 hover:cursor-pointer">
        <GrFavorite />
      </button>
    </div>
  );
};

export default SideBar;
