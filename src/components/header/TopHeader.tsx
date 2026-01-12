import React from "react";
import Container from "./Container";
import { FaTruck } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-black text-gray-200 ">
      <Container className="py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <FaTruck size={20} color="yellow" />
          <h1 className="text-white text-base md:text-[16px]">
            TopHeader delevery charge free $570+
          </h1>
        </div>
        <div className="hidden md:flex text-white  ">
          <p className="headerTop">
            English
            <IoChevronDownSharp className="mt-1" />
          </p>
          <p className="headerTop">
            USD
            <IoChevronDownSharp className="mt-1" />
          </p>
          <p className="headerTop">
            Setting
            <IoChevronDownSharp className="mt-1" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
