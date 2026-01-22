"use client";
import { productType } from "@/index";
import { addToCart } from "@/redux/shopySlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { twMerge } from "tailwind-merge";

interface Props {
  product: productType;
  className?: string;
}

const AddToCardButton = ({ product, className }: Props) => {
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  return (
    <button
      onClick={handleclick}
      className={twMerge(
        "bg-[#0C55AA] text-white py-2 px-4 hover:bg-blue-800 cursor-pointer duration-300 rounded-md mt-5",
        className,
      )}
    >
      AddToCart
    </button>
  );
};

export default AddToCardButton;
