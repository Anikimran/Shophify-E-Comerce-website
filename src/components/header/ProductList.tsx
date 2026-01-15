import { getData } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideBar from "./SideBar";
import ProductPrice from "./ProductPrice";
import AddToCardButton from "./AddToCardButton";

type productType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  discountPercentage: number;
};
const ProductList = async () => {
  const point = "https://dummyjson.com/products";
  const data = await getData(point);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 relative overflow-hidden group">
      {data?.products?.map((item: productType) => (
        <div
          key={item.id}
          className="border rounded-lg p-2 flex flex-col  shadow-lg relative"
        >
          <Link href={`/product/${item.id}`}>
            <Image
              src={item.images[0]}
              alt={item.title}
              priority
              width={200}
              height={200}
              className="object-cover rounded cursor-pointer"
            />
            <p className="text-md text-yellow-400 absolute top-2 right-2">
              {item.discountPercentage}%
            </p>
          </Link>

          <SideBar />
          <div className="border-t border-t-bg-gray-200 py-2 px-4 flex flex-col h-40 justify-between mt-5">
            <div>
              <p className="text-sm font-medium capitalize ">{item.category}</p>
              <h1 className="mt-2 font-semibold ">{item.title}</h1>
              <ProductPrice item={item} />
            </div>
            <AddToCardButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
