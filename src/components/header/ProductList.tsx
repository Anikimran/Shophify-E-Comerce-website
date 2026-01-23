import { getData } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";
import AddToCardButton from "./AddToCardButton";
import ProductPrice from "./ProductPrice"; // Optional

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
  const product = await getData(point);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 relative overflow-hidden group">
      {product?.products?.map((item: productType) => (
        <div
          key={item.id}
          className="border rounded-lg p-2 flex flex-col shadow-lg relative"
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

          {/* Sidebar: if per product */}
          <SideBar />

          <div className="border-t border-t-gray-200 py-2 px-4 flex flex-col h-40 justify-between mt-5">
            <div>
              <p className="text-sm font-medium capitalize">{item.category}</p>
              <h1 className="mt-2 font-semibold">{item.title}</h1>

              {/* Price component */}
              <ProductPrice item={item} />
            </div>
          </div>

          <AddToCardButton product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
