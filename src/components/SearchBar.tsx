"use client";

import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative ">
      <input
        type="text"
        value={search}
        placeholder="search.."
        onChange={(e) => setSearch(e.target.value)}
        className="w-[300px] h-full border-2 border-[#0C55AA] px-4 outline-none "
      />
      <span className="absolute w-10 h-10 bg-blue-300 right-0 top-0  flex items-center justify-center  text-white border border-[#0C55AA] outline-none ">
        <IoSearch size={25} />
      </span>
      {search && (
        <IoIosClose
          className="w-9 h-9 absolute top-0 right-10 hover:cursor-pointer hover:cursor-bg-red-200 "
          onClick={() => setSearch("")}
        />
      )}
    </div>
  );
};

export default SearchBar;
