import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../../public/logo";
import SocialLink from "./SocialLink";
import { navigation } from "@/constance";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="py-10 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center ">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={60} height={60} />
            <h1 className="font-bold text-2xl text-blue-400">Shopify</h1>
          </Link>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
            natus commodi totam alias deleniti ducimus vel iure numquam .
          </p>
          <SocialLink />
        </div>
        <div className="py-8 px-10  ">
          <p className="font-bold text-2xl pl-10 mb-5 ">Account</p>
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 px-4 pl-10 py-1 capitalize "
            >
              <GoDotFill />
              {item.tittle}
            </Link>
          ))}
        </div>
        <div>
          <div className="py-8 px-10  ">
            <p className="font-bold text-2xl pl-10 mb-5 ">Information</p>
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-2 px-4 pl-10 py-1 capitalize "
              >
                <GoDotFill />
                {item.tittle}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p className="text-sm mt-5">Got Questions? Call us</p>
          <h3 className="text-lg font-semibold">+670 413 90 762</h3>

          <div className="mt-3 space-y-2">
            <p className="text-base flex items-center gap-x-3 text-gray-600">
              <BsEnvelopeAt />
              shofy@suppert.com
            </p>

            <p className="text-base flex items-center gap-x-3 text-gray-600">
              <GrLocation />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
