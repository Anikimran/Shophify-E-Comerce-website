"use client";
import { twMerge } from "tailwind-merge";

const AddToCardButton = () => {
  return (
    <button
      onClick={() => window.alert("click")}
      className={twMerge(
        "bg-[#0C55AA] text-white py-2 px-4 hover:bg-blue-800 cursor-pointer duration-300 rounded-md mt-5"
      )}
    >
      AddToCard
    </button>
  );
};

export default AddToCardButton;
