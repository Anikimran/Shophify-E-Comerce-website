"use client";
import { productType, props, stateType } from "@/index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductPrice = ({ item }: props) => {
  const { cart } = useSelector((state: stateType) => state.shopy);

  const [existingProduct, setExistingProduct] = useState<productType | null>(
    null,
  );

  // Check if product exists in cart
  useEffect(() => {
    const availableProduct = cart.find((cartItem) => cartItem.id === item.id);
    setExistingProduct(availableProduct ?? null);
  }, [cart, item.id]);

  const price = item.price;
  const discountPrice = price - (price * item.discountPercentage) / 100;

  // Quantity in cart
  const quantity = existingProduct?.quantity ?? 1;

  // Total prices
  const totalPrice = price * quantity;
  const totalDiscountPrice = discountPrice * quantity;

  // Format prices
  const formattedOriginalPrice = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const formattedDiscountPrice = totalDiscountPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="flex items-center gap-2">
      {/* Original Price */}
      <p className="text-sm line-through text-gray-400">
        {formattedOriginalPrice}
      </p>

      {/* Discounted Price */}
      <p className="text-lg font-semibold text-red-500">
        {formattedDiscountPrice}
      </p>

      {/* Quantity */}
    </div>
  );
};

export default ProductPrice;
