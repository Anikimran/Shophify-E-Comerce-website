"use client";
import { productType, stateType } from "@/index";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/shopySlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

interface Props {
  product: productType;
  className?: string;
}

const AddToCardButton = ({ product, className }: Props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: stateType) => state.shopy);

  const [existingProduct, setExistingProduct] = useState<productType | null>(
    null,
  );

  // ✅ cart এ product আছে কিনা check
  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === product.id);

    if (availableProduct) {
      setExistingProduct(availableProduct);
    } else {
      setExistingProduct(null);
    }
  }, [cart, product.id]);

  const handleClick = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center gap-2 pl-5 py-2 mb-2">
          <button
            onClick={() => {
              dispatch(decreaseQuantity(product.id));
              toast.success("Product quantity decreased");
            }}
            disabled={existingProduct.quantity! <= 1}
            className="bg-[#f7f7f7] text-black px-4 py-2 border border-gray-200 rounded-full hover:border-sky-500"
          >
            <FaMinus />
          </button>

          <p className="text-base font-semibold text-center">
            {existingProduct.quantity ?? 1}
          </p>

          <button
            onClick={() => {
              dispatch(increaseQuantity(product.id));
              toast.success("Product quantity increased");
            }}
            className="bg-[#f7f7f7] text-black px-4 py-2 border border-gray-200 rounded-full hover:border-sky-500"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className={twMerge(
            "bg-[#0C55AA] text-white py-2 px-4 hover:bg-blue-800 duration-300 rounded-md mt-5",
            className,
          )}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCardButton;
