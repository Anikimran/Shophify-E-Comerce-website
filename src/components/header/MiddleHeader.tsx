import React from "react";
import Container from "./Container";
import Image from "next/image";
import { logo } from "../../../public/logo";
import SearchBar from "../SearchBar";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import HeaderIcon from "./HeaderIcon";
import MobileNavigation from "./MobileNavigation";

const MiddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-600">
      <Container className="flex items-center justify-between gap-4 md:gap-6 lg:gap-20 py-2">
        <Link href="/">
          {" "}
          <div className="flex gap-1 items-center">
            <Image src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-blue-400 ">Shopify</h1>
          </div>
        </Link>
        <div>
          <SearchBar />
        </div>

        <div className="hidden flex items-center gap-3 md:flex">
          <Link href="/signin" className="flex items-center gap-2 text-sm">
            <div className="border-2 border-gray-700 p-1.5 rounded full">
              <LiaUser className="w-5 h-5" />
            </div>
            <div>
              <p>Hello,Guests</p>
              <p className="font-bold text-xs">Login/Register</p>
            </div>
          </Link>
          <div>
            <HeaderIcon />
          </div>
        </div>
        <MobileNavigation />
      </Container>
    </div>
  );
};

export default MiddleHeader;
