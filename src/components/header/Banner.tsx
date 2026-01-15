import React from "react";
import Container from "./Container";
import { banner } from "@/constance";
import Image from "next/image";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#115061] py-20 text-white">
      <Container className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="">
          <p className="text-base font-semibold">{banner.priceText}</p>
          <p className="text-5xl font-bold max-w-[500px]">{banner.title}</p>
          <p className="text-lg font-bold ">
            {banner.textOne}{" "}
            <span className="text-yellow-300 mx-1">{banner.offerPrice}</span>
            {banner.textTwo}
          </p>
          <div>
            <Button
              href={banner.buttonLink}
              className="flex  gap-3 items-center"
            >
              Shop Now
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <Image src={banner.image} alt="banner" priority />
      </Container>
    </div>
  );
};

export default Banner;
